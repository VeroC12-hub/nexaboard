/**
 * Senior high, TVET and university.
 *
 * ── Why this one is a desktop layout ────────────────────────────────────────
 *
 * The other three interfaces are phones, because a nine year old's device is a
 * phone and usually somebody else's. By senior high a learner is as likely to
 * be at a school computer, a laboratory machine or a laptop, and a single
 * column of cards wastes most of a wide screen: the reason a dashboard exists
 * is to put the state of everything in one glance, and one column cannot.
 *
 * It still collapses to one column with a drawer, because the same learner
 * checks it on a phone between lectures.
 *
 * ── What it does not have ───────────────────────────────────────────────────
 *
 * The design this follows carried a course marketplace, an upgrade panel, a
 * list of instructors and a subscriptions table. None of that is this product:
 * there is nothing to buy, nobody sells courses here, and the tutor is not a
 * person with a profile. Taking the layout and leaving the shop is the whole
 * job of reading a reference rather than copying one.
 */

import { useEffect, useMemo, useState } from 'react'
import '../styles/scholar.css'
import { Icon, type Mark } from '../components/kid/art'
import { subjectsFor } from '../lib/education/subjects'
import { asksProgramme, programmeById, timetableFor } from '../lib/education/programmes'
import { allTopics, syllabusFor, topicsFor, type Topic } from '../lib/education/syllabus'
import { standingOf, weekStart } from '../lib/education/rewards'
import { localPlan, savedPlan } from '../lib/education/plan'
import { asksFor } from '../lib/education/ask'
import type { Attempt } from '../lib/education/mastery'
import type { LearnerProfile } from '../lib/education/learner'

type Where = 'dashboard' | 'subjects' | 'progress'

/* Drawn marks, not font characters. The rail used ▦ ▤ ◴ ⏻ ↩, which render
   differently on every machine and looked like mojibake on most of them. */
const NAV: Array<{ key: Where, name: string, mark: Mark }> = [
  { key: 'dashboard', name: 'Dashboard', mark: 'grid' },
  { key: 'subjects', name: 'My subjects', mark: 'list' },
  { key: 'progress', name: 'Progress', mark: 'clock' },
]

const DAY_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const DAY = 24 * 60 * 60 * 1000

interface Paper {
  id: string
  name: string
  note: string
  band: 'core' | 'elective'
  topics: Topic[]
  done: number
  /** How they are actually doing on it, where there is enough to say. */
  accuracy: number | null
}

function greetingFor(now = new Date()): string {
  const h = now.getHours()
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'
}

export default function ScholarApp({
  profile, attempts, onOpenSubject, onSignOut, onBack,
}: {
  profile: LearnerProfile
  attempts: Attempt[]
  onOpenSubject: (subjectId: string, topicId?: string) => void
  onSignOut: () => void
  onBack?: () => void
}) {
  const [where, setWhere] = useState<Where>('dashboard')
  const [open, setOpen] = useState(false)
  const [find, setFind] = useState('')

  const worked = useMemo(() => new Set(attempts.map(a => a.objectiveId)), [attempts])

  /**
   * Their papers.
   *
   * Filtered by the programme they are offering, where the stage has
   * programmes. Senior high is not a list of subjects, it is four core papers
   * plus the electives of one course, and showing a General Science learner
   * all thirty three would be the same fault the subject chooser already had.
   */
  const papers = useMemo<Paper[]>(() => {
    const allowed = timetableFor(profile.stage, profile.programme)
    return subjectsFor(profile.stage)
      .filter(s => !allowed || allowed.includes(s.id))
      .map(s => {
        const syllabus = syllabusFor(profile.stage, s.id)
        const mine = syllabus ? topicsFor(syllabus, profile.level) : []
        const topics = mine.length ? mine : (syllabus ? allTopics(syllabus) : [])
        const rows = attempts.filter(
          a => a.isCorrect !== null && topics.some(t => t.id === a.objectiveId))
        return {
          id: s.id,
          name: s.name,
          note: s.note ?? `${topics.length} topics`,
          band: s.band === 'elective' ? 'elective' as const : 'core' as const,
          topics,
          done: topics.filter(t => worked.has(t.id)).length,
          /* Null under six answers. Three questions is not a rate, and a
             percentage from three answers on a dashboard is a number a learner
             will believe. */
          accuracy: rows.length >= 6
            ? rows.filter(a => a.isCorrect === true).length / rows.length
            : null,
        }
      })
      .filter(p => p.topics.length > 0)
  }, [profile.stage, profile.level, profile.programme, attempts, worked])

  const standing = useMemo(() => standingOf(attempts, profile.stage), [attempts, profile.stage])

  const plan = useMemo(() => {
    const first = papers[0]
    const saved = first ? savedPlan(profile.id, first.id) : null
    return saved ?? localPlan({ profile, attempts, asks: asksFor(profile.id) })
  }, [profile, attempts, papers])

  const whereTopic = useMemo(() => {
    const m = new Map<string, { paper: Paper, topic: Topic }>()
    for (const p of papers) for (const t of p.topics) m.set(t.id, { paper: p, topic: t })
    return m
  }, [papers])

  /** Work finished lately, newest first, with how it went. */
  const recent = useMemo(() => {
    const byTopic = new Map<string, { right: number, total: number, at: string }>()
    for (const a of attempts) {
      if (a.isCorrect === null || !whereTopic.has(a.objectiveId)) continue
      const row = byTopic.get(a.objectiveId) ?? { right: 0, total: 0, at: a.at }
      row.total += 1
      if (a.isCorrect) row.right += 1
      if (a.at > row.at) row.at = a.at
      byTopic.set(a.objectiveId, row)
    }
    /* Built without a non-null assertion, and without a nested early return,
       which the compiler cannot memoise around. */
    const rows: Row[] = []
    for (const [id, row] of byTopic) {
      const at = whereTopic.get(id)
      if (at) rows.push({ ...row, paper: at.paper, topic: at.topic })
    }
    rows.sort((x, y) => (x.at < y.at ? 1 : -1))
    return rows.slice(0, 6)
  }, [attempts, whereTopic])

  /** Papers with anything done on them. */
  const started = useMemo(() => papers.filter(p => p.done > 0), [papers])

  /** Somewhere to go next: a paper's first untouched topic. */
  const next = useMemo(() => {
    /* Collected then taken from, rather than returned from inside a loop: an
       early return out of a nested loop is a shape the compiler cannot
       memoise around, and it warns rather than silently deoptimising. */
    const first: Array<{ paper: Paper, topic: Topic }> = []
    for (const p of papers) {
      const t = p.topics.find(x => !worked.has(x.id))
      if (t) first.push({ paper: p, topic: t })
    }
    return first[0] ?? null
  }, [papers, worked])

  const hunting = find.trim().toLowerCase()
  const found = useMemo(() => {
    if (hunting.length < 2) return []
    const out: Array<{ paper: Paper, topic: Topic }> = []
    for (const p of papers) {
      for (const t of p.topics) {
        if (t.title.toLowerCase().includes(hunting) || p.name.toLowerCase().includes(hunting)) {
          out.push({ paper: p, topic: t })
        }
      }
    }
    /* Capped at the end rather than by breaking out. A learner's own subjects
       are a few hundred topics at most, so the whole scan costs nothing and
       the loop stays a shape the compiler can keep. */
    return out.slice(0, 12)
  }, [hunting, papers])

  const firstName = profile.name.trim().split(' ')[0] || 'there'
  const initials = (profile.name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2)
    || 'NE').toUpperCase()
  const course = programmeById(profile.stage, profile.programme)
  const start = weekStart()

  /* Escape closes the drawer. An overlay that can only be dismissed by
     clicking the thing it is covering is a trap for a keyboard. */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className={`sch${open ? ' is-open' : ''}`}>
      <div className="sch-scrim" onClick={() => setOpen(false)} />

      <nav className="sch-rail" aria-label="Main">
        <div className="sch-brand">
          {/* Wrapped. Making the brand row a flex container to place the close
              button turned NEXA, the dot and EDU into three separate flex
              items and spread the wordmark across the whole drawer. */}
          <span className="sch-brand-name">NEXA<i>·</i>EDU</span>
          {/* A way out from inside the drawer.

              Opened on a phone, the rail covered the burger that opened it and
              the scrim covered everything else, so the only way back was to
              guess that tapping the dimmed page would work. Tapping outside is
              still there, and Escape now works too, but neither of them is
              visible. */}
          <button
            className="sch-close"
            aria-label="Close the menu"
            onClick={() => setOpen(false)}>
            <Icon mark="back" size={18} />
          </button>
        </div>

        {NAV.map(n => (
          <button
            key={n.key}
            className={`sch-nav${where === n.key ? ' is-on' : ''}`}
            aria-current={where === n.key ? 'page' : undefined}
            onClick={() => { setWhere(n.key); setOpen(false) }}>
            <span className="sch-nav-mark" aria-hidden><Icon mark={n.mark} size={17} /></span> {n.name}
          </button>
        ))}

        <div className="sch-rail-foot">
          {onBack && (
            <button className="sch-nav" onClick={onBack}>
              <span className="sch-nav-mark" aria-hidden><Icon mark="back" size={17} /></span> Back to everyone
            </button>
          )}
          <button className="sch-nav" onClick={onSignOut}>
            <span className="sch-nav-mark" aria-hidden><Icon mark="power" size={17} /></span> Sign out
          </button>
        </div>
      </nav>

      <main className="sch-main">
        <div className="sch-top">
          <button className="sch-burger" aria-label="Menu" onClick={() => setOpen(true)}>
            <Icon mark="menu" size={20} />
          </button>

          <div className="sch-greet">
            <h1>{greetingFor()}, {firstName}</h1>
            {/* No emphasised word. "What do you want to *learn* today" put
                bold on the one word in the sentence that carries no
                information, which is emphasis spent on nothing. The line says
                what it says. */}
            <p>
              {course
                ? `Picking up ${course.name}.`
                : 'Pick a subject and the tutor writes the lesson from your syllabus.'}
            </p>
          </div>

          <input
            className="sch-search"
            value={find}
            placeholder="Search your topics"
            aria-label="Search your topics"
            onChange={e => setFind(e.target.value)} />

          <div className="sch-who">
            <span className="sch-who-ring" aria-hidden>{initials}</span>
            <span>
              <span className="sch-who-name">{profile.name || 'Learner'}</span>
              <span className="sch-who-sub">{profile.level}</span>
            </span>
          </div>
        </div>

        {/* A search is a destination of its own the moment there is something
            in it, because a learner who typed is looking for that and not for
            the dashboard behind it. */}
        {found.length > 0 ? (
          <div className="sch-panel">
            <div className="sch-panel-top">
              <h2>{found.length} {found.length === 1 ? 'topic' : 'topics'}</h2>
              <button className="sch-quiet" onClick={() => setFind('')}>Clear</button>
            </div>
            {found.map(({ paper, topic }) => (
              <div className="sch-line" key={topic.id}>
                <span className="sch-line-body">
                  <span className="sch-line-title">{topic.title}</span>
                  <span className="sch-line-sub">{paper.name} · {topic.year}</span>
                </span>
                <button
                  className="sch-btn is-quiet"
                  onClick={() => onOpenSubject(paper.id, topic.id)}>
                  Open
                </button>
              </div>
            ))}
          </div>
        ) : hunting.length >= 2 ? (
          <div className="sch-panel">
            <p className="sch-none">Nothing matches "{find}" in your subjects.</p>
          </div>
        ) : where === 'progress' ? (
          <Progress papers={papers} recent={recent} standing={standing} />
        ) : where === 'subjects' ? (
          <div className="sch-panel">
            <div className="sch-panel-top">
              <h2>My subjects</h2>
              <span className="sch-line-sub">{papers.length}</span>
            </div>

            {/* Said plainly when the list is everything rather than theirs.

                `timetableFor` returns null both when no course has been chosen
                and when the stored one no longer resolves, and in either case
                a General Science learner is looking at Literature and
                Economics. Showing everything is the safe fallback; showing it
                without saying so is how somebody ends up believing they sit
                thirty three papers. */}
            {!course && asksProgramme(profile.stage) && (
              <p className="sch-none" style={{ marginBottom: 14 }}>
                No course is set for this learner, so this is every subject at
                this stage rather than their own timetable.
              </p>
            )}

            <Papers papers={papers} onOpen={onOpenSubject} />
          </div>
        ) : (
          <div className="sch-grid">
            <div>
              {/* Nothing done yet: one invitation, not two empty panels.

                  Two boxes each holding a single line of "nothing here"
                  filled half a 1280px screen with apologies and read as a
                  page that had failed to load. */}
              {started.length === 0 && recent.length === 0 ? (
                <div className="sch-panel">
                  <div className="sch-panel-top"><h2>Start here</h2></div>
                  <p className="sch-none" style={{ marginBottom: 16 }}>
                    Nothing has been taught yet. Open any subject and the tutor
                    writes the first lesson from your syllabus.
                  </p>
                  <Papers papers={papers.slice(0, 4)} onOpen={onOpenSubject} />
                </div>
              ) : (
                <>
                  <div className="sch-panel">
                    <div className="sch-panel-top">
                      <h2>In progress</h2>
                      <button className="sch-quiet" onClick={() => setWhere('subjects')}>
                        View all
                      </button>
                    </div>
                    <Papers
                      papers={started.slice(0, 3)}
                      empty="Nothing started yet."
                      onOpen={onOpenSubject} />
                  </div>

                  {recent.length > 0 && (
                    <div className="sch-panel">
                      <div className="sch-panel-top">
                        <h2>Recent work</h2>
                        <button className="sch-quiet" onClick={() => setWhere('progress')}>
                          All progress
                        </button>
                      </div>
                      <Recent recent={recent} />
                    </div>
                  )}
                </>
              )}
            </div>

            <div>
              <div className="sch-panel">
                <div className="sch-panel-top"><h2>This week</h2></div>
                <div className="sch-week">
                  {standing.week.map((on, i) => {
                    const d = new Date(start + i * DAY)
                    const today = new Date().toDateString() === d.toDateString()
                    return (
                      <span
                        key={i}
                        className={`sch-wday${on ? ' is-done' : ''}${today ? ' is-today' : ''}`}
                        title={on ? 'Worked on this day' : 'Nothing recorded'}>
                        <span className="sch-wday-name">{DAY_SHORT[i]}</span>
                        <span className="sch-wday-n">{d.getDate()}</span>
                      </span>
                    )
                  })}
                </div>
                <p className="sch-none" style={{ marginTop: 14 }}>
                  {standing.daysLearned === 0
                    ? 'Nothing recorded this week yet.'
                    : `${standing.daysLearned} ${standing.daysLearned === 1 ? 'day' : 'days'} so far,`
                      + ` ${standing.xp} points in total.`}
                </p>
              </div>

              {next && (
                <div className="sch-panel">
                  <div className="sch-panel-top"><h2>Suggested next</h2></div>
                  <span className="sch-line-title">{next.topic.title}</span>
                  <p className="sch-line-sub" style={{ margin: '4px 0 14px' }}>
                    {next.paper.name} · {next.topic.year}
                  </p>
                  <button
                    className="sch-btn"
                    onClick={() => onOpenSubject(next.paper.id, next.topic.id)}>
                    Start
                  </button>
                </div>
              )}

              {/* What the tutor decided about how this learner learns. Stated
                  plainly here as everywhere else, because a learner given
                  video and no reading should know a choice was made. */}
              <div className="sch-panel">
                <div className="sch-panel-top"><h2>How you are taught</h2></div>
                <p className="sch-none">{plan.because}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

/* ── the pieces ───────────────────────────────────────────────────────────── */

function Papers({ papers, empty, onOpen }: {
  papers: Paper[]
  empty?: string
  onOpen: (subjectId: string, topicId?: string) => void
}) {
  if (!papers.length) {
    return <p className="sch-none">{empty ?? 'No subjects have an outline for your year yet.'}</p>
  }

  return (
    <div className="sch-cards">
      {papers.map(p => {
        const part = p.topics.length ? p.done / p.topics.length : 0
        return (
          <div className="sch-card" key={p.id}>
            <span className={`sch-tag${p.band === 'elective' ? ' is-elective' : ''}`}>
              {p.band === 'elective' ? 'Elective' : 'Core'}
            </span>
            <h3>{p.name}</h3>
            <p className="sch-card-note">{p.note}</p>
            <span className="sch-track" aria-hidden>
              <i style={{ width: `${Math.round(part * 100)}%` }} />
            </span>
            <div className="sch-card-foot">
              <span>
                {p.done} of {p.topics.length}
                {/* Only where there is enough to mean anything. */}
                {p.accuracy !== null && ` · ${Math.round(p.accuracy * 100)}% right`}
              </span>
            </div>
            {/* Quiet, deliberately.

                Four subject cards each with a solid gold button, plus the one
                in the rail, made five identical loud pills on one screen: at
                that point gold is the page's background noise rather than its
                accent. The recommended action in the rail keeps the gold; a
                subject you chose to look at gets an outline. */}
            <button className="sch-btn is-quiet" onClick={() => onOpen(p.id)}>
              {p.done > 0 ? 'Continue' : 'Start'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

interface Row { paper: Paper, topic: Topic, right: number, total: number, at: string }

function Recent({ recent }: { recent: Row[] }) {
  if (!recent.length) {
    return <p className="sch-none">No marked work yet. It appears here as you answer questions.</p>
  }

  return (
    <>
      {recent.map(r => {
        const pct = Math.round(r.right / r.total * 100)
        const tone = pct >= 70 ? ' is-strong' : pct < 40 ? ' is-weak' : ''
        return (
          <div className="sch-line" key={r.topic.id}>
            <span className="sch-line-body">
              <span className="sch-line-title">{r.topic.title}</span>
              <span className="sch-line-sub">
                {r.paper.name} · {new Date(r.at).toLocaleDateString()}
              </span>
            </span>
            <span className={`sch-score${tone}`}>
              <b>{pct}</b>
              <span>{r.right}/{r.total}</span>
            </span>
          </div>
        )
      })}
    </>
  )
}

function Progress({ papers, recent, standing }: {
  papers: Paper[]
  recent: Row[]
  standing: ReturnType<typeof standingOf>
}) {
  return (
    <>
      <div className="sch-panel">
        <div className="sch-panel-top">
          <h2>Where you stand</h2>
          <span className="sch-line-sub">{standing.xp} points</span>
        </div>
        {papers.length === 0 ? (
          <p className="sch-none">No subjects yet.</p>
        ) : papers.map(p => (
          <div className="sch-line" key={p.id}>
            <span className="sch-line-body">
              <span className="sch-line-title">{p.name}</span>
              <span className="sch-line-sub">
                {p.done} of {p.topics.length} topics
                {p.accuracy === null && p.done > 0 && ' · too early to judge'}
              </span>
              <span className="sch-track" style={{ marginTop: 8 }} aria-hidden>
                <i style={{ width: `${Math.round((p.topics.length ? p.done / p.topics.length : 0) * 100)}%` }} />
              </span>
            </span>
            {p.accuracy !== null && (
              <span className={`sch-score${p.accuracy >= 0.7 ? ' is-strong' : p.accuracy < 0.4 ? ' is-weak' : ''}`}>
                <b>{Math.round(p.accuracy * 100)}</b>
                <span>right</span>
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="sch-panel">
        <div className="sch-panel-top"><h2>Recent work</h2></div>
        <Recent recent={recent} />
      </div>
    </>
  )
}
