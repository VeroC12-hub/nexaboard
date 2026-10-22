-- ============================================================================
-- NexaBoard large class: attendance, courses and certificates of completion
--
-- ADDITIVE ONLY. Creates five new nb_* tables and a handful of functions.
-- It does not alter, drop or re-policy any existing table. sessions and
-- session_participants are only referenced by foreign keys.
--
-- Written for the YE GhIE AutoCAD pilot (100+ learners, 5 weeks, hybrid).
--
-- Why RPCs instead of open insert/update policies:
--   Students are anonymous (no auth.uid()), so a plain policy would have to be
--   "anyone can update any attendance row", which lets one learner edit
--   another's minutes. Instead every student write goes through a SECURITY
--   DEFINER function that only ever stamps the SERVER clock, so a learner can
--   keep a tab open but cannot type in extra minutes. Contact details (email,
--   phone) are readable only by the session's teacher; session_participants
--   is world readable, which is why they are NOT stored there.
--
-- Rollback (if ever needed, nothing else depends on these):
--   drop function if exists nb_attendance_start(uuid), nb_attendance_ping(uuid),
--     nb_attendance_leave(uuid), nb_set_contact(uuid, text, text),
--     nb_issue_certificate(uuid, text, text, text, numeric, integer),
--     nb_revoke_certificate(uuid, text), nb_verify_certificate(text);
--   drop table if exists nb_certificates, nb_attendance, nb_participant_contacts,
--     nb_course_sessions, nb_courses;
-- ============================================================================

-- ---------------------------------------------------------------------------
-- Courses
-- ---------------------------------------------------------------------------
create table if not exists nb_courses (
  id                      uuid primary key default gen_random_uuid(),
  teacher_id              uuid not null references auth.users(id) on delete cascade,
  name                    text not null check (char_length(btrim(name)) between 2 and 200),
  description             text check (description is null or char_length(description) <= 600),
  partner_name            text check (partner_name is null or char_length(partner_name) <= 200),
  partner_logo_url        text check (partner_logo_url is null or char_length(partner_logo_url) <= 1000),
  hours                   numeric(6,1) not null default 0 check (hours >= 0 and hours <= 2000),
  required_attendance_pct integer not null default 80 check (required_attendance_pct between 0 and 100),
  -- e.g. NXC-YE gives codes NXC-YE-0001, NXC-YE-0002 ...
  code_prefix             text not null default 'NXC'
                          check (code_prefix ~ '^[A-Z0-9]{2,10}(-[A-Z0-9]{1,10}){0,2}$'),
  start_date              date,
  end_date                date,
  signatory_name          text check (signatory_name is null or char_length(signatory_name) <= 120),
  signatory_title         text check (signatory_title is null or char_length(signatory_title) <= 120),
  created_at              timestamptz not null default now()
);
create index if not exists nb_courses_teacher_idx on nb_courses(teacher_id);

-- A session belongs to at most one course (session_id is the key).
create table if not exists nb_course_sessions (
  session_id uuid primary key references sessions(id) on delete cascade,
  course_id  uuid not null references nb_courses(id) on delete cascade,
  added_at   timestamptz not null default now()
);
create index if not exists nb_course_sessions_course_idx on nb_course_sessions(course_id);

-- ---------------------------------------------------------------------------
-- Contact details for a participant (optional, used for certificates)
-- ---------------------------------------------------------------------------
create table if not exists nb_participant_contacts (
  participant_id uuid primary key references session_participants(id) on delete cascade,
  session_id     uuid not null references sessions(id) on delete cascade,
  email          text check (email is null or char_length(email) <= 160),
  phone          text check (phone is null or char_length(phone) <= 32),
  updated_at     timestamptz not null default now()
);
create index if not exists nb_participant_contacts_session_idx on nb_participant_contacts(session_id);

-- ---------------------------------------------------------------------------
-- Attendance: one row per continuous stay in a session.
-- Minutes = coalesce(left_at, last_seen_at) - joined_at. The client merges
-- overlapping rows (two tabs) before adding them up.
-- ---------------------------------------------------------------------------
create table if not exists nb_attendance (
  id             uuid primary key default gen_random_uuid(),
  session_id     uuid not null references sessions(id) on delete cascade,
  participant_id uuid not null references session_participants(id) on delete cascade,
  joined_at      timestamptz not null default now(),
  last_seen_at   timestamptz not null default now(),
  left_at        timestamptz
);
create index if not exists nb_attendance_session_idx     on nb_attendance(session_id);
create index if not exists nb_attendance_participant_idx on nb_attendance(participant_id);

-- ---------------------------------------------------------------------------
-- Certificates of completion. Snapshot columns keep a certificate verifiable
-- exactly as issued even if the course is renamed later.
-- ---------------------------------------------------------------------------
create table if not exists nb_certificates (
  id              uuid primary key default gen_random_uuid(),
  code            text not null unique,
  course_id       uuid not null references nb_courses(id) on delete restrict,
  issued_by       uuid not null references auth.users(id) on delete restrict,
  learner_key     text not null,
  learner_name    text not null check (char_length(btrim(learner_name)) between 2 and 160),
  learner_email   text,
  learner_phone   text,
  course_name     text not null,
  partner_name    text,
  hours           numeric(6,1) not null default 0,
  attendance_pct  numeric(5,1),
  minutes         integer,
  issued_at       timestamptz not null default now(),
  revoked_at      timestamptz,
  revoked_reason  text
);
create index if not exists nb_certificates_course_idx on nb_certificates(course_id);
-- One live certificate per learner per course. A revoked one can be reissued.
create unique index if not exists nb_certificates_one_live
  on nb_certificates(course_id, learner_key) where revoked_at is null;

-- ---------------------------------------------------------------------------
-- Row level security
-- ---------------------------------------------------------------------------
alter table nb_courses              enable row level security;
alter table nb_course_sessions      enable row level security;
alter table nb_participant_contacts enable row level security;
alter table nb_attendance           enable row level security;
alter table nb_certificates         enable row level security;

drop policy if exists nb_courses_owner on nb_courses;
create policy nb_courses_owner on nb_courses
  for all to authenticated
  using (teacher_id = auth.uid())
  with check (teacher_id = auth.uid());

drop policy if exists nb_course_sessions_owner on nb_course_sessions;
create policy nb_course_sessions_owner on nb_course_sessions
  for all to authenticated
  using (
    exists (select 1 from nb_courses c where c.id = nb_course_sessions.course_id and c.teacher_id = auth.uid())
  )
  with check (
    exists (select 1 from nb_courses c where c.id = nb_course_sessions.course_id and c.teacher_id = auth.uid())
    and exists (select 1 from sessions s where s.id = nb_course_sessions.session_id and s.teacher_id = auth.uid())
  );

-- Contacts and attendance: the session's teacher reads; nobody writes directly.
drop policy if exists nb_contacts_teacher_read on nb_participant_contacts;
create policy nb_contacts_teacher_read on nb_participant_contacts
  for select to authenticated
  using (exists (select 1 from sessions s where s.id = nb_participant_contacts.session_id and s.teacher_id = auth.uid()));

drop policy if exists nb_attendance_teacher_read on nb_attendance;
create policy nb_attendance_teacher_read on nb_attendance
  for select to authenticated
  using (exists (select 1 from sessions s where s.id = nb_attendance.session_id and s.teacher_id = auth.uid()));

-- Certificates: the issuing teacher reads. Public checks go through
-- nb_verify_certificate(), which answers for one exact code and never lists.
drop policy if exists nb_certificates_owner_read on nb_certificates;
create policy nb_certificates_owner_read on nb_certificates
  for select to authenticated
  using (issued_by = auth.uid());

-- ---------------------------------------------------------------------------
-- Student side functions (anon may call; server clock only)
-- ---------------------------------------------------------------------------

-- Opens a stay for this participant. Closes any of their stays that went quiet
-- (no ping for 3 minutes) at their last ping, so a crashed tab cannot accrue.
create or replace function nb_attendance_start(p_participant uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_session uuid;
  v_id uuid;
begin
  select sp.session_id into v_session
  from session_participants sp
  join sessions s on s.id = sp.session_id
  where sp.id = p_participant and s.status = 'active';

  if v_session is null then
    return null;
  end if;

  update nb_attendance
    set left_at = last_seen_at
    where participant_id = p_participant
      and left_at is null
      and last_seen_at < now() - interval '3 minutes';

  insert into nb_attendance (session_id, participant_id)
  values (v_session, p_participant)
  returning id into v_id;

  return v_id;
end;
$$;

-- Heartbeat. Returns false when the stay is closed or the class has ended, so
-- the client knows to open a fresh stay (laptop woke from sleep, etc).
create or replace function nb_attendance_ping(p_attendance uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  update nb_attendance a
    set last_seen_at = now()
    from sessions s
    where a.id = p_attendance
      and a.left_at is null
      and s.id = a.session_id
      and s.status = 'active'
      and a.last_seen_at >= now() - interval '3 minutes';
  return found;
end;
$$;

create or replace function nb_attendance_leave(p_attendance uuid)
returns void
language sql
security definer
set search_path = public
as $$
  update nb_attendance
    set left_at = least(now(), last_seen_at + interval '3 minutes'),
        last_seen_at = least(now(), last_seen_at + interval '3 minutes')
    where id = p_attendance and left_at is null;
$$;

-- Optional email / phone given at join, for the certificate.
create or replace function nb_set_contact(p_participant uuid, p_email text, p_phone text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_session uuid;
  v_email text := nullif(lower(btrim(coalesce(p_email, ''))), '');
  v_phone text := nullif(regexp_replace(coalesce(p_phone, ''), '[^0-9+]', '', 'g'), '');
begin
  if v_email is not null and (char_length(v_email) > 160 or v_email !~ '^[^\s@]+@[^\s@]+\.[^\s@]+$') then
    raise exception 'invalid email' using errcode = '22023';
  end if;
  if v_phone is not null and char_length(v_phone) not between 7 and 16 then
    raise exception 'invalid phone' using errcode = '22023';
  end if;

  select sp.session_id into v_session
  from session_participants sp
  join sessions s on s.id = sp.session_id
  where sp.id = p_participant and s.status = 'active';
  if v_session is null then
    return;
  end if;

  if v_email is null and v_phone is null then
    delete from nb_participant_contacts where participant_id = p_participant;
    return;
  end if;

  insert into nb_participant_contacts (participant_id, session_id, email, phone, updated_at)
  values (p_participant, v_session, v_email, v_phone, now())
  on conflict (participant_id) do update
    set email = excluded.email, phone = excluded.phone, updated_at = now();
end;
$$;

-- ---------------------------------------------------------------------------
-- Teacher side: issue and revoke
-- ---------------------------------------------------------------------------
create or replace function nb_issue_certificate(
  p_course uuid,
  p_learner_name text,
  p_email text,
  p_phone text,
  p_attendance_pct numeric,
  p_minutes integer
)
returns nb_certificates
language plpgsql
security definer
set search_path = public
as $$
declare
  v_course nb_courses%rowtype;
  v_name text := regexp_replace(btrim(coalesce(p_learner_name, '')), '\s+', ' ', 'g');
  v_email text := nullif(lower(btrim(coalesce(p_email, ''))), '');
  v_phone text := nullif(regexp_replace(coalesce(p_phone, ''), '[^0-9+]', '', 'g'), '');
  v_key text;
  v_next integer;
  v_row nb_certificates%rowtype;
begin
  if auth.uid() is null then
    raise exception 'not signed in' using errcode = '28000';
  end if;

  select * into v_course from nb_courses where id = p_course and teacher_id = auth.uid();
  if not found then
    raise exception 'course not found' using errcode = '42501';
  end if;

  if char_length(v_name) < 2 then
    raise exception 'learner name required' using errcode = '22023';
  end if;

  v_key := coalesce(v_email, v_phone, lower(v_name));

  -- Already has a live certificate: return it rather than minting a second.
  select * into v_row from nb_certificates
    where course_id = p_course and learner_key = v_key and revoked_at is null;
  if found then
    return v_row;
  end if;

  -- Number per prefix, serialised so two teachers issuing at once cannot
  -- collide on the same code.
  perform pg_advisory_xact_lock(hashtext('nb_cert:' || v_course.code_prefix));
  select coalesce(max((regexp_match(code, '-([0-9]+)$'))[1]::integer), 0) + 1
    into v_next
    from nb_certificates
    where code like v_course.code_prefix || '-%'
      and code ~ ('^' || v_course.code_prefix || '-[0-9]+$');

  insert into nb_certificates (
    code, course_id, issued_by, learner_key, learner_name, learner_email, learner_phone,
    course_name, partner_name, hours, attendance_pct, minutes
  ) values (
    v_course.code_prefix || '-' || lpad(v_next::text, 4, '0'),
    p_course, auth.uid(), v_key, v_name, v_email, v_phone,
    v_course.name, v_course.partner_name, v_course.hours,
    round(p_attendance_pct, 1), p_minutes
  )
  returning * into v_row;

  return v_row;
end;
$$;

create or replace function nb_revoke_certificate(p_certificate uuid, p_reason text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update nb_certificates
    set revoked_at = now(), revoked_reason = nullif(btrim(coalesce(p_reason, '')), '')
    where id = p_certificate and issued_by = auth.uid() and revoked_at is null;
  if not found then
    raise exception 'certificate not found' using errcode = '42501';
  end if;
end;
$$;

-- ---------------------------------------------------------------------------
-- Public verification: one exact code in, the facts printed on it out.
-- No email or phone is ever returned.
-- ---------------------------------------------------------------------------
create or replace function nb_verify_certificate(p_code text)
returns table (
  code text,
  learner_name text,
  course_name text,
  partner_name text,
  hours numeric,
  issued_at timestamptz,
  revoked boolean
)
language sql
stable
security definer
set search_path = public
as $$
  select c.code, c.learner_name, c.course_name, c.partner_name, c.hours, c.issued_at,
         c.revoked_at is not null
  from nb_certificates c
  where c.code = upper(btrim(p_code))
  limit 1;
$$;

-- ---------------------------------------------------------------------------
-- Grants
-- ---------------------------------------------------------------------------
revoke all on function nb_attendance_start(uuid)                 from public;
revoke all on function nb_attendance_ping(uuid)                  from public;
revoke all on function nb_attendance_leave(uuid)                 from public;
revoke all on function nb_set_contact(uuid, text, text)          from public;
revoke all on function nb_issue_certificate(uuid, text, text, text, numeric, integer) from public;
revoke all on function nb_revoke_certificate(uuid, text)         from public;
revoke all on function nb_verify_certificate(text)               from public;

grant execute on function nb_attendance_start(uuid)                 to anon, authenticated;
grant execute on function nb_attendance_ping(uuid)                  to anon, authenticated;
grant execute on function nb_attendance_leave(uuid)                 to anon, authenticated;
grant execute on function nb_set_contact(uuid, text, text)          to anon, authenticated;
grant execute on function nb_issue_certificate(uuid, text, text, text, numeric, integer) to authenticated;
grant execute on function nb_revoke_certificate(uuid, text)         to authenticated;
grant execute on function nb_verify_certificate(text)               to anon, authenticated;
