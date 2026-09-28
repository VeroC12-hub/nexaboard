/**
 * Number Bonds to 5: what happens when.
 *
 * Every time here comes from how long the voice actually takes, measured by
 * `tools/lesson-narration.mjs`. See `shell.tsx` for why hand written seconds
 * are not an option.
 *
 * ── Why the splits are written into `data` and not into `notes` ──────────────
 *
 * `notes` is the counting beats, and the rising note that plays on each one is
 * only honest when the nth note is the nth thing counted. This lesson counts
 * once, at the start, and after that nothing is counted: the stick moves and
 * the same five mangoes are read a different way. Putting the six stick
 * positions in `notes` would play a climbing scale over a quantity that never
 * changes, which is exactly the wrong thing to teach here. So they go in
 * `data.splits` and get a chime instead.
 */

import cueFile from '../../narration.json'
import { SceneBuilder, lesson, type Clip, type Scene } from '../../shell'

const CLIPS = cueFile as Record<string, Clip>
const scene = (id: string) => new SceneBuilder(id, CLIPS)

export const NUMBERS = ['One.', 'Two.', 'Three.', 'Four.', 'Five.']

const HELLO = 'Hello again! I am Ananse. Today we will break five into two parts.'
const HERE = 'Here are five mangoes. Let us count them.'
const WATCH = 'Five mangoes. Now watch my stick.'
const WALK = 'The stick keeps walking. Count the parts with me.'
const LOOK = 'Look at these two. One and four. Four and one.'
const TURNED = 'It is the same five, turned around.'
const ALWAYS = 'No mango came, and no mango went. Five is always five.'
const YOURS = 'Off you go and feed Ananse. Pick up the mangoes, and count them as you go.'

/**
 * What the stick says at each of its six positions.
 *
 * ── Why only three of them name the two sides ────────────────────────────────
 *
 * "Here" and "there" are what tie the words to the two halves of the row, so
 * the first split has to say them or the child does not know what the stick is
 * for. By the third split they are dead weight: the picture has already made
 * the point and the sentence is twice as long as it needs to be, which is six
 * seconds of a sixty second video spent repeating a frame the child is already
 * reading. The last one says them again because it is the mirror of the first
 * and the pair should sound like a pair.
 */
const SPLITS = [
  'Zero here, and five there. Zero and five make five.',
  'One here, and four there. One and four make five.',
  'Two and three make five.',
  'Three and two make five.',
  'Four and one make five.',
  'Five here, and zero there. Five and zero make five.',
]

/** One position of the stick: how many mangoes are to the left of it. */
export interface Split { left: number, at: number }

/**
 * Walk the stick through a run of positions, one chime each.
 *
 * The stick starts moving on `at` and takes about half a second to arrive, so
 * the line is spoken a beat later: the child sees the new split, then hears it
 * named. Naming it first would make the words a prediction rather than a
 * reading, and a four year old cannot check a prediction.
 */
function walk(b: SceneBuilder, lefts: number[]): Split[] {
  const out: Split[] = []
  for (const left of lefts) {
    out.push({ left, at: b.now })
    b.sting('chime')
    b.wait(0.5).say(SPLITS[left], 0.45)
  }
  return out
}

/* ── 1. he introduces it ───────────────────────────────────────────────────── */

function intro(): Scene {
  const b = scene('intro')
  b.sting('intro', 0.35)
  b.wait(0.7).say(HELLO, 1.0)
  return b.build()
}

/* ── 2. five counted in, then the first three cuts ─────────────────────────── */

/**
 * The five is counted before it is ever split.
 *
 * The whole lesson rests on the five being a quantity the child owns. Splitting
 * a number somebody else announced is moving symbols about; splitting a number
 * you just counted yourself is watching your own five stay five.
 */
function teach(): Scene {
  const b = scene('teach')
  b.wait(0.4).say(HERE, 0.35)
  for (const n of NUMBERS) b.beat(n)
  b.wait(0.35).say(WATCH, 0.5)
  const splits = walk(b, [0, 1, 2])
  b.wait(0.4).set('splits', splits)
  return b.build()
}

/* ── 3. the stick walks the rest of the way ────────────────────────────────── */

/**
 * No counting beats in this scene at all.
 *
 * The mangoes are the same five that were counted in scene two and they have
 * not moved. Recounting them here would say that something changed, and the
 * one thing this lesson is trying to say is that nothing did.
 */
function practise(): Scene {
  const b = scene('practise')
  b.wait(0.4).say(WALK, 0.45)
  const splits = walk(b, [3, 4, 5])
  b.wait(0.4).set('splits', splits)
  return b.build()
}

/* ── 4. the two ends of the same cut, side by side ─────────────────────────── */

/**
 * One and four above four and one.
 *
 * Seen one after the other they are two facts to remember. Seen at the same
 * time, one directly above the other, they are one picture and its reflection,
 * and that is the first time a child can be shown that order does not change a
 * total rather than told it.
 */
function mirror(): Scene {
  const b = scene('mirror')
  const pairs: Split[] = []
  b.wait(0.35)
  pairs.push({ left: 1, at: b.now })
  b.sting('chime')
  b.wait(0.55)
  pairs.push({ left: 4, at: b.now })
  b.wait(0.45).say(LOOK, 0.5).say(TURNED, 0.55).say(ALWAYS, 0.9)
  b.set('pairs', pairs)
  return b.build()
}

/* ── 5. handing over to the game ───────────────────────────────────────────── */

function handover(): Scene {
  const b = scene('handover')
  b.sting('fanfare', 0)
  b.wait(0.5).say(YOURS, 1.6)
  return b.build()
}

export const BONDS_LESSON = lesson(
  'number-bonds-5', 'Number Bonds to 5',
  [intro(), teach(), practise(), mirror(), handover()],
)
