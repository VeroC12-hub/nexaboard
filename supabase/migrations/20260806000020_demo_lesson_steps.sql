-- ============================================================================
-- DEMO CONTENT — NOT OFFICIAL CURRICULUM
--
-- Adds steps 2 to 4 to each approved [DEMO] lesson so the lesson player's
-- ordering, backward navigation and resume behaviour can be exercised across
-- several steps rather than one.
--
-- Belongs to the DEMO_NAVIGATOR curriculum only. Removed with everything else
-- by:
--   delete from edu_curricula where code = 'DEMO_NAVIGATOR';
--
-- Idempotent: keyed on (lesson_id, sequence), so re-running adds nothing.
-- ============================================================================

insert into edu_lesson_steps (lesson_id, sequence, kind, title, body)
select l.id, v.seq, v.kind, v.title, v.body
from edu_lessons l
join edu_curricula c on c.id = l.curriculum_id and c.code = 'DEMO_NAVIGATOR'
cross join (values
  (2, 'WORKED_EXAMPLE', '[DEMO] Step two',
      'Demonstration step two. Exists so step ordering and backward navigation can be tested.'),
  (3, 'TRY',            '[DEMO] Step three',
      'Demonstration step three. Exists so resume behaviour can be tested from the middle of a lesson.'),
  (4, 'CHECK',          '[DEMO] Step four',
      'Demonstration step four, the last step. Reaching it must not mark the lesson complete on its own.')
) as v(seq, kind, title, body)
where l.approval = 'APPROVED'
on conflict (lesson_id, sequence) do nothing;
