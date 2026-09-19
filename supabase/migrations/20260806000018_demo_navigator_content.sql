-- ============================================================================
-- DEMO CONTENT — NOT OFFICIAL CURRICULUM
--
-- Everything created here belongs to the curriculum coded 'DEMO_NAVIGATOR',
-- version 'DEMO'. It exists solely so the curriculum navigator and objective
-- page can be exercised while the official curriculum is legitimately empty.
--
-- It is deliberately NOT attached to GES_SBC. The official curriculum stays
-- empty, so a real learner on the real curriculum sees an honest empty state
-- rather than invented syllabus. Every title carries a [DEMO] marker so it can
-- never be mistaken for GES-approved content in a screenshot or a report.
--
-- TO REMOVE, leaving the schema untouched:
--   delete from edu_curricula where code = 'DEMO_NAVIGATOR';
-- Everything below cascades from that row.
--
-- It obeys the same hierarchy, approval states and RLS as real content: one
-- lesson is APPROVED and one is DRAFT, so the approval gate is testable.
-- ============================================================================

insert into edu_curricula (code, version, name, authority, system_code, is_active)
values ('DEMO_NAVIGATOR', 'DEMO', '[DEMO] Navigator test curriculum',
        'NOT OFFICIAL — demonstration only', null, false)
on conflict (code, version) do nothing;

-- Offerings across four different education structures, so the same navigator
-- can be tested against genuinely different shapes rather than four copies of
-- one shape.
insert into edu_subject_offerings (curriculum_id, subject_id, level_code, is_core, sort_order)
select c.id, s.id, v.level, true, 0
from edu_curricula c
cross join (values ('KG_1'), ('JHS_1'), ('TVET_2'), ('UNI_YEAR_2')) as v(level)
join lateral (select id from edu_subjects order by code limit 1) s on true
where c.code = 'DEMO_NAVIGATOR'
on conflict (curriculum_id, subject_id, level_code) do nothing;

-- Hierarchy: one strand, one sub-strand, two topics per offering. The second
-- topic has no objectives, so the navigator's NO_CONTENT state is reachable.
do $$
declare
  o record;
  v_strand uuid;
  v_sub    uuid;
  v_topic1 uuid;
  v_topic2 uuid;
  v_obj1   uuid;
  v_obj2   uuid;
  v_lesson uuid;
  v_cur    uuid;
begin
  select id into v_cur from edu_curricula where code = 'DEMO_NAVIGATOR';

  for o in select id, level_code from edu_subject_offerings where curriculum_id = v_cur loop

    insert into edu_strands (offering_id, code, name, sort_order)
    values (o.id, 'D1', '[DEMO] Strand one', 1)
    on conflict (offering_id, code) do nothing
    returning id into v_strand;
    if v_strand is null then
      select id into v_strand from edu_strands where offering_id = o.id and code = 'D1';
    end if;

    insert into edu_sub_strands (strand_id, code, name, sort_order)
    values (v_strand, 'D1.1', '[DEMO] Sub-strand one', 1)
    on conflict (strand_id, code) do nothing
    returning id into v_sub;
    if v_sub is null then
      select id into v_sub from edu_sub_strands where strand_id = v_strand and code = 'D1.1';
    end if;

    insert into edu_topics (sub_strand_id, code, name, expected_period, sort_order)
    values (v_sub, 'T1', '[DEMO] Topic with content', 1, 1)
    on conflict (sub_strand_id, code) do nothing
    returning id into v_topic1;
    if v_topic1 is null then
      select id into v_topic1 from edu_topics where sub_strand_id = v_sub and code = 'T1';
    end if;

    -- Deliberately left empty, so "no content yet" is demonstrable and
    -- distinguishable from "not started".
    insert into edu_topics (sub_strand_id, code, name, expected_period, sort_order)
    values (v_sub, 'T2', '[DEMO] Topic with no content yet', 2, 2)
    on conflict (sub_strand_id, code) do nothing
    returning id into v_topic2;

    insert into edu_learning_objectives (topic_id, curriculum_id, full_code, text, expected_period, sort_order)
    values (v_topic1, v_cur, 'DEMO.' || o.level_code || '.1',
            '[DEMO] First objective, used to exercise the objective page.', 1, 1)
    on conflict (curriculum_id, full_code) do nothing
    returning id into v_obj1;
    if v_obj1 is null then
      select id into v_obj1 from edu_learning_objectives
       where curriculum_id = v_cur and full_code = 'DEMO.' || o.level_code || '.1';
    end if;

    insert into edu_learning_objectives (topic_id, curriculum_id, full_code, text, expected_period, sort_order)
    values (v_topic1, v_cur, 'DEMO.' || o.level_code || '.2',
            '[DEMO] Second objective, which depends on the first.', 1, 2)
    on conflict (curriculum_id, full_code) do nothing
    returning id into v_obj2;
    if v_obj2 is null then
      select id into v_obj2 from edu_learning_objectives
       where curriculum_id = v_cur and full_code = 'DEMO.' || o.level_code || '.2';
    end if;

    -- A real prerequisite relationship, so the objective page can show one
    -- without any recommendation logic.
    insert into edu_objective_prerequisites (objective_id, prerequisite_id, strength)
    values (v_obj2, v_obj1, 'REQUIRED')
    on conflict do nothing;

    -- One approved lesson and one draft, so the approval gate is testable by
    -- a learner rather than asserted.
    -- Guarded by existence rather than a unique key: re-running this seed must
    -- not duplicate lessons, and title is not a natural key for real content.
    select id into v_lesson from edu_lessons
     where topic_id = v_topic1 and title = '[DEMO] Approved lesson';
    if v_lesson is null then
      insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
      values (v_topic1, v_cur, '[DEMO] Approved lesson',
              'Demonstration lesson. Not official curriculum content.', 1, 10, 'AUTHORED', 'APPROVED')
      returning id into v_lesson;
    end if;

    insert into edu_lesson_objectives (lesson_id, objective_id)
    values (v_lesson, v_obj1) on conflict do nothing;

    insert into edu_lesson_steps (lesson_id, sequence, kind, title, body)
    values (v_lesson, 1, 'IDEA', '[DEMO] Step one',
            'Demonstration step. Real lessons are authored against approved curriculum.')
    on conflict (lesson_id, sequence) do nothing;

    if not exists (select 1 from edu_lessons
                   where topic_id = v_topic1
                     and title = '[DEMO] Unapproved lesson, must never reach a learner') then
      insert into edu_lessons (topic_id, curriculum_id, title, sequence, origin, approval)
      values (v_topic1, v_cur, '[DEMO] Unapproved lesson, must never reach a learner', 2, 'AUTHORED', 'DRAFT');
    end if;

    v_strand := null; v_sub := null; v_topic1 := null; v_topic2 := null;
    v_obj1 := null; v_obj2 := null;
  end loop;
end
$$;
