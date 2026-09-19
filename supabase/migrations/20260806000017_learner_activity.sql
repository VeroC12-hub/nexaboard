-- ============================================================================
-- STAGE TWO, part 1: learner activity.
--
-- Two entities, and only two. Before adding either I checked whether an
-- existing Stage One entity could own the relationship:
--
--   edu_assessment_results is the OFFICIAL result lineage the Passport reads.
--     Recording "opened a lesson" or "practised a question" there would put
--     self-directed practice into a learner's permanent record, which the
--     Stage Two requirement explicitly forbids: practice must never modify
--     official results, and the two must stay clearly distinguishable.
--
--   edu_attendance records presence at a class on a date. Wrong grain and a
--     different fact entirely.
--
--   edu_lesson_steps defines content, not per-learner state.
--
-- Nothing else in the schema is per-learner. Hence these two.
--
-- Progress at objective, topic and subject level is deliberately NOT stored.
-- It is derived by walking edu_lesson_objectives into the Stage One hierarchy,
-- because storing it would be a second representation of something the
-- curriculum already expresses, and would drift from it.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- lesson progress
--
-- One row per learner per lesson. Absence means not started, so the table
-- carries only real activity and an empty progress view is honestly empty
-- rather than a wall of zero rows.
-- ---------------------------------------------------------------------------

create table if not exists edu_learner_lesson_progress (
  id           uuid primary key default gen_random_uuid(),
  student_id   uuid not null references edu_students(id) on delete cascade,
  lesson_id    uuid not null references edu_lessons(id) on delete cascade,
  status       text not null default 'IN_PROGRESS'
                 check (status in ('IN_PROGRESS','COMPLETED')),
  -- How far through the ordered steps the learner has reached.
  last_step    int not null default 0 check (last_step >= 0),
  started_at   timestamptz not null default now(),
  completed_at timestamptz,
  updated_at   timestamptz not null default now(),
  unique (student_id, lesson_id),
  check (status <> 'COMPLETED' or completed_at is not null)
);

create index if not exists edu_lesson_progress_student_idx
  on edu_learner_lesson_progress(student_id);

drop trigger if exists edu_lesson_progress_updated on edu_learner_lesson_progress;
create trigger edu_lesson_progress_updated before update on edu_learner_lesson_progress
  for each row execute function edu_set_updated_at();

-- ---------------------------------------------------------------------------
-- practice attempts
--
-- Self-directed practice. Every attempt is kept rather than only the latest,
-- because improving on a second attempt is the thing worth seeing, and a
-- competency model treats reattempt as normal rather than as failure.
--
-- objective_id is not stored here: it is reachable through
-- edu_question_objectives, and duplicating it would let the two disagree.
-- ---------------------------------------------------------------------------

create table if not exists edu_practice_attempts (
  id           uuid primary key default gen_random_uuid(),
  student_id   uuid not null references edu_students(id) on delete cascade,
  question_id  uuid not null references edu_questions(id) on delete cascade,
  -- The learner's answer, shaped by the question kind.
  response     jsonb not null default '{}'::jsonb,
  is_correct   boolean,
  hint_used    boolean not null default false,
  attempt_no   int not null default 1 check (attempt_no > 0),
  attempted_at timestamptz not null default now()
);

create index if not exists edu_practice_student_idx
  on edu_practice_attempts(student_id, attempted_at desc);
create index if not exists edu_practice_question_idx
  on edu_practice_attempts(question_id);

-- ---------------------------------------------------------------------------
-- RLS
--
-- A learner owns their own activity: they may read and write it. Staff at the
-- learner's school may read it, because a teacher supporting a struggling
-- learner needs to see what has been attempted. Nobody may write another
-- learner's activity, including staff: this is the learner's own record of
-- what they did, not an official judgement about them.
-- ---------------------------------------------------------------------------

alter table edu_learner_lesson_progress enable row level security;
alter table edu_practice_attempts       enable row level security;

drop policy if exists edu_lesson_progress_own on edu_learner_lesson_progress;
create policy edu_lesson_progress_own on edu_learner_lesson_progress
  for all to authenticated
  using (exists (
    select 1 from edu_students st
    where st.id = edu_learner_lesson_progress.student_id and st.user_id = auth.uid()))
  with check (exists (
    select 1 from edu_students st
    where st.id = edu_learner_lesson_progress.student_id and st.user_id = auth.uid()));

drop policy if exists edu_lesson_progress_staff on edu_learner_lesson_progress;
create policy edu_lesson_progress_staff on edu_learner_lesson_progress
  for select to authenticated
  using (exists (
    select 1 from edu_students st
    where st.id = edu_learner_lesson_progress.student_id
      and (edu_can_access_school(st.school_id) or st.guardian_user_id = auth.uid())));

drop policy if exists edu_practice_own on edu_practice_attempts;
create policy edu_practice_own on edu_practice_attempts
  for all to authenticated
  using (exists (
    select 1 from edu_students st
    where st.id = edu_practice_attempts.student_id and st.user_id = auth.uid()))
  with check (exists (
    select 1 from edu_students st
    where st.id = edu_practice_attempts.student_id and st.user_id = auth.uid()));

drop policy if exists edu_practice_staff on edu_practice_attempts;
create policy edu_practice_staff on edu_practice_attempts
  for select to authenticated
  using (exists (
    select 1 from edu_students st
    where st.id = edu_practice_attempts.student_id
      and (edu_can_access_school(st.school_id) or st.guardian_user_id = auth.uid())));

-- ---------------------------------------------------------------------------
-- derived progress
--
-- Objective-level progress computed from lesson activity through the Stage One
-- hierarchy. A view rather than a table, so it can never disagree with the
-- curriculum it is derived from.
--
-- An objective with no lessons authored yet returns lessons_total = 0, which
-- the interface must report as "no content yet" rather than as 0% progress.
-- Those are different statements and conflating them would be dishonest.
-- ---------------------------------------------------------------------------

create or replace view v_edu_objective_progress
with (security_invoker = true) as
select
  st.id                                   as student_id,
  lo.id                                   as objective_id,
  lo.topic_id,
  count(distinct l.id)                    as lessons_total,
  count(distinct p.lesson_id) filter (where p.status = 'COMPLETED') as lessons_completed,
  count(distinct p.lesson_id) filter (where p.status = 'IN_PROGRESS') as lessons_in_progress,
  case
    when count(distinct l.id) = 0 then 'NO_CONTENT'
    when count(distinct p.lesson_id) filter (where p.status = 'COMPLETED') = count(distinct l.id) then 'COMPLETED'
    when count(distinct p.lesson_id) > 0 then 'IN_PROGRESS'
    else 'NOT_STARTED'
  end                                     as state
from edu_students st
cross join edu_learning_objectives lo
left join edu_lesson_objectives lob on lob.objective_id = lo.id
left join edu_lessons l on l.id = lob.lesson_id and l.approval = 'APPROVED'
left join edu_learner_lesson_progress p on p.lesson_id = l.id and p.student_id = st.id
group by st.id, lo.id, lo.topic_id;

grant select on v_edu_objective_progress to authenticated;
