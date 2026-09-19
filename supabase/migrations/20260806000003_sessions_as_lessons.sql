-- ============================================================================
-- NexaBoard Phase A, migration 003: sessions become lessons
--
-- ADDITIVE ONLY. Safe to apply to the running demo.
--
-- This adds the lesson columns, participant identity columns, membership
-- helper functions and the edu_join_session() RPC. It does NOT change any existing
-- policy, so the current anonymous join flow keeps working exactly as it does
-- today and nothing in the client needs to change.
--
-- The RLS lockdown that depends on these helpers lives in 004, which is
-- deliberately held back until after the demonstration. See the header of that
-- file for what is still open until it runs.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- sessions become lessons
--
-- class_id/subject_id/term_id are nullable: a guest demo session has no class,
-- and we keep that path working. When they are set, the board state we already
-- persist in whiteboard_state is automatically that lesson's archived notes.
-- ---------------------------------------------------------------------------

alter table sessions
  add column if not exists school_id       uuid references edu_schools(id) on delete cascade,
  add column if not exists class_id        uuid references edu_classes(id) on delete set null,
  add column if not exists subject_id      uuid references edu_subjects(id) on delete set null,
  add column if not exists term_id         uuid references edu_terms(id) on delete set null,
  add column if not exists lesson_date     date not null default current_date,
  add column if not exists topic           text,
  -- Curriculum indicator codes, e.g. {'B7.1.2.1.3'}. Tagged from the first
  -- lesson so coverage reporting and remediation come free later rather than
  -- requiring a backfill across thousands of untagged rows.
  add column if not exists indicator_codes text[] not null default '{}',
  add column if not exists is_guest        boolean not null default true;

create index if not exists sessions_school_idx on sessions(school_id);
create index if not exists sessions_class_idx  on sessions(class_id);
create index if not exists sessions_date_idx   on sessions(lesson_date);

-- Existing rows predate the spine and have no school. They stay guest sessions.
update sessions set is_guest = true where school_id is null;

-- is_guest must track school_id rather than drift from it. Otherwise a session
-- could be filed to a class while still being treated as an unaffiliated demo,
-- and the staff visibility branch of edu_can_view_session() would be unreachable
-- for it. Safe to validate immediately: every existing row was just normalised
-- by the update above.
alter table sessions drop constraint if exists sessions_guest_consistent;
alter table sessions add constraint sessions_guest_consistent
  check (is_guest = (school_id is null));

-- ---------------------------------------------------------------------------
-- participants gain a real identity
--
-- Nullable, and nothing requires them yet. Guests joining by code today still
-- get a row with user_id null, exactly as before. Once 004 lands, joining goes
-- through edu_join_session() and these are always populated.
-- ---------------------------------------------------------------------------

alter table session_participants
  add column if not exists user_id    uuid references auth.users(id) on delete cascade,
  add column if not exists student_id uuid references edu_students(id) on delete set null;

create index if not exists session_participants_user_idx on session_participants(user_id);

-- One participant row per person per session. Rejoining reuses the row instead
-- of spawning a duplicate, which is what the localStorage juggling in Join.tsx
-- is currently working around. Partial, so today's user_id-null rows are exempt.
create unique index if not exists session_participants_unique_user
  on session_participants(session_id, user_id)
  where user_id is not null;

-- ---------------------------------------------------------------------------
-- membership helpers
--
-- Defined now, used by 004. Creating them early costs nothing and lets the
-- lockdown migration be a pure policy swap when we are ready to run it.
-- ---------------------------------------------------------------------------

create or replace function edu_owns_session(target_session uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from sessions
    where id = target_session and teacher_id = auth.uid()
  )
$$;

create or replace function edu_is_session_participant(target_session uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from session_participants
    where session_id = target_session
      and user_id = auth.uid()
  )
$$;

-- A session is visible to school staff and officers only when it is actually
-- filed to a school. Guest sessions stay private to teacher and participants.
create or replace function edu_can_view_session(target_session uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from sessions s
    where s.id = target_session
      and (
           s.teacher_id = auth.uid()
        or (s.school_id is not null and edu_can_access_school(s.school_id))
      )
  )
  or edu_is_session_participant(target_session)
$$;

-- ---------------------------------------------------------------------------
-- exchange a join code for membership
--
-- SECURITY DEFINER so it can read sessions by code while the caller cannot.
-- Requires a signed-in uid; the client obtains one with signInAnonymously().
--
-- Available from now, but not yet the ONLY way in. The existing direct-insert
-- path still works until 004 removes it.
-- ---------------------------------------------------------------------------

create or replace function edu_join_session(p_code text, p_name text)
returns table (session_id uuid, participant_id uuid, session_title text)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_session sessions%rowtype;
  v_participant uuid;
  v_name text := nullif(btrim(p_name), '');
begin
  if auth.uid() is null then
    raise exception 'not signed in' using errcode = '28000';
  end if;

  if v_name is null then
    raise exception 'name required' using errcode = '22023';
  end if;

  select * into v_session
  from sessions
  where join_code = upper(btrim(p_code))
    and status = 'active';

  if not found then
    -- Deliberately one message for both "no such code" and "ended", so the
    -- function cannot be used to probe which codes exist.
    raise exception 'invalid or expired join code' using errcode = '22023';
  end if;

  select id into v_participant
  from session_participants
  where session_participants.session_id = v_session.id
    and user_id = auth.uid();

  if v_participant is null then
    insert into session_participants (session_id, name, user_id, is_active)
    values (v_session.id, v_name, auth.uid(), true)
    returning id into v_participant;
  else
    update session_participants
      set is_active = true, name = v_name
      where id = v_participant;
  end if;

  return query select v_session.id, v_participant, v_session.title;
end;
$$;

revoke all on function edu_join_session(text, text) from public;
grant execute on function edu_join_session(text, text) to anon, authenticated;
