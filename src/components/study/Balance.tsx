/**
 * A balance you can actually operate.
 *
 * The prose for linear equations says that an equation is a claim two things
 * are equal, and that this is the reason you must do the same to both sides.
 * Reading that is not the same as seeing it: here the learner performs the
 * operations themselves and watches the beam stay level, and can deliberately
 * break the rule and watch it tip.
 *
 * This is the whole topic in one object. The pitfall is not described, it is
 * demonstrated by the learner's own hand.
 */

import { useState } from 'react'

interface Side { x: number; c: number }

const START_LEFT: Side = { x: 3, c: 4 }
const START_RIGHT: Side = { x: 0, c: 19 }

/** The value of a side once x is known, used only to decide the tilt. */
const weigh = (s: Side, x: number) => s.x * x + s.c

const term = (s: Side): string => {
  const parts: string[] = []
  if (s.x) parts.push(s.x === 1 ? 'x' : `${s.x}x`)
  if (s.c || !parts.length) parts.push(String(s.c))
  return parts.join(' + ').replace('+ -', '- ')
}

export default function Balance() {
  const [left, setLeft] = useState<Side>(START_LEFT)
  const [right, setRight] = useState<Side>(START_RIGHT)
  const [bothSides, setBothSides] = useState(true)
  const [broke, setBroke] = useState(false)

  // x is 5 in the starting equation, and every legal move preserves that.
  const X = 5
  const lw = weigh(left, X)
  const rw = weigh(right, X)
  const level = Math.abs(lw - rw) < 1e-9

  const solved = level && left.x === 1 && left.c === 0 && right.x === 0

  const take = (n: number) => {
    setLeft(s => ({ ...s, c: s.c - n }))
    if (bothSides) setRight(s => ({ ...s, c: s.c - n }))
    else setBroke(true)
  }

  const divide = (n: number) => {
    setLeft(s => ({ x: s.x / n, c: s.c / n }))
    if (bothSides) setRight(s => ({ x: s.x / n, c: s.c / n }))
    else setBroke(true)
  }

  const reset = () => {
    setLeft(START_LEFT); setRight(START_RIGHT); setBroke(false); setBothSides(true)
  }

  // The beam tips towards the heavier side, capped so it stays readable.
  const tilt = Math.max(-11, Math.min(11, (lw - rw) * 0.6))

  return (
    <div className="nx-play">
      <div className="nx-play-head">
        <span className="nx-mark">Try it: keep the scale level</span>
        <button className="nx-link" onClick={reset}>Reset</button>
      </div>

      <svg viewBox="0 0 420 190" className="nx-balance" role="img"
        aria-label={`Balance showing ${term(left)} equals ${term(right)}`}>
        <g style={{ transform: `rotate(${tilt}deg)`, transformOrigin: '210px 74px', transition: 'transform 520ms cubic-bezier(.2,.8,.3,1)' }}>
          <line x1="60" y1="74" x2="360" y2="74" className="nx-beam" />
          {[60, 360].map(cx => <line key={cx} x1={cx} y1="74" x2={cx} y2="104" className="nx-string" />)}
          {([[60, left], [360, right]] as [number, Side][]).map(([cx, s]) => (
            <g key={cx}>
              <path d={`M ${cx - 52} 104 L ${cx + 52} 104 L ${cx + 38} 130 L ${cx - 38} 130 Z`} className="nx-pan" />
              <text x={cx} y={122} className="nx-pan-text">{term(s)}</text>
            </g>
          ))}
        </g>
        <path d="M 210 74 L 186 168 L 234 168 Z" className="nx-fulcrum" />
        <rect x="150" y="168" width="120" height="8" rx="4" className="nx-fulcrum" />
      </svg>

      <p className="nx-equation">{term(left)} = {term(right)}</p>

      {solved ? (
        <p className="nx-play-note is-good">
          Level, and x is on its own. That is the answer: x = {right.c}.
        </p>
      ) : broke ? (
        <p className="nx-play-note is-bad">
          The scale has tipped. You changed one side and not the other, so this is no longer
          the equation you were asked about. Reset and try keeping both sides equal.
        </p>
      ) : (
        <p className="nx-play-note">
          Every move has to happen on both sides, or the two amounts stop being equal.
        </p>
      )}

      <div className="nx-play-controls">
        <button className="nx-op" onClick={() => take(4)} disabled={broke || solved}>take 4</button>
        <button className="nx-op" onClick={() => take(1)} disabled={broke || solved}>take 1</button>
        <button className="nx-op" onClick={() => divide(3)} disabled={broke || solved || left.x % 3 !== 0}>÷ 3</button>
        <button className="nx-op" onClick={() => divide(2)} disabled={broke || solved || left.x % 2 !== 0}>÷ 2</button>

        <label className="nx-op-toggle">
          <input type="checkbox" checked={!bothSides}
            onChange={e => setBothSides(!e.target.checked)} disabled={broke || solved} />
          left side only
        </label>
      </div>
    </div>
  )
}
