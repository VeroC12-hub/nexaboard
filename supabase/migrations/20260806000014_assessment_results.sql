-- ============================================================================
-- Corrective migration 014: one assessment-result lineage, typed outcomes.
--
-- edu_levels declares five assessment models but only one result shape existed
-- (a numeric score). Four of five had nowhere correct to be recorded, so a
-- developmental observation of a five year old and a TVET competency sign-off
-- would both have been forced into a number.
--
-- Two failure modes were available and both are avoided:
--
--   * A separate result table per stage would give the Passport five
--     disconnected histories to union, when its entire purpose is one
--     continuous record.
--   * A single wide table of mostly-null columns would make every query guess
--     which fields are meaningful.
--
-- So: one common lineage row per result, and exactly one typed outcome row
-- joined to it. Integrity is declarative — the composite key (id,
-- outcome_model) means an outcome table physically cannot attach to a result
-- of a different model. No trigger, no application-level rule.
-- ============================================================================

create table if not exists edu_assessment_results (
  id            uuid primary key default gen_random_uuid(),
  school_id     uuid not null references edu_schools(id) on delete cascade,
  student_id    uuid not null references edu_students(id) on delete cascade,

  -- Nullable on purpose. Not every result comes from a set assessment: a
  -- developmental observation and a workplace competency sign-off are judged
  -- without one.
  assessment_id uuid references edu_assessments(id) on delete set null,

  -- The educational object being judged. An objective is version-pinned by
  -- (curriculum_id, full_code), so this reference is what preserves the
  -- historical meaning of the result permanently.
  objective_id  uuid references edu_learning_objectives(id) on delete set null,
  competency_id uuid references edu_competencies(id) on delete set null,

  assessor_id   uuid references edu_profiles(id) on delete set null,
  assessed_on   date not null default current_date,

  status        text not null default 'FINAL'
                  check (status in ('DRAFT','SUBMITTED','MARKED','FINAL','WITHDRAWN')),

  -- Which typed outcome table holds this result's value.
  outcome_model text not null
                  check (outcome_model in ('DEVELOPMENTAL','NUMERIC','COMPETENCY','CREDIT','COMPLETION')),

  -- Evidence lineage: what the judgement was based on.
  evidence_uri  text,
  evidence_kind text check (evidence_kind in ('OBSERVATION','SCRIPT','PHOTO','VIDEO','ARTEFACT','WORKPLACE_REPORT','PORTFOLIO')),
  remark        text,

  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),

  -- A result judges something.
  check (assessment_id is not null or objective_id is not null or competency_id is not null)
);

create index if not exists edu_results_student_idx   on edu_assessment_results(student_id, assessed_on);
create index if not exists edu_results_school_idx    on edu_assessment_results(school_id);
create index if not exists edu_results_objective_idx on edu_assessment_results(objective_id);

drop trigger if exists edu_results_set_updated_at on edu_assessment_results;
create trigger edu_results_set_updated_at before update on edu_assessment_results
  for each row execute function edu_set_updated_at();

-- The target of the composite foreign keys below.
create unique index if not exists edu_results_id_model
  on edu_assessment_results(id, outcome_model);

-- ---------------------------------------------------------------------------
-- typed outcomes
--
-- Each carries outcome_model as a fixed value and references the parent on
-- (id, outcome_model). A NUMERIC outcome therefore cannot be attached to a
-- COMPETENCY result: the database refuses it.
-- ---------------------------------------------------------------------------

create table if not exists edu_outcome_developmental (
  result_id     uuid primary key references edu_assessment_results(id) on delete cascade,
  outcome_model text not null default 'DEVELOPMENTAL' check (outcome_model = 'DEVELOPMENTAL'),
  -- No marks. Where the child is against the expectation, in words.
  descriptor    text not null
                  check (descriptor in ('NOT_YET','EMERGING','DEVELOPING','SECURE','EXCEEDING')),
  observation   text,
  foreign key (result_id, outcome_model)
    references edu_assessment_results(id, outcome_model) on delete cascade
);

create table if not exists edu_outcome_numeric (
  result_id     uuid primary key references edu_assessment_results(id) on delete cascade,
  outcome_model text not null default 'NUMERIC' check (outcome_model = 'NUMERIC'),
  score         numeric(7,2) not null check (score >= 0),
  max_score     numeric(7,2) not null check (max_score > 0),
  -- Stored, not recomputed, so a historical percentage survives a later change
  -- to how the assessment was weighted.
  percentage    numeric(5,2) generated always as (round(100 * score / max_score, 2)) stored,
  grade         text,
  grade_scale   text,
  check (score <= max_score),
  foreign key (result_id, outcome_model)
    references edu_assessment_results(id, outcome_model) on delete cascade
);

create table if not exists edu_outcome_competency (
  result_id     uuid primary key references edu_assessment_results(id) on delete cascade,
  outcome_model text not null default 'COMPETENCY' check (outcome_model = 'COMPETENCY'),
  -- "Not yet competent" is deliberately not "failed". A competency is
  -- reattempted until achieved, which is the point of the model.
  verdict       text not null check (verdict in ('COMPETENT','NOT_YET_COMPETENT')),
  method        text check (method in ('OBSERVATION','PRACTICAL_TEST','PROJECT','WORKPLACE','PORTFOLIO')),
  supervisor    text,
  attempt_no    int not null default 1 check (attempt_no > 0),
  foreign key (result_id, outcome_model)
    references edu_assessment_results(id, outcome_model) on delete cascade
);

create table if not exists edu_outcome_credit (
  result_id         uuid primary key references edu_assessment_results(id) on delete cascade,
  outcome_model     text not null default 'CREDIT' check (outcome_model = 'CREDIT'),
  grade             text,
  grade_points      numeric(4,2),
  credits_earned    numeric(5,2) not null default 0,
  credits_attempted numeric(5,2) not null default 0,
  check (credits_earned <= credits_attempted),
  foreign key (result_id, outcome_model)
    references edu_assessment_results(id, outcome_model) on delete cascade
);

create table if not exists edu_outcome_completion (
  result_id     uuid primary key references edu_assessment_results(id) on delete cascade,
  outcome_model text not null default 'COMPLETION' check (outcome_model = 'COMPLETION'),
  completed     boolean not null default false,
  completed_on  date,
  cpd_points    numeric(5,2),
  certificate_ref text,
  foreign key (result_id, outcome_model)
    references edu_assessment_results(id, outcome_model) on delete cascade
);

-- ---------------------------------------------------------------------------
-- one lifelong history
--
-- The Passport reads this, not five tables. Every stage of a learner's life
-- appears in one ordered list with its outcome rendered in its own terms.
-- ---------------------------------------------------------------------------

create or replace view v_edu_learner_results
with (security_invoker = true) as
select
  r.id, r.student_id, r.school_id, r.assessed_on, r.status,
  r.outcome_model, r.objective_id, r.competency_id, r.assessment_id,
  r.evidence_kind, r.remark,
  coalesce(
    d.descriptor,
    n.grade,
    c.verdict,
    cr.grade,
    case when cm.completed then 'COMPLETED' else 'IN_PROGRESS' end
  )                                              as outcome_label,
  n.percentage                                   as numeric_percentage,
  cr.grade_points,
  cr.credits_earned
from edu_assessment_results r
left join edu_outcome_developmental d on d.result_id = r.id
left join edu_outcome_numeric      n on n.result_id = r.id
left join edu_outcome_competency   c on c.result_id = r.id
left join edu_outcome_credit      cr on cr.result_id = r.id
left join edu_outcome_completion  cm on cm.result_id = r.id;

-- ---------------------------------------------------------------------------
-- RLS: same rule as every other learner record. Staff and officers by scope,
-- the learner and their guardian for their own, nobody else.
-- ---------------------------------------------------------------------------

alter table edu_assessment_results     enable row level security;
alter table edu_outcome_developmental  enable row level security;
alter table edu_outcome_numeric        enable row level security;
alter table edu_outcome_competency     enable row level security;
alter table edu_outcome_credit         enable row level security;
alter table edu_outcome_completion     enable row level security;

drop policy if exists edu_results_read_staff on edu_assessment_results;
create policy edu_results_read_staff on edu_assessment_results
  for select to authenticated using (edu_can_access_school(school_id));

drop policy if exists edu_results_read_self on edu_assessment_results;
create policy edu_results_read_self on edu_assessment_results
  for select to authenticated
  using (exists (
    select 1 from edu_students st
    where st.id = edu_assessment_results.student_id
      and (st.user_id = auth.uid() or st.guardian_user_id = auth.uid())
  ));

drop policy if exists edu_results_write on edu_assessment_results;
create policy edu_results_write on edu_assessment_results
  for all to authenticated
  using (edu_can_manage_school(school_id) or edu_is_school_staff(school_id))
  with check (edu_can_manage_school(school_id) or edu_is_school_staff(school_id));

-- Outcome rows inherit visibility from their result. Reading one requires
-- already being able to read the lineage row it hangs from.
do $$
declare t text;
begin
  foreach t in array array['edu_outcome_developmental','edu_outcome_numeric',
                           'edu_outcome_competency','edu_outcome_credit','edu_outcome_completion']
  loop
    execute format('drop policy if exists %I_read on %I', t, t);
    execute format($f$create policy %I_read on %I for select to authenticated
      using (exists (select 1 from edu_assessment_results r where r.id = %I.result_id))$f$, t, t, t);
    execute format('drop policy if exists %I_write on %I', t, t);
    execute format($f$create policy %I_write on %I for all to authenticated
      using (exists (select 1 from edu_assessment_results r
                     where r.id = %I.result_id and edu_is_school_staff(r.school_id)))
      with check (exists (select 1 from edu_assessment_results r
                          where r.id = %I.result_id and edu_is_school_staff(r.school_id)))$f$, t, t, t, t);
  end loop;
end
$$;

grant select on v_edu_learner_results to authenticated;
