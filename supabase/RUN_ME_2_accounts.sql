-- ============================================================================
-- NEXA•EDU: accounts and a first school
--
-- Run this AFTER RUN_ME_all_migrations.sql.
--
-- ---------------------------------------------------------------------------
-- STEP 1, do this in the dashboard first
-- ---------------------------------------------------------------------------
-- Authentication → Users → Add user, and create these six. Tick
-- "Auto confirm user" on each, otherwise sign-in will fail on an unverified
-- address and the screen will just say the password is wrong.
--
--   national@nexaedu.gh      National officer, sees every region
--   district@nexaedu.gh      District officer, sees one district
--   head@nexaedu.gh          Head teacher
--   teacher@nexaedu.gh       Teacher
--   student@nexaedu.gh       Learner
--   parent@nexaedu.gh        Parent
--
-- Use the same password for all six while testing.
--
-- Creating the auth user fires handle_new_user(), which inserts a edu_profiles row
-- with role 'teacher'. Step 2 corrects the role and attaches each account to
-- the right place.
--
-- ---------------------------------------------------------------------------
-- STEP 2, run everything below
-- ---------------------------------------------------------------------------

-- geography -----------------------------------------------------------------

insert into edu_regions (name, code) values ('Central', 'CR')
  on conflict (name) do nothing;

insert into edu_districts (region_id, name, code)
select id, 'Cape Coast Metropolitan', 'CCM' from edu_regions where name = 'Central'
  on conflict (region_id, name) do nothing;

insert into edu_circuits (district_id, name)
select d.id, 'Cape Coast Central' from edu_districts d where d.name = 'Cape Coast Metropolitan'
  on conflict (district_id, name) do nothing;

-- the school ----------------------------------------------------------------

insert into edu_schools (name, ges_code, district_id, circuit_id, school_type, ownership)
select 'Wesley Girls'' Senior High', 'GH-CR-0104',
       d.id, c.id, 'shs', 'public'
from edu_districts d
join edu_circuits c on c.district_id = d.id
where d.name = 'Cape Coast Metropolitan'
  on conflict (ges_code) do nothing;

-- calendar ------------------------------------------------------------------

insert into edu_academic_years (school_id, name, starts_on, ends_on, is_current)
select id, '2026/2027', date '2026-09-01', date '2027-07-31', true
from edu_schools where ges_code = 'GH-CR-0104'
  on conflict (school_id, name) do nothing;

insert into edu_terms (academic_year_id, school_id, term_number, starts_on, ends_on, days_open, is_current)
select ay.id, ay.school_id, 3, date '2027-04-20', date '2027-07-31', 62, true
from edu_academic_years ay
join edu_schools s on s.id = ay.school_id
where s.ges_code = 'GH-CR-0104' and ay.name = '2026/2027'
  on conflict (academic_year_id, term_number) do nothing;

-- edu_subjects ------------------------------------------------------------------

insert into edu_subjects (code, name, level_band, is_core) values
  ('CMATH',   'Core Mathematics',     'shs', true),
  ('EMATH',   'Elective Mathematics', 'shs', false),
  ('ENG',     'English Language',     'shs', true),
  ('PHY',     'Physics',              'shs', false),
  ('CHEM',    'Chemistry',            'shs', false),
  ('BIO',     'Biology',              'shs', false),
  ('SOC',     'Social Studies',       'shs', true)
  on conflict (code) do nothing;

-- edu_classes -------------------------------------------------------------------

insert into edu_classes (school_id, academic_year_id, name, level, stream)
select s.id, ay.id, v.name, v.level, v.stream
from edu_schools s
join edu_academic_years ay on ay.school_id = s.id and ay.is_current
cross join (values
  ('SHS 1 Gold',      'SHS1', 'Gold'),
  ('SHS 1 Silver',    'SHS1', 'Silver'),
  ('SHS 2 Science A', 'SHS2', 'Science A'),
  ('SHS 3 Science B', 'SHS3', 'Science B')
) as v(name, level, stream)
where s.ges_code = 'GH-CR-0104'
  on conflict (school_id, academic_year_id, name) do nothing;

-- roles and placement -------------------------------------------------------
-- Everything below keys off the email addresses from step 1.

update edu_profiles p set
  role       = 'national',
  full_name  = coalesce(nullif(p.full_name, ''), 'National Officer'),
  school_id  = null
where p.email = 'national@nexaedu.gh';

update edu_profiles p set
  role        = 'district_officer',
  full_name   = coalesce(nullif(p.full_name, ''), 'District Officer'),
  district_id = (select id from edu_districts where name = 'Cape Coast Metropolitan'),
  region_id   = (select id from edu_regions where name = 'Central'),
  school_id   = null
where p.email = 'district@nexaedu.gh';

update edu_profiles p set
  role      = 'head_teacher',
  full_name = coalesce(nullif(p.full_name, ''), 'Mr Osei'),
  school_id = (select id from edu_schools where ges_code = 'GH-CR-0104')
where p.email = 'head@nexaedu.gh';

update edu_profiles p set
  role      = 'teacher',
  full_name = coalesce(nullif(p.full_name, ''), 'Mrs Adjei'),
  school_id = (select id from edu_schools where ges_code = 'GH-CR-0104')
where p.email = 'teacher@nexaedu.gh';

update edu_profiles p set
  role      = 'student',
  full_name = coalesce(nullif(p.full_name, ''), 'Ama Mensah'),
  school_id = (select id from edu_schools where ges_code = 'GH-CR-0104')
where p.email = 'student@nexaedu.gh';

update edu_profiles p set
  role      = 'parent',
  full_name = coalesce(nullif(p.full_name, ''), 'Mr Mensah'),
  school_id = (select id from edu_schools where ges_code = 'GH-CR-0104')
where p.email = 'parent@nexaedu.gh';

-- teaching assignments ------------------------------------------------------

insert into edu_class_subjects (school_id, class_id, subject_id, teacher_id)
select c.school_id, c.id, sub.id, p.id
from edu_classes c
join edu_schools s   on s.id = c.school_id and s.ges_code = 'GH-CR-0104'
join edu_subjects sub on sub.code in ('CMATH', 'EMATH')
left join edu_profiles p on p.email = 'teacher@nexaedu.gh'
  on conflict (class_id, subject_id) do nothing;

-- the learner ---------------------------------------------------------------
-- edu_students is deliberately separate from auth.users, so the row exists first
-- and is then linked to the account.

insert into edu_students (school_id, student_code, full_name, gender, user_id)
select s.id, 'EDU-2048-0192', 'Ama Mensah', 'female',
       (select id from edu_profiles where email = 'student@nexaedu.gh')
from edu_schools s where s.ges_code = 'GH-CR-0104'
  on conflict (school_id, student_code) do nothing;

insert into edu_enrolments (school_id, student_id, class_id, academic_year_id, status)
select st.school_id, st.id, c.id, ay.id, 'active'
from edu_students st
join edu_schools s        on s.id = st.school_id and s.ges_code = 'GH-CR-0104'
join edu_classes c        on c.school_id = s.id and c.name = 'SHS 2 Science A'
join edu_academic_years ay on ay.school_id = s.id and ay.is_current
where st.student_code = 'EDU-2048-0192'
  on conflict (student_id, academic_year_id) do nothing;

-- ---------------------------------------------------------------------------
-- Check it worked
-- ---------------------------------------------------------------------------
-- select email, role, school_id from edu_profiles order by role;
-- select name from edu_classes;
-- select full_name, student_code from edu_students;
