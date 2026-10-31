/**
 * The curricula a school has defined, kept between visits.
 *
 * ── Why this is separate from `syllabus.ts` ─────────────────────────────────
 *
 * `defineCurriculum` puts a curriculum in a Map that lives for as long as the
 * tab does. That is right for the national one, which is written in code and
 * loaded on every start, and wrong for a school's own, which is typed in by a
 * person on a Tuesday and must still be there on Wednesday.
 *
 * Same division as `generated-store.ts`: the registry holds what is in use
 * now, this holds what to put back. Keeping the storage out of `syllabus.ts`
 * means the pure lookup module still has no idea that a browser exists, so it
 * can be tested without one.
 *
 * ── What a school's curriculum actually is ──────────────────────────────────
 *
 * A name and an id, and nothing else. It is not a copy of the national
 * curriculum with edits: it is an overlay. A school that files its own
 * Mathematics gets its own Mathematics and the national everything else,
 * because `resolve` falls back per subject rather than per curriculum. That is
 * what makes adding one subject a small act instead of an obligation to supply
 * the other thirty.
 */

import { defineCurriculum, NATIONAL, type Curriculum } from './syllabus'

const CURRICULA = 'nexaedu_curricula_v1'

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch { return fallback }
}

function write(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* full or blocked */ }
}

/** Every curriculum this device has been told about, the national one aside. */
export const schoolCurricula = (): Curriculum[] => read<Curriculum[]>(CURRICULA, [])

/**
 * Turn a school's name for its curriculum into an id.
 *
 * Derived from the name rather than random, so the same school typing the
 * same name twice does not end up with two curricula and half its subjects in
 * each. Prefixed, so a school can never collide with `gh-nacca` by naming
 * itself cleverly.
 */
export function idFor(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  return 'school-' + (slug || 'unnamed')
}

/**
 * Record a curriculum a school has defined, and put it into use now.
 *
 * Refuses to touch the national one. A school is adding its own scheme of
 * work, and allowing it to redefine `gh-nacca` would let one school's edit
 * change what every other learner on the device is taught.
 */
export function keepCurriculum(c: Curriculum): Curriculum | null {
  if (c.id === NATIONAL) return null
  const rest = schoolCurricula().filter(x => x.id !== c.id)
  write(CURRICULA, [...rest, c])
  defineCurriculum(c)
  return c
}

export function forgetCurriculum(id: string): void {
  if (id === NATIONAL) return
  write(CURRICULA, schoolCurricula().filter(x => x.id !== id))
}

/**
 * Put every stored curriculum back into the registry.
 *
 * Called at startup, before anything asks for a syllabus, and before
 * `loadApproved` in `generated-store.ts`: an approved outline names the
 * curriculum it belongs to, so the curriculum has to exist first or the
 * outline registers against a name nothing can resolve.
 */
export function loadCurricula(): number {
  const all = schoolCurricula()
  for (const c of all) defineCurriculum(c)
  return all.length
}
