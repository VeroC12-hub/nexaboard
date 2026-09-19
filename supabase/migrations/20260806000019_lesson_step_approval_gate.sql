-- ============================================================================
-- Defect fix: lesson steps inherited no approval gate.
--
-- edu_lessons is correctly gated — a learner reads only APPROVED lessons. But
-- edu_lesson_steps was created with a blanket `using (true)`, so the body of an
-- unapproved lesson was readable by any signed-in learner who had its id.
--
-- Verified before this migration: a learner token returned 1 step belonging to
-- a DRAFT lesson. The lesson was hidden; its contents were not.
--
-- A step has no meaning apart from its lesson, so its visibility must be its
-- lesson's visibility. Delegating to the parent rather than repeating the
-- approval rule means the two can never drift.
--
-- The same reasoning applies to edu_lesson_objectives and edu_lesson_content,
-- which likewise exposed which objectives and materials an unapproved lesson
-- targets.
-- ============================================================================

drop policy if exists edu_lesson_steps_read on edu_lesson_steps;
create policy edu_lesson_steps_read on edu_lesson_steps
  for select to authenticated
  using (exists (
    select 1 from edu_lessons l
    where l.id = edu_lesson_steps.lesson_id
      and (l.approval = 'APPROVED' or l.created_by = auth.uid() or edu_is_national())
  ));

drop policy if exists edu_lesson_objectives_read on edu_lesson_objectives;
create policy edu_lesson_objectives_read on edu_lesson_objectives
  for select to authenticated
  using (exists (
    select 1 from edu_lessons l
    where l.id = edu_lesson_objectives.lesson_id
      and (l.approval = 'APPROVED' or l.created_by = auth.uid() or edu_is_national())
  ));

drop policy if exists edu_lesson_content_read on edu_lesson_content;
create policy edu_lesson_content_read on edu_lesson_content
  for select to authenticated
  using (exists (
    select 1 from edu_lessons l
    where l.id = edu_lesson_content.lesson_id
      and (l.approval = 'APPROVED' or l.created_by = auth.uid() or edu_is_national())
  ));
