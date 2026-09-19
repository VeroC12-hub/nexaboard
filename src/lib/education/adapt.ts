/**
 * What the platform learns about a learner while they work.
 *
 * The profile is what they said about themselves on the day they signed up:
 * four dropdowns and a note. It is useful and it is also a guess, made before
 * they had done anything here. This file holds the other half, the part that
 * accumulates:
 *
 *   observations   short lines the tutor writes after watching a round of work
 *   signals        facts computed from their answers, which need no model
 *
 * Both go into every later prompt, and observations are labelled as observed so
 * that where they contradict the dropdowns, the evidence wins. That is what
 * makes the teaching adapt rather than merely be configured once.
 *
 * Two rules keep it from turning into a liability:
 *
 * 1. It is capped. `KEEP` observations, oldest dropped. This brief is read back
 *    into every lesson for the rest of the learner's time here, so an unbounded
 *    history would cost tokens forever and would also bury this month's truth
 *    under last year's.
 *
 * 2. Signals are computed, not asked for. Whether somebody is improving is
 *    arithmetic on their attempts; asking a model to judge it would be slower,
 *    dearer and less reliable than counting.
 *
 * Stored per learner and per subject, because how somebody works in Mathematics
 * is not evidence about their English.
 */

import type { Attempt } from './mastery'

/** One thing noticed about how this learner works. */
export interface Observation {
  /** ISO date. Kept so an old note can be recognised as old. */
  at: string
  /** The topic they were working on when it was noticed. */
  topicId: string
  /** The tutor's own words, one or two sentences. */
  note: string
}

export interface Adaptation {
  subjectId: string
  observations: Observation[]
}

/** How many observations to keep. See rule 1 above. */
export const KEEP = 8

/** Anything longer than this was not the one sentence that was asked for. */
const MAX_NOTE = 240

const keyFor = (learnerId: string) => `nexaedu_adapt:${learnerId}`

type Store = Record<string, Adaptation>

function load(learnerId: string): Store {
  try {
    const raw = localStorage.getItem(keyFor(learnerId))
    if (!raw) return {}
    const parsed = JSON.parse(raw) as unknown
    return parsed && typeof parsed === 'object' ? parsed as Store : {}
  } catch {
    /* Private windows, cleared storage, a quota refusal. A learner with no
       history is exactly the state this file starts in, so that is what an
       unreadable store becomes. */
    return {}
  }
}

function save(learnerId: string, store: Store): void {
  try {
    localStorage.setItem(keyFor(learnerId), JSON.stringify(store))
  } catch {
    /* Losing an observation is a small loss. Throwing here would lose the
       lesson the learner is in the middle of, which is a large one. */
  }
}

export function adaptationFor(learnerId: string, subjectId: string): Adaptation {
  const store = load(learnerId)
  return store[subjectId] ?? { subjectId, observations: [] }
}

/**
 * Record what the tutor noticed.
 *
 * Refuses the empty and the useless. "NOTHING NEW" is the answer the observe
 * task is explicitly told to give when a round revealed nothing, and it is the
 * right answer often enough that storing it would fill the brief with noise.
 */
export function observed(
  learnerId: string,
  subjectId: string,
  topicId: string,
  note: string,
): Adaptation {
  const tidy = note.trim().replace(/\s+/g, ' ')
  const current = adaptationFor(learnerId, subjectId)
  if (!tidy || /^nothing new\.?$/i.test(tidy)) return current

  const next: Adaptation = {
    subjectId,
    observations: [
      ...current.observations,
      { at: new Date().toISOString().slice(0, 10), topicId, note: tidy.slice(0, MAX_NOTE) },
    ].slice(-KEEP),
  }
  const store = load(learnerId)
  store[subjectId] = next
  save(learnerId, store)
  return next
}

/** Wipe what has been learned about a learner in one subject. */
export function forget(learnerId: string, subjectId: string): void {
  const store = load(learnerId)
  delete store[subjectId]
  save(learnerId, store)
}

/* ── signals, computed from their own work ────────────────────────────────── */

/** How recent work compares with earlier work, and how much help was needed. */
export interface Signals {
  answered: number
  /** Fraction right over everything, 0 to 1. Null below MIN_TO_JUDGE. */
  accuracy: number | null
  /** Recent accuracy minus earlier accuracy. Positive means improving. */
  trend: number | null
  /** Fraction of answers given after asking for help. */
  leaning: number
}

/** Below this, any rate calculated is noise dressed as a finding. */
const MIN_TO_JUDGE = 6

/** And below this, so is any claim about which way they are heading. */
const MIN_FOR_TREND = 12

/**
 * How much the two halves must differ before it counts as a direction.
 *
 * A quarter of the questions. Tighter than this and one unlucky answer in
 * twelve has the tutor told a learner is going backwards, which is both untrue
 * and the sort of thing that changes how somebody is taught.
 */
const TREND_SHIFT = 0.25

export function signalsFrom(all: Attempt[]): Signals {
  /* An attempt awaiting human marking has `isCorrect` null and so carries no
     information about how they are doing. Counting it as wrong would slander
     them; counting it as right would flatter them. */
  const attempts = all.filter(a => a.isCorrect !== null)
  const answered = attempts.length
  if (answered < MIN_TO_JUDGE) {
    return { answered, accuracy: null, trend: null, leaning: 0 }
  }
  const right = (rows: Attempt[]) =>
    rows.length ? rows.filter(a => a.isCorrect === true).length / rows.length : 0

  /* Split in half rather than fitting a line: the question is only whether
     lately is better than before, and halves answer that without pretending
     to a precision the data does not have. */
  const half = Math.floor(answered / 2)
  const earlier = attempts.slice(0, half)
  const recent = attempts.slice(half)

  return {
    answered,
    accuracy: right(attempts),
    trend: right(recent) - right(earlier),
    leaning: attempts.filter(a => a.hintUsed).length / answered,
  }
}

/**
 * The one line about how they are going that goes into the prompt.
 *
 * Deliberately a sentence rather than numbers. A tutor told "accuracy 0.58,
 * trend +0.21" has to interpret that before it can teach; a tutor told they are
 * improving from a shaky start already knows what to do. Returns null when
 * there is not enough work to say anything, because inventing a characterisation
 * of somebody who has answered four questions is how a platform starts lying.
 */
export function paceFrom(s: Signals): string | null {
  if (s.accuracy === null || s.trend === null) return null

  const level = s.accuracy >= 0.8 ? 'getting most things right'
    : s.accuracy >= 0.55 ? 'getting more right than wrong'
      : 'getting more wrong than right'

  /* A direction needs more evidence than a rate does. With six answers each
     one moves the trend by a third, so a single unlucky question would have
     the tutor told they are getting worse. Below MIN_FOR_TREND the honest
     thing is to say nothing about direction at all. */
  const direction = s.answered < MIN_FOR_TREND ? ''
    : s.trend > TREND_SHIFT ? ', and improving as they go'
      : s.trend < -TREND_SHIFT ? ', and it has been getting worse rather than better'
        : ', at about the same rate throughout'

  const help = s.leaning > 0.4
    ? ' They ask for help on most questions, so build confidence before adding difficulty.'
    : s.leaning < 0.1 && s.accuracy < 0.55
      ? ' They almost never ask for help, even when stuck, so offer it rather than waiting.'
      : ''

  return `They are ${level}${direction}.${help}`
}

/**
 * Everything learned about this learner, ready for the prompt.
 *
 * The one function the rest of the app calls. Returns the shape
 * `api/prompt.js` reads: `learned` for the observations, `pace` for the
 * computed sentence.
 */
export function learnedBrief(learnerId: string, subjectId: string, attempts: Attempt[]): {
  learned: string[]
  pace: string | null
} {
  return {
    learned: adaptationFor(learnerId, subjectId).observations.map(o => o.note),
    pace: paceFrom(signalsFrom(attempts)),
  }
}
