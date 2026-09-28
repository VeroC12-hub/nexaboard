# NEXA•EDU open issues

Things known to be wrong or unfinished, written down as they were found so they
are not rediscovered later. Newest section first. Nothing here is a guess: each
item says what is actually true of the code today.

---

## 0. RESOLVED 2026-09-21: the two migrations are applied

`20260921000002_edu_shared_artifact` and `20260921000010_past_paper_provenance`
are live on `aoanslmovspmjqiqozcq`. `supabase migration list` shows local and
remote matching on all 48 migrations. The 56 existing questions are untouched.

**What the delay was, recorded because it will recur.** Not a code problem. The
CLI was signed into the wrong Supabase account. The board project lives in the
`roveroc21@gmail.com` account (org `ngklgvbfkwnnvmarqugq`), and the CLI held a
token for the NexaCore account, whose orgs are `mkmdvisncldglrixzswy` and the
Vercel-managed `godwinocloo21-gmailcom's projects`. Neither owns the project, so
`db push` failed with a 403 on the login-role endpoint, which reads like a
permissions bug and is really an account mix-up. `supabase login` authorizes as
whichever account is signed into the browser, so logging in again without
switching accounts first reproduces it exactly.

**Diagnose it in one command:** `supabase projects list`. If
`aoanslmovspmjqiqozcq` is absent, no amount of retrying `db push` will work.

**The four layers were verified against the live database, not just applied.**
Each was attacked with the service key and held:

- relabelling `origin` from `AUTHORED` to `IMPORTED` is refused by trigger
  (`23514`, "origin is immutable"), and the row is unchanged.
- attaching a `paper_id` that does not exist is refused by the foreign key
  (`23503`).
- writing `source_exam`, `source_year` and `source_paper` onto a question with
  no paper does not error. The derive trigger recomputes them from `paper_id`
  and so nulls them straight back out. Worth knowing: the defence here is
  erasure, not refusal, and it is the stronger of the two because a fake exam
  claim cannot survive the write at all.
- `kind = 'figure'` is refused by the check constraint on the shared store, so
  a personal diagram cannot be cached as if it were shareable.

`edu_shared_artifact_sweep()` is callable and returned 0. Nothing schedules it
yet, which is deliberate: pg_cron is not enabled and the client already refuses
to serve anything past its shelf life, so an unswept row costs storage and
never teaches anybody the wrong thing.

---

## 1. MOSTLY DONE: accounts are on Supabase Auth

Passwords are gone from this codebase. There is no salt, no digest and no
`passwordHash` on `Account`; `auth.users` holds credentials and
`src/lib/education/accounts.ts` holds only the identity hanging off them.

**The screens did not change, and that was the constraint that shaped it.**
Every read in that module is synchronous and called straight from render, so
making it async would have turned a storage change into a rewrite of five
screens. The device store stays, demoted from source of truth to a cache and an
outbox: reads answer from it at once, writes go to it and to a queue that
flushes on `window.online`. That is also exactly the offline behaviour this
product needs, so the two requirements turned out to be the same requirement.

**Three account kinds, as before:** `learner`, `parent`, `school`. A learner
signs in with a name, and `edu_learner.self_user_id` is what lets somebody
learn here when their school will not take part.

**The schema, in migrations 000003 to 000005.** `edu_account`, `edu_learner`,
`edu_account_learner`, `edu_learner_attempt`. The link between an account and a
learner is a membership ROW, not a column, because this file's own promise is
that a learner's identity and history "survive the parent's account being
deleted". A column with a cascade would have deleted the child with the parent.

**Verified against the live database, not just compiled.** A learner was
created, signed in with the public anon key, wrote their profile and an answer,
and then:

- reading another learner with no membership and no self link returned nothing
- `PATCH` of an answer to a different value affected **zero rows** and the
  answer is unchanged
- `DELETE` of an answer affected **zero rows** and the answer is still there
- `anon` could neither read nor insert anything: `42501` on both
- deleting the auth user cascaded `edu_account` away with it

The append-only test is worth keeping: an earlier run of it "passed" against
zero matching rows, which proves nothing. Under RLS an UPDATE with no visible
rows returns 204 and changes nothing, so refusal and absence look identical.
Only a test with a row that really exists distinguishes them.

### What is left on this issue

- **The five screens have never been run.** `CreateProfile`, `SignIn`, `Study`,
  `Learners` and `School` typecheck and build against the new module and have
  not been exercised in a browser. Both browser MCP servers are failing to
  connect.
- **`/api/signup` needs a deployment or `vercel dev`.** A learner is created
  pre-confirmed through the Admin API from that function, so plain `vite` on its
  own cannot create a learner: there is nothing serving `/api`.
- **`edu_students` is never linked.** `edu_learner.student_id` exists and
  nothing sets it, so a learner who joins a participating school does not yet
  get connected to its roll.
- **Migrating a local account is not implemented, and by decision.** Nobody has
  registered, so there was nothing to preserve and no compatibility burden was
  taken on.

---

## 1b. DONE: learner sign up is rate limited durably

Twelve sign ups per ten minutes per address, counted in Postgres by
`edu_signup_rate` (migration 000006) rather than in the function's memory.

**The first version was measured doing nothing.** It counted in a module level
Map, and fourteen consecutive requests against a limit of twelve all returned
200. Two independent reasons: `tools/vite-api.mjs` re-imports the handler on
every request by design, so the Map began each request empty, and on Vercel
each instance has its own memory and any of them may be cold. That is the test
to run if anybody ever moves this back in-process.

Now verified: twelve requests refused on validation, then 429 from the
thirteenth.

It fails OPEN if the throttle table cannot be reached, deliberately. The
alternative is that a database hiccup locks every new learner out of the
platform, which is both worse and likelier than somebody flooding the user
table during the same minutes.

Still not covered: a distributed attempt from many addresses. That belongs at
the edge.

The table holds IP addresses, which are personal data, so it holds nothing
else, and rows are deleted after an hour by the same function that counts them.
Hashing was considered and rejected as false comfort: the IPv4 space is small
enough to reverse a plain hash by brute force.

---

## 1d. DONE: server side routes work in development

`.env` was never loaded into `process.env`, so **every** `/api` route returned
501 under `vite`. Vite reads `.env` only to expose `VITE_` prefixed variables to
client code through `import.meta.env`, which is exactly the set the handlers do
not use.

The visible effect was that `/api/queue` answered "No tutor is configured for
this deployment" on every local request, and had since it was written. Anybody
reading that would go hunting for a missing key rather than four missing lines
in `tools/vite-api.mjs`, whose own header says it exists so the tutor can be
tried without a deployment.

This is listed here because of what it was silently blocking: lesson generation
could not be tested locally at all.

---

## 1c. A parent's email address is confirmed; a learner's cannot be: OPEN

Email confirmation is ON for this project, and it stays on. Parents and schools
receive a real confirmation email through Resend and cannot sign in until they
follow it, which is correct.

**This was nearly broken on purpose, so the reasoning is recorded.** The
straightforward fix for learners was to turn confirmations off, and
`supabase config diff` showed what that would actually have done: this project
also carries the **ELTUFF Ideas Ventures** website's authentication, with
`site_url` and redirect urls pointing at it, real SMTP through Resend, TOTP MFA
enabled and Twilio SMS enabled. Email confirmation is a project wide switch, so
turning it off to help learners would have silently weakened sign up
verification for another live product's real users. It was not done, and
`supabase/config.toml` was deleted rather than pushed.

The consequence to be aware of: a learner has no address, so there is no way to
send them a password reset. A forgotten learner password currently has no
recovery path at all. The honest fix is a guardian contact on the learner
record, or a reset code issued by whoever holds them, and neither exists yet.

---

## 1e. DONE: a lesson can hold tables, charts, pictures, facts and a question

A lesson was prose with maths in it, and the prompt explicitly forbade
structure ("no headings and no lists"). So there was no way to express a
comparison as a table or data as a chart, and a learner scrolled text.

It now carries five block kinds, placed inline where the tutor put them rather
than collected at the bottom, because a table three paragraphs below the
sentence that needs it is a table nobody reads.

- **Tables**: markdown pipes into a real `<table>`, with `scope` on the header
  and row cells so a screen reader announces "Ashanti, rainfall, 1400" rather
  than a stream of bare numbers.
- **Charts**: bar, line and pie as hand rolled inline SVG in
  `components/LessonChart.tsx`, drawn from data the tutor supplies.
- **Pictures**: an `image` fence, rendered through the existing `StepPicture`,
  which already polls `/api/render` and caches per prompt.
- **Facts box** and **one question mid lesson**, the question recording a real
  attempt with `via: 'prose'`.

**Why charts are SVG and not Chart.js,** which was already a dependency: it
scales with the text instead of needing a sized canvas in a flowing page, it
prints and screenshots cleanly, it carries a real `<title>` and `<desc>`, and
the same code can run inside the Remotion lesson videos where there is no
canvas. Chart.js would have been less code and none of those four things.

**Why tables and charts are data and never generated images.** The rule the
product already followed for video: a diffusion model asked for "a bar chart of
rainfield by region" returns bars of plausible but wrong heights and axis labels
spelled almost correctly. In a lesson about reading a chart that is not
cosmetic, the learner is reading data that means nothing. So the prompt
explicitly forbids putting a number or a label inside an image prompt.

**Verified on real tutor output**, not on a fixture: a Social Studies lesson on
regional rainfall produced 15 blocks, 11 paragraphs plus a 4 by 5 table, a
5 point bar chart carrying exact figures (Western 1800, Ashanti 1400,
Brong-Ahafo 1200, Northern 1050, Upper East 950), a facts box and a question.
All parsed cleanly.

### The bug this uncovered, which was much worse than the feature

`blocksOf` split paragraphs on a blank line written as two consecutive
newlines. In CRLF text a blank line has a carriage return between them, so the
pattern matched nothing. The tutor runs the Claude Code CLI and on Windows its
output is CRLF, so **every lesson written on this machine arrived as one
unbroken block**, and `Learn.tsx` then counted one paragraph and put the whole
lesson on a single page.

It survived because it does not look like a fault: a three thousand character
paragraph on one page reads as a layout decision. Fixed by stripping carriage
returns in the one function that decides where a block begins.

---

## 2. The transfer code is a stopgap

`src/lib/education/transfer.ts` packs a learner into a code that reconstructs
them on another device with no account and no connection. It works and it is
tested, but:

- **It is 209 characters.** Typeable once, unpleasant. A QR code is the right
  answer and is not built.
- **It is a bearer token with no PIN.** Anyone holding the code becomes that
  learner. Acceptable for carrying your own progress between your own devices,
  not acceptable once a real grade hangs off it.
- **Attached files do not travel in it**, which the interface says plainly.

Once item 1 is done this stops being the mechanism and becomes a migration
path: the code says who is arriving, and the server's record takes over.

---

## 3. Attached results are stored but never read

A learner can attach a report card, results slip or transcript. The file name and
size are kept on the device; the file is never parsed. So "starting at difficulty
2" still comes from what the learner said about themselves, not from their actual
grades.

Making an uploaded report card genuinely place someone needs the AI extraction
work, not a UI change. The wording on the page does not overclaim.

---

## 4. DONE: the learning screens are in one visual language

`Study.tsx` and `src/styles/study.css` were the earlier exercise-book
direction, and the dashboards were the current one, so the product changed
character the moment you pressed Start learning.

Resolved, but not the way this issue assumed. It assumed the exercise book was
the legacy to be replaced. It was the better idea: ruled paper with a red
margin, ticks accumulating down it as work is secured, and the topic numbers
written in the margin the way you number your own work on paper. That is the
one piece of this product that is drawn from something a Ghanaian student
already learns in, and the board in the classroom paints the same material.

So the layout stayed and the colours changed. `study.css` had its own complete
palette, a cool grey-green paper with its own green and its own red, which made
it a fifth scheme inside a platform that had just been unified on four, and the
worst place for one, because the lesson page is where a learner spends the most
time. It now draws from `tokens.css` like everything else: warm paper, the
platform navy, the platform green, the platform red down the margin.

One of its colours was not merely off-palette but failing: `--grow` at
`#4e9f2e` put white button text at 3.32:1. It is the palette green now, 4.82:1.

Also fixed in the same pass: its labels were tracked uppercase, including the
one that carries a topic title from the syllabus, so a written sentence came
out as `LETTERS STANDING FOR NUMBERS`. At 360px its header broke "Change
subject" and "Sign out" onto two lines each, and its margin, having narrowed on
a phone without moving its left offset, ended past where the body began and
printed the progress count on top of the heading beside it.

See `docs/design.md`, "A fifth palette nobody had noticed".

What is still open on these screens is content and not appearance: issues 5,
13, 15, 20 and 21.

---

## 5. Every subject opens, and none of them is a real syllabus

**What changed.** `src/lib/education/syllabus.ts` and `library/syllabus/` hold
outlines for all 48 subjects, creche to university, 846 topics. Every subject
now opens and is taught by the AI from its outline. See `docs/syllabus.md`.

**What is still true.** Every one of those outlines carries `source: 'MODEL'`.
It is an honest account of what each subject contains, and it is deliberately
free of anything only a real document could say: no indicator codes, no marks,
no claim that a topic sits on a particular paper. That rule is enforced in three
places, the data, `syllabusBrief()` in `api/prompt.js`, and a check in the audit
probe, and it must stay enforced.

So the platform teaches every subject and still cannot tell a learner what their
school will actually examine. `syllabusFor()` is the seam where a filed scheme
of work or the national curriculum overrides the outline, and nothing reads the
database through it yet. That is the next real step for this layer, and it is a
parsing job rather than a teaching one.

**Also unfinished.** The topic ordering within a year is the order they are
written in, not a learner's optimal path. `needs` is populated and used to look
backwards when somebody is failing, but nothing yet uses it to sequence a year,
so a learner browsing the outline can open a topic whose foundation they have
not met. The tutor is told to notice and say so, which is a mitigation and not
a fix.

## 6. Only one topic has an interactive figure

Linear equations has the balance. Ratio needs a bar model, Pythagoras a
draggable triangle, factorising an area model. Until then those three topics are
text.

---

## 7. DONE: there is a reason to come back

There was no streak, no running total, and nothing that made a learner want to
come back tomorrow. The adaptive model was good at deciding *what* to give them
and said nothing about *why they should return*.

`src/lib/education/rewards.ts` now carries points, days learned, a daily goal
in answers, seven badges with the rule for each written down, the closest
unearned one, and a weekly challenge. Every tier shows them: the youngest taps
their own stars to reach the screen, the others have them in the header.

Three decisions in there are worth not undoing.

**Everything is derived, nothing is stored.** There is no XP ledger and no
badge table; every number is computed from the attempts the mastery model
records anyway. A stored counter and a real record disagree eventually, and
when they do the child is either cheated of points they earned or credited with
points they did not. It also means nothing can quietly hand out points to lift
engagement, because there is nowhere to put them.

**The streak does not reset.** It counts days learned *this week*. Both
reference designs showed a consecutive-day streak that goes to zero on a missed
day, and a child in Ghana with no data for two days, or a fever, or a family
funeral, has not failed at anything. An app that greets them on their return by
deleting three weeks of work has taught them that the safest thing is not to
come back.

**Nothing is awarded for turning up.** Every badge rule reads the same attempts
everything else does, so a badge appears the moment the work behind it is real
and never before. Children work out a badge for nothing very quickly.

The one piece of decorative motion in the platform fires here, when a badge is
earned, and nowhere else. What is stored for it is only whether the
celebration has been seen, never the award: clear that key and the worst case
is one celebration replayed.

---

## 8. DONE: Phase 2 is in git

It was entirely uncommitted. `src/App.tsx` was modified and every file in this
direction was untracked, so one bad `git clean` would have lost all of it.

Committed to the `nexaedu` branch and pushed: 201 files, 63,844 lines. The
branch rather than `master` because `master` is the classroom board, and this
has not been reviewed by anybody yet.

Checked before committing rather than after: no key or token anywhere in the
tree, `.env` still ignored and `.env.example` still only placeholder names, and
nothing built or rendered included.

**Still not deployed.** The branch exists; no schools are running it, and two
BLOCKING issues (1 and 15) say it should not be.

---

## 9. The tutor depends on a machine being on

**What is true today.** The tutor answers on whichever of two routes is
configured: the Anthropic API when `ANTHROPIC_API_KEY` is set, otherwise a job
queue that `tools/tutor-worker.mjs` picks up on a machine signed into Claude
Code. The free route is the default and is what makes the site teach with no key
on it. See `docs/tutor.md`.

**What is unfinished.** The free route needs that machine to be awake and
signed in. When it is not, a learner waits four minutes and is then told the
tutor is not answering, which is honest but is still four minutes. Two things
would fix it, in this order:

- put the worker on a small always-on host with `CLAUDE_CODE_OAUTH_TOKEN`, which
  is a setup step rather than code, and is written up in `docs/tutor.md`
- have the queue report that no worker has claimed anything recently, so the
  page can say "the tutor is offline right now" at once instead of timing out

There is also no cap on how many jobs one learner can queue, and nothing
identifies who submitted one. A class of forty pressing the button at once would
sit behind each other on a single machine. Worth a per learner limit and a queue
depth shown on the page before that matters.

The `hint` task exists in both routes and is not yet on any screen. Its natural
home is the relief link during a question, where `whenStuck` already records how
much the learner wants given away.

## 10. The tutor's explanations are not kept

Each explanation is streamed once and then lost when the learner presses Next.
A learner who wants to re-read what the tutor told them yesterday cannot, and
neither the mastery model nor a parent's view knows the tutor was used at all.
Storing them alongside the attempts would fix all three, and would also make it
possible to tell whether the tutor is actually helping.

## 11. Every lesson is written from scratch, every time

A learner who opens Kinematics twice gets it taught twice, at about thirty
seconds and a full model call each time. Nothing is cached, and two learners in
the same class asking for the same topic on the same evening are two separate
lessons.

That is defensible while the teaching is personal, because the lessons genuinely
differ, and indefensible for the parts that do not: the worked example for
sharing in a ratio does not need reinventing for every learner in Ghana.

The shape of the fix is a lesson cache keyed on the topic plus the parts of the
brief that actually change the teaching, with the personal parts layered on
afterwards. It needs measuring before it is built: the question is how much of a
lesson is really personal, and nobody has looked.

## 12. Nothing limits what one learner can ask for

A learner can open a topic, press Teach it differently, and do it again, with no
cap. On the free route that queues jobs on one machine; on the paid route it
spends. A class of forty pressing at once sit behind each other.

Related, and recorded under issue 9: the queue has no per learner limit and
nothing identifies who submitted a job.

## 13. A generated question is served without anybody checking it

`readQuestions` throws away anything malformed, and a question that survives is
put straight in front of a learner. `capability.ts` already draws the
distinction the platform needs here, `questions` versus
`questionsAwaitingReview`, and the generated ones behave as though they were
approved.

For a learner practising alone that is the right trade: a question with a wrong
answer costs them one confusing minute, and the alternative is no practice at
all. For anything that counts, a class assignment or a school's own set, it is
not, and the review path exists in the capability model and not in the code.

Observed in testing: four questions generated on Kinematics were all correct,
varied, and had usable `teach` text. That is one sample.

## 14. Generated pictures are not kept, and cost money each time

`/api/render` hands back whatever url the service returns, and that url is put
straight on the page. Nothing is downloaded, nothing is stored, and nothing is
reused. Two consequences:

- Those urls expire. A lesson reopened tomorrow shows a broken image where a
  photograph was, which is exactly the failure `visuals.ts` is otherwise careful
  to avoid.
- Two learners in the same class asking for the same clip on the same topic pay
  for it twice, at roughly 20 cents for five seconds of 480p.

The fix is the same shape as the lesson caching in issue 11: pull the file into
Supabase Storage on completion, key it on the topic and the brief, and serve the
stored copy. Unlike a lesson, a clip of rain falling is not personal at all, so
it caches cleanly across every learner in the country.

**Half done.** The keying and the sharing exist: `edu_shared_artifact` holds
one row per topic and style, so two learners in a class pay for a clip once
rather than twice, which closes the second consequence. The first is still
open, because what is stored is the service's own url and not a file we own.
So the store gives a shared artifact a shelf life of half a day and stops
trusting the row after that, which prevents the expiry turning into a broken
image for every learner in the country. Raising that to months is exactly the
Supabase Storage upload described here and in issue 18, and it is the one
change that closes this issue.

Until then, treat video as a demonstration rather than something to switch on
for a school.

## 15. Nobody checks a generated picture before a learner sees it: BLOCKING

**This has now happened, not as a worry but as an event.** The first real image
ever rendered for a lesson, on the first attempt, was unsuitable.

The topic was Soil and crop production. The brief Claude wrote was good: *"a
Ghanaian farm plot split into two clearly different patches of ground side by
side, one holding water for rice, the other draining fast for cassava."* FLUX
returned a young girl crouching in shallow water in a wet dress. None of the
soil, none of the crops, none of the comparison, and a child depicted in a way
that has no place on a page aimed at children.

Nothing in the system caught it. It went onto the lesson page, under a caption
about soil types, and the only reason it was seen was that somebody happened to
be looking at that screenshot.

**What was done about it immediately.** The rule is now that generated pictures
contain no people at all, stated in three places because one instruction between
a child and a bad image is not enough:

- the `illustration` and `clip` briefs are told never to ask for a person, a
  child, a figure or hands, and to ask for the thing itself
- `api/render.js` sends a negative prompt naming people, children, faces, hands,
  nudity, swimwear and wet clothing
- `api/render-free.js` appends the same to the prompt, because that service
  takes no negative prompt

Re-rendered with the guard, the same brief produced a farm plot: dry reddish soil
in the foreground, a flooded green field behind, nobody in it. That is the
picture the lesson wanted.

**What is still missing, and why this is blocking.** No review, no filter on what
comes back, no way for a teacher or parent to report a picture, and no record of
what was shown to whom. An empty scene removes the worst class of risk and does
not remove the category: a generated image can still be wrong, frightening or
absurd, and nobody is looking.

Before generated pictures are switched on for real learners, at least one of:

- a human review step for anything a school will show a class
- a classifier on the returned image, with anything uncertain dropped
- generated pictures off by default per school, opt in by the head teacher

The diagrams are unaffected by all of this. Claude writes every character of
them, they carry the labels, and they are the part that teaches.

## 16. Video cannot run on the kind of machine the tutor runs on

`docs/tutor.md` describes the free route: a machine you own, signed into Claude
Code, answering the queue. The obvious wish is for that machine to render the
pictures too, and it cannot. The machine this was built on has Intel UHD 620
integrated graphics and no CUDA, where a single clip would take hours.

So the visual models are served by fal and cost per render, while the tutor
costs nothing. If self hosting matters, it needs a GPU box, and the same
`EDU_IMAGE_MODEL` and `EDU_VIDEO_MODEL` indirection would point at a local
ComfyUI instead. Nothing in the client would change.

## 17. A complete lesson now takes five to eight minutes on the free route

Opening a topic asks for the lesson, a diagram, a photograph, a clip and a
video. On the free route one worker answers one job at a time, so those queue:
roughly a minute for the lesson, up to two for the diagram, twenty seconds each
for the photograph and clip briefs, and then the storyboard plus about a minute
of rendering.

The page is readable long before the end, and everything appears as it lands
rather than all at once, so it is not dead time. But a learner who wants the
video is waiting several minutes for it, and forty learners in a class are
waiting behind each other.

Three fixes, in order of value:

1. **DONE: cache what is not personal.** `src/lib/education/ahead.ts` and
   `supabase/migrations/20260921000002_edu_shared_artifact.sql`. A film, a
   photograph and a clip are now made once per topic and style and shared by
   every learner, and the row is inserted before the work starts so forty
   children in one classroom opening the same topic queue one job rather than
   forty. The lesson, the explanations and the diagram stay per learner, and a
   diagram is deliberately not cached: it is written from the lesson text in
   front of this learner and costs nothing to draw. The migration is written
   and **not yet applied**. Not wired into the lesson page yet: `Learn.tsx`
   still calls `askVideo` and `illustrate` directly, and swapping those two
   calls for `sharedVideo` and `sharedVisual` is what switches it on.
2. **More than one worker.** The queue already claims by id and status together,
   so two workers on two machines is safe today and untested.
3. **Set `ANTHROPIC_API_KEY`**, which makes the writing parallel rather than
   serial and leaves only the render on the worker.

Still open, and now the limiting factor: **the queue has no priority.**
`edu_jobs` is claimed in `created_at` order, so a job put on it ahead of a
learner genuinely sits in front of a job she submits a moment later, and
nothing in a browser can take it back. `ahead.ts` works around that by
queueing at most one job at a time and only while the page says it is waiting
on nothing, which caps the damage at one job of latency. The real fix is a
priority column on `edu_jobs` and an ordering in `api/queue.js` that prefers
what somebody is waiting for right now.

## 18. DONE: rendered videos have somewhere to live

The worker uploads the finished MP4 to Supabase Storage and hands back that url
instead of a path on whoever's laptop rendered it.

`tools/upload.mjs` exports `uploadRender(file, name)` and `uploadBlocked()`,
and `tools/tutor-worker.mjs` calls both: the second at startup, so the log says
whether renders will be hosted before anything is rendered rather than after.
`renderStoryboard` returns `{ video: put.url || '/renders/' + name, hosted }`,
so a failed upload degrades to exactly the old behaviour instead of losing a
film that took a minute of CPU.

Of the two options this file weighed, it took the worker holding its own
storage credential, which it called simpler and less safe than an upload
endpoint. That trade is still real: the worker now has the service key. It runs
on a machine Godwin owns, which is the only reason that is acceptable.

The bucket is `lesson-video`, public, 50 MB per object. 100 MB was refused by
the plan. Public is deliberate and the reasoning is in the header of
`upload.mjs`: a film of counting to five is the same film for every learner in
the country, nothing learner specific is ever rendered into one, so a CDN
should serve it rather than a function minting a signed url per view. If a film
is ever rendered with a child's name or work in it, this has to become signed
urls on a private bucket.

**Verified end to end,** not just wired: the real 11.6 MB film uploaded, and a
public fetch of it returned `206 video/mp4`, so range requests work and a
browser can seek rather than having to buffer the whole file.

## 19. The sound is in, in English, in a dated voice

**Mostly done.** Both halves now speak, and the assumption that an adult was
sitting beside every child reading the instructions out is gone.

The games speak in the browser (`src/lib/education/speak.ts`): the instruction
when a round appears, the verdict, and the right answer named aloud when they
miss it. Two controls beside the game, repeat and mute, with the mute
remembered per device. The lesson videos are narrated into the MP4
(`tools/tts.mjs`), and each scene is now stretched to the real length of its
audio rather than an estimate from the word count, so a line is never cut off.
See `docs/sound.md`.

What is still open:

- **English only.** A KG child in Ghana may be taught in a Ghanaian language
  first. The syllabus layer already knows Ghanaian Language as a subject; the
  games and the narration do not. This is the part of the original issue that
  has not moved at all.
- **No Ghanaian voice.** Both layers reach for en-GB as the closest thing
  available. For a platform teaching Ghanaian children that is a compromise
  worth naming, not a solution.
- **The video voice is dated.** Windows' own synthesis is free, offline and
  needs nothing installed, which is why it is the default. Piper is the
  upgrade and needs a 60 MB model on the worker machine.
- **Voices belong to the device.** A cheap Android may offer one flat en-US
  voice and an old browser none. It degrades to silence with the text still on
  screen, so nothing is lost that was there before, but it cannot be promised.

## 20. Most topics cannot be played at all

The generated games cover 52 of 380 topics across creche, primary and JHS, so
**86% of topics have no game**. The grammar knows number, letter, shape and
size, and a counting game cannot teach "Keeping clean", "Our environment" or
most of science and social studies.

For the stages where the game is meant to *be* the lesson, that is the biggest
gap in the layer. A KG child whose topic is about the weather gets a written
lesson they cannot read.

Covering it means the model supplying the content: the items, and which bin
each belongs in. See issue 21, which is why that is not simply a matter of
writing more prompts.

## 21. A content game would put the answer key back in the model's hands

The generated games are safe because the engine computes the truth: it lays out
the mangoes, counts them itself, and the spec cannot lie about the number. See
`docs/games.md`.

That guarantee does not extend to facts. To make a game about living and
non-living things, the model has to say which items are living, and no amount
of layout discipline lets the engine check it. "A stone is living" is a wrong
answer key that reaches a five year old as truth, is marked against them when
they disagree, and is written into their mastery record.

So content games are the same class of risk as generated pictures, which is
issue 15 and BLOCKING. They need the same review gate before a child sees one,
and they must not be shipped on the strength of the arithmetic guarantee, which
does not apply to them.

## 22. The model does not write games yet

`readSpec` and `floorFor` accept and sanitise a model-written spec, and they are
tested. What does not exist is the `game` task in `api/prompt.js`, the
generation ahead of the child, and the cache.

So every game today comes from the local composer: instant, free, offline, and
limited to the variety the grammar was written with. The model's contribution
would be the scenes and the wording a grammar cannot invent, such as loading a
trotro at Kejetia or fetching water, and that is most of what would make the
games feel like they came from somewhere.

Generation must stay ahead of the child rather than in front of them. A spec is
small, but on the free queue route it is still tens of seconds, and a child
pressing play cannot wait.

## 23. DONE: the tutor decides the shape of a session

**Closed.** `standingFor` no longer decides what a learner meets. `plan.ts`
does, from what she has asked for and how she has actually done in each kind of
material, and it is allowed to return one medium and nothing else. See
`docs/plan.md`.

Measured: a learner with 17 of 20 right after watching and 4 of 15 right when
reading gets `video, picture`, marked wordless, with prose dropped from the
plan. A learner with much the same record in everything keeps three media,
because narrowing on noise would be the old predetermination with a new
justification.

What is genuinely still open from the original issue:

- **The plan is per subject, not per topic.** A learner may need words for one
  topic and film for another, and nothing can express that yet.
- **`questions` never leads.** Practice is still reached by a button rather
  than by a plan that asked for it.
- **Which game, once a game leads, is still the grammar's decision** in
  `heavy.ts`. Probably right, but it has not been thought about properly.

One hole found in Chrome and fixed: a wordless plan folded the written lesson
away on a deployment with no renderer, leaving a title, a line of fineprint and
a closed fold. The words now stand down only when the thing replacing them has
actually arrived, not when it is merely preferred.

## 24. MOSTLY DONE: nothing is made before she asks for it

A video is two to five minutes every single time: storyboard, narration, then a
render on the worker machine. The card is honest about the wait and she is not
blocked, but a learner who wants video is waiting minutes on every topic.

The fix is to get ahead of her. If she asks for video on most topics, render
the video for her next topic while she is still on this one, and it is already
there when she asks. That is what makes learning her preferences worth
anything: it converts the knowledge into no wait rather than into a better
guess about her diet.

**Built.** `runAhead` in `src/lib/education/ahead.ts`. It reads `Plan.parts`,
so a learner whose plan has no film in it gets no film rendered ahead and the
worker is not spent on her, and it takes the next line of her year from
`topicsFor` rather than trying to predict anything cleverer. It refuses to run
on a plan whose source is still `stated`, because a guess off her sign-up form
is not worth minutes of the only worker. It queues nothing until the page has
been quiet for twenty seconds continuously, re-asks before every submission,
queues one artifact at a time, at most two per topic, looks in the shared
store first so a classroom or a second sitting queues nothing at all, and
cancels cleanly. Not wired in yet: the lesson page has to call it and cancel
it when she leaves the topic.

Two of the three "related" points are now closed too. Duplicate work across
learners is gone for the shared kinds, by the store in issue 17. Still open:
**no rate limit**, so a child tapping "video of this" forty times is still an
hour of worker queue or real money on fal. That is per learner and belongs
with issue 12, not here, because a cache cannot help with forty requests for
forty different things.

## 25. DONE: all four interfaces exist

**Closed.** `skinFor` in `learner.ts` decides which interface a learner meets,
and it is the only thing that does, so the router, the home screen, the lesson
and the questions cannot disagree. See `docs/interfaces.md`.

| Who | Built |
|---|---|
| Creche to Basic 2 | `KidApp`, bottom tabs, drawn mascots, spoken on request |
| Basic 3 to JHS 3 | `TeenApp`, top bar with points and days, XP goal, weekday rings |
| SHS, TVET, university | `ScholarApp`, dark sidebar dashboard, drawer on a phone |
| Parents and schools | `Learners`, blue bar, a ring per child, who needs attention |

Everything underneath is shared: one syllabus, one mastery model, one plan, one
asking channel, one lesson and one set of questions, themed per tier by a
`Page` component and three stylesheets.

What is genuinely still open from the original issue:

- **The school tier is the parent tier.** A school with two hundred students
  gets a page designed for a parent with four children: no classes, no
  teachers, no filtering, and a table two hundred rows long. This is now the
  biggest gap in the four.
- **A scholar reading a lesson leaves their dashboard** rather than reading
  inside it, because the sidebar is not part of that route. It looks right and
  it is not a nested layout.
- **Only the kid tier speaks.** Correct for a reader, wrong for a learner in
  those years with a reading difficulty, and nothing in `speak.ts` prevents it.

## 26. DONE: the kid screens read themselves out

**Closed.** One control on the kid chrome reads whatever screen you are on,
alongside the mute switch the games already shared. Home says the greeting, the
day's progress, the days learned and what to carry on with; the subject list
says the subjects; Rewards says the badges and the challenge; Profile says the
year and how they are being taught.

Nothing speaks on arrival. A screen that starts talking by itself is startling,
and an adult who wants quiet should not have to race it to the mute button.

The lesson, the questions and the explanation after a wrong answer each read
themselves out too, from the same voice and the same mute switch.

Still open, and moved into issue 25: the teen and scholar interfaces have no
voice control at all.

## 27. Nothing has been through a screen reader

The accessibility work so far is the measurable half, and it is genuinely
measured: every text colour in all four tiers was checked in the browser
against the background it computes to, at the size and weight it renders at,
and the sweep now reports zero failures at 360px and 1280px. Touch targets were
hit-tested. Keyboard focus is visible everywhere and the senior drawer closes
on Escape.

None of that says a screen reader can use this.

What is unknown:

- **Announcement order.** The youngest tier's header carries the points and
  the days before the greeting, so a screen reader reads two numbers before
  saying hello.
- **The live regions.** A lesson arrives a few paragraphs at a time and an
  answer to a question appears inline under the paragraph it was asked about.
  Neither is announced, so a blind learner asks a question and is told nothing
  happened.
- **The drawn art.** Every drawing has an `aria-label` or is `aria-hidden`, but
  the labels were written to be correct rather than to be listened to. Six
  subject tiles in a row all announcing "A smiling friend" is worse than
  silence.
- **The games.** The canvas is one element. Nothing in the engine has any
  accessible representation at all, and the youngest tier's lesson *is* the
  game.

The last of those is the real one, and it is not a labelling job. A platform
whose teaching for five year olds happens on a canvas has no path through it
for a child who cannot see, and saying so is more useful than adding labels to
the parts that were already easy.

---

## Verified and working, for contrast

So the list above is not read as "nothing works":

- The adaptive model. Identical raw accuracy of 50% reads as SECURE for a
  learner improving and SHAKY for one declining, and the course screen refuses
  to move someone on from a topic they keep failing.
- The transfer round trip, 21 headless checks: identity, year, preferences and
  per-topic standing all survive, typos are refused by a checksum.
- The two-variable expression compiler, 19 checks, with the flat graph still
  rejecting a stray `y`.
- The 3D renderer, 23 checks, including domain holes skipped rather than walled
  off at zero.
- Board scroll follow, fixed from raw pixels to board units. A teacher at board
  unit 588 used to put a phone at unit 1023.
