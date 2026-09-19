/**
 * Points, days, badges and goals.
 *
 * ── Everything here is derived, nothing is stored ───────────────────────────
 *
 * There is no XP ledger, no streak counter and no badge table. Every number on
 * the rewards screen is computed from the attempts the learner has already
 * made, which are recorded anyway because the mastery model needs them.
 *
 * That is a deliberate design rather than a shortcut, and it buys three things:
 *
 * 1. **It cannot drift.** A stored counter and a real record disagree
 *    eventually, and when they do the child is either cheated of points they
 *    earned or credited with points they did not. A derived number is always
 *    exactly what the work was.
 * 2. **It cannot be lost.** Clearing a separate rewards store would wipe a
 *    child's badges while their learning history sat there untouched. There is
 *    nothing separate to lose.
 * 3. **It cannot be gamed by the app.** Nothing can quietly hand out points to
 *    lift engagement, because there is no place to put them. Points only exist
 *    as a way of reading work that actually happened.
 *
 * ── The streak, and why it does not reset ───────────────────────────────────
 *
 * Both designs show a consecutive-day streak with a flame, and the convention
 * is that missing a day sends it to zero.
 *
 * This counts **days learned this week** instead. A child in Ghana with no data
 * for two days, or a fever, or a family funeral, has not failed at anything,
 * and an app that greets them on their return by deleting three weeks of work
 * has taught them that the safest thing is not to come back. The flame still
 * grows, it just never punishes.
 *
 * This is the one place the reference designs were not followed exactly, and it
 * is a decision about children rather than about taste.
 */

import type { Attempt } from './mastery'

/* ── points ───────────────────────────────────────────────────────────────── */

/**
 * What an answer is worth.
 *
 * A wrong answer still earns, at a third of the rate. A child who tried eight
 * questions and got three right has done more work than one who tried three
 * and got three right, and a scheme that pays nothing for a wrong answer
 * teaches them to stop when they are unsure. That is the opposite of what the
 * points are for.
 */
export const XP_RIGHT = 10
export const XP_TRIED = 3

/** Points from one set of attempts. */
export function xpFrom(attempts: Attempt[]): number {
  let xp = 0
  for (const a of attempts) {
    if (a.isCorrect === true) xp += XP_RIGHT
    /* An attempt awaiting marking is work done, so it pays the trying rate. */
    else if (a.isCorrect === false || a.isCorrect === null) xp += XP_TRIED
  }
  return xp
}

/* ── days ─────────────────────────────────────────────────────────────────── */

const DAY = 24 * 60 * 60 * 1000

/** Midnight local, as a number, for the day a timestamp falls in. */
function dayOf(iso: string): number {
  const d = new Date(iso)
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
}

function today(now = Date.now()): number {
  const d = new Date(now)
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
}

/** The Monday of the week a moment falls in. Ghanaian school weeks start there. */
export function weekStart(now = Date.now()): number {
  const t = today(now)
  const dow = new Date(t).getDay()
  /* getDay is 0 for Sunday, so Sunday belongs to the week that began six days
     earlier rather than to the one starting tomorrow. */
  const back = dow === 0 ? 6 : dow - 1
  return t - back * DAY
}

/** Which days of this week they have done something on. Monday first. */
export function daysThisWeek(attempts: Attempt[], now = Date.now()): boolean[] {
  const start = weekStart(now)
  const done = new Set(attempts.map(a => dayOf(a.at)))
  return Array.from({ length: 7 }, (_, i) => done.has(start + i * DAY))
}

/** How many days this week, which is what the flame counts. */
export function daysLearned(attempts: Attempt[], now = Date.now()): number {
  return daysThisWeek(attempts, now).filter(Boolean).length
}

/** Whether they have done anything at all today. */
export function learnedToday(attempts: Attempt[], now = Date.now()): boolean {
  const t = today(now)
  return attempts.some(a => dayOf(a.at) === t)
}

/* ── the daily goal ───────────────────────────────────────────────────────── */

/**
 * How much is a day's work.
 *
 * In answers rather than in minutes, because a clock rewards sitting still and
 * this should reward doing something. Smaller for the youngest: five answers is
 * already a long sitting for a four year old, and a goal a child cannot reach
 * is worse than no goal.
 */
export function goalFor(stage: string): number {
  if (stage === 'creche') return 5
  if (stage === 'primary') return 10
  return 15
}

export interface DailyGoal {
  done: number
  goal: number
  /** 0 to 1, capped, so a bar cannot overflow on a big day. */
  part: number
  met: boolean
  /** Points earned today. */
  xp: number
}

export function dailyGoal(attempts: Attempt[], stage: string, now = Date.now()): DailyGoal {
  const t = today(now)
  const mine = attempts.filter(a => dayOf(a.at) === t)
  const goal = goalFor(stage)
  const done = mine.length
  return {
    done,
    goal,
    part: goal > 0 ? Math.min(1, done / goal) : 0,
    met: done >= goal,
    xp: xpFrom(mine),
  }
}

/* ── badges ───────────────────────────────────────────────────────────────── */

export interface Badge {
  id: string
  /** What it is called, in words a child hears. */
  name: string
  /** What it took, said plainly, so it is never mysterious. */
  how: string
  /** Which drawing to use. */
  art: 'steps' | 'numbers' | 'science' | 'story' | 'flame' | 'star' | 'crown'
  /** Whether it has been earned, and how close they are if not. */
  earned: boolean
  /** 0 to 1 towards earning it. */
  part: number
}

/**
 * The badges, and what each one actually asks for.
 *
 * Every rule reads the same attempts everything else does, so a badge appears
 * the moment the work behind it is real and never before. Nothing here is
 * awarded for opening the app, logging in, or coming back, because a badge for
 * turning up is a badge for nothing and children work that out quickly.
 */
interface Rule {
  id: string
  name: string
  how: string
  art: Badge['art']
  /** Progress towards it, 0 to 1. */
  at: (a: Attempt[], subjectId?: string) => number
}

const rightCount = (attempts: Attempt[]): number =>
  attempts.filter(a => a.isCorrect === true).length

const topicsTouched = (attempts: Attempt[]): number =>
  new Set(attempts.map(a => a.objectiveId)).size

const RULES: Rule[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    how: 'Answered your first question',
    art: 'steps',
    at: a => Math.min(1, a.length / 1),
  },
  {
    id: 'ten-right',
    name: 'Ten Right',
    how: 'Got ten answers right',
    art: 'star',
    at: a => Math.min(1, rightCount(a) / 10),
  },
  {
    id: 'five-topics',
    name: 'Explorer',
    how: 'Worked on five different topics',
    art: 'science',
    at: a => Math.min(1, topicsTouched(a) / 5),
  },
  {
    id: 'fifty-right',
    name: 'Number Genius',
    how: 'Got fifty answers right',
    art: 'numbers',
    at: a => Math.min(1, rightCount(a) / 50),
  },
  {
    id: 'four-days',
    name: 'Four Days',
    how: 'Learned on four days in one week',
    art: 'flame',
    at: a => Math.min(1, daysLearned(a) / 4),
  },
  {
    id: 'twenty-topics',
    name: 'Story Lover',
    how: 'Worked on twenty different topics',
    art: 'story',
    at: a => Math.min(1, topicsTouched(a) / 20),
  },
  {
    id: 'hundred-right',
    name: 'Champion',
    how: 'Got a hundred answers right',
    art: 'crown',
    at: a => Math.min(1, rightCount(a) / 100),
  },
]

export function badgesFrom(attempts: Attempt[]): Badge[] {
  return RULES.map(r => {
    const part = r.at(attempts)
    return {
      id: r.id,
      name: r.name,
      how: r.how,
      art: r.art,
      earned: part >= 1,
      part,
    }
  })
}

/** Earned ones, newest rule last, for a row that shows what they have. */
export function earnedBadges(attempts: Attempt[]): Badge[] {
  return badgesFrom(attempts).filter(b => b.earned)
}

/**
 * The next badge worth showing, which is the closest unearned one.
 *
 * One, not a list. A screen showing every locked badge tells a child mostly
 * what they have not done.
 */
export function nextBadge(attempts: Attempt[]): Badge | null {
  const locked = badgesFrom(attempts).filter(b => !b.earned)
  if (!locked.length) return null
  return locked.sort((a, b) => b.part - a.part)[0]
}

/* ── the week's challenge ─────────────────────────────────────────────────── */

export interface Challenge {
  /** What to do, in one line. */
  what: string
  done: number
  target: number
  part: number
  met: boolean
}

/**
 * One challenge a week, the same for everybody, reset on Monday.
 *
 * Deliberately about volume of work rather than about being right. A challenge
 * to get twenty answers correct punishes the learner who is finding it hard,
 * which is exactly the learner a weekly nudge should be for.
 */
export function challengeFor(attempts: Attempt[], stage: string, now = Date.now()): Challenge {
  const start = weekStart(now)
  const mine = attempts.filter(a => Date.parse(a.at) >= start)
  const target = stage === 'creche' ? 20 : stage === 'primary' ? 40 : 60
  const done = Math.min(mine.length, target)
  return {
    what: `Answer ${target} questions this week`,
    done,
    target,
    part: target > 0 ? done / target : 0,
    met: done >= target,
  }
}

/* ── the whole picture, for a screen ──────────────────────────────────────── */

export interface Standing {
  xp: number
  daysLearned: number
  week: boolean[]
  goal: DailyGoal
  badges: Badge[]
  earned: number
  next: Badge | null
  challenge: Challenge
  /** Distinct topics they have worked on, which is the honest "lessons" count. */
  topics: number
}

export function standingOf(attempts: Attempt[], stage: string, now = Date.now()): Standing {
  const badges = badgesFrom(attempts)
  return {
    xp: xpFrom(attempts),
    daysLearned: daysLearned(attempts, now),
    week: daysThisWeek(attempts, now),
    goal: dailyGoal(attempts, stage, now),
    badges,
    earned: badges.filter(b => b.earned).length,
    next: nextBadge(attempts),
    challenge: challengeFor(attempts, stage, now),
    topics: topicsTouched(attempts),
  }
}

/* ── what has already been celebrated ─────────────────────────────────────── */

const SEEN = 'nexaedu.badges.seen'

/**
 * Badges that are earned but have not been cheered yet.
 *
 * This is the one thing in this module that touches storage, and it is worth
 * being precise about what is stored: not the award, which is still derived
 * from the attempts and cannot be lost, but only whether the child has already
 * seen the confetti for it. If this key is cleared the badges are all still
 * there; the worst case is one celebration replayed.
 */
export function freshBadges(badges: Badge[]): Badge[] {
  let seen: string[] = []
  try {
    seen = JSON.parse(localStorage.getItem(SEEN) ?? '[]')
  } catch {
    /* A private window, or a value somebody else wrote. Treat it as nothing
       seen: a repeated celebration is a better failure than a swallowed one. */
  }
  return badges.filter(b => b.earned && !seen.includes(b.id))
}

/** Mark these as cheered, so the moment happens once. */
export function ackBadges(badges: Badge[]): void {
  if (!badges.length) return
  try {
    const seen: string[] = JSON.parse(localStorage.getItem(SEEN) ?? '[]')
    const next = [...new Set([...seen, ...badges.map(b => b.id)])]
    localStorage.setItem(SEEN, JSON.stringify(next))
  } catch {
    /* Nothing to do. The celebration simply runs again next time. */
  }
}
