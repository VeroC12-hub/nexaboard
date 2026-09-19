-- ============================================================================
-- Retire the DEMO_NAVIGATOR fixtures from the learner experience.
--
-- Those lessons, materials and questions were built to exercise the navigator
-- while no real content existed. Real content exists now, so they have no place
-- in front of a learner: Explore is part of the product, and a learner browsing
-- another level should not meet "[DEMO] Topic with content".
--
-- They are withdrawn rather than deleted. The rows remain for anyone who needs
-- to inspect what the fixtures looked like, and the approval gate proven in §5
-- to §8 is exactly the mechanism that now hides them: a learner reads only
-- APPROVED material, so WITHDRAWN disappears without a single line of frontend
-- filtering.
--
-- Consequence worth recording: the §5 to §8 verification suites used these
-- fixtures as their APPROVED subjects. Those suites will now report the demo
-- content as invisible, because it is. Re-point them at NEXA_CORE content if
-- they need to run again.
-- ============================================================================

update edu_lessons set approval = 'WITHDRAWN'
 where curriculum_id in (select id from edu_curricula where code = 'DEMO_NAVIGATOR')
   and approval <> 'WITHDRAWN';

update edu_content_items set approval = 'WITHDRAWN'
 where curriculum_id in (select id from edu_curricula where code = 'DEMO_NAVIGATOR')
   and approval <> 'WITHDRAWN';

update edu_questions set approval = 'WITHDRAWN'
 where curriculum_id in (select id from edu_curricula where code = 'DEMO_NAVIGATOR')
   and approval <> 'WITHDRAWN';
