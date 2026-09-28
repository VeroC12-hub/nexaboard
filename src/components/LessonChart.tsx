/**
 * A chart, drawn from numbers rather than generated as a picture.
 *
 * ── Why this is not an image ────────────────────────────────────────────────
 *
 * The rule the rest of this product already follows: every number, label and
 * equation a learner sees is real markup and is never generated. A diffusion
 * model asked for "a bar chart of rainfall by region" produces something that
 * looks like a bar chart, with bars of plausible but wrong heights and axis
 * labels spelled almost correctly. In a lesson about reading a chart, that is
 * not a cosmetic problem: the learner is being asked to read data that does
 * not mean anything.
 *
 * So the tutor sends numbers and this draws them. The bars are the data.
 *
 * ── Why SVG and not Chart.js ────────────────────────────────────────────────
 *
 * Chart.js is already a dependency and would have been less code. SVG was
 * chosen for four reasons that all matter more than the code saved: it scales
 * with the surrounding text instead of needing a sized canvas in a flowing
 * page, it prints and screenshots at full resolution, it can carry a real
 * title and description for a screen reader, and the same drawing code can run
 * inside the Remotion lesson videos, where there is no canvas to hand.
 *
 * ── On accessibility, which is the point rather than a nicety ───────────────
 *
 * Every chart carries `<title>` and `<desc>`, and the figure below it repeats
 * the numbers as a caption. A chart that only exists as a shape is unreadable
 * to a learner using a screen reader, and this platform's whole argument is
 * that a learner who cannot use one medium is given another.
 */

import { useId } from 'react'
import type { ChartSpec } from '../lib/education/lesson-blocks'

export type { ChartSpec } from '../lib/education/lesson-blocks'

/** Numbers as a sentence, for the caption and for `<desc>`. */
function describe(spec: ChartSpec): string {
  const unit = spec.unit ? ` ${spec.unit}` : ''
  return spec.data.map(p => `${p.label}: ${trim(p.value)}${unit}`).join(', ')
}

/**
 * A number with no trailing noise.
 *
 * `toFixed` then stripping zeroes, and the guard on the decimal point is
 * deliberate: trimming trailing zeroes from a string with no point turns the
 * tick label "10" into "1", which is a bug this codebase has already had once
 * in `plot.ts`.
 */
function trim(n: number): string {
  const s = Math.abs(n) >= 1000 ? n.toFixed(0) : n.toFixed(2)
  return s.includes('.') ? s.replace(/\.?0+$/, '') : s
}

/**
 * Round a maximum up to something a human would choose for an axis.
 *
 * 1, 2, 2.5 or 5 times a power of ten, which is the set of steps that read as
 * deliberate. Without this the top gridline says 47.3 and the chart looks like
 * a readout rather than a teaching aid.
 */
function niceMax(max: number): number {
  if (max <= 0) return 1
  const pow = 10 ** Math.floor(Math.log10(max))
  for (const step of [1, 2, 2.5, 5, 10]) {
    if (max <= step * pow) return step * pow
  }
  return 10 * pow
}

const W = 460
const H = 260
const PAD = { top: 16, right: 14, bottom: 46, left: 46 }

export default function LessonChart({ spec }: { spec: ChartSpec }) {
  const id = useId()
  const titleId = `${id}-t`
  const descId = `${id}-d`
  const desc = describe(spec)

  const plotW = W - PAD.left - PAD.right
  const plotH = H - PAD.top - PAD.bottom

  const values = spec.data.map(p => p.value)
  const top = niceMax(Math.max(...values, 0))
  /* A chart with negative values needs a baseline that is not the floor. */
  const bottom = Math.min(0, ...values)
  const span = top - bottom || 1
  const y = (v: number) => PAD.top + plotH - ((v - bottom) / span) * plotH

  const ticks = [0, 0.25, 0.5, 0.75, 1].map(f => bottom + f * span)

  return (
    <figure className="nx-chart">
      <svg
        className="nx-chart-svg"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <title id={titleId}>{spec.title}</title>
        <desc id={descId}>{desc}</desc>

        {spec.kind === 'pie'
          ? <Pie spec={spec} />
          : (
            <>
              {/* Gridlines and the value axis. Drawn first so the data sits
                  on top of them rather than under. */}
              {ticks.map((t, i) => (
                <g key={i}>
                  <line
                    x1={PAD.left} x2={W - PAD.right}
                    y1={y(t)} y2={y(t)}
                    className={t === 0 && bottom < 0 ? 'nx-chart-zero' : 'nx-chart-grid'}
                  />
                  <text x={PAD.left - 6} y={y(t) + 4} className="nx-chart-tick" textAnchor="end">
                    {trim(t)}
                  </text>
                </g>
              ))}
              {spec.kind === 'bar'
                ? <Bars spec={spec} y={y} plotW={plotW} base={y(Math.max(0, bottom))} />
                : <Lines spec={spec} y={y} plotW={plotW} />}
              {spec.yLabel && (
                <text
                  className="nx-chart-axis"
                  transform={`rotate(-90) translate(${-(PAD.top + plotH / 2)} 12)`}
                  textAnchor="middle"
                >{spec.yLabel}</text>
              )}
              {spec.xLabel && (
                <text className="nx-chart-axis" x={PAD.left + plotW / 2} y={H - 4} textAnchor="middle">
                  {spec.xLabel}
                </text>
              )}
            </>
          )}
      </svg>
      {/* The numbers in words as well as in shapes. See the header. */}
      <figcaption className="nx-chart-cap">
        <b>{spec.title}.</b> {desc}{spec.unit ? '' : ''}
      </figcaption>
    </figure>
  )
}

function Bars({ spec, y, plotW, base }: {
  spec: ChartSpec; y: (v: number) => number; plotW: number; base: number
}) {
  const n = spec.data.length
  const slot = plotW / n
  /* A gap of a fifth of the slot, capped, so two bars do not touch and twelve
     bars do not become hairlines. */
  const width = Math.min(slot * 0.68, 54)

  return (
    <>
      {spec.data.map((p, i) => {
        const cx = PAD.left + slot * (i + 0.5)
        const top = y(Math.max(p.value, 0))
        const height = Math.abs(base - y(p.value))
        return (
          <g key={i}>
            <rect
              x={cx - width / 2}
              y={p.value >= 0 ? top : base}
              width={width}
              height={Math.max(height, 1)}
              className="nx-chart-bar"
              rx="2"
            />
            {/* The value on the bar, because reading a height against a
                gridline is a skill the lesson may be teaching rather than one
                it can assume. */}
            <text x={cx} y={(p.value >= 0 ? top : base + height) - 4}
              className="nx-chart-value" textAnchor="middle">
              {trim(p.value)}
            </text>
            <text x={cx} y={H - PAD.bottom + 16} className="nx-chart-label" textAnchor="middle">
              {p.label.length > 9 ? `${p.label.slice(0, 8)}…` : p.label}
            </text>
          </g>
        )
      })}
    </>
  )
}

function Lines({ spec, y, plotW }: {
  spec: ChartSpec; y: (v: number) => number; plotW: number
}) {
  const n = spec.data.length
  const step = n > 1 ? plotW / (n - 1) : 0
  const x = (i: number) => PAD.left + step * i
  const path = spec.data.map((p, i) => `${i ? 'L' : 'M'}${x(i)} ${y(p.value)}`).join(' ')

  return (
    <>
      <path d={path} className="nx-chart-line" fill="none" />
      {spec.data.map((p, i) => (
        <g key={i}>
          <circle cx={x(i)} cy={y(p.value)} r="3.5" className="nx-chart-dot" />
          <text x={x(i)} y={y(p.value) - 8} className="nx-chart-value" textAnchor="middle">
            {trim(p.value)}
          </text>
          <text x={x(i)} y={H - PAD.bottom + 16} className="nx-chart-label" textAnchor="middle">
            {p.label.length > 9 ? `${p.label.slice(0, 8)}…` : p.label}
          </text>
        </g>
      ))}
    </>
  )
}

function Pie({ spec }: { spec: ChartSpec }) {
  const total = spec.data.reduce((n, p) => n + p.value, 0)
  if (total <= 0) return null

  /* The pie sits left and the legend fills the space to its right.

     `cx` was 150 with the legend at 262, which left about 180 units for a
     label and cut "Runoff into rivers" down to "Runoff into riv…". A slice
     label can only hold a percentage, so the legend is the only place the
     reader learns what a slice IS, and truncating it there costs the chart its
     meaning. Moving the pie in and starting the legend earlier buys roughly
     half as much width again. */
  const cx = 118
  const cy = H / 2
  const r = 82

  /* The geometry is worked out before any of it is rendered.

     The running angle used to be accumulated inside the map callback, which
     React's immutability rule flags and is right to: a callback that mutates a
     variable captured from the render is only correct if it runs exactly once
     per render, in order, which is true today and is not a property of `map`
     that anything guarantees. A plain loop that finishes before the JSX starts
     says what is actually meant. */
  const slices: { d: string, mid: number, share: number, label: string }[] = []
  let angle = -Math.PI / 2
  for (const p of spec.data) {
    const sweep = (p.value / total) * Math.PI * 2
    const end = angle + sweep
    const x1 = cx + r * Math.cos(angle)
    const y1 = cy + r * Math.sin(angle)
    const x2 = cx + r * Math.cos(end)
    const y2 = cy + r * Math.sin(end)
    /* A slice of more than half a turn needs the large arc flag, and getting
       this wrong draws the complement of the slice, which is the classic pie
       chart bug. */
    const large = sweep > Math.PI ? 1 : 0
    slices.push({
      d: Math.abs(sweep - Math.PI * 2) < 1e-9
        /* One value holding everything: two arcs, because a single arc from a
           point back to itself draws nothing at all. */
        ? `M${cx} ${cy - r} A${r} ${r} 0 1 1 ${cx} ${cy + r} A${r} ${r} 0 1 1 ${cx} ${cy - r}Z`
        : `M${cx} ${cy} L${x1} ${y1} A${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`,
      mid: angle + sweep / 2,
      share: Math.round((p.value / total) * 100),
      label: p.label,
    })
    angle = end
  }

  return (
    <>
      {slices.map((s, i) => (
        <g key={i}>
          <path d={s.d} className={`nx-chart-slice nx-chart-s${i % 6}`} />
          {s.share >= 8 && (
            <text
              x={cx + r * 0.62 * Math.cos(s.mid)}
              y={cy + r * 0.62 * Math.sin(s.mid) + 4}
              className="nx-chart-slice-label"
              textAnchor="middle"
            >{s.share}%</text>
          )}
        </g>
      ))}
      {/* A legend, because a slice label cannot hold a region's name. */}
      {spec.data.map((p, i) => (
        <g key={`l${i}`} transform={`translate(214 ${46 + i * 19})`}>
          <rect width="11" height="11" rx="2" className={`nx-chart-slice nx-chart-s${i % 6}`} />
          <text x="17" y="9.5" className="nx-chart-label" textAnchor="start">
            {p.label.length > 30 ? `${p.label.slice(0, 29)}…` : p.label}
          </text>
        </g>
      ))}
    </>
  )
}
