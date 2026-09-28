-- How each learner is taught, kept with the learner rather than with the device.
--
-- `plan.ts` already works out what somebody gets: which media, in what order,
-- whether words can be relied on at all, and why. It reads what she asked for,
-- how she has actually done in each medium, and, until there is anything
-- better, what she said when she signed up. It is allowed to answer "video
-- only, no words" and that outcome is the point of the module rather than an
-- edge case in it.
--
-- Until now it wrote that answer to `localStorage`. So a learner who signed in
-- on a school tablet met a platform that had forgotten how she learns and went
-- back to guessing from her sign-up form. Her diet is a fact about her, not
-- about the browser she happened to open, and this is the table that makes
-- that true.
--
-- ── Why a row per subject ───────────────────────────────────────────────────
--
-- Because strengths are not uniform. The same child can answer confidently
-- after watching a science explanation and fall apart when the same idea
-- arrives as words in mathematics. `plan.ts` is already per learner and per
-- subject for that reason, so the key here is the pair.
--
-- ── Why the whole plan is one json column ───────────────────────────────────
--
-- The shape belongs to `plan.ts` and it is still moving: parts, the media left
-- out on purpose, the sentence for whoever is sitting with her, the wordless
-- flag, where it came from. Spreading that across columns would mean a
-- migration every time the model learns to say something new, and nothing in
-- the database ever queries inside it. What the database does care about is
-- who it belongs to and when it was written, so those are columns.

create table if not exists public.edu_learner_plan (
  learner_id  uuid not null references auth.users (id) on delete cascade,
  subject_id  text not null,

  -- The Plan from plan.ts, verbatim. Read back, validated there, and ignored
  -- if it does not parse into something with parts in it.
  plan        jsonb not null,

  -- 'stated' from her sign-up answers, 'evidence' worked out locally from her
  -- record, 'model' written by the tutor. Duplicated out of the json because
  -- it is the one field worth looking at without parsing.
  source      text not null default 'evidence'
              check (source in ('model', 'evidence', 'stated')),

  -- Whether this has settled. A confirmed plan is what lets the next topic be
  -- generated ahead of her instead of while she waits, which is the whole
  -- reason generated lessons feel slow today.
  confirmed   boolean not null default false,

  updated_at  timestamptz not null default now(),

  primary key (learner_id, subject_id)
);

-- Her own row, and nobody else's.
--
-- Unlike edu_jobs this IS read from the browser: the learner's page needs her
-- plan before it can lay out a session, and going through a serverless
-- function to fetch it would put a network round trip in front of every topic
-- she opens. So row level security is on and scoped to the signed-in user.
alter table public.edu_learner_plan enable row level security;

drop policy if exists edu_learner_plan_own_select on public.edu_learner_plan;
create policy edu_learner_plan_own_select
  on public.edu_learner_plan for select
  using (auth.uid() = learner_id);

drop policy if exists edu_learner_plan_own_upsert on public.edu_learner_plan;
create policy edu_learner_plan_own_upsert
  on public.edu_learner_plan for insert
  with check (auth.uid() = learner_id);

drop policy if exists edu_learner_plan_own_update on public.edu_learner_plan;
create policy edu_learner_plan_own_update
  on public.edu_learner_plan for update
  using (auth.uid() = learner_id)
  with check (auth.uid() = learner_id);

-- Deliberately no delete policy. A learner does not need to delete how she is
-- taught, and the row goes with the account when the account goes, by the
-- cascade above. A teacher or parent resetting it overwrites instead, which
-- leaves `updated_at` honest about when it changed.

-- Touch `updated_at` on every write, so staleness is a fact rather than
-- something the client is trusted to report.
create or replace function public.edu_learner_plan_touch()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists edu_learner_plan_touch on public.edu_learner_plan;
create trigger edu_learner_plan_touch
  before update on public.edu_learner_plan
  for each row execute function public.edu_learner_plan_touch();
