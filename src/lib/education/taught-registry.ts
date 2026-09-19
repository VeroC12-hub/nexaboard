/**
 * Which topics have a stored lesson.
 *
 * The same shape as the syllabus registry, and separate from `taught.ts` for
 * the same reason `subjectArt.ts` is separate from `art.tsx`: the module that
 * defines the type and the pure assembler should not also hold mutable state
 * that every content file writes into.
 *
 * ── Approval is enforced here, not remembered by callers ────────────────────
 *
 * `taughtFor` never returns an unapproved lesson. That is deliberate: the
 * alternative is every screen remembering to check a flag, and the first one
 * that forgets puts unreviewed material in front of a child. A generated
 * lesson sits in the registry unapproved and is simply not found until
 * somebody has read it, so the platform falls back to the primer exactly as if
 * it did not exist.
 *
 * See issue 13 in NEXAEDU_OPEN_ISSUES.md, and BLOCKING issue 15 for pictures.
 */

import type { Taught } from './taught'

const REGISTRY = new Map<string, Taught>()

/** Register a stored lesson. Called once per entry in `library/lessons`. */
export function teach(t: Taught): Taught {
  REGISTRY.set(t.topicId, t)
  return t
}

/**
 * The stored lesson for a topic, if there is an approved one.
 *
 * Returns null for a topic with nothing stored and for one whose material has
 * not been reviewed, because to a learner those are the same situation: the
 * primer stands in, and the tutor writes something live if it can be reached.
 */
export function taughtFor(topicId: string): Taught | null {
  const t = REGISTRY.get(topicId)
  if (!t || !t.approved) return null
  return t
}

/** Whether a topic has an approved stored lesson, for a screen to be honest. */
export const hasTaught = (topicId: string): boolean => taughtFor(topicId) !== null

/**
 * Everything registered, approved or not.
 *
 * For the review tooling and for counting coverage. Not for serving: use
 * `taughtFor`, which applies the approval gate.
 */
export const allTaught = (): Taught[] => [...REGISTRY.values()]
