-- Let a pupil read the lessons their school has approved.
--
-- ── What was missing ───────────────────────────────────────────────────────
--
-- Migration 000011 put a school's generated material on the server and scoped
-- every row to the account that owns it, so a head teacher who approves forty
-- lessons on the staff room laptop now finds them on their phone. It stopped
-- there on purpose, and it left the feature half built: the people the
-- material was approved FOR still could not see it. A pupil signing in on
-- their own device was served exactly what that device happened to hold, which
-- for a new device is nothing beyond the written library, and the school's
-- approved work stayed on the school's own accounts.
--
-- This migration adds the one thing that was deferred: a read path from the
-- learner to the accounts that hold them.
--
-- ── Why it is read only, and additive ──────────────────────────────────────
--
-- Policies in Postgres are permissive by default, so this adds a second
-- `select` policy beside the owner policy from 000011 rather than replacing
-- it. Reads widen; writes do not move at all. A pupil can therefore see what
-- their school approved and cannot approve, change, or delete any of it, which
-- is the whole point of the approval gate: it is a teacher's decision and a
-- pupil must not be able to make it for themselves.
--
-- Only approved SHARED rows cross. A draft that no teacher has read is not
-- material yet, and a PERSONAL row belongs to one learner and is already
-- covered by `for_learner = auth.uid()` in the owner policy.
--
-- ── Why a security definer helper, again ───────────────────────────────────
--
-- The same reason as `edu_holds_learner` in 000005, in the other direction. A
-- policy that selects from `edu_account_learner` and `edu_learner` inline
-- would be evaluated under the reader's own policies, and the policy on
-- `edu_account_learner` itself calls `edu_may_see_learner`, which reads
-- `edu_learner`. Postgres reports that tangle as a stack depth error at query
-- time, pointing nowhere near the mistake. So the join lives in a `stable`
-- `security definer` function with a pinned search path, which is also what
-- keeps it to one evaluation per statement rather than one per row.
--
-- The question the function answers is deliberately narrow: does this account
-- hold a learner whose own login is me? It never says which learner, so it
-- cannot be used to enumerate a school's roll.

create or replace function public.edu_teaches_me(the_account uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
      from public.edu_account_learner al
      join public.edu_learner l on l.id = al.learner_id
     where al.account_id = the_account
       and l.self_user_id = auth.uid()
  );
$$;

revoke all on function public.edu_teaches_me(uuid) from public;
grant execute on function public.edu_teaches_me(uuid) to authenticated;

-- ── the lessons ────────────────────────────────────────────────────────────

drop policy if exists edu_generated_lesson_pupil on public.edu_generated_lesson;
create policy edu_generated_lesson_pupil
  on public.edu_generated_lesson for select
  using (
    approved
    and audience = 'SHARED'
    and public.edu_teaches_me(owner_id)
  );

-- ── the outlines ───────────────────────────────────────────────────────────
--
-- An outline decides which topics a pupil is offered at all, so without this
-- the lessons would arrive addressed to subjects the pupil's app does not
-- know about. `approved_at is not null` is the outline's version of the
-- approved flag.

drop policy if exists edu_generated_outline_pupil on public.edu_generated_outline;
create policy edu_generated_outline_pupil
  on public.edu_generated_outline for select
  using (
    approved_at is not null
    and public.edu_teaches_me(owner_id)
  );

-- ── the curricula ──────────────────────────────────────────────────────────
--
-- A school's outline names the curriculum it belongs to, and a curriculum
-- that nothing has defined registers under a name the client cannot resolve,
-- which makes the subject silently fail to appear. The note on `loadCurricula`
-- in `main.tsx` says the same thing about the order these are loaded in. So
-- the curriculum row has to cross with them.
--
-- There is no approval flag here because a curriculum is a name and a note
-- that the school typed, not generated material.

drop policy if exists edu_curriculum_pupil on public.edu_curriculum;
create policy edu_curriculum_pupil
  on public.edu_curriculum for select
  using (public.edu_teaches_me(owner_id));

-- ── what this still does not do ────────────────────────────────────────────
--
-- A pupil reads their school's material through the ordinary pull on startup,
-- into the same device cache everything else is served from, so the answer to
-- "what does the app show when the school cannot be reached" is: whatever it
-- pulled last time, with no spinner and no error. A pupil who has never been
-- online sees the written library alone, which is what they saw before this
-- existed. Nothing in the teaching path waits on the network, and that is a
-- deliberate constraint rather than an oversight: these are schools on
-- intermittent connections, and a lesson that needs the server to load is a
-- lesson that cannot be taught.
--
-- Two accounts holding the same learner, a parent and a school, both reach the
-- learner through this policy, and both sets of lessons arrive. The client
-- keys them per owning account so that neither silently replaces the other.
