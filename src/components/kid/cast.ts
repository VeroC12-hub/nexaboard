/**
 * Who lives in the app.
 *
 * Its own module because `art.tsx` exports components, and a file that also
 * exports data cannot be hot reloaded, which makes it the worst possible file
 * to be editing while a screen is open in front of you.
 */

/** The cast. A character per name, chosen the same way every time. */
export type Friend = 'star' | 'mango' | 'goat' | 'bird' | 'drum' | 'sun'

export const FRIENDS: Friend[] = ['star', 'mango', 'goat', 'bird', 'drum', 'sun']

/**
 * A companion for a name, stable across renders.
 *
 * Stable on purpose: a character that changes every render is decoration, and
 * a character who is always the one living on Numeracy is a character.
 */
export function palFor(seed: string): Friend {
  let n = 0
  for (let i = 0; i < seed.length; i++) n = (n + seed.charCodeAt(i)) % 997
  return FRIENDS[n % FRIENDS.length]
}

/**
 * A companion for a position in a list.
 *
 * Hashing the id was wrong for a list: two topics whose ids happen to hash
 * close together sat next to each other with the same friend, and a repeat two
 * rows apart reads as a bug rather than as a cast. Position guarantees the
 * row above and below are always different.
 */
export function palAt(i: number): Friend {
  return FRIENDS[((i % FRIENDS.length) + FRIENDS.length) % FRIENDS.length]
}
