import type { ReactNode } from 'react'
import type { Unit } from '../../lib/school/demo'

/**
 * The pieces every Phase 2 screen is assembled from.
 *
 * Kept deliberately small. Screens should read as content, not as a pile of
 * div soup, and a shared piece is the only place a spacing or colour decision
 * gets made.
 */

export function Eyebrow({ children, live }: { children: ReactNode; live?: boolean }) {
  return (
    <div className="nb-eyebrow">
      {live && <span className="nb-live" />}
      {children}
    </div>
  )
}

export function PageHead({ eyebrow, title, live }: { eyebrow: string; title: string; live?: boolean }) {
  return (
    <>
      <Eyebrow live={live}>{eyebrow}</Eyebrow>
      <h1 className="nb-h1">{title}</h1>
    </>
  )
}

export function Section({ title, say, children }: { title: string; say?: string; children: ReactNode }) {
  return (
    <div className="nb-sec">
      <h2 className="nb-h2">{title}</h2>
      {say && <p className="nb-say">{say}</p>}
      {children}
    </div>
  )
}

export type Tone = 'good' | 'warn' | 'crit' | 'flat'

export function Pill({ tone = 'flat', children }: { tone?: Tone; children: ReactNode }) {
  return <span className={`nb-pill ${tone}`}>{children}</span>
}

export interface StatItem {
  label: string
  value: string
  note?: string
  dir?: 'up' | 'down'
}

export function Stats({ items }: { items: StatItem[] }) {
  return (
    <div className="nb-stats">
      {items.map(s => (
        <div className="nb-stat" key={s.label}>
          <b>{s.label}</b>
          <span>{s.value}</span>
          {s.note && <em className={s.dir === 'up' ? 'nb-up' : s.dir === 'down' ? 'nb-down' : ''}>{s.note}</em>}
        </div>
      ))}
    </div>
  )
}

export function Card({
  title, pill, pillTone = 'flat', children, insight, actions,
}: {
  title?: string
  pill?: string
  pillTone?: Tone
  children?: ReactNode
  insight?: boolean
  actions?: { label: string; kind?: 'p' | 'g'; onClick?: () => void }[]
}) {
  return (
    <div className={`nb-card${insight ? ' nb-insight' : ''}`}>
      {(title || pill) && (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          {title && <h3>{title}</h3>}
          {pill && <Pill tone={pillTone}>{pill}</Pill>}
        </div>
      )}
      {children && <p style={{ marginTop: title ? 6 : 0 }}>{children}</p>}
      {actions && (
        <div className="nb-acts">
          {actions.map(a => (
            <button key={a.label} className={`nb-btn ${a.kind ?? 'g'}`} onClick={a.onClick}>
              {a.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/** Below 52 is behind, below 62 is slipping. Same thresholds everywhere. */
export function toneFor(pct: number): string {
  return pct < 52 ? 'var(--crit)' : pct < 62 ? 'var(--warn)' : 'var(--good)'
}

export function RankList({ units, onOpen }: { units: Unit[]; onOpen?: (u: Unit) => void }) {
  return (
    <div className="nb-ranks">
      {units.map(u => {
        const c = toneFor(u.pct)
        return (
          <button key={u.id} className="nb-rank" onClick={() => onOpen?.(u)}>
            <div className="nb-rank-top">
              <span className="nb-rank-name">{u.name}</span>
              <span className="nb-rank-sub">{u.meta}</span>
              <span className="nb-rank-val" style={{ color: c }}>{u.pct}%</span>
            </div>
            <div className="nb-track"><i style={{ width: `${u.pct}%`, background: c }} /></div>
          </button>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------- layout -- */

export function Grid({ kind = 'two', children }: { kind?: 'two' | 'half'; children: ReactNode }) {
  return <div className={`nb-grid ${kind}`}>{children}</div>
}

export function Panel({
  title, more, onMore, pad, children,
}: {
  title: string
  more?: string
  onMore?: () => void
  pad?: boolean
  children: ReactNode
}) {
  return (
    <div className="nb-panel">
      <div className="nb-panel-head">
        <h3>{title}</h3>
        {more && <button className="more" onClick={onMore}>{more}</button>}
      </div>
      <div className={`nb-panel-body${pad ? ' pad' : ''}`}>{children}</div>
    </div>
  )
}

/* ------------------------------------------------------------------ table -- */

export interface Col { key: string; label: string; align?: 'right' }

export function Table({
  cols, rows, onRow,
}: {
  cols: Col[]
  rows: Record<string, ReactNode>[]
  onRow?: (r: Record<string, ReactNode>) => void
}) {
  return (
    <div className="nb-tablewrap">
      <table className="nb-table">
        <thead>
          <tr>{cols.map(c => <th key={c.key} className={c.align === 'right' ? 'num' : ''}>{c.label}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} onClick={() => onRow?.(r)} style={{ cursor: onRow ? 'pointer' : 'default' }}>
              {cols.map(c => <td key={c.key} className={c.align === 'right' ? 'num' : ''}>{r[c.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** A bar and a figure, for a percentage inside a table cell. */
export function MiniBar({ pct }: { pct: number }) {
  const c = toneFor(pct)
  return (
    <span className="nb-mini">
      <span className="bar"><i style={{ width: `${pct}%`, background: c }} /></span>
      <span className="pc" style={{ color: c }}>{pct}%</span>
    </span>
  )
}

/* ------------------------------------------------------------------- feed -- */

export interface FeedItem { text: ReactNode; ago: string; tone?: 'good' | 'warn' | 'crit' }

export function Feed({ items }: { items: FeedItem[] }) {
  return (
    <ul className="nb-feed">
      {items.map((f, i) => (
        <li key={i}>
          <span className={`dot ${f.tone ?? ''}`} />
          <span className="txt">{f.text}</span>
          <span className="ago">{f.ago}</span>
        </li>
      ))}
    </ul>
  )
}

/* -------------------------------------------------------------- timetable -- */

export interface Period { when: string; title: string; meta: string; state?: 'now' | 'done' }

export function Timetable({ periods }: { periods: Period[] }) {
  return (
    <div>
      {periods.map(p => (
        <div className={`nb-period ${p.state ?? ''}`} key={p.when + p.title}>
          <span className="when">{p.when}</span>
          <span className="what"><b>{p.title}</b><span>{p.meta}</span></span>
          {p.state === 'now' && <Pill tone="flat">Now</Pill>}
        </div>
      ))}
    </div>
  )
}

/* ---------------------------------------------------------- subject tiles -- */

export function SubjectTiles({ units }: { units: Unit[] }) {
  return (
    <div className="nb-subs">
      {units.map(u => {
        const c = toneFor(u.pct)
        return (
          <div className="nb-sub" key={u.id}>
            <b>{u.name}</b>
            <span className="v" style={{ color: c }}>{u.pct}%</span>
            <span className="t">{u.meta}</span>
            <span className="bar"><i style={{ width: `${u.pct}%`, background: c }} /></span>
          </div>
        )
      })}
    </div>
  )
}

