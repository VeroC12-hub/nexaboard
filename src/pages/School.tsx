/**
 * A school's console: every class on one screen, and students one level down.
 *
 * ── Who is actually reading this ────────────────────────────────────────────
 *
 * A head teacher, who has already delegated the students. That is the whole
 * shape of the page: a school with twenty classes has hired somebody to know
 * how Kofi Mensah is doing, and it is not the head. Their questions are which
 * classes are struggling and who is accountable for them.
 *
 * So the front page is **one row per class** and carries no student names at
 * all. Twenty classes is one screen. Opening a class is where the students
 * are, because that is the teacher's level, and the head can go there when
 * they want to.
 *
 * Two earlier versions got this wrong in opposite directions. The first listed
 * every student inline, which is eight hundred rows for a real school. The
 * second capped each class at three, which was better but still put forty-odd
 * names in front of somebody who had asked to see classes: the page was still
 * eleven screens, and most of it was detail the reader had deliberately handed
 * to somebody else.
 *
 * ── The line this page exists for ───────────────────────────────────────────
 *
 * "Four in Basic 5 Gold are stuck on ratio" is something a head can act on
 * this week: reteach it, or ask the teacher why. A class average of 71% is
 * something nobody can do anything with. Every class row is built to produce
 * the first kind of sentence, and the classes that have one sort to the top.
 *
 * That line used to be a lie. Every class was read against `MATHS_JHS2`, the
 * one course written out in full, so a Basic 5 class was told its students
 * were stuck on a JHS 2 objective they had never been taught. Classes are read
 * through `roll.ts` now, which reads each **student** against their own year
 * across all their subjects and then aggregates. A class has no work of its
 * own to judge.
 *
 * ── Where the old design went ───────────────────────────────────────────────
 *
 * It was a setup form with a roll on top: about sixty per cent of the page was
 * "Add a class" and "Add a teacher", permanently expanded, and a student was a
 * name chip with their internal id under it. Adding a class happens twice a
 * term. Both forms are behind Manage.
 *
 * It was also the last page in the old `nexaedu.css` language, which made it a
 * fifth scheme in a platform unified on four. It shares the parent tier's
 * language now, because a head teacher and a parent are reading the same kind
 * of page about the same children.
 *
 * ── Moving a student ────────────────────────────────────────────────────────
 *
 * Changes the class and never the student. Their identity and their history
 * belong to them, which is the rule the learner id follows everywhere else.
 */

import { useCallback, useMemo, useState } from 'react'
import '../styles/guardian.css'
import '../styles/school-console.css'
import {
  addClass, addTeacher, assignTeacher, moveLearner,
  type Account, type Klass,
} from '../lib/education/accounts'
import {
  QUIET_DAYS, byNeed, classRead, readOf,
  type ClassRead, type Read,
} from '../lib/education/roll'
import { Icon } from '../components/kid/art'
import { STAGE_YEARS, type LearnerProfile, type Stage } from '../lib/education/learner'

/* ── reading the school ───────────────────────────────────────────────────── */

interface Seen {
  classes: Map<string, ClassRead>
  /** Learners in no class at all. */
  unplaced: Read[]
}

function useSchool(account: Account, learners: LearnerProfile[]): Seen {
  /* Read once, on open. Inside the memo it would make the memo impure, and
     "3 days ago" does not need to tick. */
  const [now] = useState(() => Date.now())

  return useMemo(() => {
    const byId = new Map(learners.map(l => [l.id, readOf(l, now)]))
    const klasses = account.classes ?? []

    const classes = new Map<string, ClassRead>()
    for (const k of klasses) {
      const rows = k.learnerIds.map(id => byId.get(id)).filter((r): r is Read => !!r)
      classes.set(k.id, classRead(byNeed(rows)))
    }

    const placed = new Set(klasses.flatMap(k => k.learnerIds))
    const unplaced = byNeed(
      learners.filter(l => !placed.has(l.id)).map(l => byId.get(l.id)!))

    return { classes, unplaced }
  }, [account, learners, now])
}

/**
 * How a class is doing, in one line, and whether that line is a problem.
 *
 * Ordered by what a head can act on: a shared difficulty is this week's
 * teaching, a class nobody is teaching is this term's paperwork, and a class
 * that is fine says so rather than saying nothing. A row with no sentence in
 * it reads as a row that failed to load.
 */
function howItIsGoing(klass: Klass | null, read: ClassRead): { what: string, bad: boolean } {
  if (read.shared) {
    return { what: `${read.shared.count} stuck on ${read.shared.title}`, bad: true }
  }
  if (!read.rows.length) return { what: 'No students yet', bad: false }
  if (klass && !klass.teacherId) return { what: 'Needs a teacher', bad: true }
  if (read.active === 0) return { what: 'Nobody has started', bad: true }
  if (read.quiet === read.rows.length) return { what: 'Nobody has worked for days', bad: true }
  if (read.struggling > 0) {
    return {
      what: `${read.struggling} ${read.struggling === 1 ? 'needs' : 'need'} help`,
      bad: true,
    }
  }
  if (read.quiet > 0) {
    return { what: `${read.quiet} ${read.quiet === 1 ? 'has' : 'have'} gone quiet`, bad: false }
  }
  return { what: 'Going fine', bad: false }
}

/* ── the front page ───────────────────────────────────────────────────────── */

function ClassLine({ klass, read, teacherName, onOpen }: {
  klass: Klass
  read: ClassRead
  teacherName: string | null
  onOpen: () => void
}) {
  const going = howItIsGoing(klass, read)

  /* When the whole problem *is* that nobody teaches this class, the teacher
     column and the status column say the same thing. On a phone the two sit
     on consecutive lines, which reads as a stutter, so the teacher line drops
     there and the columns keep their shape on a wider screen. */
  const teacherIsTheStory = going.what === 'Needs a teacher'

  return (
    <button
      className={`sk-line${going.bad ? ' is-warn' : ''}${teacherIsTheStory ? ' is-unstaffed' : ''}`}
      onClick={onOpen}>
      {/* A mark, not a colour alone, so the rows that need something are still
          findable in a grey print-out or by a colour blind head. */}
      <span className="sk-line-mark" aria-hidden>{going.bad ? '●' : ''}</span>

      <span className="sk-line-name">
        {klass.name}
        {/* Only when it adds something. A school that calls a class "Basic 5 B"
            wants to be told it is Basic 5; one that calls it "KG 2" has already
            said so, and printing the year under it gave "KG 2" twice. */}
        {!klass.name.toLowerCase().includes(klass.level.toLowerCase()) && (
          <span className="sk-line-year">{klass.level}</span>
        )}
      </span>

      {/* Who is accountable. The single most useful column on this page for
          somebody who is going to act by talking to a person. */}
      <span className="sk-line-who">
        {teacherName ?? <span className="sk-line-none">No teacher</span>}
      </span>

      <span className="sk-line-count">
        {read.rows.length} {read.rows.length === 1 ? 'student' : 'students'}
      </span>

      <span className={`sk-line-state${going.bad ? ' is-warn' : ''}`}>{going.what}</span>

      <span className="sk-line-go" aria-hidden><Icon mark="next" size={16} /></span>
    </button>
  )
}

/* ── one class, which is where the students are ───────────────────────────── */

/** How a student is doing, as the four things somebody actually scans. */
function StudentRow({ read, onOpen, moveTo, where }: {
  read: Read
  onOpen: () => void
  moveTo?: { classes: Klass[], current: string | null, onMove: (classId: string | null) => void }
  /**
   * Which class they are in, shown only by a search.
   *
   * Inside a class it would be the class name repeated once per student. Found
   * by name from the front page it is the whole point: it tells the head whose
   * lesson to walk into.
   */
  where?: string
}) {
  const { learner, started, total, accuracy, days } = read

  return (
    <div className={`sk-row${read.hardest ? ' is-warn' : ''}`}>
      <button className="sk-row-open" onClick={onOpen}>
        <span className="sk-row-name">
          {learner.name.trim() || 'Unnamed'}
          {where && <span className="sk-row-where">{where}</span>}
        </span>

        {/* What they are finding hard, named. A teacher can walk over and say
            the topic; they can do nothing with "55%". */}
        <span className="sk-row-why">
          {read.hardest
            ? `${read.hardest.topic.title} keeps going wrong, in ${read.hardest.subject}.`
            : read.answered === 0
              ? 'Has not started anything yet.'
              : `${started} of ${total} topics started.`}
        </span>
      </button>

      <span className="sk-row-stat">
        {accuracy === null
          ? <span className="gd-soft">too early</span>
          : (
            <span className={`gd-pill ${accuracy >= 0.6 ? 'is-good' : 'is-warn'}`}>
              {Math.round(accuracy * 100)}%
            </span>
          )}
      </span>

      <span className="sk-row-stat">
        {days === null
          ? <span className="gd-pill is-idle">never</span>
          : days === 0
            ? <span className="gd-pill is-good">today</span>
            : days >= QUIET_DAYS
              ? <span className="gd-pill is-warn">{days} days</span>
              : <span className="gd-soft">{days} {days === 1 ? 'day' : 'days'}</span>}
      </span>

      {moveTo && (
        <label className="sk-move">
          {/* Labelled for a screen reader, because a bare select in a row of
              names says nothing about whose class it changes. */}
          <span className="sk-sr">Move {learner.name.trim() || 'this student'} to</span>

          {/* Reads "Move" rather than the class it is already sitting in.
              Showing the current value printed the class name once per row,
              inside a page headed with that same class name. */}
          <select
            className="sk-sel is-quiet"
            value=""
            onChange={e => {
              if (e.target.value) moveTo.onMove(e.target.value === 'none' ? null : e.target.value)
            }}>
            <option value="">Move</option>
            {moveTo.classes
              .filter(k => k.id !== moveTo.current)
              .map(k => <option key={k.id} value={k.id}>To {k.name}</option>)}
            {moveTo.current && <option value="none">Out of this class</option>}
          </select>
        </label>
      )}
    </div>
  )
}

function ClassView({ klass, read, account, onBack, onOpen, onAssign, onAddStudent, onMove }: {
  /** Null for the "not in a class yet" list, which has no class of its own. */
  klass: Klass | null
  read: ClassRead
  account: Account
  onBack: () => void
  onOpen: (id: string) => void
  onAssign: (teacherId: string | null) => void
  onAddStudent: () => void
  onMove: (learnerId: string, classId: string | null) => void
}) {
  const teachers = account.teachers ?? []
  const classes = account.classes ?? []
  const teacher = teachers.find(t => t.id === klass?.teacherId) ?? null

  return (
    <>
      <button className="sk-back" onClick={onBack}>
        <Icon mark="back" size={16} /> All classes
      </button>

      <h1 className="sk-title">{klass ? klass.name : 'Not in a class yet'}</h1>
      <p className="sk-title-sub">
        {klass ? `${klass.level} · ` : ''}
        {read.rows.length} {read.rows.length === 1 ? 'student' : 'students'}
        {teacher ? ` · ${teacher.name}` : ''}
      </p>

      {/* The shared difficulty, said once and prominently, because it is the
          reason somebody opened this class. */}
      {read.shared && (
        <div className="sk-banner">
          <b>{read.shared.count} students are stuck on {read.shared.title}</b>
          <span>
            In {read.shared.subject}. Worth reteaching it, or asking why it did
            not land the first time.
          </span>
        </div>
      )}

      {klass && (
        <div className="gd-panel">
          <div className="gd-panel-top"><h2>Teacher</h2></div>
          <label className="sk-field" style={{ maxWidth: 320 }}>
            <span className="sk-sr">Teacher for {klass.name}</span>
            <select
              className="sk-sel"
              value={klass.teacherId ?? ''}
              onChange={e => onAssign(e.target.value || null)}>
              <option value="">Not assigned</option>
              {teachers.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
          </label>
          {teachers.length === 0 && (
            <p className="sk-note">Add a teacher under Manage, then assign them here.</p>
          )}
        </div>
      )}

      <div className="gd-panel">
        <div className="gd-panel-top">
          <h2>Students</h2>
          <span className="gd-count">{read.rows.length}</span>
        </div>

        {read.rows.length === 0 ? (
          <p className="gd-none">Nobody in this class yet.</p>
        ) : (
          <div className="sk-rows">
            {/* Worst first. A teacher with a full class and five minutes reads
                the top of the list, so the top of the list is whoever needs
                something. */}
            {read.rows.map(r => (
              <StudentRow
                key={r.learner.id}
                read={r}
                onOpen={() => onOpen(r.learner.id)}
                moveTo={classes.length
                  ? { classes, current: klass?.id ?? null, onMove: c => onMove(r.learner.id, c) }
                  : undefined} />
            ))}
          </div>
        )}

        <button className="sk-add" onClick={onAddStudent}>
          Add a student{klass ? ` to ${klass.name}` : ''}
        </button>
      </div>
    </>
  )
}

/* ── setup, which is not the front page ───────────────────────────────────── */

function Manage({ account, onChanged, onAddStudent, onClose }: {
  account: Account
  onChanged: (a: Account) => void
  onAddStudent: () => void
  onClose: () => void
}) {
  const classes = account.classes ?? []
  const teachers = account.teachers ?? []

  const [className, setClassName] = useState('')
  const [classLevel, setClassLevel] = useState('JHS 1')
  const [teacherName, setTeacherName] = useState('')
  const [teacherEmail, setTeacherEmail] = useState('')

  /* Every year, across every stage, because a school runs more than one. */
  const years = (Object.keys(STAGE_YEARS) as Stage[]).flatMap(s => STAGE_YEARS[s])

  return (
    <div className="gd-panel">
      <div className="gd-panel-top">
        <h2>Manage</h2>
        <button className="gd-open" onClick={onClose}>Done</button>
      </div>

      <div className="sk-manage">
        <form
          className="sk-form"
          onSubmit={e => {
            e.preventDefault()
            if (!className.trim()) return
            onChanged(addClass(account, className, classLevel))
            setClassName('')
          }}>
          <h3 className="sk-form-name">Add a class</h3>
          <div className="sk-form-row">
            <label className="sk-field">
              <span className="sk-field-name">Class name</span>
              <input
                className="sk-in"
                value={className}
                placeholder="Basic 5 Gold"
                onChange={e => setClassName(e.target.value)} />
            </label>
            <label className="sk-field">
              <span className="sk-field-name">Year</span>
              <select
                className="sk-sel"
                value={classLevel}
                onChange={e => setClassLevel(e.target.value)}>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </label>
          </div>
          <button className="sk-go" type="submit" disabled={!className.trim()}>
            Add class
          </button>
        </form>

        <form
          className="sk-form"
          onSubmit={e => {
            e.preventDefault()
            if (!teacherName.trim()) return
            onChanged(addTeacher(account, teacherName, teacherEmail))
            setTeacherName('')
            setTeacherEmail('')
          }}>
          <h3 className="sk-form-name">Add a teacher</h3>
          <div className="sk-form-row">
            <label className="sk-field">
              <span className="sk-field-name">Teacher's name</span>
              <input
                className="sk-in"
                value={teacherName}
                placeholder="Mr Mensah"
                onChange={e => setTeacherName(e.target.value)} />
            </label>
            <label className="sk-field">
              <span className="sk-field-name">Email, if you have it</span>
              <input
                className="sk-in"
                type="email"
                value={teacherEmail}
                placeholder="mensah@school.edu.gh"
                onChange={e => setTeacherEmail(e.target.value)} />
            </label>
          </div>
          <button className="sk-go" type="submit" disabled={!teacherName.trim()}>
            Add teacher
          </button>

          {teachers.length > 0 && (
            <ul className="sk-staff">
              {teachers.map(t => (
                <li key={t.id}>
                  <b>{t.name}</b>
                  <span className="gd-soft">
                    {classes.filter(k => k.teacherId === t.id).map(k => k.name).join(', ')
                      || 'No class yet'}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>

      <button className="sk-add" onClick={onAddStudent}>
        Add a student without a class
      </button>
    </div>
  )
}

/* ── the console ──────────────────────────────────────────────────────────── */

/** Where the head is. `id: null` on the class view is the unplaced list. */
type Where = { at: 'school' } | { at: 'class', id: string | null }

/**
 * What the one search field is looking through.
 *
 * Three fields or three buttons would all have fitted; this is one control
 * because the person searching already knows whether "Ofori" is a teacher or a
 * student, and saying so once is less work than being shown both.
 */
type By = 'class' | 'teacher' | 'student'

export default function School({
  account, learners, onOpen, onAddStudent, onSignOut, onChanged,
}: {
  account: Account
  learners: LearnerProfile[]
  onOpen: (id: string) => void
  onAddStudent: (classId?: string) => void
  onSignOut: () => void
  onChanged: (a: Account) => void
}) {
  /* Memoised because `?? []` makes a fresh array every render, which would
     make the ordering below recompute for every class on every keystroke in
     Manage. */
  const classes = useMemo(() => account.classes ?? [], [account])
  /* Memoised for the same reason as `classes`: `?? []` is a new array every
     render, and both feed memos that would otherwise never hit. */
  const teachers = useMemo(() => account.teachers ?? [], [account])
  const seen = useSchool(account, learners)

  const [where, setWhere] = useState<Where>({ at: 'school' })
  const [managing, setManaging] = useState(false)
  const [by, setBy] = useState<By>('class')
  const [find, setFind] = useState('')

  const move = (learnerId: string, classId: string | null) =>
    onChanged(moveLearner(account, learnerId, classId))

  const nameOf = useCallback(
    (id: string | null) => teachers.find(t => t.id === id)?.name ?? null,
    [teachers])

  /**
   * Classes needing something first, then the rest.
   *
   * This replaced a separate "Worth a look" panel above the list. Once a class
   * row carried its own status, the panel was the same twenty sentences
   * printed twice, and it was the longer of the two. Sorting the one list does
   * the same job in half the page.
   */
  const ordered = useMemo(() => classes
    .map(k => {
      const read = seen.classes.get(k.id) ?? classRead([])
      return { klass: k, read, going: howItIsGoing(k, read) }
    })
    .sort((a, b) => Number(b.going.bad) - Number(a.going.bad)),
  [classes, seen])

  const needing = ordered.filter(r => r.going.bad).length

  const term = find.trim().toLowerCase()

  /**
   * The classes to show, once the search has had its say.
   *
   * Matching on the class name **and** its year, because a head typing "JHS"
   * means every junior high class and their names may not all contain it, and
   * one typing "Basic 5" may be thinking of the year rather than the stream
   * letter the school gave it.
   */
  const shown = useMemo(() => {
    if (!term || by === 'student') return ordered
    return ordered.filter(({ klass }) => by === 'teacher'
      ? (nameOf(klass.teacherId) ?? 'no teacher').toLowerCase().includes(term)
      : `${klass.name} ${klass.level}`.toLowerCase().includes(term))
  }, [ordered, term, by, nameOf])

  const searchingStudents = by === 'student' && term.length > 0

  /** Matching students, each with the class they are in. */
  const foundStudents = useMemo(() => {
    if (!searchingStudents) return []
    const where = new Map<string, string>()
    for (const k of classes) for (const id of k.learnerIds) where.set(id, k.name)

    const all = [...seen.classes.values()].flatMap(c => c.rows).concat(seen.unplaced)
    return byNeed(all.filter(r => r.learner.name.toLowerCase().includes(term)))
      .map(read => ({ read, className: where.get(read.learner.id) ?? 'No class' }))
  }, [searchingStudents, term, classes, seen])

  return (
    <div className="gd">
      <div className="gd-bar">
        <div className="gd-bar-in">
          <span className="gd-wordmark">NEXA<i>·</i>EDU</span>
          <span className="gd-role">School</span>
          <span className="gd-bar-spacer" />
          <button
            className={`gd-bar-btn${managing ? ' is-solid' : ''}`}
            aria-pressed={managing}
            onClick={() => { setManaging(m => !m); setWhere({ at: 'school' }) }}>
            Manage
          </button>
          <button className="gd-bar-btn" onClick={onSignOut}>Sign out</button>
        </div>
      </div>

      <div className="gd-main">
        {where.at === 'class' ? (
          <ClassView
            klass={where.id ? classes.find(k => k.id === where.id) ?? null : null}
            read={where.id
              ? seen.classes.get(where.id) ?? classRead([])
              : classRead(seen.unplaced)}
            account={account}
            onBack={() => setWhere({ at: 'school' })}
            onOpen={onOpen}
            onAssign={tid => { if (where.id) onChanged(assignTeacher(account, where.id, tid)) }}
            onAddStudent={() => onAddStudent(where.id ?? undefined)}
            onMove={move} />
        ) : (
          <>
            <h1 className="sk-title">{account.name}</h1>
            <p className="sk-title-sub">
              {classes.length === 0
                ? 'Make your first class under Manage, add a teacher, then put students in it.'
                : (
                  <>
                    {classes.length} {classes.length === 1 ? 'class' : 'classes'},{' '}
                    {learners.length} {learners.length === 1 ? 'student' : 'students'}.{' '}
                    {needing === 0
                      ? 'Nothing needs chasing.'
                      : (
                        <b className="sk-need">
                          {needing} {needing === 1 ? 'class needs' : 'classes need'} a look.
                        </b>
                      )}
                  </>
                )}
            </p>

            {managing && (
              <Manage
                account={account}
                onChanged={onChanged}
                onAddStudent={() => onAddStudent()}
                onClose={() => setManaging(false)} />
            )}

            {/* One field, and you say what you are looking for.

                Not three search boxes and not three buttons: a head looking
                for "Ofori" knows whether that is a teacher or a student, and
                saying so once is less work than being shown both and sorting
                it out. The chooser sits inside the field because it belongs to
                it; as a separate control beside it, it reads as a filter that
                applies to the whole page. */}
            {classes.length > 0 && (
              <div className="sk-search">
                <label className="sk-search-by">
                  <span className="sk-sr">What to search by</span>
                  <select
                    value={by}
                    onChange={e => setBy(e.target.value as By)}>
                    <option value="class">Class</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                  </select>
                </label>
                <input
                  className="sk-search-in"
                  value={find}
                  placeholder={by === 'class'
                    ? 'Which class? Try "Basic 5" or "JHS"'
                    : by === 'teacher'
                      ? "Whose classes? Try a teacher's name"
                      : 'Which student? Type any part of their name'}
                  aria-label={`Search by ${by}`}
                  onChange={e => setFind(e.target.value)} />
                {find && (
                  <button
                    className="sk-search-clear"
                    aria-label="Clear the search"
                    onClick={() => setFind('')}>
                    Clear
                  </button>
                )}
              </div>
            )}

            {/* Searching by student is the one place the front page names
                anybody. It is not a contradiction of the page's shape: you
                asked for that person, so you get that person, with the class
                they are in so you know whose lesson to walk into. */}
            {searchingStudents && (
              <div className="gd-panel">
                <div className="gd-panel-top">
                  <h2>Students</h2>
                  <span className="gd-count">{foundStudents.length}</span>
                </div>
                {foundStudents.length === 0 ? (
                  <p className="gd-none">Nobody by that name.</p>
                ) : (
                  <div className="sk-rows">
                    {foundStudents.map(({ read, className }) => (
                      <StudentRow
                        key={read.learner.id}
                        read={read}
                        where={className}
                        onOpen={() => onOpen(read.learner.id)} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {classes.length > 0 && !searchingStudents && (
              <div className="gd-panel">
                <div className="gd-panel-top">
                  <h2>Classes</h2>
                  <span className="gd-count">
                    {shown.length === classes.length
                      ? classes.length
                      : `${shown.length} of ${classes.length}`}
                  </span>
                </div>

                {/* A header row, because this is five columns and "Mr Ofori"
                    beside "3 stuck on ratio" needs saying once what each of
                    them is. Hidden from a screen reader, which gets the row's
                    own words in order anyway. */}
                {shown.length > 0 && (
                  <div className="sk-lines-head" aria-hidden>
                    <span />
                    <span>Class</span>
                    <span>Teacher</span>
                    <span>Size</span>
                    <span>How it is going</span>
                    <span />
                  </div>
                )}

                {shown.length === 0 ? (
                  <p className="gd-none">
                    No class matches that. Try part of a name, or change what
                    you are searching by.
                  </p>
                ) : (
                  <div className="sk-lines">
                    {shown.map(({ klass, read }) => (
                      <ClassLine
                        key={klass.id}
                        klass={klass}
                        read={read}
                        teacherName={nameOf(klass.teacherId)}
                        onOpen={() => setWhere({ at: 'class', id: klass.id })} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Students who belong to the school but to no class. Kept in
                sight rather than tidied away: a student nobody has placed is a
                student no teacher is looking at. */}
            {seen.unplaced.length > 0 && (
              <button
                className="sk-line is-warn is-loose"
                onClick={() => setWhere({ at: 'class', id: null })}>
                <span className="sk-line-mark" aria-hidden>●</span>
                <span className="sk-line-name">Not in a class yet</span>
                <span className="sk-line-who">
                  <span className="sk-line-none">No teacher</span>
                </span>
                <span className="sk-line-count">
                  {seen.unplaced.length} {seen.unplaced.length === 1 ? 'student' : 'students'}
                </span>
                <span className="sk-line-state is-warn">Nobody is looking at them</span>
                <span className="sk-line-go" aria-hidden><Icon mark="next" size={16} /></span>
              </button>
            )}

            {classes.length === 0 && seen.unplaced.length === 0 && !managing && (
              <div className="gd-panel gd-empty">
                <h2>Nothing set up yet</h2>
                <p>
                  A school is classes, each with a teacher and a set of
                  students. Make a class and the rest follows.
                </p>
                <button className="sk-go" onClick={() => setManaging(true)}>
                  Open Manage
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
