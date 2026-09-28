/**
 * Big and Small: what happens when.
 *
 * ── What this lesson is actually for ─────────────────────────────────────────
 *
 * Big and small are not properties. A mango on its own is neither, and a child
 * who has learned "the big mango" as a name for one particular mango has
 * learned a fact that will be wrong the next time they meet it. The word is
 * about a pair, and it only means anything while both halves of the pair are
 * in front of you.
 *
 * So there is never one object on screen being called big. Every naming in this
 * video happens with two things side by side, and the middle scene takes one
 * ball, puts something smaller beside it so it is the big one, then swaps that
 * for something bigger so the very same ball is the small one. Nothing about
 * the ball changes. That is the lesson, and the three sizes are a clean two to
 * one apart so the change of neighbour is impossible to miss.
 *
 * Every time here is computed from how long the voice actually takes. See
 * `shell.tsx` for why that is not optional.
 */

import cueFile from '../../narration.json'
import { SceneBuilder, lesson, type Clip, type Scene } from '../../shell'

const CLIPS = cueFile as Record<string, Clip>
const scene = (id: string) => new SceneBuilder(id, CLIPS)

const HELLO = 'Hello, my friend! I am Ananse. Today we are learning about big and small.'
const TWO_DRUMS = 'Look at these two drums. This one is big.'
const AND_SMALL = 'And this one is small.'
const NEED_TWO = 'Big and small always need two things, side by side.'
const ALONE = 'Here is one ball, all by itself. Is it big, or is it small? We cannot say yet.'
const TINY = 'Watch. Here comes a tiny ball.'
const NOW_BIG = 'Now our ball is the big one.'
const SWAP = 'The tiny ball goes away, and a big one rolls in.'
const NOW_SMALL = 'Now the very same ball is the small one.'
const NOTHING = 'Nothing about our ball changed. Only what stood beside it.'
const WHICH = 'Your turn. Look at these two oranges. Which one is big?'
const YES_BIG = 'Yes! This orange is the big one.'
const BIGGER = 'Now a bigger orange comes, and the same orange is the small one.'
const TOGETHER = 'So, big and small tell us how two things look together.'
const AT_HOME = 'At home, hold up two things. Which is big? Which is small?'
const BYE = 'Goodbye for now, my friend!'

/* ── 1. he introduces it ───────────────────────────────────────────────────── */

function intro(): Scene {
  const b = scene('intro')
  b.sting('intro', 0.35)
  b.wait(0.7).say(HELLO, 1.0)
  return b.build()
}

/* ── 2. the words, taught on a pair and never on one thing ─────────────────── */

/**
 * Two drums at four to one, which is as far apart as the frame allows.
 *
 * The naming is split across two lines rather than one, because each drum has
 * to be ringed at the moment its own word is said. One line covering both would
 * have meant guessing how far into the recording the word "big" falls, and a
 * guessed offset is the one kind of number this project does not write down.
 */
function pair(): Scene {
  const b = scene('pair')
  b.set('showAt', 0.3)
  b.wait(0.6)
  b.set('bigAt', b.now)
  b.say(TWO_DRUMS, 0.4)
  b.set('smallAt', b.now)
  b.say(AND_SMALL, 0.8)
  b.say(NEED_TWO, 0.9)
  return b.build()
}

/* ── 3. one ball, two neighbours, two different answers ────────────────────── */

/**
 * The scene the video exists for.
 *
 * It opens on a ball with nothing beside it and asks the question that has no
 * answer, and the pause before he admits there is no answer is deliberate: a
 * child will try to answer it, and finding out that they could not have is the
 * moment the idea lands.
 *
 * The ball itself never moves after that. Only its neighbour is exchanged, so
 * the one thing that changed on screen is the one thing the narration says
 * changed.
 */
function middle(): Scene {
  const b = scene('middle')
  b.wait(0.4).say(ALONE, 0.7)
  b.set('smallAt', b.now + 0.3)
  b.sting('chime', b.now + 0.3)
  b.say(TINY, 0.35)
  b.say(NOW_BIG, 0.75)
  b.set('awayAt', b.now)
  b.set('bigAt', b.now + 0.5)
  b.sting('chime', b.now + 0.5)
  b.say(SWAP, 0.35)
  b.say(NOW_SMALL, 0.8)
  b.say(NOTHING, 0.9)
  return b.build()
}

/* ── 4. the same move, asked instead of shown ──────────────────────────────── */

/**
 * A second angle, not a repeat.
 *
 * The middle scene shows the trick with balls while the child watches. This one
 * runs it again with oranges and makes the child answer first, with a real
 * pause after the question and nothing happening on screen to fill it. Watching
 * somebody notice something and noticing it yourself are different skills, and
 * a lesson that only ever does the first one finds out too late.
 */
function yourTurn(): Scene {
  const b = scene('yourturn')
  b.set('showAt', 0.3)
  b.wait(0.5).say(WHICH, 1.3)
  b.set('ringAt', b.now)
  b.sting('chime')
  b.wait(0.3).say(YES_BIG, 0.6)
  b.set('awayAt', b.now + 0.25)
  b.set('bigAt', b.now + 0.5)
  b.sting('chime', b.now + 0.5)
  b.say(BIGGER, 1.0)
  return b.build()
}

/* ── 5. a recap, because there is no big and small game to hand over to ────── */

/**
 * This ends on an invitation rather than a handover.
 *
 * There is no KG game for comparing sizes yet, and a video that says "now go
 * and play it" against a button that does not exist teaches a child that
 * Ananse says things that are not true. The invitation costs nothing and is
 * better practice anyway: a spoon and a ladle in their own kitchen are a
 * sharper pair than anything drawn here. Swap this for a real handover on the
 * day the game ships.
 */
function home(): Scene {
  const b = scene('home')
  b.sting('fanfare', 0)
  b.wait(0.5).say(TOGETHER, 0.6).say(AT_HOME, 0.7).say(BYE, 1.4)
  return b.build()
}

export const BIG_SMALL_LESSON = lesson('big-and-small', 'Big and Small', [
  intro(), pair(), middle(), yourTurn(), home(),
])
