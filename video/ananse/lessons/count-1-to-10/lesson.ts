/**
 * Counting 1 to 10: what happens when.
 *
 * Every time here is computed from how long the voice actually takes, measured
 * by `tools/lesson-narration.mjs`. Re-record a line and the video re-times
 * itself. See `shell.tsx` for why that is not optional.
 */

import cueFile from '../../narration.json'
import { SceneBuilder, lesson, type Clip, type Scene } from '../../shell'

const CLIPS = cueFile as Record<string, Clip>
const scene = (id: string) => new SceneBuilder(id, CLIPS)

export const NUMBERS = ['One.', 'Two.', 'Three.', 'Four.', 'Five.',
  'Six.', 'Seven.', 'Eight.', 'Nine.', 'Ten.']

const HELLO = 'Hello, my friend! I am Ananse. Today we are going to count from one to ten.'
const HERE = 'Here come the mangoes. Count them with me.'
const THREE = 'Three mangoes. This is three.'
const FIVE = 'Five mangoes. This is five. One whole hand!'
const TEN = 'Ten mangoes. This is ten. Two hands!'
const AGAIN = 'Let us count them all together, one more time.'
const ALL = 'There are ten mangoes. We counted all the way to ten!'
const YOURS = 'Now it is your turn. Count the mangoes and feed Ananse!'

/* ── 1. he introduces it ───────────────────────────────────────────────────── */

function intro(): Scene {
  const b = scene('intro')
  b.sting('intro', 0.35)
  b.wait(0.7).say(HELLO, 1.0)
  return b.build()
}

/* ── 2. ten mangoes arrive, one per beat ───────────────────────────────────── */

function count(): Scene {
  const b = scene('count')
  b.wait(0.5).say(HERE, 0.4)
  for (const n of NUMBERS) b.beat(n)
  b.wait(0.7)
  return b.build()
}

/* ── 3. the groups, with faces ─────────────────────────────────────────────── */

function groups(): Scene {
  const b = scene('groups')
  const shown: { n: number, at: number }[] = []
  b.wait(0.4)
  for (const [n, line] of [[3, THREE], [5, FIVE], [10, TEN]] as [number, string][]) {
    shown.push({ n, at: b.now })
    b.sting('chime')
    b.wait(0.45).say(line, 1.05)
  }
  b.wait(0.3).set('groups', shown)
  return b.build()
}

/* ── 4. counting them all again, faster ────────────────────────────────────── */

function together(): Scene {
  const b = scene('together')
  b.wait(0.4).say(AGAIN, 0.5)
  /* Faster than the first pass on purpose. The first is learning the sequence
     and the second is hearing it as one run, which is what a child has to be
     able to do before the numbers mean anything. */
  for (const n of NUMBERS) b.beat(n, 0.7)
  /* A held beat after the tenth: running straight into the summary gives a
     child no moment to notice they got to the end. */
  b.wait(0.7).say(ALL, 1.0)
  return b.build()
}

/* ── 5. handing over to the game ───────────────────────────────────────────── */

function handover(): Scene {
  const b = scene('handover')
  b.sting('fanfare', 0)
  b.wait(0.5).say(YOURS, 1.6)
  return b.build()
}

export const COUNT_LESSON = lesson('count-1-to-10', 'Counting 1 to 10', [
  intro(), count(), groups(), together(), handover(),
])
