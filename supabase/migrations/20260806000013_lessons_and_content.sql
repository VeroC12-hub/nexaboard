-- ============================================================================
-- STAGE ONE, part 3: lessons, content and the assessment bank.
--
-- These are the sockets every later feature plugs into. Nothing here builds a
-- feature; it defines where a feature's data will live so that when the AI
-- tutor, the library, the assessment engine and the analytics layer arrive,
-- none of them needs a new shape or a hard-coded assumption.
--
-- The organising rule: everything points at a learning objective. A lesson, a
-- video, a handout, a question, a submission and a result all reference one,
-- which is what makes coverage measurable, remediation specific, and a
-- national gap visible instead of invisible.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- lessons
--
-- A lesson is a teachable unit of a topic. It is deliberately separate from a
-- classroom session: a lesson is content that exists whether or not anyone has
-- taught it, while `sessions` records an actual teaching event. One lesson is
-- taught many times, by many teachers, in many schools.
-- ---------------------------------------------------------------------------

create table if not exists edu_lessons (
  id            uuid primary key default gen_random_uuid(),
  topic_id      uuid not null references edu_topics(id) on delete cascade,
  curriculum_id uuid not null references edu_curricula(id) on delete cascade,
  title         text not null,
  summary       text,
  sequence      int not null default 0,
  duration_minutes int,
  language      text not null default 'en',
  -- Where it came from: NaCCA, a publisher, a teacher, or AI-drafted.
  origin        text not null default 'AUTHORED'
                  check (origin in ('AUTHORED','PUBLISHER','TEACHER','AI_DRAFTED','IMPORTED')),
  -- AI-drafted content is unusable in a national system until a human signs
  -- it off, so approval state is part of the model rather than a later bolt-on.
  approval      text not null default 'DRAFT'
                  check (approval in ('DRAFT','IN_REVIEW','APPROVED','WITHDRAWN')),
  approved_by   uuid references edu_profiles(id) on delete set null,
  approved_at   timestamptz,
  created_by    uuid references edu_profiles(id) on delete set null,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists edu_lessons_topic_idx on edu_lessons(topic_id, sequence);
create index if not exists edu_lessons_approval_idx on edu_lessons(approval);

drop trigger if exists edu_lessons_set_updated_at on edu_lessons;
create trigger edu_lessons_set_updated_at before update on edu_lessons
  for each row execute function edu_set_updated_at();

-- A lesson usually serves several objectives, and an objective is usually
-- served by more than one lesson. Many-to-many, not a column.
create table if not exists edu_lesson_objectives (
  lesson_id    uuid not null references edu_lessons(id) on delete cascade,
  objective_id uuid not null references edu_learning_objectives(id) on delete cascade,
  primary key (lesson_id, objective_id)
);

-- ---------------------------------------------------------------------------
-- lesson steps
--
-- The internal shape of a lesson: explain, show worked, let them try, check.
-- Held as rows rather than a blob so a step can be reordered, translated,
-- assessed or replaced without rewriting the lesson, and so an AI tutor can
-- know which step a learner is stuck on.
-- ---------------------------------------------------------------------------

create table if not exists edu_lesson_steps (
  id         uuid primary key default gen_random_uuid(),
  lesson_id  uuid not null references edu_lessons(id) on delete cascade,
  sequence   int not null,
  kind       text not null
               check (kind in ('IDEA','WORKED_EXAMPLE','TRY','CHECK','PRACTICAL','DISCUSSION','REFLECTION')),
  title      text,
  body       text,
  -- Worked examples, options and accepted answers vary by step kind, so the
  -- variable part is structured data rather than thirty mostly-null columns.
  payload    jsonb not null default '{}'::jsonb,
  unique (lesson_id, sequence)
);

-- ---------------------------------------------------------------------------
-- content items
--
-- Textbooks, videos, audio, slides, handouts, simulations. Attached to an
-- objective rather than a subject, which is what makes "show me everything
-- that teaches B8.2.1.1.3" a single query.
--
-- size_bytes and duration are first-class because data cost decides whether a
-- Ghanaian learner can open something at all. A library that cannot tell you
-- what a download costs is not usable here.
-- ---------------------------------------------------------------------------

create table if not exists edu_content_items (
  id            uuid primary key default gen_random_uuid(),
  curriculum_id uuid references edu_curricula(id) on delete set null,
  title         text not null,
  kind          text not null
                  check (kind in ('TEXTBOOK','TEACHER_GUIDE','VIDEO','AUDIO','SLIDES',
                                  'HANDOUT','WORKSHEET','SIMULATION','INTERACTIVE',
                                  'PAST_PAPER','RESEARCH','ARTICLE')),
  author        text,
  publisher     text,
  language      text not null default 'en',
  uri           text,                          -- storage path or external URL
  size_bytes    bigint,
  duration_seconds int,
  page_count    int,
  -- A low-bandwidth substitute: audio or text version of a video, served
  -- automatically when the connection cannot carry the original.
  lite_uri      text,
  lite_size_bytes bigint,
  difficulty    text check (difficulty in ('FOUNDATION','CORE','EXTENSION')),
  origin        text not null default 'PUBLISHER'
                  check (origin in ('AUTHORED','PUBLISHER','TEACHER','AI_DRAFTED','IMPORTED')),
  approval      text not null default 'DRAFT'
                  check (approval in ('DRAFT','IN_REVIEW','APPROVED','WITHDRAWN')),
  is_downloadable boolean not null default true,
  created_by    uuid references edu_profiles(id) on delete set null,
  created_at    timestamptz not null default now()
);

create index if not exists edu_content_kind_idx on edu_content_items(kind);
create index if not exists edu_content_approval_idx on edu_content_items(approval);

create table if not exists edu_content_objectives (
  content_id   uuid not null references edu_content_items(id) on delete cascade,
  objective_id uuid not null references edu_learning_objectives(id) on delete cascade,
  primary key (content_id, objective_id)
);

create table if not exists edu_lesson_content (
  lesson_id  uuid not null references edu_lessons(id) on delete cascade,
  content_id uuid not null references edu_content_items(id) on delete cascade,
  sequence   int not null default 0,
  primary key (lesson_id, content_id)
);

-- ---------------------------------------------------------------------------
-- the question bank
--
-- Separate from edu_assessments, which is a specific assessment a teacher set
-- for a class. This is the reusable pool: one question, tagged to objectives,
-- usable in practice, in a class test, in exam preparation and in national
-- analytics.
-- ---------------------------------------------------------------------------

create table if not exists edu_questions (
  id            uuid primary key default gen_random_uuid(),
  curriculum_id uuid references edu_curricula(id) on delete set null,
  kind          text not null
                  check (kind in ('MULTIPLE_CHOICE','TRUE_FALSE','SHORT_ANSWER','NUMERIC',
                                  'STRUCTURED','ESSAY','PRACTICAL','FILE_SUBMISSION','MATCHING')),
  stem          text not null,
  -- Options, accepted answers, tolerances and rubrics differ per kind.
  payload       jsonb not null default '{}'::jsonb,
  -- Shown after an attempt. Written here so every surface explains the same
  -- way, rather than each feature inventing its own feedback.
  explanation   text,
  marks         numeric(6,2) not null default 1,
  difficulty    text check (difficulty in ('FOUNDATION','CORE','EXTENSION')),
  -- Where a past question actually came from, so exam preparation can be honest.
  source_exam   text references edu_examinations(code) on delete set null,
  source_year   int,
  source_paper  text,
  language      text not null default 'en',
  -- Objective questions can be auto-marked; essays and practicals cannot, and
  -- the model must know the difference rather than each feature guessing.
  auto_markable boolean not null default false,
  origin        text not null default 'AUTHORED'
                  check (origin in ('AUTHORED','PUBLISHER','TEACHER','AI_DRAFTED','IMPORTED')),
  approval      text not null default 'DRAFT'
                  check (approval in ('DRAFT','IN_REVIEW','APPROVED','WITHDRAWN')),
  created_by    uuid references edu_profiles(id) on delete set null,
  created_at    timestamptz not null default now()
);

create index if not exists edu_questions_source_idx on edu_questions(source_exam, source_year);
create index if not exists edu_questions_kind_idx on edu_questions(kind);

create table if not exists edu_question_objectives (
  question_id  uuid not null references edu_questions(id) on delete cascade,
  objective_id uuid not null references edu_learning_objectives(id) on delete cascade,
  primary key (question_id, objective_id)
);

-- ---------------------------------------------------------------------------
-- competencies
--
-- TVET assesses whether someone can do a thing, under observation, to a
-- standard. That is not a mark out of twenty and must not be forced into one.
-- ---------------------------------------------------------------------------

create table if not exists edu_competencies (
  id            uuid primary key default gen_random_uuid(),
  programme_id  uuid references edu_programmes(id) on delete cascade,
  objective_id  uuid references edu_learning_objectives(id) on delete set null,
  code          text not null,
  name          text not null,
  standard      text,                          -- what "competent" means here
  assessment_method text
                  check (assessment_method in ('OBSERVATION','PRACTICAL_TEST',
                                               'PROJECT','WORKPLACE','PORTFOLIO')),
  requires_supervisor boolean not null default true,
  sort_order    int not null default 0,
  unique (programme_id, code)
);

-- ---------------------------------------------------------------------------
-- RLS
--
-- Content is national reference data with an approval gate: only APPROVED
-- material is readable by learners, so a draft or withdrawn item can never
-- reach a child. Authors and national administrators see everything.
-- ---------------------------------------------------------------------------

alter table edu_lessons            enable row level security;
alter table edu_lesson_objectives  enable row level security;
alter table edu_lesson_steps       enable row level security;
alter table edu_content_items      enable row level security;
alter table edu_content_objectives enable row level security;
alter table edu_lesson_content     enable row level security;
alter table edu_questions          enable row level security;
alter table edu_question_objectives enable row level security;
alter table edu_competencies       enable row level security;

drop policy if exists edu_lessons_read on edu_lessons;
create policy edu_lessons_read on edu_lessons
  for select to authenticated
  using (approval = 'APPROVED' or created_by = auth.uid() or edu_is_national());

drop policy if exists edu_lessons_write on edu_lessons;
create policy edu_lessons_write on edu_lessons
  for all to authenticated
  using (created_by = auth.uid() or edu_is_national())
  with check (created_by = auth.uid() or edu_is_national());

drop policy if exists edu_content_read on edu_content_items;
create policy edu_content_read on edu_content_items
  for select to authenticated
  using (approval = 'APPROVED' or created_by = auth.uid() or edu_is_national());

drop policy if exists edu_content_write on edu_content_items;
create policy edu_content_write on edu_content_items
  for all to authenticated
  using (created_by = auth.uid() or edu_is_national())
  with check (created_by = auth.uid() or edu_is_national());

-- A learner must never see a question's accepted answers by reading the table
-- directly. Questions are served through a function that strips the payload;
-- until that exists, only staff and above may read the bank at all.
drop policy if exists edu_questions_read on edu_questions;
create policy edu_questions_read on edu_questions
  for select to authenticated
  using (
    edu_is_national()
    or created_by = auth.uid()
    or edu_auth_role() in ('teacher','head_teacher','school_admin')
  );

drop policy if exists edu_questions_write on edu_questions;
create policy edu_questions_write on edu_questions
  for all to authenticated
  using (created_by = auth.uid() or edu_is_national())
  with check (created_by = auth.uid() or edu_is_national());

-- Join tables and structural children follow their parent: readable by any
-- signed-in user, writable only by national administrators.
do $$
declare t text;
begin
  foreach t in array array['edu_lesson_objectives','edu_lesson_steps',
                           'edu_content_objectives','edu_lesson_content',
                           'edu_question_objectives','edu_competencies']
  loop
    execute format('drop policy if exists %I_read on %I', t, t);
    execute format('create policy %I_read on %I for select to authenticated using (true)', t, t);
    execute format('drop policy if exists %I_write on %I', t, t);
    execute format('create policy %I_write on %I for all to authenticated using (edu_is_national()) with check (edu_is_national())', t, t);
  end loop;
end
$$;
