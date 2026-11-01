-- Two unchecked inserts, and why they matter more than they look.
--
-- An audit of every policy in this project found the reads in good order:
-- `edu_account` is your own row and nothing else, `edu_profiles` is yourself
-- plus colleagues at your own school, `edu_students` is yourself, your ward,
-- or staff at the school holding you, and every `using (true)` policy in the
-- schema is a SELECT on reference data with no person in it: regions,
-- districts, circuits, subjects, curriculum indicators, past papers, and the
-- shared artifact table, which is keyed on the syllabus and has no learner
-- column by design.
--
-- The writes were weaker, in one particular way: it was the inserts, not the
-- selects, that let somebody reach a learner who is not theirs.
--
-- ── 1. A learner could be planted in a stranger's account ──────────────────
--
-- `edu_learner_insert` was `with check (true)` for any signed in user, and
-- the reasoning in migration 000003 is sound as far as it goes: a brand new
-- parent creates a learner before any membership exists to check against, so
-- there is nothing yet to test them against.
--
-- What it missed is `self_user_id`. That column is what makes a learner
-- readable by the person the learner IS, so an insert that sets it to
-- somebody else's id creates a learner inside that person's account: it
-- appears in their switcher, with a name and a year group chosen by whoever
-- wrote it. No data leaves, but the account is no longer only theirs, which
-- is exactly the property an account is supposed to have.
--
-- ── 2. A learner could be adopted by anybody who knew their id ─────────────
--
-- Worse, and the one that actually matters. `edu_account_learner_add`
-- checked only that you were writing a membership for your own account. It
-- never asked whether you had any business with the learner on the other
-- side of it. So a signed in stranger holding a learner's uuid could insert
-- a membership joining that child to their own account, and from that moment
-- `edu_may_see_learner` answers yes: their name, their year, their plan,
-- every question they have answered, and their personal lessons.
--
-- The uuids are random and 122 bits of entropy is not a thing anybody
-- guesses, so this was not an open door. It was a door whose lock was the
-- secrecy of an identifier, and identifiers travel: into URLs, support
-- screenshots, exports, and the logs of anything these rows pass through. An
-- identifier is not a credential and should never be the only thing between
-- a stranger and a child's record.
--
-- ── What the client actually does, which is why this is safe ───────────────
--
-- `accounts.ts` only ever links learners this device created: `putLink` maps
-- a local learner id to the uuid it created with `putLearner`, and refuses
-- when there is none. There is no flow anywhere that joins an account to a
-- learner somebody else made. The learner code added in 000004 is a column
-- and two constraints with no claim path built on it yet.
--
-- So the rule below is: you may link a learner you can already see, or one
-- nobody has claimed. When a claim by code flow is built, it must not relax
-- this. It should be a `security definer` function that takes the code,
-- checks it, and writes the membership itself, so the code is the credential
-- and the uuid stays merely an identifier.

/* ── 1. a learner may only be created as yourself, or as nobody ─────────── */

drop policy if exists edu_learner_insert on public.edu_learner;
create policy edu_learner_insert
  on public.edu_learner for insert
  to authenticated
  with check (
    -- The ordinary case: a parent or school creating a child's record. The
    -- learner is nobody's login yet, and the membership written in the same
    -- breath is what connects them.
    self_user_id is null
    -- Or a person creating their own record, as a learner signing up for
    -- themselves. Anything else is writing into somebody else's account.
    or self_user_id = auth.uid()
  );

/* ── 2. a membership may only be made for a learner you may have ────────── */

-- Unclaimed means exactly that: nobody holds them and they are not anybody's
-- login. A learner in that state is the one `putLink` has just created.
--
-- `security definer` for the same reason as every other helper here: the
-- policy on `edu_account_learner` is what this is called from, and a policy
-- that reads the table it guards recurses. The search path is pinned because
-- a definer function without one is the standard way to be surprised later.
create or replace function public.edu_learner_unclaimed(the_learner uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select not exists (
    select 1 from public.edu_account_learner al
     where al.learner_id = the_learner
  ) and not exists (
    select 1 from public.edu_learner l
     where l.id = the_learner
       and l.self_user_id is not null
  );
$$;

revoke all on function public.edu_learner_unclaimed(uuid) from public;
grant execute on function public.edu_learner_unclaimed(uuid) to authenticated;

drop policy if exists edu_account_learner_add on public.edu_account_learner;
create policy edu_account_learner_add
  on public.edu_account_learner for insert
  to authenticated
  with check (
    account_id = auth.uid()
    and (
      -- A learner already in your care: adding them to a second class, or a
      -- second guardian linking a child they can already see.
      public.edu_may_see_learner(learner_id)
      -- Or a learner nobody has: the one you just created.
      or public.edu_learner_unclaimed(learner_id)
    )
  );

-- Nothing is tightened on select, update or delete. Those were already
-- scoped: reads go through `edu_may_see_learner`, a membership may only be
-- removed by the account holding it, and there is deliberately no delete on
-- `edu_learner` at all, because a child's record outlives the account that
-- made it.
