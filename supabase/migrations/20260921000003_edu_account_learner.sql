-- Accounts and learners for the learner facing product, off the device at last.
--
-- `src/lib/education/accounts.ts` kept accounts, learners and every answered
-- question in `localStorage`, with SHA-256 and a per account salt. Its own
-- header called that honest local storage rather than authentication, and it
-- was right: anyone holding the phone can read the store, and a weak password
-- is brute forced offline in seconds. It kept two siblings out of each other's
-- work on a shared phone, which was the only threat it was built for.
--
-- What it could not do is the platform's central promise: one identity from
-- creche to university, openable anywhere. A learner who did a term of work and
-- changed phone lost the term.
--
-- Passwords are not in this migration and are not in this codebase any more.
-- They live in `auth.users`, which is Supabase Auth's job, and this schema only
-- ever holds the identity hanging off it.
--
-- ── Why this does not reuse edu_students ────────────────────────────────────
--
-- Because `edu_students.school_id` is `not null references edu_schools on
-- delete cascade`, and `edu_practice_attempts.student_id` cascades from there
-- in turn. That table is correct for what it is for: a school bulk provisions
-- its roll long before any pupil has a login, and its own comment says so.
--
-- It is the wrong shape for this product, for one reason that decides it. A
-- learner must be able to sign in and learn when their school will not take
-- part, or when they have no school at all. Under `edu_students` that learner
-- cannot exist without a school row to hang off, and deleting that school row
-- would delete every answer they ever gave.
--
-- `LearnerProfile.id` in `learner.ts` states the rule this schema follows:
-- "a learner is never owned by a school. Moving from KG to primary, changing
-- town, leaving one school for another, going up to university, none of it
-- issues a new person." So the identity lives here, school independent, and
-- `student_id` below is an optional pointer OUT to an enrolment rather than the
-- thing that gives the learner existence.
--
-- The school spine is untouched by this migration. The two can coexist: a
-- learner who later joins a participating school gains an `edu_students` row
-- and keeps this one, and their history stays theirs.

-- ---------------------------------------------------------------------------
-- edu_account: the human who signs in
-- ---------------------------------------------------------------------------
--
-- Three kinds arrive and only two of them have an email address. A learner is
-- deliberately not asked for one: most basic school pupils in Ghana do not
-- have an email, and phone verification costs money per message on a product
-- meant to be free. Supabase Auth needs an address regardless, so a learner
-- gets a synthetic one derived from their handle. It is internal plumbing, is
-- never shown to them and is never sent anything.
--
-- This is deliberately NOT `edu_profiles`. That table's `role` enum has no
-- 'school' member, and its own comment says adding one is a migration on
-- purpose "so that every RLS policy gets revisited when the role model
-- changes". Bending the school product's role model to fit the consumer one
-- would be the tail wagging the dog, so the consumer product gets its own
-- small table and the school spine keeps its meaning.

create table if not exists public.edu_account (
  -- Same id as the auth user. One row per credential, and the join to
  -- `auth.users` needs no second key.
  id           uuid primary key references auth.users (id) on delete cascade,

  kind         text not null check (kind in ('learner', 'parent', 'school')),

  -- The learner's name, the parent's name, or the institution's name.
  name         text not null check (length(btrim(name)) > 0),

  -- What was typed to sign in: the name for a learner, the email otherwise.
  -- Stored normalised, so "Ama  Mensah" and "ama mensah" are one handle. A
  -- child will not reproduce their own capitalisation, and being locked out of
  -- your own work by a capital letter is not a security feature.
  handle       text not null unique check (length(btrim(handle)) > 0),

  -- Parents and schools only. Null for a learner, and the check keeps that
  -- true rather than trusting the client.
  email        text check (email is null or position('@' in email) > 1),

  -- A school's classes and staff, as the console already shapes them.
  --
  -- Json rather than columns, and the reason is scope rather than taste.
  -- `edu_classes` exists and is better, but it requires a `school_id` and an
  -- `academic_year_id` from the org spine, which a school signing itself up on
  -- a phone has not got. Promoting these into the spine is the right move the
  -- day a real school runs its register here, and until then this keeps the
  -- console working without inventing an academic year for it.
  classes      jsonb not null default '[]'::jsonb,
  teachers     jsonb not null default '[]'::jsonb,

  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- edu_learner: the identity, and how this person is taught
-- ---------------------------------------------------------------------------
--
-- One row per learner, whoever created it. The profile fields are the ones
-- `LearnerProfile` in `learner.ts` carries, as columns rather than json,
-- because unlike a plan these are asked as questions with closed answers and
-- are read to decide what a learner is even shown.

create table if not exists public.edu_learner (
  id            uuid primary key default gen_random_uuid(),

  full_name     text not null check (length(btrim(full_name)) > 0),

  -- Which band of schooling, and the year inside it.
  stage         text not null,
  level         text not null default '',

  -- True when a parent or guardian set this up for a child.
  for_child     boolean not null default false,

  -- The sign up answers. Free text with a not null rather than enums: the
  -- vocabulary belongs to `learner.ts` and has changed twice already, and a
  -- new option there should not need a migration here.
  goal          text not null default '',
  approach      text not null default '',
  when_stuck    text not null default '',
  footing       text not null default '',
  diet          text not null default '',

  -- The course, where the stage has courses. Null until asked, and null for
  -- every stage where the question does not apply. See `programmes.ts`.
  programme     text,
  subject_id    text,

  -- What the tutor has noticed, per subject. Json because it is the tutor's
  -- own shape and nothing here queries inside it.
  ai_notes      jsonb not null default '{}'::jsonb,

  -- Bumped by the client when the profile shape changes, exactly as the local
  -- `LearnerProfile.version` did.
  version       int not null default 0,

  -- The learner's OWN login, when they have one.
  --
  -- This is the column that answers "I should be able to sign into my own
  -- account if I want to personally learn and my school is not willing". It is
  -- null for a small child their parent added, and set for anybody who signs
  -- in as themselves. It is not the owner: see the membership table below for
  -- why nothing here cascades from an account.
  self_user_id  uuid unique references auth.users (id) on delete set null,

  -- An enrolment, IF this learner is also on a participating school's roll.
  --
  -- Nullable and `on delete set null`, both deliberate. A learner exists
  -- without a school, and a school leaving the platform must not take the
  -- learner's identity or history with it. This points out at the school
  -- spine; the school spine never points in here.
  student_id    uuid unique references public.edu_students (id) on delete set null,

  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists edu_learner_self_idx on public.edu_learner (self_user_id);

-- ---------------------------------------------------------------------------
-- edu_account_learner: who may see whom
-- ---------------------------------------------------------------------------
--
-- A membership table rather than an `account_id` column on the learner, and
-- this is the single most important shape in the migration.
--
-- `accounts.ts` promises that "a learner record is never owned by the account
-- that created it" and that a learner's identity and history "survive the
-- parent's account being deleted, the child changing school, or the child
-- later signing in for themselves". An `account_id` with a cascade would break
-- every clause of that: deleting a parent would delete the child.
--
-- So the link is its own row. Delete the parent and the membership goes; the
-- learner stays, keeps their work, and can be claimed later by their own
-- login or by a guardian. It also means two accounts can see one learner,
-- which is a mother and a father, or a parent and a school, and that is a
-- family rather than an edge case.

create table if not exists public.edu_account_learner (
  account_id  uuid not null references public.edu_account (id) on delete cascade,
  learner_id  uuid not null references public.edu_learner (id) on delete cascade,

  -- Which class the learner sits in, for a school account. Matches the id
  -- inside `edu_account.classes`.
  class_id    text,

  -- Preserves the order children were added in, which is the order the
  -- switcher shows them in.
  added_at    timestamptz not null default now(),

  primary key (account_id, learner_id)
);

create index if not exists edu_account_learner_learner_idx
  on public.edu_account_learner (learner_id);

-- ---------------------------------------------------------------------------
-- edu_learner_attempt: the work
-- ---------------------------------------------------------------------------
--
-- Keyed on the learner and not on a student, which is the whole reason this
-- table exists beside `edu_practice_attempts`. That one is
-- `student_id -> edu_students -> edu_schools`, all not null and all cascading,
-- so recording that a child answered a question required a school to exist and
-- deleting the school deleted the answer.
--
-- `question_id` is deliberately NOT a foreign key to `edu_questions`. Most
-- questions a learner meets today were generated for her and were never
-- stored, so a foreign key would make it impossible to record that she
-- answered one. `objective_id` is what mastery is actually computed from.

create table if not exists public.edu_learner_attempt (
  id            uuid primary key default gen_random_uuid(),
  learner_id    uuid not null references public.edu_learner (id) on delete cascade,

  -- The syllabus objective this was against. The one field `mastery.ts`
  -- genuinely needs.
  objective_id  text not null,

  -- The question, as the client identifies it. Free text: a stored question's
  -- uuid, or the id of one generated on the spot.
  question_id   text not null default '',

  response      jsonb not null default '{}'::jsonb,
  is_correct    boolean,
  hint_used     boolean not null default false,

  -- Which kind of material it came through: prose, video, picture, game,
  -- questions, talk. Without this the platform can say a learner is shaky on
  -- counting and cannot say she is shaky when she reads it and secure when she
  -- watches it, which is the comment `mastery.ts` already makes.
  via           text,

  attempted_at  timestamptz not null default now()
);

create index if not exists edu_learner_attempt_idx
  on public.edu_learner_attempt (learner_id, attempted_at desc);
create index if not exists edu_learner_attempt_objective_idx
  on public.edu_learner_attempt (learner_id, objective_id);

-- ---------------------------------------------------------------------------
-- who may see what
-- ---------------------------------------------------------------------------
--
-- Read through a `security definer` helper rather than a policy that selects
-- from `edu_account_learner` directly. A policy on `edu_learner` that queries a
-- table whose own policy queries `edu_learner` recurses, and Postgres reports
-- it as a stack depth error at query time rather than as a mistake here.
--
-- `stable` so it is evaluated once per statement rather than per row, and the
-- search path is pinned because a `security definer` function without one is
-- the standard way to get privilege escalation through a shadowed table name.

create or replace function public.edu_may_see_learner(the_learner uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    -- The learner themselves.
    select 1 from public.edu_learner l
     where l.id = the_learner
       and l.self_user_id = auth.uid()
  ) or exists (
    -- A parent or school that holds them.
    select 1 from public.edu_account_learner al
     where al.learner_id = the_learner
       and al.account_id = auth.uid()
  );
$$;

revoke all on function public.edu_may_see_learner(uuid) from public;
grant execute on function public.edu_may_see_learner(uuid) to authenticated;

alter table public.edu_account          enable row level security;
alter table public.edu_learner          enable row level security;
alter table public.edu_account_learner  enable row level security;
alter table public.edu_learner_attempt  enable row level security;

-- edu_account: your own row, and nothing else. Not even the existence of
-- another account, which is why there is no policy that lets a handle be
-- looked up. Checking whether a handle is free happens through the sign up
-- attempt itself, so a stranger cannot enumerate who has an account here.
drop policy if exists edu_account_own on public.edu_account;
create policy edu_account_own
  on public.edu_account for select
  using (auth.uid() = id);

drop policy if exists edu_account_insert_self on public.edu_account;
create policy edu_account_insert_self
  on public.edu_account for insert
  with check (auth.uid() = id);

drop policy if exists edu_account_update_self on public.edu_account;
create policy edu_account_update_self
  on public.edu_account for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- edu_learner: the learner, or an account holding them.
drop policy if exists edu_learner_read on public.edu_learner;
create policy edu_learner_read
  on public.edu_learner for select
  using (public.edu_may_see_learner(id));

-- Insert is open to any signed in user, because creating a learner is what a
-- brand new parent does before any membership exists to check against. The
-- membership is written in the same breath by the client, and a learner with
-- no membership and no `self_user_id` is unreachable by anybody, including
-- whoever made it.
drop policy if exists edu_learner_insert on public.edu_learner;
create policy edu_learner_insert
  on public.edu_learner for insert
  to authenticated
  with check (true);

drop policy if exists edu_learner_update on public.edu_learner;
create policy edu_learner_update
  on public.edu_learner for update
  using (public.edu_may_see_learner(id))
  with check (public.edu_may_see_learner(id));

-- Deliberately no delete policy on edu_learner. A learner's record is not
-- something a parent or a school gets to destroy, and the promise in
-- accounts.ts is that it outlives them both. Removing a child from a family
-- account means deleting the membership below, which leaves the learner and
-- their work intact.

drop policy if exists edu_account_learner_own on public.edu_account_learner;
create policy edu_account_learner_own
  on public.edu_account_learner for select
  using (account_id = auth.uid() or public.edu_may_see_learner(learner_id));

drop policy if exists edu_account_learner_add on public.edu_account_learner;
create policy edu_account_learner_add
  on public.edu_account_learner for insert
  with check (account_id = auth.uid());

drop policy if exists edu_account_learner_edit on public.edu_account_learner;
create policy edu_account_learner_edit
  on public.edu_account_learner for update
  using (account_id = auth.uid())
  with check (account_id = auth.uid());

-- Removing a child from your own account is allowed, and is the one delete in
-- this migration. It unlinks and never destroys.
drop policy if exists edu_account_learner_remove on public.edu_account_learner;
create policy edu_account_learner_remove
  on public.edu_account_learner for delete
  using (account_id = auth.uid());

-- Attempts: readable and writable by whoever may see the learner. No update
-- and no delete, at all, by anybody. An answer already given is a fact about
-- what happened, the adaptive model reads it to decide what to teach next, and
-- a parent who could quietly delete their child's wrong answers would be
-- editing the evidence the teaching is built on.
drop policy if exists edu_learner_attempt_read on public.edu_learner_attempt;
create policy edu_learner_attempt_read
  on public.edu_learner_attempt for select
  using (public.edu_may_see_learner(learner_id));

drop policy if exists edu_learner_attempt_add on public.edu_learner_attempt;
create policy edu_learner_attempt_add
  on public.edu_learner_attempt for insert
  with check (public.edu_may_see_learner(learner_id));

-- ---------------------------------------------------------------------------
-- keep updated_at honest
-- ---------------------------------------------------------------------------

create or replace function public.edu_touch_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists edu_account_touch on public.edu_account;
create trigger edu_account_touch
  before update on public.edu_account
  for each row execute function public.edu_touch_updated_at();

drop trigger if exists edu_learner_touch on public.edu_learner;
create trigger edu_learner_touch
  before update on public.edu_learner
  for each row execute function public.edu_touch_updated_at();
