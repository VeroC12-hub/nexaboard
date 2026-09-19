-- ============================================================================
-- Defect fix: edu_content_objectives inherited no approval gate.
--
-- Migration 019 closed this leak for edu_lesson_steps, edu_lesson_objectives
-- and edu_lesson_content, but edu_content_objectives was created in the same
-- blanket `using (true)` loop and was missed.
--
-- The row itself is the leak: it reveals that an unapproved resource exists,
-- which objective it targets, and its id. The resource body is protected by
-- edu_content_read; its existence was not.
--
-- Same reasoning as 019: a link row has no meaning apart from the content item
-- it points at, so its visibility must be that item's visibility. Delegating to
-- the parent rather than restating the approval rule means the two cannot drift.
--
-- edu_lesson_content is already gated on its parent lesson by 019. A resource
-- reached through a lesson is therefore gated twice, by the lesson and by
-- edu_content_read, which is correct: both paths have to permit it.
-- ============================================================================

drop policy if exists edu_content_objectives_read on edu_content_objectives;
create policy edu_content_objectives_read on edu_content_objectives
  for select to authenticated
  using (exists (
    select 1 from edu_content_items ci
    where ci.id = edu_content_objectives.content_id
      and (ci.approval = 'APPROVED' or ci.created_by = auth.uid() or edu_is_national())
  ));
