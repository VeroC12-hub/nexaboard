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
