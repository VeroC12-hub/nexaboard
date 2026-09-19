-- ============================================================================
-- NexaBoard Phase A, migration 001: organisational spine
--
-- Establishes the identity and hierarchy that every later feature hangs off:
--   region > district > circuit > school > academic_year/term > class > enrolment
--
-- Design rule held throughout: every school-scoped table carries school_id
-- directly, even where it is derivable by join. RLS then reduces to a single
-- predicate per table instead of a chain of exists() subqueries, which is both
-- faster and far easier to audit.
-- ============================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- shared helpers
-- ---------------------------------------------------------------------------

create or replace function edu_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

-- Roles are a closed set. Adding one later is a migration, deliberately, so
-- that every RLS policy gets revisited when the role model changes.
do $$
begin
  if not exists (select 1 from pg_type where typname = 'edu_app_role') then
    create type edu_app_role as enum (
      'student',
      'parent',
      'teacher',
      'head_teacher',
      'school_admin',
      'circuit_supervisor',
      'district_officer',
      'regional_officer',
      'national'
    );
  end if;
end
$$;

-- ---------------------------------------------------------------------------
-- geography: GES administrative hierarchy
-- ---------------------------------------------------------------------------

create table if not exists edu_regions (
  id          uuid primary key default gen_random_uuid(),
  name        text not null unique,
  code        text unique,
  created_at  timestamptz not null default now()
);

create table if not exists edu_districts (
  id          uuid primary key default gen_random_uuid(),
  region_id   uuid not null references edu_regions(id) on delete restrict,
  name        text not null,
  code        text,
  created_at  timestamptz not null default now(),
  unique (region_id, name)
);

create table if not exists edu_circuits (
  id           uuid primary key default gen_random_uuid(),
  district_id  uuid not null references edu_districts(id) on delete restrict,
  name         text not null,
  created_at   timestamptz not null default now(),
  unique (district_id, name)
);

-- ---------------------------------------------------------------------------
-- edu_schools
--
-- circuit_id is nullable: private and international edu_schools sit outside the
-- GES circuit structure but still belong to a district for reporting.
-- ---------------------------------------------------------------------------

create table if not exists edu_schools (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  ges_code     text unique,                 -- EMIS school code, null until verified
  district_id  uuid references edu_districts(id) on delete set null,
  circuit_id   uuid references edu_circuits(id) on delete set null,
  school_type  text not null default 'basic'
                 check (school_type in ('kg','primary','jhs','shs','tvet','other')),
  ownership    text not null default 'private'
                 check (ownership in ('public','private','mission','international')),
  address      text,
  phone        text,
  email        text,
  logo_url     text,
  is_active    boolean not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists schools_district_idx on edu_schools(district_id);
create index if not exists schools_circuit_idx  on edu_schools(circuit_id);

drop trigger if exists schools_set_updated_at on edu_schools;
create trigger schools_set_updated_at before update on edu_schools
  for each row execute function edu_set_updated_at();

-- ---------------------------------------------------------------------------
-- edu_profiles: one row per authenticated human
--
-- Officers (circuit/district/regional) have no school_id; their scope comes
-- from circuit_id / district_id / region_id instead. National sees everything.
-- ---------------------------------------------------------------------------

create table if not exists edu_profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  full_name    text not null default '',
  role         edu_app_role not null default 'teacher',
  school_id    uuid references edu_schools(id) on delete set null,
  circuit_id   uuid references edu_circuits(id) on delete set null,
  district_id  uuid references edu_districts(id) on delete set null,
  region_id    uuid references edu_regions(id) on delete set null,
  phone        text,
  email        text,
  avatar_url   text,
  is_active    boolean not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- This project may already carry a edu_profiles table from an earlier starter, in
-- which case the create above is skipped entirely and the columns the RLS
-- helpers depend on would simply not exist. Adding each one explicitly makes
-- the migration correct on a fresh database and on one that already has a
-- partial edu_profiles table, which is the situation on aoanslmovspmjqiqozcq:
-- id, full_name, email and avatar_url are present, role and school_id are not.
alter table edu_profiles
  add column if not exists full_name   text not null default '',
  add column if not exists role        edu_app_role not null default 'teacher',
  add column if not exists school_id   uuid references edu_schools(id) on delete set null,
  add column if not exists circuit_id  uuid references edu_circuits(id) on delete set null,
  add column if not exists district_id uuid references edu_districts(id) on delete set null,
  add column if not exists region_id   uuid references edu_regions(id) on delete set null,
  add column if not exists phone       text,
  add column if not exists email       text,
  add column if not exists avatar_url  text,
  add column if not exists is_active   boolean not null default true,
  add column if not exists created_at  timestamptz not null default now(),
  add column if not exists updated_at  timestamptz not null default now();

create index if not exists profiles_school_idx on edu_profiles(school_id);
create index if not exists profiles_role_idx   on edu_profiles(role);

drop trigger if exists profiles_set_updated_at on edu_profiles;
create trigger profiles_set_updated_at before update on edu_profiles
  for each row execute function edu_set_updated_at();

-- Auto-create a profile whenever an auth user is created, so there is never a
-- signed-in staff user without a profile row (which would make every RLS helper
-- return null and silently deny everything).
--
-- Anonymous users are skipped deliberately. Guests joining a lesson by code are
-- issued anonymous identities in their thousands; giving each one a profile row
-- defaulting to role 'teacher' would both pollute the staff table and make
-- edu_auth_role() lie about who they are. Their membership lives in
-- session_participants instead, and every staff helper correctly returns false
-- for them because they have no profile at all.
create or replace function edu_handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if coalesce(new.is_anonymous, false) then
    return new;
  end if;

  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_edu on auth.users;
create trigger on_auth_user_created_edu
  after insert on auth.users
  for each row execute function edu_handle_new_user();

-- ---------------------------------------------------------------------------
-- academic calendar
-- ---------------------------------------------------------------------------

create table if not exists edu_academic_years (
  id          uuid primary key default gen_random_uuid(),
  school_id   uuid not null references edu_schools(id) on delete cascade,
  name        text not null,                -- '2026/2027'
  starts_on   date,
  ends_on     date,
  is_current  boolean not null default false,
  created_at  timestamptz not null default now(),
  unique (school_id, name)
);

create index if not exists academic_years_school_idx on edu_academic_years(school_id);

-- At most one current year per school.
create unique index if not exists academic_years_one_current
  on edu_academic_years(school_id) where is_current;

create table if not exists edu_terms (
  id                uuid primary key default gen_random_uuid(),
  academic_year_id  uuid not null references edu_academic_years(id) on delete cascade,
  school_id         uuid not null references edu_schools(id) on delete cascade,
  term_number       int  not null check (term_number between 1 and 3),
  starts_on         date,
  ends_on           date,
  days_open         int,                    -- denominator for edu_attendance on reports
  is_current        boolean not null default false,
  created_at        timestamptz not null default now(),
  unique (academic_year_id, term_number)
);

create index if not exists terms_school_idx on edu_terms(school_id);

create unique index if not exists terms_one_current
  on edu_terms(school_id) where is_current;

-- ---------------------------------------------------------------------------
-- edu_subjects: national list, not free text
--
-- Kept global rather than per-school so that curriculum tagging, past
-- questions and district-level comparison all line up across edu_schools.
-- ---------------------------------------------------------------------------

create table if not exists edu_subjects (
  id          uuid primary key default gen_random_uuid(),
  code        text not null unique,         -- 'MATH', 'ENG', 'INT_SCI'
  name        text not null,
  level_band  text not null default 'basic'
                check (level_band in ('kg','primary','jhs','shs','tvet','all')),
  is_core     boolean not null default false,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- edu_classes and teaching assignments
-- ---------------------------------------------------------------------------

create table if not exists edu_classes (
  id                uuid primary key default gen_random_uuid(),
  school_id         uuid not null references edu_schools(id) on delete cascade,
  academic_year_id  uuid not null references edu_academic_years(id) on delete cascade,
  name              text not null,          -- 'Basic 7 Gold'
  level             text,                   -- 'B7', 'SHS2'
  stream            text,                   -- 'Gold', 'Science A'
  class_teacher_id  uuid references edu_profiles(id) on delete set null,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  unique (school_id, academic_year_id, name)
);

create index if not exists classes_school_idx on edu_classes(school_id);
create index if not exists classes_year_idx   on edu_classes(academic_year_id);

drop trigger if exists classes_set_updated_at on edu_classes;
create trigger classes_set_updated_at before update on edu_classes
  for each row execute function edu_set_updated_at();

-- Which subject is taught to which class, by whom.
create table if not exists edu_class_subjects (
  id          uuid primary key default gen_random_uuid(),
  school_id   uuid not null references edu_schools(id) on delete cascade,
  class_id    uuid not null references edu_classes(id) on delete cascade,
  subject_id  uuid not null references edu_subjects(id) on delete restrict,
  teacher_id  uuid references edu_profiles(id) on delete set null,
  created_at  timestamptz not null default now(),
  unique (class_id, subject_id)
);

create index if not exists class_subjects_school_idx  on edu_class_subjects(school_id);
create index if not exists class_subjects_teacher_idx on edu_class_subjects(teacher_id);

-- ---------------------------------------------------------------------------
-- edu_students
--
-- Deliberately decoupled from auth.users. A school bulk-provisions edu_students
-- long before any of them has a login, and a Basic 4 pupil may never have one.
-- user_id is populated later when credentials are issued.
-- ---------------------------------------------------------------------------

create table if not exists edu_students (
  id               uuid primary key default gen_random_uuid(),
  school_id        uuid not null references edu_schools(id) on delete cascade,
  user_id          uuid unique references auth.users(id) on delete set null,
  student_code     text,                    -- school-issued admission number
  ges_learner_id   text,                    -- national learner id, when available
  full_name        text not null,
  date_of_birth    date,
  gender           text check (gender in ('male','female')),
  guardian_name    text,
  guardian_phone   text,
  guardian_user_id uuid references auth.users(id) on delete set null,
  is_active        boolean not null default true,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  unique (school_id, student_code)
);

create index if not exists students_school_idx on edu_students(school_id);
create index if not exists students_user_idx   on edu_students(user_id);

drop trigger if exists students_set_updated_at on edu_students;
create trigger students_set_updated_at before update on edu_students
  for each row execute function edu_set_updated_at();

-- ---------------------------------------------------------------------------
-- enrolment: student in a class for an academic year
-- ---------------------------------------------------------------------------

create table if not exists edu_enrolments (
  id                uuid primary key default gen_random_uuid(),
  school_id         uuid not null references edu_schools(id) on delete cascade,
  student_id        uuid not null references edu_students(id) on delete cascade,
  class_id          uuid not null references edu_classes(id) on delete cascade,
  academic_year_id  uuid not null references edu_academic_years(id) on delete cascade,
  status            text not null default 'active'
                      check (status in ('active','transferred','withdrawn','completed')),
  enrolled_on       date not null default current_date,
  created_at        timestamptz not null default now(),
  -- A student sits in exactly one class per academic year.
  unique (student_id, academic_year_id)
);

create index if not exists enrolments_school_idx on edu_enrolments(school_id);
create index if not exists enrolments_class_idx  on edu_enrolments(class_id);
-- ============================================================================
-- NexaBoard Phase A, migration 002: scope functions and RLS for the spine
--
-- Two rules drive every policy below.
--
-- 1. Staff access is scope-based. edu_can_access_school() answers "may this member
--    of staff or this officer see this school at all", and school-scoped tables
--    then need only that single predicate.
--
-- 2. Student and parent access is NEVER inherited from a school-wide predicate.
--    It is always written out explicitly and always narrow. A pupil being able
--    to read the whole school's roster, including classmates' guardian phone
--    numbers, is exactly the kind of leak that would end this platform.
--
-- All helpers are SECURITY DEFINER so they read edu_profiles with RLS bypassed.
-- Without that, a policy on edu_profiles that calls a helper which selects from
-- edu_profiles recurses infinitely.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- scope helpers
-- ---------------------------------------------------------------------------

create or replace function edu_auth_role()
returns edu_app_role
language sql
stable
security definer
set search_path = public
as $$
  select role from edu_profiles where id = auth.uid() and is_active
$$;

create or replace function edu_auth_school_id()
returns uuid
language sql
stable
security definer
set search_path = public
as $$
  select school_id from edu_profiles where id = auth.uid() and is_active
$$;

-- Staff of the school, or an officer whose administrative scope contains it,
-- or national. Deliberately excludes edu_students and parents.
--
-- The `p.<scope> is not null` guards matter: without them an officer whose
-- region_id was never set would match every school whose district has a null
-- region, which is the default state of half-imported data.
create or replace function edu_can_access_school(target_school uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from edu_profiles p
    join edu_schools s on s.id = target_school
    left join edu_districts d on d.id = s.district_id
    where p.id = auth.uid()
      and p.is_active
      and (
           p.role = 'national'
        or (p.role = 'regional_officer'
              and p.region_id is not null and d.region_id = p.region_id)
        or (p.role = 'district_officer'
              and p.district_id is not null and s.district_id = p.district_id)
        or (p.role = 'circuit_supervisor'
              and p.circuit_id is not null and s.circuit_id = p.circuit_id)
        or (p.role in ('teacher','head_teacher','school_admin')
              and p.school_id = target_school)
      )
  )
$$;

-- Teacher or above, at that specific school. Read/write of teaching data.
create or replace function edu_is_school_staff(target_school uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from edu_profiles p
    where p.id = auth.uid()
      and p.is_active
      and p.school_id = target_school
      and p.role in ('teacher','head_teacher','school_admin')
  )
$$;

-- Administrative write access: school configuration, roster, calendar.
-- A classroom teacher cannot restructure the school.
create or replace function edu_can_manage_school(target_school uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from edu_profiles p
    where p.id = auth.uid()
      and p.is_active
      and (
           p.role = 'national'
        or (p.role in ('head_teacher','school_admin') and p.school_id = target_school)
      )
  )
$$;

create or replace function edu_is_national()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from edu_profiles where id = auth.uid() and is_active and role = 'national'
  )
$$;

-- The signed-in student's own school, or null if the user is not a student.
create or replace function edu_auth_student_school_id()
returns uuid
language sql
stable
security definer
set search_path = public
as $$
  select school_id from edu_students
  where user_id = auth.uid() and is_active
  limit 1
$$;

-- The signed-in student's current class.
create or replace function edu_auth_student_class_id()
returns uuid
language sql
stable
security definer
set search_path = public
as $$
  select e.class_id
  from edu_enrolments e
  join edu_students st       on st.id = e.student_id
  join edu_academic_years ay on ay.id = e.academic_year_id
  where st.user_id = auth.uid()
    and e.status = 'active'
    and ay.is_current
  limit 1
$$;

-- Classes the signed-in teacher is responsible for, as class teacher or as
-- subject teacher. Used by lesson and assessment policies in later migrations.
create or replace function edu_teaches_class(target_class uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from edu_classes c
    where c.id = target_class and c.class_teacher_id = auth.uid()
  )
  or exists (
    select 1 from edu_class_subjects cs
    where cs.class_id = target_class and cs.teacher_id = auth.uid()
  )
$$;

-- ---------------------------------------------------------------------------
-- privilege guard on edu_profiles
--
-- RLS decides which ROWS you may write, never which COLUMNS. Without this
-- trigger the profiles_update_self policy below is a privilege escalation:
-- the row passes the check (it is your own row), so any teacher could simply
-- set their own role to 'national' and gain read access to every school in the
-- country. Column-level control has to come from a trigger.
--
-- The rules encoded here:
--   * national may change anything
--   * a head teacher or school admin may set roles for OTHER staff at their own
--     school, limited to school-level roles, and may not grant officer scope
--   * nobody may promote themselves, including heads
--   * everyone else may edit their name, phone and avatar but not role or scope
-- ---------------------------------------------------------------------------

create or replace function edu_guard_profile_privileges()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  scope_changed boolean := (
       new.role        is distinct from old.role
    or new.school_id   is distinct from old.school_id
    or new.circuit_id  is distinct from old.circuit_id
    or new.district_id is distinct from old.district_id
    or new.region_id   is distinct from old.region_id
  );
begin
  if not scope_changed then
    return new;
  end if;

  if edu_is_national() then
    return new;
  end if;

  -- Self-promotion is never allowed, whatever your role.
  if new.id = auth.uid() then
    raise exception 'cannot change your own role or scope'
      using errcode = '42501';
  end if;

  if edu_can_manage_school(old.school_id)
     and new.role in ('student','teacher','head_teacher','school_admin')
     and new.school_id = old.school_id
     and new.circuit_id  is null
     and new.district_id is null
     and new.region_id   is null
  then
    return new;
  end if;

  raise exception 'insufficient privilege to change role or scope'
    using errcode = '42501';
end;
$$;

drop trigger if exists profiles_guard_privileges on edu_profiles;
create trigger profiles_guard_privileges
  before update on edu_profiles
  for each row execute function edu_guard_profile_privileges();

-- ---------------------------------------------------------------------------
-- enable RLS everywhere
-- ---------------------------------------------------------------------------

alter table edu_regions        enable row level security;
alter table edu_districts      enable row level security;
alter table edu_circuits       enable row level security;
alter table edu_schools        enable row level security;
alter table edu_profiles       enable row level security;
alter table edu_academic_years enable row level security;
alter table edu_terms          enable row level security;
alter table edu_subjects       enable row level security;
alter table edu_classes        enable row level security;
alter table edu_class_subjects enable row level security;
alter table edu_students       enable row level security;
alter table edu_enrolments     enable row level security;

-- ---------------------------------------------------------------------------
-- reference data: readable by any signed-in user, written only by national
-- ---------------------------------------------------------------------------

drop policy if exists regions_read on edu_regions;
create policy regions_read on edu_regions
  for select to authenticated using (true);

drop policy if exists regions_write on edu_regions;
create policy regions_write on edu_regions
  for all to authenticated using (edu_is_national()) with check (edu_is_national());

drop policy if exists districts_read on edu_districts;
create policy districts_read on edu_districts
  for select to authenticated using (true);

drop policy if exists districts_write on edu_districts;
create policy districts_write on edu_districts
  for all to authenticated using (edu_is_national()) with check (edu_is_national());

drop policy if exists circuits_read on edu_circuits;
create policy circuits_read on edu_circuits
  for select to authenticated using (true);

drop policy if exists circuits_write on edu_circuits;
create policy circuits_write on edu_circuits
  for all to authenticated using (edu_is_national()) with check (edu_is_national());

drop policy if exists subjects_read on edu_subjects;
create policy subjects_read on edu_subjects
  for select to authenticated using (true);

drop policy if exists subjects_write on edu_subjects;
create policy subjects_write on edu_subjects
  for all to authenticated using (edu_is_national()) with check (edu_is_national());

-- ---------------------------------------------------------------------------
-- edu_schools
-- ---------------------------------------------------------------------------

drop policy if exists schools_read on edu_schools;
create policy schools_read on edu_schools
  for select to authenticated
  using (
    edu_can_access_school(id)
    or id = edu_auth_student_school_id()
  );

drop policy if exists schools_update on edu_schools;
create policy schools_update on edu_schools
  for update to authenticated
  using (edu_can_manage_school(id))
  with check (edu_can_manage_school(id));

drop policy if exists schools_insert on edu_schools;
create policy schools_insert on edu_schools
  for insert to authenticated
  with check (edu_is_national());

-- ---------------------------------------------------------------------------
-- edu_profiles
--
-- Everyone reads their own row. Staff read colleagues at their school.
-- Students do not read staff rows beyond what the app needs, so this stays
-- narrow: a student sees only themselves here.
-- ---------------------------------------------------------------------------

drop policy if exists profiles_read_self on edu_profiles;
create policy profiles_read_self on edu_profiles
  for select to authenticated using (id = auth.uid());

drop policy if exists profiles_read_colleagues on edu_profiles;
create policy profiles_read_colleagues on edu_profiles
  for select to authenticated
  using (school_id is not null and edu_can_access_school(school_id));

drop policy if exists profiles_update_self on edu_profiles;
create policy profiles_update_self on edu_profiles
  for update to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());

-- Heads and admins manage staff at their own school; national manages anyone.
drop policy if exists profiles_manage on edu_profiles;
create policy profiles_manage on edu_profiles
  for all to authenticated
  using (school_id is not null and edu_can_manage_school(school_id))
  with check (school_id is not null and edu_can_manage_school(school_id));

-- ---------------------------------------------------------------------------
-- academic calendar
-- ---------------------------------------------------------------------------

drop policy if exists academic_years_read on edu_academic_years;
create policy academic_years_read on edu_academic_years
  for select to authenticated
  using (edu_can_access_school(school_id) or school_id = edu_auth_student_school_id());

drop policy if exists academic_years_write on edu_academic_years;
create policy academic_years_write on edu_academic_years
  for all to authenticated
  using (edu_can_manage_school(school_id))
  with check (edu_can_manage_school(school_id));

drop policy if exists terms_read on edu_terms;
create policy terms_read on edu_terms
  for select to authenticated
  using (edu_can_access_school(school_id) or school_id = edu_auth_student_school_id());

drop policy if exists terms_write on edu_terms;
create policy terms_write on edu_terms
  for all to authenticated
  using (edu_can_manage_school(school_id))
  with check (edu_can_manage_school(school_id));

-- ---------------------------------------------------------------------------
-- edu_classes
--
-- A student may read their own class row (to show "Basic 7 Gold" in the UI)
-- but not the rest of the school's edu_classes.
-- ---------------------------------------------------------------------------

drop policy if exists classes_read on edu_classes;
create policy classes_read on edu_classes
  for select to authenticated
  using (edu_can_access_school(school_id) or id = edu_auth_student_class_id());

drop policy if exists classes_write on edu_classes;
create policy classes_write on edu_classes
  for all to authenticated
  using (edu_can_manage_school(school_id))
  with check (edu_can_manage_school(school_id));

drop policy if exists class_subjects_read on edu_class_subjects;
create policy class_subjects_read on edu_class_subjects
  for select to authenticated
  using (edu_can_access_school(school_id) or class_id = edu_auth_student_class_id());

drop policy if exists class_subjects_write on edu_class_subjects;
create policy class_subjects_write on edu_class_subjects
  for all to authenticated
  using (edu_can_manage_school(school_id))
  with check (edu_can_manage_school(school_id));

-- ---------------------------------------------------------------------------
-- edu_students
--
-- The sensitive table. Guardian phone numbers, dates of birth and learner IDs
-- live here, so read access is enumerated one case at a time:
--   the student themselves, their linked guardian, staff at their school,
--   and officers whose scope covers that school.
-- Note there is deliberately no "edu_students in my class can see each other".
-- ---------------------------------------------------------------------------

drop policy if exists students_read_self on edu_students;
create policy students_read_self on edu_students
  for select to authenticated using (user_id = auth.uid());

drop policy if exists students_read_guardian on edu_students;
create policy students_read_guardian on edu_students
  for select to authenticated using (guardian_user_id = auth.uid());

drop policy if exists students_read_staff on edu_students;
create policy students_read_staff on edu_students
  for select to authenticated using (edu_can_access_school(school_id));

drop policy if exists students_write on edu_students;
create policy students_write on edu_students
  for all to authenticated
  using (edu_can_manage_school(school_id))
  with check (edu_can_manage_school(school_id));

-- ---------------------------------------------------------------------------
-- edu_enrolments
-- ---------------------------------------------------------------------------

drop policy if exists enrolments_read_self on edu_enrolments;
create policy enrolments_read_self on edu_enrolments
  for select to authenticated
  using (
    exists (
      select 1 from edu_students st
      where st.id = edu_enrolments.student_id
        and (st.user_id = auth.uid() or st.guardian_user_id = auth.uid())
    )
  );

drop policy if exists enrolments_read_staff on edu_enrolments;
create policy enrolments_read_staff on edu_enrolments
  for select to authenticated using (edu_can_access_school(school_id));

drop policy if exists enrolments_write on edu_enrolments;
create policy enrolments_write on edu_enrolments
  for all to authenticated
  using (edu_can_manage_school(school_id))
  with check (edu_can_manage_school(school_id));
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
-- ============================================================================
-- NexaBoard Phase A, migration 005: curriculum, edu_attendance and assessment
--
-- These three tables are what every ministry-facing number is computed from.
-- Curriculum coverage in particular is the headline metric: "is Basic 8
-- Mathematics in this district actually being taught, and how far behind is
-- it", which is a question the ministry currently cannot answer without a
-- termly paper return.
--
-- Additive. Nothing here changes existing behaviour.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- curriculum indicators
--
-- Ghana's Standards-Based Curriculum nests as
--   Strand > Sub-strand > Content Standard > Indicator
-- and the indicator code encodes the whole path, e.g. B7.1.2.1.3 reads as
-- level B7, strand 1, sub-strand 2, content standard 1, indicator 3.
--
-- Held flat with denormalised parent names rather than as a four-level
-- self-referencing tree. Every query we actually run is "which indicators for
-- this subject and level" or "roll these up by strand", both of which are one
-- scan on a flat table and a recursive CTE on a tree. The hierarchy is fully
-- recoverable from the code, so nothing is lost.
-- ---------------------------------------------------------------------------

create table if not exists edu_curriculum_indicators (
  id                    uuid primary key default gen_random_uuid(),
  subject_id            uuid not null references edu_subjects(id) on delete cascade,
  level                 text not null,          -- 'B7', 'SHS2'
  code                  text not null unique,   -- 'B7.1.2.1.3'
  strand_no             int,
  strand_name           text,
  sub_strand_no         int,
  sub_strand_name       text,
  content_standard_code text,
  content_standard      text,
  indicator_text        text not null,
  -- Which term the curriculum expects this to be taught in. Drives the
  -- "behind schedule" calculation rather than raw percentage complete.
  expected_term         int check (expected_term between 1 and 3),
  created_at            timestamptz not null default now()
);

create index if not exists curriculum_subject_level_idx
  on edu_curriculum_indicators(subject_id, level);
create index if not exists curriculum_term_idx
  on edu_curriculum_indicators(subject_id, level, expected_term);

-- ---------------------------------------------------------------------------
-- edu_attendance
--
-- session_id is nullable and populated automatically when a pupil joins a
-- lesson, so an online class registers itself. A teacher taking a paper
-- register offline records the same rows with session_id null. Both feed the
-- same "days present out of days open" figure on the terminal report.
-- ---------------------------------------------------------------------------

create table if not exists edu_attendance (
  id               uuid primary key default gen_random_uuid(),
  school_id        uuid not null references edu_schools(id) on delete cascade,
  class_id         uuid not null references edu_classes(id) on delete cascade,
  student_id       uuid not null references edu_students(id) on delete cascade,
  term_id          uuid references edu_terms(id) on delete set null,
  session_id       uuid references sessions(id) on delete set null,
  attendance_date  date not null default current_date,
  status           text not null default 'present'
                     check (status in ('present','absent','late','excused')),
  recorded_by      uuid references edu_profiles(id) on delete set null,
  created_at       timestamptz not null default now(),
  -- One authoritative mark per pupil per day. A pupil who joins two lessons in
  -- a day is present once, not twice.
  unique (student_id, attendance_date)
);

create index if not exists attendance_school_idx on edu_attendance(school_id);
create index if not exists attendance_class_date_idx on edu_attendance(class_id, attendance_date);
create index if not exists attendance_term_idx on edu_attendance(term_id);

-- ---------------------------------------------------------------------------
-- edu_assessments
--
-- Covers everything from a class exercise to the end-of-term paper. `weight`
-- lets a school configure its own continuous-assessment split rather than
-- having a national ratio hardcoded, because that ratio is a policy decision
-- that changes and differs between basic and senior high.
-- ---------------------------------------------------------------------------

create table if not exists edu_assessments (
  id              uuid primary key default gen_random_uuid(),
  school_id       uuid not null references edu_schools(id) on delete cascade,
  class_id        uuid not null references edu_classes(id) on delete cascade,
  subject_id      uuid not null references edu_subjects(id) on delete restrict,
  term_id         uuid references edu_terms(id) on delete set null,
  session_id      uuid references sessions(id) on delete set null,
  title           text not null,
  kind            text not null default 'class_exercise'
                    check (kind in ('class_exercise','homework','test','project','exam')),
  max_score       numeric(6,2) not null default 100 check (max_score > 0),
  -- Relative contribution to the continuous-assessment component.
  weight          numeric(5,2) not null default 1 check (weight >= 0),
  assessed_on     date not null default current_date,
  indicator_codes text[] not null default '{}',
  created_by      uuid references edu_profiles(id) on delete set null,
  created_at      timestamptz not null default now()
);

create index if not exists assessments_school_idx on edu_assessments(school_id);
create index if not exists assessments_class_idx  on edu_assessments(class_id, subject_id);
create index if not exists assessments_term_idx   on edu_assessments(term_id);

create table if not exists edu_assessment_scores (
  id             uuid primary key default gen_random_uuid(),
  school_id      uuid not null references edu_schools(id) on delete cascade,
  assessment_id  uuid not null references edu_assessments(id) on delete cascade,
  student_id     uuid not null references edu_students(id) on delete cascade,
  score          numeric(6,2) check (score >= 0),
  remark         text,
  marked_by      uuid references edu_profiles(id) on delete set null,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),
  unique (assessment_id, student_id)
);

create index if not exists assessment_scores_school_idx  on edu_assessment_scores(school_id);
create index if not exists assessment_scores_student_idx on edu_assessment_scores(student_id);

drop trigger if exists assessment_scores_set_updated_at on edu_assessment_scores;
create trigger assessment_scores_set_updated_at before update on edu_assessment_scores
  for each row execute function edu_set_updated_at();

-- A score cannot exceed the assessment it belongs to. Enforced by trigger
-- because a check constraint cannot reach another table.
create or replace function edu_check_score_within_max()
returns trigger
language plpgsql
as $$
declare
  v_max numeric;
begin
  if new.score is null then
    return new;
  end if;
  select max_score into v_max from edu_assessments where id = new.assessment_id;
  if new.score > v_max then
    raise exception 'score % exceeds maximum % for this assessment', new.score, v_max
      using errcode = '23514';
  end if;
  return new;
end;
$$;

drop trigger if exists assessment_scores_within_max on edu_assessment_scores;
create trigger assessment_scores_within_max
  before insert or update on edu_assessment_scores
  for each row execute function edu_check_score_within_max();

-- ---------------------------------------------------------------------------
-- RLS
--
-- Same two rules as migration 002: staff and officers go through
-- edu_can_access_school(); pupils and guardians get narrow, explicit access to
-- their own rows only.
-- ---------------------------------------------------------------------------

alter table edu_curriculum_indicators enable row level security;
alter table edu_attendance            enable row level security;
alter table edu_assessments           enable row level security;
alter table edu_assessment_scores     enable row level security;

-- Curriculum is national reference data.
drop policy if exists curriculum_read on edu_curriculum_indicators;
create policy curriculum_read on edu_curriculum_indicators
  for select to authenticated using (true);

drop policy if exists curriculum_write on edu_curriculum_indicators;
create policy curriculum_write on edu_curriculum_indicators
  for all to authenticated using (edu_is_national()) with check (edu_is_national());

-- edu_attendance -----------------------------------------------------------------

drop policy if exists attendance_read_staff on edu_attendance;
create policy attendance_read_staff on edu_attendance
  for select to authenticated using (edu_can_access_school(school_id));

drop policy if exists attendance_read_self on edu_attendance;
create policy attendance_read_self on edu_attendance
  for select to authenticated
  using (
    exists (
      select 1 from edu_students st
      where st.id = edu_attendance.student_id
        and (st.user_id = auth.uid() or st.guardian_user_id = auth.uid())
    )
  );

-- Class teachers and subject teachers record edu_attendance; heads can correct it.
drop policy if exists attendance_write on edu_attendance;
create policy attendance_write on edu_attendance
  for all to authenticated
  using (edu_teaches_class(class_id) or edu_can_manage_school(school_id))
  with check (edu_teaches_class(class_id) or edu_can_manage_school(school_id));

-- edu_assessments ----------------------------------------------------------------

drop policy if exists assessments_read_staff on edu_assessments;
create policy assessments_read_staff on edu_assessments
  for select to authenticated using (edu_can_access_school(school_id));

-- A pupil sees the edu_assessments set for their own class, so they know what work
-- exists. Scores are governed separately below.
drop policy if exists assessments_read_student on edu_assessments;
create policy assessments_read_student on edu_assessments
  for select to authenticated using (class_id = edu_auth_student_class_id());

drop policy if exists assessments_write on edu_assessments;
create policy assessments_write on edu_assessments
  for all to authenticated
  using (edu_teaches_class(class_id) or edu_can_manage_school(school_id))
  with check (edu_teaches_class(class_id) or edu_can_manage_school(school_id));

-- edu_assessment_scores ----------------------------------------------------------
--
-- Deliberately narrower than edu_assessments. A pupil reads their OWN score only,
-- never a classmate's, so nothing here can be used to reconstruct a class
-- ranking that the school has not chosen to publish.

drop policy if exists assessment_scores_read_staff on edu_assessment_scores;
create policy assessment_scores_read_staff on edu_assessment_scores
  for select to authenticated using (edu_can_access_school(school_id));

drop policy if exists assessment_scores_read_self on edu_assessment_scores;
create policy assessment_scores_read_self on edu_assessment_scores
  for select to authenticated
  using (
    exists (
      select 1 from edu_students st
      where st.id = edu_assessment_scores.student_id
        and (st.user_id = auth.uid() or st.guardian_user_id = auth.uid())
    )
  );

drop policy if exists assessment_scores_write on edu_assessment_scores;
create policy assessment_scores_write on edu_assessment_scores
  for all to authenticated
  using (
    exists (
      select 1 from edu_assessments a
      where a.id = edu_assessment_scores.assessment_id
        and (edu_teaches_class(a.class_id) or edu_can_manage_school(a.school_id))
    )
  )
  with check (
    exists (
      select 1 from edu_assessments a
      where a.id = edu_assessment_scores.assessment_id
        and (edu_teaches_class(a.class_id) or edu_can_manage_school(a.school_id))
    )
  );
-- ============================================================================
-- NexaBoard Phase A, migration 006: rollup views
--
-- Powers the national > region > district > circuit > school > class drill-down.
--
-- ---------------------------------------------------------------------------
-- WHY EVERY VIEW SAYS security_invoker = true
-- ---------------------------------------------------------------------------
--
-- A Postgres view executes with the privileges of the view's OWNER, not the
-- caller. These views are created by the migration role, which owns the
-- underlying tables and is therefore exempt from their RLS policies. A plain
-- view over edu_attendance would hand every caller the edu_attendance of every school
-- in the country, silently, with no policy anywhere looking wrong.
--
-- security_invoker = true (Postgres 15+) makes the view run as the caller, so
-- the policies from migrations 002 and 005 apply normally. A district officer
-- selecting from v_edu_district_summary sees their own edu_districts and nothing else,
-- with no filtering in the view itself and none needed in the client.
--
-- This is the single most important line in the file. If a view is added later
-- without it, the drill-down keeps working and the leak is invisible.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- curriculum coverage, per class and subject
--
-- The taught set is derived from sessions.indicator_codes, matched back against
-- the curriculum rather than counted raw. Matching matters: a typo'd or
-- retired code in a lesson tag would otherwise push coverage above 100% and
-- discredit the whole dashboard in front of the people we least want to
-- discredit it in front of.
-- ---------------------------------------------------------------------------

create or replace view v_edu_class_subject_coverage
with (security_invoker = true) as
select
  cs.school_id,
  cs.class_id,
  cs.subject_id,
  c.level,
  count(distinct ci.code)                                        as indicators_total,
  count(distinct ci.code) filter (where taught.hit is not null)  as indicators_taught,
  -- Due: what the curriculum expected to be covered by the term the school is
  -- currently in. Total alone cannot answer "are they behind", because a class
  -- at 40% in term one is on schedule and a class at 40% in term three is not.
  count(distinct ci.code) filter (
    where t.term_number is not null and ci.expected_term <= t.term_number
  )                                                              as indicators_due,
  count(distinct ci.code) filter (
    where t.term_number is not null
      and ci.expected_term <= t.term_number
      and taught.hit is null
  )                                                              as indicators_behind,
  round(
    100.0 * count(distinct ci.code) filter (where taught.hit is not null)
          / nullif(count(distinct ci.code), 0)
  , 1)                                                           as coverage_pct
from edu_class_subjects cs
join edu_classes c
  on c.id = cs.class_id
left join edu_terms t
  on t.school_id = cs.school_id and t.is_current
left join edu_curriculum_indicators ci
  on ci.subject_id = cs.subject_id
 and ci.level      = c.level
left join lateral (
  select 1 as hit
  from sessions s
  where s.class_id   = cs.class_id
    and s.subject_id = cs.subject_id
    and ci.code = any (s.indicator_codes)
  limit 1
) taught on true
group by cs.school_id, cs.class_id, cs.subject_id, c.level;

-- ---------------------------------------------------------------------------
-- school level, scoped to the school's current term
--
-- Each of these returns exactly one row per school so they can be joined
-- together without fanning out.
-- ---------------------------------------------------------------------------

create or replace view v_edu_school_coverage
with (security_invoker = true) as
select
  s.id                                          as school_id,
  round(avg(cov.coverage_pct), 1)               as coverage_pct,
  coalesce(sum(cov.indicators_behind), 0)       as indicators_behind,
  count(cov.class_id)                           as class_subjects_tracked
from edu_schools s
left join v_edu_class_subject_coverage cov on cov.school_id = s.id
group by s.id;

create or replace view v_edu_school_attendance
with (security_invoker = true) as
select
  s.id                                                             as school_id,
  t.id                                                             as term_id,
  count(a.id)                                                      as marks_recorded,
  count(a.id) filter (where a.status in ('present','late'))        as marks_present,
  round(
    100.0 * count(a.id) filter (where a.status in ('present','late'))
          / nullif(count(a.id), 0)
  , 1)                                                             as attendance_pct
from edu_schools s
left join edu_terms t
  on t.school_id = s.id and t.is_current
left join edu_attendance a
  on a.school_id = s.id and a.term_id = t.id
group by s.id, t.id;

create or replace view v_edu_school_performance
with (security_invoker = true) as
select
  s.id                                                       as school_id,
  t.id                                                       as term_id,
  count(sc.id)                                               as scores_recorded,
  round(avg(100.0 * sc.score / nullif(a.max_score, 0)), 1)   as performance_pct
from edu_schools s
left join edu_terms t
  on t.school_id = s.id and t.is_current
left join edu_assessments a
  on a.school_id = s.id and a.term_id = t.id
left join edu_assessment_scores sc
  on sc.assessment_id = a.id and sc.score is not null
group by s.id, t.id;

-- One row per school, everything the school card on a dashboard needs.
create or replace view v_edu_school_summary
with (security_invoker = true) as
select
  s.id                as school_id,
  s.name              as school_name,
  s.ges_code,
  s.school_type,
  s.ownership,
  s.district_id,
  s.circuit_id,
  d.region_id,
  cov.coverage_pct,
  cov.indicators_behind,
  att.attendance_pct,
  perf.performance_pct,
  (select count(*) from edu_enrolments e
    where e.school_id = s.id and e.status = 'active')       as students_enrolled,
  (select count(*) from edu_profiles p
    where p.school_id = s.id and p.is_active
      and p.role in ('teacher','head_teacher'))             as teachers,
  (select count(*) from sessions ss
    where ss.school_id = s.id)                              as lessons_taught
from edu_schools s
left join edu_districts d          on d.id = s.district_id
left join v_edu_school_coverage cov    on cov.school_id  = s.id
left join v_edu_school_attendance att  on att.school_id  = s.id
left join v_edu_school_performance perf on perf.school_id = s.id
where s.is_active;

-- ---------------------------------------------------------------------------
-- circuit, district, region, national
--
-- Each level averages the level below. Averaging school percentages rather
-- than recomputing from raw rows means a 40-pupil school counts the same as a
-- 900-pupil one, which is the right shape for a supervision dashboard: it
-- surfaces the small struggling school instead of burying it.
-- ---------------------------------------------------------------------------

create or replace view v_edu_circuit_summary
with (security_invoker = true) as
select
  cr.id                                     as circuit_id,
  cr.name                                   as circuit_name,
  cr.district_id,
  count(ss.school_id)                       as schools,
  round(avg(ss.coverage_pct), 1)            as coverage_pct,
  round(avg(ss.attendance_pct), 1)          as attendance_pct,
  round(avg(ss.performance_pct), 1)         as performance_pct,
  coalesce(sum(ss.indicators_behind), 0)    as indicators_behind,
  coalesce(sum(ss.students_enrolled), 0)    as students_enrolled
from edu_circuits cr
left join v_edu_school_summary ss on ss.circuit_id = cr.id
group by cr.id, cr.name, cr.district_id;

create or replace view v_edu_district_summary
with (security_invoker = true) as
select
  d.id                                      as district_id,
  d.name                                    as district_name,
  d.region_id,
  count(ss.school_id)                       as schools,
  round(avg(ss.coverage_pct), 1)            as coverage_pct,
  round(avg(ss.attendance_pct), 1)          as attendance_pct,
  round(avg(ss.performance_pct), 1)         as performance_pct,
  coalesce(sum(ss.indicators_behind), 0)    as indicators_behind,
  coalesce(sum(ss.students_enrolled), 0)    as students_enrolled,
  coalesce(sum(ss.teachers), 0)             as teachers
from edu_districts d
left join v_edu_school_summary ss on ss.district_id = d.id
group by d.id, d.name, d.region_id;

create or replace view v_edu_region_summary
with (security_invoker = true) as
select
  r.id                                      as region_id,
  r.name                                    as region_name,
  count(distinct ds.district_id)            as districts,
  coalesce(sum(ds.schools), 0)              as schools,
  round(avg(ds.coverage_pct), 1)            as coverage_pct,
  round(avg(ds.attendance_pct), 1)          as attendance_pct,
  round(avg(ds.performance_pct), 1)         as performance_pct,
  coalesce(sum(ds.indicators_behind), 0)    as indicators_behind,
  coalesce(sum(ds.students_enrolled), 0)    as students_enrolled,
  coalesce(sum(ds.teachers), 0)             as teachers
from edu_regions r
left join v_edu_district_summary ds on ds.region_id = r.id
group by r.id, r.name;

create or replace view v_edu_national_summary
with (security_invoker = true) as
select
  count(distinct rs.region_id)              as regions,
  coalesce(sum(rs.districts), 0)            as districts,
  coalesce(sum(rs.schools), 0)              as schools,
  round(avg(rs.coverage_pct), 1)            as coverage_pct,
  round(avg(rs.attendance_pct), 1)          as attendance_pct,
  round(avg(rs.performance_pct), 1)         as performance_pct,
  coalesce(sum(rs.indicators_behind), 0)    as indicators_behind,
  coalesce(sum(rs.students_enrolled), 0)    as students_enrolled,
  coalesce(sum(rs.teachers), 0)             as teachers
from v_edu_region_summary rs;

-- ---------------------------------------------------------------------------
-- behind-schedule detail
--
-- The question a circuit supervisor actually asks: not "what is coverage" but
-- "which edu_classes are behind, and on what". Lists indicators the curriculum
-- expected by the current term that no lesson has yet been tagged with.
-- ---------------------------------------------------------------------------

create or replace view v_edu_uncovered_indicators
with (security_invoker = true) as
select
  cs.school_id,
  cs.class_id,
  c.name            as class_name,
  cs.subject_id,
  sub.name          as subject_name,
  ci.code           as indicator_code,
  ci.strand_name,
  ci.indicator_text,
  ci.expected_term
from edu_class_subjects cs
join edu_classes  c   on c.id  = cs.class_id
join edu_subjects sub on sub.id = cs.subject_id
join edu_terms    t   on t.school_id = cs.school_id and t.is_current
join edu_curriculum_indicators ci
  on ci.subject_id = cs.subject_id
 and ci.level      = c.level
 and ci.expected_term <= t.term_number
where not exists (
  select 1
  from sessions s
  where s.class_id   = cs.class_id
    and s.subject_id = cs.subject_id
    and ci.code = any (s.indicator_codes)
);

-- ---------------------------------------------------------------------------
-- grants
--
-- RLS still governs what comes back; these grants only make the views callable.
-- ---------------------------------------------------------------------------

grant select on
  v_edu_class_subject_coverage,
  v_edu_school_coverage,
  v_edu_school_attendance,
  v_edu_school_performance,
  v_edu_school_summary,
  v_edu_circuit_summary,
  v_edu_district_summary,
  v_edu_region_summary,
  v_edu_national_summary,
  v_edu_uncovered_indicators
to authenticated;
