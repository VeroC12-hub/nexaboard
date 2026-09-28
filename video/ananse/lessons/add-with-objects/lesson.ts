/**
 * Simple Addition with Objects: what happens when.
 *
 * Every time here comes from how long the voice actually takes, measured by
 * `tools/lesson-narration.mjs`. See `shell.tsx` for why that is the only order
 * that stays in sync.
 *
 * ── Why the sum is written on the board last, and never earlier ──────────────
 *
 * Addition can be taught as a fact to recall or as a thing to do, and at four
 * years old only one of those is available. So the order is fixed: two groups
 * stand apart, each is counted, they are pushed together, the whole lot is
 * counted from one, and only then does "= 5" appear. A board that says the
 * answer while the child is still counting has told them not to bother.
 *
 * ── Why each sum is its own scene ────────────────────────────────────────────
 *
 * The counting notes climb with the count, and `notes` restarts at the top of
 * every scene. Two sums in one scene would put the second sum's "one" on the
 * sixth note of the scale, so the run a child hears would not match the run
 * they are counting. One sum, one scene, one climb.
 */

import cueFile from '../../narration.json'
import { SceneBuilder, lesson, type Clip, type Scene } from '../../shell'

const CLIPS = cueFile as Record<string, Clip>
const scene = (id: string) => new SceneBuilder(id, CLIPS)

/* Only as far as five, because that is as far as the totals go. A number in
   here that no scene says is a line that never gets baked and a trap for the
   next person who slices one more off the end. */
export const NUMBERS = ['One.', 'Two.', 'Three.', 'Four.', 'Five.']

const HELLO = 'Hello, my friend! It is Ananse again. Today we will put two groups together.'
const HERE = 'Three mangoes are sitting here. Two more are sitting over there.'
const COUNT_THIS = 'Count this little group with me.'
const COUNT_OTHER = 'Now count the other little group.'
const WE_SAY = 'Three and two. When we put them together, we say three plus two.'
const PUSH = 'Push them together, and count the whole lot from one.'
const MAKES_FIVE = 'Three plus two makes five.'
const AGAIN = 'Now two mangoes here, and two mangoes over there.'
const TWO_PLUS_TWO = 'Two plus two. Push them together.'
const MAKES_FOUR = 'Two plus two makes four.'
const PLUS_MEANS = 'Plus means we put the groups together.'
const THEN_COUNT = 'Then we count them all, starting at one.'
const YOURS = 'Your turn now. Count out a pile of mangoes for hungry Ananse.'

/**
 * One sum, as the painter needs it.
 *
 * The counting beats are already in `scene.notes`, in the order they happen:
 * the first group, then the second group, then the whole lot. `a` and `b` are
 * enough for the painter to slice them apart, so they are not repeated here.
 */
export interface Sum {
  a: number
  b: number
  /** When the plus sign is chalked in between the two groups. */
  plus: number
  /** When the groups start sliding together. */
  merge: number
  /** When "= 5" is allowed on the board, which is after the last count. */
  solved: number
}

/* ── 1. he introduces it ───────────────────────────────────────────────────── */

function intro(): Scene {
  const b = scene('intro')
  b.sting('intro', 0.35)
  b.wait(0.7).say(HELLO, 1.0)
  return b.build()
}

/* ── 2. three and two ──────────────────────────────────────────────────────── */

/**
 * The plus sign arrives before the groups move, not with them.
 *
 * It is a new symbol, and a symbol that appears during a movement is part of
 * the movement and gets read as an effect of it. Chalked into the gap while
 * both groups are still standing still, with its name said over it, it is a
 * thing in its own right: the mark that means these two go together. Half a
 * second later the groups start walking and it is already understood.
 */
function teach(): Scene {
  const b = scene('teach')
  b.wait(0.5).say(HERE, 0.45)

  b.say(COUNT_THIS, 0.25)
  for (const n of NUMBERS.slice(0, 3)) b.beat(n)
  b.wait(0.2).say(COUNT_OTHER, 0.25)
  for (const n of NUMBERS.slice(0, 2)) b.beat(n)

  b.wait(0.35)
  const plus = b.now
  b.sting('chime')
  b.say(WE_SAY, 0.4)

  const merge = b.now
  b.say(PUSH, 0.35)
  /* Faster beats than the two group counts. Those were learning how many are
     in each pile; this is one run over one pile, and a run has to sound like
     a run or the child counts it as five separate facts again. */
  for (const n of NUMBERS.slice(0, 5)) b.beat(n, 0.85)

  b.wait(0.3)
  const solved = b.now
  b.sting('fanfare')
  b.wait(0.25).say(MAKES_FIVE, 0.9)

  b.set('sum', { a: 3, b: 2, plus, merge, solved } satisfies Sum)
  return b.build()
}

/* ── 3. two and two ────────────────────────────────────────────────────────── */

/**
 * No "count this group" cues the second time.
 *
 * The move has been done once and the ring around the mango being counted says
 * which pile is in hand. Saying it again costs four seconds that the lesson
 * does not have, and it also teaches the child to wait for instructions rather
 * than to start counting when they see a group.
 *
 * Two and two on purpose, and not three and three. Both parts are the same
 * size, so a child who thinks addition means "the answer is the big one" has
 * nowhere to hide.
 */
function practise(): Scene {
  const b = scene('practise')
  b.wait(0.4).say(AGAIN, 0.5)

  for (const n of NUMBERS.slice(0, 2)) b.beat(n)
  /* A clear gap between the two counts, since no line separates them now. The
     ring jumping the gap on its own is what tells the child a new pile has
     started. */
  b.wait(0.55)
  for (const n of NUMBERS.slice(0, 2)) b.beat(n)

  b.wait(0.3)
  const plus = b.now
  b.sting('chime')
  b.say(TWO_PLUS_TWO, 0.35)

  const merge = b.now
  for (const n of NUMBERS.slice(0, 4)) b.beat(n, 0.85)

  b.wait(0.3)
  const solved = b.now
  b.sting('fanfare')
  b.wait(0.25).say(MAKES_FOUR, 0.9)

  b.set('sum', { a: 2, b: 2, plus, merge, solved } satisfies Sum)
  return b.build()
}

/* ── 4. what was done, in one sentence ─────────────────────────────────────── */

/**
 * The recap names the action, not the answers.
 *
 * "Three plus two makes five" is a fact about five. "Plus means we put the
 * groups together, then we count them all" is a method, and a method works on
 * the sum this lesson never showed. Both sums stay on the board underneath it
 * as the evidence that the method is what produced them.
 */
function recap(): Scene {
  const b = scene('recap')
  b.wait(0.4).say(PLUS_MEANS, 0.45).say(THEN_COUNT, 0.9)
  b.set('sums', ['3 + 2 = 5', '2 + 2 = 4'])
  return b.build()
}

/* ── 5. handing over to the game ───────────────────────────────────────────── */

function handover(): Scene {
  const b = scene('handover')
  b.sting('fanfare', 0)
  b.wait(0.5).say(YOURS, 1.6)
  return b.build()
}

export const ADD_LESSON = lesson(
  'add-with-objects', 'Simple Addition with Objects',
  [intro(), teach(), practise(), recap(), handover()],
)
