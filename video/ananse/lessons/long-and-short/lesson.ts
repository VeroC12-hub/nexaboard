/**
 * Long and Short: what happens when.
 *
 * Every time here is measured from the recorded voice, never typed in. See
 * `shell.tsx` for why. Re-record one line and the whole video re-times itself.
 *
 * ── Why the middle scene is built around a wrong answer ──────────────────────
 *
 * Long and short is a comparison, like big and small, and a child of four can
 * already do it by eye when the two things happen to be side by side. The one
 * idea this video exists to add is that the eye is only telling the truth when
 * both things start from the same place. You cannot teach that by asserting
 * it. You teach it by letting the eye be wrong first: two snakes, the shorter
 * one lying further to the right, Ananse picks it, and then the red line
 * arrives and takes the answer away from him. The timings below give that
 * mistake room to sit before it is corrected.
 */

import cueFile from '../../narration.json'
import { SceneBuilder, lesson, type Clip, type Scene } from '../../shell'

const CLIPS = cueFile as Record<string, Clip>
const scene = (id: string) => new SceneBuilder(id, CLIPS)

const HELLO = 'Hello, my friend! I am Ananse. Today we are learning long and short.'
const LOOK = 'Look. Here is a rope, and here is a pencil.'
const NAMED = 'The rope is long. The pencil is short.'
const WHICH = 'Now here are two snakes. Which one is longer?'
const GUESS = 'The blue snake, I think. It reaches further that way.'
const HOLD = 'Wait. They do not start in the same place.'
const SLIDE = 'Let us slide them back. Both tails on the red line.'
const GREEN = 'Now look again. The green snake is longer.'
const BLUE = 'The blue snake is shorter.'
const RULE = 'To find out which is longer, always start at the same line.'
const THREE = 'Here are three long things, all starting at the red line.'
const NAMES = 'A rope, a sugarcane, and a line of ants.'
const LONGEST = 'The ants go the furthest. The line of ants is the longest.'
const SHORTEST = 'The sugarcane stops first. The sugarcane is the shortest.'
const RECAP = 'So, long goes far. Short does not go far.'
const RECAP2 = 'And to compare, line them up at the same start.'
const HOME = 'Well done, my friend! Now go and find long and short things at home.'
const EXAMPLES = 'A spoon and a broom. A pencil and a rope. Line them up and look.'

/* ── 1. he introduces it ───────────────────────────────────────────────────── */

function intro(): Scene {
  const b = scene('intro')
  b.sting('intro', 0.35)
  b.wait(0.7).say(HELLO, 1.0)
  return b.build()
}

/* ── 2. the two words, on two objects that could not be confused ───────────── */

function teach(): Scene {
  const b = scene('teach')
  b.wait(0.5)
  /* The rope lands first and the pencil a beat later, so the sentence and the
     picture arrive in the same order: "here is a rope" while the rope is what
     just moved. Both are on the red line from the very first frame, because
     the rule is not being taught yet and a child should never see a
     comparison that is not already honest. */
  b.set('rope', b.now)
  b.set('pencil', b.now + 1.3)
  b.say(LOOK, 0.5)
  b.sting('chime')
  b.set('labels', b.now)
  b.say(NAMED, 1.1)
  return b.build()
}

/* ── 3. the eye gets it wrong, then the line puts it right ─────────────────── */

function trick(): Scene {
  const b = scene('trick')
  b.wait(0.4)
  b.set('in', b.now)
  b.say(WHICH, 0.9)
  /* A held beat after the question. The child answers it in their head here,
     and most of them will answer it the same wrong way he is about to. */
  b.set('guess', b.now)
  b.say(GUESS, 0.6)
  b.sting('nudge')
  b.set('shock', b.now)
  b.say(HOLD, 0.35)
  /* The red line appears under the words that name it, then the blue snake
     walks back to it over the rest of the sentence. */
  b.set('line', b.now)
  b.set('slide', b.now + 0.5)
  b.say(SLIDE, 0.7)
  b.sting('chime')
  b.set('green', b.now)
  b.say(GREEN, 0.5)
  b.set('blue', b.now)
  b.say(BLUE, 0.7)
  b.say(RULE, 1.0)
  return b.build()
}

/* ── 4. the same rule, three things, no trick ──────────────────────────────── */

function practise(): Scene {
  const b = scene('practise')
  b.wait(0.4)
  b.set('in', b.now)
  b.say(THREE, 0.4)
  b.say(NAMES, 1.4)
  /* Long a pause before the answer. This is the scene where the child gets to
     do the comparing, and there is nothing to compare if he names it first. */
  b.sting('chime')
  b.set('longest', b.now)
  b.say(LONGEST, 0.9)
  b.sting('chime')
  b.set('shortest', b.now)
  b.say(SHORTEST, 1.1)
  return b.build()
}

/* ── 5. the ending ─────────────────────────────────────────────────────────── */

/**
 * There is no KG game for long and short yet, so this is not a handover.
 *
 * A "now it is your turn" that opens nothing is a broken promise, and a child
 * who taps the button and lands back on the menu has learned that the video
 * lies. Instead the last scene sends them at the room they are sitting in: a
 * spoon and a broom is a better exercise than anything we could have built,
 * and it needs no code. When a long and short game exists, this scene becomes
 * a real handover and the last two lines change.
 */
function recap(): Scene {
  const b = scene('recap')
  b.sting('fanfare', 0)
  b.wait(0.45)
  b.set('rule1', b.now)
  b.say(RECAP, 0.55)
  b.set('rule2', b.now)
  b.say(RECAP2, 0.9)
  b.set('home', b.now)
  b.say(HOME, 0.5)
  b.say(EXAMPLES, 1.5)
  return b.build()
}

export const LONG_SHORT_LESSON = lesson('long-and-short', 'Long and Short', [
  intro(), teach(), trick(), practise(), recap(),
])
