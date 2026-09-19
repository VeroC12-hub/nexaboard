# NEXA•EDU open issues

Things known to be wrong or unfinished, written down as they were found so they
are not rediscovered later. Newest section first. Nothing here is a guess: each
item says what is actually true of the code today.

---

## 1. Accounts are local, and they must not be: BLOCKING

**What is true today.** `src/lib/education/accounts.ts` stores accounts,
learners, sessions and every answered question in `localStorage`. Passwords are
SHA-256 with a per-account salt.

**Why that is wrong.** The platform's central promise is one identity from
creche to university, usable anywhere. An account that exists only in one
browser's storage cannot be opened on another device, cannot be recovered when
the phone is lost or wiped, and cannot be seen by a school. A learner who does a
term of work and then changes phone loses the term.

It is also not authentication. Anyone holding the device can read the store, and
SHA-256 is fast enough to brute force a weak password offline. It keeps two
siblings out of each other's work on a shared phone, which is the only threat it
was built for.

**What it has to become.** Supabase Auth on the existing project
`aoanslmovspmjqiqozcq`, with the `edu_` tables already migrated there.

- Parents and schools map cleanly onto email and password sign in.
- Learners do not, because they have no email. Options, in the order worth
  trying: a synthetic address derived from the learner id
  (`edu-2026-4543@learners.nexaedu.gh`) so Supabase Auth can be used unchanged;
  or a custom sign in through an Edge Function that checks a name and password
  against a table and mints a session.
- Progress moves from `nexaedu_attempts:<id>` to `edu_practice_attempts`, which
  already exists with the right shape.
- Offline still has to work: the device store becomes a cache and a queue, not
  the source of truth. The plan document already calls offline-first a
  foundation decision rather than a feature.

**Why it is survivable for now.** Every password check and every read and write
of an account goes through `accounts.ts` and nowhere else. That file changes and
the four screens that use it do not.

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

## 8. Phase 2 is entirely uncommitted

`src/App.tsx` is modified and around twenty paths are untracked, including every
file in this direction. Nothing here is in git and nothing is deployed. One bad
`git clean` loses all of it.

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

1. **Cache what is not personal.** A storyboard for counting to five, and the
   video rendered from it, are identical for every learner in the country. Same
   for a photograph of two soil types. Only the lesson and the explanations are
   genuinely per learner.
2. **More than one worker.** The queue already claims by id and status together,
   so two workers on two machines is safe today and untested.
3. **Set `ANTHROPIC_API_KEY`**, which makes the writing parallel rather than
   serial and leaves only the render on the worker.

## 18. Rendered videos have nowhere to live in production

`tools/video-render.mjs` writes to `.renders/` and the dev server serves it.
Neither exists on a deployment: a Vercel function has no disk, and the machine
that rendered the file is somebody's laptop.

The worker needs to upload the MP4 to Supabase Storage and hand back that url
instead of a local path. It has `EDU_WORKER_SECRET` but not the service key, so
either the site gains an upload endpoint the worker can post to, or the worker
gains a storage credential of its own. The second is simpler and the first is
safer.

Until then, video works in development and not on a deployment.

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

## 24. Nothing is made before she asks for it

A video is two to five minutes every single time: storyboard, narration, then a
render on the worker machine. The card is honest about the wait and she is not
blocked, but a learner who wants video is waiting minutes on every topic.

The fix is to get ahead of her. If she asks for video on most topics, render
the video for her next topic while she is still on this one, and it is already
there when she asks. That is what makes learning her preferences worth
anything: it converts the knowledge into no wait rather than into a better
guess about her diet.

Related: there is still no caching at all, so the same question asked by two
children is generated twice, and no rate limit, so a child tapping "video of
this" forty times is an hour of worker queue or real money on fal.

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
