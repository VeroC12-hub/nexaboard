/**
 * Shapes in Our Environment: what happens when.
 *
 * Every time here is computed from how long the recorded voice takes. See
 * `shell.tsx` for why that is not optional.
 *
 * ── Why each object needs two recorded moments and not one ───────────────────
 *
 * The whole method of this lesson is a two step: first the real thing, then
 * the pure shape glowing on top of it. If those land together the child sees
 * one picture of a glowing clock and learns nothing, because there was never a
 * moment where the clock was only a clock. So every object records when it
 * arrives and, separately, when its shape lights up, and the gap between them
 * is a sentence of narration long.
 */

import cueFile from '../../narration.json'
import { SceneBuilder, lesson, type Clip, type Scene } from '../../shell'

const CLIPS = cueFile as Record<string, Clip>
const scene = (id: string) => new SceneBuilder(id, CLIPS)

const HELLO = 'Hello, my friend! I am Ananse. Shapes do not only live on the blackboard.'
const OUTSIDE = 'Shapes are all around us. Come outside and look with me.'

/** Object, the line that shows it, the line that names its shape. */
const THINGS: [string, string, string][] = [
  ['clock', 'Look at this clock.', 'The face of the clock is a circle.'],
  ['window', 'Look at this window.', 'The window is a square.'],
  ['roof', 'Look at the roof of this house.', 'The roof is a triangle.'],
  ['door', 'Look at this door.',
    'The door is a rectangle. Two long sides and two short sides.'],
]

const MORE = 'Here are four more things you already know.'
const ASKS: [string, string][] = [
  ['coin', 'Which one is a circle? The coin!'],
  ['tin', 'Which one is a square? The biscuit tin!'],
  ['melon', 'Which one is a triangle? The slice of watermelon!'],
  ['note', 'Which one is a rectangle? The bank note!'],
]

const ALL = 'Circles, squares, triangles and rectangles.'
const HIDING = 'They are hiding inside almost everything around you.'
const HOME = 'Look for them on your way home today.'

const YOURS = 'Now it is your turn. Find the shape hiding in the picture!'

/** One everyday object, and the two moments it needs. */
export interface Find {
  thing: string
  /** When the real object arrives. */
  at: number
  /** When its shape glows into place on top of it. */
  lit: number
}

/* ── 1. he takes them outside ──────────────────────────────────────────────── */

function intro(): Scene {
  const b = scene('intro')
  b.sting('intro', 0.35)
  b.wait(0.7).say(HELLO, 0.45).say(OUTSIDE, 1.0)
  return b.build()
}

/* ── 2. four everyday things, each with a shape inside it ──────────────────── */

function teach(): Scene {
  const b = scene('teach')
  const finds: Find[] = []
  b.wait(0.4)
  for (const [thing, look, name] of THINGS) {
    const at = b.now
    b.sting('chime')
    /* He says "look at this clock" while it is still only a clock. */
    b.wait(0.5).say(look, 0.35)
    const lit = b.now
    b.say(name, 1.0)
    finds.push({ thing, at, lit })
  }
  b.set('finds', finds)
  return b.build()
}

/* ── 3. four different things, the same four shapes ────────────────────────── */

/**
 * A second example of each shape, and a deliberately smaller one.
 *
 * A child who has seen only a round clock will tell you a circle is a clock.
 * The shape is only detached from the object once it has been found in two
 * unrelated objects, so this scene is not revision, it is the half of the
 * lesson that makes the first half generalise.
 */
function practise(): Scene {
  const b = scene('practise')
  const finds: Find[] = []
  b.wait(0.4).say(MORE, 0.5)
  /* All four are on screen from the start of the scene here, unlike the teach
     scene. The question "which one is a circle" only means anything if the
     child can see the ones that are not. */
  for (const [thing, line] of ASKS) {
    const start = b.now
    b.say(line, 0.5)
    const end = b.now - 0.5
    /* The glow lands on the answer, not on the question. Each line asks then
       tells, so it is timed off the end of the recorded clip rather than the
       start of it, and the floor is there in case a line comes back short. */
    finds.push({ thing, at: 0, lit: Math.max(start + 0.4, end - 0.5) })
  }
  b.wait(0.3).set('finds', finds)
  return b.build()
}

/* ── 4. what they now know ─────────────────────────────────────────────────── */

function recap(): Scene {
  const b = scene('recap')
  const showAt = b.now + 0.4
  b.wait(0.4).say(ALL, 0.4).say(HIDING, 0.45).say(HOME, 1.0)
  b.set('showAt', showAt)
  return b.build()
}

/* ── 5. handing over to the shape hunt ─────────────────────────────────────── */

function handover(): Scene {
  const b = scene('handover')
  b.sting('fanfare', 0)
  /* Shape Hunt shows a picture and asks the child to find one named shape in
     it, so the words say find and hiding, which is what the game will ask. */
  b.wait(0.5).say(YOURS, 1.6)
  return b.build()
}

export const AROUND_LESSON = lesson(
  'shapes-around', 'Shapes in Our Environment',
  [intro(), teach(), practise(), recap(), handover()],
)
