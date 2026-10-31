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
 * See issue 13 in docs/NEXAEDU_OPEN_ISSUES.md, and BLOCKING issue 15 for pictures.
 */

import type { Taught } from './taught'

const REGISTRY = new Map<string, Taught>()

/**
 * Register a stored lesson. Called once per entry in `library/lessons`.
 *
 * ── Why a second lesson for the same topic is refused ───────────────────────
 *
 * It used to overwrite, and that cost real work. Four topics were written a
 * second time by somebody who did not know they already existed, the later
 * file loaded after the earlier one, and the first four lessons silently
 * stopped being the ones served. Nothing failed. The coverage count did not
 * move, which was the only sign, and it is not a sign anybody watches.
 *
 * So a duplicate is now a thrown error rather than a replacement. It fires
 * while the module graph is loading, which means it fires in `tsc -b`, in the
 * dev server and in every coverage script, long before a learner could see
 * either version. The approved lesson that was there first wins, because the
 * alternative is deciding by import order which is not a decision anybody
 * made.
 *
 * `loadApproved` in `generated-store.ts` already checks `taughtFor` before
 * calling this, so an approved generated lesson never collides with a written
 * one; it is skipped instead, and a written lesson stays authoritative.
 */
export function teach(t: Taught): Taught {
  const existing = REGISTRY.get(t.topicId)
  if (existing) {
    throw new Error(
      `Two stored lessons claim the topic "${t.topicId}". One of them is `
      + 'already registered, so the other would silently replace it. Delete '
      + 'the newer one, or give it the topic id it was actually written for.',
    )
  }
  REGISTRY.set(t.topicId, t)
  return t
}

/**
 * Replace a registered lesson, knowing that is what you are doing.
 *
 * For `approve` in `generated-store.ts`, which has to put the approved copy of
 * a lesson over the unapproved one it is already holding. That is a legitimate
 * overwrite of the same lesson, not two lessons colliding, which is why it has
 * its own name rather than relaxing `teach`.
 */
export function reteach(t: Taught): Taught {
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

/**
 * Whether anything at all is registered for a topic, approved or not.
 *
 * Distinct from `hasTaught`, which answers the learner's question (is there a
 * lesson I may be shown) rather than the loader's question (is this seat
 * already taken). `loadApproved` needs the second one, because registering
 * over an unapproved lesson is just as much a collision as registering over an
 * approved one.
 */
export const isRegistered = (topicId: string): boolean => REGISTRY.has(topicId)
