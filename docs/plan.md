# How a learner is taught

The tutor decides the **form** of a session, not just the content inside a
form somebody else chose. It may decide that a learner gets video and nothing
else, with no words at all.

---

## What this replaced

`standingFor` in `heavy.ts` decided the shape of a session by stage:

| Stage | What everybody got |
|---|---|
| Creche, KG | A game first. The written lesson demoted to a note for the adult |
| Basic 1 to 2 | A game first |
| Basic 3 up | A lesson, with a game offered underneath |

That is a rule about five year olds, not a judgement about a particular five
year old. Every learner of an age met the same shaped session however
differently they learn, and the AI only ever chose what went inside boxes that
were already drawn.

Now the boxes are drawn per learner.

---

## What it reads, in order of weight

1. **What she asked for** (`ask.ts`). She selected a word and asked to be shown
   it rather than told it. Nothing else is as direct, so nothing else outranks
   it.
2. **How she did in each medium** (`medium.ts`). Slower and indirect, but it
   catches what she would not think to say.
3. **What she said at the start** (`profile.diet`). Only until there is
   anything better, which is the first session or two.

Her stage appears nowhere in that ordering. It decides how many parts a sitting
holds, because attention really is shorter at four than at fourteen, and
nothing else.

---

## What it produces

```ts
{
  parts:    [{ medium: 'video', why: 'watching it' }],
  without:  ['prose', 'picture', 'game', 'questions'],
  wordless: true,
  because:  'Only watching it, because that is what has been working for her.',
  source:   'evidence',
}
```

`wordless` is the flag that makes "video only, no words" real rather than
merely reordered. It means the session must work for somebody who reads
nothing at all.

### Measured behaviour

Six cases, run against the real planner:

| The learner | What the plan says |
|---|---|
| Brand new, nothing known | `video, prose, game`. Samples deliberately, source `stated`, and says so |
| **17/20 watching, 4/15 reading** | **`video, picture`. wordless. prose dropped** |
| About the same in everything | `video, game, prose`. Stays broad, not wordless |
| No answer record, but asked to be shown 4 times | `picture` leads, on her asks alone |
| A plan the tutor wrote: video only | Accepted as written, one medium, wordless |
| A tutor plan of 5 parts for a KG 1 child | Cut to 2. Attention, not ability |

The third row matters as much as the second. A small difference between media
is noise, and narrowing on noise would be the old predetermination wearing a
new justification.

---

## What it will not do

- **Treat untried as failed.** A medium with no evidence is `null`, never zero.
  Otherwise the first medium a learner happened to meet becomes the only one
  she is ever given.
- **Let a conclusion prevent its own correction.** A plan that only ever uses
  what already works stops collecting evidence about everything else, so the
  record freezes and a learner whose reading starts working six months from
  now can never be found out. One untried medium is included when there is
  room, which is the same reasoning as the six-attempt floor in `medium.ts`.
- **Take the length of a sitting from the model.** A model enthusiastic about
  its own plan handed a KG 1 child five parts. Length comes from the learner.
- **Require prose.** There is deliberately no floor demanding a written lesson,
  a game, or a minimum number of parts. The drastic answer is the point of the
  module, not an edge case in it.

---

## Why it never waits

A model-written plan is small, but the free queue is still tens of seconds, and
a learner opening a topic cannot wait for permission to be taught.

So there are two layers. The **local plan** is computed instantly from the same
evidence the tutor would read, and there is always one. The **tutor's plan** is
asked for in the background, kept, and preferred once it exists. A plan is per
learner and per subject, because her diet is a fact about her rather than about
a topic, and it is refreshed after three days, six new answers or three new
asks.

If the route is missing, the key absent or the worker asleep, nothing is lost
but the tutor's own judgement about her. The local plan was built from the same
asks and the same record.

---

## What the page does with it

The lesson used to be written in one order for everybody: the words, then the
film, then the pictures. For a learner whose record says reading is where she
comes unstuck, that puts the thing that does not work first and the thing that
does work below the fold.

Now the blocks are laid out and sorted by the plan. Verified in Chrome for a
learner with 17/20 watching and 4/16 reading:

```
title
outcome
nx-fig          <- the film, first
nx-words-fold   <- the written lesson, folded, closed
```

### The words are never simply gone

A wordless plan folds the prose behind "The words, for a grown up". It does not
delete it: a parent may want to read it, the learner may want it later, and
hiding it outright would be deciding something about her nobody asked for.

**And it only folds when something else has actually arrived.** With no
renderer configured there is no film and no picture, and folding the words left
the page as a title, a line of fineprint and a closed fold: a lesson with
nothing in it. That was caught in Chrome, where it looked exactly like the app
was broken. The words now stand down only when the thing replacing them is
there, not when it is promised and not when it is merely preferred.

### It is visible

The subject page carries one line: "How you are being taught: mostly watching
it, then seeing it drawn, from what she has asked for and how she has been
doing."

A parent whose child is given video and no reading deserves to know a decision
was made, rather than wondering whether the app is broken. It is also the only
way anybody can tell that two learners are no longer getting the same thing.

---

## Not done

- **The game is still chosen by `heavy.ts` once the plan asks for one.** The
  plan decides *that* a game leads; which game is still the grammar's business.
  That is probably right, but it has not been thought about properly.
- **`questions` is in the grammar and never leads.** The practice view is still
  reached by a button rather than by a plan.
- **Nothing is made ahead of her.** A plan that says video means minutes of
  waiting on every topic. Pre-rendering the next topic in the medium she keeps
  asking for is what converts knowing her preference into no wait rather than
  into a better guess. Issue 24.
- **No caching and no rate limit.** Issue 24.
- **The plan is per subject, not per topic.** A learner may need words for one
  topic and film for another, and nothing here can say that yet.
