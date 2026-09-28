-- Let a learner read back the row they just inserted.
--
-- ── The bug ────────────────────────────────────────────────────────────────
--
-- Migration 000003 gave `edu_learner` this select policy:
--
--   using (public.edu_may_see_learner(id))
--
-- and that function is `stable`, which is what you want for a policy helper:
-- Postgres evaluates it once per statement rather than once per row.
--
-- A `stable` function also sees the snapshot as it was when the statement
-- started, and that is the problem. On `insert ... returning`, the select
-- policy is checked against the new row, but the function looks the row up by
-- id in a snapshot taken before the insert, finds nothing, and returns false.
-- So the insert succeeds and handing the row back is refused.
--
-- PostgREST reports it as `42501 new row violates row-level security policy`,
-- which points at the insert policy and is the wrong place to look entirely.
-- The insert policy was never the problem: the same insert with
-- `Prefer: return=minimal` returns 201.
--
-- This matters because `insert().select()` is the ordinary supabase-js idiom
-- and is how `accounts.ts` learned the uuid of a learner it had just created.
--
-- ── The fix ────────────────────────────────────────────────────────────────
--
-- Split the two halves of "may see this learner" apart, because only one of
-- them needs to read a table.
--
--   self          `self_user_id = auth.uid()` is a comparison against a column
--                 OF the row being checked. No lookup, no snapshot, so it is
--                 true for a row that does not exist yet.
--
--   held by me    genuinely needs `edu_account_learner`, so it stays in a
--                 `security definer` helper. It reads a DIFFERENT table from
--                 the one being inserted into, so the stale snapshot cannot
--                 bite: a membership row is never written by the same
--                 statement that writes the learner.
--
-- `edu_may_see_learner` is left exactly as it is and still guards
-- `edu_learner_attempt` and `edu_account_learner`, where it is correct for the
-- same reason: those policies read `edu_learner`, which is never the table
-- being written.

create or replace function public.edu_holds_learner(the_learner uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.edu_account_learner al
     where al.learner_id = the_learner
       and al.account_id = auth.uid()
  );
$$;

revoke all on function public.edu_holds_learner(uuid) from public;
grant execute on function public.edu_holds_learner(uuid) to authenticated;

drop policy if exists edu_learner_read on public.edu_learner;
create policy edu_learner_read
  on public.edu_learner for select
  using (
    self_user_id = auth.uid()
    or public.edu_holds_learner(id)
  );

drop policy if exists edu_learner_update on public.edu_learner;
create policy edu_learner_update
  on public.edu_learner for update
  using (
    self_user_id = auth.uid()
    or public.edu_holds_learner(id)
  )
  with check (
    self_user_id = auth.uid()
    or public.edu_holds_learner(id)
  );

-- A note on what is deliberately still true after this.
--
-- A parent creating a child has no membership row yet at the instant the
-- learner is inserted, so even with this fix they cannot read that row back in
-- the same statement. That is correct: at that moment nothing in the database
-- says the child is theirs.
--
-- The client therefore no longer relies on `returning` at all. It generates
-- the uuid itself, inserts with an explicit id, and writes the membership
-- next, which is both fewer round trips and immune to this whole class of
-- problem. See `putLearner` in `src/lib/education/accounts.ts`.
