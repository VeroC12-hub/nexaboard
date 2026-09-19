-- ============================================================================
-- DEMO CONTENT — NOT OFFICIAL CURRICULUM
--
-- Attaches the [DEMO] resources to the [DEMO] lessons.
--
-- Migration 021 linked resources to objectives only, which left
-- edu_lesson_content empty and the Lesson -> Resource leg of the path
-- unexercised: the lesson materials panel could only ever show its empty state.
--
-- A lesson's materials are the materials of the objectives that lesson teaches,
-- which is the relationship edu_lesson_content already exists to carry. Ordered
-- so the video comes before the reading, and the resource with no file is
-- included deliberately so the unavailable state is reachable from a lesson and
-- not only from an objective.
--
-- Removed with everything else by:
--   delete from edu_curricula where code = 'DEMO_NAVIGATOR';
-- ============================================================================

insert into edu_lesson_content (lesson_id, content_id, sequence)
select l.id, ci.id,
       row_number() over (partition by l.id order by
         case ci.kind when 'VIDEO' then 1 when 'TEXTBOOK' then 2
                      when 'PAST_PAPER' then 3 else 4 end, ci.title)
from edu_lessons l
join edu_curricula c        on c.id = l.curriculum_id and c.code = 'DEMO_NAVIGATOR'
join edu_lesson_objectives lo on lo.lesson_id = l.id
join edu_content_objectives co on co.objective_id = lo.objective_id
join edu_content_items ci     on ci.id = co.content_id
where l.approval = 'APPROVED'
  and ci.approval = 'APPROVED'
on conflict (lesson_id, content_id) do nothing;
