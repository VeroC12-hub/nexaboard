/**
 * Where a course's material comes from, and what that source is allowed to say.
 *
 * The mistake this file exists to avoid is treating the syllabus as a
 * precondition. A platform that shows nothing until a curriculum has been
 * loaded is a platform that shows nothing, because on the first day of every
 * school there is no curriculum loaded. A learner who opens it should be able
 * to learn immediately, in the same way that a good textbook teaches you
 * whether or not your school has filed a scheme of work.
 *
 * So material never decides *whether* a feature runs. It decides *where the
 * content comes from*, and the last source in the list always exists:
 *
 *   SCHOOL     this school's own scheme of work, which overrides everything
 *   NATIONAL   the national curriculum, indicator coded
 *   GENERATED  written by the AI from a document somebody uploaded
 *   MODEL      the AI's own knowledge of the subject
 *
 * The level still gates, because that is a real educational rule rather than a
 * gap in our data: a five year old is not given timed examination practice no
 * matter how much material exists. That policy lives in `configuration.ts` and
 * is read here through `has(ctx, feature)`.
 *
 * ── What a source may claim ──────────────────────────────────────────────────
 *
 * There is one line that must not be crossed, and it is narrower than "do not
 * use the model until it is grounded".
 *
 * The model genuinely knows mathematics, science and English. Explaining how to
 * factorise a quadratic needs no national document, and refusing to teach it
 * until one is filed helps nobody.
 *
 * What the model must never do is make claims about a *particular* syllabus or
 * examination: that a topic is on the BECE, that it carries eight marks, that
 * it is indicator B7.1.2.1.3. Those are checkable facts about a specific
 * document, a learner cannot tell when they are invented, and being wrong about
 * them damages the exact trust the platform is asking a school for.
 *
 * So the source does not decide whether to teach. It decides what may be
 * asserted while teaching.
 */

import type { FeatureKey } from './codes'
import type { LearnerContext } from './context'
import { has } from './context'

export type Provenance = 'SCHOOL' | 'NATIONAL' | 'GENERATED' | 'MODEL'

/** Best first. Used to pick the strongest source a course actually has. */
export const PROVENANCE_ORDER: Provenance[] = ['SCHOOL', 'NATIONAL', 'GENERATED', 'MODEL']

/**
 * The material a course holds.
 *
 * Counts rather than booleans wherever the number is worth showing. Practice
 * with four questions behind it and practice with four hundred are not the same
 * offer, and a screen that only knows `true` cannot say so.
 *
 * Nothing here can make a feature disappear. It only raises the source.
 */
export interface OfferingCapability {
  offeringId: string
  /** The school has filed its own scheme of work for this course. */
  schoolScheme: boolean
  /** The national curriculum covers this course, with objectives. */
  nationalCurriculum: boolean
  /** Objectives, from whichever source, that the course can be walked through. */
  objectives: number
  /** Questions a learner may be served now: approved, and auto markable. */
  questions: number
  /** Drafted by the generator and not yet passed by a teacher. Never served. */
  questionsAwaitingReview: number
  /** Genuine past examination questions, counted separately from practice. */
  pastQuestions: number
  /** Lessons with at least one step. */
  lessons: number
  /** Readable material: books, documents, video, audio. */
  resources: number
  /** Books indexed to the page, so a reference can open at the passage. */
  indexedBooks: number
}

/** A course nobody has loaded anything into, which is how every course starts. */
export function emptyCapability(offeringId: string): OfferingCapability {
  return {
    offeringId,
    schoolScheme: false,
    nationalCurriculum: false,
    objectives: 0,
    questions: 0,
    questionsAwaitingReview: 0,
    pastQuestions: 0,
    lessons: 0,
    resources: 0,
    indexedBooks: 0,
  }
}

/**
 * How a feature is being supplied, and what it may say while doing it.
 *
 * `available` reflects the level alone. A feature the level allows is always
 * available, however empty the database is.
 */
export interface Provision {
  feature: FeatureKey
  available: boolean
  source: Provenance
  /**
   * Whether this source may name indicator codes, examinations, mark
   * weightings and the rest. False on MODEL, always.
   */
  mayCiteCurriculum: boolean
  /**
   * Whether a teacher has passed the material a learner is about to be given.
   * Generated material is served, but it is never passed off as checked.
   */
  reviewed: boolean
}

/**
 * Which source is backing a feature.
 *
 * Reads top down and stops at the first source that can actually supply this
 * feature, falling through to the model, which can always supply it.
 */
function sourceOf(feature: FeatureKey, c: OfferingCapability | null): Provenance {
  if (!c) return 'MODEL'
  switch (feature) {
    case 'practice':
      if (c.questions > 0 && c.schoolScheme) return 'SCHOOL'
      if (c.questions > 0 && c.nationalCurriculum) return 'NATIONAL'
      if (c.questions > 0) return 'GENERATED'
      return 'MODEL'
    case 'pastQuestions':
      // A past paper is a real document or it is nothing. The model must never
      // invent one: a fabricated past question is worse than no past question,
      // because a learner will revise from it.
      return c.pastQuestions > 0 ? 'NATIONAL' : 'MODEL'
    case 'lessons':
      if (c.lessons > 0 && c.schoolScheme) return 'SCHOOL'
      if (c.lessons > 0 && c.nationalCurriculum) return 'NATIONAL'
      if (c.lessons > 0) return 'GENERATED'
      return 'MODEL'
    case 'library':
      return c.resources > 0 ? 'GENERATED' : 'MODEL'
    case 'aiTutor':
      if (c.indexedBooks > 0) return 'GENERATED'
      if (c.schoolScheme) return 'SCHOOL'
      if (c.nationalCurriculum) return 'NATIONAL'
      return 'MODEL'
    default:
      if (c.schoolScheme) return 'SCHOOL'
      if (c.nationalCurriculum) return 'NATIONAL'
      return 'MODEL'
  }
}

/**
 * Features that cannot be honestly supplied by the model alone, because their
 * whole value is that they are the real thing.
 *
 * Kept deliberately short. Everything absent from it works from day one.
 */
const NEEDS_A_REAL_DOCUMENT: FeatureKey[] = ['pastQuestions']

export function provisionFor(
  ctx: LearnerContext,
  capability: OfferingCapability | null,
  feature: FeatureKey,
): Provision {
  const source = sourceOf(feature, capability)
  const allowedByLevel = has(ctx, feature)
  const fabricated = source === 'MODEL' && NEEDS_A_REAL_DOCUMENT.includes(feature)
  return {
    feature,
    available: allowedByLevel && !fabricated,
    source,
    mayCiteCurriculum: source !== 'MODEL' && source !== 'GENERATED',
    reviewed: source === 'SCHOOL' || source === 'NATIONAL',
  }
}

/**
 * Whether a feature should appear for this learner on this course.
 *
 * The level decides. Missing material changes where the content comes from, not
 * whether the learner may learn.
 */
export function offers(
  ctx: LearnerContext,
  capability: OfferingCapability | null,
  feature: FeatureKey,
): boolean {
  return provisionFor(ctx, capability, feature).available
}

/**
 * What loading material would improve, for the teacher's screen.
 *
 * Not a list of faults. Every one of these already works; the entry says what
 * would get better, and how, if somebody uploaded something.
 */
export interface Improvement {
  feature: FeatureKey
  from: Provenance
  to: Provenance
  /** What has to happen to raise it. */
  needs: string
}

const RAISES: { feature: FeatureKey; to: Provenance; needs: string }[] = [
  { feature: 'aiTutor', to: 'GENERATED', needs: 'Upload the textbook so the tutor can quote the page.' },
  { feature: 'practice', to: 'GENERATED', needs: 'Upload material so questions can be drawn from the course itself.' },
  { feature: 'lessons', to: 'NATIONAL', needs: 'Load the national curriculum to file lessons against objectives.' },
  { feature: 'pastQuestions', to: 'NATIONAL', needs: 'Add real past papers. These are never generated.' },
  { feature: 'library', to: 'GENERATED', needs: 'Add books and documents for this course.' },
]

export function improvements(
  ctx: LearnerContext,
  capability: OfferingCapability | null,
): Improvement[] {
  const out: Improvement[] = []
  for (const r of RAISES) {
    if (!has(ctx, r.feature)) continue
    const now = provisionFor(ctx, capability, r.feature).source
    if (PROVENANCE_ORDER.indexOf(now) > PROVENANCE_ORDER.indexOf(r.to)) {
      out.push({ feature: r.feature, from: now, to: r.to, needs: r.needs })
    }
  }
  return out
}

/**
 * An ordered course outline, from whichever source could supply one.
 *
 * `mastery.ts` walks a list of objective ids in order. Where those ids came
 * from is this module's problem, not its own: a national indicator, a heading
 * the AI read out of an uploaded book, or a topic the model knows the subject
 * to contain. The learner journey is identical in all three cases, which is the
 * whole point.
 */
export interface Outline {
  offeringId: string
  source: Provenance
  objectiveIds: string[]
  /** Shown to the learner so the origin of their course is never hidden. */
  note: string | null
}

export function outlineNote(source: Provenance): string | null {
  switch (source) {
    case 'SCHOOL': return null
    case 'NATIONAL': return null
    case 'GENERATED': return 'Built from the material uploaded for this course.'
    case 'MODEL': return 'A standard outline for this subject, until your school adds its own.'
  }
}
