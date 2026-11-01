-- A school's own curriculum, and the material it has generated, kept with the
-- account rather than with the browser.
--
-- Both of these lived in localStorage alone, and for both of them that was the
-- wrong place for the same reason the learner's plan was. A head teacher who
-- approved forty lessons on the staff room laptop opened the same account on a
-- phone and found none of them: not stale, not loading, simply absent, because
-- approval was a fact about a browser. Reinstalling the browser, or clearing
-- site data, or a school tablet being wiped at the end of term threw the work
-- away with no warning and no way back. Approving a lesson is the expensive
-- part of this platform, the one thing that cannot be automated and the one
-- thing a school spends real time on, and it was the least durable thing in it.
--
-- ── What is deliberately NOT here yet ───────────────────────────────────────
--
-- These policies scope every row to the account that owns it, so an owner sees
-- their own work on any device they sign in on. They do not yet let a school's
-- pupils read the lessons their school has approved. That needs a policy which
-- joins through edu_account_learner, and it is a larger decision than a mirror
-- of what the device already held: it decides whether a learner's app queries
-- their school on every topic, and what it shows when the school cannot be
-- reached. Until that exists a pupil is served exactly as before, from the
-- material on their own device, so nothing regresses.
--
-- ── Why the payload is one json column, again ───────────────────────────────
--
-- The same reasoning as edu_learner_plan. The shape of a Taught and of a
-- Syllabus belongs to taught.ts and syllabus.ts, both still moving, and the
-- database never looks inside either one. What it does care about is who owns
-- it, what it is about, and whether a person has passed it, so those are
-- columns and everything else is not.

/* ── a school's curricula ─────────────────────────────────────────────────── */

create table if not exists public.edu_curriculum (
  -- The account that defined it. A curriculum is a school's, not a device's.
  owner_id      uuid not null references auth.users (id) on delete cascade,

  -- The id curriculum-store.ts derives from the name, so the same school
  -- typing the same name twice gets one curriculum and not two.
  curriculum_id text not null,

  name          text not null,

  -- Shown to a learner beside their subjects, so whose curriculum they are
  -- being taught is never hidden from them. Nullable: a school may name a
  -- curriculum without explaining it.
  note          text,

  updated_at    timestamptz not null default now(),

  primary key (owner_id, curriculum_id),

  -- The national curriculum is written in code and loaded on every start. A
  -- row claiming to be it would let one school change what every learner is
  -- taught, which keepCurriculum already refuses in the client. A constraint
  -- says it once more where it cannot be bypassed.
  constraint edu_curriculum_not_national check (curriculum_id <> 'gh-nacca')
);

alter table public.edu_curriculum enable row level security;

drop policy if exists edu_curriculum_own on public.edu_curriculum;
create policy edu_curriculum_own on public.edu_curriculum
  for all
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

/* ── generated lessons ───────────────────────────────────────────────────── */

create table if not exists public.edu_generated_lesson (
  id            uuid primary key default gen_random_uuid(),

  -- Who owns the row: the school whose teacher generated it, or the learner
  -- who asked for it themselves.
  owner_id      uuid not null references auth.users (id) on delete cascade,

  -- SHARED waits for a teacher and may be served to a class. PERSONAL belongs
  -- to one learner, is served only to them, and is approved by them. See the
  -- long note on acceptOwn in generated-store.ts: for somebody learning alone
  -- the approval gate had no approver, so it was not a safeguard but a dead
  -- end.
  audience      text not null default 'SHARED'
                check (audience in ('SHARED', 'PERSONAL')),

  -- The learner a PERSONAL lesson is for. Null on a SHARED row, and required
  -- on a personal one, which the check below enforces rather than trusting.
  for_learner   uuid references auth.users (id) on delete cascade,

  topic_id      text not null,
  curriculum    text not null default 'gh-nacca',

  -- The year it was written for, which a reviewer needs in order to judge it.
  year          text not null,

  -- The Taught from taught.ts, verbatim. Read back and validated there.
  payload       jsonb not null,

  -- Whether a person has read it. Never set by the generator: generated.ts
  -- forces false whatever the model claimed, because the point of the flag is
  -- that a person said yes, and a model asserting it defeats the only
  -- safeguard between generated material and a child.
  approved      boolean not null default false,

  -- The learner's own id on a personal row, the teacher's on a shared one.
  approved_by   text,
  approved_at   timestamptz,

  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),

  constraint edu_generated_lesson_personal_has_learner check (
    (audience = 'PERSONAL' and for_learner is not null)
    or (audience = 'SHARED' and for_learner is null)
  )
);

-- One lesson per topic per owner per audience, so regenerating replaces rather
-- than accumulating. keep() in the client applies the same rule, and this is
-- what makes an upsert from it land on the right row.
create unique index if not exists edu_generated_lesson_one
  on public.edu_generated_lesson (
    owner_id, audience, coalesce(for_learner, owner_id), curriculum, topic_id);

alter table public.edu_generated_lesson enable row level security;

-- The owner's own rows, and a learner's own personal rows wherever they live.
--
-- The second half matters for the case this platform is built around: a
-- learner's identity is never owned by a school, so a personal lesson follows
-- the learner even if the account that first held it is gone.
drop policy if exists edu_generated_lesson_own on public.edu_generated_lesson;
create policy edu_generated_lesson_own on public.edu_generated_lesson
  for all
  using (owner_id = auth.uid() or for_learner = auth.uid())
  with check (owner_id = auth.uid() or for_learner = auth.uid());

/* ── generated outlines ──────────────────────────────────────────────────── */

create table if not exists public.edu_generated_outline (
  id            uuid primary key default gen_random_uuid(),

  owner_id      uuid not null references auth.users (id) on delete cascade,

  -- A subject is addressed by curriculum, stage and subject, which is the key
  -- keepOutline already uses on the device.
  curriculum    text not null,
  stage         text not null,
  subject_id    text not null,

  -- The Syllabus from syllabus.ts, verbatim.
  payload       jsonb not null,

  -- An outline is lower stakes than a lesson, because it names topics rather
  -- than teaching them, but it still decides what a child is offered, so it
  -- goes through the same gate.
  approved_by   text,
  approved_at   timestamptz,

  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),

  unique (owner_id, curriculum, stage, subject_id)
);

alter table public.edu_generated_outline enable row level security;

drop policy if exists edu_generated_outline_own on public.edu_generated_outline;
create policy edu_generated_outline_own on public.edu_generated_outline
  for all
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());
