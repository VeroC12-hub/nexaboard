import type { ReactNode } from 'react'

/**
 * Learner interface primitives.
 *
 * Every later learner screen builds from these, so that spacing, typography and
 * state handling are decided once. They carry no knowledge of education level,
 * curriculum or database shape: callers pass words, these render them.
 *
 * The vocabulary rule this file exists to enforce: nothing here ever prints a
 * table name, a column name, a code or an identifier. If a caller has only a
 * database word, the caller translates it before it arrives.
 */

/* ------------------------------------------------------------------ text -- */

export function PageTitle({ title, lede }: { title: string; lede?: ReactNode }) {
  return (
    <>
      <h1 className="nb-title">{title}</h1>
      {lede && <p className="nb-lede">{lede}</p>}
    </>
  )
}

export function Section({ title, say, right, children }: {
  title: string; say?: string; right?: ReactNode; children: ReactNode
}) {
  return (
    <section className="nb-sect">
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
        <h2 className="nb-sect-h">{title}</h2>
        {right && <span style={{ marginLeft: 'auto' }}>{right}</span>}
      </div>
      {say && <p className="nb-sect-s">{say}</p>}
      {children}
    </section>
  )
}

/* ----------------------------------------------------------- breadcrumbs -- */

export interface Crumb {
  label: string
  /** Omitted on the final crumb, which is where the learner already is. */
  onClick?: () => void
}

/**
 * The trail back out of wherever the learner has navigated to.
 *
 * Takes labels, never codes. A caller holding an identifier is expected to have
 * resolved it to a name first.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null
  return (
    <nav className="nb-bc" aria-label="Breadcrumb">
      {items.map((c, i) => {
        const last = i === items.length - 1
        return (
          <span key={`${c.label}-${i}`} style={{ display: 'contents' }}>
            {i > 0 && <span className="sep" aria-hidden="true">/</span>}
            {last || !c.onClick
              ? <span className="now" aria-current="page">{c.label}</span>
              : <button onClick={c.onClick}>{c.label}</button>}
          </span>
        )
      })}
    </nav>
  )
}

/* ---------------------------------------------------------------- states -- */

/** A single shimmering placeholder. Width and height are the caller's business. */
export function Skeleton({ w = '100%', h = 14, r }: { w?: string | number; h?: number; r?: number }) {
  return <div className="nb-skel" style={{ width: w, height: h, borderRadius: r }} aria-hidden="true" />
}

/**
 * What a page shows while it is fetching.
 *
 * Shaped like the content it replaces, so the page does not jump when the real
 * thing arrives. Announced politely rather than silently, for anyone using a
 * screen reader.
 */
export function LoadingBlock({ rows = 3, title = true }: { rows?: number; title?: boolean }) {
  return (
    <div role="status" aria-live="polite" aria-busy="true">
      <span className="nb-sr-only" style={{
        position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)',
      }}>Loading</span>
      {title && <div style={{ marginBottom: 18 }}><Skeleton w="42%" h={24} /></div>}
      <div style={{ display: 'grid', gap: 10 }}>
        {Array.from({ length: rows }, (_, i) => (
          <div key={i} style={{
            border: '1px solid var(--line)', borderRadius: 11, padding: 15, background: 'var(--card)',
          }}>
            <Skeleton w="34%" h={13} />
            <div style={{ height: 8 }} />
            <Skeleton w="72%" h={11} />
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Nothing to show, said in the learner's language.
 *
 * "No lessons have been added yet" is a fact about the curriculum. "No rows
 * found" is a fact about a query, and the learner is not running one.
 */
export function EmptyState({ icon, title, say, action }: {
  icon?: ReactNode; title: string; say?: string; action?: ReactNode
}) {
  return (
    <div className="nb-state">
      <div className="mark" aria-hidden="true">{icon ?? <IconBook />}</div>
      <h3>{title}</h3>
      {say && <p>{say}</p>}
      {action && <div className="act">{action}</div>}
    </div>
  )
}

/**
 * Something failed.
 *
 * The learner is told what did not work and offered a way forward. The
 * underlying message is deliberately not printed: it is a PostgREST or SQL
 * string, and it belongs in the console, not in front of a child.
 */
export function ErrorState({ title, say, onRetry, detail }: {
  title?: string; say?: string; onRetry?: () => void; detail?: unknown
}) {
  if (detail !== undefined && detail !== null) console.error('[learner]', detail)
  return (
    <div className="nb-state bad" role="alert">
      <div className="mark" aria-hidden="true"><IconAlert /></div>
      <h3>{title ?? 'We could not load this'}</h3>
      <p>{say ?? 'Something went wrong on our side. Your learning and your progress are safe.'}</p>
      {onRetry && (
        <div className="act">
          <button className="nb-btn p" onClick={onRetry}>Try again</button>
        </div>
      )}
    </div>
  )
}

/* ---------------------------------------------------------------- inputs -- */

/**
 * A labelled select.
 *
 * Options are always passed in. Nothing about education levels, classes or
 * programmes is baked in here, because all of that is data.
 */
export function Select({ label, value, onChange, options, placeholder, hint, error, disabled, id }: {
  label: string
  value: string | null
  onChange: (v: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
  hint?: string
  error?: string
  disabled?: boolean
  id?: string
}) {
  const fid = id ?? `sel-${label.replace(/\s+/g, '-').toLowerCase()}`
  return (
    <div className="nb-field">
      <label className="nb-label" htmlFor={fid}>{label}</label>
      <select id={fid} className="nb-select" value={value ?? ''} disabled={disabled}
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={error ? `${fid}-e` : hint ? `${fid}-h` : undefined}
              onChange={e => onChange(e.target.value)}>
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {error ? <span className="nb-fielderr" id={`${fid}-e`}>{error}</span>
             : hint ? <span className="nb-fieldhint" id={`${fid}-h`}>{hint}</span> : null}
    </div>
  )
}

export function TextField({ label, value, onChange, placeholder, hint, error, disabled, type = 'text', id }: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  hint?: string
  error?: string
  disabled?: boolean
  type?: string
  id?: string
}) {
  const fid = id ?? `inp-${label.replace(/\s+/g, '-').toLowerCase()}`
  return (
    <div className="nb-field">
      <label className="nb-label" htmlFor={fid}>{label}</label>
      <input id={fid} className="nb-input" type={type} value={value} disabled={disabled}
             placeholder={placeholder}
             aria-invalid={error ? 'true' : undefined}
             aria-describedby={error ? `${fid}-e` : hint ? `${fid}-h` : undefined}
             onChange={e => onChange(e.target.value)} />
      {error ? <span className="nb-fielderr" id={`${fid}-e`}>{error}</span>
             : hint ? <span className="nb-fieldhint" id={`${fid}-h`}>{hint}</span> : null}
    </div>
  )
}

/* ----------------------------------------------------------------- marks -- */

/**
 * The demonstration marker.
 *
 * Shown wherever content belongs to a curriculum that is not an active official
 * one. Quiet enough not to shout, unmistakable enough that nobody can mistake
 * demonstration material for published national curriculum.
 */
export function DemoMark({ compact }: { compact?: boolean }) {
  return (
    <span className="nb-pill warn" title="Demonstration data. Not official curriculum."
          style={{ letterSpacing: '.06em' }}>
      {compact ? 'DEMO' : 'DEMO · NOT OFFICIAL'}
    </span>
  )
}

/* ----------------------------------------------------------------- icons -- */
/* Inline so the shell has no icon dependency and nothing loads over the wire. */

const S = { width: 17, height: 17, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
            strokeWidth: 1.9, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const IconHome = () => <svg {...S}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>
export const IconBook = () => <svg {...S}><path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v18H5.5A1.5 1.5 0 0 1 4 19.5z" /><path d="M8 3v18" /></svg>
export const IconPlay = () => <svg {...S}><circle cx="12" cy="12" r="9" /><path d="M10 8.5 16 12l-6 3.5z" /></svg>
export const IconCompass = () => <svg {...S}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></svg>
export const IconPencil = () => <svg {...S}><path d="M4 20h4L20 8l-4-4L4 16z" /></svg>
export const IconAward = () => <svg {...S}><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></svg>
export const IconChart = () => <svg {...S}><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-7" /><path d="M22 20H2" /></svg>
export const IconUser = () => <svg {...S}><circle cx="12" cy="8" r="4" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></svg>
export const IconCog = () => <svg {...S}><circle cx="12" cy="12" r="3.2" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" /></svg>
export const IconSearch = () => <svg {...S} width={15} height={15}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-3.6-3.6" /></svg>
export const IconMenu = () => <svg {...S}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
export const IconAlert = () => <svg {...S} width={20} height={20}><circle cx="12" cy="12" r="9" /><path d="M12 7.5v5.5" /><path d="M12 16.2v.2" /></svg>
export const IconChevron = () => <svg {...S} width={13} height={13}><path d="m9 5 6 7-6 7" /></svg>
