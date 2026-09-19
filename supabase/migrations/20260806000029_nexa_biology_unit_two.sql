-- ============================================================================
-- NEXA EDU AUTHORED INSTRUCTIONAL CONTENT — Biology, continued
--
-- Provenance: NEXA_CORE, authority "Nexa EDU". This is secondary-school
-- biology written for this platform. It is not GES or NaCCA material, no
-- official curriculum document was used as its source, and GES_SBC is not
-- touched by this migration.
--
-- Extends the existing Cell Biology unit from one topic to three, and adds a
-- second unit so a learner can see that the subject continues past the first
-- topic. Ten lessons in total across the subject.
-- ============================================================================

do $$
declare
  v_cur uuid; v_off uuid; v_strand uuid; v_sub uuid;
  v_t2 uuid; v_t3 uuid; v_strand2 uuid; v_sub2 uuid; v_t4 uuid;
  v_o uuid; v_l uuid; v_q uuid;

begin
  select id into v_cur from edu_curricula where code = 'NEXA_CORE' and version = '1.0';
  if v_cur is null then return; end if;
  select o.id into v_off from edu_subject_offerings o
    join edu_subjects s on s.id = o.subject_id
   where o.curriculum_id = v_cur and s.name = 'Biology' and o.level_code = 'SHS_2';
  select id into v_strand from edu_strands where offering_id = v_off and code = '1';
  select id into v_sub from edu_sub_strands where strand_id = v_strand and code = '1';

  -- ============================ topic 2: transport across the cell membrane
  insert into edu_topics (sub_strand_id, code, name, expected_period, sort_order)
  values (v_sub, '2', 'Movement of Substances in and out of Cells', 3, 2)
  on conflict (sub_strand_id, code) do nothing;
  select id into v_t2 from edu_topics where sub_strand_id = v_sub and code = '2';

  ---------------------------------------------------------------- diffusion
  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values (v_t2, v_cur, 'BIO 2.1',
    'Explain diffusion and give examples of it in living things.',
    'Predict the direction of diffusion given a concentration difference.',
    'UNDERSTAND', 3, 1)
  on conflict (curriculum_id, full_code) do nothing;
  select id into v_o from edu_learning_objectives where curriculum_id = v_cur and full_code = 'BIO 2.1';

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_t2, v_cur, 'Diffusion',
    'Substances move in and out of cells all the time. Diffusion is the simplest way this happens, and it needs no energy from the cell.',
    4, 12, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to define diffusion, say which way substances move, and give examples of diffusion in the human body and in plants.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'Particles spread out on their own',
   'Open a bottle of perfume at one end of a room and someone at the other end smells it a moment later. Nobody pushed the perfume across the room. Its particles are moving constantly and randomly, and over time they spread from where there are many of them to where there are few.'
   || E'\n\n**Diffusion** is the net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient, until they are evenly spread.'
   || E'\n\nTwo things follow from that definition. First, diffusion needs **no energy from the cell**: the particles are already moving on their own. We call this a passive process. Second, diffusion only continues while a **concentration gradient** exists. Once the particles are evenly spread, movement continues but there is no longer a net change.'
   || E'\n\nDiffusion is faster when the gradient is steeper, when the temperature is higher, and when the distance to travel is shorter.',
   '{"diagram":"diffusion"}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'In the lungs, the air in an alveolus contains more oxygen than the blood arriving in the capillary beside it. Explain what happens to the oxygen and why.'
   || E'\n\n**Step 1. Compare the two concentrations.** Oxygen is at higher concentration in the alveolus than in the arriving blood.'
   || E'\n\n**Step 2. Apply the definition.** Particles diffuse from high concentration to low, so oxygen moves from the alveolus into the blood.'
   || E'\n\n**Step 3. Explain why it keeps going.** Blood flows past continuously, carrying oxygen away, so the concentration in the capillary stays low and the gradient is maintained.'
   || E'\n\n**Answer.** Oxygen diffuses from the alveolus into the blood, down its concentration gradient. Blood flow maintains the gradient so diffusion continues rather than stopping at equilibrium.',
   '{}'::jsonb),
  (v_l, 4, 'CHECK', 'Check your understanding',
   'Answer the question below. You will get an explanation either way.', '{"check":true}'::jsonb),
  (v_l, 5, 'REFLECTION', 'Before you move on',
   'You can now explain diffusion and predict which way substances will move. Next you will look at what happens when it is water that moves, which has its own name: osmosis.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'A drop of ink is placed in still water and slowly spreads until the water is evenly coloured. Which statement is correct?',
    '{"options":[{"key":"A","text":"The water pushed the ink outwards"},{"key":"B","text":"The ink particles moved down a concentration gradient"},{"key":"C","text":"The ink used energy to spread"},{"key":"D","text":"Diffusion stopped as soon as the colour was even"}],"answer":"B"}'::jsonb,
    'The ink particles moved down a concentration gradient, from where they were concentrated to where they were not. No energy was needed and nothing pushed them. Note that particle movement does not stop once the colour is even; it is only the net movement that stops.',
    1, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'SHORT_ANSWER',
    'Name the process by which oxygen moves from an alveolus into the blood.',
    '{"accepted":["diffusion"],"placeholder":"One word"}'::jsonb,
    'Diffusion. Oxygen moves from the alveolus, where it is at higher concentration, into the blood where it is lower. No energy is used, which is why it is called a passive process.',
    1, 'FOUNDATION', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  ------------------------------------------------------------------ osmosis
  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values (v_t2, v_cur, 'BIO 2.2',
    'Explain osmosis and predict what happens to plant and animal cells in different solutions.',
    'Given a cell and a surrounding solution, predict whether water enters or leaves and describe the result.',
    'APPLY', 3, 2)
  on conflict (curriculum_id, full_code) do nothing;
  select id into v_o from edu_learning_objectives where curriculum_id = v_cur and full_code = 'BIO 2.2';

  insert into edu_objective_prerequisites (objective_id, prerequisite_id, strength)
  select v_o, id, 'REQUIRED' from edu_learning_objectives
   where curriculum_id = v_cur and full_code = 'BIO 2.1' on conflict do nothing;

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_t2, v_cur, 'Osmosis',
    'Osmosis is diffusion, but specifically of water, and across a membrane that lets water through and holds solutes back. It explains why a wilted plant recovers and why a cell can burst.',
    5, 14, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to define osmosis, and predict what happens to a plant cell and to an animal cell placed in a dilute or a concentrated solution.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'Water moves too, and it has its own name',
   'A cell membrane is **partially permeable**: small water molecules pass through it easily, while larger dissolved particles such as sugar do not.'
   || E'\n\n**Osmosis** is the movement of water molecules from a dilute solution to a concentrated solution through a partially permeable membrane.'
   || E'\n\nIt helps to think about the water rather than the sugar. A dilute solution has a lot of water; a concentrated solution has less. Water therefore diffuses from where there is more of it to where there is less. Osmosis is simply diffusion of water across a membrane, so it also needs no energy.'
   || E'\n\nNow the consequences. An **animal cell** placed in pure water takes in water, swells, and can burst, because it has no wall to resist the pressure. Placed in a concentrated solution it loses water and shrinks.'
   || E'\n\nA **plant cell** placed in pure water also takes in water, but the rigid cell wall resists. The cell becomes firm, or turgid, which is what holds a plant upright. Placed in a concentrated solution it loses water, the vacuole shrinks, and the cell becomes flaccid. This is the wilting you met earlier.',
   '{"diagram":"osmosis"}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'A piece of fresh cassava is left in a strong salt solution for an hour. Predict what happens to it and explain why.'
   || E'\n\n**Step 1. Compare water concentration.** The salt solution is concentrated, so it has less water than the cell sap inside the cassava cells.'
   || E'\n\n**Step 2. Apply the definition of osmosis.** Water moves from the dilute side to the concentrated side, so water leaves the cells and enters the salt solution.'
   || E'\n\n**Step 3. Describe the result.** The vacuoles shrink, the cells lose their firmness, and the piece of cassava becomes limp and slightly smaller.'
   || E'\n\n**Answer.** It becomes soft and shrinks, because water left the cells by osmosis into the more concentrated salt solution. This is also why salting food preserves it: it draws water out of the microbes.',
   '{}'::jsonb),
  (v_l, 4, 'CHECK', 'Check your understanding',
   'Answer the question below. The explanation will tell you why.', '{"check":true}'::jsonb),
  (v_l, 5, 'REFLECTION', 'Before you move on',
   'You can now predict which way water moves and what it does to a cell. Next you will meet the one transport process that does need energy.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'A red blood cell is placed in pure water. What happens and why?',
    '{"options":[{"key":"A","text":"It shrinks, because water leaves it"},{"key":"B","text":"It swells and may burst, because water enters it"},{"key":"C","text":"Nothing, because the membrane blocks water"},{"key":"D","text":"It becomes turgid and firm, like a plant cell"}],"answer":"B"}'::jsonb,
    'It swells and may burst. Pure water is more dilute than the cell contents, so water enters by osmosis. An animal cell has no cell wall to resist the pressure, which is why it can burst. A plant cell in the same situation becomes turgid instead, because its wall resists.',
    1, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'Why does adding salt to fish help preserve it?',
    '{"options":[{"key":"A","text":"Salt kills microbes by poisoning them"},{"key":"B","text":"Salt draws water out of microbes by osmosis"},{"key":"C","text":"Salt stops oxygen reaching the fish"},{"key":"D","text":"Salt lowers the temperature of the fish"}],"answer":"B"}'::jsonb,
    'Salt draws water out of microbes by osmosis. The salted surface is a concentrated solution, so water leaves any microbe cells on the fish, and without water they cannot grow or reproduce. The salt is not acting as a poison.',
    2, 'EXTENSION', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  ---------------------------------------------------------- active transport
  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values (v_t2, v_cur, 'BIO 2.3',
    'Explain active transport and state how it differs from diffusion and osmosis.',
    'Decide whether a described movement is active or passive, and justify the decision.',
    'ANALYSE', 3, 3)
  on conflict (curriculum_id, full_code) do nothing;
  select id into v_o from edu_learning_objectives where curriculum_id = v_cur and full_code = 'BIO 2.3';

  insert into edu_objective_prerequisites (objective_id, prerequisite_id, strength)
  select v_o, id, 'HELPFUL' from edu_learning_objectives
   where curriculum_id = v_cur and full_code = 'BIO 2.2' on conflict do nothing;

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_t2, v_cur, 'Active transport',
    'Sometimes a cell needs a substance that is already more concentrated inside than outside. Moving it in means working against the gradient, and that costs energy.',
    6, 12, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to define active transport, explain why it requires energy, and decide whether a given example is active or passive.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'Moving uphill costs energy',
   'Diffusion and osmosis both move substances **down** a gradient, from high concentration to low, and neither costs the cell anything. But a root hair cell often needs to take in mineral ions from soil water where those ions are already scarcer than inside the cell.'
   || E'\n\nMoving a substance the other way, from low concentration to high, is like pushing something uphill. It does not happen on its own.'
   || E'\n\n**Active transport** is the movement of substances from a region of lower concentration to a region of higher concentration, against the concentration gradient, using energy released by respiration.'
   || E'\n\nTwo consequences worth remembering. Cells that do a lot of active transport, such as root hair cells and the lining of the small intestine, contain **many mitochondria**, because that is where the energy comes from. And anything that stops respiration, such as a lack of oxygen or a poison like cyanide, stops active transport but does not stop diffusion.',
   '{"diagram":"transport"}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'A root hair cell contains more nitrate ions than the soil water around it, yet it continues to absorb nitrate. Name the process and justify your answer.'
   || E'\n\n**Step 1. Compare the concentrations.** Nitrate is higher inside the cell than outside.'
   || E'\n\n**Step 2. Note the direction of movement.** Nitrate is still moving inwards, so it is moving from low concentration to high, against the gradient.'
   || E'\n\n**Step 3. Conclude and justify.** Diffusion and osmosis only move substances down a gradient, so neither can be responsible. Movement against a gradient requires energy from respiration.'
   || E'\n\n**Answer.** Active transport. The evidence is the direction: the ion is moving against its concentration gradient, which is only possible using energy. This is why root hair cells are rich in mitochondria.',
   '{}'::jsonb),
  (v_l, 4, 'CHECK', 'Check your understanding',
   'Answer the question below to check you can tell active from passive movement.', '{"check":true}'::jsonb),
  (v_l, 5, 'REFLECTION', 'You have finished this topic',
   'You can now explain all three ways substances cross a cell membrane, and tell which of them cost the cell energy. Next you will look at how cells make more of themselves.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'A cell is treated with a poison that stops respiration. Which process stops as a direct result?',
    '{"options":[{"key":"A","text":"Diffusion"},{"key":"B","text":"Osmosis"},{"key":"C","text":"Active transport"},{"key":"D","text":"All three stop equally"}],"answer":"C"}'::jsonb,
    'Active transport. It is the only one of the three that uses energy from respiration, so stopping respiration stops it. Diffusion and osmosis are passive: the particles move on their own down a gradient, with no energy from the cell.',
    2, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  -- ==================================================== topic 3: cell division
  insert into edu_topics (sub_strand_id, code, name, expected_period, sort_order)
  values (v_sub, '3', 'Cell Division', 3, 3)
  on conflict (sub_strand_id, code) do nothing;
  select id into v_t3 from edu_topics where sub_strand_id = v_sub and code = '3';

  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values (v_t3, v_cur, 'BIO 3.1',
    'Describe mitosis and explain where it is needed in a living organism.',
    'Give examples of where mitosis occurs and say why it is needed there.',
    'UNDERSTAND', 3, 1)
  on conflict (curriculum_id, full_code) do nothing;
  select id into v_o from edu_learning_objectives where curriculum_id = v_cur and full_code = 'BIO 3.1';

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_t3, v_cur, 'Mitosis: making identical cells',
    'You began as one cell and now have trillions. Mitosis is how a cell makes two copies of itself that carry exactly the same genetic information.',
    7, 12, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to say what mitosis produces, and name three situations in the body where it is needed.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'One cell becomes two identical cells',
   '**Mitosis** is cell division that produces two daughter cells, each with the same number of chromosomes as the parent cell and the same genetic information.'
   || E'\n\nBefore a cell divides it first copies its DNA, so that each daughter can receive a complete set. The copies are then separated and the cell splits in two. The key word is **identical**: barring rare copying errors, the two new cells carry exactly what the parent carried.'
   || E'\n\nThat matters because of what mitosis is for. **Growth**: a seedling becomes a tree by making more cells, not bigger ones. **Repair**: when you cut your skin, cells around the wound divide to replace what was lost. **Replacement**: your red blood cells last about 120 days, so new ones must constantly be made. In each case you need new cells that behave exactly like the old ones.',
   '{}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'A lizard loses part of its tail and grows it back. Explain the cell process involved and why it must be mitosis rather than any other kind of division.'
   || E'\n\n**Step 1. Identify what is needed.** New tail cells, of the same types the tail already had.'
   || E'\n\n**Step 2. Ask what kind of cells are required.** They must carry the same genetic information as the lizard''s other cells, or the new tissue would not function as lizard tail.'
   || E'\n\n**Step 3. Match to the process.** Mitosis produces genetically identical daughter cells. Any process producing cells with half the chromosomes would not build working body tissue.'
   || E'\n\n**Answer.** Mitosis. Regrowth is repair and growth, both of which need genetically identical cells with the full chromosome number.',
   '{}'::jsonb),
  (v_l, 4, 'CHECK', 'Check your understanding',
   'Answer the question below.', '{"check":true}'::jsonb),
  (v_l, 5, 'REFLECTION', 'Before you move on',
   'You can now describe mitosis and say where it is needed. Next you will meet the other kind of division, the one that makes sex cells.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'Which of these is NOT a role of mitosis?',
    '{"options":[{"key":"A","text":"Growth of a young plant"},{"key":"B","text":"Healing a cut"},{"key":"C","text":"Producing sperm and egg cells"},{"key":"D","text":"Replacing worn-out red blood cells"}],"answer":"C"}'::jsonb,
    'Producing sperm and egg cells is not mitosis. Sex cells must carry half the chromosome number, so they are made by meiosis. Growth, repair and replacement all need genetically identical cells with the full number, which is exactly what mitosis produces.',
    1, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  ------------------------------------------------------- mitosis vs meiosis
  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values (v_t3, v_cur, 'BIO 3.2',
    'Distinguish between mitosis and meiosis and explain why both are necessary.',
    'Compare the two processes by number of daughter cells, chromosome number and genetic variation.',
    'ANALYSE', 3, 2)
  on conflict (curriculum_id, full_code) do nothing;
  select id into v_o from edu_learning_objectives where curriculum_id = v_cur and full_code = 'BIO 3.2';

  insert into edu_objective_prerequisites (objective_id, prerequisite_id, strength)
  select v_o, id, 'REQUIRED' from edu_learning_objectives
   where curriculum_id = v_cur and full_code = 'BIO 3.1' on conflict do nothing;

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_t3, v_cur, 'Meiosis and why two kinds of division exist',
    'If sex cells were made by mitosis, the chromosome number would double every generation. Meiosis is the answer to that problem.',
    8, 12, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to state three differences between mitosis and meiosis, and explain why a species needs both.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'Halving the number, and mixing the deck',
   'A human body cell carries 46 chromosomes. If a sperm carried 46 and an egg carried 46, the child would have 92, and the next generation 184. Clearly something must halve the number before fertilisation.'
   || E'\n\n**Meiosis** is cell division that produces four daughter cells, each with half the chromosome number of the parent cell, and each genetically different from the others.'
   || E'\n\nCompare the two directly. Mitosis makes **two** cells; meiosis makes **four**. Mitosis keeps the **full** chromosome number; meiosis **halves** it. Mitosis produces cells that are genetically **identical**; meiosis produces cells that are genetically **different**.'
   || E'\n\nThat last difference matters as much as the first. Because meiosis shuffles the genetic material, no two gametes are alike, so offspring vary. Variation is what allows a population to adapt when conditions change.',
   '{"diagram":"division"}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'A body cell of a certain plant contains 20 chromosomes. How many chromosomes are in one of its pollen grains, and which division produced it?'
   || E'\n\n**Step 1. Identify the cell type.** A pollen grain carries a male gamete, a sex cell.'
   || E'\n\n**Step 2. Recall what makes gametes.** Gametes are produced by meiosis, which halves the chromosome number.'
   || E'\n\n**Step 3. Do the arithmetic.** Half of 20 is 10.'
   || E'\n\n**Answer.** 10 chromosomes, produced by meiosis. Fertilisation then restores 20 when male and female gametes fuse, which is why the chromosome number stays constant across generations.',
   '{}'::jsonb),
  (v_l, 4, 'CHECK', 'Check your understanding',
   'Answer the question below.', '{"check":true}'::jsonb),
  (v_l, 5, 'REFLECTION', 'You have finished this topic',
   'You can now tell the two kinds of cell division apart and explain why both exist. That completes the cell biology unit.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'A body cell of an animal has 24 chromosomes. How many will each of its gametes have?',
    '{"options":[{"key":"A","text":"12"},{"key":"B","text":"24"},{"key":"C","text":"48"},{"key":"D","text":"6"}],"answer":"A"}'::jsonb,
    '12. Gametes are made by meiosis, which halves the chromosome number, so 24 becomes 12. Fertilisation then restores 24 when two gametes fuse. If gametes kept the full 24, every generation would double the number.',
    1, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'Which statement describes a difference between mitosis and meiosis?',
    '{"options":[{"key":"A","text":"Mitosis produces four cells, meiosis produces two"},{"key":"B","text":"Mitosis produces genetically identical cells, meiosis produces varied ones"},{"key":"C","text":"Mitosis halves the chromosome number, meiosis keeps it"},{"key":"D","text":"Only meiosis occurs in plants"}],"answer":"B"}'::jsonb,
    'Mitosis produces genetically identical cells and meiosis produces varied ones. The other options reverse the facts: mitosis makes two cells and keeps the full chromosome number; meiosis makes four and halves it. Both occur in plants and animals.',
    2, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  -- ====================================== second unit: nutrition in plants
  insert into edu_strands (offering_id, code, name, sort_order)
  values (v_off, '2', 'Cycles of Matter and Energy in Nature', 2)
  on conflict (offering_id, code) do nothing;
  select id into v_strand2 from edu_strands where offering_id = v_off and code = '2';

  insert into edu_sub_strands (strand_id, code, name, sort_order)
  values (v_strand2, '1', 'Nutrition in Plants', 1)
  on conflict (strand_id, code) do nothing;
  select id into v_sub2 from edu_sub_strands where strand_id = v_strand2 and code = '1';

  insert into edu_topics (sub_strand_id, code, name, expected_period, sort_order)
  values (v_sub2, '1', 'Photosynthesis', 3, 1)
  on conflict (sub_strand_id, code) do nothing;
  select id into v_t4 from edu_topics where sub_strand_id = v_sub2 and code = '1';

  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values (v_t4, v_cur, 'BIO 4.1',
    'State the raw materials, conditions and products of photosynthesis and write the word equation.',
    'Write and explain the word equation for photosynthesis.',
    'UNDERSTAND', 3, 1)
  on conflict (curriculum_id, full_code) do nothing;
  select id into v_o from edu_learning_objectives where curriculum_id = v_cur and full_code = 'BIO 4.1';

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_t4, v_cur, 'How plants make their own food',
    'Animals eat. Plants build their food from carbon dioxide and water using light. This lesson covers what goes in, what comes out, and what is needed for it to happen.',
    9, 12, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to write the word equation for photosynthesis, and state the two conditions it needs.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'Building food out of air and water',
   'You met chloroplasts earlier: the green structures in plant cells that contain chlorophyll. This lesson is about what they actually do.'
   || E'\n\n**Photosynthesis** is the process by which green plants make glucose from carbon dioxide and water, using light energy trapped by chlorophyll, releasing oxygen as a by-product.'
   || E'\n\nThe word equation is worth memorising exactly:'
   || E'\n\n**carbon dioxide + water → glucose + oxygen**, in the presence of light and chlorophyll.'
   || E'\n\nNotice where each thing comes from and goes. Carbon dioxide enters the leaf through tiny pores called **stomata**. Water arrives from the soil through the roots. Glucose is used for respiration or stored as starch. Oxygen leaves through the stomata, which is the source of nearly all the oxygen you breathe.'
   || E'\n\nLight and chlorophyll are written beside the arrow rather than as inputs, because they are **conditions**: they are needed for the reaction but are not raw materials that get used up into the product.',
   '{"diagram":"photosynthesis"}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'A plant is kept in a well-lit room but its leaves are coated with petroleum jelly on both surfaces. After a week it is unhealthy. Explain why.'
   || E'\n\n**Step 1. Check each requirement in turn.** Light is present. Water is available through the roots. Chlorophyll is unaffected.'
   || E'\n\n**Step 2. Find the one that is blocked.** The jelly seals the stomata, the pores through which carbon dioxide enters.'
   || E'\n\n**Step 3. Follow the consequence.** Without carbon dioxide, one of the two raw materials is missing, so photosynthesis slows or stops and the plant cannot make glucose.'
   || E'\n\n**Answer.** The blocked stomata prevent carbon dioxide entering, so photosynthesis stops for lack of a raw material, and the plant runs short of food even though light and water are plentiful.',
   '{}'::jsonb),
  (v_l, 4, 'CHECK', 'Check your understanding',
   'Answer the question below.', '{"check":true}'::jsonb),
  (v_l, 5, 'REFLECTION', 'Before you move on',
   'You can now write the equation for photosynthesis and explain each part of it. Next you will see how the structure of a leaf is suited to doing this job well.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'Which pair are the raw materials of photosynthesis?',
    '{"options":[{"key":"A","text":"Glucose and oxygen"},{"key":"B","text":"Carbon dioxide and water"},{"key":"C","text":"Light and chlorophyll"},{"key":"D","text":"Oxygen and water"}],"answer":"B"}'::jsonb,
    'Carbon dioxide and water. Glucose and oxygen are the products, not the raw materials. Light and chlorophyll are conditions: needed for the reaction to happen, but not consumed into the product.',
    1, 'FOUNDATION', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'SHORT_ANSWER',
    'Name the pores in a leaf through which carbon dioxide enters.',
    '{"accepted":["stomata","stoma","stomata (singular stoma)"],"placeholder":"Type your answer"}'::jsonb,
    'The stomata (one is a stoma). They are mostly on the underside of the leaf and can open and close, which lets the plant control gas exchange and limit water loss.',
    1, 'FOUNDATION', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  ------------------------------------------------------------ leaf structure
  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values (v_t4, v_cur, 'BIO 4.2',
    'Explain how the structure of a leaf suits it for photosynthesis.',
    'Relate each named leaf feature to the job it performs.',
    'ANALYSE', 3, 2)
  on conflict (curriculum_id, full_code) do nothing;
  select id into v_o from edu_learning_objectives where curriculum_id = v_cur and full_code = 'BIO 4.2';

  insert into edu_objective_prerequisites (objective_id, prerequisite_id, strength)
  select v_o, id, 'REQUIRED' from edu_learning_objectives
   where curriculum_id = v_cur and full_code = 'BIO 4.1' on conflict do nothing;

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_t4, v_cur, 'Why a leaf is shaped the way it is',
    'A leaf is not flat and thin by accident. Every feature of it can be explained by the job it does.',
    10, 10, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to name four features of a leaf and explain how each one helps photosynthesis.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'Every feature has a reason',
   'Take each feature and ask what it is for. That is how this topic is examined, and it is also how a biologist thinks.'
   || E'\n\n**Broad and flat.** A large surface area catches more light and absorbs more carbon dioxide.'
   || E'\n\n**Thin.** Carbon dioxide has only a short distance to diffuse to reach the inner cells, and light penetrates to all layers.'
   || E'\n\n**Many chloroplasts in the upper layer.** The palisade cells sit near the top surface, packed with chloroplasts, where the light is strongest.'
   || E'\n\n**Stomata, mostly underneath.** These let carbon dioxide in and oxygen out. Placing most of them on the shaded lower surface reduces water loss.'
   || E'\n\n**A network of veins.** Veins bring water from the roots to every part of the leaf and carry glucose away to the rest of the plant.'
   || E'\n\nNotice that the answers all fall into three groups: getting light, getting carbon dioxide, and moving materials in and out.',
   '{"diagram":"leaf"}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'Explain why most stomata are found on the lower surface of a leaf rather than the upper surface.'
   || E'\n\n**Step 1. State what stomata do.** They allow carbon dioxide in and oxygen out, but water vapour also escapes through them.'
   || E'\n\n**Step 2. Compare the two surfaces.** The upper surface faces the sun and is hotter; the lower surface is shaded and cooler.'
   || E'\n\n**Step 3. Weigh the trade-off.** Openings on the hotter upper surface would lose water far faster. Placing them underneath still admits carbon dioxide, which diffuses freely, while losing less water.'
   || E'\n\n**Answer.** Because the lower surface is cooler and shaded, stomata there lose less water by evaporation while still allowing the gas exchange photosynthesis needs.',
   '{}'::jsonb),
  (v_l, 4, 'CHECK', 'Check your understanding',
   'Answer the question below.', '{"check":true}'::jsonb),
  (v_l, 5, 'REFLECTION', 'You have finished this unit',
   'You can now explain how a leaf is adapted to its job. Between this unit and the cell biology unit, you have covered how cells are built, how substances move in and out of them, how they divide, and how plants feed themselves.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'Why are palisade cells packed with chloroplasts and positioned near the upper surface of a leaf?',
    '{"options":[{"key":"A","text":"To reduce water loss"},{"key":"B","text":"To absorb as much light as possible"},{"key":"C","text":"To let carbon dioxide in"},{"key":"D","text":"To support the leaf"}],"answer":"B"}'::jsonb,
    'To absorb as much light as possible. Light is strongest at the upper surface, so the cells with the most chloroplasts are placed there. Reducing water loss is the job of the waxy upper layer and the placing of stomata underneath; gas entry is the job of the stomata.',
    1, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'A leaf is broad, flat and thin. Which explanation is correct?',
    '{"options":[{"key":"A","text":"Broad for light, thin for a short diffusion distance"},{"key":"B","text":"Broad to store water, thin to save material"},{"key":"C","text":"Broad for support, thin for flexibility"},{"key":"D","text":"Broad to shade the soil, thin to reduce weight"}],"answer":"A"}'::jsonb,
    'Broad for light, thin for a short diffusion distance. The large flat surface catches light and absorbs carbon dioxide, while the small thickness means gases reach the inner cells quickly. The other explanations describe effects that are not the reason the shape helps photosynthesis.',
    2, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);
end
$$;
