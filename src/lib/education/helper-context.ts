/**
 * What is on screen, for the helper to answer about.
 *
 * ── Why a store and not props ───────────────────────────────────────────────
 *
 * The helper is one button in one place, mounted once, above every screen. The
 * things it needs to answer well are scattered: the learner brief is built in
 * `Learn`, the lesson text exists only inside the component that streamed it,
 * and which screen you are on is known only by the screen you are on.
 *
 * Threading all of that through the app as props would mean every page knowing
 * about the helper, every page passing it down, and a chain that breaks the
 * moment somebody adds a screen. So screens publish instead: one call, in an
 * effect, saying what they are showing. Nothing reads these values except the
 * helper, and nothing re-renders because of them except the helper.
 *
 * ── Why the lesson text is held here at all ─────────────────────────────────
 *
 * Because "I do not understand this part" is the question this whole feature
 * exists for, and it cannot be answered from the topic title. The lesson on
 * screen is the single most useful thing the helper can be given, and the only
 * component that has it is the one rendering it.
 *
 * Nothing here is persisted. It describes this moment on this screen, and a
 * reload should start from whatever the new screen publishes.
 */

import { useSyncExternalStore } from 'react'
import type { LearnerBrief, SyllabusPlace } from './ai'

export interface HelperContext {
  /**
   * Who is asking, and how they are getting on.
   *
   * The same brief the tutor writes lessons from, so the helper pitches itself
   * at the same person the lesson was pitched at: it carries the year, the
   * stage, what they asked for, what they keep getting wrong and their plan.
   * Absent before a learner is open, which is when the helper can still answer
   * questions about the app but not about them.
   */
  learner?: LearnerBrief
  /** Where they are in the syllabus, when they are inside a subject. */
  syllabus?: SyllabusPlace
  /** The lesson text currently on screen, when one is. */
  lesson?: string
  /** Which screen this is, in words a model can use. */
  where: string
}

const EMPTY: HelperContext = { where: 'the app' }

let current: HelperContext = EMPTY
const listeners = new Set<() => void>()

function announce() {
  for (const l of listeners) l()
}

/**
 * Say what this screen is showing.
 *
 * Merges, so a page can publish the screen name on mount and the lesson text
 * later, when it has arrived, without restating everything. Returns nothing:
 * callers use it in an effect and clear with `forgetHelperContext`.
 */
export function setHelperContext(next: Partial<HelperContext>): void {
  const merged = { ...current, ...next }
  /* Lessons stream in a chunk at a time, so this is called on almost every
     frame of a lesson arriving. Bailing out when nothing changed keeps that
     from re-rendering the helper a few hundred times per lesson. */
  const same = (Object.keys(merged) as Array<keyof HelperContext>)
    .every(k => merged[k] === current[k])
  if (same) return
  current = merged
  announce()
}

/** Drop the fields a screen owned, as it leaves. */
export function forgetHelperContext(keys: Array<keyof HelperContext>): void {
  const next = { ...current }
  for (const k of keys) delete next[k]
  current = { ...EMPTY, ...next }
  announce()
}

export function helperContext(): HelperContext {
  return current
}

export function useHelperContext(): HelperContext {
  return useSyncExternalStore(
    cb => { listeners.add(cb); return () => { listeners.delete(cb) } },
    helperContext,
    helperContext,
  )
}
