-- ============================================================================
-- Examination preparation.
--
-- No new examination model and no second question bank. Everything this needs
-- already exists:
--   edu_examinations            the examinations themselves
--   edu_levels.examination_code which examination a level leads to
--   edu_levels.exam_imminent    whether it is close, as configuration not code
--   edu_questions.source_exam   real provenance, already a foreign key
--   edu_questions.source_year
--   edu_questions.source_paper
--   edu_question_objectives     the objective a question tests
--
-- Two decisions worth stating.
--
-- First, the examination is resolved server-side from the learner's own
-- enrolment. It is not a parameter. A learner cannot ask for WASSCE material by
-- passing 'WASSCE', because nothing they send is trusted to name an
-- examination: the platform works out which one applies to them.
--
-- Second, a question is only ever presented as a past examination question when
-- it genuinely carries both a source examination and a year. A question with a
-- null year is excluded rather than shown with the year omitted, because a
-- question displayed under an examination heading is a claim about where it
-- came from, and a half-known claim is still a claim.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- The §6 serving function gains an optional provenance filter.
--
-- Dropped and recreated rather than duplicated. Examination practice must run
-- through the same engine, with the same whitelist and the same stripping, so
-- there is deliberately no second function that serves questions: a second one
-- could drift from this one's answer-key handling, and that is exactly the kind
-- of divergence that leaks a key.
--
-- The parameter defaults to null, so every existing single-argument call is
-- unchanged and continues to mean "all approved practice for this objective".
-- ---------------------------------------------------------------------------

drop function if exists edu_practice_questions(uuid);

create or replace function edu_practice_questions(
  p_objective_id uuid,
  p_source_exam  text default null
)
returns table (
  id            uuid,
  kind          text,
  stem          text,
  payload       jsonb,
  marks         numeric,
  difficulty    text,
  auto_markable boolean,
  source_exam   text,
  source_year   int,
  source_paper  text,
  attempts      int,
  last_correct  boolean
)
language sql
stable
security definer
set search_path = public
as $$
  select
    q.id, q.kind, q.stem,
    jsonb_strip_nulls(jsonb_build_object(
      'options',     q.payload -> 'options',
      'unit',        q.payload -> 'unit',
      'placeholder', q.payload -> 'placeholder'
    )),
    q.marks, q.difficulty, q.auto_markable,
    q.source_exam, q.source_year, q.source_paper,
    coalesce(a.n, 0)::int, a.last_correct
  from edu_questions q
  join edu_question_objectives qo on qo.question_id = q.id
  left join lateral (
    select count(*) as n,
           (array_agg(pa.is_correct order by pa.attempted_at desc))[1] as last_correct
    from edu_practice_attempts pa
    join edu_students st on st.id = pa.student_id
    where pa.question_id = q.id and st.user_id = auth.uid()
  ) a on true
  where qo.objective_id = p_objective_id
    and q.approval = 'APPROVED'
    and exists (select 1 from edu_students s where s.user_id = auth.uid())
    -- When an examination is named, only genuine past questions qualify.
    and (p_source_exam is null
         or (q.source_exam = p_source_exam and q.source_year is not null))
  order by q.source_year desc nulls last, q.difficulty nulls last, q.id;
$$;

-- ---------------------------------------------------------------------------
-- What the learner has to prepare for, and what exists to prepare with.
--
-- Returns one row per learning objective that genuine past questions actually
-- test, so the learner can move from "I have an examination" to "these are the
-- things it tests and here is where to learn them".
--
-- Returns nothing at all when the learner's level has no configured
-- examination. Primary and kindergarten therefore get no examination
-- experience, without a single line of code naming them.
--
-- Carries no stems and no payloads: it is a map of the territory, not a way to
-- read the question bank.
-- ---------------------------------------------------------------------------

create or replace function edu_exam_preparation()
returns table (
  exam_code      text,
  exam_name      text,
  exam_authority text,
  exam_imminent  boolean,
  objective_id   uuid,
  full_code      text,
  objective_text text,
  subject        text,
  topic          text,
  question_count int,
  years          int[],
  papers         text[]
)
language sql
stable
security definer
set search_path = public
as $$
  with lvl as (
    select l.code, l.examination_code, l.exam_imminent
    from edu_students st
    join edu_enrolments e   on e.student_id = st.id and e.status = 'active'
    join edu_classes c      on c.id = e.class_id
    join edu_levels l       on l.code = c.level_code
    left join edu_academic_years ay on ay.id = e.academic_year_id
    where st.user_id = auth.uid()
    order by coalesce(ay.is_current, false) desc
    limit 1
  ),
  ex as (
    select x.code, x.name, x.authority, lvl.exam_imminent
    from lvl
    join edu_examinations x on x.code = lvl.examination_code and x.is_active
  )
  select
    ex.code, ex.name, ex.authority, ex.exam_imminent,
    o.id, o.full_code, o.text,
    sj.name, tp.name,
    count(q.id)::int,
    array_agg(distinct q.source_year),
    array_remove(array_agg(distinct q.source_paper), null)
  from ex
  join edu_questions q
    on q.source_exam = ex.code
   and q.approval = 'APPROVED'
   and q.source_year is not null          -- provenance must be complete
  join edu_question_objectives qo on qo.question_id = q.id
  join edu_learning_objectives o  on o.id = qo.objective_id
  join edu_topics tp              on tp.id = o.topic_id
  join edu_sub_strands ss         on ss.id = tp.sub_strand_id
  join edu_strands sd             on sd.id = ss.strand_id
  join edu_subject_offerings so   on so.id = sd.offering_id
  join edu_subjects sj            on sj.id = so.subject_id
  group by ex.code, ex.name, ex.authority, ex.exam_imminent,
           o.id, o.full_code, o.text, sj.name, tp.name
  order by sj.name, o.full_code;
$$;

revoke all on function edu_practice_questions(uuid, text) from public;
revoke all on function edu_exam_preparation()             from public;
grant execute on function edu_practice_questions(uuid, text) to authenticated;
grant execute on function edu_exam_preparation()             to authenticated;
