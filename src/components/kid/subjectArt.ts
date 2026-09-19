/**
 * Which drawing goes with which subject.
 *
 * ── Why this is its own file ────────────────────────────────────────────────
 *
 * There were two copies of this function, one in `KidApp.tsx` and one in
 * `TeenApp.tsx`, with regexes that had already drifted apart: the teen one knew
 * about physics, chemistry and geography and the kid one did not. Two copies of
 * a lookup table is one copy plus a bug waiting for somebody to add a subject.
 *
 * It cannot live in `art.tsx` beside the drawings it names, because a module
 * that exports both components and plain functions cannot hot reload.
 *
 * ── Matched on the name, not the id ─────────────────────────────────────────
 *
 * Subject ids differ by stage and have changed twice already. The names are
 * what a parent reads on a report and are stable.
 */

import type { TileArt } from './art'

/**
 * Ordered, because subjects overlap in wording and the first match wins.
 *
 * "Integrated Science" has to be caught before anything matching "integrat",
 * and "Ghanaian Language" has to lose to `talk` rather than winning `words` on
 * the strength of the word "language", which is how French ended up with the
 * same book as Religious and Moral Education.
 */
const RULES: Array<readonly [RegExp, TileArt]> = [
  [/num|math/, 'numbers'],
  [/scien|environ|physic|chem|bio|agric/, 'science'],
  [/comput|ict|information tech|coding|digital/, 'tech'],
  [/career tech|pre.?tech|technical|home ec|voca/, 'craft'],
  /* A named language is a language; "English Language" and "Literacy" are
     where reading and writing are taught, so they keep the letters. */
  [/english|literac|liter|read|writ|word/, 'words'],
  [/ghanaian|french|twi|ewe|ga\b|dagbani|fante|language/, 'talk'],
  [/art|creat|music|draw|design|dance/, 'arts'],
  [/world|people|social|histor|geog|citizen|government|econom/, 'world'],
]

/**
 * The fallback is the book, which is never wrong, only unspecific.
 *
 * Religious and Moral Education lands here on purpose: a book is exactly what
 * that subject is taught from, so it is the one case where the fallback is also
 * the right answer.
 */
export function artFor(name: string): TileArt {
  const n = name.toLowerCase()
  for (const [pattern, art] of RULES) if (pattern.test(n)) return art
  return 'stories'
}
