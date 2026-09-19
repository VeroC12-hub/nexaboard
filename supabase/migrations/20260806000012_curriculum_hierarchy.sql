-- ============================================================================
-- STAGE ONE, part 2: the curriculum hierarchy.
--
--   Curriculum (versioned)
--     └── Subject offering        subject taught at a level under a curriculum
--           └── Strand
--                 └── Sub-strand
--                       └── Topic
--                             └── Learning objective
--
-- The learning objective is the atom of the whole platform. A lesson, a video,
-- a handout, a question, a result, a weakness and a coverage statistic all
-- point at one, which is what lets the system say "this learner is weak on
-- exactly this" rather than "this learner is weak at Chemistry".
--
-- VERSIONING. A curriculum is versioned and dated. A learner assessed under
-- the 2026 curriculum keeps the 2026 meaning of that result forever. When
-- government reforms the syllabus a new version is published; history is not
-- reinterpreted, because that would silently rewrite what a child achieved.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- curricula
-- ---------------------------------------------------------------------------

create table if not exists edu_curricula (
  id             uuid primary key default gen_random_uuid(),
  code           text not null,                -- 'GES_SBC', 'CTVET_CBT', 'KNUST_BSC_CIVIL'
  version        text not null,                -- '2026.1'
  name           text not null,
  authority      text,                         -- NaCCA, CTVET, the university
  system_code    text references edu_systems(code) on delete set null,
  effective_from date,
  effective_to   date,                         -- null while current
  is_active      boolean not null default true,
  created_at     timestamptz not null default now(),
  unique (code, version)
);

-- At most one active version of a curriculum at a time, so nothing has to
-- guess which one applies.
create unique index if not exists edu_curricula_one_active
  on edu_curricula(code) where is_active;

-- ---------------------------------------------------------------------------
-- subject offerings
--
-- A subject is not global: Mathematics at Basic 4 and Elective Mathematics at
-- SHS 2 are different offerings with different objectives. The offering is the
-- join of subject, level and curriculum, and it is what a class is actually
-- taught.
-- ---------------------------------------------------------------------------

create table if not exists edu_subject_offerings (
  id            uuid primary key default gen_random_uuid(),
  curriculum_id uuid not null references edu_curricula(id) on delete cascade,
  subject_id    uuid not null references edu_subjects(id) on delete restrict,
  level_code    text not null references edu_levels(code) on delete cascade,
  is_core       boolean not null default false,
  is_elective   boolean not null default false,
  -- Tertiary and TVET carry credit or competency weight; school subjects do not.
  credit_value  numeric(5,2),
  sort_order    int not null default 0,
  created_at    timestamptz not null default now(),
  unique (curriculum_id, subject_id, level_code)
);

create index if not exists edu_offerings_level_idx on edu_subject_offerings(level_code);
create index if not exists edu_offerings_curriculum_idx on edu_subject_offerings(curriculum_id);

-- ---------------------------------------------------------------------------
-- strand > sub-strand > topic
--
-- Modelled as real levels rather than a flat code, because a strand carries a
-- name a teacher recognises and reports roll up by it. Depth is fixed at three
-- deliberately: every Ghanaian curriculum family fits, and an arbitrary tree
-- would make every report a recursive query for no gain.
-- ---------------------------------------------------------------------------

create table if not exists edu_strands (
  id          uuid primary key default gen_random_uuid(),
  offering_id uuid not null references edu_subject_offerings(id) on delete cascade,
  code        text not null,                  -- '1'
  name        text not null,                  -- 'Algebra'
  sort_order  int not null default 0,
  unique (offering_id, code)
);

create table if not exists edu_sub_strands (
  id         uuid primary key default gen_random_uuid(),
  strand_id  uuid not null references edu_strands(id) on delete cascade,
  code       text not null,
  name       text not null,
  sort_order int not null default 0,
  unique (strand_id, code)
);

create table if not exists edu_topics (
  id            uuid primary key default gen_random_uuid(),
  sub_strand_id uuid not null references edu_sub_strands(id) on delete cascade,
  code          text not null,
  name          text not null,
  -- Which teaching period the curriculum expects this in. Null where the
  -- system has no fixed sequence, such as rolling TVET intake.
  expected_period int,
  sort_order    int not null default 0,
  unique (sub_strand_id, code)
);

create index if not exists edu_topics_period_idx on edu_topics(expected_period);

-- ---------------------------------------------------------------------------
-- learning objectives
--
-- The atom. `full_code` is the human-facing reference a teacher and a WAEC
-- paper both use, e.g. B8.2.1.1.3, and it is unique within a curriculum
-- version rather than globally: the same code legitimately means something
-- different under a reformed syllabus.
-- ---------------------------------------------------------------------------

create table if not exists edu_learning_objectives (
  id            uuid primary key default gen_random_uuid(),
  topic_id      uuid not null references edu_topics(id) on delete cascade,
  curriculum_id uuid not null references edu_curricula(id) on delete cascade,
  full_code     text not null,                -- 'B8.2.1.1.3'
  text          text not null,
  -- What the learner should be able to DO. Distinct from the objective text
  -- because competency-based systems assess this, not the objective.
  competency    text,
  bloom_level   text check (bloom_level in
                  ('REMEMBER','UNDERSTAND','APPLY','ANALYSE','EVALUATE','CREATE')),
  expected_period int,
  sort_order    int not null default 0,
  created_at    timestamptz not null default now(),
  unique (curriculum_id, full_code)
);

create index if not exists edu_objectives_topic_idx on edu_learning_objectives(topic_id);
create index if not exists edu_objectives_code_idx  on edu_learning_objectives(full_code);

-- ---------------------------------------------------------------------------
-- prerequisites
--
-- Which objectives must come first. This is what makes a genuine learning path
-- possible: "you cannot do mole calculations until you can balance equations"
-- is a curriculum fact, not something a recommendation algorithm should guess.
-- ---------------------------------------------------------------------------

create table if not exists edu_objective_prerequisites (
  objective_id    uuid not null references edu_learning_objectives(id) on delete cascade,
  prerequisite_id uuid not null references edu_learning_objectives(id) on delete cascade,
  strength        text not null default 'REQUIRED'
                    check (strength in ('REQUIRED','HELPFUL')),
  primary key (objective_id, prerequisite_id),
  check (objective_id <> prerequisite_id)
);

-- ---------------------------------------------------------------------------
-- programmes and trades
--
-- SHS programmes (General Science), TVET trades (Electrical Installation) and
-- university programmes (BSc Civil Engineering) are the same shape: a named
-- pathway that selects a set of offerings. One table, so a learner's group can
-- point at any of them.
-- ---------------------------------------------------------------------------

create table if not exists edu_programmes (
  id           uuid primary key default gen_random_uuid(),
  code         text not null unique,
  name         text not null,
  system_code  text not null references edu_systems(code) on delete cascade,
  kind         text not null default 'PROGRAMME'
                 check (kind in ('PROGRAMME','TRADE','COURSE')),
  awarding_body text,
  duration_periods int,
  is_active    boolean not null default true,
  created_at   timestamptz not null default now()
);

create table if not exists edu_programme_offerings (
  programme_id uuid not null references edu_programmes(id) on delete cascade,
  offering_id  uuid not null references edu_subject_offerings(id) on delete cascade,
  is_required  boolean not null default true,
  primary key (programme_id, offering_id)
);

-- ---------------------------------------------------------------------------
-- RLS: curriculum is national reference data.
-- ---------------------------------------------------------------------------

alter table edu_curricula               enable row level security;
alter table edu_subject_offerings       enable row level security;
alter table edu_strands                 enable row level security;
alter table edu_sub_strands             enable row level security;
alter table edu_topics                  enable row level security;
alter table edu_learning_objectives     enable row level security;
alter table edu_objective_prerequisites enable row level security;
alter table edu_programmes              enable row level security;
alter table edu_programme_offerings     enable row level security;

do $$
declare t text;
begin
  foreach t in array array['edu_curricula','edu_subject_offerings','edu_strands',
                           'edu_sub_strands','edu_topics','edu_learning_objectives',
                           'edu_objective_prerequisites','edu_programmes','edu_programme_offerings']
  loop
    execute format('drop policy if exists %I_read on %I', t, t);
    execute format('create policy %I_read on %I for select to authenticated using (true)', t, t);
    execute format('drop policy if exists %I_write on %I', t, t);
    execute format('create policy %I_write on %I for all to authenticated using (edu_is_national()) with check (edu_is_national())', t, t);
  end loop;
end
$$;
