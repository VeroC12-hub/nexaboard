/**
 * The learner's own page: what to study, and how they want to be taught it.
 *
 * "Learn" is not something a person does. They learn Integrated Science, or
 * Mathematics, or technical drawing. So this comes before any teaching, and it
 * is the learner's choice rather than the platform's.
 *
 * ── Why this is a list and not a grid of cards ────────────────────────────────
 *
 * The first version gave every subject a card: a border, a radius, a coloured
 * left edge, a hover lift and a shadow, fifteen times over. Five treatments to
 * say "this text is clickable", and the only thing telling one subject from
 * another was a topic count in the corner.
 *
 * Under the real curriculum senior high has thirty three subjects. Thirty three
 * cards is not a choice, it is a scroll. So each subject is now a row with a
 * rule under it, and the row carries the two things worth knowing at the moment
 * of choosing: how much subject there is, and how much of it this learner has
 * already done. Those sit in a right aligned column, so a long list can be read
 * down rather than item by item.
 *
 * ── Why it shows a course and not every subject ───────────────────────────────
 *
 * A senior high learner does not study thirty three subjects. They study four
 * core ones and the electives of one course. Showing a General Science learner
 * Financial Accounting, Arabic and Performing Arts was the platform failing to
 * ask what a school asks on the first day.
 *
 * So the list is their own timetable: core, then their course's electives.
 * Everything else is still reachable, because searching looks across the whole
 * stage rather than across what is shown, and one press opens the rest. A
 * learner thinking about changing course should be able to look first, and a
 * General Arts learner curious about Physics should not be told no.
 *
 * The subject they left off in is lifted out above the list, because carrying on
 * should not mean finding it again. A filter appears once the list is long
 * enough to need one.
 *
 * Under the chosen subject is a box for whatever only this learner knows about
 * themselves. The dropdowns on the profile cover the common cases; this is for
 * "I am weak on fractions, go over them first", which no dropdown will ever
 * have. It is kept per subject, because that instruction is a fact about their
 * Mathematics and says nothing about their English.
 */

import { useMemo, useState } from 'react'
import '../styles/nexaedu.css'
import {
  NOTE_EXAMPLES, readinessOf, shapeOf, subjectsFor,
  type Readiness, type Subject,
} from '../lib/education/subjects'
import type { LearnerProfile, Stage } from '../lib/education/learner'
import { allTopics, syllabusFor } from '../lib/education/syllabus'
import {
  asksProgramme, programmeById, programmesFor, timetableFor,
} from '../lib/education/programmes'
import type { Attempt } from '../lib/education/mastery'

/** Above this many subjects, finding one by eye stops being reasonable. */
const FILTER_FROM = 12

/** What one row knows about itself. */
interface Row {
  subject: Subject
  readiness: Readiness
  topics: number
  /** Topics in this subject the learner has answered something on. */
  worked: number
}

function rowFor(stage: Stage, subject: Subject, workedIds: Set<string>): Row {
  const shape = shapeOf(stage, subject.id)
  const syllabus = syllabusFor(stage, subject.id)
  /* Counted against this subject's own topic ids rather than against the
     learner's whole history, so work done in Mathematics cannot appear as
     progress in Physics. */
  const worked = syllabus
    ? allTopics(syllabus).filter(t => workedIds.has(t.id)).length
    : 0
  return {
    subject,
    readiness: readinessOf(stage, subject),
    topics: shape?.topics ?? 0,
    worked,
  }
}

/** The right hand column. Progress when there is any, size when there is not. */
function metaFor(row: Row): { text: string, started: boolean } {
  if (row.readiness === 'none') return { text: 'no material yet', started: false }
  if (row.worked > 0) return { text: `${row.worked} of ${row.topics} done`, started: true }
  return { text: `${row.topics} ${row.topics === 1 ? 'topic' : 'topics'}`, started: false }
}

/**
 * One subject.
 *
 * Declared at module level. A component defined inside a render body is a new
 * type on every render, so React unmounts and remounts it, which throws away
 * the focus and any transition mid-flight.
 */
function SubjectRow({ row, chosen, onPick }: {
  row: Row
  chosen: string | null
  onPick: (s: Subject) => void
}) {
  const { subject, readiness } = row
  const meta = metaFor(row)
  const open = readiness !== 'none'
  return (
    <li>
      <button
        className={`ne-row${chosen === subject.id ? ' is-on' : ''}${open ? '' : ' is-thin'}`}
        onClick={() => onPick(subject)}>
        <span className="ne-row-name">
          {subject.name}
          {subject.note && <span className="ne-row-note">{subject.note}</span>}
        </span>
        <span className={`ne-row-meta${meta.started ? ' is-started' : ''}`}>
          {meta.text}
        </span>
        {/* Only for a subject they have actually started. A column of empty
            bars would say nothing and take up the room of saying it. */}
        {meta.started && (
          <span className="ne-row-bar">
            <i style={{ width: `${Math.min(100, Math.round((row.worked / row.topics) * 100))}%` }} />
          </span>
        )}
      </button>
    </li>
  )
}

function Group({ title, rows, chosen, onPick }: {
  title?: string
  rows: Row[]
  chosen: string | null
  onPick: (s: Subject) => void
}) {
  if (rows.length === 0) return null
  return (
    <>
      {title && <div className="ne-panel-rule"><span>{title}</span></div>}
      <ul className="ne-subjects">
        {rows.map(r => (
          <SubjectRow key={r.subject.id} row={r} chosen={chosen} onPick={onPick} />
        ))}
      </ul>
    </>
  )
}

export default function Subjects({
  profile, attempts = [], onStudy, onSave, onSignOut, onBack,
}: {
  profile: LearnerProfile
  /** Their answered questions, so the list can show real progress. */
  attempts?: Attempt[]
  onStudy: (subjectId: string) => void
  onSave: (p: LearnerProfile) => void
  onSignOut: () => void
  /** Present when a parent or school opened this learner, so they can go back. */
  onBack?: () => void
}) {
  const all = subjectsFor(profile.stage)
  const courses = programmesFor(profile.stage)
  const [chosen, setChosen] = useState<string | null>(profile.subjectId)
  const [note, setNote] = useState(
    profile.subjectId ? profile.aiNotes[profile.subjectId] ?? '' : '')
  const [find, setFind] = useState('')
  const [course, setCourse] = useState<string | null>(profile.programme)
  /** Set when they have asked to see past their own course. */
  const [showAll, setShowAll] = useState(false)

  const rows = useMemo(() => {
    const workedIds = new Set(attempts.map(a => a.objectiveId))
    return all.map(s => rowFor(profile.stage, s, workedIds))
  }, [all, attempts, profile.stage])

  const pick = (s: Subject) => {
    setChosen(s.id)
    setNote(profile.aiNotes[s.id] ?? '')
  }

  /* Saved as soon as it is chosen, not on the way into a subject. A learner who
     picks their course and then closes the tab should not be asked again. */
  const pickCourse = (id: string) => {
    setCourse(id)
    setShowAll(false)
    onSave({ ...profile, programme: id })
  }

  const open = () => {
    if (!chosen) return
    /* The note is saved on the way in, not on a separate Save button. Nobody
       writes an instruction to a tutor and then expects to have to file it. */
    onSave({
      ...profile,
      programme: course,
      subjectId: chosen,
      aiNotes: { ...profile.aiNotes, [chosen]: note.trim() },
    })
    onStudy(chosen)
  }

  const current = rows.find(r => r.subject.id === chosen) ?? null
  const carrying = rows.find(r => r.subject.id === profile.subjectId) ?? null

  /* Their own timetable, or null where the stage has no courses, which is
     every stage but senior high and means show everything. */
  const mine = timetableFor(profile.stage, course)

  const wanted = find.trim().toLowerCase()
  const shown = wanted
    /* Searching looks across the whole stage, never only across what is on
       screen. That is what makes filtering to a course safe: nothing is
       hidden, it is only out of the way. */
    ? rows.filter(r => r.subject.name.toLowerCase().includes(wanted))
    : mine && !showAll
      ? rows.filter(r => mine.includes(r.subject.id))
      : rows

  /* Only worth offering a filter when the list on screen is long. */
  const findable = (wanted ? rows.length : shown.length) >= FILTER_FROM

  const core = shown.filter(r => r.subject.band === 'core')
  const elective = shown.filter(r => r.subject.band === 'elective')
  const plain = shown.filter(r => !r.subject.band)

  const first = profile.name.trim().split(' ')[0]

  return (
    <div className="ne">
      <div className="ne-shell">
        <header className="ne-top">
          <span className="ne-wordmark">NEXA<i>•</i>EDU</span>
          <span className="ne-mono" style={{ color: 'var(--ink-3)' }}>
            {profile.level}
          </span>
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 16 }}>
            {onBack && <button className="ne-quiet-link" onClick={onBack}>All learners</button>}
            <button className="ne-quiet-link" onClick={onSignOut}>Sign out</button>
          </span>
        </header>

        <main className="ne-make ne-rise ne-rise-1">
          <h1 className="ne-display ne-make-h1" style={{ marginBottom: 8 }}>
            {first ? `What are you studying, ${first}?` : 'What are you studying?'}
          </h1>
          <p className="ne-make-blurb" style={{ margin: '0 0 22px' }}>
            {profile.subjectId
              ? 'Carry on where you were, or pick something else. Each subject keeps its own progress.'
              : 'Pick a subject. You can change it whenever you like, and each one keeps its own progress.'}
          </p>

          {/* Lifted out of the list, so carrying on is one press rather than a
              hunt. Hidden once it is the subject already selected. */}
          {carrying && carrying.subject.id !== chosen && (
            <button className="ne-carry" onClick={() => pick(carrying.subject)}>
              <span className="ne-carry-label">Where you left off</span>
              <span className="ne-carry-name">{carrying.subject.name}</span>
              <span className="ne-carry-meta">{metaFor(carrying).text}</span>
            </button>
          )}

          {/* What course they are offering. Asked here rather than on the
              profile page because it is the answer that decides what this list
              shows, and it belongs beside the thing it changes. */}
          {asksProgramme(profile.stage) && (
            <div className="ne-course">
              <label className="ne-fx" style={{ maxWidth: 320 }}>
                <span className="ne-fx-label">
                  What course are you offering?
                  {!course && <span className="ne-fx-hint">so we show your subjects</span>}
                </span>
                <select className="ne-sel" value={course ?? ''}
                  onChange={e => pickCourse(e.target.value)}>
                  <option value="">Choose your course</option>
                  {courses.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </label>
              {course && (
                <p className="ne-fx-note">
                  Showing the {programmeById(profile.stage, course)?.name} subjects.
                  Anything else is still here: search for it, or{' '}
                  <button className="ne-inline-link" onClick={() => setShowAll(a => !a)}>
                    {showAll ? 'show only my course' : `see all ${rows.length} subjects`}
                  </button>.
                </p>
              )}
            </div>
          )}

          {findable && (
            <input
              className="ne-find"
              value={find}
              placeholder={mine && !showAll
                ? `Search all ${rows.length} subjects`
                : `Find a subject among ${rows.length}`}
              onChange={e => setFind(e.target.value)}
            />
          )}

          {/* A search that reaches outside their course should say so, rather
              than leaving them wondering why something appeared. */}
          {wanted && mine && shown.some(r => !mine.includes(r.subject.id)) && (
            <p className="ne-find-none">
              Some of these are outside your course. You can still study them.
            </p>
          )}

          {shown.length === 0 && (
            <p className="ne-find-none">
              {wanted
                ? `Nothing matches what you typed. ${profile.level} has ${rows.length} subjects in all.`
                : 'Choose your course above, and your subjects will appear here.'}
            </p>
          )}

          <Group rows={plain} chosen={chosen} onPick={pick} />
          <Group title="Core" rows={core} chosen={chosen} onPick={pick} />
          <Group title="Electives" rows={elective} chosen={chosen} onPick={pick} />

          {current && (
            <div className="ne-panel ne-rise ne-rise-1" style={{ marginTop: 24 }}>
              <div className="ne-fx">
                <span className="ne-fx-label">
                  How should the tutor teach you {current.subject.name}?
                  <span className="ne-fx-hint">optional, and only you see it</span>
                </span>
                <textarea
                  className="ne-note" rows={3} value={note}
                  placeholder={NOTE_EXAMPLES[0]}
                  onChange={e => setNote(e.target.value)}
                />
              </div>
              <div className="ne-egs">
                {NOTE_EXAMPLES.slice(1).map(e => (
                  <button key={e} type="button" className="ne-eg"
                    onClick={() => setNote(n => (n.trim() ? `${n.trim()} ${e}` : e))}>
                    {e}
                  </button>
                ))}
              </div>
              <p className="ne-fx-note">
                This is read alongside your level and your answers, so it shapes
                every explanation you are given in {current.subject.name}.
              </p>
            </div>
          )}

          <div className="ne-make-go">
            <button className="ne-btn ne-btn-go"
              disabled={!current || current.readiness === 'none'}
              onClick={open}>
              {!current ? 'Pick a subject'
                : current.readiness === 'none' ? 'Not available yet'
                /* "Continue" when it is the subject they left off in, so
                   landing here on every sign in reads as a choice offered
                   rather than a step in the way. */
                : current.subject.id === profile.subjectId ? `Continue ${current.subject.name}`
                : `Study ${current.subject.name}`}
            </button>
            {current && current.readiness === 'none' && (
              <p className="ne-fineprint" style={{ maxWidth: '44ch' }}>
                {current.subject.name} has no outline yet. Your school can upload
                its syllabus, and then it opens here.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
