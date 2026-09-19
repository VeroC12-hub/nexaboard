-- ============================================================================
-- A JUNIOR HIGH LEARNER, AND SCIENCE TO TEACH THEM
--
-- Two separate things, both needed before a Ministry visitor can see that the
-- platform is not built around one senior high learner.
--
-- 1. Fixtures. A junior high school, its year and terms, a class, a learner
--    record. The school is a generic invented one rather than a real named
--    institution, because inventing enrolment data for a real school would
--    misrepresent it.
--
-- 2. Content. Nexa-authored junior high integrated science, under NEXA_CORE
--    exactly like the senior high material. Authority "Nexa EDU". GES_SBC is
--    untouched.
--
-- The learner account itself is created separately through the auth admin API,
-- because auth.users cannot be written from a migration. This migration links
-- the student record to it once it exists.
--
-- Language is pitched for a 12 to 13 year old: shorter sentences, everyday
-- examples, fewer abstractions per paragraph than the senior high lessons.
-- ============================================================================

do $$
declare
  v_school uuid; v_year uuid; v_class uuid;
  v_sci uuid; v_maths uuid;
  v_cur uuid; v_off uuid;
  v_strand uuid; v_sub uuid; v_topic uuid;
  v_o1 uuid; v_o2 uuid; v_l uuid; v_q uuid;
begin
  select id into v_cur from edu_curricula where code = 'NEXA_CORE' and version = '1.0';
  if v_cur is null then return; end if;

  -- --------------------------------------------------------------- fixtures
  insert into edu_schools (name, school_type, ownership, is_active)
  values ('Greenfields Junior High School', 'jhs', 'public', true)
  on conflict do nothing;
  select id into v_school from edu_schools where name = 'Greenfields Junior High School';

  insert into edu_academic_years (school_id, name, is_current)
  values (v_school, '2026/2027', true)
  on conflict (school_id, name) do update set is_current = true;
  select id into v_year from edu_academic_years where school_id = v_school and name = '2026/2027';

  insert into edu_terms (academic_year_id, school_id, term_number, is_current)
  values (v_year, v_school, 1, false), (v_year, v_school, 2, false), (v_year, v_school, 3, true)
  on conflict (academic_year_id, term_number) do nothing;

  insert into edu_classes (school_id, academic_year_id, name, level_code)
  values (v_school, v_year, 'JHS 1 Blue', 'JHS_1')
  on conflict (school_id, academic_year_id, name) do nothing;
  select id into v_class from edu_classes
   where school_id = v_school and academic_year_id = v_year and name = 'JHS 1 Blue';

  -- Junior high subjects that did not exist in the catalogue yet.
  insert into edu_subjects (code, name) values ('INT_SCI', 'Integrated Science')
  on conflict (code) do nothing;
  insert into edu_subjects (code, name) values ('JHS_MATH', 'Mathematics')
  on conflict (code) do nothing;
  select id into v_sci from edu_subjects where code = 'INT_SCI';
  select id into v_maths from edu_subjects where code = 'JHS_MATH';

  insert into edu_subject_offerings (curriculum_id, subject_id, level_code, is_core)
  values (v_cur, v_sci, 'JHS_1', true)
  on conflict (curriculum_id, subject_id, level_code) do nothing;
  select id into v_off from edu_subject_offerings
   where curriculum_id = v_cur and subject_id = v_sci and level_code = 'JHS_1';

  insert into edu_class_subjects (school_id, class_id, offering_id)
  values (v_school, v_class, v_off) on conflict do nothing;

  -- ------------------------------------------------------------- hierarchy
  insert into edu_strands (offering_id, code, name, sort_order)
  values (v_off, '1', 'Diversity of Matter', 1) on conflict (offering_id, code) do nothing;
  select id into v_strand from edu_strands where offering_id = v_off and code = '1';

  insert into edu_sub_strands (strand_id, code, name, sort_order)
  values (v_strand, '1', 'Materials and their Properties', 1)
  on conflict (strand_id, code) do nothing;
  select id into v_sub from edu_sub_strands where strand_id = v_strand and code = '1';

  insert into edu_topics (sub_strand_id, code, name, expected_period, sort_order)
  values (v_sub, '1', 'The Three States of Matter', 3, 1)
  on conflict (sub_strand_id, code) do nothing;
  select id into v_topic from edu_topics where sub_strand_id = v_sub and code = '1';

  -- ------------------------------------------------------------ objectives
  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values
    (v_topic, v_cur, 'SCI 1.1',
     'Describe the three states of matter and how the particles are arranged in each.',
     'Sort everyday materials into solids, liquids and gases and say why.',
     'UNDERSTAND', 3, 1),
    (v_topic, v_cur, 'SCI 1.2',
     'Explain what happens to particles when a substance melts, boils, condenses or freezes.',
     'Name the change of state in a described situation and explain it using particles.',
     'APPLY', 3, 2)
  on conflict (curriculum_id, full_code) do nothing;
  select id into v_o1 from edu_learning_objectives where curriculum_id = v_cur and full_code = 'SCI 1.1';
  select id into v_o2 from edu_learning_objectives where curriculum_id = v_cur and full_code = 'SCI 1.2';

  insert into edu_objective_prerequisites values (v_o2, v_o1, 'REQUIRED') on conflict do nothing;

  -- ------------------------------------------------------------- lesson one
  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_topic, v_cur, 'Solids, liquids and gases',
    'Everything around you is one of three things: a solid, a liquid or a gas. In this lesson you will find out what makes them different.',
    1, 10, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o1) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to name the three states of matter, describe how the tiny particles are arranged in each one, and sort everyday things into the right group.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'Everything is made of particles',
   'A stone, a cup of water and the air in this room look completely different. But all three are made of the same kind of thing: tiny particles, far too small to see.'
   || E'\n\nWhat makes them different is how those particles are arranged and how freely they move.'
   || E'\n\nIn a **solid**, the particles are packed closely together in a fixed pattern. They can vibrate, but they cannot move past one another. That is why a solid keeps its own shape and you cannot squash it. A stone, a table and a block of ice are solids.'
   || E'\n\nIn a **liquid**, the particles are still close together but they can slide past one another. That is why a liquid flows and takes the shape of whatever container you pour it into. Water, cooking oil and milk are liquids.'
   || E'\n\nIn a **gas**, the particles are far apart and move quickly in all directions. That is why a gas spreads out to fill any space it is in, and why you can squeeze it into a smaller container. Air, steam and the gas in a football are gases.',
   '{"diagram":"states"}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'You pour water from a tall bottle into a wide bowl. The shape changes but the amount stays the same. Explain this using particles.'
   || E'\n\n**Step 1. Say which state water is in.** At room temperature water is a liquid.'
   || E'\n\n**Step 2. Recall how liquid particles behave.** They are close together but they can slide past one another.'
   || E'\n\n**Step 3. Link this to what you saw.** Because the particles can slide, they rearrange to fit the bowl, so the shape changes. Because none of the particles left, the amount stays the same.'
   || E'\n\n**Answer.** Water is a liquid. Its particles can slide past each other, so it takes the shape of the bowl. No particles were added or removed, so the amount of water does not change.',
   '{}'::jsonb),
  (v_l, 4, 'CHECK', 'Check what you know',
   'Try the question below. Whatever you answer, you will get an explanation.', '{"check":true}'::jsonb),
  (v_l, 5, 'REFLECTION', 'Before you move on',
   'You can now describe the three states of matter and explain the difference using particles. In the next lesson you will find out what happens when something changes from one state to another, like ice melting in the sun.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'Why can you pour milk into any shape of cup, but you cannot pour a stone?',
    '{"options":[{"key":"A","text":"Milk is lighter than a stone"},{"key":"B","text":"The particles in milk can slide past each other, but those in a stone cannot"},{"key":"C","text":"Milk has no particles"},{"key":"D","text":"A stone is colder than milk"}],"answer":"B"}'::jsonb,
    'The particles in milk can slide past each other, but those in a stone cannot. Milk is a liquid, so its particles move around each other and it takes the shape of the cup. A stone is a solid, so its particles are locked in a fixed pattern and it keeps its own shape. Weight and temperature do not decide this.',
    1, 'FOUNDATION', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o1);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'In which state are the particles furthest apart?',
    '{"options":[{"key":"A","text":"Solid"},{"key":"B","text":"Liquid"},{"key":"C","text":"Gas"},{"key":"D","text":"They are the same in all three"}],"answer":"C"}'::jsonb,
    'A gas. Its particles are far apart and move quickly in all directions, which is why a gas spreads out to fill its container and can be squeezed into a smaller space. In solids and liquids the particles are close together.',
    1, 'FOUNDATION', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o1);

  -- ------------------------------------------------------------- lesson two
  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_topic, v_cur, 'Changing from one state to another',
    'Ice melts in the sun and water boils on a fire. In this lesson you will learn the names of these changes and what the particles are doing.',
    2, 12, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o2) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to name the four main changes of state, and say what heating or cooling does to the particles.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'Heating and cooling change the arrangement',
   'When you heat a substance, you give its particles more energy. They move faster and push further apart. When you cool it, they lose energy, slow down and move closer together.'
   || E'\n\nThat single idea explains all four changes.'
   || E'\n\n**Melting** is solid to liquid. Heat an ice block and its particles vibrate harder until they break free of their fixed pattern and start to slide. The ice becomes water.'
   || E'\n\n**Boiling** is liquid to gas. Keep heating the water and some particles gain enough energy to escape completely. The water becomes steam.'
   || E'\n\n**Condensing** is gas to liquid. Steam touching a cold surface loses energy, the particles slow and come together, and droplets of water form. This is why a cold bottle sweats on a hot day.'
   || E'\n\n**Freezing** is liquid to solid. Cool water enough and the particles slow until they lock into a fixed pattern. The water becomes ice.'
   || E'\n\nOne important point: in every one of these changes, the particles themselves stay exactly the same. Only their arrangement and speed change. Ice, water and steam are all still water.',
   '{"diagram":"changes"}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'On a hot day, drops of water appear on the outside of a cold bottle of malt. Where does the water come from, and what is this change called?'
   || E'\n\n**Step 1. Ask whether water can pass through the bottle.** It cannot. The bottle is sealed, so the drops are not leaking from inside.'
   || E'\n\n**Step 2. Think about the air around the bottle.** Warm air always carries some water as an invisible gas, called water vapour.'
   || E'\n\n**Step 3. Ask what the cold surface does.** It takes energy away from the vapour touching it. Those particles slow down and come together as a liquid.'
   || E'\n\n**Answer.** The water comes from the air, not from inside the bottle. The change is condensing: water vapour cooled on the cold surface and turned into liquid water.',
   '{}'::jsonb),
  (v_l, 4, 'CHECK', 'Check what you know',
   'Try the question below.', '{"check":true}'::jsonb),
  (v_l, 5, 'REFLECTION', 'You have finished this topic',
   'You can now name the three states of matter, describe the particles in each, and explain what happens when a substance changes from one to another. That is the foundation for everything else you will learn about materials.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'What is the change from a liquid to a gas called?',
    '{"options":[{"key":"A","text":"Melting"},{"key":"B","text":"Freezing"},{"key":"C","text":"Boiling"},{"key":"D","text":"Condensing"}],"answer":"C"}'::jsonb,
    'Boiling. Heating a liquid gives its particles enough energy to escape and become a gas. Melting is solid to liquid, freezing is liquid to solid, and condensing is the opposite of boiling: gas back to liquid.',
    1, 'FOUNDATION', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o2);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'SHORT_ANSWER',
    'Water vapour in the air turns into drops on a cold bottle. What is this change called?',
    '{"accepted":["condensing","condensation","condense"],"placeholder":"One word"}'::jsonb,
    'Condensing, also called condensation. The cold surface takes energy from the water vapour, so its particles slow down and come together as a liquid. The water came from the air, not from inside the bottle.',
    1, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o2);
end
$$;
