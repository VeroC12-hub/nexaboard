/**
 * Games, for the learners who cannot read a lesson yet.
 *
 * ── Why games and not video, for this age ────────────────────────────────────
 *
 * A generated clip is five seconds, silent and wordless: no narration, no
 * counting along, no labels, because the models that make video cannot speak or
 * write. Put that in front of a five year old learning to count and it teaches
 * almost nothing. It is pleasant and it is passive.
 *
 * What works at this age is not in dispute: something to touch, one instruction
 * at a time, an answer the child gives rather than watches, and a response the
 * instant they give it. A game is all four. So for creche and the early primary
 * years the platform leads with a game and the prose lesson becomes the note
 * that the adult sitting with them reads.
 *
 * ── What a game here is, and is not ─────────────────────────────────────────
 *
 * It is not generated. Every game is written out, runs in the browser, needs no
 * GPU, no key, no network and costs nothing per play. That also means it cannot
 * produce anything unsuitable, which for this age group matters more than any
 * other property it could have: see issue 15.
 *
 * What the AI does instead is choose and set it: which game suits this topic,
 * which numbers, which objects, which words, pitched at what this particular
 * child has been getting wrong. The game is the instrument; the tutor plays it.
 *
 * Every round records an `Attempt` against the topic, exactly as written
 * questions do, so the same mastery model and the same adaptation follow a
 * four year old tapping mangoes as follow a sixth former solving equations.
 */

import type { Stage } from './learner'

export type GameId =
  | 'count-tap'
  | 'how-many'
  | 'more-or-fewer'
  | 'missing-number'
  | 'first-sound'
  | 'match-shape'

export interface Game {
  id: GameId
  /** What it is called, for a grown up choosing it. */
  name: string
  /** What the child is asked to do, in the words an adult would use. */
  asks: string
  /** Which stages it is suitable for at all. */
  stages: Stage[]
  /** Topics it fits, matched against the topic title. */
  suits: RegExp
  /**
   * Topics it must refuse, even though `suits` matched.
   *
   * Needed because these are matched against a title, and a title is a few
   * words of English rather than a classification. "Letters standing for
   * numbers" is algebra and "Forming letters" is handwriting, and both used to
   * be served a phonics game because the word "letter" is in them. Matching on
   * words will always overreach; this is where the overreach is paid for.
   */
  not?: RegExp
}

/**
 * Objects a Ghanaian child can name.
 *
 * Deliberately not apples and pears. A child counts what is in front of them,
 * and the difference between counting mangoes and counting a fruit they have
 * never seen is the difference between a sum and a puzzle.
 */
export const THINGS = [
  { emoji: '🥭', one: 'mango', many: 'mangoes' },
  { emoji: '🍌', one: 'banana', many: 'bananas' },
  { emoji: '🥜', one: 'groundnut', many: 'groundnuts' },
  { emoji: '🐟', one: 'fish', many: 'fish' },
  { emoji: '🥚', one: 'egg', many: 'eggs' },
  { emoji: '🌽', one: 'corn', many: 'cobs of corn' },
  { emoji: '🍅', one: 'tomato', many: 'tomatoes' },
  { emoji: '⚽', one: 'ball', many: 'balls' },
] as const

export const GAMES: Game[] = [
  {
    id: 'count-tap',
    name: 'Tap how many',
    asks: 'Tap the right number of things.',
    stages: ['creche', 'primary'],
    suits: /count|how many|number name|touch|one to one|how much|tally/i,
  },
  {
    id: 'how-many',
    name: 'How many is this?',
    asks: 'Count the things, then choose the number.',
    stages: ['creche', 'primary'],
    suits: /count|how many|numeral|last number|see small|number and numeration|writing numbers|reading numbers|number symbol/i,
  },
  {
    id: 'more-or-fewer',
    name: 'Which has more?',
    asks: 'Tap the group with more in it.',
    stages: ['creche', 'primary'],
    suits: /more|fewer|less|compar|order|greater|bigger|longer|shorter|taller|heavier|lighter|which is|same as|equal/i,
  },
  {
    id: 'missing-number',
    name: 'What comes next?',
    asks: 'Find the number that is missing.',
    stages: ['creche', 'primary'],
    suits: /pattern|sequence|next|missing|order|count(ing)? (on|back)|one more/i,
  },
  {
    id: 'first-sound',
    name: 'What sound does it start with?',
    asks: 'Choose the letter the word begins with.',
    stages: ['creche', 'primary'],
    suits: /sound|phonic|blend|rhym|syllable|begins? with|initial|letter name|letters and their sounds|the sound each letter/i,
    /* Handwriting, book choice, reading fluency and algebra all contain one of
       the words above and none of them is answered by tapping a letter. */
    not: /standing for numbers|forming|writing|handwrit|book|expression|fluen|comprehen|capital|punctuat|sentence|story/i,
  },
  {
    id: 'match-shape',
    name: 'Find the same shape',
    asks: 'Tap the shape that matches.',
    stages: ['creche', 'primary'],
    suits: /shape|circle|square|triangle|rectangle|sort|match|space|colour|color|size|pattern|same and different/i,
  },
]

/** The stages where a game leads and the prose is for the adult. */
export const PLAYS_FIRST: Stage[] = ['creche', 'primary']

export const playsFirst = (stage: Stage): boolean => PLAYS_FIRST.includes(stage)

/**
 * Which game suits this topic.
 *
 * Returns null when none does, which is the honest answer for most of what a
 * Basic 5 learner studies and for everything above primary. A game forced onto
 * a topic it does not fit is a distraction wearing the costume of teaching.
 */
export function gamesFor(stage: Stage, topicTitle: string): Game[] {
  return GAMES.filter(g =>
    g.stages.includes(stage)
    && g.suits.test(topicTitle)
    && !(g.not && g.not.test(topicTitle)))
}

export function gameFor(stage: Stage, topicTitle: string): GameId | null {
  const fits = gamesFor(stage, topicTitle)
  return fits.length ? fits[0].id : null
}

/**
 * The order of games for one sitting, one per round.
 *
 * This exists because the first version played the same game five times.
 * Every round of a topic about counting was "how many mangoes", asked five
 * ways that were not different, and a child worked out in two rounds that
 * nothing new was coming. A set that changes shape between rounds is not a
 * cosmetic improvement: a child who can count mangoes and cannot answer "which
 * group has more" has not learned counting, and only the varied set finds that
 * out.
 *
 * The lead game goes first, because it is the one that fits the topic best.
 * The rest are shuffled, so two sittings on the same topic are not the same
 * sitting. When only one game fits, it repeats, and that is a gap in the set
 * rather than something to paper over.
 */
export function rotation(stage: Stage, topicTitle: string, rounds: number): GameId[] {
  const fits = gamesFor(stage, topicTitle)
  if (!fits.length) return []

  const lead = fits[0].id
  const rest = fits.slice(1).map(g => g.id).sort(() => Math.random() - 0.5)
  const cycle = [lead, ...rest]

  const out: GameId[] = []
  for (let i = 0; i < rounds; i++) out.push(cycle[i % cycle.length])
  return out
}

export function gameById(id: GameId | null): Game | null {
  if (!id) return null
  return GAMES.find(g => g.id === id) ?? null
}

/* ── how hard to make it ──────────────────────────────────────────────────── */

/**
 * The range a round is set in, from the year and how they have been doing.
 *
 * A KG 1 child counts to five and a Basic 2 child to a hundred, and giving
 * either the other's numbers wastes the round. `doing` is the accuracy so far,
 * so a child getting everything right moves up within their year rather than
 * being asked the same thing until they are bored.
 */
export function rangeFor(stage: Stage, year: string, doing: number | null): number {
  const base = stage === 'creche'
    ? (/creche|nursery/i.test(year) ? 3 : /kg ?1/i.test(year) ? 5 : 10)
    : (/basic ?1/i.test(year) ? 10
      : /basic ?2/i.test(year) ? 20
        : /basic ?3/i.test(year) ? 50 : 100)

  if (doing === null) return base
  /* Moved within the year, never out of it: the ceiling is what their year
     teaches, and a good day does not make a five year old a Basic 3 child. */
  if (doing >= 0.85) return base
  if (doing >= 0.6) return Math.max(3, Math.round(base * 0.7))
  return Math.max(3, Math.round(base * 0.4))
}

/** A whole number from 1 to `max`, avoiding one we have just used. */
export function pick(max: number, avoid?: number): number {
  for (let i = 0; i < 20; i++) {
    const n = 1 + Math.floor(Math.random() * max)
    if (n !== avoid) return n
  }
  return 1 + Math.floor(Math.random() * max)
}

/** Some of the things, shuffled, so two rounds do not look identical. */
export function someThings(count: number) {
  const shuffled = [...THINGS].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.max(1, Math.min(THINGS.length, count)))
}

/**
 * Wrong answers that are wrong in a way a child would actually be wrong.
 *
 * Not random numbers. One either side, because off by one is the mistake
 * counting produces, and a distractor nobody would ever choose teaches nothing
 * and makes the right answer obvious.
 */
export function nearMisses(answer: number, howMany: number, max: number): number[] {
  const out = new Set<number>()
  for (const d of [1, -1, 2, -2, 3, -3]) {
    const n = answer + d
    if (n >= 1 && n <= Math.max(max, answer + 3) && out.size < howMany) out.add(n)
  }
  let n = 1
  while (out.size < howMany) {
    if (n !== answer) out.add(n)
    n += 1
  }
  return [...out]
}
