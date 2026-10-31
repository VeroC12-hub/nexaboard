# The games

Two layers. Six hand-written tapping games in `src/components/Games.tsx`, and a
generator that composes a new game every time in `src/lib/education/heavy.ts`
plus `public/games/`.

The generator is the one that matters. A fixed set of games is a countdown: a
child plays them, learns them, and the app is finished with nothing left to
come back for. So no fixed set.

---

## Why the model does not write the game

This is the decision everything else follows from, so it goes first.

A model can write a whole playable game as code. It can also write one where
the basket holds five mangoes and the answer key says four. Put that in front
of a five year old and the platform has taught them something false, marked
them wrong for being right, written that into their mastery record, and the
adaptation then pitches the next lesson to a fiction. A child who cannot read
the screen cannot argue back, so nothing catches it.

So the model does not own the arithmetic:

| Who | Owns |
|---|---|
| The model, or the local composer | The **spec**: the verb, the subject, the scene, the motion, the objects, the wording. |
| `public/games/engine.js` | The **layout and the truth**: it places the actual items, counts what it actually placed, and decides the verdict. |

A spec can ask for a counting game about mangoes at the market. It cannot say
how many mangoes there are, because the engine decides that after the spec has
been read, so it cannot be wrong about it.

A generated game can be dull, oddly dressed or a poor fit for a topic. It
cannot be wrong about a number. That is what makes unlimited generation safe
here rather than reckless, and it is the reason a model is allowed anywhere
near a four year old's practice.

---

## The grammar

A game is a verb crossed with a subject, dressed in a motion and a scene.

**Seven verbs**, which between them cover what early maths and early literacy
ask a child to do:

| Verb | What the child does |
|---|---|
| `collect` | Put a given number of things into a bowl. |
| `pop` | Tap the things that match a rule, while they move. |
| `sort` | Drag things into crates by a property. |
| `order` | Line things up on a shelf. |
| `match` | Find the partner of the thing being shown. |
| `balance` | Tap the heavier side, or move things across until the sides match. |
| `build` | Make a total out of parts. |

**Eight subjects**, each of which is a way for an item to carry a value:

| Subject | The item is | Its value |
|---|---|---|
| count | a group of things | how many |
| numeral | a written number | the number |
| compare | a group of things | how many |
| sequence | a written number | the number |
| letter | a picture of a thing | the sound it starts with |
| shape | a shape | how many corners |
| size | a thing drawn large or small | how large |
| sum | a group of things | how many |

Once an item has a value, every verb works on it without knowing what it is
about. Collecting is reaching a total, ordering is sorting by value, matching
is finding equal values shown two ways, the balance is comparing two sums. That
is what keeps the engine small while the number of games stays large.

**Honest counting.** 29 distinct games (verb against subject) and 880 dressed
variations (times motion, times scene). The two numbers are reported separately
on purpose: an earlier version claimed the 880 as the number of games, and it
is not. A child does not experience a new backdrop as a new game, and said so.

---

## Never the same game twice

The generator is only half of it. A generator that can make a thousand games
but happens to make the same one twice running has, to the child, made one
game.

So each learner has a ledger of the last twelve games played, keyed on **verb
and subject only**. Scene and motion are deliberately excluded: identity is
what your hands do, not what colour the sky is. The composer then prefers, in
order:

1. a verb they have not played recently,
2. a game whose verb and subject pair they have not played recently,
3. anything at all, **except the verb they just played**.

Measured over 24 consecutive plays of one KG topic: 5 distinct verbs, zero
back-to-back repeats. A topic that maps to one subject has only four or five
verbs available, so it must eventually cycle. Repeating eventually is
unavoidable; repeating immediately is what makes an app feel like it has one
game.

---

## Where a game comes from

1. **`composeSpec`**, locally. Instant, free, offline, no model. This is the
   floor: a child on a dead connection still gets a game they have not played.
2. **The model**, writing a spec pitched at the topic and at what this child
   keeps getting wrong, with scenes and wording the grammar would not invent.
   Slower, so it is generated ahead rather than while a child waits, and kept
   once written. `readSpec` accepts it strictly: a verb that cannot teach the
   subject is refused outright, the numbers are taken from the learner's year
   rather than from the reply, and a "thing" that is a sentence is rejected
   before it breaks a layout. **Not wired up yet**, see below.
3. **An engine export.** GDevelop, Construct, Godot and Phaser all publish a
   folder with an HTML entry point, so anything that speaks the protocol plays
   here. Megabytes over mobile data, so it is per topic and opt in.

### Why no engine of our own, yet

Phaser is about 1.2 MB over the wire, Godot four to twenty, Unity more. On a
Ghanaian phone on mobile data that is real money and minutes of waiting, to
drag four mangoes into a basket. The engine here is hand-written canvas, about
25 kB for every game in the grammar, and none of these verbs needs physics:
dragging, falling, tipping and hopping are a handful of lines of arithmetic.
When a topic genuinely needs collision or joints, an engine build drops into
the same frame and the cost is paid on that topic only.

---

## The frame

The game runs in `sandbox="allow-scripts"` with **no** `allow-same-origin`,
which gives it an opaque origin. Our storage, our cookies and our Supabase
session are unreachable from inside it.

That matters more now than when every game was written by hand. It is what
makes it safe to run a model-written game tomorrow and somebody else's engine
export after that.

Because the origin is opaque, `event.origin` arrives as the string `"null"` and
proves nothing, so the host checks `event.source === iframe.contentWindow`
instead. The frame is passed **the spec and nothing else**: no name, no learner
id, no record, no session.

### The protocol

| Message | Direction | Meaning |
|---|---|---|
| `ready` | game to app | Loaded, asking for its spec. |
| `setup` | app to game | Here is the spec. Sent once. |
| `say` | game to app | Read this line out. |
| `attempt` | game to app | A round was answered. |
| `done` | game to app | The set is finished. |

Everything carries `nx: 1`, because a browser page receives a constant trickle
of messages from extensions and devtools. `fromGame` in `heavy.ts` validates
every field before it is spoken aloud or written into a child's record:
`correct` must be a real boolean, not merely truthy, and `say` is flattened to
one line and capped.

The app owns the voice, so there is one voice and one mute switch across the
games, the videos and the lessons. See `docs/sound.md`.

Every round writes the same `Attempt` a written question writes, so the same
mastery model and the same adaptation follow a four year old dragging mangoes
as follow a sixth former solving equations. Verified: a tap inside the frame
persisted as `{objectiveId: 'count-back', isCorrect: true}` in the same record
as that learner's written work.

---

## Who gets a game, and whether it leads

| Stage | Standing |
|---|---|
| Creche, nursery, KG | The game **leads**. The written lesson is the note the adult reads. |
| Basic 1 to 2 | The game leads. |
| Basic 3 upwards | The lesson leads, the game is **offered** underneath it. |
| JHS | Offered, only where a topic genuinely suits one. |

Basic 3 is where the syllabus stops treating reading as the thing being learned
and starts using it, which is the same place the game stops being the lesson.

---

## Things that were wrong, kept here because they will be tempting again

- **Every verb drawn as the same white card.** Seven structurally different
  games all looked like one game with a different instruction at the top, and
  it was noticed immediately. A thing to pop is now a balloon, a thing to weigh
  sits loose in a pan, a thing to sort is a card you pick up. What it looks
  like should say what to do with it before anybody reads the instruction.
- **Groups sized by count.** A group of one was drawn as a single enormous
  mango and a group of six as six small ones, because the card was divided
  between however many there were. In a game asking which side has more, the
  picture argued for the wrong answer. Every copy is now the same size.
- **`requestAnimationFrame` at the end of the frame.** Any exception anywhere
  in the drawing stopped the loop for good, so the canvas froze on the last
  painted frame while the game underneath went on taking taps. It is now the
  first line, and the body is guarded.
- **`done` posted from the frame loop.** Once the last round ended it fired
  sixty times a second, and the app answers `done` by starting the next game.
- **Resize rebuilding the round.** A phone hiding its address bar fires a
  resize, so a child who had dragged four mangoes in would watch the round
  start over. Small changes now move things in proportion.
- **`setPointerCapture` before the handler.** It throws on an unrecognised
  pointer id, and that ate the tap, so on such a device nothing in the game
  responded at all.
- **Rejection sampling that could not terminate.** Asking for four different
  numbers from 1 to 3 was an infinite loop, and 3 is exactly a three year
  old's ceiling.
- **Done answerable before anything had been done.** A child of four presses
  every button, and the first press was recorded as a wrong answer to a round
  they had not started.

---

## Not done

- **Only 14% of topics can be played.** 52 of 380 across creche, primary and
  JHS. The grammar only knows number, letter, shape and size, so
  "Keeping clean", "Our environment" and most of science and social studies
  get nothing. This is now the biggest gap in the layer.
- **Model-written specs are not wired up.** `readSpec` and `floorFor` are
  written and tested; the `game` task in `api/prompt.js` and the caching are
  not. Until then every game comes from the local composer, which means the
  variety is the grammar's, not the model's.
- **Content games need a review gate.** To cover science and social studies
  the model would have to supply the items *and* which bin each belongs in, and
  that is a claim about the world the engine cannot check. "A stone is living"
  is a wrong answer key that no amount of layout discipline catches. Those
  games are the same class of risk as generated pictures, which is issue 15,
  and they must not ship without the same review.
- **No sound effects, and that is deliberate.** No chime on a right answer and
  no buzz on a wrong one. A child counting mangoes should be counting mangoes,
  and a reward noise teaches them to want the noise.
- **English only.** See issue 19.
