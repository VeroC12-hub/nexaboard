# Teaching from zero

A working brief for anybody, person or agent, filling the two stages a lesson
in this library does not yet have. Self contained: a session starts from the
repository alone with no memory of the last one.

## The complaint, in the owner's words

> "when you are explaining something to someone you explain the thing, we are
> on log, the person does not even know what log is, the rules and nothing.
> You are a teacher like you are teaching a professor, and it applies to all
> the lessons."

He is right, and it is one specific, findable fault rather than a vague one.

## What the fault actually is

Open the SHS 2 lesson on indices and logarithms. Its first sentence is:

> A logarithm is an index.

That sentence is addressed to a reader who already knows what an index is,
already knows what a logarithm is, and only needs the two connected. A reader
who has never met either has been handed the end of the argument first.

It is not one lesson. Measured across the library:

    npx tsx scripts/lesson-shape.mts

    Says what it is for:  0 of 601
    Says how to read it:  0 of 601

Every lesson in the library opens with the definition.

## What a textbook does instead

Read one. OpenStax, *Algebra and Trigonometry*, section 6.3, the same topic:

1. Objectives.
2. **A real situation**: two earthquakes compared on the Richter scale, with
   a photograph. Two short paragraphs.
3. **A problem the reader cannot solve yet**: an exponential equation with no
   method available. This is what creates the need for the new tool.
4. A graph, making the point that reading the answer off a picture is not
   precise enough, so something exact is wanted.
5. **A bridge from what the reader already knows**: the logarithm as the
   inverse of the exponential, which they have already met.
6. **Notation, as its own stage**: how the expression is said out loud, which
   number is which, what the brackets mean.
7. Only now, the definition, in a box, with its restrictions.
8. A question-and-answer on the commonest misconception.
9. A two-step how-to.
10. A worked example, then a matching one for the reader to try.
11. The same pair again for the reverse direction, then again for each
    special case. Concept, notation, rule, example, try. Repeatedly.
12. The earthquake from step 2 comes back and is now solvable.

The definition is seventh. Ours is first and there is nothing before it.

The teaching research agrees from the other side. Studies of textbooks that
open with the formal definition report that students then treat the
properties as rules imposed on them; one describes the usual introduction as
arriving out of the blue, with little connection to what the students have
already learned. See `docs/teaching/sources.md`.

## The two fields

Both are optional on `Taught`, both are plain prose, and both render with no
component work because the lesson page renders any piece with `text` on it.

### `why`: what it is for

One concrete situation a Ghanaian learner can picture, and one question
inside that situation which this topic exists to answer. It goes first in the
assembled lesson, before the groundwork and before the idea.

Rules:

- A real instance, not a category. "A trader buys at 12 cedis and sells at
  15" beats "logarithms are used in business".
- The question has to be one the reader genuinely cannot answer yet with what
  they have. If they could, the topic is not needed and the lesson should say
  what it really adds.
- Ghanaian, where the topic allows: tro-tro fares, market weights, mobile
  money charges, rainfall in Tamale, the Akosombo dam, cocoa prices. Not
  earthquakes in California.
- Two to four sentences. This is a doorway, not a chapter.
- Never "this topic is important in everyday life", which is what a lesson
  writes when it has not found the situation.

### `notation`: how to read it

How the symbols are said out loud, and what each part is called.

- Only for topics that have notation. Soil types has none; leave it out.
- Say the expression in words, the way a teacher says it in class.
- Name each part, so the reader can ask a question about it.
- State what is NOT allowed to be written, where that is a common error.
- Two to four sentences.

A learner who cannot say "log base 3 of 81" out loud cannot ask anybody about
it, cannot check it with a friend, and cannot follow it when a teacher says
it. Naming the parts is also what turns the rules from shapes to be copied
into sentences that can be reasoned about.

### `recap`: the thing it stands on, taught rather than claimed

This field already exists on every lesson that needs one, 535 of 601, and
until this week it was shown only to a learner who had ticked "catching up"
or "shaky". Showing it to everybody revealed what it actually says. The
logarithms lesson opens its groundwork with:

> You know the laws of indices, including zero, negative and fractional. A
> logarithm is the index itself, made the subject, so everything here follows
> from what you have.

To a reader who does not know the laws of indices, that is worse than
nothing. It names the thing they are missing, asserts they have it, and moves
on. The owner read it on screen and asked "what is this", which is the right
response to being told what one knows by a page that will not say it.

It is not one lesson:

    npx tsx scripts/coverage/groundwork-check.mts

    With a groundwork section: 535
    Opening by asserting what the reader knows: 470 (88%)
    Teaching it instead: 65

So this field is a rewrite, not an addition, and it is the single highest
value pass in this brief because it is where a lesson either picks the reader
up or leaves them behind.

Rules:

- **Never open with "You know", "You have met", or "By now".** 470 lessons
  do. If the reader knew it, the section would not need to exist.
- State the prior fact plainly, as a fact, in its own sentence.
- Show it once, concretely, with actual numbers or an actual instance. For
  indices: an index is the small number that says how many times to multiply,
  so 2 cubed means 2 times 2 times 2, which is 8, and the 3 is the index.
- Then, and only then, connect it to today's topic in one sentence.
- Three to five sentences. It is a foothold, not the lesson.
- A reader who does already know it loses nothing: they read four sentences
  they recognise and carry on, which is what the opening of a textbook
  chapter does to a strong student every time.

Do not touch anything else in a lesson you rewrite a `recap` in.

## The rule that covers all of the above

> "The thing is referencing something which he is supposed to teach. There
> should be no referencing, it should teach you from scratch for every topic."

**A lesson teaches everything it uses.** If a topic needs the laws of
indices, the lesson teaches the laws of indices, in as many sentences as that
takes, and then goes on. It does not say "you know the laws of indices", it
does not say "recall that", and it does not say "as you saw in Basic 5". A
learner on a phone cannot go and find Basic 5. Pointing at a thing is not
teaching it, and a lesson that points is a lesson that stops the reader dead
at the one sentence they needed.

Counted:

    npx tsx scripts/coverage/from-scratch-check.mts

    Lessons that point at something instead of teaching it: 350 of 601 (58%)
    References in all: 488
      435  "you know" / "you have met"
       23  "covered elsewhere"
       14  "recall that" / "remember that"
       11  "last year" / "in Basic 5"
        5  "you should know"

Every one of those 488 is a place where a sentence of teaching is missing.
Replace the reference with the teaching. The lesson gets longer, and that is
correct: a lesson that is four sentences longer and teaches its own
foundation is shorter than a lesson the reader cannot start.

This applies to the subject outline as well as to the lesson. A strand or
sub strand description that assumes the reader knows what the strand is about
has the same fault in a smaller space.

## Plain English

> "The english is broken and too complex."

Also measurable, and the check already existed:

    npx tsx scripts/coverage/reading-level.mts

The averages pass, which is why nobody caught this: every year group's
average sits at or under the grade expected of it. The damage is in
individual parts, which that report prints in its last column:

    Basic 5   expected grade 5    missing-number/mechanism     grade 14.1
    Basic 4   expected grade 4    teeth-and-care/idea          grade 10.9
    Basic 6   expected grade 6    citizenship-primary/recap    grade 11.2
    JHS 2     expected grade 8    geometric-drawing/idea       grade 12.2

A ten year old is being handed a paragraph written at first year university
level, inside a lesson whose average looks fine. Average is the wrong
statistic for this: a reader does not read the average, they read the hardest
paragraph and stop there.

Rules, in order of how much they help:

- One idea per sentence. Most of the over-grade parts are one sentence
  carrying three clauses joined by commas and "which".
- Short words where a short word exists. "Use" not "utilise", "about" not
  "approximately", "so" not "consequently".
- Say the thing before naming the thing. The concrete instance first, the
  term for it second.
- No sentence that cannot be read aloud in one breath.
- Check the part, not the lesson. `reading-level.mts` names the worst part
  of every year group; fix that one first and run it again.

## The order these take in the lesson

`assemble` now produces, for the default learner:

    what it is for → the thing it stands on → the idea → how to read it
    → the picture → why it works → the first table → the method
    → a worked example → a question → the rest → the traps

That is the textbook sequence with our own names on it. The reader meets the
need, then the groundwork, then the definition, then the notation, then the
picture, and only then the reasoning.

## Scope and the hard boundary

Every stage, every subject, all 601 lessons. The two fields are additions to
lessons that are otherwise finished: **change nothing else in a lesson you
touch**, and never reword an existing `idea`, `mechanism` or `worked`.

Two routines share `nexaedu`. Before starting, and before every commit:

    git checkout nexaedu && git pull --rebase

If a rebase conflicts, the other agent's new lesson file wins: take theirs,
redo your edit on top, carry on. Never force push.

Work in blocks of one file, or eight to twelve lessons, whichever is smaller,
and push each block as it is finished so an interrupted run loses only the
block it was inside.

## The order to work in

Take the lessons where the fault is worst first. `scripts/lesson-shape.mts`
prints the longest walls of prose, and those are lessons where a reader meets
several hundred words before anything else at all:

    npx tsx scripts/lesson-shape.mts

At the time of writing the top of that list is SHS Physical Education,
Agriculture, Art and Design, and Design and Communication Technology, which
are also 123 lessons carrying neither a picture nor a table. A lesson with no
picture, no table, and no statement of what the topic is for is the full
version of this complaint, so those come first.

## Two other gaps the same measurement shows

Record them here so they are not lost, but they are separate jobs:

1. **Mathematics is spelled out in words.** 29 of 601 lessons set any
   mathematics as mathematics. The rest write "the square root of" and "x
   squared" in prose. The renderer has had KaTeX for both inline `$...$` and
   display `$$...$$` the whole time, and the lesson page sets it correctly:
   see the worked steps on any recent SHS lesson. The comment at the top of
   `shs2-maths-geometry.ts` saying the renderer shows plain text is simply out
   of date. Converting the maths subjects is worth a brief of its own, with
   one rule stated up front: an equation that is read aloud to a blind learner
   or by a text to speech voice still has to make sense, so the surrounding
   sentence keeps saying what the equation says.
2. **123 lessons have neither a picture nor a table**, all in SHS. The
   non-SHS backfill is finished; see `docs/teaching/adding-figures-and-tables.md`
   for the method, which applies unchanged.

## How to know it is working

    npx tsx scripts/lesson-shape.mts

    npx tsx scripts/coverage/groundwork-check.mts
    npx tsx scripts/coverage/from-scratch-check.mts
    npx tsx scripts/coverage/reading-level.mts

"References in all" should fall towards zero and every year group's worst
part should come down to within a grade of what is expected of it. Both "Says what it is for" and "Says how to read it" should climb, "Opening
by asserting what the reader knows" should fall towards zero,, and the
words-before-the-first-break numbers should fall as the picture and table
gaps close. The target for `why` is every lesson. The target for `notation`
is every lesson that has notation, which is most of mathematics and science
and little of the humanities.
