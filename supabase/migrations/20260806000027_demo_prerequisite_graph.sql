-- ============================================================================
-- DEMO CONTENT — NOT OFFICIAL CURRICULUM
--
-- No schema change. edu_objective_prerequisites already models a graph
-- correctly: a composite key over two real objective references, a strength,
-- and a check that nothing is its own prerequisite. §8 needed nothing added to
-- it.
--
-- What the demo curriculum could not yet demonstrate:
--
--   * every objective had exactly one prerequisite, so a learner facing several
--     could not be shown;
--   * every prerequisite already had an approved lesson, so a prerequisite in
--     the NO_CONTENT state could not be shown;
--   * every edge stayed inside one subject, so the graph looked like a chain
--     and cross-subject context was never exercised.
--
-- The edges below fix all three with real relationships rather than test
-- scaffolding. DEMO.JHS_1.2 gains a second prerequisite in a different subject
-- which itself has no authored lessons, so "no content yet" is reachable and is
-- visibly not the same as "not started".
--
-- HELPFUL, not REQUIRED, because that is what these are. A prerequisite is
-- never a lock in this platform, and the strength recorded here should not
-- imply one.
--
-- Belongs to DEMO_NAVIGATOR only. GES_SBC is untouched. Removed with the rest
-- of the demonstration data by:
--   delete from edu_curricula where code = 'DEMO_NAVIGATOR';
-- ============================================================================

insert into edu_objective_prerequisites (objective_id, prerequisite_id, strength)
select o.id, p.id, v.strength
from (values
  -- a second prerequisite, in another subject, with no authored lessons
  ('DEMO.JHS_1.2',      'DEMO.KG_1.2',   'HELPFUL'),
  -- a third, so the list is plainly a set and not a pair
  ('DEMO.JHS_1.2',      'DEMO.TVET_2.1', 'HELPFUL'),
  -- a second branch elsewhere in the graph
  ('DEMO.UNI_YEAR_2.2', 'DEMO.JHS_1.1',  'HELPFUL')
) as v(objective_code, prerequisite_code, strength)
join edu_curricula c on c.code = 'DEMO_NAVIGATOR'
join edu_learning_objectives o
  on o.full_code = v.objective_code and o.curriculum_id = c.id
join edu_learning_objectives p
  on p.full_code = v.prerequisite_code and p.curriculum_id = c.id
on conflict (objective_id, prerequisite_id) do nothing;
