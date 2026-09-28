-- ============================================================================
-- Past papers become documents, and a past question becomes unfakeable.
--
-- capability.ts says one thing about this feature that nothing else in the
-- platform says about any other: "Add real past papers. These are never
-- generated." A fabricated BECE question is worse than no BECE question,
-- because a child will revise from it and sit a paper it lied about.
--
-- Until now that rule lived in three text columns on edu_questions,
-- source_exam, source_year and source_paper, and in the good manners of
-- whatever code wrote them. Migration 026 tightened the serving side: a
-- question is only ever presented as a past question when it carries an
-- examination and a year. But nothing stopped a row from acquiring those
-- values without a paper behind it, and nothing stopped an AI drafted question
-- from acquiring them at all. The rule was enforced at the exit, not at the
-- door.
--
-- This migration moves it to the door, using the same move migration 016 made
-- when it replaced indicator_codes text[] with references: provenance stops
-- being free text and becomes a foreign key to a row that somebody had to
-- create on purpose.
--
--   edu_exam_papers          one real document: BECE 2019 Mathematics Paper 2
--   edu_questions.paper_id   which document this question was copied out of
--   edu_questions.source_question_no   which question in it
--
-- Four consequences, and they are the whole point of the file:
--
--   1. A past question with no provenance cannot exist. The check constraint
--      requires a paper and a question number together, so there is no way to
--      import a question as anonymously "from the BECE".
--
--   2. A generated question cannot become a past question. origin AI_DRAFTED
--      and origin AUTHORED are both refused a paper_id, and origin is made
--      immutable, so the conversion cannot happen in two steps either.
--
--   3. The three text columns can no longer disagree with the document. A
--      trigger derives them from the paper row and blanks them when there is
--      no paper, so migration 026's serving functions and examination.ts keep
--      reading exactly what they read today, and what they read is now a copy
--      of a record rather than a claim.
--
--   4. Nobody can import a paper without saying what right they have to it.
--      edu_exam_papers.licence is not null and has no UNKNOWN value. WASSCE
--      and BECE papers are WAEC's copyright. If the answer cannot be written
--      down, the paper does not go in.
--
-- Additive and safe to re-run. No existing row carries a source_exam: the demo
-- question fixtures in migration 025 deliberately left all three columns null
-- and were retired in migration 030, so the new constraints have nothing to
-- break.
--
-- The curriculum half of this work needs no schema at all.
-- edu_curricula already carries code, version, name, authority and
-- effective_from, which is the provenance a curriculum document needs, and
-- edu_learning_objectives is already unique on (curriculum_id, full_code).
-- tools/import-curriculum.mjs writes into those tables unchanged.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- the document
--
-- A paper is bibliography, not content: which examination, which year, which
-- paper of it, which subject, and what right we have to use it. No question
-- text lives here, which is why it can be read by any signed-in user while the
-- questions themselves stay behind the approval gate.
--
-- subject_id rather than offering_id. A paper is set by an examining body
-- against a subject and a year, not against our curriculum version, and one
-- paper's questions routinely map to objectives in more than one offering.
-- The offering is reachable from each question's objective when it is wanted.
-- ---------------------------------------------------------------------------

create table if not exists public.edu_exam_papers (
  id          uuid primary key default gen_random_uuid(),
  exam_code   text not null references edu_examinations(code) on delete restrict,
  -- The year the paper was sat. Bounded rather than free, because a typo of
  -- 219 or 20199 would quietly mislabel a document a learner is revising from.
  year        int  not null check (year between 1950 and 2100),
  -- As printed on the paper: 'Paper 1', 'Paper 2', 'Objective Test'. Kept as
  -- the document's own words rather than a code, because examining bodies do
  -- not share a naming scheme and inventing one would misquote them.
  paper_label text not null check (length(btrim(paper_label)) > 0),
  subject_id  uuid not null references edu_subjects(id) on delete restrict,
  -- Which level sat it, where that is known. Nullable: some papers are set for
  -- a stage rather than a level, and guessing would be a false claim.
  level_code  text references edu_levels(code) on delete set null,
  title       text,

  -- ── The licensing question, asked in the schema ────────────────────────────
  --
  -- There is deliberately no UNKNOWN and no default. WAEC owns the copyright
  -- in every WASSCE and BECE paper, so the honest states are: we hold the
  -- rights, the rights holder said yes in writing, the document is genuinely
  -- unrestricted, or it is a school's own mock paper. A paper whose standing
  -- nobody can state is a paper that must not be loaded, and a null column is
  -- how that refusal is spelled.
  licence     text not null check (licence in (
                'OWNED',              -- the operator holds the copyright
                'PERMISSION_GRANTED', -- written permission from the rights holder
                'PUBLIC_DOMAIN',
                'OPEN_LICENCE',       -- published under a licence that permits this
                'SCHOOL_MOCK'         -- a school's own mock, used with its consent
              )),
  -- Who granted it, when, and under what terms. Free text because a permission
  -- is a sentence from a person, not an enum.
  licence_note text not null check (length(btrim(licence_note)) > 0),
  -- Where the document itself came from, so a disputed question can be taken
  -- back to the paper it was copied out of.
  source_reference text,

  supplied_by uuid references edu_profiles(id) on delete set null,
  created_at  timestamptz not null default now(),

  -- One row per real document. This is what makes re-running the importer
  -- harmless: the second run finds the paper instead of making a twin.
  unique (exam_code, year, paper_label, subject_id)
);

create index if not exists edu_exam_papers_exam_year_idx
  on public.edu_exam_papers (exam_code, year desc);
create index if not exists edu_exam_papers_subject_idx
  on public.edu_exam_papers (subject_id);

-- ---------------------------------------------------------------------------
-- the question's link to it
--
-- source_question_no is text, not int. Real papers number questions 1, 1(a),
-- 1(a)(ii) and B3, and a past question's whole value is that it is the one in
-- the paper. Forcing it to an integer would either lose the part or invent a
-- numbering the paper does not use.
-- ---------------------------------------------------------------------------

alter table public.edu_questions
  add column if not exists paper_id uuid references public.edu_exam_papers(id) on delete restrict;

alter table public.edu_questions
  add column if not exists source_question_no text;

create index if not exists edu_questions_paper_idx
  on public.edu_questions (paper_id);

-- A paper has one question 4(b). A second row claiming to be it is a
-- transcription run twice, or two people disagreeing about the same question,
-- and neither should be served to a learner as two questions.
create unique index if not exists edu_questions_paper_number_uniq
  on public.edu_questions (paper_id, source_question_no)
  where paper_id is not null;

-- ---------------------------------------------------------------------------
-- provenance is all or nothing
--
-- Either a question is not a past question, in which case it carries no
-- examination claim at all, or it is one, in which case it carries the
-- document, the number in it, and the three display columns migration 026
-- reads. There is no third state, so "imported as anonymous" is not a shape
-- the table can hold.
-- ---------------------------------------------------------------------------

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'edu_questions_provenance_whole'
  ) then
    alter table public.edu_questions
      add constraint edu_questions_provenance_whole check (
        (paper_id is null
         and source_question_no is null
         and source_exam  is null
         and source_year  is null
         and source_paper is null)
        or
        (paper_id is not null
         and length(btrim(source_question_no)) > 0
         and source_exam  is not null
         and source_year  is not null
         and source_paper is not null)
      );
  end if;
end
$$;

-- ---------------------------------------------------------------------------
-- a generated question can never become a past question
--
-- This is the constraint the feature exists for. origin already records what
-- wrote a question. AI_DRAFTED is the generator and AUTHORED is us: neither of
-- them can have sat in an examination hall, so neither may hold a paper.
-- Only a transcription of a real document qualifies, and the importer writes
-- IMPORTED.
--
-- Because a check constraint is evaluated on update as well as insert, this
-- also blocks the two step version: attaching a paper to an existing AI
-- drafted row fails here, and relabelling its origin first fails on the
-- immutability trigger below.
-- ---------------------------------------------------------------------------

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'edu_questions_past_never_generated'
  ) then
    alter table public.edu_questions
      add constraint edu_questions_past_never_generated check (
        paper_id is null
        or origin in ('IMPORTED', 'PUBLISHER', 'TEACHER')
      );
  end if;
end
$$;

-- ---------------------------------------------------------------------------
-- origin is a fact about the past, so it is immutable
--
-- Without this the constraint above is a speed bump: set origin to IMPORTED,
-- then attach the paper. What wrote a question is not an editable property of
-- it. A question whose origin was recorded wrongly is deleted and written
-- again, which leaves a trace, rather than quietly relabelled, which does not.
-- ---------------------------------------------------------------------------

create or replace function public.edu_questions_origin_immutable()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if new.origin is distinct from old.origin then
    raise exception
      'origin is immutable: a question written by % cannot be relabelled as %',
      old.origin, new.origin
      using errcode = '23514',
            hint = 'Delete the question and insert it again with the correct origin.';
  end if;
  return new;
end
$$;

drop trigger if exists edu_questions_origin_immutable on public.edu_questions;
create trigger edu_questions_origin_immutable
  before update of origin on public.edu_questions
  for each row execute function public.edu_questions_origin_immutable();

-- ---------------------------------------------------------------------------
-- the display columns are derived, never asserted
--
-- migration 026, examination.ts and practice.ts all read source_exam,
-- source_year and source_paper. Those stay exactly where they are, because
-- rewriting a working serving path to chase a new column would risk the answer
-- key handling that migration 026 went out of its way not to duplicate.
--
-- What changes is who writes them. This trigger copies them off the paper row
-- on every insert and update, and blanks them when there is no paper. So the
-- columns can no longer be set by hand, cannot drift from the document, and a
-- question that says "BECE 2019" says it because a row for BECE 2019 exists.
--
-- The importer therefore does not send them at all.
-- ---------------------------------------------------------------------------

create or replace function public.edu_questions_derive_provenance()
returns trigger
language plpgsql
set search_path = public
as $$
declare
  v_paper public.edu_exam_papers%rowtype;
begin
  if new.paper_id is null then
    -- Not a past question. Any examination claim on the row is removed rather
    -- than trusted, which is what makes free text provenance unreachable.
    new.source_exam  := null;
    new.source_year  := null;
    new.source_paper := null;
    new.source_question_no := null;
    return new;
  end if;

  select * into v_paper from public.edu_exam_papers where id = new.paper_id;
  if not found then
    raise exception 'paper % does not exist', new.paper_id using errcode = '23503';
  end if;

  new.source_exam  := v_paper.exam_code;
  new.source_year  := v_paper.year;
  new.source_paper := v_paper.paper_label;
  new.source_question_no := nullif(btrim(new.source_question_no), '');
  return new;
end
$$;

drop trigger if exists edu_questions_derive_provenance on public.edu_questions;
create trigger edu_questions_derive_provenance
  before insert or update on public.edu_questions
  for each row execute function public.edu_questions_derive_provenance();

-- ---------------------------------------------------------------------------
-- how many genuine past questions a course actually has
--
-- OfferingCapability.pastQuestions in capability.ts is the number that decides
-- whether the feature says "here are the past papers" or "there are no past
-- papers yet". It must never be filled by counting practice questions, so it
-- is counted here, once, behind a paper_id that a generated row cannot hold.
--
-- Zero is a real and expected answer. It is the answer today.
-- ---------------------------------------------------------------------------

create or replace function public.edu_past_question_count(p_offering_id uuid)
returns int
language sql
stable
security definer
set search_path = public
as $$
  select count(distinct q.id)::int
  from public.edu_questions q
  join public.edu_question_objectives qo on qo.question_id = q.id
  join public.edu_learning_objectives o  on o.id = qo.objective_id
  join public.edu_topics tp              on tp.id = o.topic_id
  join public.edu_sub_strands ss         on ss.id = tp.sub_strand_id
  join public.edu_strands sd             on sd.id = ss.strand_id
  where sd.offering_id = p_offering_id
    and q.paper_id is not null
    and q.approval = 'APPROVED';
$$;

-- ---------------------------------------------------------------------------
-- what has been loaded, for the teacher's and the operator's screen
--
-- Counts and licences only, no stems. approved_questions is separate from
-- questions on purpose: a freshly imported paper is transcribed but not yet
-- checked, and "typed in" and "served to children" are different states.
-- ---------------------------------------------------------------------------

create or replace view public.v_edu_past_paper_inventory
with (security_invoker = true) as
select
  p.id                as paper_id,
  p.exam_code,
  x.name              as exam_name,
  p.year,
  p.paper_label,
  sj.code             as subject_code,
  sj.name             as subject_name,
  p.level_code,
  p.licence,
  count(q.id)::int                                            as questions,
  count(q.id) filter (where q.approval = 'APPROVED')::int      as approved_questions,
  count(q.id) filter (where q.approval <> 'APPROVED')::int     as unchecked_questions
from public.edu_exam_papers p
join public.edu_examinations x on x.code = p.exam_code
join public.edu_subjects sj    on sj.id = p.subject_id
left join public.edu_questions q on q.paper_id = p.id
group by p.id, p.exam_code, x.name, p.year, p.paper_label,
         sj.code, sj.name, p.level_code, p.licence;

-- ---------------------------------------------------------------------------
-- RLS
--
-- Papers are bibliography, so the read policy is the same one the curriculum
-- tables use: any signed-in user may see that BECE 2019 Mathematics Paper 2
-- has been loaded and under what licence. Nothing readable here is examinable
-- content.
--
-- Writing is national only, matching edu_curricula and edu_learning_objectives.
-- The importer runs with the service key, which bypasses RLS, so this policy is
-- about what a browser session can do: create a paper row, and thereby a
-- provenance claim, which is exactly the thing that must not be self service.
-- ---------------------------------------------------------------------------

alter table public.edu_exam_papers enable row level security;

drop policy if exists edu_exam_papers_read on public.edu_exam_papers;
create policy edu_exam_papers_read on public.edu_exam_papers
  for select to authenticated using (true);

drop policy if exists edu_exam_papers_write on public.edu_exam_papers;
create policy edu_exam_papers_write on public.edu_exam_papers
  for all to authenticated
  using (edu_is_national()) with check (edu_is_national());

grant select on public.v_edu_past_paper_inventory to authenticated;

revoke all on function public.edu_past_question_count(uuid) from public;
grant execute on function public.edu_past_question_count(uuid) to authenticated;
