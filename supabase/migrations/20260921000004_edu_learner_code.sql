-- The learner id the application actually uses.
--
-- `newLearnerId` in `src/lib/education/learner.ts` issues `EDU-2026-4543`, and
-- every screen, every stored attempt and every cache key in the product is
-- keyed on that string. Migration 000003 gave `edu_learner` a uuid primary key
-- instead, because `edu_learner_attempt` and the membership table reference it
-- and a uuid is the right thing to put a foreign key on.
--
-- Both are needed, so both are here. The uuid is the key the database joins
-- on; this column is the identity the product speaks in, and keeping it means
-- no screen has to change and no existing cache key has to be rewritten.
--
-- ── A real weakness, recorded rather than hidden ────────────────────────────
--
-- `newLearnerId` is the year plus four random digits, so there are nine
-- thousand per year. That is fine for one device and nowhere near enough for a
-- country: by the birthday problem a few hundred learners in one year make a
-- collision likely rather than unlucky.
--
-- On a device that collision silently merged two children into one history.
-- The unique constraint below turns it into a failed insert instead, which the
-- client retries with a fresh code. So this does not fix `newLearnerId`, and
-- it does stop the failure mode that actually harms somebody: one child
-- reading another child's progress, and the adaptive model reading one
-- child's mistakes to decide what to teach the other.
--
-- The proper fix is a wider id, and it is cheap to do later precisely because
-- the uuid is the real key: widening the format changes what is written in
-- this column and nothing that references it.

alter table public.edu_learner
  add column if not exists learner_code text;

-- Backfilled before the constraint, so this is safe to run on a table that
-- already has rows. There are none today, and a migration that is only correct
-- on an empty table is a trap for whoever runs it next.
update public.edu_learner
   set learner_code = 'EDU-' || to_char(created_at, 'YYYY') || '-'
                    || lpad((1000 + (random() * 8999)::int)::text, 4, '0')
 where learner_code is null;

alter table public.edu_learner
  alter column learner_code set not null;

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'edu_learner_code_unique'
  ) then
    alter table public.edu_learner
      add constraint edu_learner_code_unique unique (learner_code);
  end if;
end
$$;

-- Non blank, because an empty code would defeat the unique constraint by
-- letting exactly one learner hold "no identity" and the next one fail
-- confusingly.
do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'edu_learner_code_present'
  ) then
    alter table public.edu_learner
      add constraint edu_learner_code_present
      check (length(btrim(learner_code)) > 0);
  end if;
end
$$;

-- Looked up by code on every sign in, to turn the identity the client holds
-- into the uuid the foreign keys need.
create index if not exists edu_learner_code_idx
  on public.edu_learner (learner_code);
