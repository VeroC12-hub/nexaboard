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

/**
 * The options of a choice question, in an order that is not a giveaway.
 *
 * ── The fault this fixes ────────────────────────────────────────────────────
 *
 * Questions are written with the right answer first, because that is the
 * natural way to write one: state the answer, then invent the distractors.
 * Measured across the library, the correct option was first in 1670 of 1810
 * multiple choice questions, which is 92 per cent. A learner who always chose
 * the first option scored 92 per cent on every quiz in the app and would have
 * passed the end of year examination in every subject without reading a single
 * question. `scripts/coverage/answer-position.mts` is the measurement.
 *
 * ── Why it is shuffled here rather than in the content ──────────────────────
 *
 * Reordering 1810 questions by hand would fix today and not tomorrow: the next
 * lesson written would put the answer first again, because that is how people
 * write questions. Doing it at the point of use makes the content safe to
 * write the natural way for ever.
 *
 * ── Why the order is derived rather than random ─────────────────────────────
 *
 * `Math.random` would reshuffle on every React render, so the option under a
 * learner's finger would move as they reached for it, and an answer chosen by
 * position would be marked against a different option. The order is derived
 * from the question id instead: stable across renders, across reloads and
 * across devices, and different from question to question.
 */
export function optionsOf(q: Question): string[] {
  const options = q.options ?? []
  if (options.length < 2) return options

  /* A small deterministic hash of the id, so each question gets its own
     ordering. FNV-1a: four lines, no dependency, and spreads short similar
     strings like "indices-1" and "indices-2" well. */
  let hash = 0x811c9dc5
  for (let i = 0; i < q.id.length; i++) {
    hash ^= q.id.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193) >>> 0
  }

  /* Fisher-Yates, drawing from the hash rather than from Math.random. The
     hash is advanced each step so the whole order depends on the id, not
     only the first swap. */
  const out = [...options]
  for (let i = out.length - 1; i > 0; i--) {
    hash = Math.imul(hash ^ (hash >>> 15), 0x2545f491) >>> 0
    const j = hash % (i + 1)
    const swap = out[i]
    out[i] = out[j]
    out[j] = swap
  }
  return out
}
