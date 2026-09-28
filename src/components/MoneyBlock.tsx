/**
 * An amount of Ghanaian money, laid out as the notes and coins that make it.
 *
 * ── Why money is never a generated picture ─────────────────────────────────
 *
 * A Basic 4 lesson on adding cedis and pesewas asked for "cedi notes and
 * pesewa coins spread out on a table" and Pollinations returned gold
 * medallions and blurred paper on a dark surface. It is not Ghanaian currency
 * and it is not currency at all.
 *
 * That was not bad luck. Money is a specific designed object whose whole
 * identity is the writing on it: the denomination, the numerals, the portrait,
 * the Bank of Ghana name. The prompt forbids text inside a generated image, on
 * purpose, because generated text comes out misspelled. So the request asked
 * for money with everything that makes money recognisable removed, and the
 * only possible answers were wrong ones. Showing a child learning cedis a pile
 * of invented foreign coins is worse than showing them nothing.
 *
 * ── Why the amount is given and the breakdown is computed ──────────────────
 *
 * The tutor sends an amount in pesewas and nothing else. This file decides
 * which notes and coins make it up, so the arithmetic on screen is right by
 * construction rather than by the model having been careful. It is the same
 * rule the chart and the count block follow: when the number is the content,
 * the number is computed, never described.
 *
 * It also happens to be the skill. Making an amount out of the denominations
 * you actually have is Ghanaian primary mathematics, so showing GH₵3.40 as a
 * 2 cedi note, a 1 cedi note and two 20 pesewa coins is not decoration, it is
 * the lesson.
 */

import type { MoneySpec } from '../lib/education/lesson-blocks'

/**
 * What exists, largest first, in pesewas.
 *
 * One and two cedis circulate as both a note and a coin. They are rendered as
 * notes here because that is what a child is handed in a market more often,
 * and because a row of paper reads more clearly than a row of discs.
 */
const NOTES = [20000, 10000, 5000, 2000, 1000, 500, 200, 100]
const COINS = [50, 20, 10, 5, 1]

/**
 * GH₵3.40, or 40p when there are no whole cedis.
 *
 * Not exported: this file exports a component, and a module that exports both
 * a component and a plain function cannot be hot reloaded reliably. Nothing
 * outside needs it, so it stays local rather than being moved somewhere just
 * to be shared with nobody.
 */
function money(pesewas: number): string {
  const whole = Math.floor(pesewas / 100)
  const rest = pesewas % 100
  if (!whole) return `${rest}p`
  return `GH${CEDI}${whole}.${String(rest).padStart(2, '0')}`
}

/**
 * The currency sign, which is not the cent sign.
 *
 * Ghana uses U+20B5 CEDI SIGN. The first version of this file used U+00A2
 * CENT SIGN, which renders as a nearly identical glyph in most faces and is a
 * different currency belonging to a different country. In a Basic 4 lesson
 * whose subject is what a cedi is, printing the wrong sign is the same
 * category of error as the generated photograph this block replaced.
 */
const CEDI = '₵'

/** A single note or coin's face value, written the way it is printed on it. */
const face = (p: number): string => (p >= 100 ? `GH${CEDI}${p / 100}` : `${p}p`)

interface Piece { value: number, kind: 'note' | 'coin' }

/**
 * The fewest pieces that make the amount.
 *
 * Greedy, which is optimal for this set of denominations and is also how a
 * person counts out change: biggest first until it will not fit.
 */
function piecesFor(pesewas: number): Piece[] {
  const out: Piece[] = []
  let left = Math.round(pesewas)
  for (const value of NOTES) {
    while (left >= value) { out.push({ value, kind: 'note' }); left -= value }
  }
  for (const value of COINS) {
    while (left >= value) { out.push({ value, kind: 'coin' }); left -= value }
  }
  return out
}

export default function MoneyBlock({ spec }: { spec: MoneySpec }) {
  const pieces = piecesFor(spec.pesewas)
  const total = money(spec.pesewas)

  /* Said in full for a screen reader and for anybody who cannot make out the
     chips: the sentence carries the same information as the picture. */
  const notes = pieces.filter(p => p.kind === 'note')
  const coins = pieces.filter(p => p.kind === 'coin')
  const listOf = (ps: Piece[]) => {
    const counts = new Map<number, number>()
    for (const p of ps) counts.set(p.value, (counts.get(p.value) ?? 0) + 1)
    return [...counts].map(([v, n]) => `${n} × ${face(v)}`).join(', ')
  }
  const said = [
    `${total} made from`,
    notes.length ? `notes: ${listOf(notes)}` : '',
    coins.length ? `coins: ${listOf(coins)}` : '',
  ].filter(Boolean).join('; ')

  return (
    <figure className="nx-money" aria-label={said}>
      <p className="nx-money-total">{total}</p>
      <div className="nx-money-row">
        {pieces.map((p, i) => (
          <span
            key={i}
            className={p.kind === 'note' ? 'nx-money-note' : 'nx-money-coin'}
          >
            {face(p.value)}
          </span>
        ))}
      </div>
      <figcaption className="nx-money-cap">
        {spec.caption?.trim() || said}
      </figcaption>
    </figure>
  )
}
