/**
 * Simple Subtraction with Objects: what happens when.
 *
 * Every time here comes from how long the voice actually takes, measured by
 * `tools/lesson-narration.mjs`. See `shell.tsx` for why that is the only order
 * that cannot go out of sync.
 *
 * ── Why the times are also handed to the painter ─────────────────────────────
 *
 * Counting 1 to 10 could let the painter read `scene.notes`, because in that
 * lesson every beat was an arrival and the notes list said everything. Here a
 * scene has three different kinds of moment in it: a mango arriving, a mango
 * being eaten, and a mango being counted afterwards. One list cannot mean all
 * three, so each kind is written into `data` under its own name and the painter
 * never has to guess which is which.
 */

import cueFile from '../../narration.json'
import { SceneBuilder, lesson, type Clip, type Scene } from '../../shell'

const CLIPS = cueFile as Record<string, Clip>
const scene = (id: string) => new SceneBuilder(id, CLIPS)

export const NUMBERS = ['One.', 'Two.', 'Three.', 'Four.', 'Five.']

const HELLO = 'Hello again, my friend! It is Ananse. Today we are going to take some away.'
/* Worded so it is nobody else's line. `tools/lesson-check.mjs` catches a
   sentence two lessons share, because they would then share one recording. */
const FIVE_HERE = 'Look! Five mangoes are sitting here. Let us count them together.'
const FIVE_ALL = 'Five mangoes! Now watch what happens.'
const HUNGRY = 'I am hungry. I will eat one mango.'
const GONE_ONE = 'Yum! One mango is gone.'
const ONE_MORE = 'I am still hungry. Here goes one more.'
const GONE_TWO = 'Two mangoes are gone. Can you see the empty spaces?'
const STILL_HERE =
  'The mangoes I ate are not here any more. So we count the ones that are still here.'
const LEFT_THREE = 'Three mangoes are left.'
const SUM_FIVE = 'Five, take away two, leaves three.'
const AGAIN_HERE = 'Let us try again. Here are four mangoes.'
const AGAIN_EAT = 'Watch. I will eat two of them.'
const AGAIN_COUNT = 'Now count what is left, starting at one.'
const AGAIN_SUM = 'Two mangoes are left. Four, take away two, leaves two.'
const RULE = 'Every time, we count the ones that are still here.'
const YOURS = 'Now it is your turn! Count out the mangoes and feed them to Ananse.'

/** A mango leaving: which one, and when it starts to go. */
interface Bite { at: number, index: number }

/* ── 1. he introduces it ───────────────────────────────────────────────────── */

function intro(): Scene {
  const b = scene('intro')
  b.sting('intro', 0.35)
  b.wait(0.7).say(HELLO, 1.0)
  return b.build()
}

/* ── 2. five mangoes, counted in ───────────────────────────────────────────── */

/**
 * The starting amount is counted, never announced.
 *
 * A child who is told there are five and then watches two leave is being asked
 * to do arithmetic on a number somebody else gave them. A child who counted the
 * five themselves is watching their own count get smaller, which is the thing
 * this lesson is actually about.
 */
function five(): Scene {
  const b = scene('five')
  const arrive: number[] = []
  b.wait(0.5).say(FIVE_HERE, 0.4)
  for (const n of NUMBERS) { arrive.push(b.now); b.beat(n) }
  b.wait(0.3).say(FIVE_ALL, 0.7)
  b.set('total', 5)
    .set('arrive', arrive)
    .set('numberBeats', arrive)
    .set('label', 'How many?')
  return b.build()
}

/* ── 3. two of them leave, then what is left is counted ────────────────────── */

/**
 * ── Why the eating is slow and the counting is not ───────────────────────────
 *
 * Taking away is harder than adding for one reason: the things that left are
 * not there to be counted. Everything a child can see says five, because five
 * is what they counted, and the only evidence of the two is that they are
 * missing. So each mango gets a wobble, a flight and a crunch, and a real pause
 * afterwards, because the leaving is the part that has to be remembered.
 *
 * Then the gaps fade before the count starts. A count over five holes in a row
 * lets the child count holes, and they would be right: there are still five
 * places. The count has to be over three mangoes and nothing else.
 */
function away(): Scene {
  const b = scene('away')
  const bites: Bite[] = []

  b.wait(0.4).say(HUNGRY, 0.15)
  /* Eaten from inside the row, not off the end, so the gaps are obvious and so
     the three that remain are not sitting in a tidy new row of three. */
  bites.push({ at: b.now, index: 3 })
  b.wait(0.8).say(GONE_ONE, 0.45)

  b.say(ONE_MORE, 0.15)
  bites.push({ at: b.now, index: 1 })
  b.wait(0.8).say(GONE_TWO, 0.6)

  const ghostFade = b.now
  b.say(STILL_HERE, 0.35)

  const count: number[] = []
  for (const n of NUMBERS.slice(0, 3)) { count.push(b.now); b.beat(n) }

  b.wait(0.35).say(LEFT_THREE, 0.4)
  const sumAt = b.now
  b.sting('chime')
  b.wait(0.2).say(SUM_FIVE, 1.1)

  b.set('total', 5)
    /* Already standing there from the end of the last scene. */
    .set('arrive', [-1, -1, -1, -1, -1])
    .set('bites', bites)
    .set('numberBeats', count)
    .set('ghostFade', ghostFade)
    .set('sumAt', sumAt)
    .set('sum', '5 - 2 = 3')
    .set('label', 'Take away')
  return b.build()
}

/* ── 4. the same move again, with a different amount ───────────────────────── */

/**
 * The four do not get counted in one by one.
 *
 * They arrived counted once already in scene two and that lesson has landed.
 * Counting them in again would also put four rising notes in front of the two
 * that matter, and the notes climb with the count, so "one, two" would have
 * come out as the fifth and sixth notes of the scale. Only the count of what is
 * left gets beats here, so it starts low and means what it sounds like.
 */
function again(): Scene {
  const b = scene('again')
  const at = b.now + 0.9
  const arrive = [0, 1, 2, 3].map(i => at + i * 0.28)
  b.wait(0.4).say(AGAIN_HERE, 0.8)

  const bites: Bite[] = []
  b.say(AGAIN_EAT, 0.2)
  bites.push({ at: b.now, index: 2 })
  b.wait(0.95)
  bites.push({ at: b.now, index: 0 })
  b.wait(1.05)

  const ghostFade = b.now
  b.say(AGAIN_COUNT, 0.3)
  const count: number[] = []
  for (const n of NUMBERS.slice(0, 2)) { count.push(b.now); b.beat(n) }

  b.wait(0.3)
  const sumAt = b.now
  b.sting('chime')
  b.say(AGAIN_SUM, 0.5).say(RULE, 0.9)

  b.set('total', 4)
    .set('arrive', arrive)
    .set('bites', bites)
    .set('numberBeats', count)
    .set('ghostFade', ghostFade)
    .set('sumAt', sumAt)
    .set('sum', '4 - 2 = 2')
    .set('label', 'Take away')
  return b.build()
}

/* ── 5. handing over to the game ───────────────────────────────────────────── */

function handover(): Scene {
  const b = scene('handover')
  b.sting('fanfare', 0)
  b.wait(0.5).say(YOURS, 1.6)
  return b.build()
}

export const TAKE_AWAY_LESSON = lesson(
  'take-away-objects', 'Simple Subtraction with Objects',
  [intro(), five(), away(), again(), handover()],
)
