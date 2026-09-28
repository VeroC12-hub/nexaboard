/**
 * Circle, Square, Triangle and Rectangle: what happens when.
 *
 * Every time here is computed from how long the recorded voice takes. Nothing
 * below is a hand written second. See `shell.tsx` for why that is not optional.
 *
 * ── Why this lesson records so many moments in `data` ────────────────────────
 *
 * Counting has one kind of event, the beat, so the shell's `notes` array is
 * enough for it. A shape lesson has four different demonstrations, and each
 * one needs its own clock: the dot has to start running round the circle when
 * he says it will, the fourth tick has to land on the word "four", the long
 * pair has to light on "long". Those are not beats and they are not
 * interchangeable, so each is recorded by name and handed to the painter.
 *
 * ── Why there are no counting notes ──────────────────────────────────────────
 *
 * `beat()` plays the nth note of a rising scale, which works because pitch
 * climbing with the count is the whole trick of a counting song. Here the
 * counting restarts twice: four sides, then three corners. A scale that kept
 * climbing through both would say the triangle's first corner is higher than
 * the square's fourth side, which is not a thing that is true. So the ticks are
 * plain lines and the only music is a chime as each shape arrives.
 */

import cueFile from '../../narration.json'
import { SceneBuilder, lesson, type Clip, type Scene } from '../../shell'

const CLIPS = cueFile as Record<string, Clip>
const scene = (id: string) => new SceneBuilder(id, CLIPS)

const HELLO = 'Hello, my friend! I am Ananse. Today we are going to learn four shapes.'
const FOUR = 'A circle, a square, a triangle and a rectangle.'

const C_HERE = 'Here is a circle.'
const C_RUN = 'Watch my dot run all the way around it.'
const C_NONE = 'It never turns a corner. A circle has no corners at all.'

const S_HERE = 'Here is a square.'
const S_FOUR = 'A square has four sides. Let us mark them.'
const S_SIDES = ['One side.', 'Two sides.', 'Three sides.', 'Four sides.']
const S_SAME = 'Four sides, and every one is the same length.'

const T_HERE = 'Here is a triangle.'
const T_THREE = 'A triangle has three corners. Let us mark them.'
const T_CORNERS = ['One corner.', 'Two corners.', 'Three corners.']
const T_IS = 'Three corners and three sides. That is a triangle.'

const R_HERE = 'Here is a rectangle.'
const R_FOUR = 'A rectangle has four sides too, just like a square.'
const R_LONG = 'But look. These two sides are long.'
const R_SHORT = 'And these two sides are short.'

const P_BOTH = 'A square and a rectangle both have four sides.'
const P_SQ = 'On the square, all four sides are the same.'
const P_RE = 'On the rectangle, two are long and two are short.'
const P_TELL = 'That is how you tell them apart.'

const NAME_ALL = 'Let us name them all one more time.'
const CALLS = ['Circle.', 'Square.', 'Triangle.', 'Rectangle.']
const KINDS = ['circle', 'square', 'triangle', 'rect']
const KNOW = 'Four shapes, and you know every one of them now!'

const YOURS = 'Now it is your turn. Drag each shape into the hole that fits it!'

/** One shape's slot in the teaching scene, with every moment it needs. */
export interface Step {
  kind: string
  /** When the shape lands on the floor. */
  at: number
  /** Circle only: when the dot starts its lap, and when it finishes. */
  run?: number
  runEnd?: number
  /** Square and triangle: when each side or corner gets its mark. */
  marks?: number[]
  /** Rectangle only: when the long pair lights, and when the short pair does. */
  long?: number
  short?: number
}

/* ── 1. he introduces the four ─────────────────────────────────────────────── */

function intro(): Scene {
  const b = scene('intro')
  b.sting('intro', 0.35)
  b.wait(0.7).say(HELLO, 0.45)
  /* The four line up on the floor exactly as he names them, so the second
     sentence is a picture and not just a list of words. */
  const row = b.now
  b.say(FOUR, 1.0)
  b.set('row', row)
  return b.build()
}

/* ── 2. one shape at a time, each proving its own property ─────────────────── */

/**
 * The order is circle, square, triangle, rectangle, and it is not arbitrary.
 *
 * Circle first because "no corners" is the easiest property to see and it sets
 * up corners as the thing worth looking at. Square next, because it gives the
 * child four sides to hold on to. Triangle third, which is a clean change of
 * number. Rectangle last and directly after the square, so the comparison the
 * child actually needs is the freshest thing in the scene when practise starts.
 */
function teach(): Scene {
  const b = scene('teach')
  const steps: Step[] = []
  b.wait(0.4)

  /* Circle. The lap runs from the moment he says it will until the sentence
     about corners has finished, so the dot is still travelling while the child
     is being told what it is failing to find. */
  {
    const at = b.now
    b.sting('chime')
    b.wait(0.55).say(C_HERE, 0.35)
    const run = b.now
    b.say(C_RUN, 0.15).say(C_NONE, 0.95)
    steps.push({ kind: 'circle', at, run, runEnd: b.now - 0.95 })
  }

  /* Square. Each tick lands on its own word and stays, so by the last one all
     four marks are on screen together and can be seen to be the same length. */
  {
    const at = b.now
    b.sting('chime')
    b.wait(0.55).say(S_HERE, 0.35).say(S_FOUR, 0.3)
    const marks: number[] = []
    for (const line of S_SIDES) { marks.push(b.now); b.say(line, 0.34) }
    b.say(S_SAME, 0.95)
    steps.push({ kind: 'square', at, marks })
  }

  /* Triangle. Same shape of demonstration as the square on purpose: the child
     has just learned how to watch one, and the only new thing is the number. */
  {
    const at = b.now
    b.sting('chime')
    b.wait(0.55).say(T_HERE, 0.35).say(T_THREE, 0.3)
    const marks: number[] = []
    for (const line of T_CORNERS) { marks.push(b.now); b.say(line, 0.34) }
    b.say(T_IS, 0.95)
    steps.push({ kind: 'triangle', at, marks })
  }

  /* Rectangle. The long pair is shown before the short pair and both stay up,
     because the fact is the contrast between them and not either on its own. */
  {
    const at = b.now
    b.sting('chime')
    b.wait(0.55).say(R_HERE, 0.35).say(R_FOUR, 0.35)
    const long = b.now
    b.say(R_LONG, 0.5)
    const short = b.now
    b.say(R_SHORT, 0.95)
    steps.push({ kind: 'rect', at, long, short })
  }

  b.set('steps', steps)
  return b.build()
}

/* ── 3. the square and the rectangle, side by side ─────────────────────────── */

/**
 * The scene this whole video exists for.
 *
 * Children do not confuse a circle with a triangle. They confuse a square with
 * a rectangle, because both are four sided boxes and the difference is a
 * measurement rather than a silhouette. Teaching them in separate scenes is
 * what makes them look alike, so here they are on screen at the same time with
 * their sides marked and measurable against each other.
 */
function practise(): Scene {
  const b = scene('practise')
  b.wait(0.45).say(P_BOTH, 0.4)
  const sq = b.now
  b.say(P_SQ, 0.4)
  const re = b.now
  b.say(P_RE, 0.45)
  b.say(P_TELL, 0.95)
  b.set('sq', sq).set('re', re)
  return b.build()
}

/* ── 4. all four together, named one at a time ─────────────────────────────── */

function recap(): Scene {
  const b = scene('recap')
  const calls: { kind: string, at: number }[] = []
  b.wait(0.4).say(NAME_ALL, 0.45)
  for (let i = 0; i < CALLS.length; i++) {
    calls.push({ kind: KINDS[i], at: b.now })
    b.say(CALLS[i], 0.5)
  }
  b.wait(0.25).say(KNOW, 1.0)
  b.set('calls', calls)
  return b.build()
}

/* ── 5. handing over to the shape puzzle ───────────────────────────────────── */

function handover(): Scene {
  const b = scene('handover')
  b.sting('fanfare', 0)
  /* The words match what the game actually asks for. Shape Puzzle gives the
     child four holes and four loose shapes to drag, so it says drag and hole,
     not tap and match. */
  b.wait(0.5).say(YOURS, 1.6)
  return b.build()
}

export const SHAPES_LESSON = lesson(
  'shapes-four', 'Circle, Square, Triangle and Rectangle',
  [intro(), teach(), practise(), recap(), handover()],
)
