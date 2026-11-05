-- ============================================================================
-- NEXA-EDU: a way back into a forgotten account
--
-- Paste the whole file into the Supabase SQL editor and run it, the same way
-- RUN_ME_2_accounts.sql was run. Safe to run twice: every statement is
-- if-not-exists or drop-then-add.
--
-- Until this has run, sign up will reject the new phone-or-email field and
-- password reset cannot work, because the columns it reads do not exist.
--
-- Identical to supabase/migrations/20261105000001_edu_account_recovery_contact.sql,
-- kept here because this project applies schema changes by hand.
-- ============================================================================

-- A way back into a learner's account.
--
-- ── The decision this reverses, and why ─────────────────────────────────────
--
-- `edu_account` has carried an `email` column that is null for every learner,
-- with a comment saying learners are deliberately not asked for one: most
-- basic school pupils in Ghana do not have an email, and SMS costs money per
-- message on a product meant to be free.
--
-- That held until somebody forgot their password. A learner signs in with a
-- name and a password and has no inbox, so there was nothing to send a reset
-- to and no way back in at all. A term of work behind a forgotten password is
-- worse than the cost of a text message.
--
-- ── Why it is one column and not two ────────────────────────────────────────
--
-- A phone number or an email, whichever the family has, in one column with a
-- channel beside it. Two nullable columns would allow both to be set, and then
-- something has to decide which the code goes to, which is a rule nobody would
-- remember a year from now.
--
-- ── Why it is not unique ────────────────────────────────────────────────────
--
-- Three children share their mother's phone. That is the normal case here, not
-- an edge one, so the number repeats across rows by design and the uniqueness
-- that matters stays on `handle`: each child signs in with their own name and
-- their own password, and a reset code is sent for one named account at a
-- time. The phone proves the family, the name says which child.

alter table public.edu_account
  -- E.164 for a phone (+233240000000) or an address for an email. Normalised
  -- before it is written, so the lookup at reset time is an equality test and
  -- not a guess about spacing or a leading zero.
  add column if not exists recovery_contact text,

  -- Which it is, so nothing has to parse the value to find out.
  add column if not exists recovery_channel text
    check (recovery_channel is null or recovery_channel in ('sms', 'email'));

-- Both or neither. A channel with no contact sends a code nowhere, and a
-- contact with no channel has nothing to send it through; either on its own is
-- a row that will fail at the moment somebody actually needs it.
alter table public.edu_account
  drop constraint if exists edu_account_recovery_pair;

alter table public.edu_account
  add constraint edu_account_recovery_pair check (
    (recovery_contact is null and recovery_channel is null)
    or (recovery_contact is not null and recovery_channel is not null)
  );

-- Reset looks an account up by handle and reads the contact. The handle is
-- already unique and therefore already indexed, so nothing further is needed
-- for that path. This index is for the other direction: a parent asking which
-- of their children are on this number, and an administrator answering "who
-- else is on this phone" when a family loses a device.
create index if not exists edu_account_recovery_contact_idx
  on public.edu_account (recovery_contact)
  where recovery_contact is not null;

comment on column public.edu_account.recovery_contact is
  'Phone in E.164 or an email address. Shared across siblings on purpose: one '
  'family phone, several children, each with their own handle and password.';

comment on column public.edu_account.recovery_channel is
  'sms or email. Says how to reach recovery_contact without parsing it.';
