# Asking

The learner interrupts the lesson. She points at anything in it and says what
she wants done about it, and the answer arrives under the paragraph she pointed
at.

This is the first thing in the platform that lets her decide rather than be
decided about.

---

## What was wrong before

The platform chose what she got, watched whether she answered the following
questions correctly, and inferred from that how she learns. Three problems,
in increasing order of seriousness:

1. **It was slow.** Right and wrong per medium needs about six answers before
   it means anything and twelve before it shows a trend. That is a week or two
   of use before the platform knows anything about her.
2. **It gave the outcome, not the cause.** "Wrong on counting back from ten"
   cannot distinguish a learner who cannot count from one who did not know what
   the word "fewer" meant.
3. **A learner who understood nothing left no trace.** She opens a lesson,
   reads a paragraph, understands none of it and closes the page. In the answer
   log that is identical to never opening it. The most important failure in the
   product was completely invisible.

One tap on the word "fewer" fixes all three at once. It arrives on the first
screen of the first session, it names the exact thing, and it exists precisely
because she did not understand.

So asks are the primary signal and the watched numbers are the background one.

---

## What she can ask for

| | What happens | How long |
|---|---|---|
| **Explain this** | The `explain` task, streamed into the card | 2 to 9 seconds |
| **Draw this** | A figure first, diffusion only if Claude declines | 10 to 20 seconds |
| **Video of this** | Storyboard, narration, then a render on the worker | 2 to 5 minutes |
| **Read it out** | The browser's own voice. No model, no network, no cost | instant |
| **Ask about it** | Her own question in her own words, about the thing she selected | 2 to 9 seconds |
| **I do not understand** | The whole lesson taught again a different way | 2 to 9 seconds |

None of this is new capability. Every route already existed and was already in
use; what did not exist was a handle the **learner** could reach. The whole
feature is a way to touch machinery only the app was allowed to touch.

### Video is honest about minutes

A video cannot land inline. So the request is accepted, the card says it takes
a few minutes and that she should keep going, and it appears in place when it
is ready. She is never blocked waiting for it.

A child told "one moment" for three minutes learns that the app lies to her.

---

## Two interfaces, one feature

Selecting text is useless to a five year old who can neither read nor drag a
cursor. So the same asking works two ways:

- **Readers** get a menu on a text selection.
- **Everybody else**, meaning creche through Basic 2, get one large button,
  "I do not understand", and the answer is read out loud.

The record they produce is identical, so nothing downstream has to know which
one a learner used.

The selection menu is still shown to the youngest, deliberately. An adult
sitting beside a five year old and reading the lesson aloud is exactly the
person who wants to select a sentence and ask about it.

---

## Who decides a picture is a diagram or a photograph

Claude does, and it does it by **declining**.

A picture request tries `figure` first: an SVG Claude writes itself, which
costs nothing, arrives in seconds, contains no people, cannot be photographic,
and unlike diffusion is allowed to carry labels and real quantities. Claude is
told that declining is a valid answer, so when a diagram genuinely cannot carry
the thing, it declines, and only then does the request fall through to
diffusion.

The safe route is the default and the model opts out of it rather than into it.

That ordering matters because **issue 15 is BLOCKING**: nothing reviews a
generated photograph before a child sees it, and the first real generated image
in this project came back as a young girl crouching in water in a wet dress.
Letting a learner request images on demand would otherwise multiply how many
unreviewed ones she sees. Moving the common case to OpenAI, once there is a
key, reduces it further.

---

## Still lost

When she says an answer did not help, the platform **changes the shape** rather
than the wording. Text that failed becomes a picture. A picture that failed
becomes plainer words, with the model told explicitly that its last approach
failed and not to repeat the wording.

Saying the same thing again more slowly is what a bad teacher does, and it is
exactly what a naive retry would have done.

`helped: false` is the most valuable single value in the whole record. An
answer that did not land is the one thing a right-and-wrong log can never tell
you, and the one thing a person sitting beside her would notice immediately.

---

## Where the answers appear

Under the paragraph she asked about, and they stay there.

`Prose` numbers every paragraph with `data-block` and takes an optional `after`
callback, so a card can be put back exactly where the question was asked. A
child who asks three questions can scroll back through her own conversation
with the page.

A sidebar would have made her carry the question across the screen to find the
answer, which for a six year old is the same as losing it.

---

## Her words are her own

Two separate stores, and they must stay separate:

| Store | Holds | Trust |
|---|---|---|
| `adapt.ts` | What the **model concluded** by watching. "She seems to struggle with two step problems" | An inference, and it can be wrong |
| `ask.ts` | What **she said**. She selected "fewer" and said she does not know what it means | A fact, from her |

Hers is never overwritten, summarised away or outvoted by the model's, which is
what would happen if they shared one capped list. Her exact phrases are quoted
into the prompt rather than paraphrased, because they are the most specific
information in the entire system.

Her text is capped at 400 characters on the way in, not out of distrust, but
because it reaches a prompt.

---

## What it is measured against

`medium.ts` holds the background signal: every `Attempt` now records `via`, the
medium the learner was in when she answered it. That is what lets the record
say she is shaky reading and secure watching, instead of merely shaky.

Two things it is careful about:

- **Untried is not failed.** A medium with no evidence returns `null`, never
  zero. Treating untried as failed would mean the first medium a learner
  happened to meet became the only one she was ever given.
- **A conclusion must not prevent its own correction.** Six attempts is the
  floor before judging a medium, because three unlucky rounds deciding a child
  cannot learn from games would stop her being given games, which would stop
  the evidence ever improving.

---

## Verified

Tested in Chrome against a stubbed tutor route, because this machine has no key
and no queue configured. The routes themselves were tested in earlier sessions;
what is tested here is this code.

- Selecting "fewer" put the menu on the selection with all five options.
- "Explain this" sent `explain` with the selection as the question, streamed
  the answer into a card, and the card sat after `data-block="4"`, the
  paragraph the word was in.
- The ask persisted with the selection, the want, the medium and the answer.
- "Still lost" recorded `helped: false` and created a **new ask with a
  different shape**, `want: 'picture'`, which then sent `figure` with
  `askedFor: "Draw this part: fewer"`. The safe route went first, as designed.
- The figure rendered, sanitised, and the first card changed to "Trying a
  different way."

One drafting fault found and fixed: a figure with a 200 by 80 viewBox stretched
to the card measured 1378 by 551 on screen, three circles filling half the
display. Capped at 460 by 260.

---

## Not done

- ~~The planner does not exist yet.~~ **Done.** `plan.ts` reads both briefs and
  composes the session, and `standingFor` no longer decides anything. See
  `docs/plan.md`.
- **Nothing is generated ahead of her.** A video is still minutes away every
  time. Pre-rendering the next topic in the medium she keeps asking for is what
  turns that wait into nothing, and it is where learning her preferences
  actually pays.
- **No caching.** The same question from two children generates twice.
- **No rate limit.** A child will tap "video of this" forty times, which is an
  hour of worker queue on the free route or real money on fal.
- ~~The asks are not yet in the prompt.~~ **Done.** `askBrief` and
  `mediumBrief` are both in the learner brief, and the prompt says plainly that
  what she asked for outranks what was inferred about her.
