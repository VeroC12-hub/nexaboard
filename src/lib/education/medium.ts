/**
 * The mediums a learner can be taught in, and the evidence about which of them
 * works for them.
 *
 * ── Why this exists ─────────────────────────────────────────────────────────
 *
 * The platform used to decide the form of teaching by stage. Every KG child was
 * given a game with the prose relegated to a note for the adult; every Basic 3
 * child was given a lesson with a game underneath it. That is a rule about
 * five year olds, not a judgement about this five year old, and it meant every
 * learner of a given age met the same shaped session however differently they
 * learn.
 *
 * The tutor should decide instead, and it should be free to decide something
 * drastic: that this learner is given video and nothing else, because the
 * record shows they answer correctly after watching and fall apart when
 * reading. That decision is `plan.ts`. This module is what makes it possible
 * to make it **on evidence** rather than on a guess, which is the difference
 * between a tutor and a horoscope.
 *
 * ── The evidence, and its limits ────────────────────────────────────────────
 *
 * Every attempt now records the medium the learner was working in. So for each
 * medium we can say: how many times they answered in it, how often they were
 * right, whether they needed a hint, and whether lately is better than before.
 *
 * What it cannot say is anything at all until they have used a medium. A
 * learner who has never been shown a video has no video evidence, and the
 * honest answer is `null`, never zero. A medium with no evidence is untried,
 * not failed, and the two must never be confused: treating "untried" as
 * "failed" would mean the first medium a learner happened to meet became the
 * only one they were ever given.
 */

import type { Attempt } from './mastery'

/**
 * A way of being taught.
 *
 * Deliberately about form rather than about the software that makes it. The
 * learner does not care that a figure is SVG and a clip is diffusion; they
 * care whether it moves and whether it has words on it.
 */
export type Medium =
  /** Written explanation, read. */
  | 'prose'
  /** A narrated film with text on screen. */
  | 'video'
  /** A labelled diagram or picture, still. */
  | 'picture'
  /** A game: something to do with their hands. */
  | 'game'
  /** Written questions, answered. */
  | 'questions'
  /** Back and forth with the tutor in words. */
  | 'talk'

export const MEDIUMS: Medium[] = [
  'prose', 'video', 'picture', 'game', 'questions', 'talk',
]

/** Whether this medium requires reading to get anything from it. */
export const NEEDS_READING: Record<Medium, boolean> = {
  prose: true,
  /* A narrated video carries its meaning in the voice and the picture. The
     words on screen are support, not the channel. */
  video: false,
  picture: false,
  game: false,
  questions: true,
  talk: true,
}

/** How it is described to a parent, who chose none of this. */
export const MEDIUM_WORDS: Record<Medium, string> = {
  prose: 'reading',
  video: 'video',
  picture: 'pictures',
  game: 'games',
  questions: 'written questions',
  talk: 'talking it through',
}

/* ── the evidence ─────────────────────────────────────────────────────────── */

export interface MediumEvidence {
  medium: Medium
  /** Attempts that were actually marked. */
  answered: number
  /** null until there is enough to mean anything. Never zero for untried. */
  accuracy: number | null
  /** Later half minus earlier half. null when there is too little. */
  trend: number | null
  /** How often they needed a hint while in this medium. */
  leaning: number | null
  /** The most recent time they worked in it, or null. */
  lastAt: string | null
}

/**
 * Enough attempts in one medium to say anything about it.
 *
 * Six, the same threshold the whole-learner signals use. Lower would let three
 * unlucky rounds in a game decide that a child cannot learn from games, and
 * that judgement would then stop them being given games, which would stop the
 * evidence ever improving. A wrong conclusion that prevents its own correction
 * is the one kind this system must not draw.
 */
export const MIN_PER_MEDIUM = 6

/** Twelve, to compare an earlier half against a later one at all honestly. */
export const MIN_FOR_TREND = 12

function rightness(rows: Attempt[]): number {
  if (!rows.length) return 0
  return rows.filter(a => a.isCorrect === true).length / rows.length
}

/** What the record says about one medium. */
export function evidenceFor(all: Attempt[], medium: Medium): MediumEvidence {
  /* Unmarked attempts carry no information about how they are doing: counting
     them wrong would slander the learner and counting them right would flatter
     them. Attempts with no medium recorded predate the field and cannot be
     attributed to anything. */
  const rows = all.filter(a => a.via === medium && a.isCorrect !== null)
  const answered = rows.length

  if (answered < MIN_PER_MEDIUM) {
    return {
      medium,
      answered,
      accuracy: null,
      trend: null,
      leaning: null,
      lastAt: rows.length ? rows[rows.length - 1].at : null,
    }
  }

  let trend: number | null = null
  if (answered >= MIN_FOR_TREND) {
    const half = Math.floor(answered / 2)
    trend = rightness(rows.slice(half)) - rightness(rows.slice(0, half))
  }

  return {
    medium,
    answered,
    accuracy: rightness(rows),
    trend,
    leaning: rows.filter(a => a.hintUsed).length / answered,
    lastAt: rows[rows.length - 1].at,
  }
}

export function allEvidence(all: Attempt[]): MediumEvidence[] {
  return MEDIUMS.map(m => evidenceFor(all, m))
}

/** Mediums this learner has never been judged in. Untried, not failed. */
export function untried(all: Attempt[]): Medium[] {
  return allEvidence(all).filter(e => e.accuracy === null).map(e => e.medium)
}

/**
 * The mediums that are working, best first.
 *
 * Only ones with enough evidence to judge. An empty result means the platform
 * does not yet know how this learner learns, which is the true answer for
 * everybody on their first day and must not be dressed up as a preference.
 */
export function working(all: Attempt[]): MediumEvidence[] {
  return allEvidence(all)
    .filter(e => e.accuracy !== null)
    .sort((a, b) => (b.accuracy ?? 0) - (a.accuracy ?? 0))
}

/**
 * The gap between the learner's best and worst medium.
 *
 * This is the number that justifies doing something drastic. A learner who is
 * at 0.8 watching and 0.35 reading is not a learner with a slight preference;
 * they are a learner who is being failed by every session that hands them
 * words. Below about 0.15 the difference is noise and nothing should be
 * narrowed on the strength of it.
 */
export function spread(all: Attempt[]): number | null {
  const judged = working(all)
  if (judged.length < 2) return null
  const best = judged[0].accuracy ?? 0
  const worst = judged[judged.length - 1].accuracy ?? 0
  return best - worst
}

/** A difference worth changing how somebody is taught over. */
export const DECISIVE = 0.15

/* ── saying it in words ───────────────────────────────────────────────────── */

/**
 * The evidence as sentences, for the prompt.
 *
 * Deliberately words rather than numbers. A tutor told "video 0.82, prose 0.41"
 * reasons about arithmetic; a tutor told "they are getting most things right
 * from video and most things wrong from reading" reasons about a child. The
 * second is also honest about precision that twelve attempts do not support.
 */
export function mediumBrief(all: Attempt[]): string {
  const judged = working(all)
  if (!judged.length) {
    return 'Nothing is known yet about how this learner learns best. No medium'
      + ' has been used enough to judge, so this is a first guess and should be'
      + ' a broad one that gives them a chance to show you.'
  }

  const lines: string[] = []
  for (const e of judged) {
    const acc = e.accuracy ?? 0
    const how = acc >= 0.8 ? 'nearly always right'
      : acc >= 0.6 ? 'right more often than not'
        : acc >= 0.4 ? 'right about half the time'
          : 'wrong more often than right'
    const moving = e.trend === null ? ''
      : e.trend >= 0.2 ? ', and improving'
        : e.trend <= -0.2 ? ', and getting worse'
          : ''
    lines.push(`With ${MEDIUM_WORDS[e.medium]} they are ${how}`
      + ` over ${e.answered} answers${moving}.`)
  }

  const never = untried(all)
  if (never.length) {
    lines.push(`They have not been judged in ${never.map(m => MEDIUM_WORDS[m]).join(', ')},`
      + ' so those are untried rather than unsuitable.')
  }

  const gap = spread(all)
  if (gap !== null && gap >= DECISIVE) {
    lines.push(`The difference between their best and worst is large`
      + ` (${Math.round(gap * 100)} points), so it is worth teaching them`
      + ' mostly or entirely in what works.')
  } else if (gap !== null) {
    lines.push('The difference between mediums is small, so there is no reason'
      + ' yet to narrow what they are given.')
  }

  return lines.join(' ')
}
