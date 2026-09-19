import { useState } from 'react'
import type { Series, Unit } from '../../lib/school/demo'

/**
 * Learning outcomes by region.
 *
 * A single measure across one dimension, so it is a plain bar chart with one
 * hue rather than a colour per region: colour here would encode nothing that
 * the position and label do not already say. Data ends are rounded and each
 * bar carries its own value, so no legend is needed.
 */
export function RegionBars({ units, onOpen }: { units: Unit[]; onOpen?: (u: Unit) => void }) {
  const [hover, setHover] = useState<{ u: Unit; x: number; y: number } | null>(null)
  const max = 100

  return (
    <div className="nb-chart" style={{ paddingBottom: 18 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 190 }}>
        {units.map(u => (
          <button
            key={u.id}
            onClick={() => onOpen?.(u)}
            onMouseMove={e => setHover({ u, x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setHover(null)}
            style={{
              flex: '1 1 0', minWidth: 0, height: '100%', border: 0, padding: 0,
              background: 'transparent', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            }}
            aria-label={`${u.name}, ${u.pct} per cent`}
          >
            <span
              style={{
                display: 'block',
                height: `${(u.pct / max) * 100}%`,
                background: hover?.u.id === u.id ? 'var(--blue)' : 'var(--blue-100)',
                borderRadius: '4px 4px 0 0',
              }}
            />
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 9 }}>
        {units.map(u => (
          <span
            key={u.id}
            style={{
              flex: '1 1 0', minWidth: 0, fontSize: 10, color: 'var(--muted)',
              textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {u.name.split(' ')[0]}
          </span>
        ))}
      </div>

      {hover && (
        <div
          className="nb-tip"
          style={{
            opacity: 1,
            left: Math.min(hover.x + 14, window.innerWidth - 180),
            top: hover.y - 10,
          }}
        >
          <b>{hover.u.name}</b>
          <div className="r">{hover.u.meta}<span>{hover.u.pct}%</span></div>
        </div>
      )}
    </div>
  )
}

interface Hover { i: number; x: number; y: number }

/**
 * Coverage through the term.
 *
 * Every series is labelled at its end rather than relying on the legend. The
 * validated palette clears colourblind separation for deuteranopia and
 * protanopia comfortably, but sits in the marginal band for tritanopia, and
 * the rule there is that colour alone must not carry identity.
 */
export function CoverageChart({ series }: { series: Series[] }) {
  const [hover, setHover] = useState<Hover | null>(null)

  const W = 680, H = 270
  const P = { t: 16, r: 100, b: 30, l: 34 }
  const iw = W - P.l - P.r
  const ih = H - P.t - P.b
  const n = series[0].values.length

  const x = (i: number) => P.l + (i / (n - 1)) * iw
  const y = (v: number) => P.t + ih - (v / 80) * ih

  return (
    <div className="nb-chart">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ minWidth: 600 }}
        role="img"
        aria-label="Syllabus coverage by week, national compared with the strongest and weakest regions"
        onMouseLeave={() => setHover(null)}
      >
        <g className="grid">
          {[0, 20, 40, 60, 80].map(v => (
            <line key={v} x1={P.l} y1={y(v)} x2={P.l + iw} y2={y(v)} />
          ))}
        </g>

        <g className="axis">
          {[0, 20, 40, 60, 80].map(v => (
            <text key={v} x={P.l - 9} y={y(v) + 4} textAnchor="end">{v}</text>
          ))}
          {[0, 3, 6, 9, 11].map(i => (
            <text key={i} x={x(i)} y={H - 9} textAnchor="middle">Wk {i + 1}</text>
          ))}
        </g>

        {hover && (
          <line x1={x(hover.i)} y1={P.t} x2={x(hover.i)} y2={P.t + ih}
                stroke="var(--rule)" strokeWidth={1} />
        )}

        {series.map(s => (
          <g key={s.name}>
            <path
              d={s.values.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ')}
              fill="none" stroke={s.hex} strokeWidth={2}
              strokeLinecap="round" strokeLinejoin="round"
            />
            <circle className="dotmark" cx={x(n - 1)} cy={y(s.values[n - 1])} r={4.5} fill={s.hex} />
            <text className="slabel" x={x(n - 1) + 11} y={y(s.values[n - 1]) + 4} fill={s.hex}>
              {s.name}
            </text>
          </g>
        ))}

        {Array.from({ length: n }, (_, i) => (
          <rect
            key={i}
            x={x(i) - iw / (n - 1) / 2}
            y={P.t}
            width={iw / (n - 1)}
            height={ih}
            fill="transparent"
            onMouseMove={e => setHover({ i, x: e.clientX, y: e.clientY })}
          />
        ))}
      </svg>

      {hover && (
        <div
          className="nb-tip"
          style={{
            opacity: 1,
            left: Math.min(hover.x + 16, window.innerWidth - 190),
            top: hover.y - 10,
          }}
        >
          <b>Week {hover.i + 1}</b>
          {series.map(s => (
            <div className="r" key={s.name}>
              <i style={{ background: s.hex }} />
              {s.name}
              <span>{s.values[hover.i]}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
