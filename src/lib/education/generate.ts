/**
 * Asking the tutor to write curriculum, and keeping what comes back.
 *
 * The end of the pipeline that begins with the `outline` and `taught` tasks in
 * `api/prompt.js`. Three steps, in one place so a caller does not have to know
 * about any of them: ask, validate, keep unapproved.
 *
 * ── Why nothing here can put a lesson in front of a child ───────────────────
 *
 * By construction, at four separate points. The prompt tells the model it is
 * writing parts rather than a page. `generated.ts` refuses anything
 * structurally unsound and forces `approved: false` whatever the model
 * claimed. `generated-store.ts` keeps it in a waiting list. And `taughtFor`
 * will not return it until `approve` has been called by a screen somebody was
 * looking at. Any one of those four failing still leaves three.
 *
 * ── Why generation is deliberately one topic at a time ──────────────────────
 *
 * It would be easy to loop over a whole year group here, and tempting, because
 * sixty lessons is sixty calls. It is left to the caller because the caller is
 * the only thing that knows whether anybody is waiting, what the budget is,
 * and whether the first one that came back was any good. A loop in here would
 * spend a school's money with nobody watching it.
 */

import { askCurriculum } from './ai'
import type { LearnerBrief } from './ai'
import { readOutline, readTaught } from './generated'
import { keep, keepOutline } from './generated-store'
import { NATIONAL } from './syllabus'
import type { Syllabus } from './syllabus'
import type { Stage } from './learner'
import type { Taught } from './taught'

/* ── one topic ────────────────────────────────────────────────────────────── */

/**
 * Write the stored lesson for one topic and keep it for review.
 *
 * Returns the lesson so a caller can show it immediately, but it is already in
 * the waiting list by then, so a caller that drops it loses nothing.
 */
export async function generateTaught(
  r: {
    learner: LearnerBrief
    topicId: string
    topic: string
    outcome: string
    year: string
    curriculum?: string
    /** The outcomes this topic stands on, so the recap names a real one. */
    builds?: string[]
    place?: string
  },
  signal?: AbortSignal,
): Promise<Taught> {
  const text = await askCurriculum(
    {
      task: 'taught',
      learner: r.learner,
      topic: r.topic,
      topicId: r.topicId,
      outcome: r.outcome,
      year: r.year,
      place: r.place,
      syllabus: { builds: r.builds ?? [] },
    },
    signal,
  )

  const taught = readTaught(text, r.topicId)
  /* Refused rather than repaired. A lesson missing its idea or its method is
     not a lesson with a gap, it is a reply that went wrong, and asking again
     costs less than reviewing something half built. */
  if (!taught) {
    throw new Error('What came back was not a usable lesson. Ask again.')
  }

  keep({
    taught,
    at: new Date().toISOString(),
    curriculum: r.curriculum ?? NATIONAL,
    year: r.year,
  })

  return taught
}

/* ── one subject ──────────────────────────────────────────────────────────── */

/**
 * Write the outline of a subject a school has added, and keep it for review.
 *
 * The outline comes first and the lessons second, because a lesson is written
 * against a topic id and there are no topic ids until this has been approved.
 * A school adding a subject therefore reviews one outline, then as many
 * lessons as they choose to generate from it.
 */
export async function generateOutline(
  r: {
    learner: LearnerBrief
    subjectId: string
    subjectName: string
    stage: Stage
    year: string
    curriculum: string
    /** What the school said it wants in the subject, which outranks guesses. */
    askedFor?: string
    place?: string
  },
  signal?: AbortSignal,
): Promise<Syllabus> {
  const text = await askCurriculum(
    {
      task: 'outline',
      learner: r.learner,
      topic: r.subjectName,
      subjectName: r.subjectName,
      year: r.year,
      place: r.place,
      askedFor: r.askedFor,
    },
    signal,
  )

  const syllabus = readOutline(text, {
    subjectId: r.subjectId,
    stage: r.stage,
    year: r.year,
    curriculum: r.curriculum,
  })
  if (!syllabus) {
    throw new Error('What came back was not a usable outline. Ask again.')
  }

  keepOutline({ syllabus, at: new Date().toISOString() })
  return syllabus
}
