/**
 * The test at the end of a topic, and what it unlocks.
 *
 * ── Why a topic needs one ───────────────────────────────────────────────────
 *
 * Reading a lesson and pressing on was all it took to reach the next topic.
 * Questions existed, under "Try some questions", and they were optional, which
 * meant a learner could cross a whole year's syllabus without answering
 * anything. Nobody finds out what they do not know that way, least of all the
 * learner, and the tutor had almost nothing to adapt to.
 *
 * So finishing a topic now means passing its test, and the way on to the next
 * topic runs through it.
 *
 * ── What it is not ──────────────────────────────────────────────────────────
 *
 * It is not a lock on the syllabus. A learner who arrives in the middle of a
 * year, or who already knows the work, can still open any topic from the
 * outline: hard locking would trap somebody who joined in March behind nine
 * topics they do not need. What is gated is the path forward from a lesson,
 * which is the path almost everyone takes.
 *
 * `promotion.ts` is the other examination, at the end of a year. This one is
 * at the end of a topic, and they share a pass mark so the product has one
 * rule rather than two.
 */

import { PASS } from './promotion'

export { PASS }

/** What happened the last time this topic's test was sat. */
export interface TopicMark {
  right: number
  total: number
  /** ISO. */
  at: string
}

const BAG = 'lp.topic.'

const key = (learnerId: string) => BAG + learnerId

type Bag = Record<string, TopicMark>

function read(learnerId: string): Bag {
  try {
    const raw = localStorage.getItem(key(learnerId))
    if (!raw) return {}
    const got: unknown = JSON.parse(raw)
    return got && typeof got === 'object' ? got as Bag : {}
  } catch {
    /* Private browsing, blocked storage, or something else wrote here. An
       empty bag means the tests are unsat, which is recoverable; throwing
       would take the lesson screen down with it. */
    return {}
  }
}

/** The best sitting of this topic's test, or null if it has never been sat. */
export function topicMark(learnerId: string, topicId: string): TopicMark | null {
  return read(learnerId)[topicId] ?? null
}

/** Whether this topic has been passed, so the next one is open. */
export function topicPassed(learnerId: string, topicId: string): boolean {
  const m = topicMark(learnerId, topicId)
  return !!m && m.total > 0 && m.right / m.total >= PASS
}

/**
 * Record a sitting. The better of the two is kept.
 *
 * Keeping the best rather than the latest matters: a learner who passed and
 * then pressed "more questions" out of interest, and did worse on a harder
 * set, has not become less ready for the next topic. Taking the latest would
 * close a door they had already opened, which teaches people not to practise.
 */
export function recordTopic(
  learnerId: string, topicId: string, right: number, total: number,
): TopicMark {
  const bag = read(learnerId)
  const had = bag[topicId]
  const now: TopicMark = { right, total, at: new Date().toISOString() }

  const better = !had || had.total === 0
    || (right / total) > (had.right / had.total)

  const keep = better ? now : had
  bag[topicId] = keep
  try {
    localStorage.setItem(key(learnerId), JSON.stringify(bag))
  } catch { /* Nothing to be done here, and the score is still on screen. */ }
  return keep
}

/** How many of these topics have been passed. For an outline's heading. */
export function passedCount(learnerId: string, topicIds: string[]): number {
  const bag = read(learnerId)
  return topicIds.filter(id => {
    const m = bag[id]
    return !!m && m.total > 0 && m.right / m.total >= PASS
  }).length
}
