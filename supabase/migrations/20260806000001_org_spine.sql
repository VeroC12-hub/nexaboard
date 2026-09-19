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

  insert into public.edu_profiles (id, full_name, email)
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
