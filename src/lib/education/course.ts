/**
 * A course the platform can teach without a database.
 *
 * This is the model source floor described in `capability.ts`: the material a
 * learner meets when no school scheme and no national curriculum has been
 * loaded. It is deliberately a plain data structure, in the same spirit as the
 * question engine's subject descriptors, so that the same screens render a
 * course whether it was written here, generated from an uploaded book, or read
 * out of the national curriculum. The learner journey does not change; only
 * where the material came from.
 *
 * What matters most about the shape below is that a topic carries its
 * *explanation*, not just its questions. A platform that only asks questions is
 * a test, and a learner who cannot already do the thing gains nothing from
 * being asked it repeatedly. Every objective therefore has to be able to teach
 * itself from nothing.
 */

import type { Provenance } from './capability'

/** A question worked in full, so the method is visible rather than implied. */
export interface Worked {
  ask: string
  /** One idea per step, in the order a person actually does them. */
  steps: string[]
  answer: string
}

export interface Question {
  id: string
  ask: string
  kind: 'numeric' | 'choice'
  /** For 'choice'. The correct one must also appear in `answer`. */
  options?: string[]
  answer: string
  /** Accepted alternatives, so a right answer typed differently still counts. */
  accept?: string[]
  /**
   * What to say when it goes wrong.
   *
   * Not the answer again, louder. This names the thinking that leads to the
   * common wrong answer and where it parts company with the right one, then
   * gives the method in a form that works on the next question too.
   */
  teach: string
  /** 1 easiest to 5 hardest, matching the bands the adaptive model uses. */
  level: number
}

export interface Objective {
  id: string
  title: string
  /** What the learner will be able to do, in their own terms. */
  outcome: string
  /**
   * The teaching itself, as paragraphs.
   *
   * Written to explain the mechanism rather than state the rule. "Do the same
   * to both sides" is a rule to memorise and forget. "An equation is a claim
   * that two things are equal, so anything you do to one you must do to the
   * other or the claim stops being true" is a reason, and a reason survives
   * into the next topic.
   */
  explain: string[]
  worked: Worked[]
  /** The mistake this topic is actually examined on. */
  pitfall: string
  questions: Question[]
}

export interface Course {
  id: string
  subject: string
  level: string
  source: Provenance
  /** Shown to the learner so the origin of their course is never hidden. */
  note: string | null
  objectives: Objective[]
}

/** The objective ids in the order the course intends, for the adaptive model. */
export function outlineOf(course: Course): string[] {
  return course.objectives.map(o => o.id)
}

export function objectiveOf(course: Course, id: string | null): Objective | null {
  if (!id) return null
  return course.objectives.find(o => o.id === id) ?? null
}

/**
 * Pick questions for one objective at a difficulty.
 *
 * Widens the band rather than returning nothing: a learner asking to practise
 * has to be given something, and an empty screen is the worst possible answer
 * to somebody who turned up wanting to work.
 */
export function questionsAt(objective: Objective, level: number, count = 4): Question[] {
  const exact = objective.questions.filter(q => q.level === level)
  if (exact.length >= count) return exact.slice(0, count)
  const near = objective.questions.filter(q => Math.abs(q.level - level) <= 1)
  if (near.length >= count) return near.slice(0, count)
  return objective.questions.slice(0, count)
}

/** Whether a typed answer matches, allowing for how people actually write. */
export function isRight(q: Question, given: string): boolean {
  const tidy = (s: string) =>
    s.toLowerCase().replace(/\s+/g, '').replace(/^\+/, '').replace(/,/g, '')
  const want = [q.answer, ...(q.accept ?? [])].map(tidy)
  const got = tidy(given)
  if (!got) return false
  if (want.includes(got)) return true
  // A numeric answer typed as 6.0 for 6, or 0.5 for .5, is still right.
  const n = Number(got)
  if (!Number.isNaN(n)) {
    return want.some(w => {
      const m = Number(w)
      return !Number.isNaN(m) && Math.abs(m - n) < 1e-9
    })
  }
  return false
}
