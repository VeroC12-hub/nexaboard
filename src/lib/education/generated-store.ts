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

/** What is known about a generated lesson besides the lesson itself. */
export interface Pending {
  taught: Taught
  /** When it was generated, so a reviewer can see what is stale. */
  at: string
  /** Which curriculum it was written for. */
  curriculum: string
  /** The year group it was written for, which a reviewer needs to judge it. */
  year: string
  /** Who approved it, and when. Absent until somebody has. */
  approvedBy?: string
  approvedAt?: string
}

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

/** Everything still waiting to be read, newest first. */
export const awaitingReview = (): Pending[] =>
  allPending().filter(p => !p.taught.approved).reverse()

export const reviewed = (): Pending[] => allPending().filter(p => p.taught.approved)

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
  const existing = rows.find(r => r.taught.topicId === p.taught.topicId)
  if (existing?.taught.approved) return rows
  const rest = rows.filter(r => r.taught.topicId !== p.taught.topicId)
  const next = [...rest, p]
  write(LESSONS, next)
  return next
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
