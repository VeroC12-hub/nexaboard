/**
 * What a learner has earned, and when.
 *
 * ── Why this exists, when `rewards.ts` says nothing is stored ───────────────
 *
 * `rewards.ts` derives every number from the answers a learner has given, and
 * the argument for that is good: a derived number cannot drift from the real
 * record, cannot be lost while the learning history survives, and cannot be
 * quietly inflated. All of that still holds and none of it is being undone.
 *
 * What it cannot do is pay for anything that is not a question. A learner who
 * read three lessons had done a morning's work and was shown nought points,
 * because nothing in the system records that reading happened. For a child,
 * that is the app telling them their morning did not count.
 *
 * So answers stay derived and everything else is recorded here. The two are
 * added at the end. Nothing is recorded twice, and that rule decides what
 * belongs in this file: a game already records an attempt for every answer
 * given in it, so it is paid through `rewards.ts` and must never also be
 * awarded here, or the same round would pay twice. Reading a lesson records
 * nothing anywhere, which is why it is the one kind awarded today.
 *
 * ── Why it is a ledger rather than a running total ──────────────────────────
 *
 * A single number can only be trusted by whoever wrote it. An entry per
 * earning says what was earned, for what, and when, so a parent can see that
 * the hundred points came from four lessons and six right answers on Tuesday,
 * and a school can check a claim rather than believe it. It also means today,
 * this week and all time are the same query at different widths.
 *
 * ── Why awards are idempotent ───────────────────────────────────────────────
 *
 * Finishing the same lesson twice is not twice the work. Each entry carries
 * the thing it was for, and awarding the same kind for the same thing again
 * is ignored. Without that, a child would learn that the way to earn is to
 * open and close one lesson repeatedly, which is the exact behaviour points
 * are supposed to discourage.
 */

/**
 * What earned the points.
 *
 * Answers are deliberately absent: see above. `film` is here and unused
 * because watching is the one other thing a learner can finish that leaves no
 * attempt behind, so it will need a rate the day a film reports that it ended;
 * nothing awards it yet and nothing should pretend otherwise.
 */
export type EarnKind = 'lesson' | 'film'

export interface Earning {
  /** ISO, so it sorts and reads. */
  at: string
  kind: EarnKind
  /** The topic, game or film it was for. One award per kind per thing. */
  ref: string
  xp: number
}

/**
 * What each kind is worth.
 *
 * A lesson is worth more than a right answer, because reading one and
 * understanding it is more work than answering one question about it, and the
 * old scheme paid nothing at all for it. A film is worth least: watching is
 * the most passive thing in the app and the easiest to leave running.
 */
export const XP_FOR: Record<EarnKind, number> = {
  lesson: 15,
  film: 5,
}

const keyFor = (learnerId: string) => `nexaedu_points:${learnerId}`

/**
 * One array per learner, kept so the same reference comes back every time.
 *
 * A screen reads this during render, and React requires a render to be pure
 * and to see a stable value: parsing the store afresh on every call returns
 * a new array each time, which both fails that rule and, through
 * `useSyncExternalStore`, loops forever. So the parse happens once and the
 * cache is updated by `award`, which is the only thing that changes it.
 */
const cache = new Map<string, Earning[]>()

const listeners = new Set<() => void>()

/** Told when points are awarded, so a screen can show them immediately. */
export function onPoints(listen: () => void): () => void {
  listeners.add(listen)
  return () => { listeners.delete(listen) }
}

const EMPTY: Earning[] = []

export function earningsFor(learnerId: string): Earning[] {
  if (!learnerId) return EMPTY
  const had = cache.get(learnerId)
  if (had) return had
  let read: Earning[] = EMPTY
  try {
    const raw = localStorage.getItem(keyFor(learnerId))
    if (raw) read = JSON.parse(raw) as Earning[]
  } catch { /* blocked or corrupt: no points rather than no app */ }
  cache.set(learnerId, read)
  return read
}

/**
 * Record an earning, once.
 *
 * Returns what was added, or null when this thing has already paid, so a
 * caller can celebrate only a real award. Never throws: a full or blocked
 * storage must not stop a lesson being read, and the cost of losing an entry
 * is some points, which is not worth an error screen to a child.
 */
export function award(
  learnerId: string,
  kind: EarnKind,
  ref: string,
): Earning | null {
  if (!learnerId || !ref) return null
  const had = earningsFor(learnerId)
  if (had.some(e => e.kind === kind && e.ref === ref)) return null

  const made: Earning = {
    at: new Date().toISOString(),
    kind,
    ref,
    xp: XP_FOR[kind],
  }
  const next = [...had, made]
  try {
    localStorage.setItem(keyFor(learnerId), JSON.stringify(next))
  } catch { /* full or blocked: the points are still shown this session */ }
  cache.set(learnerId, next)
  for (const listen of listeners) listen()
  return made
}

/** Points from a set of earnings. */
export const xpOf = (earnings: Earning[]): number =>
  earnings.reduce((total, e) => total + e.xp, 0)

/* No day or week helpers here on purpose. `rewards.ts` already decides what
   a day is, local midnight to local midnight, and it filters these entries
   with that. A second notion of a day in this file would eventually disagree
   with it, and a child would lose points at whichever boundary moved. */
