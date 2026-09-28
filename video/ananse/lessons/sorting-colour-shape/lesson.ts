/**
 * Sorting by Colour and Shape: what happens when.
 *
 * ── What this lesson is actually for ─────────────────────────────────────────
 *
 * A four year old can already put like with like. Give them a pile of red and
 * blue counters and they will make two heaps without being asked. So teaching
 * "put the same ones together" teaches nothing they do not have.
 *
 * The thing they do not have is that the SAME pile can be sorted more than one
 * way, and that neither way is the right one. That is a real step: it means the
 * groups live in the sorter's head, not in the things. So the whole video is
 * one set of six objects sorted twice, by colour and then by shape, and a scene
 * at the end that stays on a single red circle long enough for the child to see
 * that it belongs to both groups and did not change to do it.
 *
 * Every time here is computed from how long the voice actually takes. See
 * `shell.tsx` for why that is not optional.
 */

import cueFile from '../../narration.json'
import { SceneBuilder, lesson, type Clip, type Scene } from '../../shell'

const CLIPS = cueFile as Record<string, Clip>
const scene = (id: string) => new SceneBuilder(id, CLIPS)

const HELLO = 'Hello, my friend! I am Ananse. Today we are going to sort things into groups.'
const SIX = 'Look. I have six things. Some are red, and some are blue.'
const PUT_COLOUR = 'The red ones go on this mat. The blue ones go on that mat.'
const RED = 'Red.'
const BLUE = 'Blue.'
const DID_COLOUR = 'Three red things, and three blue things. We sorted them by colour.'
const MIX = 'Now watch. I will mix them up, and sort the same six things a different way.'
const PUT_SHAPE = 'The circles go on this mat. The triangles go on that mat.'
const CIRCLE = 'Circle.'
const TRIANGLE = 'Triangle.'
const DID_SHAPE = 'Three circles, and three triangles. We sorted them by shape.'
const NOT_SAME = 'Look! The groups are not the same, but nothing about the things changed.'
const THIS_ONE = 'This one is a red circle.'
const WITH_RED = 'It can sit with the red things.'
const WITH_CIRCLES = 'Or it can sit with the circles.'
const BOTH_RIGHT = 'It is still the same red circle. Both ways are right.'
const RECAP = 'Today we sorted six things by colour, and then by shape.'
const AT_HOME = 'At home, you can sort your things too. Try your socks, or your toys.'
const BYE = 'Well done, my friend. Goodbye!'

/* ── the six things ────────────────────────────────────────────────────────── */

export type Side = 'left' | 'right'

export interface Item { colour: 'red' | 'blue', form: 'circle' | 'triangle' }

/**
 * Six objects that vary in two ways at once.
 *
 * Three red and three blue, three circles and three triangles, arranged so that
 * every group is mixed in the other property: the reds are not all circles and
 * the circles are not all red. That matters. If the reds happened to be the
 * circles then the two sorts would produce the same two heaps and the lesson
 * would quietly teach the opposite of what it says.
 */
export const ITEMS: Item[] = [
  { colour: 'red', form: 'circle' },
  { colour: 'blue', form: 'triangle' },
  { colour: 'blue', form: 'circle' },
  { colour: 'red', form: 'triangle' },
  { colour: 'blue', form: 'triangle' },
  { colour: 'red', form: 'circle' },
]

/** One object travelling to one place on one mat, at a known moment. */
export interface Move { i: number, at: number, side: Side, slot: number }

/**
 * Who ends up where, in each sort.
 *
 * Written out rather than derived from `ITEMS` so that the painter and the
 * timeline cannot disagree: the shape scene has to draw the objects sitting
 * where the colour scene left them, and it reads these same two lists to do it.
 */
export const BY_COLOUR: Record<Side, number[]> = { left: [0, 3, 5], right: [1, 2, 4] }
export const BY_SHAPE: Record<Side, number[]> = { left: [0, 2, 5], right: [1, 3, 4] }

/**
 * Fill one mat and then the other, one object per beat.
 *
 * `beat` rather than `say` because the rising note is doing pedagogical work
 * here, not decoration: a mat filling up is a quantity growing, and the pitch
 * climbing with it is the same trick the counting lesson uses. Three notes, a
 * held breath while he names the second mat, three more.
 */
function fill(
  b: SceneBuilder, groups: Record<Side, number[]>, words: Record<Side, string>,
): Move[] {
  const plan: Move[] = []
  for (const side of ['left', 'right'] as Side[]) {
    groups[side].forEach((i, slot) => {
      plan.push({ i, at: b.now, side, slot })
      b.beat(words[side], 0.85)
    })
  }
  return plan
}

/* ── 1. he introduces it ───────────────────────────────────────────────────── */

function intro(): Scene {
  const b = scene('intro')
  b.sting('intro', 0.35)
  b.wait(0.7).say(HELLO, 1.0)
  return b.build()
}

/* ── 2. the same six sorted by colour ──────────────────────────────────────── */

function colour(): Scene {
  const b = scene('colour')
  b.wait(0.5).say(SIX, 0.45)
  /* The mats arrive on the line that names them, not before. An empty mat on
     screen while he is still introducing the objects is a question the child is
     asked to hold for four seconds and cannot answer. */
  b.set('matsAt', b.now)
  b.say(PUT_COLOUR, 0.45)
  b.set('plan', fill(b, BY_COLOUR, { left: RED, right: BLUE }))
  b.wait(0.35).say(DID_COLOUR, 0.9)
  return b.build()
}

/* ── 3. the same six sorted again, by shape ────────────────────────────────── */

function shape(): Scene {
  const b = scene('shape')
  /* The objects open this scene sitting exactly where the last one left them,
     so the cut is invisible and the sweep back to the middle reads as undoing
     the sort he just did rather than as a new pile appearing. */
  b.wait(0.4)
  b.set('mixAt', b.now + 0.45)
  b.say(MIX, 0.45)
  b.say(PUT_SHAPE, 0.45)
  b.set('plan', fill(b, BY_SHAPE, { left: CIRCLE, right: TRIANGLE }))
  b.wait(0.35).say(DID_SHAPE, 0.9)
  return b.build()
}

/* ── 4. the reveal, held on one object ─────────────────────────────────────── */

/**
 * The point of the video, given more time than anything else in it.
 *
 * Five of the six leave so there is nothing else to look at, and the one that
 * stays walks to a mat labelled RED and then to a mat labelled CIRCLES. The
 * gaps are long on purpose: the child has to see it sitting still in each place
 * for a moment, because the claim is about where it belongs, not about it
 * moving.
 */
function same(): Scene {
  const b = scene('same')
  b.wait(0.5).say(NOT_SAME, 0.7)
  b.set('soloAt', b.now)
  b.wait(0.75).say(THIS_ONE, 0.5)
  b.set('leftAt', b.now)
  b.sting('chime')
  b.wait(0.4).say(WITH_RED, 0.65)
  b.set('backAt', b.now)
  b.wait(0.6)
  b.set('rightAt', b.now)
  b.sting('chime')
  b.wait(0.4).say(WITH_CIRCLES, 0.65)
  b.wait(0.2).say(BOTH_RIGHT, 1.1)
  return b.build()
}

/* ── 5. a recap, because there is no sorting game to hand over to ──────────── */

/**
 * This ends on an invitation rather than a handover.
 *
 * Counting 1 to 10 finishes by sending the child to Feed Ananse, which works
 * because that game exists. There is no KG sorting game yet, and promising a
 * button that is not there teaches a child that Ananse says things that are not
 * true. So the last thing said is something they can do without the tablet:
 * their own socks and toys are a better sorting set than anything we would
 * draw. Swap this for a real handover on the day the game ships.
 */
function home(): Scene {
  const b = scene('home')
  b.sting('fanfare', 0)
  b.wait(0.5).say(RECAP, 0.6).say(AT_HOME, 0.7).say(BYE, 1.4)
  return b.build()
}

export const SORTING_LESSON = lesson(
  'sorting-colour-shape', 'Sorting by Colour and Shape',
  [intro(), colour(), shape(), same(), home()],
)
