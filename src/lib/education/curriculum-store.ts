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
import { queueCurriculum } from './review-sync'

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
  queueCurriculum(c)
  defineCurriculum(c)
  return c
}

/**
 * Fold in the curricula this account has defined on its other devices.
 *
 * A union, like the one in `generated-store.ts` and for the same reason: a
 * curriculum typed on a phone while the connection was down has not reached
 * the server yet, and that is not distinguishable from one deleted elsewhere.
 * The national one is refused here as it is everywhere else, so a row that
 * claimed to be it could not take effect even if one existed.
 *
 * Each one is put into use as it lands, because that is what makes a school's
 * subjects appear without a reload.
 */
export function mergeCurricula(rows: Curriculum[]): number {
  const byId = new Map<string, Curriculum>()
  for (const c of schoolCurricula()) byId.set(c.id, c)
  for (const c of rows) {
    if (c.id === NATIONAL) continue
    byId.set(c.id, c)
  }
  const all = [...byId.values()]
  write(CURRICULA, all)
  for (const c of all) defineCurriculum(c)
  return all.length
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
