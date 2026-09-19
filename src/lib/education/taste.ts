/**
 * Which kind of game this learner actually likes, read from what they did.
 *
 * ── Why this did not exist, and what it cost ────────────────────────────────
 *
 * The platform composes a game from a grammar of seven verbs, and every topic
 * offers three to five of them, so the variety was real. It did not feel real,
 * for three reasons, and all three are in the code rather than in the child.
 *
 * 1. **Selection ignored the learner entirely.** `composeSpec` took a
 *    `learnerId` and used it for exactly one thing: a list of what had been
 *    played recently. Two children on the same topic got the same pool and a
 *    shuffle.
 *
 * 2. **It actively fought preference.** The rule was to prefer a verb they had
 *    not just done, on the grounds that a new thing to do beats the same thing
 *    in a new place. That is true for the second game and false by the tenth:
 *    a child who loves popping was systematically steered away from popping.
 *
 * 3. **Nothing was written down.** A game recorded an attempt carrying the
 *    topic, whether it was right, and the time. Not the verb. Not whether they
 *    finished. So even if selection had wanted to follow a preference, the
 *    evidence to follow did not exist.
 *
 * This file is the third one. Nothing can be personalised until something is
 * recorded, so recording is the whole of the first step.
 *
 * ── What "likes this game" honestly means ───────────────────────────────────
 *
 * Not accuracy. Being good at sorting is not the same as enjoying it, and a
 * platform that steers a child towards whatever they already score well on
 * makes itself easy and stops teaching. Accuracy is kept, because it is worth
 * knowing, and it is deliberately not what decides taste.
 *
 * What decides it is **whether they saw it through**. A four year old who is
 * enjoying a game finishes its rounds; one who is not wanders off, and leaving
 * is the clearest opinion a child who cannot read can give. Choosing it, when
 * a choice is offered, counts for more still, because it is the one signal
 * that is not inferred.
 *
 * ── The obligation this does not get to ignore ──────────────────────────────
 *
 * The verbs teach different things. `sort` is classification, `order` is
 * sequence, `balance` is comparison. A child served nothing but their
 * favourite never learns the others, so taste weights the choice and never
 * decides it. See `weightsFor`.
 */

import type { Goal, Subject } from './heavy'

/** One game, as it went. */
export interface Play {
  goal: Goal
  subject: Subject
  topicId: string
  /** Rounds the game was going to ask for. */
  offered: number
  /** Rounds they actually completed. Less than `offered` means they left. */
  finished: number
  right: number
  at: string
  /**
   * True when the learner picked this game rather than being handed it.
   *
   * Nothing sets this yet. It is here because letting a child choose is the
   * next step and the strongest signal there is, and because leaving room for
   * it now is cheaper than migrating a stored ledger later.
   */
  chose?: boolean
}

const KEY = 'nexaedu_plays'

/**
 * How many plays to keep.
 *
 * Enough to see a pattern, few enough that a taste formed months ago stops
 * outvoting what they like now. A child of five is a different child by six.
 */
const KEEP = 60

/** Plays before a verb's completion rate is worth acting on. */
export const MIN_PLAYS = 3

export function playsFor(learnerId: string): Play[] {
  try {
    const raw = localStorage.getItem(`${KEY}:${learnerId}`)
    const rows: unknown = raw ? JSON.parse(raw) : []
    if (!Array.isArray(rows)) return []
    return rows.filter((r): r is Play =>
      !!r && typeof r === 'object'
      && typeof (r as Play).goal === 'string'
      && typeof (r as Play).finished === 'number')
  } catch {
    /* Blocked storage means no taste, which falls back to the old behaviour
       rather than to no game. */
    return []
  }
}

/** Write one down. Newest first, so `recent` is the head of the list. */
export function recordPlay(learnerId: string, play: Play): void {
  try {
    const rows = [play, ...playsFor(learnerId)].slice(0, KEEP)
    localStorage.setItem(`${KEY}:${learnerId}`, JSON.stringify(rows))
  } catch {
    /* Losing a play costs personalisation, not correctness. */
  }
}

/* ── what it adds up to ───────────────────────────────────────────────────── */

export interface Taste {
  goal: Goal
  plays: number
  /** How many they saw through to the end. */
  sawThrough: number
  /** 0 to 1, or null until there are enough plays to mean anything. */
  completion: number | null
  /** Kept because it is worth knowing, and deliberately not what decides. */
  accuracy: number | null
  chosen: number
}

export function tasteOf(plays: Play[]): Taste[] {
  const by = new Map<Goal, Play[]>()
  for (const p of plays) {
    const rows = by.get(p.goal)
    if (rows) rows.push(p)
    else by.set(p.goal, [p])
  }

  const out: Taste[] = []
  for (const [goal, rows] of by) {
    /* Seeing it through means finishing the rounds it offered. A game cut
       short by the app rather than the child would look like abandonment, so
       `offered` is recorded per play rather than assumed. */
    const sawThrough = rows.filter(p => p.offered > 0 && p.finished >= p.offered).length
    const asked = rows.reduce((n, p) => n + p.finished, 0)
    const right = rows.reduce((n, p) => n + p.right, 0)
    out.push({
      goal,
      plays: rows.length,
      sawThrough,
      completion: rows.length >= MIN_PLAYS ? sawThrough / rows.length : null,
      accuracy: asked > 0 ? right / asked : null,
      chosen: rows.filter(p => p.chose).length,
    })
  }
  return out.sort((a, b) => b.plays - a.plays)
}

/**
 * The one they like best, or null when nothing has been played enough to say.
 *
 * Deliberately strict. Guessing a favourite from two plays and then serving it
 * for a month is worse than not guessing, because the child never gets the
 * chance to show you were wrong.
 */
export function favourite(plays: Play[]): Goal | null {
  const rated = tasteOf(plays).filter(t => t.completion !== null)
  if (!rated.length) return null
  const best = rated.sort((a, b) =>
    (b.completion ?? 0) - (a.completion ?? 0)
    || (b.chosen - a.chosen)
    || (b.plays - a.plays))[0]
  /* A verb they finish less than half the time is not a favourite, however
     many times it has been put in front of them. */
  return (best.completion ?? 0) >= 0.5 ? best.goal : null
}

/** The verb of the last game played, which must never be the next one. */
export function lastGoal(plays: Play[]): Goal | null {
  return plays.length ? plays[0].goal : null
}

/**
 * How much each candidate verb should be favoured.
 *
 * A weight rather than a winner, because taste weights the choice and does not
 * decide it. The numbers say: something they have never tried is worth
 * meeting, something they love is worth about three of something they do not,
 * and something they abandon still comes round occasionally, because the only
 * way to find out that a child has grown out of disliking sorting is to offer
 * sorting.
 *
 * Nothing here can reach zero. A verb with no weight is a verb that leaves the
 * platform, and these seven are the whole of what the games teach.
 */
export function weightsFor(candidates: Goal[], plays: Play[]): Map<Goal, number> {
  const taste = new Map(tasteOf(plays).map(t => [t.goal, t]))
  const out = new Map<Goal, number>()

  for (const goal of candidates) {
    const t = taste.get(goal)

    /* Never tried. Worth more than a favourite: a child cannot prefer
       something they have not met, and the first play of each verb is how the
       evidence starts existing at all. */
    if (!t || t.plays === 0) { out.set(goal, 4); continue }

    /* Tried, but not enough times to judge. Keep offering it. */
    if (t.completion === null) { out.set(goal, 2.5); continue }

    /* 1 at never finishing, 4 at always finishing, plus a lift for anything
       they have actually asked for. */
    const liked = 1 + t.completion * 3 + Math.min(t.chosen, 3) * 0.5
    out.set(goal, liked)
  }
  return out
}

/** Weighted pick. Falls back to the first candidate rather than to nothing. */
export function pickWeighted<T>(items: T[], weight: (item: T) => number): T | null {
  if (!items.length) return null
  const total = items.reduce((n, i) => n + Math.max(0.01, weight(i)), 0)
  let r = Math.random() * total
  for (const item of items) {
    r -= Math.max(0.01, weight(item))
    if (r <= 0) return item
  }
  return items[items.length - 1]
}

/**
 * One line for the grown up's screen.
 *
 * The same rule the rest of the platform keeps: a thing that quietly shapes
 * what a child is given says so out loud, or nobody can tell whether it is
 * working.
 */
export function tasteBrief(plays: Play[]): string {
  if (plays.length < MIN_PLAYS) {
    return 'Not enough games played yet to know which kind they like.'
  }
  const fav = favourite(plays)
  const rated = tasteOf(plays)
  const tried = rated.length

  if (!fav) {
    return `${plays.length} games played across ${tried} kinds, and no clear favourite`
      + ' yet, so they are still being offered a spread.'
  }
  const t = rated.find(r => r.goal === fav)
  const pct = Math.round((t?.completion ?? 0) * 100)
  return `They finish ${GOAL_NAMES[fav]} games ${pct}% of the time, more than any`
    + ' other kind, so more of those are offered. The other kinds still come'
    + ' round, because they each teach something different.'
}

const GOAL_NAMES: Record<Goal, string> = {
  collect: 'collecting',
  pop: 'tapping',
  sort: 'sorting',
  order: 'putting in order',
  match: 'matching',
  balance: 'balancing',
  build: 'building',
}
