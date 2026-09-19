/**
 * What a grown-up sees about a learner, read from that learner's own work.
 *
 * ── Why this is its own module ──────────────────────────────────────────────
 *
 * There were two of these, and they disagreed.
 *
 * `Learners.tsx` (a parent's page) read each child against **their own**
 * subjects for **their own** year, from the syllabus layer. `School.tsx` read
 * every class against `MATHS_JHS2`, the one course written out in full,
 * whatever the class was actually studying. So a Basic 5 class was told it had
 * students stuck on "Ratio and proportion", a JHS 2 objective those children
 * have never been taught, and a head teacher had no way of knowing the line
 * was nonsense.
 *
 * That is the same bug twice, because the fix was applied to one copy. The
 * subject-art lookup had gone the same way. So the rule for this codebase: a
 * thing two screens both need to know is a module, not a function each of them
 * happens to have.
 *
 * ── Why it reads a learner rather than a class ──────────────────────────────
 *
 * A class has no work of its own. Everything a head teacher is told about
 * "JHS 2 Gold" is an aggregate of what its students did individually, and each
 * of those students may be sitting at a different year: a school moves a child
 * up without moving them between years on paper, and a repeating student is in
 * a class whose level is not their level.
 *
 * So the unit is the learner, always, and a class is a way of grouping them.
 * `classRead` below aggregates; it never judges a class against anything.
 */

import { subjectsFor } from './subjects'
import { allTopics, syllabusFor, topicsFor, type Topic } from './syllabus'
import { attemptsFor } from './accounts'
import type { LearnerProfile } from './learner'
import type { Attempt } from './mastery'

/** How long without a sitting before it is worth mentioning. */
export const QUIET_DAYS = 4

/**
 * Enough answers on one topic before calling it shaky.
 *
 * One wrong answer is not a difficulty, and naming it as one sends a parent to
 * sit a child down over nothing, or a head teacher to a teacher over nothing.
 */
export const MIN_TO_JUDGE = 3

/** Enough answers overall before a percentage means anything. */
export const MIN_FOR_RATE = 6

export interface Read {
  learner: LearnerProfile
  /** Topics in their year, across their subjects. */
  total: number
  /** How many they have worked on. */
  started: number
  answered: number
  right: number
  /** Null until there is enough to mean anything. */
  accuracy: number | null
  /** The topic going worst, and the subject it is in. */
  hardest: { topic: Topic, subject: string } | null
  /** Days since their last answer, or null if they have never answered. */
  days: number | null
}

/**
 * One learner, against their own year.
 *
 * `now` is passed in rather than read here so a caller can read the clock once
 * for a whole list. Reading it inside would make a `useMemo` around this
 * impure, and "3 days ago" does not need to tick.
 */
export function readOf(learner: LearnerProfile, now: number): Read {
  const attempts: Attempt[] = attemptsFor(learner.id)
  const marked = attempts.filter(a => a.isCorrect !== null)

  /* Their subjects, for their year. Falling back to the whole subject where
     their year holds nothing, as their own screens do. */
  const topics: Array<{ topic: Topic, subject: string }> = []
  for (const s of subjectsFor(learner.stage)) {
    const syllabus = syllabusFor(learner.stage, s.id)
    if (!syllabus) continue
    const mine = topicsFor(syllabus, learner.level)
    for (const t of (mine.length ? mine : allTopics(syllabus))) {
      topics.push({ topic: t, subject: s.name })
    }
  }

  const worked = new Set(marked.map(a => a.objectiveId))

  /* The topic going worst, judged only where they have answered enough. */
  const scored: Array<{ topic: Topic, subject: string, rate: number }> = []
  for (const row of topics) {
    const rows = marked.filter(a => a.objectiveId === row.topic.id)
    if (rows.length < MIN_TO_JUDGE) continue
    const rate = rows.filter(a => a.isCorrect === true).length / rows.length
    if (rate < 0.5) scored.push({ ...row, rate })
  }
  scored.sort((a, b) => a.rate - b.rate)

  const last = attempts.length ? attempts[attempts.length - 1].at : null
  const right = marked.filter(a => a.isCorrect === true).length

  return {
    learner,
    total: topics.length,
    started: topics.filter(t => worked.has(t.topic.id)).length,
    answered: marked.length,
    right,
    accuracy: marked.length >= MIN_FOR_RATE ? right / marked.length : null,
    hardest: scored.length ? { topic: scored[0].topic, subject: scored[0].subject } : null,
    days: last ? Math.floor((now - new Date(last).getTime()) / 86_400_000) : null,
  }
}

/**
 * Worst first, then whoever has been away longest.
 *
 * The ordering is the feature. A parent with four children and three minutes
 * reads the first two rows, and a head teacher with twenty classes reads the
 * first two cards. A list in the order people were added is a list nobody
 * finishes.
 */
export function byNeed(rows: Read[]): Read[] {
  return [...rows].sort((a, b) => {
    if (!!a.hardest !== !!b.hardest) return a.hardest ? -1 : 1
    return (b.days ?? 999) - (a.days ?? 999)
  })
}

/* ── a class, which is an aggregate and nothing more ──────────────────────── */

export interface ClassRead {
  rows: Read[]
  /** How many have ever answered anything. */
  active: number
  /**
   * The difficulty the most students share, and how many share it.
   *
   * This is the line the whole school page exists for. "Four in Basic 5 Gold
   * are stuck on ratio" is something a head can act on this week: reteach it,
   * or ask the teacher why. A class average of 71% is something nobody can do
   * anything with.
   *
   * Only counted where two or more students share it. One student struggling
   * is a conversation with that student, not a change to the week's teaching,
   * and putting it on the class card would make every class look like it was
   * failing.
   */
  shared: { title: string, subject: string, count: number } | null
  /** Students with a named difficulty of their own, shared or not. */
  struggling: number
  /** Students who have not answered anything for QUIET_DAYS or more. */
  quiet: number
  /** Students who have never answered anything at all. */
  neverStarted: number
}

export function classRead(rows: Read[]): ClassRead {
  const count = new Map<string, { title: string, subject: string, n: number }>()
  for (const r of rows) {
    if (!r.hardest) continue
    const key = r.hardest.topic.id
    const seen = count.get(key)
    if (seen) seen.n += 1
    else count.set(key, { title: r.hardest.topic.title, subject: r.hardest.subject, n: 1 })
  }

  const top = [...count.values()].sort((a, b) => b.n - a.n)[0] ?? null

  return {
    rows,
    active: rows.filter(r => r.answered > 0).length,
    shared: top && top.n >= 2 ? { title: top.title, subject: top.subject, count: top.n } : null,
    struggling: rows.filter(r => r.hardest).length,
    quiet: rows.filter(r => r.days !== null && r.days >= QUIET_DAYS).length,
    neverStarted: rows.filter(r => r.answered === 0).length,
  }
}

/* ── what a head teacher should look at first ─────────────────────────────── */

export interface Flag {
  /** Which class it is about. */
  classId: string
  className: string
  /** What is wrong, in a sentence somebody can act on. */
  what: string
  /** Whether it is about the teaching or about the setup. */
  kind: 'teaching' | 'setup'
  /** How many other things are also wrong with this class. */
  more: number
}

/**
 * The short list, ordered by what a head can do something about this week.
 *
 * ── One line per class ──────────────────────────────────────────────────────
 *
 * The first version listed everything it found, and on a school with two
 * classes it produced six rows, two of them about the same child: "Abena is
 * stuck on fractions" and "Abena has not worked for 8 days". The panel grew
 * longer than the classes it was summarising, which is the opposite of what a
 * triage list is for. A real school has twenty classes, and that version would
 * have produced sixty rows.
 *
 * So each class contributes its single most urgent line, and says how many
 * other things it has. The rest are on the class card, one scroll away.
 *
 * ── Teaching before setup ───────────────────────────────────────────────────
 *
 * A class where four students are stuck on the same thing is this week's
 * problem. A class with no teacher assigned is this term's paperwork. Both
 * belong here; only one of them is urgent.
 *
 * A class with nothing wrong produces nothing. An empty list is the honest
 * answer, and the page says so in words rather than showing an empty box.
 */
export function flagsFor(
  classes: Array<{ id: string, name: string, teacherId: string | null }>,
  reads: Map<string, ClassRead>,
): Flag[] {
  const out: Flag[] = []

  for (const k of classes) {
    const read = reads.get(k.id)
    if (!read) continue

    /* Built worst first, then only the head of the list is shown. */
    const found: Array<{ what: string, kind: 'teaching' | 'setup' }> = []

    if (read.shared) {
      found.push({
        kind: 'teaching',
        what: `${read.shared.count} stuck on ${read.shared.title}, in ${read.shared.subject}.`,
      })
    }

    if (read.rows.length && read.quiet === read.rows.length) {
      found.push({ kind: 'teaching', what: 'Nobody in this class has worked for days.' })
    } else if (read.quiet >= 2) {
      found.push({
        kind: 'teaching',
        what: `${read.quiet} have not worked for ${QUIET_DAYS} days or more.`,
      })
    }

    /* One student struggling on their own is not a shared difficulty, but it
       still belongs here: the first version only flagged class-level facts, so
       a head scanning the top of the page missed the one child in Basic 5 who
       had been failing fractions for a week. */
    if (!read.shared && read.struggling > 0) {
      const only = read.struggling === 1 ? read.rows.find(r => r.hardest) : null
      found.push({
        kind: 'teaching',
        what: only && only.hardest
          ? `${named(only.learner.name)} is stuck on ${only.hardest.topic.title}.`
          : `${read.struggling} students need help, on different things.`,
      })
    }

    if (read.quiet === 1) {
      const away = read.rows.find(r => r.days !== null && r.days >= QUIET_DAYS)
      if (away) {
        found.push({
          kind: 'teaching',
          what: `${named(away.learner.name)} has not worked for ${away.days} days.`,
        })
      }
    }

    /* A student who has never opened anything is a different problem from one
       who has stopped: usually an account handed out and never signed into. */
    if (read.neverStarted > 0 && read.neverStarted < read.rows.length) {
      const one = read.neverStarted === 1 ? read.rows.find(r => r.answered === 0) : null
      found.push({
        kind: 'setup',
        what: one
          ? `${named(one.learner.name)} has never answered anything.`
          : `${read.neverStarted} have never answered anything.`,
      })
    }

    if (!k.teacherId) found.push({ kind: 'setup', what: 'No teacher assigned.' })
    if (!read.rows.length) found.push({ kind: 'setup', what: 'No students in this class yet.' })

    if (!found.length) continue

    const [first, ...rest] = found
    out.push({
      classId: k.id,
      className: k.name,
      what: first.what,
      kind: first.kind,
      more: rest.length,
    })
  }

  /* Classes with a teaching problem first, whatever order the school keeps
     them in. A roll is alphabetical; a console is not. */
  return out.sort((a, b) => (a.kind === b.kind ? 0 : a.kind === 'teaching' ? -1 : 1))
}

/** A name, or something to call somebody who has not got one on file yet. */
function named(name: string): string {
  return name.trim() || 'One student'
}
