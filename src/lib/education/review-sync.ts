/**
 * Getting a school's review work off the one browser it was done in.
 *
 * `generated-store.ts` and `curriculum-store.ts` keep three things on the
 * device: the curricula a school has defined, the lessons the tutor has
 * written for it, and which of them a person has passed. All three were only
 * ever on the device, and for the third one that was close to negligent.
 * Approving a lesson is the most expensive act on this platform. It cannot be
 * automated, it is the whole of what a school's teachers contribute, and it
 * was kept in the least durable place in the system: a head teacher who
 * approved forty lessons on the staff room laptop signed in on a phone and saw
 * none of them, and clearing site data threw the lot away silently.
 *
 * ── Why this is a cache and an outbox rather than a rewrite ─────────────────
 *
 * The same constraint that shaped `accounts.ts`, for the same reason, and it
 * is worth restating because it is the only thing that decided the design
 * here. Every read in both stores is synchronous and is called straight from
 * render: `taughtFor` is a map lookup inside a `useMemo`, `schoolCurricula`
 * is read while a screen lays itself out. Making those async would have turned
 * a storage change into a rewrite of five screens.
 *
 * So the device store stays, demoted from the source of truth to a cache and
 * an outbox. Reads answer from it at once, writes go to it at once and are
 * queued for the server, and the queue drains whenever there is a connection.
 * That is also exactly the behaviour a school on an intermittent connection
 * needs: a teacher approves a lesson, it is approved on their screen, and the
 * server finds out when it can.
 *
 * ── Why this module knows nothing about the stores ──────────────────────────
 *
 * It takes rows and it returns rows. The stores call into it when something
 * changes, and something else, on sign in, hands what it fetched back to them.
 * Only the types are shared, and a type import is erased, so there is no cycle
 * at runtime and this file can be reasoned about on its own.
 */

import { supabase } from '../supabase'
import { uuidFor } from './accounts'
import type { Pending, PendingOutline } from './generated-store'
import type { Curriculum } from './syllabus'
import type { Taught } from './taught'
import type { Syllabus } from './syllabus'

const OUTBOX = 'nexaedu_review_outbox_v1'

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch { return fallback }
}

function write(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* full or blocked */ }
}

/* ── the outbox ──────────────────────────────────────────────────────────── */

/**
 * One thing to send.
 *
 * The whole row travels in the job rather than a reference to it. A job
 * holding only an id would have to read the store back when it drains, which
 * is what would make this module depend on the stores it serves, and it would
 * send whatever the row had become by then rather than what was approved.
 */
type Job =
  | { what: 'lesson', row: Pending }
  | { what: 'lesson-gone', topicId: string, forLearner?: string }
  | { what: 'outline', row: PendingOutline }
  | { what: 'curriculum', row: Curriculum }

const jobs = () => read<Job[]>(OUTBOX, [])

/** The key a job is deduplicated on: one pending write per thing. */
function keyOf(j: Job): string {
  if (j.what === 'lesson') {
    return `lesson:${j.row.taught.topicId}:${j.row.forLearner ?? ''}`
  }
  if (j.what === 'lesson-gone') return `lesson:${j.topicId}:${j.forLearner ?? ''}`
  if (j.what === 'outline') {
    const s = j.row.syllabus
    return `outline:${s.curriculum}:${s.stage}:${s.subjectId}`
  }
  return `curriculum:${j.row.id}`
}

/**
 * Note that something needs sending, and try to send it now.
 *
 * Deduplicated, because these are all "make the server match this record"
 * rather than deltas. A teacher generating a lesson, reading it and approving
 * it is three writes to one row and should leave once.
 *
 * A deletion replaces a pending write for the same row rather than queueing
 * behind it: a lesson that was rejected must not be sent first and removed
 * afterwards, because the window between the two is a window in which it
 * exists on the server.
 */
function queue(job: Job) {
  const key = keyOf(job)
  write(OUTBOX, [...jobs().filter(j => keyOf(j) !== key), job])
  void flushReview()
}

export const queueLesson = (row: Pending) => queue({ what: 'lesson', row })
export const queueLessonGone = (topicId: string, forLearner?: string) =>
  queue({ what: 'lesson-gone', topicId, forLearner })
export const queueOutline = (row: PendingOutline) => queue({ what: 'outline', row })
export const queueCurriculum = (row: Curriculum) => queue({ what: 'curriculum', row })

/** How many writes are still waiting, for a screen that wants to say so. */
export const unsentReviewCount = () => jobs().length

/* ── sending ─────────────────────────────────────────────────────────────── */

/** The signed in account, or null when there is nobody to write as. */
async function me(): Promise<string | null> {
  try {
    const { data } = await supabase.auth.getSession()
    return data?.session?.user?.id ?? null
  } catch { return null }
}

/**
 * The learner a personal row belongs to, as a database id.
 *
 * Learner ids in the app are the codes `accounts.ts` issues, and the column is
 * a foreign key to `auth.users`, so the two have to be mapped. A learner this
 * device has no uuid for cannot be written yet, and the job stays in the
 * outbox until they have one rather than being dropped.
 */
const dbLearner = (code: string | undefined): string | null =>
  code ? uuidFor(code) : null

async function putLesson(row: Pending, owner: string): Promise<boolean> {
  const personal = (row.audience ?? 'SHARED') === 'PERSONAL'
  const forLearner = personal ? dbLearner(row.forLearner) : null
  /* A personal row with no mapped learner is not a failure to report, it is a
     write that cannot be made yet. Left in the outbox. */
  if (personal && !forLearner) return false

  const { error } = await supabase.from('edu_generated_lesson')
    .upsert({
      owner_id: owner,
      audience: personal ? 'PERSONAL' : 'SHARED',
      for_learner: forLearner,
      topic_id: row.taught.topicId,
      curriculum: row.curriculum,
      year: row.year,
      payload: row.taught,
      approved: Boolean(row.taught.approved),
      approved_by: row.approvedBy ?? null,
      approved_at: row.approvedAt ?? null,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'owner_id,audience,for_learner,curriculum,topic_id' })
  return !error
}

async function dropLesson(topicId: string, forLearner: string | undefined, owner: string) {
  let q = supabase.from('edu_generated_lesson')
    .delete()
    .eq('owner_id', owner)
    .eq('topic_id', topicId)
  q = forLearner
    ? q.eq('for_learner', dbLearner(forLearner) ?? '')
    : q.is('for_learner', null)
  const { error } = await q
  return !error
}

async function putOutline(row: PendingOutline, owner: string): Promise<boolean> {
  const s = row.syllabus
  const { error } = await supabase.from('edu_generated_outline')
    .upsert({
      owner_id: owner,
      curriculum: s.curriculum,
      stage: s.stage,
      subject_id: s.subjectId,
      payload: s,
      approved_by: row.approvedBy ?? null,
      approved_at: row.approvedAt ?? null,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'owner_id,curriculum,stage,subject_id' })
  return !error
}

async function putCurriculum(c: Curriculum, owner: string): Promise<boolean> {
  const { error } = await supabase.from('edu_curriculum')
    .upsert({
      owner_id: owner,
      curriculum_id: c.id,
      name: c.name,
      note: c.note,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'owner_id,curriculum_id' })
  return !error
}

let flushing = false

/**
 * Send whatever is waiting.
 *
 * Never throws and never tells anybody. A write that cannot leave the device
 * stays in the outbox and the next attempt carries it, which is what a school
 * on a bad connection needs: the approval is on their screen either way.
 */
export async function flushReview(): Promise<void> {
  if (flushing) return
  const waiting = jobs()
  if (!waiting.length) return

  const owner = await me()
  /* Nobody signed in, or no connection to ask. The outbox is left alone: this
     is the ordinary offline case, not an error. */
  if (!owner) return

  flushing = true
  const failed: Job[] = []
  try {
    for (const job of waiting) {
      let ok = false
      try {
        if (job.what === 'lesson') ok = await putLesson(job.row, owner)
        else if (job.what === 'lesson-gone') {
          ok = await dropLesson(job.topicId, job.forLearner, owner)
        } else if (job.what === 'outline') ok = await putOutline(job.row, owner)
        else ok = await putCurriculum(job.row, owner)
      } catch { ok = false }
      if (!ok) failed.push(job)
    }
  } finally {
    write(OUTBOX, failed)
    flushing = false
  }
}

/* ── reading it back ─────────────────────────────────────────────────────── */

export interface PulledReview {
  lessons: Pending[]
  outlines: PendingOutline[]
  curricula: Curriculum[]
}

/**
 * Everything this account owns, for merging into the device store.
 *
 * Called on sign in and on resume, not per screen. Returns null when there is
 * nobody signed in or the request failed, which the caller treats as "nothing
 * new to say" rather than as "there is nothing": the difference matters,
 * because emptying the device store on a failed fetch would delete a school's
 * work for them.
 */
export async function pullReview(): Promise<PulledReview | null> {
  const owner = await me()
  if (!owner) return null

  try {
    const [lessons, outlines, curricula] = await Promise.all([
      supabase.from('edu_generated_lesson')
        .select('audience, for_learner, topic_id, curriculum, year, payload, '
          + 'approved, approved_by, approved_at, created_at'),
      supabase.from('edu_generated_outline')
        .select('payload, approved_by, approved_at, created_at'),
      supabase.from('edu_curriculum').select('curriculum_id, name, note'),
    ])
    if (lessons.error || outlines.error || curricula.error) return null

    /* Named row shapes, the same way `pullAttempts` does it in `accounts.ts`.
       The client is not generated from the schema here, so a select comes
       back as a union with an error shape and every field read is refused
       until the row is given a name. */
    const lessonRows = (lessons.data ?? []) as unknown as {
      audience: string | null
      for_learner: string | null
      topic_id: string
      curriculum: string | null
      year: string | null
      payload: unknown
      approved: boolean | null
      approved_by: string | null
      approved_at: string | null
      created_at: string | null
    }[]
    const outlineRows = (outlines.data ?? []) as unknown as {
      payload: unknown
      approved_by: string | null
      approved_at: string | null
      created_at: string | null
    }[]
    const curriculumRows = (curricula.data ?? []) as unknown as {
      curriculum_id: string
      name: string
      note: string | null
    }[]

    return {
      lessons: lessonRows.map(r => {
        const taught = r.payload as Taught
        return {
          /* The stored flag is not trusted over the column. `approved` is the
             one field a person set deliberately, and the column is where that
             decision lives. */
          taught: { ...taught, approved: Boolean(r.approved) },
          at: String(r.created_at ?? new Date().toISOString()),
          curriculum: String(r.curriculum ?? 'gh-nacca'),
          year: String(r.year ?? ''),
          audience: r.audience === 'PERSONAL' ? 'PERSONAL' as const : 'SHARED' as const,
          ...(r.for_learner ? { forLearner: String(r.for_learner) } : {}),
          ...(r.approved_by ? { approvedBy: String(r.approved_by) } : {}),
          ...(r.approved_at ? { approvedAt: String(r.approved_at) } : {}),
        }
      }),
      outlines: outlineRows.map(r => ({
        syllabus: r.payload as Syllabus,
        at: String(r.created_at ?? new Date().toISOString()),
        ...(r.approved_by ? { approvedBy: String(r.approved_by) } : {}),
        ...(r.approved_at ? { approvedAt: String(r.approved_at) } : {}),
      })),
      curricula: curriculumRows.map(r => ({
        id: String(r.curriculum_id),
        name: String(r.name),
        note: r.note === null ? null : String(r.note),
      })),
    }
  } catch { return null }
}

/* ── trying again when the connection comes back ─────────────────────────── */

/**
 * Registered once, at module load, because the alternative is every screen
 * remembering to do it. The same reasoning as the identical listener in
 * `accounts.ts`.
 */
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => { void flushReview() })
}
