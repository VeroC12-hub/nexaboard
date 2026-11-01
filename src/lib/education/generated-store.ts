/**
 * Where generated curriculum waits for somebody to read it.
 *
 * `generated.ts` turns model output into a `Taught` or a `Syllabus` and
 * guarantees it is structurally sound. This module keeps it until a person has
 * approved it, and puts the approved ones into the registries the app reads.
 *
 * ── Why it is stored outside the code files ─────────────────────────────────
 *
 * Everything in `library/lessons/` was written by hand and lives in the
 * repository, which is right for material a person authored. Generated
 * material cannot go there: a school adding a subject on a Tuesday cannot wait
 * for a deployment, and nobody is going to review a pull request of four
 * hundred lessons. So it is data, held on the device and synced like
 * everything else a learner owns.
 *
 * ── Why approval is a separate act from generation ──────────────────────────
 *
 * `taughtFor` already refuses an unapproved lesson, and `generated.ts` already
 * refuses to let the model claim approval. This module closes the loop: the
 * only thing that can approve a lesson is a call to `approve`, made by a
 * screen a person was looking at. A school's own teachers approve their own
 * subjects, which is what lets this scale past the few people who built it.
 */

import { isRegistered, reteach, teach } from './taught-registry'
import { register } from './syllabus'
import type { Syllabus } from './syllabus'
import type { Taught } from './taught'

const LESSONS = 'nexaedu_generated_lessons_v1'
const OUTLINES = 'nexaedu_generated_outlines_v1'

/**
 * Who a generated lesson is for.
 *
 * SHARED is the school case this module was built for: a teacher generated a
 * lesson for a class, and it waits for a teacher to read it before any child
 * sees it.
 *
 * PERSONAL is one learner asking the tutor for a lesson for themselves. The
 * difference is not a permission level, it is that there is nobody else in
 * the room. See the note on `acceptOwn`.
 */
export type Audience = 'SHARED' | 'PERSONAL'

/** What is known about a generated lesson besides the lesson itself. */
export interface Pending {
  taught: Taught
  /** When it was generated, so a reviewer can see what is stale. */
  at: string
  /** Which curriculum it was written for. */
  curriculum: string
  /** The year group it was written for, which a reviewer needs to judge it. */
  year: string
  /**
   * Whose lesson this is.
   *
   * Optional, and read as SHARED when missing, because every row written
   * before this field existed was a school's.
   */
  audience?: Audience
  /** The learner who asked for it. PERSONAL rows only, and required there. */
  forLearner?: string
  /** Who approved it, and when. Absent until somebody has. */
  approvedBy?: string
  approvedAt?: string
}

/** A row's audience, with the default applied. */
const audienceOf = (p: Pending): Audience => p.audience ?? 'SHARED'

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch { return fallback }
}

function write(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* full or blocked */ }
}

/* ── lessons ──────────────────────────────────────────────────────────────── */

export const allPending = (): Pending[] => read<Pending[]>(LESSONS, [])

/**
 * Everything still waiting for a teacher to read it, newest first.
 *
 * PERSONAL rows are excluded, and that exclusion is the point of this change
 * rather than an optimisation. A learner's own lesson is not in a teacher's
 * queue, because the learner is the only person who is going to read it and
 * the only person it is for. Putting it here would ask a teacher to approve
 * material for a child who is not theirs and has already read it.
 */
export const awaitingReview = (): Pending[] =>
  allPending().filter(p => audienceOf(p) === 'SHARED' && !p.taught.approved).reverse()

export const reviewed = (): Pending[] =>
  allPending().filter(p => audienceOf(p) === 'SHARED' && p.taught.approved)

/**
 * Keep a freshly generated lesson.
 *
 * Replaces any earlier generated one for the same topic: a second generation
 * means the first was not good enough, and keeping both would only ask a
 * reviewer to choose between two things neither of them asked for. A lesson
 * already approved is left alone, because approval is the expensive part and
 * regenerating must not quietly throw it away.
 */
export function keep(p: Pending): Pending[] {
  const rows = allPending()
  /* Scoped by owner as well as by topic. A school's Photosynthesis and a
     learner's own Photosynthesis are two different lessons for two different
     readers, and the older code would have had the second silently replace
     the first. */
  const mine = (r: Pending) =>
    r.taught.topicId === p.taught.topicId
    && audienceOf(r) === audienceOf(p)
    && r.forLearner === p.forLearner
  const existing = rows.find(mine)
  if (existing?.taught.approved) return rows
  const next = [...rows.filter(r => !mine(r)), p]
  write(LESSONS, next)
  return next
}

/* ── a learner's own lessons ──────────────────────────────────────────────── */

/**
 * The lesson this learner asked the tutor for and then said was fine.
 *
 * ── Why this exists at all ──────────────────────────────────────────────────
 *
 * Approval was built for a school, and for a school it is right: a head
 * teacher vouches for what their pupils are shown, so `taughtFor` refuses
 * anything unread and the material waits.
 *
 * For somebody who subscribes on their own it was not a safeguard, it was a
 * dead end. There is no teacher. The lesson they had just asked for went into
 * a queue to be read by a person who does not exist, the topic fell back to
 * the primer, and nothing would ever release it. The one case the approval
 * gate could not describe was the case of one person learning by themselves.
 *
 * So for a personal lesson the learner is the approver, which is not a
 * loosening of the rule but the same rule applied honestly: the person who
 * vouches for the material is the person it is for. They read it, they can
 * ask for it again until it suits them, and when they say it suits them it is
 * saved and served back to them next time.
 *
 * What approval still does is gate sharing. A personal lesson never enters
 * the registry the whole platform reads, so accepting it cannot put it in
 * front of anybody else. That is why this is a lookup of its own rather than
 * a relaxation of `taughtFor`.
 */
export function ownTaughtFor(topicId: string, learnerId: string): Taught | null {
  const row = allPending().find(r =>
    audienceOf(r) === 'PERSONAL'
    && r.forLearner === learnerId
    && r.taught.topicId === topicId
    && r.taught.approved)
  return row ? row.taught : null
}

/** The draft this learner is looking at but has not yet said yes to. */
export function ownDraftFor(topicId: string, learnerId: string): Taught | null {
  const row = allPending().find(r =>
    audienceOf(r) === 'PERSONAL'
    && r.forLearner === learnerId
    && r.taught.topicId === topicId
    && !r.taught.approved)
  return row ? row.taught : null
}

/**
 * Keep a lesson the tutor wrote for one learner, unaccepted.
 *
 * Replaces whatever draft was there, because asking again means the last one
 * did not suit and keeping both would only ask the learner to choose between
 * two things they did not want. An accepted lesson is left alone: saying yes
 * is the deliberate act here, and regenerating must not quietly undo it.
 */
export function keepOwn(p: Omit<Pending, 'audience'> & { forLearner: string }): void {
  keep({ ...p, audience: 'PERSONAL' })
}

/**
 * The learner says this one suits them.
 *
 * The only thing that saves a personal lesson. Deliberately not `approve`:
 * that word is a teacher's act with a teacher's consequences, and this one
 * reaches nobody but the person who made it.
 */
export function acceptOwn(topicId: string, learnerId: string): boolean {
  const rows = allPending()
  const row = rows.find(r =>
    audienceOf(r) === 'PERSONAL'
    && r.forLearner === learnerId
    && r.taught.topicId === topicId)
  if (!row) return false
  row.taught = { ...row.taught, approved: true }
  row.approvedBy = learnerId
  row.approvedAt = new Date().toISOString()
  write(LESSONS, rows)
  /* Not registered. The registry is what every learner on the device reads,
     and this lesson is one person's. `ownTaughtFor` serves it instead. */
  return true
}

/** The learner says it does not suit. Dropped, and the tutor can try again. */
export function discardOwn(topicId: string, learnerId: string): void {
  write(LESSONS, allPending().filter(r => !(
    audienceOf(r) === 'PERSONAL'
    && r.forLearner === learnerId
    && r.taught.topicId === topicId)))
}

/**
 * A person has read this and says it may be taught.
 *
 * The only way `approved` becomes true anywhere in the platform. Registering
 * it here means it is served from this moment without a reload, because
 * `taughtFor` reads the same registry the written lessons are in.
 */
export function approve(topicId: string, by: string): boolean {
  const rows = allPending()
  const row = rows.find(r => r.taught.topicId === topicId)
  if (!row) return false

  row.taught = { ...row.taught, approved: true }
  row.approvedBy = by
  row.approvedAt = new Date().toISOString()
  write(LESSONS, rows)
  /* `reteach` and not `teach`: if this topic was already registered it is the
     same lesson in its unapproved form, and replacing it is the whole point of
     approving. A collision between two different lessons cannot arise here. */
  reteach(row.taught)
  return true
}

/**
 * A person has read this and says it may not be taught.
 *
 * Removed rather than flagged. A rejected lesson has no use: the topic falls
 * back to the live tutor exactly as if nothing had been generated, and keeping
 * the text would only invite somebody to approve it later without rereading.
 */
export function reject(topicId: string): void {
  write(LESSONS, allPending().filter(r => r.taught.topicId !== topicId))
}

/* ── outlines ─────────────────────────────────────────────────────────────── */

export interface PendingOutline {
  syllabus: Syllabus
  at: string
  approvedBy?: string
  approvedAt?: string
}

export const allPendingOutlines = (): PendingOutline[] =>
  read<PendingOutline[]>(OUTLINES, [])

export function keepOutline(p: PendingOutline): void {
  const rows = allPendingOutlines()
  const key = `${p.syllabus.curriculum}:${p.syllabus.stage}:${p.syllabus.subjectId}`
  const rest = rows.filter(r =>
    `${r.syllabus.curriculum}:${r.syllabus.stage}:${r.syllabus.subjectId}` !== key
    || Boolean(r.approvedAt))
  write(OUTLINES, [...rest, p])
}

/**
 * An outline a person has read.
 *
 * An outline is lower stakes than a lesson, because it names topics rather
 * than teaching them, but it still decides what a child is offered, so it goes
 * through the same gate.
 */
export function approveOutline(curriculum: string, stage: string, subjectId: string, by: string): boolean {
  const rows = allPendingOutlines()
  const row = rows.find(r =>
    r.syllabus.curriculum === curriculum
    && r.syllabus.stage === stage
    && r.syllabus.subjectId === subjectId)
  if (!row) return false
  row.approvedBy = by
  row.approvedAt = new Date().toISOString()
  write(OUTLINES, rows)
  register(row.syllabus)
  return true
}

/* ── putting the approved ones back on startup ────────────────────────────── */

/**
 * Load everything already approved into the registries.
 *
 * Called once when the app starts. Without it, approved material would be
 * served until the tab was closed and then silently disappear, which is the
 * kind of fault that looks like the app forgetting rather than like a bug.
 *
 * A written lesson always wins: `library/lessons/` is authored material and a
 * generated lesson for the same topic must not displace it.
 */
export function loadApproved(): { lessons: number, outlines: number } {
  let lessons = 0
  for (const row of allPending()) {
    if (!row.taught.approved) continue
    /* A personal lesson is served by `ownTaughtFor` to the one learner it
       belongs to. Registering it here would hand one learner's material to
       everybody who uses the device, which is the single thing accepting it
       must not be able to do. */
    if (audienceOf(row) === 'PERSONAL') continue
    if (isRegistered(row.taught.topicId)) continue
    teach(row.taught)
    lessons++
  }

  let outlines = 0
  for (const row of allPendingOutlines()) {
    if (!row.approvedAt) continue
    register(row.syllabus)
    outlines++
  }

  return { lessons, outlines }
}
