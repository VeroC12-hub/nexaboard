/**
 * Number Order: Before and After. What happens when.
 *
 * Every time is measured from the recorded voice, never typed in. See
 * `shell.tsx` for why.
 *
 * ── Why this is taught as a place and not as a chant ─────────────────────────
 *
 * A child who has done Counting 1 to 10 can produce the numbers in order, and
 * producing them in order is not the same as knowing where they live. Asked
 * "what comes before seven" they restart at one and run up to it, which works
 * and is slow and falls apart the moment the question is "what comes after".
 *
 * So the number line is on screen for the whole video and it never moves. One
 * card lights up, and before is the card on its left and after is the card on
 * its right, every time, in the same two directions. The two gap scenes are
 * where that turns into an answer: the card leaves, and the child is given a
 * long silent moment with the hole in the row before Ananse says anything. If
 * he names it straight away nobody has done any thinking, and the counting was
 * the only thing exercised.
 */

import cueFile from '../../narration.json'
import { SceneBuilder, lesson, type Clip, type Scene } from '../../shell'

const CLIPS = cueFile as Record<string, Clip>
const scene = (id: string) => new SceneBuilder(id, CLIPS)

const HELLO = 'Hello, my friend! I am Ananse. Today we are learning before and after.'
const ROW = 'Here are the numbers, one to ten, standing in a row.'
const ON5 = 'Let us stand on five.'
const BEFORE5 = 'The number before five is the one on the left. It is four.'
const AFTER5 = 'The number after five is the one on the right. It is six.'
const RULE = 'Before is the left. After is the right. Always.'
const ON8 = 'Now let us stand on eight.'
const BOTH8 = 'Before eight is seven. After eight is nine.'
const ON1 = 'Now let us stand on one, at the very front.'
const ASK1 = 'After one is two. But what comes before one?'
const NONE = 'Nothing! One is first. On this line, nothing comes before one.'
const GONE = 'Oh! A number has run away. Which one is missing?'
const CLUE = 'Look at the gap. Six is before it. Eight is after it.'
const SEVEN = 'It is seven! Here comes seven back.'
const AGAIN = 'Here we go again. Which number is missing now?'
const THREE = 'Two is before it. Four is after it. It is three!'
const TURN = 'Well done, my friend! Now it is your turn.'
const TRAIN = 'Play Number Train. Drag the missing number into the empty carriage.'

/* ── 1. he introduces it, and the row builds itself ────────────────────────── */

function intro(): Scene {
  const b = scene('intro')
  b.sting('intro', 0.35)
  b.wait(0.7).say(HELLO, 0.8)
  /* The cards land one per note, left to right, so the row is built in the
     order it is read in. A row that fades in all at once is a picture; a row
     that arrives in order is a sequence, which is the subject. */
  b.set('row', b.now)
  b.say(ROW, 1.2)
  return b.build()
}

/* ── 2. five, and the two directions ───────────────────────────────────────── */

function teach(): Scene {
  const b = scene('teach')
  b.wait(0.4)
  b.sting('chime')
  b.set('lit', 5)
  b.set('litAt', b.now)
  b.say(ON5, 0.8)
  b.set('before', b.now)
  b.say(BEFORE5, 0.7)
  b.set('after', b.now)
  b.say(AFTER5, 0.8)
  b.set('rule', b.now)
  b.say(RULE, 1.1)
  return b.build()
}

/* ── 3. eight, then one, where the honest answer is nothing ────────────────── */

function practise(): Scene {
  const b = scene('practise')
  b.wait(0.4)
  b.sting('chime')
  b.set('eightAt', b.now)
  b.say(ON8, 0.9)
  b.set('eightSides', b.now)
  b.say(BOTH8, 1.3)
  b.sting('nudge')
  b.set('oneAt', b.now)
  b.say(ON1, 0.7)
  b.set('oneAsk', b.now)
  b.say(ASK1, 0.4)
  /**
   * A real pause on the question every child asks.
   *
   * "What comes before one" has an answer they can be told, and being told it
   * in the same breath as the question teaches nothing. The pause is long
   * enough to be uncomfortable, because the point is that they look to the
   * left of the one card and find empty floor there themselves.
   */
  b.wait(1.5)
  b.set('none', b.now)
  b.say(NONE, 1.2)
  return b.build()
}

/* ── 4. a card leaves, twice ───────────────────────────────────────────────── */

function gap(): Scene {
  const b = scene('gap')
  b.wait(0.4)
  b.sting('nudge')
  b.set('goneAt', b.now)
  b.say(GONE, 0.4)
  b.wait(1.6)
  b.set('clue', b.now)
  b.say(CLUE, 1.4)
  b.sting('chime')
  b.set('back', b.now)
  b.say(SEVEN, 1.2)

  b.sting('nudge')
  b.set('gone2At', b.now)
  b.say(AGAIN, 0.4)
  b.wait(1.7)
  b.set('clue2', b.now)
  b.say(THREE, 0.3)
  b.sting('chime')
  b.set('back2', b.now)
  b.wait(1.3)
  return b.build()
}

/* ── 5. handing over to Number Train ───────────────────────────────────────── */

/* The cue names the game and names the action it asks for, drag, because a
   child who expects to tap will decide the game is broken. */
function handover(): Scene {
  const b = scene('handover')
  b.sting('fanfare', 0)
  b.wait(0.5).say(TURN, 0.5)
  b.set('train', b.now)
  b.say(TRAIN, 1.6)
  return b.build()
}

export const BEFORE_AFTER_LESSON = lesson(
  'before-and-after', 'Number Order: Before and After',
  [intro(), teach(), practise(), gap(), handover()],
)
