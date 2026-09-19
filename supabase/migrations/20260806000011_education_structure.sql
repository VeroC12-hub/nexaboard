-- ============================================================================
-- STAGE ONE, part 1: the education structure.
--
-- Systems, stages, levels, examinations and period patterns.
--
-- This is configuration, not code. Ghana's structure is seeded below, but
-- nothing in the platform may assume it: a ministry changing an examination
-- rule, renaming a level, or introducing a new pathway must be a row change,
-- not a deploy. Every later module reads these tables and never hard-codes a
-- level, a label, an examination or a terminology choice.
--
-- Codes are stable and permanent. Display names are separate and translatable,
-- because a learner record written in 2026 must still mean the same thing in
-- 2046 regardless of what the level is called by then.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- education systems
-- ---------------------------------------------------------------------------

create table if not exists edu_systems (
  code        text primary key,              -- 'BASIC', 'TVET', 'TERTIARY'
  name        text not null,
  authority   text,                          -- GES, CTVET, GTEC
  sort_order  int  not null default 0,
  is_active   boolean not null default true,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- stages within a system
--
-- Separate from system because one system can span stages that behave
-- differently: Basic Education contains both early primary and upper primary,
-- which share rules but not terminology.
-- ---------------------------------------------------------------------------

create table if not exists edu_stages (
  code        text primary key,
  system_code text not null references edu_systems(code) on delete cascade,
  name        text not null,
  sort_order  int  not null default 0
);

-- ---------------------------------------------------------------------------
-- examinations
-- ---------------------------------------------------------------------------

create table if not exists edu_examinations (
  code       text primary key,               -- 'BECE', 'WASSCE', 'NVTI'
  name       text not null,
  authority  text,                           -- WAEC, NVTI
  is_active  boolean not null default true
);

-- ---------------------------------------------------------------------------
-- period patterns
--
-- A school year is not universally three terms. Universities run semesters,
-- some providers run rolling module blocks. The pattern belongs to the system,
-- so nothing downstream may assume "term 1 of 3".
-- ---------------------------------------------------------------------------

create table if not exists edu_period_patterns (
  code            text primary key,          -- 'TERM_3', 'SEMESTER_2', 'ROLLING'
  name            text not null,
  periods_per_year int,                      -- null when rolling
  period_noun     text not null default 'Term'
);

-- ---------------------------------------------------------------------------
-- levels
--
-- The central configuration row. Everything the platform needs to know about
-- how to behave for a learner at this level is here, so that a screen asks
-- "what is this learner's work called" rather than deciding for itself.
-- ---------------------------------------------------------------------------

create table if not exists edu_levels (
  code             text primary key,         -- 'JHS_3', 'TVET_2', 'UNI_YEAR_1'
  system_code      text not null references edu_systems(code) on delete cascade,
  stage_code       text references edu_stages(code) on delete set null,
  sort_order       int  not null default 0,

  -- what a learner belongs to alongside peers
  group_type       text not null default 'CLASS'
                     check (group_type in ('CLASS','STREAM','TRADE','PROGRAMME','COHORT','COURSE','DEPARTMENT')),

  -- what their work is called
  primary_work     text not null default 'ASSIGNMENTS'
                     check (primary_work in ('ACTIVITIES','CLASSWORK','ASSIGNMENTS','COURSEWORK','COMPETENCIES','PRACTICAL_TASKS','MODULES')),
  secondary_work   text
                     check (secondary_work in ('ACTIVITIES','CLASSWORK','ASSIGNMENTS','COURSEWORK','COMPETENCIES','PRACTICAL_TASKS','MODULES')),

  -- how learning is judged; not a single numeric score everywhere
  assessment_model text not null default 'SCHOOL_ASSESSMENT'
                     check (assessment_model in ('DEVELOPMENTAL','SCHOOL_ASSESSMENT','CONTINUOUS','COMPETENCY','ACADEMIC_CREDIT')),

  examination_code text references edu_examinations(code) on delete set null,
  -- true only in the year the examination is actually sat
  exam_imminent    boolean not null default false,

  progression      text not null default 'AUTOMATIC'
                     check (progression in ('AUTOMATIC','EXAM_GATED','CREDIT_BASED','COMPETENCY_BASED','CONTINUOUS')),

  period_pattern   text references edu_period_patterns(code) on delete set null,
  age_band         text check (age_band in ('EARLY','CHILD','ADOLESCENT','YOUNG_ADULT','ADULT')),

  -- Ranking is policy, never a product decision. Held as configuration so an
  -- institution or ministry can turn it on or off without a screen changing.
  ranking_enabled     boolean not null default false,
  ranking_visibility  text not null default 'HIDDEN'
                        check (ranking_visibility in ('HIDDEN','LEARNER','GUARDIAN','STAFF_ONLY')),
  ranking_scope       text not null default 'NONE'
                        check (ranking_scope in ('CLASS','COHORT','SUBJECT','NONE')),
  ranking_metric      text not null default 'NONE'
                        check (ranking_metric in ('AVERAGE','GPA','NONE')),

  -- Capabilities available at this level. Screens ask features ? 'x', never
  -- `if level = 'JHS_3'`, because that is an educational rule and the frontend
  -- is not permitted to hold one.
  features         jsonb not null default '[]'::jsonb,

  is_active        boolean not null default true,
  created_at       timestamptz not null default now()
);

create index if not exists edu_levels_system_idx on edu_levels(system_code, sort_order);

-- ---------------------------------------------------------------------------
-- display names
--
-- Deliberately a separate table keyed by code and language. Adding Twi, Ga,
-- Ewe or Dagbani is inserting rows, never touching a learner record or a
-- screen. Covers every code space in one place.
-- ---------------------------------------------------------------------------

create table if not exists edu_display_names (
  kind      text not null                    -- 'LEVEL','GROUP_TYPE','WORK','EXAM','SYSTEM','PROGRESS'
              check (kind in ('LEVEL','GROUP_TYPE','WORK','EXAM','SYSTEM','PROGRESS','ASSESSMENT_MODEL')),
  code      text not null,
  language  text not null default 'en',
  label     text not null,
  primary key (kind, code, language)
);

-- ---------------------------------------------------------------------------
-- seed: Ghana, as it stands today
--
-- Illustrative of the structure, not privileged by it. Another country, a new
-- pathway, or a reformed examination system is more rows here.
-- ---------------------------------------------------------------------------

insert into edu_systems (code, name, authority, sort_order) values
  ('EARLY_CHILDHOOD','Early Childhood','GES',1),
  ('BASIC','Basic Education','GES',2),
  ('JUNIOR_HIGH','Junior High','GES',3),
  ('SENIOR_HIGH','Senior High','GES',4),
  ('TVET','Technical and Vocational','CTVET',5),
  ('TERTIARY','Tertiary','GTEC',6),
  ('PROFESSIONAL','Professional and Lifelong',null,7)
on conflict (code) do nothing;

insert into edu_examinations (code, name, authority) values
  ('BECE','Basic Education Certificate Examination','WAEC'),
  ('WASSCE','West African Senior School Certificate Examination','WAEC'),
  ('NVTI','National Vocational Training Institute assessment','NVTI'),
  ('UNIVERSITY','University examinations',null)
on conflict (code) do nothing;

insert into edu_period_patterns (code, name, periods_per_year, period_noun) values
  ('TERM_3','Three terms',3,'Term'),
  ('SEMESTER_2','Two semesters',2,'Semester'),
  ('ROLLING','Rolling intake',null,'Block')
on conflict (code) do nothing;

insert into edu_stages (code, system_code, name, sort_order) values
  ('KG','EARLY_CHILDHOOD','Kindergarten',1),
  ('LOWER_PRIMARY','BASIC','Lower Primary',2),
  ('UPPER_PRIMARY','BASIC','Upper Primary',3),
  ('JHS','JUNIOR_HIGH','Junior High',4),
  ('SHS','SENIOR_HIGH','Senior High',5),
  ('TVET','TVET','Technical and Vocational',6),
  ('UNDERGRADUATE','TERTIARY','Undergraduate',7),
  ('POSTGRADUATE','TERTIARY','Postgraduate',8),
  ('CPD','PROFESSIONAL','Continuing Development',9)
on conflict (code) do nothing;

insert into edu_levels (
  code, system_code, stage_code, sort_order, group_type, primary_work, secondary_work,
  assessment_model, examination_code, exam_imminent, progression, period_pattern, age_band,
  ranking_enabled, ranking_visibility, ranking_scope, ranking_metric, features
) values
  ('KG_1','EARLY_CHILDHOOD','KG',1,'CLASS','ACTIVITIES',null,'DEVELOPMENTAL',null,false,'AUTOMATIC','TERM_3','EARLY',
   false,'HIDDEN','NONE','NONE','["lessons","library","stories","games","developmentalProgress","parentVisibility","portfolio"]'),
  ('KG_2','EARLY_CHILDHOOD','KG',2,'CLASS','ACTIVITIES',null,'DEVELOPMENTAL',null,false,'AUTOMATIC','TERM_3','EARLY',
   false,'HIDDEN','NONE','NONE','["lessons","library","stories","games","developmentalProgress","parentVisibility","portfolio"]'),

  ('BASIC_1','BASIC','LOWER_PRIMARY',3,'CLASS','CLASSWORK','ACTIVITIES','SCHOOL_ASSESSMENT',null,false,'AUTOMATIC','TERM_3','CHILD',
   true,'STAFF_ONLY','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","assessments","progressPercent","parentVisibility","portfolio","skills","projects"]'),
  ('BASIC_2','BASIC','LOWER_PRIMARY',4,'CLASS','CLASSWORK','ACTIVITIES','SCHOOL_ASSESSMENT',null,false,'AUTOMATIC','TERM_3','CHILD',
   true,'STAFF_ONLY','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","assessments","progressPercent","parentVisibility","portfolio","skills","projects"]'),
  ('BASIC_3','BASIC','LOWER_PRIMARY',5,'CLASS','CLASSWORK','ACTIVITIES','SCHOOL_ASSESSMENT',null,false,'AUTOMATIC','TERM_3','CHILD',
   true,'STAFF_ONLY','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","assessments","progressPercent","parentVisibility","portfolio","skills","projects"]'),
  ('BASIC_4','BASIC','UPPER_PRIMARY',6,'CLASS','CLASSWORK','ASSIGNMENTS','SCHOOL_ASSESSMENT',null,false,'AUTOMATIC','TERM_3','CHILD',
   true,'STAFF_ONLY','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","assessments","progressPercent","parentVisibility","portfolio","skills","projects"]'),
  ('BASIC_5','BASIC','UPPER_PRIMARY',7,'CLASS','CLASSWORK','ASSIGNMENTS','SCHOOL_ASSESSMENT',null,false,'AUTOMATIC','TERM_3','CHILD',
   true,'STAFF_ONLY','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","assessments","progressPercent","parentVisibility","portfolio","skills","projects"]'),
  ('BASIC_6','BASIC','UPPER_PRIMARY',8,'CLASS','CLASSWORK','ASSIGNMENTS','SCHOOL_ASSESSMENT',null,false,'AUTOMATIC','TERM_3','CHILD',
   true,'STAFF_ONLY','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","assessments","progressPercent","parentVisibility","portfolio","skills","projects"]'),

  ('JHS_1','JUNIOR_HIGH','JHS',9,'CLASS','ASSIGNMENTS',null,'CONTINUOUS','BECE',false,'EXAM_GATED','TERM_3','ADOLESCENT',
   true,'LEARNER','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","assessments","progressPercent","parentVisibility","portfolio","skills","projects","terminalExam","pastQuestions","ranking","careerPath","opportunities","certificates"]'),
  ('JHS_2','JUNIOR_HIGH','JHS',10,'CLASS','ASSIGNMENTS',null,'CONTINUOUS','BECE',false,'EXAM_GATED','TERM_3','ADOLESCENT',
   true,'LEARNER','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","assessments","progressPercent","parentVisibility","portfolio","skills","projects","terminalExam","pastQuestions","ranking","careerPath","opportunities","certificates"]'),
  ('JHS_3','JUNIOR_HIGH','JHS',11,'CLASS','ASSIGNMENTS',null,'CONTINUOUS','BECE',true,'EXAM_GATED','TERM_3','ADOLESCENT',
   true,'LEARNER','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","assessments","progressPercent","parentVisibility","portfolio","skills","projects","terminalExam","pastQuestions","ranking","careerPath","opportunities","certificates"]'),

  ('SHS_1','SENIOR_HIGH','SHS',12,'CLASS','COURSEWORK','ASSIGNMENTS','CONTINUOUS','WASSCE',false,'EXAM_GATED','TERM_3','ADOLESCENT',
   true,'LEARNER','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","coursework","assessments","progressPercent","portfolio","skills","projects","terminalExam","pastQuestions","ranking","careerPath","universities","opportunities","certificates"]'),
  ('SHS_2','SENIOR_HIGH','SHS',13,'CLASS','COURSEWORK','ASSIGNMENTS','CONTINUOUS','WASSCE',false,'EXAM_GATED','TERM_3','ADOLESCENT',
   true,'LEARNER','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","coursework","assessments","progressPercent","portfolio","skills","projects","terminalExam","pastQuestions","ranking","careerPath","universities","opportunities","certificates"]'),
  ('SHS_3','SENIOR_HIGH','SHS',14,'CLASS','COURSEWORK','ASSIGNMENTS','CONTINUOUS','WASSCE',true,'EXAM_GATED','TERM_3','YOUNG_ADULT',
   true,'LEARNER','CLASS','AVERAGE','["aiTutor","lessons","library","practice","assignments","coursework","assessments","progressPercent","portfolio","skills","projects","terminalExam","pastQuestions","ranking","careerPath","universities","opportunities","certificates"]'),

  ('TVET_1','TVET','TVET',15,'TRADE','COMPETENCIES','PRACTICAL_TASKS','COMPETENCY','NVTI',false,'COMPETENCY_BASED','ROLLING','YOUNG_ADULT',
   false,'HIDDEN','NONE','NONE','["aiTutor","lessons","library","competencies","practicalTasks","assessments","terminalExam","portfolio","skills","projects","certificates","careerPath","opportunities","internships"]'),
  ('TVET_2','TVET','TVET',16,'TRADE','COMPETENCIES','PRACTICAL_TASKS','COMPETENCY','NVTI',false,'COMPETENCY_BASED','ROLLING','YOUNG_ADULT',
   false,'HIDDEN','NONE','NONE','["aiTutor","lessons","library","competencies","practicalTasks","assessments","terminalExam","portfolio","skills","projects","certificates","careerPath","opportunities","internships"]'),
  ('TVET_3','TVET','TVET',17,'TRADE','COMPETENCIES','PRACTICAL_TASKS','COMPETENCY','NVTI',false,'COMPETENCY_BASED','ROLLING','ADULT',
   false,'HIDDEN','NONE','NONE','["aiTutor","lessons","library","competencies","practicalTasks","assessments","terminalExam","portfolio","skills","projects","certificates","careerPath","opportunities","internships"]'),
  ('TVET_4','TVET','TVET',18,'TRADE','COMPETENCIES','PRACTICAL_TASKS','COMPETENCY','NVTI',true,'COMPETENCY_BASED','ROLLING','ADULT',
   false,'HIDDEN','NONE','NONE','["aiTutor","lessons","library","competencies","practicalTasks","assessments","terminalExam","portfolio","skills","projects","certificates","careerPath","opportunities","internships"]'),

  ('UNI_FOUNDATION','TERTIARY','UNDERGRADUATE',19,'PROGRAMME','COURSEWORK',null,'ACADEMIC_CREDIT','UNIVERSITY',false,'CREDIT_BASED','SEMESTER_2','YOUNG_ADULT',
   true,'LEARNER','COHORT','GPA','["aiTutor","lessons","library","coursework","assessments","gpa","credits","progressPercent","research","internships","portfolio","skills","projects","certificates","careerPath","opportunities","cpd"]'),
  ('UNI_YEAR_1','TERTIARY','UNDERGRADUATE',20,'PROGRAMME','COURSEWORK',null,'ACADEMIC_CREDIT','UNIVERSITY',false,'CREDIT_BASED','SEMESTER_2','YOUNG_ADULT',
   true,'LEARNER','COHORT','GPA','["aiTutor","lessons","library","coursework","assessments","gpa","credits","progressPercent","research","internships","portfolio","skills","projects","certificates","careerPath","opportunities","cpd"]'),
  ('UNI_YEAR_2','TERTIARY','UNDERGRADUATE',21,'PROGRAMME','COURSEWORK',null,'ACADEMIC_CREDIT','UNIVERSITY',false,'CREDIT_BASED','SEMESTER_2','YOUNG_ADULT',
   true,'LEARNER','COHORT','GPA','["aiTutor","lessons","library","coursework","assessments","gpa","credits","progressPercent","research","internships","portfolio","skills","projects","certificates","careerPath","opportunities","cpd"]'),
  ('UNI_YEAR_3','TERTIARY','UNDERGRADUATE',22,'PROGRAMME','COURSEWORK',null,'ACADEMIC_CREDIT','UNIVERSITY',false,'CREDIT_BASED','SEMESTER_2','ADULT',
   true,'LEARNER','COHORT','GPA','["aiTutor","lessons","library","coursework","assessments","gpa","credits","progressPercent","research","internships","portfolio","skills","projects","certificates","careerPath","opportunities","cpd"]'),
  ('UNI_YEAR_4','TERTIARY','UNDERGRADUATE',23,'PROGRAMME','COURSEWORK',null,'ACADEMIC_CREDIT','UNIVERSITY',false,'CREDIT_BASED','SEMESTER_2','ADULT',
   true,'LEARNER','COHORT','GPA','["aiTutor","lessons","library","coursework","assessments","gpa","credits","progressPercent","research","internships","portfolio","skills","projects","certificates","careerPath","opportunities","cpd"]'),
  ('UNI_MASTERS','TERTIARY','POSTGRADUATE',24,'PROGRAMME','COURSEWORK',null,'ACADEMIC_CREDIT','UNIVERSITY',false,'CREDIT_BASED','SEMESTER_2','ADULT',
   true,'LEARNER','COHORT','GPA','["aiTutor","lessons","library","coursework","assessments","gpa","credits","research","internships","portfolio","skills","projects","certificates","careerPath","cpd"]'),
  ('UNI_DOCTORAL','TERTIARY','POSTGRADUATE',25,'PROGRAMME','MODULES',null,'ACADEMIC_CREDIT',null,false,'CONTINUOUS','SEMESTER_2','ADULT',
   false,'HIDDEN','NONE','NONE','["aiTutor","library","research","portfolio","projects","certificates","cpd"]'),

  ('PROFESSIONAL','PROFESSIONAL','CPD',26,'COURSE','MODULES',null,'COMPETENCY',null,false,'CONTINUOUS','ROLLING','ADULT',
   false,'HIDDEN','NONE','NONE','["aiTutor","lessons","library","assessments","certificates","cpd","portfolio","skills","careerPath","opportunities"]')
on conflict (code) do nothing;

-- display names, English. Other languages are additional rows.
insert into edu_display_names (kind, code, language, label) values
  ('LEVEL','KG_1','en','KG 1'), ('LEVEL','KG_2','en','KG 2'),
  ('LEVEL','BASIC_1','en','Basic 1'), ('LEVEL','BASIC_2','en','Basic 2'),
  ('LEVEL','BASIC_3','en','Basic 3'), ('LEVEL','BASIC_4','en','Basic 4'),
  ('LEVEL','BASIC_5','en','Basic 5'), ('LEVEL','BASIC_6','en','Basic 6'),
  ('LEVEL','JHS_1','en','JHS 1'), ('LEVEL','JHS_2','en','JHS 2'), ('LEVEL','JHS_3','en','JHS 3'),
  ('LEVEL','SHS_1','en','SHS 1'), ('LEVEL','SHS_2','en','SHS 2'), ('LEVEL','SHS_3','en','SHS 3'),
  ('LEVEL','TVET_1','en','Level 1'), ('LEVEL','TVET_2','en','Level 2'),
  ('LEVEL','TVET_3','en','Level 3'), ('LEVEL','TVET_4','en','Level 4'),
  ('LEVEL','UNI_FOUNDATION','en','Foundation'),
  ('LEVEL','UNI_YEAR_1','en','Year 1'), ('LEVEL','UNI_YEAR_2','en','Year 2'),
  ('LEVEL','UNI_YEAR_3','en','Year 3'), ('LEVEL','UNI_YEAR_4','en','Year 4'),
  ('LEVEL','UNI_MASTERS','en','Masters'), ('LEVEL','UNI_DOCTORAL','en','Doctoral'),
  ('LEVEL','PROFESSIONAL','en','Professional'),

  ('GROUP_TYPE','CLASS','en','Class'), ('GROUP_TYPE','STREAM','en','Stream'),
  ('GROUP_TYPE','TRADE','en','Trade'), ('GROUP_TYPE','PROGRAMME','en','Programme'),
  ('GROUP_TYPE','COHORT','en','Cohort'), ('GROUP_TYPE','COURSE','en','Course'),
  ('GROUP_TYPE','DEPARTMENT','en','Department'),

  ('WORK','ACTIVITIES','en','Activities'), ('WORK','CLASSWORK','en','Classwork'),
  ('WORK','ASSIGNMENTS','en','Assignments'), ('WORK','COURSEWORK','en','Coursework'),
  ('WORK','COMPETENCIES','en','Competencies'), ('WORK','PRACTICAL_TASKS','en','Practical tasks'),
  ('WORK','MODULES','en','Modules'),

  ('EXAM','BECE','en','BECE'), ('EXAM','WASSCE','en','WASSCE'),
  ('EXAM','NVTI','en','NVTI assessment'), ('EXAM','UNIVERSITY','en','University examinations'),

  ('PROGRESS','DEVELOPMENTAL','en','Learning development'),
  ('PROGRESS','SCHOOL_ASSESSMENT','en','Learning progress'),
  ('PROGRESS','CONTINUOUS','en','Subject performance'),
  ('PROGRESS','COMPETENCY','en','Competencies achieved'),
  ('PROGRESS','ACADEMIC_CREDIT','en','Course progress'),

  ('SYSTEM','EARLY_CHILDHOOD','en','Early Childhood'),
  ('SYSTEM','BASIC','en','Basic Education'),
  ('SYSTEM','JUNIOR_HIGH','en','Junior High'),
  ('SYSTEM','SENIOR_HIGH','en','Senior High'),
  ('SYSTEM','TVET','en','TVET'),
  ('SYSTEM','TERTIARY','en','Tertiary'),
  ('SYSTEM','PROFESSIONAL','en','Professional')
on conflict (kind, code, language) do nothing;

-- ---------------------------------------------------------------------------
-- RLS: structure is reference data. Everyone signed in reads it; only national
-- administrators change it, because these rows are educational policy.
-- ---------------------------------------------------------------------------

alter table edu_systems         enable row level security;
alter table edu_stages          enable row level security;
alter table edu_examinations    enable row level security;
alter table edu_period_patterns enable row level security;
alter table edu_levels          enable row level security;
alter table edu_display_names   enable row level security;

do $$
declare t text;
begin
  foreach t in array array['edu_systems','edu_stages','edu_examinations',
                           'edu_period_patterns','edu_levels','edu_display_names']
  loop
    execute format('drop policy if exists %I_read on %I', t, t);
    execute format('create policy %I_read on %I for select to anon, authenticated using (true)', t, t);
    execute format('drop policy if exists %I_write on %I', t, t);
    execute format('create policy %I_write on %I for all to authenticated using (edu_is_national()) with check (edu_is_national())', t, t);
  end loop;
end
$$;
