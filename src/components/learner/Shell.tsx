import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { LearnerContext } from '../../lib/education/context'
import {
  IconHome, IconBook, IconCompass, IconPlay, IconPencil, IconAward,
  IconChart, IconUser, IconCog, IconSearch, IconMenu, IconChevron,
} from './ui'

/**
 * The learner application shell.
 *
 * One shell for every learner. There is no branch anywhere below on education
 * level: a five year old and a postgraduate render through this same component,
 * differing only in the context they were handed.
 *
 * Two rules this file exists to hold:
 *
 *   1. Navigation is derived from the resolved context, not from a hard-coded
 *      list. A learner whose configuration names no examination has no
 *      examination destination at all, and no code here mentions BECE, WASSCE,
 *      JHS or any other specific thing.
 *
 *   2. Nothing rendered here is a database word. No table name, no column name,
 *      no code, no identifier reaches the screen.
 */

export type Destination =
  | 'home' | 'curriculum' | 'continue' | 'explore'
  | 'practice' | 'exam' | 'progress' | 'profile' | 'settings'

export interface ShellProps {
  ctx: LearnerContext
  /** Where the learner is now, so exactly one navigation item reads as active. */
  at: Destination
  onNavigate: (to: Destination) => void
  onSignOut: () => void
  /** The title shown in the header, in the learner's own vocabulary. */
  heading?: string
  /** Optional trail, rendered by the page inside the content area. */
  children: ReactNode
}

interface Item { key: Destination; label: string; icon: ReactNode; sub?: boolean }

/**
 * The navigation, assembled from context.
 *
 * `workLabel` and the examination come from configuration, so a university
 * reads its own vocabulary from the same code that gives a primary school
 * theirs. An absent examination removes the destination rather than disabling
 * it, because a destination that can never apply should not be visible.
 */
function buildNav(ctx: LearnerContext): { group: string | null; items: Item[] }[] {
  const learn: Item[] = [
    { key: 'curriculum', label: 'My curriculum', icon: <IconBook />, sub: true },
    { key: 'continue', label: 'Continue learning', icon: <IconPlay />, sub: true },
    { key: 'explore', label: 'Explore', icon: <IconCompass />, sub: true },
  ]

  const doing: Item[] = [
    { key: 'practice', label: ctx.workLabel, icon: <IconPencil /> },
  ]
  // Only when the learner's configuration actually names an examination.
  if (ctx.examination) {
    doing.push({ key: 'exam', label: `${ctx.examination.label} preparation`, icon: <IconAward /> })
  }
  doing.push({ key: 'progress', label: ctx.progressLabel, icon: <IconChart /> })

  return [
    { group: null, items: [{ key: 'home', label: 'Home', icon: <IconHome /> }] },
    { group: 'Learn', items: learn },
    { group: null, items: doing },
  ]
}

/** Initials for the avatar. Falls back rather than rendering an empty circle. */
function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase()
}

/**
 * The learner's academic position, in words.
 *
 * Level and group only. No curriculum version, no level code, no identifiers:
 * those are how the platform files the learner, not how the learner thinks of
 * themselves.
 */
/** The group's name, without repeating a stream the name already carries. */
function groupName(ctx: LearnerContext): string {
  const g = ctx.group
  if (!g) return ''
  return g.stream && !g.name.includes(g.stream) ? `${g.name} ${g.stream}` : g.name
}

function contextLine(ctx: LearnerContext): string {
  const group = ctx.group?.name ?? ctx.programme?.name ?? null
  if (!group) return ctx.levelLabel

  // A class is very often named after its level, and a stream is very often
  // already part of the class name. Repeating either reads as a stutter, so
  // each part is added only when it is not already there.
  let line = group.includes(ctx.levelLabel) ? group : `${ctx.levelLabel} · ${group}`
  const stream = ctx.group?.stream
  if (stream && !line.includes(stream)) line += ` ${stream}`
  return line
}

export default function LearnerShell({ ctx, at, onNavigate, onSignOut, heading, children }: ShellProps) {
  const [drawer, setDrawer] = useState(false)
  const [menu, setMenu] = useState(false)
  const prof = useRef<HTMLDivElement>(null)

  // Close the menu on an outside click or Escape, the way a menu should behave.
  useEffect(() => {
    if (!menu) return
    const away = (e: MouseEvent) => {
      if (prof.current && !prof.current.contains(e.target as Node)) setMenu(false)
    }
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenu(false) }
    document.addEventListener('mousedown', away)
    document.addEventListener('keydown', key)
    return () => { document.removeEventListener('mousedown', away); document.removeEventListener('keydown', key) }
  }, [menu])

  // The drawer must not survive a navigation, or the learner lands behind it.
  useEffect(() => { setDrawer(false) }, [at])

  const nav = buildNav(ctx)
  const go = (to: Destination) => { onNavigate(to); setMenu(false) }

  // The bottom bar carries the primary destinations only. Sub-items live in the
  // drawer, because five targets is the most a thumb should have to choose from.
  const tabs: Item[] = [
    { key: 'home', label: 'Home', icon: <IconHome /> },
    { key: 'curriculum', label: 'Learn', icon: <IconBook /> },
    { key: 'practice', label: ctx.workLabel, icon: <IconPencil /> },
    ...(ctx.examination ? [{ key: 'exam' as const, label: 'Exam', icon: <IconAward /> }] : []),
    { key: 'progress', label: ctx.progressLabel, icon: <IconChart /> },
  ]

  return (
    <div className="nb-school">
      <div className="nb-app">

        {drawer && <button className="nb-scrim" aria-label="Close navigation" onClick={() => setDrawer(false)} />}

        <nav className="nb-side" data-open={drawer} aria-label="Learning">
          {/* The real brand asset, the same file Phase 1 puts in its header. */}
          <span className="nb-side-brand">
            <img src="/nexacore-logo.jpg" alt="NexaCore" />
          </span>

          <div className="nb-side-nav">
            {nav.map((g, i) => (
              <div key={g.group ?? `g${i}`}>
                {g.group && <span className="nb-navgroup">{g.group}</span>}
                {g.items.map(it => (
                  <button key={it.key}
                          className={`nb-nav${it.sub ? ' sub' : ''}`}
                          aria-current={at === it.key ? 'page' : undefined}
                          onClick={() => go(it.key)}>
                    {!it.sub && <span className="ico" aria-hidden="true">{it.icon}</span>}
                    {it.label}
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* The learner, from authenticated data. Nothing here is written into
              the source: the name, level, group and school are all resolved. */}
          <div className="nb-me">
            <div className="nb-me-row">
              <span className="nb-avatar">{initials(ctx.studentName)}</span>
              <span style={{ minWidth: 0 }}>
                <span className="nb-me-name">{ctx.studentName}</span>
                <span className="nb-me-sub">
                  {contextLine(ctx)}
                  {ctx.institution && <><br />{ctx.institution.name}</>}
                </span>
              </span>
            </div>
            <div style={{ marginTop: 10 }}>
              <button className="nb-nav" onClick={() => go('profile')}>
                <span className="ico" aria-hidden="true"><IconUser /></span>Profile
              </button>
              <button className="nb-nav" onClick={() => go('settings')}>
                <span className="ico" aria-hidden="true"><IconCog /></span>Settings
              </button>
              <button className="nb-nav" onClick={onSignOut}>Sign out</button>
            </div>
          </div>
        </nav>

        <header className="nb-head">
          <button className="nb-burger" aria-label="Open navigation"
                  aria-expanded={drawer} onClick={() => setDrawer(v => !v)}>
            <IconMenu />
          </button>

          <span className="nb-head-t">{heading ?? 'Home'}</span>

          <div className="nb-head-r">
            {/* Present and functional as a control, but it searches nothing yet:
                search belongs to a later stage, so it is disabled rather than
                pretending to work. */}
            <div className="nb-search">
              <span style={{ color: 'var(--faint)', display: 'grid' }} aria-hidden="true"><IconSearch /></span>
              <input placeholder="Search is coming soon" disabled aria-label="Search" />
            </div>

            <span className="nb-ctx-chip" title="Your current learning context">
              {contextLine(ctx)}
            </span>

            <div className="nb-prof" ref={prof}>
              <button className="nb-prof-btn" aria-haspopup="menu" aria-expanded={menu}
                      onClick={() => setMenu(v => !v)}>
                <span className="nb-avatar sm">{initials(ctx.studentName)}</span>
                <span style={{ color: 'var(--muted)', display: 'grid', transform: 'rotate(90deg)' }}
                      aria-hidden="true"><IconChevron /></span>
              </button>

              {menu && (
                <div className="nb-pop" role="menu">
                  <div className="nb-pop-h">{ctx.studentName}</div>

                  <div className="nb-pop-l">Your learning context</div>
                  <div className="nb-pop-kv"><span>Level</span><b>{ctx.levelLabel}</b></div>
                  {ctx.group && (
                    <div className="nb-pop-kv">
                      <span>{ctx.group.typeLabel}</span>
                      <b>{groupName(ctx)}</b>
                    </div>
                  )}
                  {ctx.programme && <div className="nb-pop-kv"><span>Programme</span><b>{ctx.programme.name}</b></div>}
                  {ctx.institution && <div className="nb-pop-kv"><span>School</span><b>{ctx.institution.name}</b></div>}
                  {/* The period is named by the context, so a university reads
                      Semester where a school reads Term. */}
                  {ctx.period && (
                    <div className="nb-pop-kv">
                      <span>{ctx.period.noun}</span>
                      <b>{ctx.period.number} of {ctx.period.count}</b>
                    </div>
                  )}
                  {ctx.academicYear && <div className="nb-pop-kv"><span>Year</span><b>{ctx.academicYear}</b></div>}

                  <hr />
                  {/* Deliberately inert. Changing context is a later stage, and a
                      control that pretended to work would be a lie. */}
                  <button className="nb-pop-b" role="menuitem" disabled>
                    Change learning context
                    <span className="why">Not available yet</span>
                  </button>
                  <button className="nb-pop-b" role="menuitem" onClick={() => go('profile')}>Profile</button>
                  <button className="nb-pop-b" role="menuitem" onClick={() => go('settings')}>Settings</button>
                  <hr />
                  <button className="nb-pop-b danger" role="menuitem" onClick={onSignOut}>Sign out</button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="nb-body">
          <div className="nb-wrap">{children}</div>
        </main>

        <nav className="nb-tabs" aria-label="Main">
          {tabs.map(t => (
            <button key={t.key} className="nb-tab"
                    aria-current={at === t.key ? 'page' : undefined}
                    onClick={() => go(t.key)}>
              <span aria-hidden="true" style={{ display: 'grid' }}>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
