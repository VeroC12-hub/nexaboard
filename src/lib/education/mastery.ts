/**
 * How the learner is actually doing, and what to give them next.
 *
 * The platform already knows where a learner stopped: `journey.ts` resumes a
 * part finished lesson and otherwise hands over the next one in the sequence
 * the curriculum declares. That is a bookmark, not a teacher. It gives the same
 * next lesson to the child who answered everything correctly and to the child
 * who got nothing right, which is the one thing a person sitting beside them
 * would never do.
 *
 * This module is the other half: it reads what the learner has actually
 * answered and works out what they have secured, what is shaky, what has gone
 * cold, and therefore what should come next and how hard it should be.
 *
 * Everything here is pure. It takes attempts in and returns a decision, so it
 * can be tested exactly, and so the same reasoning can run wherever the
 * attempts are, on a screen or in a report for the teacher.
 */

import type { Medium } from './medium'

/** One answered question, reduced to what the decision actually needs. */
export interface Attempt {
  objectiveId: string
  /** null when the question is awaiting human marking, and so tells us nothing. */
  isCorrect: boolean | null
  hintUsed: boolean
  /** ISO timestamp. */
  at: string
  /**
   * Which medium the learner was working in when this happened.
   *
   * The single most important field in this record, and it was missing.
   *
   * Without it the platform can say a learner is shaky on counting back from
   * ten and cannot say that they are shaky when they read it and secure when
   * they watch it. That is the difference between knowing what somebody has
   * not learned and knowing how they learn, and only the second one lets the
   * tutor decide to stop giving a child words. See `medium.ts`.
   *
   * Optional because attempts recorded before this existed do not have it, and
   * a learner's history is not worth discarding for a field. Everything that
   * reads it treats an absent value as "not known" rather than as a default,
   * so old rows weaken the evidence without falsifying it.
   */
  via?: Medium
}

export type MasteryState =
  /** Never attempted. */
  | 'UNSEEN'
  /** Attempted, and going wrong more often than right. */
  | 'SHAKY'
  /** Coming along, or too few attempts to say. */
  | 'DEVELOPING'
  /** Reliably right, recently. */
  | 'SECURE'
  /** Was secure, but long enough ago that it is worth checking again. */
  | 'STALE'

export interface ObjectiveMastery {
  objectiveId: string
  attempts: number
  correct: number
  /** Every attempt counted equally. Honest, but slow to notice improvement. */
  accuracy: number | null
  /**
   * Recent attempts counted for more.
   *
   * This is the number the decisions use. A learner who got five wrong and then
   * five right has learned the thing, and raw accuracy of one half would keep
   * insisting they had not. Weighting recency lets the model notice the moment
   * something clicks, which is the moment worth responding to.
   */
  recent: number | null
  /** How many days since they last met it, or null if never. */
  daysSince: number | null
  state: MasteryState
  /** Whether they have been leaning on hints to get there. */
  hintRate: number
}

/** Attempts below this and we do not pretend to know anything. */
const MIN_TO_JUDGE = 3
/** Each older attempt counts for this much of the one after it. */
const DECAY = 0.75
/** Secure work not met for this long is worth checking again. */
const STALE_DAYS = 21

const SECURE_AT = 0.8
const SHAKY_BELOW = 0.5

/**
 * Reduce one objective's attempts to a picture of where the learner stands.
 *
 * Attempts must be supplied oldest first. Unmarked attempts are dropped rather
 * than counted as wrong: a question waiting on a teacher is not evidence of
 * failure, and treating it as one would quietly punish the learner for the
 * kinds of question that need marking, which are usually the harder ones.
 */
export function scoreObjective(
  objectiveId: string,
  attempts: Attempt[],
  now: Date = new Date(),
): ObjectiveMastery {
  const marked = attempts.filter(a => a.isCorrect !== null)
  const bare: ObjectiveMastery = {
    objectiveId,
    attempts: 0,
    correct: 0,
    accuracy: null,
    recent: null,
    daysSince: null,
    state: 'UNSEEN',
    hintRate: 0,
  }
  if (!marked.length) {
    // Attempted but nothing marked yet: seen, but still unjudged.
    if (attempts.length) {
      bare.daysSince = daysBetween(attempts[attempts.length - 1].at, now)
      bare.state = 'DEVELOPING'
    }
    return bare
  }

  const correct = marked.filter(a => a.isCorrect).length
  const hints = marked.filter(a => a.hintUsed).length

  // Weight from the end, so the most recent attempt carries a weight of one.
  let weighted = 0
  let weight = 0
  let w = 1
  for (let i = marked.length - 1; i >= 0; i--) {
    weighted += (marked[i].isCorrect ? 1 : 0) * w
    weight += w
    w *= DECAY
  }

  const recent = weight > 0 ? weighted / weight : null
  const daysSince = daysBetween(marked[marked.length - 1].at, now)

  return {
    objectiveId,
    attempts: marked.length,
    correct,
    accuracy: correct / marked.length,
    recent,
    daysSince,
    hintRate: hints / marked.length,
    state: stateOf(marked.length, recent, daysSince),
  }
}

function stateOf(n: number, recent: number | null, daysSince: number | null): MasteryState {
  if (recent === null) return 'UNSEEN'
  // One good answer is luck, not mastery. Two is not much better. Until there
  // is enough to judge, the honest answer is that they are still working on it.
  if (n < MIN_TO_JUDGE) return recent < SHAKY_BELOW ? 'SHAKY' : 'DEVELOPING'
  if (recent < SHAKY_BELOW) return 'SHAKY'
  if (recent >= SECURE_AT) {
    return daysSince !== null && daysSince >= STALE_DAYS ? 'STALE' : 'SECURE'
  }
  return 'DEVELOPING'
}

function daysBetween(iso: string, now: Date): number | null {
  const then = new Date(iso).getTime()
  if (!Number.isFinite(then)) return null
  return Math.max(0, Math.floor((now.getTime() - then) / 86_400_000))
}

/** Group a flat list of attempts by objective and score each one. */
export function masteryOf(
  attempts: Attempt[],
  objectiveIds: string[],
  now: Date = new Date(),
): ObjectiveMastery[] {
  const byObjective = new Map<string, Attempt[]>()
  for (const id of objectiveIds) byObjective.set(id, [])
  for (const a of attempts) {
    const list = byObjective.get(a.objectiveId)
    if (list) list.push(a)
  }
  for (const list of byObjective.values()) {
    list.sort((x, y) => x.at.localeCompare(y.at))
  }
  return objectiveIds.map(id => scoreObjective(id, byObjective.get(id) ?? [], now))
}

// ── What to do next ──────────────────────────────────────────────────────────

export type NextKind =
  /** Go over something they are getting wrong, with teaching first. */
  | 'RETEACH'
  /** Check something secured a while ago, before it is lost. */
  | 'REFRESH'
  /** Keep working on something in progress. */
  | 'CONTINUE'
  /** Move on to the next thing in the curriculum. */
  | 'ADVANCE'
  /** Nothing left in this course. */
  | 'DONE'

export interface NextStep {
  kind: NextKind
  objectiveId: string | null
  /**
   * Difficulty to serve, 1 to 5, matching the question bank's own bands.
   */
  level: number
  /** Said to the learner, so it is never a mystery why they got this. */
  because: string
}

export interface NextOptions {
  /**
   * The objective they have just been working on. It is never handed straight
   * back after a failure: being made to retry the thing you just got wrong,
   * with nothing explained in between, teaches nothing and is how a learner
   * decides they are bad at the subject. Reteaching comes first.
   */
  justAttempted?: string | null
  /** Whether teaching has already been shown for `justAttempted`. */
  taught?: boolean
}

/**
 * Choose what the learner should meet next.
 *
 * The order is deliberate and is the whole opinion of this module:
 *
 * 1. Something going wrong, because leaving it broken makes everything built
 *    on it harder, and the curriculum order will happily walk straight past it.
 * 2. Something secured long ago, before it is lost. Cheap to check, expensive
 *    to relearn.
 * 3. Something in progress, to finish it rather than leave a trail of
 *    half learned topics.
 * 4. Something new.
 *
 * `objectiveIds` must be in curriculum order, so that anything new is offered
 * in the order the syllabus intends.
 */
export function nextStep(
  mastery: ObjectiveMastery[],
  objectiveIds: string[],
  options: NextOptions = {},
): NextStep {
  const by = new Map(mastery.map(m => [m.objectiveId, m]))
  const inOrder = objectiveIds.map(id => by.get(id)).filter((m): m is ObjectiveMastery => !!m)
  const { justAttempted = null, taught = false } = options

  const held = (m: ObjectiveMastery) =>
    m.objectiveId === justAttempted && !taught

  // 1. Shaky, weakest first.
  const shaky = inOrder
    .filter(m => m.state === 'SHAKY')
    .sort((a, b) => (a.recent ?? 0) - (b.recent ?? 0))
  const reteach = shaky.find(m => !held(m)) ?? shaky[0]
  if (reteach) {
    // If this is the one they just got wrong and nothing has been explained
    // yet, teaching is the step, not another question.
    return {
      kind: 'RETEACH',
      objectiveId: reteach.objectiveId,
      level: 1,
      because: 'This one has been going wrong, so it is worth going over it again.',
    }
  }

  // 2. Gone cold, longest first.
  const stale = inOrder
    .filter(m => m.state === 'STALE')
    .sort((a, b) => (b.daysSince ?? 0) - (a.daysSince ?? 0))[0]
  if (stale) {
    return {
      kind: 'REFRESH',
      objectiveId: stale.objectiveId,
      level: levelFor(stale),
      because: 'You had this, but it has been a while. A quick check keeps it.',
    }
  }

  // 3. In progress.
  const developing = inOrder.filter(m => m.state === 'DEVELOPING' && !held(m))[0]
  if (developing) {
    return {
      kind: 'CONTINUE',
      objectiveId: developing.objectiveId,
      level: levelFor(developing),
      because: 'You are partway through this one.',
    }
  }

  // 4. Something new, in the order the syllabus intends.
  const fresh = inOrder.find(m => m.state === 'UNSEEN')
  if (fresh) {
    return {
      kind: 'ADVANCE',
      objectiveId: fresh.objectiveId,
      level: 1,
      because: 'Ready for something new.',
    }
  }

  return {
    kind: 'DONE',
    objectiveId: null,
    level: 3,
    because: 'Everything in this course is secure. Well done.',
  }
}

/**
 * How hard to make it.
 *
 * Pitched at the edge of what they can already do: comfortably right means
 * step up, struggling means step back, and the middle is left alone because
 * that is where the useful work happens.
 */
export function levelFor(m: ObjectiveMastery): number {
  if (m.recent === null) return 1
  // Leaning on hints is not the same as knowing it, so it does not earn a
  // step up even when the answers are right.
  const helped = m.hintRate > 0.5
  if (m.recent >= 0.9 && m.attempts >= MIN_TO_JUDGE && !helped) return 4
  if (m.recent >= SECURE_AT && !helped) return 3
  if (m.recent < SHAKY_BELOW) return 1
  return 2
}

/**
 * A whole course at a glance, for the learner's progress screen and for the
 * teacher looking at who needs help.
 */
export interface CoursePicture {
  secure: number
  developing: number
  shaky: number
  stale: number
  unseen: number
  /** Objectives going wrong, weakest first. What a teacher should look at. */
  needsHelp: string[]
}

export function pictureOf(mastery: ObjectiveMastery[]): CoursePicture {
  const count = (s: MasteryState) => mastery.filter(m => m.state === s).length
  return {
    secure: count('SECURE'),
    developing: count('DEVELOPING'),
    shaky: count('SHAKY'),
    stale: count('STALE'),
    unseen: count('UNSEEN'),
    needsHelp: mastery
      .filter(m => m.state === 'SHAKY')
      .sort((a, b) => (a.recent ?? 0) - (b.recent ?? 0))
      .map(m => m.objectiveId),
  }
}
