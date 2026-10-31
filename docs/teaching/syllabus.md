# The syllabus, and how the AI teaches from it

Forty eight subjects, creche to university, 846 topics. One of those subjects
has a course written out in full; the other forty seven are taught by the AI
from their outline, which is the normal path rather than the degraded one.

---

## Why an outline and not a course

A written course carries its own explanations, worked examples and questions.
`library/maths-jhs2.ts` is one, and it took a lot of writing for four
objectives. Forty eight subjects at that depth is a textbook publisher, not a
platform.

An outline carries only what the subject covers and in what order. That is
small enough to write for every subject, and it is enough, because the teaching
comes from somewhere else:

| Piece | What it decides |
|---|---|
| `syllabus.ts` + `library/syllabus/` | WHAT is taught, and in what order |
| the learner's profile | HOW they want it taught |
| `adapt.ts` | what has been noticed about them since they started |
| `api/prompt.js` | turns all three into one instruction |
| the AI | writes the lesson, the questions and the explanations |

So a new subject costs an outline rather than a textbook, and no two learners
get the same lesson from the same line.

---

## What is in there

```
Syllabus
  strands          the top level divisions, in the subject's own terms
    subStrands
      topics       id, title, outcome, year, needs
```

`year` is what lets one outline serve a whole stage: a Basic 2 learner is not
shown Basic 6 work as though it were next. `needs` is what a topic stands on,
and is the more interesting field. A learner failing at sharing in a ratio is
usually not stuck on ratio, they are stuck on division, and `foundations()`
walks back down the chain so the tutor is told where to actually go.

`placeOf()` gives a topic its strand and sub-strand, so a lesson can say what
part of the subject this belongs to rather than teaching it as a trick.

### Coverage

| Stage | Subjects | Topics |
|---|---|---|
| Creche, nursery, KG | 4 | 66 |
| Primary, Basic 1 to 6 | 8 | 146 |
| JHS 1 to 3 | 9 | 168 |
| SHS 1 to 3, core and elective | 15 | 301 |
| TVET | 5 | 64 |
| University, Level 100 to 400 | 7 | 101 |

---

## The one line that must not be crossed

Everything in `library/syllabus/` carries `source: 'MODEL'`. It is an honest
account of what these subjects contain, and that is genuinely enough to teach
from: nobody needs a filed document to explain why you may take 7 from both
sides of an equation.

What it deliberately does not contain is anything only a real document could
say. No indicator codes, no "this carries eight marks", no "this is on the
BECE". A learner cannot tell when those are invented, and being wrong about them
costs exactly the trust a school is being asked for. `capability.ts` sets that
rule, this folder obeys it, and `syllabusBrief()` in `api/prompt.js` repeats it
to the model on every single request:

> This outline is a general account of the subject, not a copy of any official
> document. So teach the topic fully, and do not claim that it carries a
> particular code, appears on a particular paper, or is worth a particular
> number of marks. You have not been shown a document that says so.

When a school files its scheme of work, or the national curriculum is loaded,
`syllabusFor()` prefers it and that paragraph flips to say the opposite. That is
the whole upgrade path: the platform teaches from day one and gets more exact,
rather than waiting for a document before it will say anything.

---

## The four things the AI is asked

All four go through `src/lib/education/ai.ts`, which tries `/api/tutor` and
falls back to `/api/queue`. See `docs/tutor.md` for the two routes.

| Task | Returns | Where |
|---|---|---|
| `lesson` | prose, streamed | a topic is opened |
| `questions` | JSON, validated by `readQuestions` | "Try some questions" |
| `explain` / `method` | prose, streamed | after an answer |
| `observe` | one sentence, or `NOTHING NEW` | a round of questions ends |

`questions` is the only one that must return data. It is given a schema and
`readQuestions` is deliberately unforgiving: a code fence, prose around the
object and a numeric `answer` are all handled, but anything that does not
survive is discarded rather than half used. A half parsed question would mark a
learner wrong against an answer that was never there.

---

## How it adapts

The profile is what a learner said about themselves on the day they signed up.
`adapt.ts` is what they have since shown.

After every round of questions, the AI is asked what a teacher would remember
about **how** this learner works. The instruction is explicit that `NOTHING NEW`
is the right answer more often than not, because a made up observation is worse
than none: it will be believed and acted on. What comes back is stored per
learner and per subject, capped at eight notes with the oldest dropped, and read
into every later prompt labelled as observed rather than claimed, so that where
it disagrees with the dropdowns the evidence wins.

Alongside it, `signalsFrom()` computes accuracy, direction and how much help is
being leaned on, straight from the learner's own attempts. No model is asked,
because whether somebody is improving is arithmetic. `paceFrom()` turns that
into one sentence, and says nothing at all below twelve answers, because
characterising somebody who has answered four questions is how a platform starts
lying.

Measured end to end: a learner got five Kinematics questions wrong, the tutor
noted *"Can't identify which suvat equation fits the given quantities or how to
substitute; often submits a placeholder guess"*, and the next lesson, on a
different topic, was written with that note in its prompt and spent its last
paragraph on setting the equation up and substituting correctly.

---

## Adding a real syllabus

`register()` takes any `Syllabus`. To make a school's own scheme win:

1. Parse the document into the `Syllabus` shape, with `source: 'SCHOOL'`.
2. Register it, or have `syllabusFor()` read it from the database ahead of the
   registry.

Nothing else changes. Every screen and every prompt asks `syllabusFor()` and
none of them need to know which source won.
