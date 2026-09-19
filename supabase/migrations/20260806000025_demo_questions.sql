-- ============================================================================
-- DEMO CONTENT — NOT OFFICIAL CURRICULUM
--
-- Practice questions for the [DEMO] curriculum only.
--
-- source_exam, source_year and source_paper are left null on every row. These
-- are invented questions, and labelling them BECE or WASSCE would put false
-- examination provenance in front of a learner. The provenance columns are
-- exercised by being honestly empty, which is the state the interface has to
-- handle for most questions anyway.
--
-- The set is chosen so every marking path is reachable:
--   MULTIPLE_CHOICE  auto-marked from a stored key
--   TRUE_FALSE       auto-marked, boolean comparison
--   NUMERIC          auto-marked within a stored tolerance
--   SHORT_ANSWER     auto-marked against a list of accepted answers
--   ESSAY            NOT auto-markable, must return no verdict
--   MULTIPLE_CHOICE  with no explanation, so the honest "no explanation
--                    recorded" state is reachable rather than asserted
--   DRAFT            unapproved, must never be served
--
-- Removed with everything else by:
--   delete from edu_curricula where code = 'DEMO_NAVIGATOR';
-- ============================================================================

do $$
declare
  v_cur uuid;
  v_obj record;
  v_id  uuid;
begin
  select id into v_cur from edu_curricula where code = 'DEMO_NAVIGATOR';
  if v_cur is null then return; end if;

  for v_obj in
    select o.id, o.full_code
    from edu_learning_objectives o
    where o.curriculum_id = v_cur
      and o.full_code like '%.1'
  loop
    -- multiple choice, auto-marked, with an explanation
    if not exists (select 1 from edu_questions
                   where curriculum_id = v_cur and stem = '[DEMO] Which option is marked correct? · ' || v_obj.full_code) then
      insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks,
                                 difficulty, auto_markable, origin, approval)
      values (v_cur, 'MULTIPLE_CHOICE',
              '[DEMO] Which option is marked correct? · ' || v_obj.full_code,
              jsonb_build_object(
                'options', jsonb_build_array(
                  jsonb_build_object('key','A','text','[DEMO] First option'),
                  jsonb_build_object('key','B','text','[DEMO] Second option, the correct one'),
                  jsonb_build_object('key','C','text','[DEMO] Third option'),
                  jsonb_build_object('key','D','text','[DEMO] Fourth option')),
                'answer', 'B'),
              'Demonstration explanation. B is the option this question stores as correct.',
              1, 'CORE', true, 'AUTHORED', 'APPROVED')
      returning id into v_id;
      insert into edu_question_objectives (question_id, objective_id) values (v_id, v_obj.id);
    end if;

    -- true or false, auto-marked
    if not exists (select 1 from edu_questions
                   where curriculum_id = v_cur and stem = '[DEMO] This statement is true. · ' || v_obj.full_code) then
      insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks,
                                 difficulty, auto_markable, origin, approval)
      values (v_cur, 'TRUE_FALSE',
              '[DEMO] This statement is true. · ' || v_obj.full_code,
              jsonb_build_object('answer', true),
              'Demonstration explanation. This question stores true as its answer.',
              1, 'FOUNDATION', true, 'AUTHORED', 'APPROVED')
      returning id into v_id;
      insert into edu_question_objectives (question_id, objective_id) values (v_id, v_obj.id);
    end if;

    -- numeric, auto-marked inside a tolerance
    if not exists (select 1 from edu_questions
                   where curriculum_id = v_cur and stem = '[DEMO] Enter the number twelve. · ' || v_obj.full_code) then
      insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks,
                                 difficulty, auto_markable, origin, approval)
      values (v_cur, 'NUMERIC',
              '[DEMO] Enter the number twelve. · ' || v_obj.full_code,
              jsonb_build_object('answer', 12, 'tolerance', 0.5, 'unit', 'units'),
              'Demonstration explanation. Any value within 0.5 of 12 is accepted.',
              2, 'CORE', true, 'AUTHORED', 'APPROVED')
      returning id into v_id;
      insert into edu_question_objectives (question_id, objective_id) values (v_id, v_obj.id);
    end if;

    -- short answer, auto-marked against accepted answers
    if not exists (select 1 from edu_questions
                   where curriculum_id = v_cur and stem = '[DEMO] Type the word demo. · ' || v_obj.full_code) then
      insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks,
                                 difficulty, auto_markable, origin, approval)
      values (v_cur, 'SHORT_ANSWER',
              '[DEMO] Type the word demo. · ' || v_obj.full_code,
              jsonb_build_object('accepted', jsonb_build_array('demo','demonstration'),
                                 'placeholder', 'Type your answer'),
              'Demonstration explanation. Either demo or demonstration is accepted.',
              1, 'FOUNDATION', true, 'AUTHORED', 'APPROVED')
      returning id into v_id;
      insert into edu_question_objectives (question_id, objective_id) values (v_id, v_obj.id);
    end if;

    -- essay, requires human assessment, must never be auto-marked
    if not exists (select 1 from edu_questions
                   where curriculum_id = v_cur and stem = '[DEMO] Explain your reasoning. · ' || v_obj.full_code) then
      insert into edu_questions (curriculum_id, kind, stem, payload, marks,
                                 difficulty, auto_markable, origin, approval)
      values (v_cur, 'ESSAY',
              '[DEMO] Explain your reasoning. · ' || v_obj.full_code,
              jsonb_build_object('placeholder', 'Write your answer'),
              10, 'EXTENSION', false, 'AUTHORED', 'APPROVED')
      returning id into v_id;
      insert into edu_question_objectives (question_id, objective_id) values (v_id, v_obj.id);
    end if;

    -- auto-marked but with no explanation recorded
    if not exists (select 1 from edu_questions
                   where curriculum_id = v_cur and stem = '[DEMO] This question has no explanation. · ' || v_obj.full_code) then
      insert into edu_questions (curriculum_id, kind, stem, payload, marks,
                                 difficulty, auto_markable, origin, approval)
      values (v_cur, 'MULTIPLE_CHOICE',
              '[DEMO] This question has no explanation. · ' || v_obj.full_code,
              jsonb_build_object(
                'options', jsonb_build_array(
                  jsonb_build_object('key','A','text','[DEMO] Correct'),
                  jsonb_build_object('key','B','text','[DEMO] Incorrect')),
                'answer', 'A'),
              1, 'CORE', true, 'AUTHORED', 'APPROVED')
      returning id into v_id;
      insert into edu_question_objectives (question_id, objective_id) values (v_id, v_obj.id);
    end if;

    -- unapproved: must never be served
    if not exists (select 1 from edu_questions
                   where curriculum_id = v_cur and stem = '[DEMO] Unapproved question. · ' || v_obj.full_code) then
      insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks,
                                 auto_markable, origin, approval)
      values (v_cur, 'MULTIPLE_CHOICE',
              '[DEMO] Unapproved question. · ' || v_obj.full_code,
              jsonb_build_object(
                'options', jsonb_build_array(jsonb_build_object('key','A','text','[DEMO] Only option')),
                'answer', 'A'),
              'This must never reach a learner.', 1, true, 'AUTHORED', 'DRAFT')
      returning id into v_id;
      insert into edu_question_objectives (question_id, objective_id) values (v_id, v_obj.id);
    end if;
  end loop;
end
$$;
