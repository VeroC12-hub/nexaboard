-- ============================================================================
-- Practice: serving and marking.
--
-- Migration 013 closed edu_questions to learners and said why:
--   "Questions are served through a function that strips the payload; until
--    that exists, only staff and above may read the bank at all."
-- This is that function. No second question bank, no second result lineage and
-- no new tables: practice already has a home in edu_practice_attempts, and the
-- objective linkage already exists in edu_question_objectives.
--
-- Three rules are enforced here rather than in the interface:
--
--   1. A learner never receives an answer key. The payload is rebuilt from a
--      whitelist, so a key added later under a new name is excluded by default
--      rather than leaking until someone remembers to blacklist it.
--   2. A learner never marks their own work. Correctness is computed here from
--      the stored key and written here; the learner supplies only a response.
--   3. A learner never enumerates the bank. Every entry point is scoped to one
--      objective, and there is no function that returns questions in bulk.
--
-- Questions that require human assessment are not guessed at. They record the
-- response and return no verdict, which the interface shows as awaiting review.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- Defect fix: edu_question_objectives inherited no gate.
--
-- Third instance of the leak 019 and 022 closed. The row reveals that a DRAFT
-- question exists and which objective it tests. Its parent, edu_questions, is
-- readable only by staff and above, so this table must match: a learner reads
-- nothing from it and reaches questions only through the functions below.
--
-- This is also why edu_practice_count exists. The objective page counted this
-- table directly, which counted unapproved questions as available practice.
-- ---------------------------------------------------------------------------

drop policy if exists edu_question_objectives_read on edu_question_objectives;
create policy edu_question_objectives_read on edu_question_objectives
  for select to authenticated
  using (
    edu_is_national()
    or edu_auth_role() in ('teacher','head_teacher','school_admin')
  );

-- ---------------------------------------------------------------------------
-- Defect fix: a learner could mark their own work.
--
-- edu_practice_attempts allowed the owning learner to insert freely, including
-- is_correct. Practice is the learner's own record, so they may read it, but
-- writing it is the platform's job. Writes now happen only inside
-- edu_submit_practice, which is SECURITY DEFINER and therefore unaffected.
-- ---------------------------------------------------------------------------

drop policy if exists edu_practice_own on edu_practice_attempts;
create policy edu_practice_own_read on edu_practice_attempts
  for select to authenticated
  using (exists (
    select 1 from edu_students st
    where st.id = edu_practice_attempts.student_id and st.user_id = auth.uid()));

-- ---------------------------------------------------------------------------
-- How much practice exists for an objective.
--
-- Counts only what the learner could actually be served, so the number on the
-- objective page and the number of questions delivered cannot disagree.
-- ---------------------------------------------------------------------------

create or replace function edu_practice_count(p_objective_id uuid)
returns integer
language sql
stable
security definer
set search_path = public
as $$
  select count(*)::int
  from edu_questions q
  join edu_question_objectives qo on qo.question_id = q.id
  where qo.objective_id = p_objective_id
    and q.approval = 'APPROVED';
$$;

-- ---------------------------------------------------------------------------
-- The questions for one objective, without their answers.
--
-- The payload is rebuilt from a whitelist: only what a learner needs in order
-- to answer is copied across. `explanation` is deliberately absent, because it
-- frequently contains the answer and must not arrive before the attempt.
--
-- source_exam, source_year and source_paper are passed through exactly as
-- stored. A question with no provenance returns null, and the interface says
-- nothing rather than implying an examination it never came from.
-- ---------------------------------------------------------------------------

create or replace function edu_practice_questions(p_objective_id uuid)
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
  order by q.difficulty nulls last, q.id;
$$;

-- ---------------------------------------------------------------------------
-- Submit one answer.
--
-- Marking uses auto_markable, which the question model already carries. A
-- question that requires human assessment returns a null verdict rather than a
-- fabricated score: "we cannot mark this automatically" is the honest answer,
-- and inventing one would put a made-up judgement in front of a learner.
--
-- Nothing here writes to edu_assessment_results. Practice is not an assessment,
-- and the learner's official record must not move because they practised.
-- ---------------------------------------------------------------------------

create or replace function edu_submit_practice(p_question_id uuid, p_response jsonb)
returns table (
  is_correct   boolean,
  explanation  text,
  marks        numeric,
  needs_review boolean
)
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_student uuid;
  v_q       edu_questions%rowtype;
  v_correct boolean;
  v_next    int;
begin
  select id into v_student from edu_students where user_id = auth.uid();
  if v_student is null then
    raise exception 'Only a learner may submit practice';
  end if;

  select * into v_q from edu_questions
   where id = p_question_id and approval = 'APPROVED';
  if not found then
    -- Unapproved and non-existent are deliberately the same answer.
    raise exception 'That question is not available';
  end if;

  if v_q.auto_markable then
    begin
      v_correct := case v_q.kind
        when 'MULTIPLE_CHOICE' then
          lower(trim(coalesce(p_response ->> 'answer',''))) = lower(trim(v_q.payload ->> 'answer'))
        when 'TRUE_FALSE' then
          (p_response ->> 'answer')::boolean is not distinct from (v_q.payload ->> 'answer')::boolean
        when 'NUMERIC' then
          abs((p_response ->> 'answer')::numeric - (v_q.payload ->> 'answer')::numeric)
            <= coalesce((v_q.payload ->> 'tolerance')::numeric, 0)
        when 'SHORT_ANSWER' then
          exists (
            select 1
            from jsonb_array_elements_text(coalesce(v_q.payload -> 'accepted', '[]'::jsonb)) t
            where lower(trim(t)) = lower(trim(coalesce(p_response ->> 'answer','')))
          )
        else null
      end;
    exception when others then
      -- A response that cannot be interpreted as this kind expects is wrong,
      -- not an error the learner should be shown.
      v_correct := false;
    end;
  else
    v_correct := null;   -- requires human assessment
  end if;

  select coalesce(max(pa.attempt_no), 0) + 1 into v_next
  from edu_practice_attempts pa
  where pa.student_id = v_student and pa.question_id = p_question_id;

  insert into edu_practice_attempts (student_id, question_id, response, is_correct, attempt_no)
  values (v_student, p_question_id, p_response, v_correct, v_next);

  return query select
    v_correct,
    case when v_q.auto_markable then v_q.explanation else null end,
    v_q.marks,
    not v_q.auto_markable;
end
$$;

revoke all on function edu_practice_count(uuid)      from public;
revoke all on function edu_practice_questions(uuid)  from public;
revoke all on function edu_submit_practice(uuid, jsonb) from public;
grant execute on function edu_practice_count(uuid)      to authenticated;
grant execute on function edu_practice_questions(uuid)  to authenticated;
grant execute on function edu_submit_practice(uuid, jsonb) to authenticated;
