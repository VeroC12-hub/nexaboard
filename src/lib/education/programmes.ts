/**
 * What a learner is actually offering.
 *
 * A senior high learner does not study thirty three subjects. They study four
 * core subjects that everybody sits, plus the electives of one course: a
 * General Science learner takes Physics, Chemistry and Biology, and never opens
 * Financial Accounting. Showing them all thirty three was the platform failing
 * to ask a question a school asks on the first day.
 *
 * So the course decides what the subject list shows. It does not decide what
 * the learner is allowed to study: everything stays reachable by searching,
 * because a General Arts learner who wants to read about Physics should be able
 * to, and a learner about to change course should be able to look first.
 *
 * ── Where this comes from ────────────────────────────────────────────────────
 *
 * Ghana's new senior high curriculum, rolled out from the 2024/2025 year, is
 * organised exactly this way: four core subjects plus electives by learning
 * area, seven subjects minimum and nine maximum. The subject names below are
 * the ones NaCCA has published curricula for.
 *
 * Two honest limits:
 *
 * 1. NaCCA's own subject combination document is a scanned PDF with no text in
 *    it, so these groupings are assembled from the published subject list plus
 *    secondary summaries of the combination guidelines. The core four are well
 *    attested. A course's exact elective set should be checked against a
 *    school's own offering, which is why `other` exists and why a learner can
 *    always search outside their course.
 *
 * 2. Schools keep discretion over what they can actually staff. NaCCA's
 *    guidelines say so in as many words. A course here is therefore a sensible
 *    default to filter by, not a claim about what any particular school runs.
 */

import type { Stage } from './learner'

export interface Programme {
  id: string
  /** What a learner would call it when asked what they offer. */
  name: string
  /** Subject ids of the electives normally taken on this course. */
  electives: string[]
  /** Electives commonly added alongside, shown after the main ones. */
  also?: string[]
}

/**
 * The four everybody sits, plus the one that is taught and not examined.
 *
 * `core-peh` carries `examined: false` in the subject list rather than being
 * left out, because it is timetabled and taught, and a learner looking for it
 * should find it.
 */
export const SHS_CORE = ['maths', 'english', 'general-science', 'social', 'core-peh']

const SHS_PROGRAMMES: Programme[] = [
  {
    id: 'science',
    name: 'General Science',
    electives: ['physics', 'chemistry', 'biology', 'add-maths'],
    also: ['ict', 'computing', 'agriculture', 'geography', 'biomedical-science'],
  },
  {
    id: 'arts',
    name: 'General Arts',
    electives: ['economics', 'geography', 'government', 'history', 'literature'],
    also: ['ict', 'french', 'ghl', 'rme', 'biology', 'add-maths'],
  },
  {
    id: 'business',
    name: 'Business',
    electives: ['economics', 'ict', 'geography'],
    also: ['history', 'dct', 'add-maths'],
  },
  {
    id: 'applied-tech',
    name: 'Applied Technology',
    electives: ['dct', 'applied-technology', 'physics'],
    also: ['ict', 'economics', 'engineering', 'manufacturing-engineering', 'art-design-foundation'],
  },
  {
    id: 'home-economics',
    name: 'Home Economics',
    electives: ['biology', 'dct', 'agriculture'],
    also: ['art-design-studio', 'performing-arts', 'geography', 'french'],
  },
  {
    id: 'visual-arts',
    name: 'Visual Arts',
    electives: ['art-design-foundation', 'art-design-studio', 'performing-arts'],
    also: ['biology', 'chemistry', 'physics', 'applied-technology'],
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    electives: ['agriculture', 'agricultural-science', 'chemistry', 'biology'],
    also: ['physics', 'economics', 'geography', 'government', 'ict'],
  },
  {
    id: 'languages',
    name: 'Languages',
    electives: ['french', 'ghl', 'arabic', 'spanish', 'literature'],
    also: ['agriculture', 'biology', 'chemistry', 'applied-technology'],
  },
  {
    id: 'stem',
    name: 'STEM',
    electives: ['physics', 'chemistry', 'biology', 'add-maths', 'robotics'],
    also: ['computing', 'engineering', 'aviation-aerospace', 'manufacturing-engineering', 'ict'],
  },
]

export const PROGRAMMES: Partial<Record<Stage, Programme[]>> = {
  shs: SHS_PROGRAMMES,
}

/** The courses a learner at this stage could be offering. Empty where the
 *  question does not apply: everybody at primary studies everything. */
export const programmesFor = (stage: Stage): Programme[] => PROGRAMMES[stage] ?? []

export function programmeById(stage: Stage, id: string | null | undefined): Programme | null {
  if (!id) return null
  return programmesFor(stage).find(p => p.id === id) ?? null
}

/** Whether a learner at this stage is asked what course they offer at all. */
export const asksProgramme = (stage: Stage): boolean => programmesFor(stage).length > 0

/**
 * The subject ids this learner's own timetable would hold.
 *
 * Core first, then the course's electives, then what is commonly added
 * alongside. Returns null where the stage has no courses, which means show
 * everything, which is correct for primary and junior high.
 */
export function timetableFor(stage: Stage, programmeId: string | null | undefined): string[] | null {
  if (!asksProgramme(stage)) return null
  const p = programmeById(stage, programmeId)
  if (!p) return null
  return [...SHS_CORE, ...p.electives, ...(p.also ?? [])]
}
