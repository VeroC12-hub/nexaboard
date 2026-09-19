-- ============================================================================
-- NEXA EDU AUTHORED INSTRUCTIONAL CONTENT
--
-- Provenance, stated plainly and stored truthfully:
--
--   GES_SBC   is the official Standards-Based Curriculum. Authority NaCCA.
--             This migration does not touch it, add to it, or imply anything
--             about it.
--
--   NEXA_CORE is instructional material written by Nexa EDU. Its authority
--             column says so. It is not government curriculum and never claims
--             to be, but it is real teaching content, not demonstration data
--             and not a test fixture.
--
-- The distinction lives in the data and is surfaced on the subject and lesson
-- pages as a source line. It deliberately does not appear as a warning banner
-- on every screen: a learner reading about cells does not need to be told six
-- times who wrote the page.
--
-- Content: Senior High biology, cell structure and organisation. Written to be
-- taught from, so a learner finishes each lesson knowing something specific.
-- ============================================================================

do $$
declare
  v_cur uuid; v_subject uuid; v_off uuid; v_class uuid;
  v_strand uuid; v_sub uuid; v_topic uuid;
  v_o1 uuid; v_o2 uuid; v_o3 uuid;
  v_l1 uuid; v_l2 uuid; v_l3 uuid;
  v_q uuid;
begin
  -- ---------------------------------------------------------------- curriculum
  insert into edu_curricula (code, version, name, authority, system_code, effective_from, is_active)
  values ('NEXA_CORE', '1.0', 'Nexa EDU Foundation Course',
          'Nexa EDU', 'SENIOR_HIGH', current_date, true)
  on conflict (code, version) do update set name = excluded.name, authority = excluded.authority
  returning id into v_cur;
  if v_cur is null then select id into v_cur from edu_curricula where code = 'NEXA_CORE' and version = '1.0'; end if;

  select id into v_subject from edu_subjects where name = 'Biology' limit 1;
  if v_subject is null then return; end if;

  insert into edu_subject_offerings (curriculum_id, subject_id, level_code, is_core)
  values (v_cur, v_subject, 'SHS_2', false)
  on conflict (curriculum_id, subject_id, level_code) do nothing;
  select id into v_off from edu_subject_offerings
   where curriculum_id = v_cur and subject_id = v_subject and level_code = 'SHS_2';

  -- Point the class's Biology at this course.
  --
  -- edu_class_subjects is unique on (class_id, subject_id): a class studies a
  -- subject under exactly one curriculum. So this repoints the existing Biology
  -- row rather than adding a second one. Only Biology moves; the other six
  -- subjects stay on GES_SBC, and GES_SBC itself is not modified.
  select c.id into v_class from edu_classes c where c.level_code = 'SHS_2' limit 1;
  if v_class is not null then
    -- Migration 015 replaced subject_id with offering_id here, so the existing
    -- Biology row is found through its offering rather than directly.
    update edu_class_subjects cs
       set offering_id = v_off
     where cs.class_id = v_class
       and exists (select 1 from edu_subject_offerings o
                    where o.id = cs.offering_id and o.subject_id = v_subject);

    if not found then
      insert into edu_class_subjects (school_id, class_id, offering_id)
      select c.school_id, c.id, v_off from edu_classes c where c.id = v_class;
    end if;
  end if;

  -- ----------------------------------------------------------------- hierarchy
  insert into edu_strands (offering_id, code, name, sort_order)
  values (v_off, '1', 'Diversity of Living Things and Their Environment', 1)
  on conflict (offering_id, code) do nothing;
  select id into v_strand from edu_strands where offering_id = v_off and code = '1';

  insert into edu_sub_strands (strand_id, code, name, sort_order)
  values (v_strand, '1', 'Cell Biology', 1)
  on conflict (strand_id, code) do nothing;
  select id into v_sub from edu_sub_strands where strand_id = v_strand and code = '1';

  insert into edu_topics (sub_strand_id, code, name, expected_period, sort_order)
  values (v_sub, '1', 'Cell Structure and Organisation', 3, 1)
  on conflict (sub_strand_id, code) do nothing;
  select id into v_topic from edu_topics where sub_strand_id = v_sub and code = '1';

  -- ---------------------------------------------------------------- objectives
  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values
    (v_topic, v_cur, 'BIO 1.1',
     'Identify the main parts of a cell and describe what each one does.',
     'Label a diagram of a cell and state the function of each labelled part.',
     'UNDERSTAND', 3, 1),
    (v_topic, v_cur, 'BIO 1.2',
     'Compare plant and animal cells, and explain the reason for each difference.',
     'Given a cell, decide whether it is a plant or an animal cell and justify the decision.',
     'ANALYSE', 3, 2),
    (v_topic, v_cur, 'BIO 1.3',
     'Explain how cells are organised into tissues, organs and organ systems.',
     'Place a named structure at the correct level of organisation and explain why.',
     'UNDERSTAND', 3, 3)
  on conflict (curriculum_id, full_code) do nothing;

  select id into v_o1 from edu_learning_objectives where curriculum_id = v_cur and full_code = 'BIO 1.1';
  select id into v_o2 from edu_learning_objectives where curriculum_id = v_cur and full_code = 'BIO 1.2';
  select id into v_o3 from edu_learning_objectives where curriculum_id = v_cur and full_code = 'BIO 1.3';

  -- 1.2 builds on 1.1, and 1.3 builds on 1.2. Recorded so the platform can say
  -- what to learn first and what comes next.
  insert into edu_objective_prerequisites (objective_id, prerequisite_id, strength)
  values (v_o2, v_o1, 'REQUIRED'), (v_o3, v_o2, 'HELPFUL')
  on conflict do nothing;

  -- ------------------------------------------------------------------- lessons
  delete from edu_lessons where curriculum_id = v_cur;
  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_topic, v_cur, 'The cell and its main parts',
          'Every living thing is built from cells. In this lesson you will meet the parts of a cell and learn what each one does.',
          1, 12, 'AUTHORED', 'APPROVED')
  ;
  select id into v_l1 from edu_lessons where curriculum_id = v_cur and title = 'The cell and its main parts';

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_topic, v_cur, 'Plant cells and animal cells',
          'Plant and animal cells share most parts but differ in three important ways. You will learn what those are and why they exist.',
          2, 12, 'AUTHORED', 'APPROVED')
  ;
  select id into v_l2 from edu_lessons where curriculum_id = v_cur and title = 'Plant cells and animal cells';

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_topic, v_cur, 'From cells to organ systems',
          'Cells do not work alone. You will follow the path from a single cell up to a whole organ system in the human body.',
          3, 10, 'AUTHORED', 'APPROVED')
  ;
  select id into v_l3 from edu_lessons where curriculum_id = v_cur and title = 'From cells to organ systems';

  insert into edu_lesson_objectives (lesson_id, objective_id)
  values (v_l1, v_o1), (v_l2, v_o2), (v_l3, v_o3) on conflict do nothing;

  -- ------------------------------------------------------- lesson one, steps
  delete from edu_lesson_steps where lesson_id = v_l1;
  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l1, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to name the main parts of a cell, say what each part does, and label a cell diagram correctly.'
   || E'\n\nA cell is the smallest unit of life. Every living thing you have ever seen, from a mosquito to a mango tree to you, is made of cells. Most are far too small to see without a microscope: about fifty of your cheek cells laid side by side would stretch across a full stop.',
   '{"objective":"Identify the main parts of a cell and describe what each one does."}'::jsonb),

  (v_l1, 2, 'IDEA', 'The parts of a cell',
   'Look at the diagram as you read. Each part has one main job, and the names make more sense once you know the job.'
   || E'\n\nThe **cell membrane** is a thin layer around the outside. It decides what enters and leaves the cell, which is why we call it selectively permeable. Nothing gets in or out without passing it.'
   || E'\n\nThe **cytoplasm** is the jelly-like material filling the cell. Most of the chemical reactions of life happen here, and the other parts float within it.'
   || E'\n\nThe **nucleus** is the control centre. It holds the genetic material, DNA, which carries the instructions for building and running the cell. A cell without a nucleus cannot divide normally.'
   || E'\n\nThe **mitochondrion** releases energy from food during respiration. Cells that need a lot of energy, such as muscle cells, contain many of them. The plural is mitochondria.'
   || E'\n\nThe **ribosomes** build proteins by joining amino acids in the order the DNA specifies.',
   '{"diagram":"animal_cell"}'::jsonb),

  (v_l1, 3, 'WORKED_EXAMPLE', 'Worked example',
   'A student looks at a cell under a microscope. It has no nucleus, and it is packed with a red protein that carries oxygen. Which cell is it, and what does the missing nucleus tell us?'
   || E'\n\n**Step 1. Use the clue about the protein.** A red protein that carries oxygen is haemoglobin, so this is a red blood cell.'
   || E'\n\n**Step 2. Ask what the missing nucleus means.** The nucleus takes up space. Losing it leaves more room for haemoglobin, so the cell can carry more oxygen per cell.'
   || E'\n\n**Step 3. Say what the cell gives up.** Without a nucleus the cell cannot divide or repair itself, which is why red blood cells live only about 120 days.'
   || E'\n\n**Answer.** It is a red blood cell. The missing nucleus makes space for more haemoglobin, at the cost of the cell being unable to divide.',
   '{}'::jsonb),

  (v_l1, 4, 'CHECK', 'Check your understanding',
   'Answer the question below. You will get an explanation either way, so it is worth attempting even if you are unsure.',
   '{"check":true}'::jsonb),

  (v_l1, 5, 'REFLECTION', 'Before you move on',
   'You can now name the main parts of a cell and say what each does. In the next lesson you will use this to tell plant and animal cells apart, so make sure you are comfortable with the nucleus, the cell membrane and the mitochondrion before continuing.',
   '{}'::jsonb);

  -- ------------------------------------------------------- lesson two, steps
  delete from edu_lesson_steps where lesson_id = v_l2;
  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l2, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to name the three parts found only in plant cells, and explain why a plant needs each one when an animal does not.',
   '{"objective":"Compare plant and animal cells, and explain the reason for each difference."}'::jsonb),

  (v_l2, 2, 'IDEA', 'Three parts only plants have',
   'Plant and animal cells both have a cell membrane, cytoplasm, a nucleus, mitochondria and ribosomes. Plant cells have three more.'
   || E'\n\nThe **cell wall** is a rigid layer of cellulose outside the membrane. It gives the cell a fixed shape and stops it bursting when it fills with water. An animal cell has no wall, which is why animal cells look rounded and plant cells look like boxes.'
   || E'\n\nThe **chloroplasts** contain chlorophyll, the green pigment that traps light energy for photosynthesis. This is how a plant makes its own food. Animals cannot do this, so they must eat.'
   || E'\n\nThe **large permanent vacuole** is a sac of cell sap that pushes outwards on the cell wall. That pressure keeps the plant firm. When a plant loses water the vacuoles shrink, the pressure drops, and the plant wilts.',
   '{"diagram":"plant_cell"}'::jsonb),

  (v_l2, 3, 'WORKED_EXAMPLE', 'Worked example',
   'A plant is left without water for three days and its leaves droop. Explain what has happened inside the cells.'
   || E'\n\n**Step 1. Identify the part involved.** The vacuole holds cell sap, which is mostly water.'
   || E'\n\n**Step 2. Say what changed.** Without water the vacuoles lose volume and shrink.'
   || E'\n\n**Step 3. Link to what is seen.** A shrunken vacuole no longer presses outwards on the cell wall, so the cell loses its firmness. Across millions of cells this makes the leaf droop.'
   || E'\n\n**Answer.** The vacuoles have lost water, so they no longer press on the cell walls, and the leaves lose their support and droop. Watering the plant reverses this.',
   '{}'::jsonb),

  (v_l2, 4, 'CHECK', 'Check your understanding',
   'Answer the question below. The explanation will tell you why, not just whether you were right.',
   '{"check":true}'::jsonb),

  (v_l2, 5, 'REFLECTION', 'Before you move on',
   'You can now tell a plant cell from an animal cell and give a reason for each difference. Next you will zoom out and see how cells group together to build a whole organism.',
   '{}'::jsonb);

  -- ----------------------------------------------------- lesson three, steps
  delete from edu_lesson_steps where lesson_id = v_l3;
  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l3, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to put the levels of organisation in order and place a named structure at the correct level.',
   '{"objective":"Explain how cells are organised into tissues, organs and organ systems."}'::jsonb),

  (v_l3, 2, 'IDEA', 'From one cell to a whole body',
   'A single cell cannot run a body on its own. Living things solve this by organising cells into larger and larger units, each doing more than the one below it.'
   || E'\n\n**Cell.** The smallest unit of life. A muscle cell can shorten, but one muscle cell alone moves nothing you would notice.'
   || E'\n\n**Tissue.** A group of similar cells working together on the same job. Muscle tissue is many muscle cells shortening at once, which produces a useful force.'
   || E'\n\n**Organ.** Several tissues working together on a larger job. The heart contains muscle tissue, nerve tissue and blood vessels, and together they pump blood.'
   || E'\n\n**Organ system.** Several organs working together. The circulatory system is the heart, the blood vessels and the blood, moving materials around the body.'
   || E'\n\n**Organism.** All the systems together, working as one living thing.',
   '{"diagram":"organisation"}'::jsonb),

  (v_l3, 3, 'WORKED_EXAMPLE', 'Worked example',
   'At which level of organisation is the stomach, and how would you justify your answer?'
   || E'\n\n**Step 1. Check whether it is one type of cell.** No. The stomach contains muscle tissue, glandular tissue that makes acid and enzymes, and epithelial tissue lining the inside.'
   || E'\n\n**Step 2. Check whether it is more than one organ.** No. The stomach is a single structure, not a group of organs.'
   || E'\n\n**Step 3. Conclude.** Several tissues working together in one structure is the definition of an organ.'
   || E'\n\n**Answer.** The stomach is an organ. It belongs to the digestive system, which is the organ system one level above it.',
   '{}'::jsonb),

  (v_l3, 4, 'CHECK', 'Check your understanding',
   'Answer the question below to check you can place a structure at the right level.',
   '{"check":true}'::jsonb),

  (v_l3, 5, 'REFLECTION', 'You have finished this topic',
   'You can now describe a cell, tell plant and animal cells apart, and explain how cells build up into a whole organism. That is the foundation for everything else in cell biology.',
   '{}'::jsonb);

  -- ----------------------------------------------------------------- questions
  -- Every explanation teaches. Being told "incorrect" helps nobody.
  delete from edu_question_objectives where question_id in
    (select id from edu_questions where curriculum_id = v_cur);
  delete from edu_questions where curriculum_id = v_cur;

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'Which part of the cell controls its activities and holds the genetic material?',
    '{"options":[{"key":"A","text":"Cell membrane"},{"key":"B","text":"Nucleus"},{"key":"C","text":"Mitochondrion"},{"key":"D","text":"Ribosome"}],"answer":"B"}'::jsonb,
    'The nucleus. It holds DNA, which carries the instructions the cell works from. The cell membrane controls what enters and leaves, the mitochondrion releases energy during respiration, and ribosomes build proteins.',
    1, 'FOUNDATION', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o1);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'A muscle cell contains far more mitochondria than a skin cell. What does this tell you?',
    '{"options":[{"key":"A","text":"Muscle cells are larger"},{"key":"B","text":"Muscle cells need more energy"},{"key":"C","text":"Muscle cells divide more often"},{"key":"D","text":"Muscle cells make more protein"}],"answer":"B"}'::jsonb,
    'Muscle cells need more energy. Mitochondria release energy from food during respiration, so a cell that does a lot of work contains many of them. Size, rate of division and protein production are governed by other parts of the cell.',
    1, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o1);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'A cell has a rigid outer wall, chloroplasts and a large permanent vacuole. What kind of cell is it?',
    '{"options":[{"key":"A","text":"An animal cell"},{"key":"B","text":"A plant cell"},{"key":"C","text":"A red blood cell"},{"key":"D","text":"Either, both have these"}],"answer":"B"}'::jsonb,
    'A plant cell. Those three parts are found only in plant cells: the wall gives shape and stops bursting, chloroplasts trap light for photosynthesis, and the vacuole keeps the cell firm. Animal cells have none of them.',
    1, 'FOUNDATION', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o2);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'SHORT_ANSWER',
    'Name the part of a plant cell that traps light energy for photosynthesis.',
    '{"accepted":["chloroplast","chloroplasts"],"placeholder":"Type your answer"}'::jsonb,
    'The chloroplast. It contains chlorophyll, the green pigment that absorbs light so the plant can make its own food. Animal cells have no chloroplasts, which is why animals must eat.',
    1, 'FOUNDATION', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o2);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'The heart contains muscle tissue, nerve tissue and blood vessels. At which level of organisation is the heart?',
    '{"options":[{"key":"A","text":"Cell"},{"key":"B","text":"Tissue"},{"key":"C","text":"Organ"},{"key":"D","text":"Organ system"}],"answer":"C"}'::jsonb,
    'An organ. Several different tissues working together in one structure make an organ. A tissue is one type of cell working together, and an organ system is several organs, such as the heart with the blood vessels and blood.',
    1, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o3);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'Put these in order from smallest to largest: organ, cell, organ system, tissue.',
    '{"options":[{"key":"A","text":"cell, tissue, organ, organ system"},{"key":"B","text":"cell, organ, tissue, organ system"},{"key":"C","text":"tissue, cell, organ, organ system"},{"key":"D","text":"organ system, organ, tissue, cell"}],"answer":"A"}'::jsonb,
    'Cell, tissue, organ, organ system. Similar cells form a tissue, several tissues form an organ, and several organs form an organ system. Each level does something the level below cannot do alone.',
    2, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o3);
end
$$;
