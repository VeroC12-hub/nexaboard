# Row level security, audited

Run against every policy declared in `supabase/migrations/` on 1 November
2026. Static: it reads the migrations, not the live database, so a table
altered by hand on the server will not appear here. Applying the outstanding
migrations is what makes the two agree.

## What was checked

63 tables are declared across the migrations. Every one of them has row
level security enabled. There is no table in this schema that a browser with
the anon key can read freely by default, which is the failure this kind of
audit usually finds first.

## Reads: in order

| Table | Who may read a row |
|---|---|
| `edu_account` | the account itself, and nobody else |
| `edu_profiles` | yourself, plus colleagues at your own school |
| `edu_students` | yourself, your ward, or staff at the school holding you |
| `edu_learner` | the learner themselves, or an account holding them |
| `edu_learner_attempt` | whoever may see that learner |
| `edu_learner_plan` | the learner themselves |
| `edu_generated_lesson` | the owner, the learner it is for, and since 000012 the pupils of the school that approved it |
| `edu_practice_attempts` | the student, or staff at their school |

Not even the existence of another account is readable: there is no policy
allowing a handle to be looked up, which is why checking whether a handle is
free happens through the sign up attempt itself rather than through a query.

## The `using (true)` policies, and why each is fine

Eight policies have no filter. Seven are SELECT on reference data with no
person in it: `edu_regions`, `edu_districts`, `edu_circuits`,
`edu_subjects`, `edu_curriculum_indicators`, `edu_exam_papers` and
`edu_shared_artifact`. The last of those is the only one readable by `anon`
as well, and it is keyed on the syllabus with no learner column by design,
which migration 000002 states at length and should stay true.

The eighth was `edu_learner` INSERT, and it is dealt with below.

## 24 tables with security on and no policies at all

`edu_stages`, `edu_levels`, `edu_topics`, `edu_jobs`, `edu_signup_throttle`,
`edu_tutor_call` and the rest of the phase one structure. No policy means no
access for anybody except the service role, which is what the server side
endpoints use. These are locked rather than open. The throttle and quota
tables are deliberately in this group: a client that could delete rows could
clear its own limit, and a client that could read them would learn when
other people study.

## What was wrong, and is fixed in 000014

Both findings were on inserts rather than reads, which is why a reader of
the policies would pass over them.

**A learner could be created inside a stranger's account.** `edu_learner`
accepted any insert from any signed in user, including one setting
`self_user_id` to somebody else's id. That column is what makes a learner
readable by the person the learner is, so the row would appear in that
person's switcher with a name and year chosen by whoever wrote it.

**A learner could be adopted by anyone holding their uuid.** The membership
insert checked only that you were writing for your own account, never
whether you had any business with the learner. A stranger with a learner's
uuid could join that child to their account and then read everything about
them. The uuids are random, so the lock was the secrecy of an identifier,
and identifiers travel: into URLs, screenshots, exports and logs. An
identifier is not a credential.

Both are closed by `20260921000014_rls_learner_claim.sql`: a learner may be
created as nobody or as yourself, and a membership may be written only for a
learner you can already see or one nobody has claimed. Neither affects what
the client does today, which only ever links learners it created itself.

## When the claim by code flow is built

`edu_learner.learner_code` exists from migration 000004 and nothing uses it
yet. It must not be implemented by relaxing the membership policy. It should
be a `security definer` function that takes the code, checks it, and writes
the membership itself, so that the code is the credential and the uuid stays
an identifier.

## Still to verify against the live database

Every finding here is about declared policy. Three migrations are written
and not yet applied: 000011, 000012, 000013, and now 000014. Until they are
applied, the server and this document disagree, and the things they add,
including the tutor quota table, do not exist.
