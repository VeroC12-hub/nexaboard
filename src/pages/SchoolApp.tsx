import { useState } from 'react'
import { useSchoolAuth } from '../lib/school/useSchoolAuth'
import { signIn, signOut, type Role as ApiRole } from '../lib/school/api'
import '../styles/school.css'
import { PageHead, Section, Stats, Card, Pill, type Tone, Grid, Panel, Table, MiniBar, Feed, Timetable, SubjectTiles } from '../components/school/ui'
import { RegionBars, CoverageChart } from '../components/school/charts'
import { CIRCLE_LESSON, MASTERY, MASTERY_LABEL, type MasteryState } from '../lib/school/lesson'
import { COURSES, BANDS, SYLLABUS, ASSET_LABEL, type Band, type AssetKind } from '../lib/school/catalogue'
import { LEVELS, ELECTIVE_MATHS } from '../lib/school/content'
import {
  REGIONS, DISTRICTS, SCHOOLS, COVERAGE_SERIES, SUBJECT_MARKS,
  TEACHER_CLASSES, PASSPORT_STAGES, STUDENT_LESSONS, MARKING, CPD_COURSES, TUTOR,
} from '../lib/school/demo'

/**
 * NexaBoard Phase 2, the school platform.
 *
 * Front end only for now. Every figure comes from lib/school/demo, so wiring
 * this to Supabase later means changing where the data comes from and nothing
 * about the screens.
 *
 * Phase 1 is untouched. This mounts on its own route, uses its own stylesheet
 * scoped under .nb-school, and shares no selector with the board.
 */

type ScreenId =
  | 'national' | 'region' | 'district'
  | 'today' | 'classes' | 'note' | 'register' | 'marking' | 'cpd'
  | 'school' | 'approve' | 'attendance' | 'people'
  | 'student' | 'marks' | 'lessons' | 'lesson' | 'homework' | 'tutor'
  | 'parent' | 'progress' | 'messages'
  | 'passport' | 'verify'
  | 'curriculum' | 'library' | 'career' | 'opportunities' | 'ai'
  | 'path' | 'practice' | 'exams' | 'skills' | 'certificates' | 'universities'
  | 'learn' | 'mastery' | 'courses' | 'syllabus' | 'portal' | 'subject'

function Brand({ tag }: { tag?: string }) {
  return (
    <span className="nb-brand">
      NEXA<span className="dot">•</span>EDU
      {tag && <span className="tag">{tag}</span>}
    </span>
  )
}

/**
 * Who is signed in.
 *
 * Navigation is derived from this, never hardcoded. A teacher is not shown the
 * Ministry section because it is not theirs, not because we hid a button.
 */
type Role = 'officer' | 'teacher' | 'head' | 'student' | 'parent'

/**
 * The rail is built from the role, one list each. A teacher is not shown the
 * national view because it is not theirs, not because a button was hidden.
 */
const NAV_BY_ROLE: Record<Role, { id: ScreenId; label: string; group?: string }[]> = {
  officer: [
    { id: 'national',   label: 'National' },
    { id: 'region',     label: 'Regions' },
    { id: 'district',   label: 'Districts' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'ai',         label: 'Ask the data' },
  ],
  teacher: [
    { id: 'today',      label: 'Overview' },
    { id: 'classes',    label: 'My classes' },
    { id: 'note',       label: 'Lesson planner' },
    { id: 'register',   label: 'Attendance' },
    { id: 'marking',    label: 'Assessments' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'library',    label: 'Library' },
    { id: 'ai',         label: 'AI assistant' },
    { id: 'cpd',        label: 'CPD' },
  ],
  head: [
    { id: 'school',     label: 'Overview' },
    { id: 'approve',    label: 'Lesson notes' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'people',     label: 'Staff and students' },
    { id: 'today',      label: 'Teaching' },
    { id: 'ai',         label: 'Ask the data' },
  ],
  student: [
    { id: 'portal',        label: 'Library',            group: 'Learn' },
    { id: 'student',       label: 'Home' },
    { id: 'courses',       label: 'All subjects' },
    { id: 'syllabus',      label: 'Syllabus' },
    { id: 'learn',         label: 'Lessons' },
    { id: 'practice',      label: 'Practice' },
    { id: 'mastery',       label: 'What I can do' },
    { id: 'path',          label: 'What to learn next' },
    { id: 'lessons',       label: 'My learning' },
    { id: 'homework',      label: 'Assignments' },
    { id: 'tutor',         label: 'AI tutor' },
    { id: 'library',       label: 'Library' },
    { id: 'marks',         label: 'Progress',           group: 'Achieve' },
    { id: 'exams',         label: 'Exam prep' },
    { id: 'skills',        label: 'Skills and TVET' },
    { id: 'certificates',  label: 'Certificates' },
    { id: 'passport',      label: 'Portfolio' },
    { id: 'career',        label: 'Career path',        group: 'Go' },
    { id: 'universities',  label: 'Universities' },
    { id: 'opportunities', label: 'Opportunities' },
  ],
  parent: [
    { id: 'parent',   label: 'My child' },
    { id: 'progress', label: 'Progress' },
    { id: 'messages', label: 'Messages' },
    { id: 'passport', label: 'Portfolio' },
  ],
}

/** Every screen a role may reach, sub-screens included. */
const ALLOWED: Record<Role, ScreenId[]> = {
  officer: ['national', 'region', 'district', 'curriculum', 'ai'],
  teacher: ['today', 'classes', 'note', 'register', 'marking', 'cpd',
            'curriculum', 'library', 'ai'],
  head:    ['school', 'approve', 'attendance', 'people', 'ai',
            'today', 'classes', 'note', 'register', 'marking', 'cpd', 'curriculum', 'library'],
  student: ['student', 'marks', 'lessons', 'lesson', 'homework', 'tutor', 'passport', 'verify',
            'library', 'career', 'opportunities', 'path', 'practice', 'exams',
            'skills', 'certificates', 'universities', 'learn', 'mastery', 'courses', 'syllabus', 'portal', 'subject'],
  parent:  ['parent', 'progress', 'messages', 'passport', 'verify'],
}

const ROLE_CONTEXT: Record<Role, string> = {
  officer: 'Institutions • Government',
  teacher: 'Learn • Teach • Grow',
  head:    'Institution',
  student: 'Learner dashboard',
  parent:  'Family',
}

/** Sub-screens reachable from a section, with the trail they should show. */
const SUB_CRUMBS: Partial<Record<ScreenId, string[]>> = {
  region:     ['Ministry', 'Ghana', 'Northern'],
  district:   ['Ministry', 'Ghana', 'Northern', 'Karaga'],
  classes:    ['School', "Wesley Girls'", 'SHS 2 Science A'],
  note:       ['School', 'SHS 2 Science A', 'Lesson note'],
  register:   ['School', 'SHS 2 Science A', 'Register'],
  marking:    ['School', 'SHS 2 Science A', 'Marking'],
  cpd:        ['School', 'Mrs Adjei', 'My development'],
  approve:    ['School', "Wesley Girls'", 'Approve notes'],
  attendance: ['School', "Wesley Girls'", 'Attendance'],
  people:     ['School', "Wesley Girls'", 'Staff and students'],
  marks:      ['Student', 'Ama Mensah', 'Marks'],
  lessons:    ['Student', 'Ama Mensah', 'My lessons'],
  lesson:     ['Student', 'My lessons', 'Equation of a circle'],
  homework:   ['Student', 'Ama Mensah', 'Homework'],
  tutor:      ['Student', 'Ama Mensah', 'Ask the tutor'],
  progress:   ['Parent', 'Ama Mensah', 'Progress'],
  messages:   ['Parent', 'Ama Mensah', 'Messages'],
  verify:     ['Public', 'Check a certificate'],
  curriculum: ['Curriculum', 'National Curriculum'],
  library:    ['Library', 'National Education Library'],
  career:     ['Learner', 'Ama Mensah', 'Career path'],
  opportunities: ['Learner', 'Ama Mensah', 'Opportunities'],
  ai:         ['Intelligence', 'Ask the data'],
  path:       ['Learner', 'Ama Mensah', 'What to learn next'],
  practice:   ['Learner', 'Ama Mensah', 'Practice'],
  exams:      ['Learner', 'Ama Mensah', 'Exam prep'],
  learn:      ['Learner', 'Elective Mathematics', 'Equation of a circle'],
  mastery:    ['Learner', 'Ama Mensah', 'What I can do'],
  courses:    ['Catalogue', 'All subjects'],
  syllabus:   ['Catalogue', 'Elective Mathematics', 'SHS 2'],
  portal:     ['Library', 'All levels'],
  subject:    ['Library', 'SHS 2', 'Elective Mathematics'],
  skills:       ['Learner', 'Ama Mensah', 'Skills and TVET'],
  certificates: ['Learner', 'Ama Mensah', 'Certificates'],
  universities: ['Learner', 'Ama Mensah', 'Universities'],
}

export default function SchoolApp() {
  const { state, reload } = useSchoolAuth()
  const [screen, setScreen] = useState<ScreenId | null>(null)
  /** Set only from the no-database screen. Never reachable once signed in. */
  const [preview, setPreview] = useState<Role | null>(null)

  if (state.status === 'loading') {
    return (
      <div className="nb-school">
        <div className="nb-entry">
          <div className="nb-entrybox" style={{ textAlign: 'center' }}>
            <Brand />
            <p style={{ marginTop: 16 }}>Signing you in</p>
          </div>
        </div>
      </div>
    )
  }

  if (state.status === 'no-schema' && !preview) {
    return (
      <div className="nb-school">
        <NoSchema
          message={state.message}
          onRetry={reload}
          onPreview={r => { setPreview(r); setScreen(NAV_BY_ROLE[r][0].id) }}
        />
      </div>
    )
  }

  if (state.status === 'error') {
    return (
      <div className="nb-school">
        <div className="nb-entry">
          <div className="nb-entrybox">
            <div style={{ marginBottom: 18 }}><Brand /></div>
            <h1>Something went wrong</h1>
            <p>{state.message}</p>
            <button className="nb-btn p" style={{ width: '100%', justifyContent: 'center' }} onClick={reload}>
              Try again
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (state.status === 'signed-out' && !preview) {
    return <div className="nb-school"><Entry /></div>
  }

  const role = preview ?? appRoleFor((state as { profile: { role: ApiRole } }).profile.role)
  const current = screen ?? NAV_BY_ROLE[role][0].id
  const nav = NAV_BY_ROLE[role]
  const crumbs = SUB_CRUMBS[current] ?? [ROLE_CONTEXT[role]]
  const who = preview
    ? { name: 'Preview', sub: 'no database connected' }
    : { name: (state as { profile: { full_name: string } }).profile.full_name || 'Unnamed', sub: ROLE_CONTEXT[role] }

  /** A sub-screen keeps its parent lit in the rail. */
  const active =
    nav.some(n => n.id === current)
      ? current
      : ['region', 'district'].includes(current) ? 'national'
      : ['classes', 'note', 'register', 'marking', 'cpd'].includes(current) ? 'today'
      : ['approve', 'attendance', 'people'].includes(current) ? 'school'
      : ['marks', 'lessons', 'lesson', 'homework', 'tutor'].includes(current) ? 'student'
      : ['progress', 'messages'].includes(current) ? 'parent'
      : current

  /** The role cannot reach a screen outside its list, whatever it clicks. */
  const go = (s: ScreenId) => {
    if (ALLOWED[role].includes(s)) setScreen(s)
  }

  return (
    <div className="nb-school">
      <div className="nb-shell">
        <nav className="nb-rail" aria-label="Sections">
          <Brand tag={role === 'officer' ? 'Government' : undefined} />
          {nav.map(n => (
            <span key={n.id} style={{ display: 'contents' }}>
              {n.group && <span className="nb-navgroup">{n.group}</span>}
              <button
                className="nb-navb"
                aria-current={active === n.id ? 'page' : undefined}
                onClick={() => go(n.id)}
              >
                {n.label}
              </button>
            </span>
          ))}
          <div className="nb-railfoot">
            <b>{who.name}</b>
            {who.sub}
            <button
              className="nb-navb"
              style={{ marginTop: 8, padding: '6px 0', fontSize: 12 }}
              onClick={() => { if (preview) { setPreview(null); setScreen(null) } else { signOut() } }}
            >
              Sign out
            </button>
          </div>
        </nav>

        <div className="nb-main">
          <div className="nb-top">
            <div className="nb-crumbs">
              {crumbs.map((c, i) => (
                <span key={c} style={{ display: 'contents' }}>
                  {i > 0 && <span>/</span>}
                  {i === crumbs.length - 1 ? <b>{c}</b> : <span>{c}</span>}
                </span>
              ))}
            </div>
            {preview ? (
              <div className="nb-demo">
                <b>Preview · no database</b>
                <select
                  value={role}
                  onChange={e => {
                    const r = e.target.value as Role
                    setPreview(r)
                    setScreen(NAV_BY_ROLE[r][0].id)
                  }}
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="head">Institution</option>
                  <option value="parent">Parent</option>
                  <option value="officer">Government</option>
                </select>
              </div>
            ) : (
              <span className="nb-context">{ROLE_CONTEXT[role]}</span>
            )}
          </div>

          <div className="nb-page">
            {current === 'national' && <National go={go} />}
            {current === 'region' && <Region go={go} />}
            {current === 'district' && <District />}
            {current === 'today' && <Today go={go} />}
            {current === 'classes' && <Classes go={go} />}
            {current === 'note' && <LessonNote />}
            {current === 'register' && <Register />}
            {current === 'marking' && <MarkingScreen go={go} />}
            {current === 'cpd' && <Cpd />}
            {current === 'school' && <SchoolHome go={go} />}
            {current === 'approve' && <Approve />}
            {current === 'attendance' && <Attendance />}
            {current === 'people' && <People />}
            {current === 'student' && <Student go={go} />}
            {current === 'marks' && <Marks />}
            {current === 'lessons' && <Lessons go={go} />}
            {current === 'lesson' && <LessonReplay go={go} />}
            {current === 'homework' && <Homework />}
            {current === 'tutor' && <Tutor />}
            {current === 'parent' && <ParentHome go={go} />}
            {current === 'progress' && <Progress />}
            {current === 'messages' && <Messages />}
            {current === 'passport' && <Passport go={go} />}
            {current === 'verify' && <Verify />}
            {current === 'curriculum' && <Curriculum />}
            {current === 'library' && <Library />}
            {current === 'career' && <Career />}
            {current === 'opportunities' && <Opportunities />}
            {current === 'ai' && <AskTheData role={role} />}
            {current === 'path' && <LearningPath go={go} />}
            {current === 'practice' && <Practice />}
            {current === 'exams' && <ExamPrep go={go} />}
            {current === 'learn' && <Learn go={go} />}
            {current === 'mastery' && <Mastery go={go} />}
            {current === 'courses' && <Courses go={go} />}
            {current === 'syllabus' && <Syllabus go={go} />}
            {current === 'portal' && <Portal go={go} />}
            {current === 'subject' && <Subject go={go} />}
            {current === 'skills' && <Skills />}
            {current === 'certificates' && <Certificates go={go} />}
            {current === 'universities' && <Universities go={go} />}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ portal */

/**
 * The portal.
 *
 * Open it and you see every level and every subject, and one tap gets you to
 * the books, videos and tutorials themselves. No statistics, no progress
 * summary: those belong on Progress. This screen exists to put content in
 * front of a learner in two taps.
 */
function Portal({ go }: { go: (s: ScreenId) => void }) {
  const [levelId, setLevelId] = useState('s2')
  const level = LEVELS.find(l => l.id === levelId)!

  const bands = [...new Set(LEVELS.map(l => l.band))]

  return (
    <>
      <PageHead eyebrow="Library" title="Everything, every level" />
      <p className="nb-sub">Kindergarten to university. Textbooks, video tutorials, handouts,
        slides and every past paper, for every subject.</p>

      {bands.map(band => (
        <div key={band} style={{ marginTop: 18 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.15em',
                         textTransform: 'uppercase', color: 'var(--muted)' }}>{band}</span>
          <div className="nb-levels" style={{ marginTop: 8 }}>
            {LEVELS.filter(l => l.band === band).map(l => (
              <button key={l.id} className="nb-level" aria-pressed={l.id === levelId}
                      onClick={() => setLevelId(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
        </div>
      ))}

      <Section title={`${level.label} · ${level.subjects.length} subjects`}
               say="Tap a subject to open its books, videos and tutorials.">
        <div className="nb-subjects">
          {level.subjects.map((s, i) => (
            <button key={s} className="nb-subj" onClick={() => go('subject')}>
              <b>{s}</b>
              <span>{level.label} · {level.band}</span>
              <span className="cnt">
                <span>{3 + (i % 3)} books</span>
                <span>{6 + (i % 7)} videos</span>
                <span>{5 + (i % 5)} tutorials</span>
              </span>
            </button>
          ))}
        </div>
      </Section>
    </>
  )
}

/* --------------------------------------------------------- subject content */

function Subject({ go }: { go: (s: ScreenId) => void }) {
  const c = ELECTIVE_MATHS
  const [tab, setTab] = useState<'books' | 'videos' | 'tutorials' | 'handouts' | 'papers'>('books')

  const tabs = [
    ['books', `Books (${c.books.length})`],
    ['videos', `Videos (${c.videos.length})`],
    ['tutorials', `Tutorials (${c.tutorials.length})`],
    ['handouts', `Notes and slides (${c.handouts.length})`],
    ['papers', `Past papers (${c.papers.length})`],
  ] as const

  return (
    <>
      <PageHead eyebrow="SHS 2 · Science" title="Elective Mathematics" />
      <p className="nb-sub">Everything for this subject in one place. Download any of it to use
        with no network.</p>

      <div style={{ display: 'flex', gap: 6, marginTop: 18, flexWrap: 'wrap' }}>
        {tabs.map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)} className="nb-btn g"
            style={{
              minHeight: 34, padding: '6px 13px', fontSize: 13,
              borderColor: tab === id ? 'var(--blue)' : 'var(--line)',
              color: tab === id ? 'var(--blue-700)' : 'var(--ink)',
              background: tab === id ? 'var(--blue-50)' : 'var(--card)',
            }}>
            {label}
          </button>
        ))}
      </div>

      <div className="nb-sec">
        {tab === 'books' && (
          <div className="nb-shelf">
            {c.books.map(b => (
              <button className="nb-item" key={b.title}>
                <span className="nb-cover">Textbook</span>
                <span className="nb-meta">
                  <b>{b.title}</b>
                  <span>{b.author}</span>
                  <span className="sz">{b.chapters} chapters · {b.pages} pages · {b.size}</span>
                </span>
              </button>
            ))}
          </div>
        )}

        {tab === 'videos' && (
          <div className="nb-shelf">
            {c.videos.map(v => (
              <button className="nb-item" key={v.title}>
                <span className="nb-cover vid"><span className="nb-play" /></span>
                <span className="nb-meta">
                  <b>{v.title}</b>
                  <span>{v.by}</span>
                  <span className="sz">
                    {v.mins} min · {v.size}{v.watched ? ' · watched' : ''}
                  </span>
                </span>
              </button>
            ))}
          </div>
        )}

        {tab === 'tutorials' && (
          <Panel title="Step-by-step tutorials" more="Open the first">
            <Table
              cols={[
                { key: 't', label: 'Tutorial' },
                { key: 's', label: 'Steps', align: 'right' },
                { key: 'd', label: '', align: 'right' },
              ]}
              onRow={() => go('learn')}
              rows={c.tutorials.map(t => ({
                t: <span className="nm">{t.title}<span className="sub">{t.mins} minutes, worked through</span></span>,
                s: t.steps,
                d: t.done ? <Pill tone="good">Done</Pill> : <Pill tone="flat">Start</Pill>,
              }))}
            />
          </Panel>
        )}

        {tab === 'handouts' && (
          <div className="nb-shelf">
            {c.handouts.map(h => (
              <button className="nb-item" key={h.title}>
                <span className="nb-cover doc">{h.kind}</span>
                <span className="nb-meta">
                  <b>{h.title}</b>
                  <span>{h.by}</span>
                  <span className="sz">{h.pages} pages · {h.size}</span>
                </span>
              </button>
            ))}
          </div>
        )}

        {tab === 'papers' && (
          <div className="nb-shelf">
            {c.papers.map(p => (
              <button className="nb-item" key={p.year}>
                <span className="nb-cover pap">WASSCE {p.year}</span>
                <span className="nb-meta">
                  <b>{p.paper}</b>
                  <span>{p.questions} questions</span>
                  <span className="sz">{p.solved ? 'Worked solutions included' : 'Questions only'}</span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="nb-note">
        <b>All of it works offline.</b> Download once on the school network and it stays on the
        device for the year. On a weak connection the platform serves text and audio in place of
        video automatically.
      </div>
    </>
  )
}

/* --------------------------------------------------------------- catalogue */

/**
 * Every course, every band.
 *
 * The measure shown is coverage of the national syllabus, not course count.
 * Course count is what a platform brags about; syllabus coverage is what
 * decides whether a Ghanaian learner can actually rely on it.
 */
function Courses({ go }: { go: (s: ScreenId) => void }) {
  const [band, setBand] = useState<Band | 'All'>('SHS')
  const [q, setQ] = useState('')

  const shown = COURSES.filter(c =>
    (band === 'All' || c.band === band) &&
    (!q.trim() || c.name.toLowerCase().includes(q.toLowerCase())))

  const totalObj = COURSES.reduce((n, c) => n + c.objectives, 0)
  const totalCov = COURSES.reduce((n, c) => n + c.covered, 0)

  return (
    <>
      <PageHead eyebrow="Catalogue" title="Every subject in Ghana" />
      <p className="nb-sub">Kindergarten to university and professional training. Measured by how
        much of the national syllabus is actually covered, not by how many courses exist.</p>

      <Stats items={[
        { label: 'Subjects', value: String(COURSES.length), note: 'across 6 bands' },
        { label: 'Objectives', value: totalObj.toLocaleString('en-GB'), note: 'national curriculum' },
        { label: 'With a lesson', value: totalCov.toLocaleString('en-GB'),
          note: `${Math.round((totalCov / totalObj) * 100)}% covered`, dir: 'up' },
        { label: 'Gaps', value: (totalObj - totalCov).toLocaleString('en-GB'),
          note: 'still to build', dir: 'down' },
      ]} />

      <div style={{ display: 'flex', gap: 6, marginTop: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        {(['All', ...BANDS] as const).map(b => (
          <button key={b} onClick={() => setBand(b as Band | 'All')} className="nb-btn g"
            style={{
              minHeight: 34, padding: '6px 13px', fontSize: 13,
              borderColor: band === b ? 'var(--blue)' : 'var(--line)',
              color: band === b ? 'var(--blue-700)' : 'var(--ink)',
              background: band === b ? 'var(--blue-50)' : 'var(--card)',
            }}>
            {b}
          </button>
        ))}
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search subjects"
          aria-label="Search subjects"
          style={{
            marginLeft: 'auto', minWidth: 180, font: 'inherit', fontSize: 13,
            padding: '8px 12px', borderRadius: 8, border: '1px solid var(--line)',
            background: 'var(--card)', color: 'var(--ink)',
          }} />
      </div>

      <Section title={`${shown.length} subjects`}>
        <Panel title={band === 'All' ? 'All bands' : band} more="Open syllabus" onMore={() => go('syllabus')}>
          <Table
            cols={[
              { key: 's', label: 'Subject' },
              { key: 'o', label: 'Objectives', align: 'right' },
              { key: 'c', label: 'Coverage' },
            ]}
            onRow={() => go('syllabus')}
            rows={shown.map(c => ({
              s: <span className="nm">{c.name}
                   <span className="sub">{c.band} · {c.levels}{c.core ? ' · core' : ''}</span></span>,
              o: c.objectives,
              c: <MiniBar pct={Math.round((c.covered / c.objectives) * 100)} />,
            }))}
          />
        </Panel>
      </Section>

      <div className="nb-note">
        <b>Why coverage and not course count.</b> A learner does not need ten thousand courses. They
        need the one objective their class reached this morning, taught properly, with the past
        questions that have come up on it. Everything on this platform attaches to an objective code,
        which is how a gap becomes visible instead of invisible.
      </div>
    </>
  )
}

/* ---------------------------------------------------------------- syllabus */

function Syllabus({ go }: { go: (s: ScreenId) => void }) {
  const [term, setTerm] = useState<number | 0>(0)
  const shown = SYLLABUS.filter(o => term === 0 || o.term === term)
  const strands = [...new Set(shown.map(o => o.strand))]

  const totalAssets = SYLLABUS.reduce(
    (n, o) => n + Object.values(o.assets).reduce((a, b) => a + (b ?? 0), 0), 0)

  return (
    <>
      <PageHead eyebrow="Syllabus" title="Elective Mathematics, SHS 2" />
      <p className="nb-sub">The full NaCCA syllabus. Every objective carries its own lesson, video,
        handout, slides, textbook pages, exercises and past questions.</p>

      <Stats items={[
        { label: 'Objectives', value: String(SYLLABUS.length), note: 'this level' },
        { label: 'Strands', value: String([...new Set(SYLLABUS.map(o => o.strand))].length) },
        { label: 'Resources', value: String(totalAssets), note: 'attached' },
        { label: 'Past questions', value: String(SYLLABUS.reduce((n, o) => n + (o.assets.past ?? 0), 0)),
          note: 'WASSCE, mapped' },
      ]} />

      <div style={{ display: 'flex', gap: 6, marginTop: 20, flexWrap: 'wrap' }}>
        {[0, 1, 2, 3].map(t => (
          <button key={t} onClick={() => setTerm(t)} className="nb-btn g"
            style={{
              minHeight: 34, padding: '6px 13px', fontSize: 13,
              borderColor: term === t ? 'var(--blue)' : 'var(--line)',
              color: term === t ? 'var(--blue-700)' : 'var(--ink)',
              background: term === t ? 'var(--blue-50)' : 'var(--card)',
            }}>
            {t === 0 ? 'All terms' : `Term ${t}`}
          </button>
        ))}
      </div>

      {strands.map(strand => (
        <Section key={strand} title={strand}>
          <Panel title={`${shown.filter(o => o.strand === strand).length} objectives`}>
            <Table
              cols={[
                { key: 'o', label: 'Objective' },
                { key: 'r', label: 'Resources' },
                { key: 'a', label: '', align: 'right' },
              ]}
              onRow={() => go('learn')}
              rows={shown.filter(o => o.strand === strand).map(o => ({
                o: <span className="nm">{o.text}
                     <span className="sub">
                       <code style={{ fontSize: 11 }}>{o.code}</code> · {o.subStrand} · term {o.term}
                     </span></span>,
                r: <span style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                     {(Object.keys(o.assets) as AssetKind[]).map(k => (
                       <span key={k} className="nb-pill flat" style={{ fontSize: 9.5 }}>
                         {ASSET_LABEL[k]} {o.assets[k]}
                       </span>
                     ))}
                   </span>,
                a: <Pill tone="good">Open</Pill>,
              }))}
            />
          </Panel>
        </Section>
      ))}

      <div className="nb-note">
        <b>This is the part nobody else will build.</b> Coursera has no reason to teach
        E2.2.1.1.4 to the NaCCA syllabus, and a YouTube search returns whatever happens to rank.
        Here every objective is addressable, so the platform can tell a learner exactly which one
        they are weak on and exactly which past questions have come up on it.
      </div>
    </>
  )
}

/* ----------------------------------------------------------- lesson player */

/** Accepts the answer however the learner happened to type it. */
function sameAnswer(given: string, accepted: string[]): boolean {
  const norm = (s: string) =>
    s.toLowerCase()
      .replace(/\s+/g, '')
      .replace(/²/g, '^2')
      .replace(/[−–]/g, '-')
      .replace(/\*/g, '')
  return accepted.some(a => norm(a) === norm(given))
}

/**
 * The lesson player.
 *
 * One step on screen at a time. You cannot skim ahead of a worked example
 * because its lines are revealed individually, and you cannot get stuck on
 * your own attempt because a hint is always one tap away before the answer is.
 */
function Learn({ go }: { go: (s: ScreenId) => void }) {
  const lesson = CIRCLE_LESSON
  const [i, setI] = useState(0)
  const [revealed, setRevealed] = useState(0)
  const [typed, setTyped] = useState('')
  const [verdict, setVerdict] = useState<'right' | 'wrong' | null>(null)
  const [hinted, setHinted] = useState(false)
  const [picked, setPicked] = useState<number | null>(null)
  const [done, setDone] = useState(false)

  const step = lesson.steps[i]
  const last = i === lesson.steps.length - 1

  const next = () => {
    if (last) { setDone(true); return }
    setI(n => n + 1); setRevealed(0); setTyped(''); setVerdict(null); setHinted(false); setPicked(null)
  }

  if (done) {
    return (
      <>
        <PageHead eyebrow="Lesson complete" title={lesson.title} />
        <p className="nb-sub">{lesson.subject} · {lesson.topic} · {lesson.minutes} minutes</p>
        <Stats items={[
          { label: 'Steps', value: String(lesson.steps.length), note: 'all worked through', dir: 'up' },
          { label: 'Topic', value: 'Learning', note: 'was Not started', dir: 'up' },
          { label: 'Next review', value: 'In 2 days' },
          { label: 'Streak', value: '5 days', dir: 'up' },
        ]} />
        <Grid kind="two">
          <Panel title="You can now" pad>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: 'var(--ink-2)' }}>
              {lesson.objective}
            </p>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => go('practice')}>Practise it</button>
              <button className="nb-btn g" onClick={() => { setI(0); setDone(false) }}>Go through again</button>
            </div>
          </Panel>
          <Panel title="What happens next" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              This topic moves to <b style={{ color: 'var(--ink)' }}>Learning</b> and comes back in
              two days. It only reaches Mastered once you get it right without hints, on a day you
              have not just been taught it.
            </p>
            <div className="nb-acts">
              <button className="nb-btn g" onClick={() => go('mastery')}>See what you can do</button>
            </div>
          </Panel>
        </Grid>
      </>
    )
  }

  return (
    <div className="nb-lesson">
      <PageHead eyebrow={`${lesson.subject} · ${lesson.level}`} title={lesson.title} />

      <div className="nb-steps" role="progressbar" aria-valuenow={i + 1} aria-valuemax={lesson.steps.length}>
        {lesson.steps.map((s, n) => (
          <i key={s.id} className={n < i ? 'done' : n === i ? 'now' : ''} />
        ))}
      </div>

      <div className="nb-card">
        <span className="nb-stage">
          {step.kind === 'idea' ? 'Understand' : step.kind === 'worked' ? 'Watch one worked'
            : step.kind === 'try' ? 'Your turn' : 'Check yourself'}
          {' · '}step {i + 1} of {lesson.steps.length}
        </span>
        <h3 style={{ margin: '0 0 14px', fontSize: 21, fontWeight: 700, letterSpacing: '-.02em' }}>
          {step.title}
        </h3>

        {step.kind === 'idea' && (
          <>
            <p className="nb-teach">{step.body}</p>
            <div className="nb-acts"><button className="nb-btn p" onClick={next}>Got it</button></div>
          </>
        )}

        {step.kind === 'worked' && (
          <>
            <p className="nb-problem">{step.problem}</p>
            {step.lines!.slice(0, revealed).map((l, n) => (
              <div className="nb-wline shown" key={n}>
                <div className="nb-wmath">{l.line}</div>
                <div className="nb-wwhy">{l.because}</div>
              </div>
            ))}
            <div className="nb-acts">
              {revealed < step.lines!.length ? (
                <button className="nb-btn p" onClick={() => setRevealed(r => r + 1)}>
                  {revealed === 0 ? 'Show the first step' : 'Then what?'}
                </button>
              ) : (
                <button className="nb-btn p" onClick={next}>I follow that</button>
              )}
              {revealed > 0 && revealed < step.lines!.length && (
                <span style={{ alignSelf: 'center', fontSize: 12.5, color: 'var(--muted)' }}>
                  {revealed} of {step.lines!.length} steps
                </span>
              )}
            </div>
          </>
        )}

        {step.kind === 'try' && (
          <>
            <p className="nb-problem">{step.question}</p>
            <input
              className={`nb-answer ${verdict ?? ''}`}
              value={typed}
              onChange={e => { setTyped(e.target.value); setVerdict(null) }}
              placeholder="Type your answer"
              aria-label="Your answer"
            />
            {verdict === 'right' && (
              <div className="nb-verdict right"><b>That is right.</b>{step.solution}</div>
            )}
            {verdict === 'wrong' && (
              <div className="nb-verdict wrong">
                <b>Not yet.</b>Look at it again, or take the hint. You can try as many times as you like.
              </div>
            )}
            {hinted && verdict !== 'right' && (
              <div className="nb-verdict hint"><b>Hint</b>{step.hint}</div>
            )}
            <div className="nb-acts">
              <button className="nb-btn p"
                      onClick={() => setVerdict(sameAnswer(typed, step.answer!) ? 'right' : 'wrong')}
                      disabled={!typed.trim()}
                      style={{ opacity: typed.trim() ? 1 : 0.5 }}>
                Check
              </button>
              {!hinted && verdict !== 'right' && (
                <button className="nb-btn g" onClick={() => setHinted(true)}>Give me a hint</button>
              )}
              {verdict === 'right' && <button className="nb-btn g" onClick={next}>Next</button>}
              {hinted && verdict === 'wrong' && (
                <button className="nb-btn g" onClick={() => { setVerdict('right'); setTyped(step.solution!) }}>
                  Show me
                </button>
              )}
            </div>
          </>
        )}

        {step.kind === 'check' && (
          <>
            <p className="nb-problem">{step.question}</p>
            <div style={{ display: 'grid', gap: 8 }}>
              {step.options!.map((opt, n) => {
                const show = picked !== null
                const isRight = n === step.correct
                return (
                  <button key={opt} onClick={() => picked === null && setPicked(n)} disabled={show}
                    style={{
                      textAlign: 'left', font: 'inherit', fontSize: 16, padding: '14px 16px',
                      borderRadius: 10, cursor: show ? 'default' : 'pointer', color: 'var(--ink)',
                      border: `2px solid ${show && isRight ? 'var(--good)' : show && n === picked ? 'var(--crit)' : 'var(--line)'}`,
                      background: show && isRight ? 'var(--good-bg)' : show && n === picked ? 'var(--crit-bg)' : 'var(--card)',
                    }}>
                    {opt}
                  </button>
                )
              })}
            </div>
            {picked !== null && (
              <>
                <div className={`nb-verdict ${picked === step.correct ? 'right' : 'wrong'}`}>
                  <b>{picked === step.correct ? 'Correct.' : 'Not that one.'}</b>{step.explain}
                </div>
                <div className="nb-acts"><button className="nb-btn p" onClick={next}>Finish the lesson</button></div>
              </>
            )}
          </>
        )}
      </div>

      <div className="nb-note">
        <b>Stuck on any of this?</b> The tutor already knows which lesson and which step you are on.
        <div className="nb-acts">
          <button className="nb-btn g" onClick={() => go('tutor')}>Ask about this step</button>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- mastery */

function Mastery({ go }: { go: (s: ScreenId) => void }) {
  const order: MasteryState[] = ['learning', 'not_started', 'practised', 'mastered']
  const sorted = [...MASTERY].sort((a, b) => order.indexOf(a.state) - order.indexOf(b.state))
  const count = (s: MasteryState) => MASTERY.filter(m => m.state === s).length

  const bars = (m: typeof MASTERY[number]) => {
    const filled = m.state === 'mastered' ? 3 : m.state === 'practised' ? 2 : m.state === 'learning' ? 1 : 0
    return (
      <span className="nb-mast" aria-label={MASTERY_LABEL[m.state]}>
        {[0, 1, 2].map(n => (
          <i key={n} className={n < filled ? (m.state === 'mastered' ? 'on full' : 'on') : ''} />
        ))}
      </span>
    )
  }

  return (
    <>
      <PageHead eyebrow="Mastery" title="What you can actually do" />
      <p className="nb-sub">Tracked topic by topic, not subject by subject. A subject percentage
        tells you nothing you can act on.</p>

      <Stats items={[
        { label: 'Mastered', value: String(count('mastered')), dir: 'up' },
        { label: 'Practised', value: String(count('practised')) },
        { label: 'Still learning', value: String(count('learning')), dir: 'down' },
        { label: 'Not started', value: String(count('not_started')) },
      ]} />

      <Grid kind="two">
        <Panel title="Every topic" more="By subject">
          <Table
            cols={[
              { key: 't', label: 'Topic' },
              { key: 's', label: 'Score', align: 'right' },
              { key: 'm', label: 'Mastery', align: 'right' },
            ]}
            onRow={() => go('practice')}
            rows={sorted.map(m => ({
              t: <span className="nm">{m.topic}<span className="sub">{m.subject} · {m.lastSeen}</span></span>,
              s: m.attempted ? `${m.right}/${m.attempted}` : '—',
              m: bars(m),
            }))}
          />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Work on this next" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              <b style={{ color: 'var(--ink)' }}>Mole calculations, 5 right out of 19.</b> The lowest
              score you have, on the one subject standing between you and KNUST.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => go('learn')}>Open the lesson</button>
              <button className="nb-btn g" onClick={() => go('practice')}>Practise</button>
            </div>
          </Panel>

          <Panel title="How mastery is decided" pad>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              A topic reaches <b style={{ color: 'var(--ink)' }}>Mastered</b> only when you get it
              right without hints, on a day you were not just taught it. Getting it right straight
              after the lesson shows you remembered; getting it right a fortnight later shows you
              learned it.
            </p>
          </Panel>

          <Panel title="Due for review">
            <Feed items={[
              { text: <><b>The circle</b> · learned today</>, ago: 'in 2 days', tone: 'warn' },
              { text: <><b>Mole calculations</b></>, ago: 'overdue', tone: 'crit' },
              { text: <><b>Waves and sound</b></>, ago: 'in 5 days' },
              { text: <><b>Newton's laws</b></>, ago: 'in 3 weeks', tone: 'good' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* ------------------------------------------------------------- learning path */

interface NextStep {
  id: string
  title: string
  why: string
  subject: string
  mins: number
  weight: 'now' | 'soon' | 'later'
}

/**
 * What to learn next.
 *
 * The point of the learner platform, in your own words: not "here are some
 * courses" but "based on where you are and where you want to go, here is what
 * you should learn next". So the ordering is the feature. Each step says why it
 * is there, and the reason is always drawn from the learner's own record: a
 * mark that fell, a topic taught today, an entry requirement not yet met.
 */
const NEXT_STEPS: NextStep[] = [
  { id: 's1', title: 'Mole calculations', weight: 'now', subject: 'Chemistry', mins: 20,
    why: 'You lost marks on this in three assessments running, and it is the only thing below the KNUST entry grade.' },
  { id: 's2', title: 'Completing the square', weight: 'now', subject: 'Elective Mathematics', mins: 15,
    why: 'Eleven in your class dropped marks here last week, including you. It comes up again in vectors.' },
  { id: 's3', title: 'Equation of a circle', weight: 'soon', subject: 'Elective Mathematics', mins: 25,
    why: 'Taught today. Practising within two days is when it sticks.' },
  { id: 's4', title: 'Balancing equations', weight: 'soon', subject: 'Chemistry', mins: 20,
    why: 'Moles depend on it. Fixing this first makes the topic above easier.' },
  { id: 's5', title: 'Vectors, introduction', weight: 'later', subject: 'Elective Mathematics', mins: 30,
    why: 'Your class reaches this in week 8. Getting ahead is optional.' },
  { id: 's6', title: 'Organic nomenclature', weight: 'later', subject: 'Chemistry', mins: 25,
    why: 'On the WASSCE syllabus, not yet taught by your school.' },
]

function LearningPath({ go }: { go: (s: ScreenId) => void }) {
  const [done, setDone] = useState<string[]>([])
  const open = NEXT_STEPS.filter(s => !done.includes(s.id))
  const nowCount = open.filter(s => s.weight === 'now').length
  const minutes = open.filter(s => s.weight === 'now').reduce((n, s) => n + s.mins, 0)

  const tone = (w: NextStep['weight']): Tone => (w === 'now' ? 'crit' : w === 'soon' ? 'warn' : 'flat')
  const label = (w: NextStep['weight']) => (w === 'now' ? 'Do this first' : w === 'soon' ? 'This week' : 'Getting ahead')

  return (
    <>
      <PageHead eyebrow="Learning path" title="What to learn next" />
      <p className="nb-sub">Built from where you are and where you said you want to go. Not a
        catalogue of everything, an order.</p>

      <Stats items={[
        { label: 'Do first', value: String(nowCount),
          note: nowCount ? `${minutes} minutes` : 'nothing urgent',
          dir: nowCount ? 'down' : 'up' },
        { label: 'Completed', value: String(done.length), note: 'this week', dir: 'up' },
        { label: 'Target', value: 'Civil Eng', note: 'KNUST' },
        { label: 'On track', value: '4 of 5', note: 'entry subjects', dir: 'down' },
      ]} />

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title={open.length ? `${open.length} steps` : 'Path clear'}>
            {open.length === 0 ? (
              <div style={{ padding: '26px 16px', textAlign: 'center' }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Nothing outstanding</p>
                <p style={{ margin: '5px 0 0', fontSize: 13, color: 'var(--muted)' }}>
                  You have worked through everything suggested. New steps appear as lessons are taught
                  and marks come in.
                </p>
              </div>
            ) : open.map(s => (
              <div key={s.id} style={{ padding: 14, borderBottom: '1px solid var(--line-2)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 9, flexWrap: 'wrap' }}>
                  <b style={{ fontSize: 14.5 }}>{s.title}</b>
                  <Pill tone={tone(s.weight)}>{label(s.weight)}</Pill>
                  <span style={{ marginLeft: 'auto', fontSize: 11.5, color: 'var(--muted)' }}>
                    {s.subject} · {s.mins} min
                  </span>
                </div>
                <p style={{ margin: '7px 0 0', fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                  {s.why}
                </p>
                <div className="nb-acts" style={{ marginTop: 11 }}>
                  <button className="nb-btn p" style={{ minHeight: 34, padding: '6px 13px', fontSize: 12.5 }}
                          onClick={() => go('practice')}>
                    Practise
                  </button>
                  <button className="nb-btn g" style={{ minHeight: 34, padding: '6px 13px', fontSize: 12.5 }}
                          onClick={() => go('tutor')}>
                    Explain it
                  </button>
                  <button className="nb-btn g" style={{ minHeight: 34, padding: '6px 13px', fontSize: 12.5 }}
                          onClick={() => setDone(d => [...d, s.id])}>
                    Mark done
                  </button>
                </div>
              </div>
            ))}
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Why this order" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              Nothing here is on the list because it is next in the textbook. Each step is here
              because of <b style={{ color: 'var(--ink)' }}>something in your own record</b>: a mark
              that fell, a topic your class was taught today, or an entry requirement you have not
              met yet.
            </p>
          </Panel>

          <Panel title="Where you are going">
            <Feed items={[
              { text: <>Civil Engineering · <b>KNUST</b></>, ago: 'target', tone: 'good' },
              { text: <>Core and Elective Maths</>, ago: 'A1', tone: 'good' },
              { text: <>Physics</>, ago: 'B2', tone: 'good' },
              { text: <>Chemistry</>, ago: 'C4, needs C6', tone: 'crit' },
              { text: <>English</>, ago: 'B3', tone: 'good' },
            ]} />
          </Panel>

          <Panel title="Done this week">
            {done.length === 0 ? (
              <div style={{ padding: '14px 13px', fontSize: 13, color: 'var(--muted)' }}>
                Nothing yet. Mark a step done and it moves here.
              </div>
            ) : (
              <Feed items={NEXT_STEPS.filter(s => done.includes(s.id)).map(s => ({
                text: <><b>{s.title}</b></>, ago: `${s.mins} min`, tone: 'good' as const,
              }))} />
            )}
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* ---------------------------------------------------------------- practice */

interface Question {
  id: string
  topic: string
  stem: string
  options: string[]
  answer: number
  explain: string
}

const QUESTIONS: Question[] = [
  { id: 'q1', topic: 'Mole calculations',
    stem: 'How many moles are there in 36 g of water? (H = 1, O = 16)',
    options: ['0.5 mol', '1 mol', '2 mol', '18 mol'], answer: 2,
    explain: 'Molar mass of H₂O is 2(1) + 16 = 18 g/mol. Moles = mass ÷ molar mass = 36 ÷ 18 = 2 mol.' },
  { id: 'q2', topic: 'Mole calculations',
    stem: 'What mass of NaCl contains 0.25 moles? (Na = 23, Cl = 35.5)',
    options: ['14.6 g', '58.5 g', '234 g', '4.1 g'], answer: 0,
    explain: 'Molar mass of NaCl is 23 + 35.5 = 58.5 g/mol. Mass = moles × molar mass = 0.25 × 58.5 = 14.6 g.' },
  { id: 'q3', topic: 'Equation of a circle',
    stem: 'What is the centre of the circle (x − 3)² + (y + 2)² = 25?',
    options: ['(−3, 2)', '(3, −2)', '(3, 2)', '(−3, −2)'], answer: 1,
    explain: 'In (x − a)² + (y − b)² = r², the centre is (a, b). Here a = 3 and b = −2, so the centre is (3, −2).' },
  { id: 'q4', topic: 'Equation of a circle',
    stem: 'What is the radius of that same circle?',
    options: ['5', '25', '12.5', '625'], answer: 0,
    explain: 'The right-hand side is r², so r² = 25 and r = 5.' },
  { id: 'q5', topic: 'Completing the square',
    stem: 'Complete the square: x² − 6x + 4',
    options: ['(x − 3)² − 5', '(x − 3)² + 5', '(x − 6)² − 32', '(x + 3)² − 5'], answer: 0,
    explain: 'Half of −6 is −3, and (−3)² = 9. So x² − 6x + 4 = (x − 3)² − 9 + 4 = (x − 3)² − 5.' },
]

/**
 * Practice.
 *
 * A real quiz: choose, get marked immediately, see why. Immediate marking is
 * the point, because a learner who finds out on Friday what they got wrong on
 * Monday has already built the habit wrong.
 */
function Practice() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [scores, setScores] = useState<boolean[]>([])

  const q = QUESTIONS[i]
  const finished = scores.length === QUESTIONS.length
  const correct = scores.filter(Boolean).length

  const choose = (n: number) => {
    if (picked !== null) return
    setPicked(n)
    setScores(s => [...s, n === q.answer])
  }

  const next = () => { setPicked(null); setI(n => n + 1) }
  const restart = () => { setI(0); setPicked(null); setScores([]) }

  if (finished) {
    const pctScore = Math.round((correct / QUESTIONS.length) * 100)
    return (
      <>
        <PageHead eyebrow="Practice" title="Finished" />
        <Stats items={[
          { label: 'Score', value: `${correct} / ${QUESTIONS.length}`, note: `${pctScore}%`,
            dir: pctScore >= 60 ? 'up' : 'down' },
          { label: 'Topics', value: '3' },
          { label: 'Time', value: '6 min' },
          { label: 'Streak', value: '4 days', dir: 'up' },
        ]} />

        <Grid kind="two">
          <Panel title="Every question">
            <Table
              cols={[
                { key: 'q', label: 'Question' },
                { key: 't', label: 'Topic' },
                { key: 'r', label: '', align: 'right' },
              ]}
              rows={QUESTIONS.map((qq, n) => ({
                q: <span className="nm">{qq.stem.slice(0, 46)}…</span>,
                t: qq.topic,
                r: scores[n] ? <Pill tone="good">Right</Pill> : <Pill tone="crit">Wrong</Pill>,
              }))}
            />
          </Panel>

          <div style={{ display: 'grid', gap: 14 }}>
            <Panel title="What this changed" pad>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
                Your answers go straight into your learning path, so the next thing suggested to you
                reflects what you just got wrong rather than what you got wrong in June.
              </p>
              <div className="nb-acts">
                <button className="nb-btn p" onClick={restart}>Practise again</button>
              </div>
            </Panel>
          </div>
        </Grid>
      </>
    )
  }

  return (
    <>
      <PageHead eyebrow={`Practice · question ${i + 1} of ${QUESTIONS.length}`} title={q.topic} />
      <p className="nb-sub">Marked as you go, with the working shown. Nothing is reported to your
        teacher.</p>

      <div className="nb-track" style={{ marginTop: 18, maxWidth: 320 }}>
        <i style={{ width: `${(scores.length / QUESTIONS.length) * 100}%`, background: 'var(--blue)' }} />
      </div>

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Question" pad>
            <p style={{ margin: '0 0 16px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink)' }}>
              {q.stem}
            </p>

            <div style={{ display: 'grid', gap: 8 }}>
              {q.options.map((opt, n) => {
                const isAnswer = n === q.answer
                const isPicked = picked === n
                const show = picked !== null
                return (
                  <button
                    key={opt}
                    onClick={() => choose(n)}
                    disabled={show}
                    style={{
                      textAlign: 'left', font: 'inherit', fontSize: 14.5, padding: '13px 15px',
                      borderRadius: 10, cursor: show ? 'default' : 'pointer',
                      border: `1px solid ${show && isAnswer ? 'var(--good)'
                        : show && isPicked ? 'var(--crit)' : 'var(--line)'}`,
                      background: show && isAnswer ? 'var(--good-bg)'
                        : show && isPicked ? 'var(--crit-bg)' : 'var(--card)',
                      color: 'var(--ink)',
                    }}
                  >
                    {opt}
                    {show && isAnswer && <b style={{ float: 'right', color: 'var(--good)' }}>Correct</b>}
                    {show && isPicked && !isAnswer && <b style={{ float: 'right', color: 'var(--crit)' }}>Your answer</b>}
                  </button>
                )
              })}
            </div>

            {picked !== null && (
              <>
                <div className="nb-note">
                  <b>{picked === q.answer ? 'Right.' : 'Not quite.'}</b> {q.explain}
                </div>
                <div className="nb-acts">
                  <button className="nb-btn p" onClick={next}>
                    {i === QUESTIONS.length - 1 ? 'See your score' : 'Next question'}
                  </button>
                </div>
              </>
            )}
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="This session" pad>
            <div className="nb-split"><span className="k">Answered</span><span className="v">{scores.length}</span></div>
            <div className="nb-split"><span className="k">Right</span><span className="v" style={{ color: 'var(--good)' }}>{correct}</span></div>
            <div className="nb-split"><span className="k">Wrong</span><span className="v" style={{ color: 'var(--crit)' }}>{scores.length - correct}</span></div>
          </Panel>

          <Panel title="Why these questions" pad>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              Chosen from the topics you have lost the most marks on, and the one your class was
              taught today. Not a random set.
            </p>
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* --------------------------------------------------------------- exam prep */

function ExamPrep({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Exam preparation" title="WASSCE, May 2031" />
      <p className="nb-sub">9 months away · readiness measured against the real entry grades you need,
        not against the class average.</p>

      <Stats items={[
        { label: 'Readiness', value: '78%', note: 'up 6 points this term', dir: 'up' },
        { label: 'Subjects on track', value: '4 of 5', dir: 'down' },
        { label: 'Past papers done', value: '12', note: 'of 40 available' },
        { label: 'Weakest', value: 'Chemistry', note: 'C4, needs C6', dir: 'down' },
      ]} />

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Readiness by subject">
            <Table
              cols={[
                { key: 's', label: 'Subject' },
                { key: 'g', label: 'Predicted', align: 'right' },
                { key: 'n', label: 'Needed', align: 'right' },
                { key: 'r', label: 'Readiness' },
              ]}
              rows={[
                ['Core Mathematics', 'A1', 'B3', 92, 'good'],
                ['Elective Mathematics', 'A1', 'B3', 90, 'good'],
                ['Physics', 'B2', 'C6', 84, 'good'],
                ['English Language', 'B3', 'C6', 81, 'good'],
                ['Chemistry', 'C4', 'C6', 47, 'crit'],
              ].map(r => ({
                s: <span className="nm">{r[0] as string}</span>,
                g: <Pill tone={r[4] as 'good' | 'crit'}>{r[1] as string}</Pill>,
                n: r[2],
                r: <MiniBar pct={r[3] as number} />,
              }))}
            />
          </Panel>

          <Panel title="Past papers" more="All 40">
            <Table
              cols={[
                { key: 'p', label: 'Paper' },
                { key: 'y', label: 'Year', align: 'right' },
                { key: 'st', label: '', align: 'right' },
              ]}
              rows={[
                ['Elective Mathematics 2', 'Objective and theory', '2024', 'Done, 34/40', 'good'],
                ['Elective Mathematics 2', 'Objective and theory', '2023', 'Done, 31/40', 'good'],
                ['Chemistry 2', 'Objective and theory', '2024', 'Done, 18/40', 'crit'],
                ['Chemistry 2', 'Objective and theory', '2023', 'Not started', 'flat'],
                ['Physics 2', 'Objective and theory', '2024', 'Not started', 'flat'],
              ].map(r => ({
                p: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
                y: r[2],
                st: <Pill tone={r[4] as 'good' | 'crit' | 'flat'}>{r[3] as string}</Pill>,
              }))}
            />
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="The one thing" pad>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
              <h3 style={{ margin: 0, fontSize: 15.5, fontWeight: 700 }}>Chemistry, or no KNUST</h3>
              <Pill tone="crit">blocking</Pill>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              Four of your five subjects already clear the entry grade. Chemistry does not, and it is
              the only thing standing between you and Civil Engineering. Nine months is plenty if you
              start now.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => go('practice')}>Practise chemistry</button>
              <button className="nb-btn g" onClick={() => go('path')}>See the plan</button>
            </div>
          </Panel>

          <Panel title="Countdown">
            <Feed items={[
              { text: <>Mock examinations</>, ago: 'Feb 2031', tone: 'warn' },
              { text: <>Registration closes</>, ago: 'Jan 2031', tone: 'warn' },
              { text: <>WASSCE begins</>, ago: 'May 2031', tone: 'crit' },
              { text: <>University applications</>, ago: 'Aug 2031' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* ------------------------------------------------------------ skills & TVET */

/**
 * Skills and TVET.
 *
 * Deliberately not a university-only platform. A learner who leaves after SHS
 * should still have something that proves what they can do, which is what the
 * project portfolio is for: evidence rather than a claim on a form.
 */
function Skills() {
  const [tab, setTab] = useState<'skills' | 'projects' | 'training'>('skills')

  return (
    <>
      <PageHead eyebrow="Skills and TVET" title="What you can actually do" />
      <p className="nb-sub">Not only what you were examined on. Skills build up over years and the
        evidence sits beside them.</p>

      <div style={{ display: 'flex', gap: 6, marginTop: 18, flexWrap: 'wrap' }}>
        {(['skills', 'projects', 'training'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} className="nb-btn g"
            style={{
              minHeight: 36, padding: '7px 15px', textTransform: 'capitalize',
              borderColor: tab === t ? 'var(--blue)' : 'var(--line)',
              color: tab === t ? 'var(--blue-700)' : 'var(--ink)',
              background: tab === t ? 'var(--blue-50)' : 'var(--card)',
            }}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'skills' && (
        <>
          <Stats items={[
            { label: 'Skills tracked', value: '9' },
            { label: 'Evidenced', value: '5', note: 'backed by work', dir: 'up' },
            { label: 'Assessed', value: '3', note: 'by a teacher' },
            { label: 'For your path', value: '2 of 4', note: 'civil engineering', dir: 'down' },
          ]} />
          <Section title="Your skills" say="A level is only shown once there is work or an assessment behind it.">
            <Panel title="Tracked skills" more="Add a skill">
              <Table
                cols={[
                  { key: 's', label: 'Skill' },
                  { key: 'e', label: 'Evidence' },
                  { key: 'l', label: 'Level' },
                ]}
                rows={[
                  ['Mathematics', 'Academic', 'A1 in mock, 3 assessments', 84],
                  ['Technical drawing', 'TVET', 'Coursework, 2 pieces', 62],
                  ['CAD', 'TVET', 'Ghana Code Club certificate', 55],
                  ['Laboratory work', 'Academic', 'Practical assessments', 58],
                  ['Public speaking', 'Co-curricular', 'Science quiz, regional', 71],
                  ['Coding', 'TVET', 'Certificate, 2029', 48],
                ].map(r => ({
                  s: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
                  e: r[2],
                  l: <MiniBar pct={r[3] as number} />,
                }))}
              />
            </Panel>
          </Section>
        </>
      )}

      {tab === 'projects' && (
        <>
          <Stats items={[
            { label: 'Projects', value: '3', note: 'in your portfolio' },
            { label: 'Verified', value: '2', note: 'by a teacher', dir: 'up' },
            { label: 'Attachments', value: '1', note: 'industrial' },
            { label: 'Awards', value: '2' },
          ]} />
          <Grid kind="two">
            <Panel title="Your work">
              <Table
                cols={[
                  { key: 'p', label: 'Project' },
                  { key: 'w', label: 'When', align: 'right' },
                  { key: 'v', label: '', align: 'right' },
                ]}
                rows={[
                  ['Rainwater filter for the school garden', 'Science project, Form 2', '2029', true],
                  ['Bridge load model', 'Technical drawing coursework', '2030', true],
                  ['Arduino soil moisture sensor', 'Personal project', '2030', false],
                ].map(r => ({
                  p: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
                  w: r[2],
                  v: r[3] ? <Pill tone="good">Verified</Pill> : <Pill tone="flat">Self-reported</Pill>,
                }))}
              />
            </Panel>
            <div style={{ display: 'grid', gap: 14 }}>
              <Panel title="Why projects" pad>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
                  Learn, sit an exam, forget. A portfolio breaks that: an employer can see what was
                  built, and a teacher's verification is what separates it from a claim.
                </p>
              </Panel>
              <Panel title="Experience">
                <Feed items={[
                  { text: <>Tema Oil Refinery · <b>3 weeks</b></>, ago: '2030', tone: 'good' },
                  { text: <>Regional Science and Maths Quiz</>, ago: '2nd place', tone: 'good' },
                  { text: <>School science fair</>, ago: '1st place', tone: 'good' },
                ]} />
              </Panel>
            </div>
          </Grid>
        </>
      )}

      {tab === 'training' && (
        <>
          <p className="nb-say" style={{ marginTop: 20 }}>
            TVET routes open to you now, alongside school. None of these require leaving SHS.
          </p>
          <Panel title="Available near Cape Coast" more="All 40">
            <Table
              cols={[
                { key: 'c', label: 'Programme' },
                { key: 'p', label: 'Provider' },
                { key: 'd', label: 'Length', align: 'right' },
              ]}
              rows={[
                ['CAD and technical drawing', 'Level 2 certificate', 'Cape Coast Technical', '6 months'],
                ['Surveying assistant', 'Level 1 certificate', 'Cape Coast Technical', '4 months'],
                ['Electrical installation', 'NVTI certificate', 'Takoradi Technical', '12 months'],
                ['Construction site safety', 'Short course', 'Ghana Institution of Engineers', '3 weeks'],
                ['Renewable energy basics', 'Short course', 'Energy Commission', '6 weeks'],
              ].map(r => ({
                c: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
                p: r[2], d: r[3],
              }))}
            />
          </Panel>
          <div className="nb-note">
            <b>TVET is not a fallback.</b> A surveying or CAD certificate alongside WASSCE makes a
            civil engineering application stronger, not weaker, and it is something to work with if
            university has to wait.
          </div>
        </>
      )}
    </>
  )
}

/* ------------------------------------------------------------- certificates */

function Certificates({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Certificates" title="What you have earned" />
      <p className="nb-sub">Every certificate carries a number anyone can check, so nobody has to
        telephone your school to confirm it.</p>

      <Stats items={[
        { label: 'Certificates', value: '3', note: 'all verifiable', dir: 'up' },
        { label: 'Checked', value: '4', note: 'by employers this year' },
        { label: 'Awaiting', value: '1', note: 'WASSCE 2031' },
        { label: 'Issuers', value: '3' },
      ]} />

      <Grid kind="two">
        <Panel title="Held" more="Share all">
          <Table
            cols={[
              { key: 'c', label: 'Certificate' },
              { key: 'y', label: 'Year', align: 'right' },
              { key: 's', label: '', align: 'right' },
            ]}
            onRow={() => go('verify')}
            rows={[
              ['Basic Education Certificate', 'West African Examinations Council · GH-CERT-BECE-2028-778104', '2028'],
              ['Introduction to Coding', 'Ghana Code Club · GH-CERT-GCC-2029-011947', '2029'],
              ['Regional Science and Maths Quiz, 2nd place', 'Ghana Education Service · GH-CERT-GES-2030-204418', '2030'],
            ].map(r => ({
              c: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
              y: r[2],
              s: <Pill tone="good">Verified</Pill>,
            }))}
          />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Who has checked yours">
            <Feed items={[
              { text: <>Tema Oil Refinery · attachment</>, ago: '2030', tone: 'good' },
              { text: <>GNPC Scholarship board</>, ago: '2030', tone: 'good' },
              { text: <>Ghana Code Club · enrolment</>, ago: '2029' },
              { text: <>Wesley Girls' · admission</>, ago: '2028' },
            ]} />
          </Panel>

          <Panel title="You can see every check" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              A check confirms the certificate exists and who holds it. It never shows your marks,
              your attendance or anything else, and <b style={{ color: 'var(--ink)' }}>you see every
              time anyone looks</b>.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => go('verify')}>Try a check yourself</button>
            </div>
          </Panel>

          <Panel title="Coming">
            <Feed items={[
              { text: <>WASSCE certificate</>, ago: 'May 2031', tone: 'warn' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* -------------------------------------------------------------- universities */

function Universities({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Universities" title="Where you could go" />
      <p className="nb-sub">Matched against your predicted grades, not against a brochure. Entry
        requirements are the real ones.</p>

      <Stats items={[
        { label: 'Programmes matched', value: '14', note: 'on predicted grades', dir: 'up' },
        { label: 'Reach', value: '3', note: 'need chemistry up', dir: 'down' },
        { label: 'Safe', value: '8' },
        { label: 'Applications open', value: 'Aug 2031' },
      ]} />

      <Grid kind="two">
        <Panel title="Civil Engineering and related" more="All 14">
          <Table
            cols={[
              { key: 'p', label: 'Programme' },
              { key: 'r', label: 'Needs', align: 'right' },
              { key: 'c', label: 'Chance', align: 'right' },
            ]}
            rows={[
              ['BSc Civil Engineering', 'KNUST, Kumasi', 'Aggregate 8', 'Reach', 'warn'],
              ['BSc Civil Engineering', 'UMaT, Tarkwa', 'Aggregate 12', 'Likely', 'good'],
              ['BSc Geological Engineering', 'UMaT, Tarkwa', 'Aggregate 14', 'Likely', 'good'],
              ['BSc Building Technology', 'KNUST, Kumasi', 'Aggregate 14', 'Likely', 'good'],
              ['HND Civil Engineering', 'Accra Technical University', 'Aggregate 24', 'Safe', 'good'],
              ['BSc Mathematics', 'University of Ghana', 'Aggregate 12', 'Likely', 'good'],
            ].map(r => ({
              p: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
              r: r[2],
              c: <Pill tone={r[4] as 'good' | 'warn'}>{r[3] as string}</Pill>,
            }))}
          />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="What stands between you and KNUST" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              KNUST Civil Engineering wants aggregate 8. On predicted grades you are at 11, and
              <b style={{ color: 'var(--ink)' }}> chemistry is the whole difference</b>. Moving C4 to
              B3 puts you inside.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => go('path')}>See the plan</button>
            </div>
          </Panel>

          <Panel title="Cost and support">
            <Feed items={[
              { text: <>KNUST · fees and residence</>, ago: 'GHS 4,800/yr' },
              { text: <>UMaT · fees and residence</>, ago: 'GHS 4,100/yr' },
              { text: <>GNPC scholarship covers full tuition</>, ago: 'you match', tone: 'good' },
              { text: <>Students Loan Trust Fund</>, ago: 'eligible', tone: 'good' },
            ]} />
          </Panel>

          <Panel title="After the degree" pad>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              Your account does not end at graduation. Professional registration with the Ghana
              Institution of Engineers, CPD and later training all attach to the same record.
            </p>
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* ---------------------------------------------------------------- curriculum */

/**
 * The curriculum engine.
 *
 * Everything else in the platform hangs off this: a lesson, a resource, a
 * question and a learner's weakness all point at the same objective code, which
 * is what lets government see whether learners are actually moving through the
 * syllabus rather than whether schools filed a return.
 */
function Curriculum() {
  return (
    <>
      <PageHead eyebrow="Curriculum engine" title="National Curriculum" />
      <p className="nb-sub">Standards-Based Curriculum and Common Core · Subject → Strand →
        Sub-strand → Learning objective → Resources → Assessment</p>

      <Stats items={[
        { label: 'Subjects', value: '32', note: 'KG to SHS' },
        { label: 'Objectives', value: '11,480', note: 'all levels' },
        { label: 'Linked resources', value: '48,206', note: 'lessons, videos, papers' },
        { label: 'Mapped questions', value: '92,314', note: 'including WAEC past papers' },
      ]} />

      <Grid kind="two">
        <Panel title="JHS 2 Mathematics" more="Change subject">
          <Table
            cols={[
              { key: 'o', label: 'Learning objective' },
              { key: 'r', label: 'Resources', align: 'right' },
              { key: 'p', label: 'National progress' },
            ]}
            rows={[
              ['Algebra · Linear equations', 'Solve linear equations in one variable', 214, 71],
              ['Algebra · Expressions', 'Expand and factorise single brackets', 186, 68],
              ['Number · Fractions', 'Add and subtract unlike denominators', 302, 44],
              ['Number · Ratio', 'Share a quantity in a given ratio', 158, 63],
              ['Geometry · Construction', 'Construct a triangle from three sides', 121, 52],
              ['Handling data · Averages', 'Find mean, median, mode and range', 197, 66],
            ].map(r => ({
              o: <span className="nm">{r[1] as string}<span className="sub">{r[0] as string}</span></span>,
              r: r[2],
              p: <MiniBar pct={r[3] as number} />,
            }))}
          />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Weakest objectives nationally" more="All 40">
            <Feed items={[
              { text: <><b>Fractions</b> · Basic 5 and 6</>, ago: '44%', tone: 'crit' },
              { text: <><b>Mole calculations</b> · SHS Chemistry</>, ago: '47%', tone: 'crit' },
              { text: <><b>Construction</b> · JHS Geometry</>, ago: '52%', tone: 'warn' },
              { text: <><b>Comprehension</b> · Basic 4 English</>, ago: '55%', tone: 'warn' },
              { text: <><b>Probability</b> · SHS Elective Maths</>, ago: '58%', tone: 'warn' },
            ]} />
          </Panel>

          <Panel title="One objective, everything attached" pad>
            <div className="nb-split"><span className="k">Teacher resources</span><span className="v">18</span></div>
            <div className="nb-split"><span className="k">Student lessons</span><span className="v">42</span></div>
            <div className="nb-split"><span className="k">Exercises</span><span className="v">96</span></div>
            <div className="nb-split"><span className="k">Past questions</span><span className="v">31</span></div>
            <div className="nb-split"><span className="k">Learners assessed</span><span className="v">312,884</span></div>
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* ------------------------------------------------------------------- library */

function Library() {
  return (
    <>
      <PageHead eyebrow="National Education Library" title="Library" />
      <p className="nb-sub">Approved textbooks, teacher guides, past papers, video and audio lessons.
        Everything tagged to a curriculum objective.</p>

      <Stats items={[
        { label: 'Textbooks', value: '1,842', note: 'GES approved' },
        { label: 'Video lessons', value: '12,406', note: 'low-bandwidth versions' },
        { label: 'Past papers', value: '2,318', note: 'BECE and WASSCE' },
        { label: 'Downloaded', value: '4.1M', note: 'for offline use', dir: 'up' },
      ]} />

      <Grid kind="two">
        <Panel title="For your subjects" more="Browse all">
          <Table
            cols={[
              { key: 't', label: 'Title' },
              { key: 'k', label: 'Type' },
              { key: 's', label: 'Size', align: 'right' },
            ]}
            rows={[
              ['Elective Mathematics for SHS', 'Ministry of Education', 'Textbook', '18 MB'],
              ['WASSCE Elective Maths 2014 to 2024', 'WAEC', 'Past papers', '6 MB'],
              ['Coordinate geometry, worked examples', 'Ghana Maths Teachers Association', 'Video', '22 MB'],
              ['Teaching the circle', 'NaCCA teacher guide', 'Guide', '3 MB'],
              ['Chemistry practical handbook', 'Ministry of Education', 'Textbook', '14 MB'],
            ].map(r => ({
              t: <span className="nm">{r[0]}<span className="sub">{r[1]}</span></span>,
              k: r[2], s: r[3],
            }))}
          />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Works without a network" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              Download once on the school network and it stays on the device for the year. On a weak
              connection the platform serves <b style={{ color: 'var(--ink)' }}>text, audio and
              compressed images</b> instead of video, automatically.
            </p>
          </Panel>

          <Panel title="Downloaded on this device">
            <Feed items={[
              { text: <>Elective Maths textbook</>, ago: '18 MB', tone: 'good' },
              { text: <>WASSCE past papers 2019 to 2024</>, ago: '6 MB', tone: 'good' },
              { text: <>Equation of a circle · lesson</>, ago: '2 MB', tone: 'good' },
              { text: <>Chemistry practical handbook</>, ago: 'queued', tone: 'warn' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* -------------------------------------------------------------- career path */

function Career() {
  return (
    <>
      <PageHead eyebrow="Career pathway" title="Civil Engineer" />
      <p className="nb-sub">From where Ama is now to the job, with the gaps named.</p>

      <Section title="The path">
        <div className="nb-journey">
          {[
            ['Now', 'SHS 2 Science'],
            ['Next', 'WASSCE 2031'],
            ['Then', 'BSc Civil Eng'],
            ['Skills', 'CAD · Surveying'],
            ['Experience', 'Internship'],
            ['Licence', 'GhIE registration'],
            ['Work', 'Civil Engineer'],
          ].map(([k, v], i) => (
            <div key={k} className={`nb-stage${i === 0 ? ' now' : i > 1 ? ' future' : ''}`}>
              <b>{k}</b><span>{v}</span>
            </div>
          ))}
        </div>
      </Section>

      <Grid kind="two">
        <Panel title="What you need" more="Full requirements">
          <Table
            cols={[
              { key: 'r', label: 'Requirement' },
              { key: 'n', label: 'Needed', align: 'right' },
              { key: 's', label: 'You', align: 'right' },
            ]}
            rows={[
              { r: <span className="nm">Core Mathematics<span className="sub">KNUST entry</span></span>,
                n: 'B3 or better', s: <Pill tone="good">A1</Pill> },
              { r: <span className="nm">Elective Mathematics<span className="sub">KNUST entry</span></span>,
                n: 'B3 or better', s: <Pill tone="good">A1</Pill> },
              { r: <span className="nm">Physics<span className="sub">KNUST entry</span></span>,
                n: 'C6 or better', s: <Pill tone="good">B2</Pill> },
              { r: <span className="nm">Chemistry<span className="sub">KNUST entry</span></span>,
                n: 'C6 or better', s: <Pill tone="crit">C4 at risk</Pill> },
              { r: <span className="nm">English Language<span className="sub">KNUST entry</span></span>,
                n: 'C6 or better', s: <Pill tone="good">B3</Pill> },
            ]}
          />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="The one gap" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              <b style={{ color: 'var(--ink)' }}>Chemistry is the only thing standing between you and
              this course.</b> Mole calculations account for most of the loss. Twenty minutes twice a
              week closes it well before WASSCE.
            </p>
          </Panel>

          <Panel title="Where it leads" more="TVET routes too">
            <Feed items={[
              { text: <>BSc Civil Engineering · <b>KNUST</b></>, ago: '4 years' },
              { text: <>BSc Civil Engineering · <b>UMaT</b></>, ago: '4 years' },
              { text: <>HND Building Technology · <b>Accra Technical</b></>, ago: '3 years' },
              { text: <>Surveying and CAD · <b>TVET certificate</b></>, ago: '2 years' },
            ]} />
          </Panel>

          <Panel title="Skills to build">
            <Feed items={[
              { text: <><b>CAD</b> · started</>, ago: 'in progress', tone: 'good' },
              { text: <><b>Surveying</b></>, ago: 'not started', tone: 'warn' },
              { text: <><b>Site safety</b></>, ago: 'not started', tone: 'warn' },
              { text: <><b>Technical drawing</b> · level 2</>, ago: 'in progress', tone: 'good' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* ------------------------------------------------------------- opportunities */

function Opportunities() {
  return (
    <>
      <PageHead eyebrow="Opportunities" title="Matched to you" />
      <p className="nb-sub">Scholarships, internships and competitions matched against Ama's
        subjects, grades and stated career path.</p>

      <Stats items={[
        { label: 'Matched', value: '11', note: 'open now', dir: 'up' },
        { label: 'Scholarships', value: '3', note: '2 close this month', dir: 'down' },
        { label: 'Internships', value: '5' },
        { label: 'Competitions', value: '3' },
      ]} />

      <Panel title="Open now" more="All 11">
        <Table
          cols={[
            { key: 'o', label: 'Opportunity' },
            { key: 'k', label: 'Type' },
            { key: 'c', label: 'Closes', align: 'right' },
          ]}
          rows={[
            ['GNPC Scholarship for Science and Maths', 'Full tuition, engineering', 'Scholarship', '31 Aug'],
            ['MTN Foundation Bright Scholarship', 'SHS to university', 'Scholarship', '12 Sep'],
            ['Ghana Science and Maths Quiz', 'Regional qualifier', 'Competition', '4 Oct'],
            ['Tema Oil Refinery holiday attachment', 'Laboratory and QC', 'Internship', 'Rolling'],
            ['Ghana Institution of Engineers mentoring', 'Student membership', 'Programme', 'Rolling'],
          ].map(r => ({
            o: <span className="nm">{r[0]}<span className="sub">{r[1]}</span></span>,
            k: r[2],
            c: r[3] === 'Rolling' ? <Pill tone="flat">Rolling</Pill> : <Pill tone="warn">{r[3]}</Pill>,
          }))}
        />
      </Panel>

      <div className="nb-note">
        <b>Matched, not advertised.</b> These appear because Ama's grades and her stated career path
        meet the criteria. A learner is never shown something they cannot apply for.
      </div>
    </>
  )
}

/* ------------------------------------------------------- AI for staff & gov */

function AskTheData({ role }: { role: Role }) {
  const script: Record<string, { q: string; a: string }[]> = {
    teacher: [
      { q: 'Create a Grade 6 lesson on photosynthesis', a: 'Drafted against objective B6.2.1.1.3, with a starter, two demonstrations, a group activity and six exercises. Everything is editable, and nothing is added to your class until you approve it.' },
      { q: 'Which of my learners are at risk?', a: 'Five in SHS 2 Science A. Kwame Asare on attendance, Efua Danso on a falling trend, and three on coordinate geometry specifically. Yaw Boateng is the one most likely to recover with a single intervention.' },
    ],
    head: [
      { q: 'Which classes are falling behind?', a: 'SHS 3 Science B is six weeks behind on Elective Mathematics, and SHS 3 Arts B has dropped eight points on attendance since last term. Both trace to the same two unfilled periods on Tuesday.' },
      { q: 'Are we ready to release term 3 reports?', a: 'Not yet. Three classes have missing marks and SHS 1 Gold has no conduct remarks. Everything else is complete.' },
    ],
    officer: [
      { q: 'Compare mathematics performance across regions over three years', a: 'Greater Accra is up 6 points, Ashanti flat, and Northern down 3. The gap between the strongest and weakest region has widened from 14 to 21 points since 2028.' },
      { q: 'Which schools have the largest mathematics gaps?', a: 'Nine schools in Karaga district have no mathematics teacher for Basic 7 to 9. They account for 38% of the district shortfall on their own.' },
    ],
  }
  const turns = script[role] ?? script.officer

  return (
    <>
      <PageHead eyebrow={role === 'teacher' ? 'AI assistant' : 'Education intelligence'}
                title={role === 'teacher' ? 'Ask for help' : 'Ask the data'} />
      <p className="nb-sub">
        {role === 'teacher'
          ? 'It knows your classes, your syllabus position and what your learners got wrong.'
          : 'Plain questions against the live record. Every answer can be traced to the schools and lessons behind it.'}
      </p>

      <Grid kind="two">
        <div className="nb-card">
          {turns.map((t, i) => (
            <div key={i}>
              <div className="nb-msg me">{t.q}</div>
              <div className="nb-msg ai">{t.a}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Try asking">
            <Feed items={[
              { text: role === 'teacher' ? 'Draft next week\'s notes' : 'Which districts improved most?', ago: '' },
              { text: role === 'teacher' ? 'Make a quiz on the circle' : 'Where are teachers missing?', ago: '' },
              { text: role === 'teacher' ? 'Who missed the last three lessons?' : 'Show fractions by region', ago: '' },
              { text: role === 'teacher' ? 'Explain this topic more simply' : 'Compare BECE to attendance', ago: '' },
            ]} />
          </Panel>

          <Panel title="Kept honest" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              Answers come from the approved curriculum and the actual record, never from open
              guesswork. Every figure links back to the schools, classes and lessons it came from,
              and the assistant says so when it does not know.
            </p>
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* --------------------------------------------------------------------- entry */

/**
 * Real sign in.
 *
 * One account, whatever you are. The role is not chosen here: it is read from
 * the profile after authentication, so the application a person gets is decided
 * by the record rather than by a button they pressed.
 */
function Entry() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError(null)
    try {
      await signIn(email.trim(), password)
      // useSchoolAuth picks the session up through onAuthStateChange.
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not sign in')
    } finally {
      setBusy(false)
    }
  }

  const field: React.CSSProperties = {
    width: '100%', font: 'inherit', fontSize: 14, padding: '11px 13px',
    borderRadius: 9, border: '1px solid var(--line)', marginBottom: 10,
    color: 'var(--ink)', background: 'var(--card)',
  }

  return (
    <div className="nb-entry">
      <form className="nb-entrybox" onSubmit={submit}>
        <div style={{ marginBottom: 22 }}><Brand /></div>
        <h1>Welcome back</h1>
        <p>One account. Your whole education journey.</p>

        <input
          style={field}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email or Education Learner ID"
          autoComplete="username"
          required
        />
        <input
          style={field}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="current-password"
          required
        />

        {error && (
          <p style={{ margin: '2px 0 12px', fontSize: 12.5, color: 'var(--crit)' }}>{error}</p>
        )}

        <button className="nb-btn p" style={{ width: '100%', justifyContent: 'center' }} disabled={busy}>
          {busy ? 'Signing in' : 'Sign in'}
        </button>

        <p className="nb-entryfoot">Secure sign in · your role is set by your institution</p>
      </form>
    </div>
  )
}

/** Maps the nine database roles onto the five applications this shell serves. */
function appRoleFor(r: ApiRole): Role {
  switch (r) {
    case 'student': return 'student'
    case 'parent': return 'parent'
    case 'teacher': return 'teacher'
    case 'head_teacher':
    case 'school_admin': return 'head'
    default: return 'officer'
  }
}

/**
 * Shown when the migrations have not been run against this project.
 *
 * Also the way into preview. The real application refuses to invent data, but
 * refusing to show the interface at all would make it impossible to review the
 * design before the database exists, so preview is offered here explicitly and
 * labelled everywhere it appears.
 */
function NoSchema({
  message, onRetry, onPreview,
}: {
  message: string
  onRetry: () => void
  onPreview: (r: Role) => void
}) {
  const roles: { r: Role; label: string }[] = [
    { r: 'student', label: 'Student' },
    { r: 'teacher', label: 'Teacher' },
    { r: 'head',    label: 'Institution' },
    { r: 'parent',  label: 'Parent' },
    { r: 'officer', label: 'Government' },
  ]
  return (
    <div className="nb-entry">
      <div className="nb-entrybox" style={{ maxWidth: 470 }}>
        <div style={{ marginBottom: 20 }}><Brand /></div>
        <h1>The database is not set up yet</h1>
        <p>
          NEXA•EDU is connected to Supabase, but the tables do not exist. Run{' '}
          <code style={{ fontSize: 12.5 }}>supabase/RUN_ME_all_migrations.sql</code> then{' '}
          <code style={{ fontSize: 12.5 }}>RUN_ME_2_accounts.sql</code> in the SQL editor.
        </p>
        <div style={{
          background: 'var(--blue-50)', border: '1px solid var(--blue-100)', borderRadius: 9,
          padding: 12, fontSize: 12, color: 'var(--ink-2)', marginBottom: 16, lineHeight: 1.6,
        }}>
          <b style={{ color: 'var(--ink)' }}>What Supabase said</b><br />{message}
        </div>
        <button className="nb-btn p" style={{ width: '100%', justifyContent: 'center', marginBottom: 20 }}
                onClick={onRetry}>
          Check again
        </button>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 18 }}>
          <p style={{ margin: '0 0 12px', fontSize: 13, color: 'var(--muted)' }}>
            Or look at the interface without a database. Sample content, clearly marked, nothing saved.
          </p>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            {roles.map(x => (
              <button key={x.r} className="nb-btn g"
                      style={{ minHeight: 36, padding: '7px 13px', fontSize: 13 }}
                      onClick={() => onPreview(x.r)}>
                {x.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ ministry */

function National({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Ministry of Education" title="National Education Intelligence" live />
      <p className="nb-sub">Ghana · national view · current term. Every figure below comes from
        lessons actually taught this week, not from a return anyone filled in.</p>

      <Stats items={[
        { label: 'Active learners', value: '4.8M', note: '+84k this year', dir: 'up' },
        { label: 'Teachers', value: '182K', note: '61% licensed' },
        { label: 'Schools', value: '19.4K' },
        { label: 'Digital activity', value: '87%', note: 'lessons taught on platform' },
      ]} />

      <Grid kind="two">
        <Panel title="Learning outcomes by region" more="Open regions" onMore={() => go('region')}>
          <RegionBars units={REGIONS} onOpen={() => go('region')} />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Priority signals" more="All 14">
            <Feed items={[
              { text: <><b>JHS mathematics</b> below target in 3 regions</>, ago: 'today', tone: 'crit' },
              { text: <><b>Fractions</b> weak in Basic 5 and 6 across 6 regions</>, ago: 'today', tone: 'crit' },
              { text: <><b>41 teaching vacancies</b> unfilled in Karaga since January</>, ago: '2 days', tone: 'warn' },
              { text: <><b>Attendance</b> falling in harvest districts</>, ago: '3 days', tone: 'warn' },
              { text: <><b>Greater Accra</b> ahead of syllabus for a third term</>, ago: '1 week', tone: 'good' },
            ]} />
          </Panel>

          <Panel title="Governance" pad>
            <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.6 }}>
              Data ownership remains with education institutions and government. NexaCore operates
              the platform; the record belongs to the learner and the institutions that created it.
            </p>
          </Panel>
        </div>
      </Grid>

      <Section title="Regions in detail">
        <Panel title="All 10 regions" more="Export">
          <Table
            cols={[
              { key: 'region', label: 'Region' },
              { key: 'schools', label: 'Schools', align: 'right' },
              { key: 'learners', label: 'Learners', align: 'right' },
              { key: 'attend', label: 'Attendance', align: 'right' },
              { key: 'cov', label: 'Syllabus' },
            ]}
            onRow={() => go('region')}
            rows={REGIONS.map((r, i) => ({
              region: <span className="nm">{r.name}<span className="sub">{['Accra','Kumasi','Koforidua','Sunyani','Cape Coast','Sekondi','Ho','Bolgatanga','Wa','Tamale'][i]}</span></span>,
              schools: r.meta.replace(' schools', ''),
              learners: ['1.31M','1.94M','1.02M','0.41M','0.88M','0.67M','0.59M','0.34M','0.26M','0.71M'][i],
              attend: `${[91, 88, 86, 85, 84, 83, 82, 79, 77, 76][i]}%`,
              cov: <MiniBar pct={r.pct} />,
            }))}
          />
        </Panel>
      </Section>

      <Grid kind="half">
        <Panel title="Syllabus coverage through the term" pad>
          <CoverageChart series={COVERAGE_SERIES} />
        </Panel>
        <Panel title="Platform activity" more="Last 7 days">
          <Feed items={[
            { text: <><b>4,812</b> lessons taught in the last hour</>, ago: 'live', tone: 'good' },
            { text: <><b>182,400</b> teachers active this week</>, ago: 'week' },
            { text: <><b>31,208</b> lesson notes approved by heads</>, ago: 'week' },
            { text: <><b>2.1M</b> assignments submitted</>, ago: 'week' },
            { text: <><b>19,412</b> schools reporting</>, ago: 'week' },
            { text: <><b>96,330</b> certificates verified by employers</>, ago: 'term' },
          ]} />
        </Panel>
      </Grid>
    </>
  )
}

function Region({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Regional directorate" title="Northern Region" />
      <p className="nb-sub">16 districts · 2,206 schools · 712,400 learners · current term</p>

      <Stats items={[
        { label: 'Schools', value: '2,206', note: '94% reporting' },
        { label: 'Learners', value: '712K', note: '−1.2% on last year', dir: 'down' },
        { label: 'Attendance', value: '76%', note: 'lowest in Ghana', dir: 'down' },
        { label: 'Syllabus', value: '49%', note: '12 points below national', dir: 'down' },
      ]} />

      <Grid kind="two">
        <Panel title="Districts" more="Export">
          <Table
            cols={[
              { key: 'd', label: 'District' },
              { key: 's', label: 'Schools', align: 'right' },
              { key: 'v', label: 'Vacancies', align: 'right' },
              { key: 'a', label: 'Attendance', align: 'right' },
              { key: 'c', label: 'Syllabus' },
            ]}
            onRow={() => go('district')}
            rows={DISTRICTS.map((d, i) => ({
              d: <span className="nm">{d.name}<span className="sub">{d.meta}</span></span>,
              s: d.meta.replace(' schools', ''),
              v: [12, 19, 24, 41, 33, 28][i],
              a: `${[81, 77, 74, 61, 68, 66][i]}%`,
              c: <MiniBar pct={d.pct} />,
            }))}
          />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Why Karaga is behind" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              <b style={{ color: 'var(--ink)' }}>41 teaching vacancies</b> unfilled since January.
              <b style={{ color: 'var(--ink)' }}> Attendance falls to 54%</b> every year during the
              harvest, in the same six weeks. And <b style={{ color: 'var(--ink)' }}>nine schools have
              no mathematics teacher at all</b> for Basic 7 to 9.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => go('district')}>Open the schools</button>
            </div>
          </Panel>

          <Panel title="Alerts" more="All 22">
            <Feed items={[
              { text: <><b>9 schools</b> without a maths teacher</>, ago: 'Karaga', tone: 'crit' },
              { text: <><b>Attendance below 60%</b> in 3 districts</>, ago: 'this week', tone: 'crit' },
              { text: <><b>Gushegu</b> 6 weeks behind syllabus</>, ago: 'this week', tone: 'crit' },
              { text: <><b>184 teachers</b> due licence renewal</>, ago: '90 days', tone: 'warn' },
              { text: <><b>Tamale Metro</b> improved 6 points</>, ago: 'term', tone: 'good' },
            ]} />
          </Panel>

          <Panel title="Staffing" pad>
            <div className="nb-split"><span className="k">Teachers in post</span><span className="v">21,140</span></div>
            <div className="nb-split"><span className="k">Vacancies</span><span className="v" style={{ color: 'var(--crit)' }}>157</span></div>
            <div className="nb-split"><span className="k">Licensed</span><span className="v">88%</span></div>
            <div className="nb-split"><span className="k">Learner to teacher</span><span className="v">34 : 1</span></div>
          </Panel>
        </div>
      </Grid>
    </>
  )
}

function District() {
  return (
    <>
      <PageHead eyebrow="District education office" title="Karaga" />
      <p className="nb-sub">Northern Region · 118 schools · 14,220 learners · 4 circuits</p>

      <Stats items={[
        { label: 'Schools', value: '118', note: '9 without a maths teacher', dir: 'down' },
        { label: 'Learners', value: '14,220' },
        { label: 'Attendance', value: '61%', note: 'harvest weeks', dir: 'down' },
        { label: 'Vacancies', value: '41', note: 'unfilled since January', dir: 'down' },
      ]} />

      <Grid kind="two">
        <Panel title="Schools" more="All 118">
          <Table
            cols={[
              { key: 's', label: 'School' },
              { key: 'n', label: 'Learners', align: 'right' },
              { key: 't', label: 'Teachers', align: 'right' },
              { key: 'a', label: 'Attendance', align: 'right' },
              { key: 'c', label: 'Syllabus' },
            ]}
            rows={SCHOOLS.map((s, i) => ({
              s: <span className="nm">{s.name}<span className="sub">{s.meta}</span></span>,
              n: [331, 412, 194, 286][i],
              t: [11, 9, 5, 6][i],
              a: `${[74, 63, 58, 51][i]}%`,
              c: <MiniBar pct={s.pct} />,
            }))}
          />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Circuits" pad>
            <div className="nb-split"><span className="k">Karaga Central</span><span className="v">34 schools · 51%</span></div>
            <div className="nb-split"><span className="k">Pishigu</span><span className="v">29 schools · 34%</span></div>
            <div className="nb-split"><span className="k">Nyoglo</span><span className="v">27 schools · 39%</span></div>
            <div className="nb-split"><span className="k">Sung</span><span className="v">28 schools · 44%</span></div>
          </Panel>

          <Panel title="What to do first" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              Posting <b style={{ color: 'var(--ink)' }}>nine mathematics teachers</b> to the schools
              with none would lift district syllabus coverage more than any other single action
              available this term.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p">Raise a posting request</button>
            </div>
          </Panel>

          <Panel title="Down to the lesson" pad>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              From here an officer opens the class, the teacher and the exact lesson. It is the same
              record the teacher wrote and the learner revised from, not a copy typed into a return.
            </p>
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* ------------------------------------------------------------------- teacher */

function Today({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Thursday 6 August · week 6 of 14" title="Good morning, Mrs Adjei" />
      <p className="nb-sub">Wesley Girls' Senior High · Elective and Core Mathematics · 148 learners</p>

      <Stats items={[
        { label: 'Lessons today', value: '4', note: 'next in 18 minutes' },
        { label: 'Notes owed', value: '2', note: 'by Friday', dir: 'down' },
        { label: 'To mark', value: '31', note: 'WASSCE 2019 Q7', dir: 'down' },
        { label: 'CPD points', value: '34 / 60', note: 'renewal Dec 2027', dir: 'down' },
      ]} />

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Card
            title="SHS 2 Science A · Elective Mathematics"
            pill="in 18 minutes" pillTone="good"
            actions={[{ label: 'Start the board', kind: 'p' },
                      { label: 'Open the note', onClick: () => go('note') }]}
          >
            Equation of a circle · Room B12 · periods 3 and 4. Your note is already written, drafted
            from where the class has reached. Nothing to prepare.
          </Card>

          <Panel title="Today" more="Full timetable">
            <Timetable periods={[
              { when: '07:20', title: 'Assembly',        meta: 'Whole school',                state: 'done' },
              { when: '08:00', title: 'SHS 1 Gold',      meta: 'Core Maths · surds and indices · 38 of 41 present', state: 'done' },
              { when: '10:20', title: 'SHS 2 Science A', meta: 'Elective Maths · equation of a circle', state: 'now' },
              { when: '12:00', title: 'Break',           meta: '' },
              { when: '13:00', title: 'SHS 3 Science B', meta: 'Elective Maths · no note written yet' },
              { when: '14:40', title: 'SHS 1 Silver',    meta: 'Core Maths · note ready' },
            ]} />
          </Panel>

          <Panel title="My classes" more="Open" onMore={() => go('classes')}>
            <Table
              cols={[
                { key: 'cls', label: 'Class' },
                { key: 'n', label: 'Learners', align: 'right' },
                { key: 'att', label: 'Attendance', align: 'right' },
                { key: 'avg', label: 'Average', align: 'right' },
                { key: 'cov', label: 'Syllabus' },
              ]}
              onRow={() => go('classes')}
              rows={TEACHER_CLASSES.map((c, i) => ({
                cls: <span className="nm">{c.name}<span className="sub">{c.meta.split(' · ')[0]}</span></span>,
                n: [41, 41, 28, 38][i],
                att: `${[91, 94, 89, 84][i]}%`,
                avg: `${[68, 71, 66, 59][i]}%`,
                cov: <MiniBar pct={c.pct} />,
              }))}
            />
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Needs you" more="All 9">
            <Feed items={[
              { text: <><b>Write the note</b> for SHS 3 Science B</>, ago: 'today', tone: 'crit' },
              { text: <><b>Mark 31 scripts</b> · WASSCE 2019 Q7</>, ago: 'Monday', tone: 'warn' },
              { text: <><b>Week 6 notes</b> for the head to vet</>, ago: 'Friday', tone: 'warn' },
              { text: <><b>Kwame Asare</b> has missed 4 of 10 lessons</>, ago: '2 days', tone: 'crit' },
              { text: <><b>Efua Danso</b> dropped 71% to 48%</>, ago: '3 days', tone: 'crit' },
              { text: <><b>26 CPD points</b> still needed this cycle</>, ago: 'Dec 2027', tone: 'warn' },
            ]} />
          </Panel>

          <Panel title="From your marking" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              <b style={{ color: 'var(--ink)' }}>Eleven made the same mistake.</b> Most of SHS 2
              Science A dropped marks completing the square, not on the circle itself. Five minutes
              at the start of tomorrow would close it.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => go('marking')}>Open marking</button>
            </div>
          </Panel>

          <Panel title="Recent activity">
            <Feed items={[
              { text: <>Head approved <b>4 lesson notes</b></>, ago: '1h', tone: 'good' },
              { text: <><b>28 learners</b> opened yesterday's lesson</>, ago: '3h' },
              { text: <>Ama Mensah submitted homework</>, ago: '5h', tone: 'good' },
              { text: <>Register confirmed for SHS 1 Gold</>, ago: '6h' },
              { text: <>You completed <b>Classroom management</b></>, ago: 'Mar', tone: 'good' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

function Classes({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Class · Elective Mathematics" title="SHS 2 Science A" />
      <p className="nb-sub">41 learners · Mrs Adjei · Room B12 · General Science programme</p>

      <Stats items={[
        { label: 'Syllabus', value: '78%', note: 'on track', dir: 'up' },
        { label: 'Attendance', value: '91%', note: '38 of 41 today', dir: 'up' },
        { label: 'Class average', value: '68%', note: 'up 3 points' },
        { label: 'Needing help', value: '5', note: 'flagged this term', dir: 'down' },
      ]} />

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Learners" more="All 41">
            <Table
              cols={[
                { key: 'n', label: 'Learner' },
                { key: 'a', label: 'Attendance', align: 'right' },
                { key: 'l', label: 'Last score', align: 'right' },
                { key: 'p', label: 'Progress' },
              ]}
              rows={[
                ['Ama Mensah', 'EDU-2048-0192', 96, '18 / 20', 81],
                ['Kojo Antwi', 'EDU-2048-0177', 94, '18 / 20', 79],
                ['Abena Sarpong', 'EDU-2048-0203', 92, '11 / 20', 63],
                ['Yaw Boateng', 'EDU-2048-0158', 88, '9 / 20', 54],
                ['Efua Danso', 'EDU-2048-0221', 79, '7 / 20', 48],
                ['Kwame Asare', 'EDU-2048-0164', 61, 'not handed in', 41],
              ].map(r => ({
                n: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
                a: `${r[2]}%`, l: r[3], p: <MiniBar pct={r[4] as number} />,
              }))}
            />
          </Panel>

          <Panel title="Syllabus this term" pad>
            <div className="nb-split"><span className="k">Coordinate geometry</span><span className="v" style={{ color: 'var(--good)' }}>Complete</span></div>
            <div className="nb-split"><span className="k">The circle</span><span className="v" style={{ color: 'var(--blue-600)' }}>Teaching now</span></div>
            <div className="nb-split"><span className="k">Vectors</span><span className="v" style={{ color: 'var(--muted)' }}>Week 8</span></div>
            <div className="nb-split"><span className="k">Statistics</span><span className="v" style={{ color: 'var(--muted)' }}>Week 11</span></div>
            <div className="nb-split"><span className="k">Probability</span><span className="v" style={{ color: 'var(--warn)' }}>At risk of slipping</span></div>
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Watch these five" more="All flags">
            <Feed items={[
              { text: <><b>Kwame Asare</b> missed 4 of 10 lessons</>, ago: 'attendance', tone: 'crit' },
              { text: <><b>Efua Danso</b> dropped 71% to 48%</>, ago: 'falling', tone: 'crit' },
              { text: <><b>Yaw Boateng</b> weak on coordinate geometry</>, ago: 'topic', tone: 'warn' },
              { text: <><b>Abena Sarpong</b> completing the square</>, ago: 'topic', tone: 'warn' },
              { text: <><b>Adjoa Owusu</b> first absence this term</>, ago: 'today', tone: 'warn' },
            ]} />
          </Panel>

          <Panel title="Do something" pad>
            <div className="nb-acts" style={{ marginTop: 0 }}>
              <button className="nb-btn p" onClick={() => go('register')}>Take the register</button>
              <button className="nb-btn g" onClick={() => go('marking')}>Mark homework</button>
              <button className="nb-btn g" onClick={() => go('note')}>Write the next note</button>
            </div>
          </Panel>

          <Panel title="Recent lessons">
            <Feed items={[
              { text: <>Equation of a circle</>, ago: 'today' },
              { text: <>The straight line</>, ago: 'Thu' },
              { text: <>Distance and midpoint</>, ago: '29 Jul' },
              { text: <>Coordinate geometry intro</>, ago: '25 Jul' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

const PHASES = [
  { name: 'Start', mins: 10,
    text: 'Recall the distance formula. Ask what happens when the distance stays fixed but the point moves, and lead them to notice it traces a circle.' },
  { name: 'Main', mins: 55,
    text: 'Derive (x − a)² + (y − b)² = r² live on the board. Two worked examples, then learners try three on their own boards. Complete the square on x² + y² − 6x + 4y − 12 = 0 together.' },
  { name: 'Finish', mins: 15,
    text: 'Each learner writes one equation and swaps with a neighbour to find the centre and radius. Set WASSCE 2019 Q7 for homework.' },
]

/**
 * The lesson planner.
 *
 * Drafted from where the class has reached, then edited in place. The teacher
 * stays in control: nothing is set until they say so, and editing a phase is a
 * plain textarea rather than a wizard.
 */
function LessonNote() {
  const [phases, setPhases] = useState(PHASES)
  const [editing, setEditing] = useState<number | null>(null)
  const [started, setStarted] = useState(false)

  return (
    <>
      <PageHead eyebrow="Lesson planner · week 6" title="Equation of a circle" />
      <p className="nb-sub">SHS 2 Science A · Elective Mathematics · Thursday, periods 3 and 4</p>

      <div className="nb-note">
        <b>You did not fill in a form.</b> This was drafted from where SHS 2 Science A has reached in
        the syllabus. Change anything before you teach. When the lesson ends, the register, the
        syllabus record and your vetting file all update by themselves.
      </div>

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="How the lesson runs">
            {phases.map((p, i) => (
              <div key={p.name} style={{ padding: '13px', borderBottom: i < 2 ? '1px solid var(--line-2)' : 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 9, marginBottom: 6 }}>
                  <b style={{ fontSize: 13.5 }}>{p.name}</b>
                  <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>{p.mins} minutes</span>
                  <button
                    style={{ marginLeft: 'auto', background: 0, border: 0, cursor: 'pointer',
                             fontSize: 12, fontWeight: 600, color: 'var(--blue-600)' }}
                    onClick={() => setEditing(editing === i ? null : i)}
                  >
                    {editing === i ? 'Done' : 'Edit'}
                  </button>
                </div>
                {editing === i ? (
                  <textarea
                    value={p.text}
                    onChange={e => setPhases(ps => ps.map((q, j) => j === i ? { ...q, text: e.target.value } : q))}
                    rows={4}
                    style={{
                      width: '100%', font: 'inherit', fontSize: 13.5, lineHeight: 1.6,
                      padding: 10, borderRadius: 8, border: '1px solid var(--blue)',
                      color: 'var(--ink)', resize: 'vertical',
                    }}
                  />
                ) : (
                  <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>{p.text}</p>
                )}
              </div>
            ))}
          </Panel>

          <Panel title="Ready to teach" pad>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
              <h3 style={{ margin: 0, fontSize: 15.5, fontWeight: 700 }}>Approved by the head teacher</h3>
              <Pill tone="good">signed Monday</Pill>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              Starting the board opens the same NexaBoard you already teach on. The lesson records
              itself against this note.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => setStarted(true)}>
                {started ? 'Board running' : 'Start the board'}
              </button>
              <button className="nb-btn g">Print the note</button>
            </div>
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="The plan" pad>
            <div className="nb-split"><span className="k">Subject</span><span className="v">Elective Mathematics</span></div>
            <div className="nb-split"><span className="k">Strand</span><span className="v">Coordinate geometry</span></div>
            <div className="nb-split"><span className="k">Sub-strand</span><span className="v">The circle</span></div>
            <div className="nb-split"><span className="k">Class</span><span className="v">SHS 2 Science A · 41</span></div>
            <div className="nb-split"><span className="k">Room</span><span className="v">B12</span></div>
          </Panel>

          <Panel title="They should be able to" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              Write the equation of a circle given the centre and radius, and complete the square to
              recover the centre and radius from the general form.
            </p>
          </Panel>

          <Panel title="Resources attached">
            <Feed items={[
              { text: <>NexaBoard · live working</>, ago: 'board', tone: 'good' },
              { text: <>Graph sheets</>, ago: 'print' },
              { text: <>WASSCE 2019 Q7</>, ago: 'homework' },
              { text: <>Teaching the circle · NaCCA guide</>, ago: 'library' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

type Attendance = 'present' | 'absent' | 'late' | 'excused' | null

const UNMARKED: { name: string; note: string }[] = [
  { name: 'Kwame Asare',  note: 'Absent 4 of the last 10 lessons' },
  { name: 'Adjoa Owusu',  note: 'First absence this term' },
  { name: 'Kofi Mensah',  note: 'Was present yesterday' },
]

/**
 * The register marks itself from who joined the lesson. The teacher only
 * resolves the handful who did not, which is the whole point: no form.
 */
function Register() {
  const [marks, setMarks] = useState<Record<string, Attendance>>({
    'Kwame Asare': null, 'Adjoa Owusu': null, 'Kofi Mensah': null,
  })
  const [confirmed, setConfirmed] = useState(false)

  const outstanding = Object.values(marks).filter(m => m === null).length
  const present = 38 + Object.values(marks).filter(m => m === 'present' || m === 'late').length

  const set = (name: string, v: Attendance) =>
    setMarks(m => ({ ...m, [name]: m[name] === v ? null : v }))

  return (
    <>
      <PageHead eyebrow="Attendance · Thursday 6 August" title="SHS 2 Science A" />
      <p className="nb-sub">Elective Mathematics · periods 3 and 4 · 41 on roll</p>

      <Stats items={[
        { label: 'Marked present', value: String(present), note: 'joined the lesson', dir: 'up' },
        { label: 'Outstanding', value: String(outstanding), note: outstanding ? 'needs a decision' : 'all resolved',
          dir: outstanding ? 'down' : 'up' },
        { label: 'On roll', value: '41' },
        { label: 'Term to date', value: '91%', dir: 'up' },
      ]} />

      <Grid kind="two">
        <Panel title={outstanding ? `${outstanding} still to mark` : 'All learners accounted for'}>
          {UNMARKED.map(u => (
            <div className="nb-rank" key={u.name} style={{ cursor: 'default' }}>
              <div className="nb-rank-top" style={{ flexWrap: 'wrap', rowGap: 8 }}>
                <span className="nb-rank-name">{u.name}</span>
                <span className="nb-rank-sub">{u.note}</span>
                <span style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                  {(['absent', 'late', 'excused'] as const).map(v => {
                    const on = marks[u.name] === v
                    return (
                      <button
                        key={v}
                        onClick={() => set(u.name, v)}
                        aria-pressed={on}
                        className={`nb-pill ${v === 'absent' ? 'crit' : v === 'late' ? 'warn' : 'flat'}`}
                        style={{
                          border: on ? '1px solid currentColor' : '1px solid transparent',
                          cursor: 'pointer', textTransform: 'capitalize',
                          opacity: marks[u.name] && !on ? 0.4 : 1,
                        }}
                      >
                        {v}
                      </button>
                    )
                  })}
                </span>
              </div>
            </div>
          ))}

          <div style={{ padding: '12px 13px' }}>
            <button
              className="nb-btn p"
              disabled={outstanding > 0 || confirmed}
              style={{ opacity: outstanding > 0 || confirmed ? 0.5 : 1 }}
              onClick={() => setConfirmed(true)}
            >
              {confirmed ? 'Register confirmed' : outstanding > 0 ? `${outstanding} left to mark` : 'Confirm register'}
            </button>
          </div>
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Taken automatically" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              <b style={{ color: 'var(--ink)' }}>38 of 41 marked themselves present</b> by joining the
              lesson. You only resolve the rest. When you confirm, the school register, the term
              attendance figure and the parent's view all update at once.
            </p>
          </Panel>

          <Panel title="Works offline" pad>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              If the network drops the register still works. It queues on the device and syncs when
              signal returns, so a weak connection never costs you the lesson.
            </p>
          </Panel>

          <Panel title="This class, this term">
            <Feed items={[
              { text: <>Kwame Asare below 65%</>, ago: 'chronic', tone: 'crit' },
              { text: <>4 registers outstanding school-wide</>, ago: 'this week', tone: 'warn' },
              { text: <>Attendance up 2 points on last term</>, ago: 'term', tone: 'good' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

function MarkingScreen({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Assessment · SHS 2 Science A" title="WASSCE 2019 Question 7" />
      <p className="nb-sub">Set Thursday · due tomorrow · 41 learners · out of 20</p>

      <Stats items={[
        { label: 'Handed in', value: '31', note: '10 outstanding', dir: 'down' },
        { label: 'Marked', value: '12', note: 'by you' },
        { label: 'Left to mark', value: '19', dir: 'down' },
        { label: 'Average so far', value: '14 / 20', note: '70%' },
      ]} />

      <Grid kind="two">
        <Panel title="Scripts" more="Mark next">
          <Table
            cols={[
              { key: 'n', label: 'Learner' },
              { key: 'h', label: 'How', align: 'right' },
              { key: 's', label: 'Score', align: 'right' },
            ]}
            rows={MARKING.concat([
              { name: 'Adjoa Owusu', meta: 'Handed in today · answered on the board', tone: 'flat' },
              { name: 'Kofi Mensah', meta: 'Handed in today · photo', tone: 'flat' },
              { name: 'Akosua Frimpong', meta: 'Full working shown', score: '17 / 20', tone: 'good' },
              { name: 'Yaw Boateng', meta: 'Method right, arithmetic wrong', score: '9 / 20', tone: 'crit' },
            ]).map(m => ({
              n: <span className="nm">{m.name}<span className="sub">{m.meta.split(' · ')[0]}</span></span>,
              h: m.meta.includes('photo') ? 'Photo' : m.meta.includes('board') ? 'Board' : '—',
              s: m.score ? <Pill tone={m.tone}>{m.score}</Pill> : <Pill tone="flat">To mark</Pill>,
            }))}
          />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="What the marking is telling you" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              <b style={{ color: 'var(--ink)' }}>Eleven made the same mistake.</b> Most of the class
              dropped marks completing the square, not on the circle itself. Five minutes at the start
              of the next lesson would close it.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => go('note')}>Add it to the next note</button>
            </div>
          </Panel>

          <Panel title="Where marks were lost" pad>
            <div className="nb-split"><span className="k">Completing the square</span><span className="v" style={{ color: 'var(--crit)' }}>11 learners</span></div>
            <div className="nb-split"><span className="k">Sign errors</span><span className="v" style={{ color: 'var(--warn)' }}>6 learners</span></div>
            <div className="nb-split"><span className="k">Radius from r²</span><span className="v" style={{ color: 'var(--warn)' }}>4 learners</span></div>
            <div className="nb-split"><span className="k">Full marks</span><span className="v" style={{ color: 'var(--good)' }}>7 learners</span></div>
          </Panel>

          <Panel title="Not handed in" more="Chase all">
            <Feed items={[
              { text: <><b>Kwame Asare</b></>, ago: '4 absences', tone: 'crit' },
              { text: <><b>Esi Appiah</b></>, ago: 'no reason', tone: 'warn' },
              { text: <><b>Nana Aidoo</b></>, ago: 'illness', tone: 'warn' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/**
 * Continuing professional development, tied to the teaching licence.
 *
 * This is the screen that gets teachers onto the platform without anyone being
 * ordered to join: renewal needs points, and points are earned and recorded
 * here, so there is nothing to submit to the National Teaching Council.
 */
function Cpd() {
  const [enrolled, setEnrolled] = useState<string[]>([])
  const earned = 34 + enrolled.length * 0 // points land on completion, not enrolment

  return (
    <>
      <PageHead eyebrow="Professional development" title="My development" />
      <p className="nb-sub">Mrs Adjei · Elective and Core Mathematics · licence GH-NTC-118204</p>

      <Stats items={[
        { label: 'CPD points', value: String(earned), note: 'this cycle' },
        { label: 'Needed', value: '60', note: `${60 - earned} to go`, dir: 'down' },
        { label: 'Renewal', value: 'Dec 2027', note: '16 months' },
        { label: 'Courses done', value: '7', note: 'since 2024' },
      ]} />

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Suggested for you" more="Browse all 240">
            <Table
              cols={[
                { key: 'c', label: 'Course' },
                { key: 'p', label: 'Points', align: 'right' },
                { key: 'a', label: '', align: 'right' },
              ]}
              rows={CPD_COURSES.concat([
                { id: 'p4', name: 'AI literacy for teachers', meta: '6 points · 4 hours', pct: 0 },
                { id: 'p5', name: 'Supporting learners with special needs', meta: '10 points · 8 hours', pct: 0 },
              ]).map(c => ({
                c: <span className="nm">{c.name}<span className="sub">{c.meta}</span></span>,
                p: c.meta.split(' points')[0],
                a: enrolled.includes(c.id)
                  ? <Pill tone="good">Enrolled</Pill>
                  : <button className="nb-btn g" style={{ minHeight: 30, padding: '5px 11px', fontSize: 12.5 }}
                            onClick={() => setEnrolled(e => [...e, c.id])}>Enrol</button>,
              }))}
            />
          </Panel>

          <Panel title="Completed">
            <Table
              cols={[
                { key: 'c', label: 'Course' },
                { key: 'w', label: 'When', align: 'right' },
                { key: 'p', label: 'Points', align: 'right' },
              ]}
              rows={[
                ['Classroom management', 'National Teaching Council', 'March 2026', 6],
                ['Using technology in teaching', 'GES ICT unit', 'November 2025', 8],
                ['Assessment for learning', 'NaCCA', 'June 2025', 6],
                ['Teaching large classes', 'National Teaching Council', 'February 2025', 6],
                ['Standards-Based Curriculum refresher', 'NaCCA', 'September 2024', 8],
              ].map(r => ({
                c: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
                w: r[2],
                p: <Pill tone="good">{`${r[3]} pts`}</Pill>,
              }))}
            />
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Licence status" pad>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
              <h3 style={{ margin: 0, fontSize: 15.5, fontWeight: 700 }}>{60 - earned} more points</h3>
              <Pill tone="warn">action needed</Pill>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              Renewal falls due December 2027. Everything you complete here is written to your
              teaching profile automatically. <b style={{ color: 'var(--ink)' }}>Nothing to submit,
              nothing to photocopy.</b>
            </p>
            <div className="nb-track" style={{ marginTop: 14 }}>
              <i style={{ width: `${(earned / 60) * 100}%`, background: 'var(--warn)' }} />
            </div>
          </Panel>

          <Panel title="Chosen for you" pad>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              Suggestions come from what you teach and where your classes are actually struggling.
              Coordinate geometry is top because eleven of your learners lost the same marks on it
              last week.
            </p>
          </Panel>

          <Panel title="Your teaching profile">
            <Feed items={[
              { text: <>Licensed since <b>2019</b></>, ago: '', tone: 'good' },
              { text: <>Elective and Core Mathematics</>, ago: 'SHS' },
              { text: <>148 learners this year</>, ago: '4 classes' },
              { text: <>34 CPD points this cycle</>, ago: 'of 60', tone: 'warn' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* -------------------------------------------------------------------- school */

function SchoolHome({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Institution" title="Wesley Girls' Senior High" />
      <p className="nb-sub">Cape Coast · 1,284 learners · 67 teachers · term 3, week 6 of 14</p>

      <Stats items={[
        { label: 'Attendance', value: '93%', note: 'up 2 points', dir: 'up' },
        { label: 'Learning activity', value: '88%', note: 'lessons taught on platform', dir: 'up' },
        { label: 'Assessments', value: '76%', note: 'marked on time' },
        { label: 'Parent engagement', value: '81%', note: 'opened this term', dir: 'up' },
      ]} />

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Classes" more="All 32">
            <Table
              cols={[
                { key: 'c', label: 'Class' },
                { key: 'n', label: 'Learners', align: 'right' },
                { key: 'a', label: 'Attendance', align: 'right' },
                { key: 'v', label: 'Average', align: 'right' },
                { key: 's', label: 'Syllabus' },
              ]}
              rows={[
                ['SHS 1 Gold', 'Mrs Adjei · Core Maths', 41, 94, 71, 81],
                ['SHS 1 Silver', 'Mrs Adjei · Core Maths', 28, 89, 66, 74],
                ['SHS 2 Science A', 'Mrs Adjei · Elective Maths', 41, 91, 68, 78],
                ['SHS 2 Arts A', 'Miss Owusu · English', 38, 92, 70, 76],
                ['SHS 3 Science B', 'Mrs Adjei · Elective Maths', 38, 84, 59, 52],
                ['SHS 3 Arts B', 'Mr Tetteh · Physics', 36, 81, 61, 58],
              ].map(r => ({
                c: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
                n: r[2], a: `${r[3]}%`, v: `${r[4]}%`, s: <MiniBar pct={r[5] as number} />,
              }))}
            />
          </Panel>

          <Panel title="Terminal reports" pad>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
              <h3 style={{ margin: 0, fontSize: 15.5, fontWeight: 700 }}>Term 3 reports are already built</h3>
              <Pill tone="good">ready</Pill>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              Built from marks teachers entered during the term. Nobody collected exercise books.
              Positions, averages and attendance are counted for you.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p">Preview a report</button>
              <button className="nb-btn g">Print all 1,284</button>
              <button className="nb-btn g">Release to parents</button>
            </div>
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Needs you today" more="All 14">
            <Feed items={[
              { text: <><b>9 lesson notes</b> waiting to be approved</>, ago: 'today', tone: 'warn' },
              { text: <><b>2 classes</b> not taught yesterday</>, ago: 'yesterday', tone: 'crit' },
              { text: <><b>SHS 3 Science B</b> 6 weeks behind</>, ago: 'this week', tone: 'crit' },
              { text: <><b>3 classes</b> missing marks for reports</>, ago: 'this week', tone: 'warn' },
              { text: <><b>6 teachers</b> short of CPD points</>, ago: '12 months', tone: 'warn' },
              { text: <><b>Conduct remarks</b> unwritten for SHS 1 Gold</>, ago: 'this week', tone: 'warn' },
            ]} />
          </Panel>

          <Panel title="School activity">
            <Feed items={[
              { text: <><b>184 lessons</b> taught this week</>, ago: 'week', tone: 'good' },
              { text: <><b>1,102 assignments</b> submitted</>, ago: 'week', tone: 'good' },
              { text: <><b>62 of 67</b> teachers active</>, ago: 'week' },
              { text: <><b>891 parents</b> opened a report</>, ago: 'term' },
              { text: <>Mr Tetteh completed <b>Assessment design</b></>, ago: '2 days', tone: 'good' },
            ]} />
          </Panel>

          <Panel title="Quick actions" pad>
            <div className="nb-acts" style={{ marginTop: 0 }}>
              <button className="nb-btn g" onClick={() => go('approve')}>Approve notes</button>
              <button className="nb-btn g" onClick={() => go('attendance')}>Attendance</button>
              <button className="nb-btn g" onClick={() => go('people')}>Staff and students</button>
            </div>
          </Panel>
        </div>
      </Grid>
    </>
  )
}

interface NoteToVet { id: string; teacher: string; subject: string; topic: string; cls: string }

const TO_VET: NoteToVet[] = [
  { id: 'n1', teacher: 'Mrs Adjei',   subject: 'Elective Maths', topic: 'Equation of a circle',     cls: 'SHS 2 Science A' },
  { id: 'n2', teacher: 'Mrs Adjei',   subject: 'Elective Maths', topic: 'Vectors, introduction',    cls: 'SHS 3 Science B' },
  { id: 'n3', teacher: 'Mr Boateng',  subject: 'Chemistry',      topic: 'Rates of reaction',        cls: 'SHS 2 Science A' },
  { id: 'n4', teacher: 'Mr Boateng',  subject: 'Chemistry',      topic: 'Mole calculations',        cls: 'SHS 1 Gold' },
  { id: 'n5', teacher: 'Miss Owusu',  subject: 'English',        topic: 'Comprehension strategies', cls: 'SHS 1 Gold' },
  { id: 'n6', teacher: 'Miss Owusu',  subject: 'English',        topic: 'Formal letter writing',    cls: 'SHS 1 Silver' },
  { id: 'n7', teacher: 'Mrs Adjei',   subject: 'Core Maths',     topic: 'Surds and indices',        cls: 'SHS 1 Gold' },
  { id: 'n8', teacher: 'Mr Boateng',  subject: 'Chemistry',      topic: 'Titration practical',      cls: 'SHS 3 Science B' },
  { id: 'n9', teacher: 'Mrs Adjei',   subject: 'Core Maths',     topic: 'Quadratic equations',      cls: 'SHS 1 Silver' },
]

/**
 * Weekly vetting.
 *
 * Notes arrive already written, so the head is reading and signing rather than
 * chasing. Approving here is the real action: it clears the queue in place.
 */
function Approve() {
  const [decided, setDecided] = useState<Record<string, 'approved' | 'returned'>>({})
  const waiting = TO_VET.filter(n => !decided[n.id])

  const approveAll = () =>
    setDecided(d => {
      const next = { ...d }
      waiting.forEach(n => { next[n.id] = 'approved' })
      return next
    })

  return (
    <>
      <PageHead eyebrow="Institution · week 6" title="Lesson notes to approve" />
      <p className="nb-sub">Wesley Girls' Senior High · due before Friday</p>

      <Stats items={[
        { label: 'Waiting', value: String(waiting.length),
          note: waiting.length ? 'from 3 teachers' : 'queue clear',
          dir: waiting.length ? 'down' : 'up' },
        { label: 'Approved', value: String(Object.values(decided).filter(v => v === 'approved').length), dir: 'up' },
        { label: 'Returned', value: String(Object.values(decided).filter(v => v === 'returned').length) },
        { label: 'This term', value: '182', note: 'notes vetted' },
      ]} />

      <Grid kind="two">
        <Panel
          title={waiting.length ? `${waiting.length} waiting` : 'Nothing waiting'}
          more={waiting.length ? 'Approve all' : undefined}
          onMore={approveAll}
        >
          {waiting.length === 0 ? (
            <div style={{ padding: '26px 16px', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Queue clear</p>
              <p style={{ margin: '5px 0 0', fontSize: 13, color: 'var(--muted)' }}>
                Every note for week 6 has been dealt with.
              </p>
            </div>
          ) : waiting.map(n => (
            <div className="nb-rank" key={n.id} style={{ cursor: 'default' }}>
              <div className="nb-rank-top" style={{ flexWrap: 'wrap', rowGap: 8 }}>
                <span className="nb-rank-name">{n.topic}</span>
                <span className="nb-rank-sub">{n.teacher} · {n.subject} · {n.cls}</span>
                <span style={{ marginLeft: 'auto', display: 'flex', gap: 7 }}>
                  <button className="nb-btn p" style={{ minHeight: 32, padding: '6px 13px', fontSize: 12.5 }}
                          onClick={() => setDecided(d => ({ ...d, [n.id]: 'approved' }))}>
                    Approve
                  </button>
                  <button className="nb-btn g" style={{ minHeight: 32, padding: '6px 13px', fontSize: 12.5 }}
                          onClick={() => setDecided(d => ({ ...d, [n.id]: 'returned' }))}>
                    Return
                  </button>
                </span>
              </div>
            </div>
          ))}
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Why this is quick" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              Notes arrive <b style={{ color: 'var(--ink)' }}>already written</b>, drafted from where
              each class has actually reached. Vetting is reading and signing rather than chasing
              teachers for exercise books.
            </p>
          </Panel>

          <Panel title="Decided">
            {Object.keys(decided).length === 0 ? (
              <div style={{ padding: '16px 13px', fontSize: 13, color: 'var(--muted)' }}>
                Nothing decided yet this session.
              </div>
            ) : (
              <Feed items={TO_VET.filter(n => decided[n.id]).map(n => ({
                text: <><b>{n.topic}</b> · {n.teacher}</>,
                ago: decided[n.id] === 'approved' ? 'approved' : 'returned',
                tone: decided[n.id] === 'approved' ? 'good' as const : 'warn' as const,
              }))} />
            )}
          </Panel>

          <Panel title="Approved earlier this week">
            <Feed items={[
              { text: <>Mr Tetteh · Physics · <b>5 notes</b></>, ago: 'Mon', tone: 'good' },
              { text: <>Mrs Quaye · Biology · <b>4 notes</b></>, ago: 'Mon', tone: 'good' },
              { text: <>Mr Ansah · Social Studies · <b>3 notes</b></>, ago: 'Tue', tone: 'good' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

function Attendance() {
  return (
    <>
      <PageHead eyebrow="Institution · term 3, week 6" title="Attendance" />
      <p className="nb-sub">29 days open so far · 1,284 learners · 67 teaching staff</p>

      <Stats items={[
        { label: 'Learners', value: '93%', note: 'up 2 points', dir: 'up' },
        { label: 'Staff', value: '97%', note: '2 classes missed', dir: 'down' },
        { label: 'Lowest class', value: '81%', note: 'SHS 3 Arts B', dir: 'down' },
        { label: 'Chronic absence', value: '24', note: 'below 80% this term', dir: 'down' },
      ]} />

      <Grid kind="two">
        <Panel title="By class" more="All 32">
          <Table
            cols={[
              { key: 'c', label: 'Class' },
              { key: 'p', label: 'Present today', align: 'right' },
              { key: 'l', label: 'Last term', align: 'right' },
              { key: 't', label: 'This term' },
            ]}
            rows={[
              ['SHS 2 Science A', 'Mrs Adjei', '38 / 41', 90, 91],
              ['SHS 1 Gold', 'Mrs Adjei', '39 / 41', 90, 88],
              ['SHS 2 Arts A', 'Miss Owusu', '35 / 38', 91, 92],
              ['SHS 1 Silver', 'Mrs Adjei', '25 / 28', 88, 89],
              ['SHS 3 Science B', 'Mr Tetteh', '32 / 38', 87, 84],
              ['SHS 3 Arts B', 'Mr Tetteh', '29 / 36', 89, 81],
            ].map(r => ({
              c: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
              p: r[2], l: `${r[3]}%`, t: <MiniBar pct={r[4] as number} />,
            }))}
          />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Staff attendance" pad>
            <p style={{ margin: '0 0 10px', fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              <b style={{ color: 'var(--crit)' }}>2 classes not taught yesterday.</b> Physics at 11:40
              and French at 13:00. No lesson was started and no register was taken.
            </p>
            <div className="nb-split"><span className="k">Teachers present today</span><span className="v">65 of 67</span></div>
            <div className="nb-split"><span className="k">Lessons not started</span><span className="v" style={{ color: 'var(--crit)' }}>2 this week</span></div>
            <div className="nb-split"><span className="k">Registers outstanding</span><span className="v" style={{ color: 'var(--warn)' }}>4</span></div>
          </Panel>

          <Panel title="Chronic absence" more="All 24">
            <Feed items={[
              { text: <><b>Kwame Asare</b> · SHS 2 Science A</>, ago: '61%', tone: 'crit' },
              { text: <><b>Esi Appiah</b> · SHS 3 Arts B</>, ago: '64%', tone: 'crit' },
              { text: <><b>Nana Aidoo</b> · SHS 3 Arts B</>, ago: '68%', tone: 'crit' },
              { text: <><b>Yaa Bediako</b> · SHS 1 Silver</>, ago: '72%', tone: 'warn' },
              { text: <><b>Kofi Larbi</b> · SHS 2 Arts A</>, ago: '76%', tone: 'warn' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

const STAFF = [
  ['Mrs A. Adjei',    'Elective and Core Mathematics', 4, 34, 'Dec 2027'],
  ['Mr K. Boateng',   'Chemistry',                     3, 58, 'Aug 2028'],
  ['Miss E. Owusu',   'English Language',              4, 41, 'Mar 2027'],
  ['Mr S. Tetteh',    'Physics',                       3, 62, 'Jan 2029'],
  ['Mrs P. Quaye',    'Biology',                       3, 55, 'Nov 2028'],
  ['Mr D. Ansah',     'Social Studies',                4, 28, 'Jun 2027'],
] as const

/**
 * Staff and roll.
 *
 * Two tabs rather than two stacked sections: a head looking at staffing is not
 * simultaneously looking at the roll, and stacking them buries both.
 */
function People() {
  const [tab, setTab] = useState<'staff' | 'students'>('staff')

  return (
    <>
      <PageHead eyebrow="Institution" title="Staff and students" />
      <p className="nb-sub">Wesley Girls' Senior High · 67 teaching staff · 1,284 on roll</p>

      <div style={{ display: 'flex', gap: 6, marginTop: 18 }}>
        {(['staff', 'students'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="nb-btn g"
            style={{
              minHeight: 36, padding: '7px 15px', textTransform: 'capitalize',
              borderColor: tab === t ? 'var(--blue)' : 'var(--line)',
              color: tab === t ? 'var(--blue-700)' : 'var(--ink)',
              background: tab === t ? 'var(--blue-50)' : 'var(--card)',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'staff' ? (
        <>
          <Stats items={[
            { label: 'Teachers', value: '67', note: '3 vacancies', dir: 'down' },
            { label: 'Licensed', value: '61', note: '6 renewing', dir: 'up' },
            { label: 'Average CPD', value: '46 / 60', dir: 'down' },
            { label: 'Learner to teacher', value: '19 : 1' },
          ]} />

          <Grid kind="two">
            <Panel title="Teaching staff" more="All 67">
              <Table
                cols={[
                  { key: 'n', label: 'Teacher' },
                  { key: 'c', label: 'Classes', align: 'right' },
                  { key: 'p', label: 'CPD', align: 'right' },
                  { key: 'r', label: 'Renewal', align: 'right' },
                ]}
                rows={STAFF.map(s => ({
                  n: <span className="nm">{s[0]}<span className="sub">{s[1]}</span></span>,
                  c: s[2],
                  p: <Pill tone={s[3] >= 60 ? 'good' : s[3] >= 45 ? 'warn' : 'crit'}>{`${s[3]} / 60`}</Pill>,
                  r: s[4],
                }))}
              />
            </Panel>

            <div style={{ display: 'grid', gap: 14 }}>
              <Panel title="Needs chasing" pad>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
                  <b style={{ color: 'var(--ink)' }}>6 teachers are short of CPD points</b> with
                  renewal inside twelve months. Courses they can take are already matched to what
                  they teach.
                </p>
              </Panel>

              <Panel title="Vacancies">
                <Feed items={[
                  { text: <><b>Mathematics</b> · SHS 1</>, ago: 'since Jan', tone: 'crit' },
                  { text: <><b>French</b> · all forms</>, ago: 'since Apr', tone: 'crit' },
                  { text: <><b>ICT</b> · SHS 2 and 3</>, ago: 'since Jun', tone: 'warn' },
                ]} />
              </Panel>
            </div>
          </Grid>
        </>
      ) : (
        <>
          <Stats items={[
            { label: 'On roll', value: '1,284', note: '+31 this year', dir: 'up' },
            { label: 'Form 1', value: '438' },
            { label: 'Form 2', value: '431' },
            { label: 'Form 3', value: '415' },
          ]} />

          <Grid kind="two">
            <Panel title="By class" more="Full roll">
              <Table
                cols={[
                  { key: 'c', label: 'Class' },
                  { key: 'n', label: 'On roll', align: 'right' },
                  { key: 'a', label: 'Attendance', align: 'right' },
                  { key: 'f', label: 'Flagged', align: 'right' },
                ]}
                rows={[
                  ['SHS 1 Gold', 'General Science', 41, 94, 2],
                  ['SHS 1 Silver', 'General Arts', 28, 89, 3],
                  ['SHS 2 Science A', 'General Science', 41, 91, 5],
                  ['SHS 2 Arts A', 'General Arts', 38, 92, 2],
                  ['SHS 3 Science B', 'General Science', 38, 84, 6],
                  ['SHS 3 Arts B', 'General Arts', 36, 81, 6],
                ].map(r => ({
                  c: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
                  n: r[2], a: `${r[3]}%`,
                  f: <Pill tone={(r[4] as number) > 4 ? 'crit' : 'warn'}>{String(r[4])}</Pill>,
                }))}
              />
            </Panel>

            <div style={{ display: 'grid', gap: 14 }}>
              <Panel title="Admissions" pad>
                <div className="nb-split"><span className="k">Placed for next year</span><span className="v">452</span></div>
                <div className="nb-split"><span className="k">Confirmed</span><span className="v">398</span></div>
                <div className="nb-split"><span className="k">Awaiting confirmation</span><span className="v" style={{ color: 'var(--warn)' }}>54</span></div>
              </Panel>

              <Panel title="Learners to watch" more="All 24">
                <Feed items={[
                  { text: <><b>Kwame Asare</b> · SHS 2 Science A</>, ago: 'attendance', tone: 'crit' },
                  { text: <><b>Esi Appiah</b> · SHS 3 Arts B</>, ago: 'attendance', tone: 'crit' },
                  { text: <><b>Efua Danso</b> · SHS 2 Science A</>, ago: 'falling', tone: 'crit' },
                  { text: <><b>Nana Aidoo</b> · SHS 3 Arts B</>, ago: 'attendance', tone: 'warn' },
                ]} />
              </Panel>
            </div>
          </Grid>
        </>
      )}
    </>
  )
}

/* ------------------------------------------------------------------- student */

function Student({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Learner dashboard" title="Good morning, Ama" />
      <p className="nb-sub">Wesley Girls' Senior High · Form 3 General Science · EDU-2048-0192</p>

      <Stats items={[
        { label: 'This week', value: '6 / 8', note: 'activities completed', dir: 'up' },
        { label: 'Average', value: '72%', note: 'up 4 points this term', dir: 'up' },
        { label: 'Position', value: '7 of 41' },
        { label: 'Attendance', value: '96%', note: '2 days missed', dir: 'up' },
      ]} />

      <Section title="Subjects">
        <SubjectTiles units={SUBJECT_MARKS} />
      </Section>

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Card title="Elective Mathematics" pill="in 18 minutes" pillTone="good"
                actions={[{ label: 'Join the class', kind: 'p' },
                          { label: 'See the lesson', onClick: () => go('lessons') }]}>
            Equation of a circle · Mrs Adjei · Room B12
          </Card>

          <Panel title="Today">
            <Timetable periods={[
              { when: '08:00', title: 'Core Mathematics',     meta: 'Surds and indices · Mrs Adjei', state: 'done' },
              { when: '10:20', title: 'Elective Mathematics', meta: 'Equation of a circle · Room B12', state: 'now' },
              { when: '11:40', title: 'Physics',              meta: 'Waves and sound · Mr Tetteh' },
              { when: '13:00', title: 'Chemistry',            meta: 'Rates of reaction · Mr Boateng' },
              { when: '14:40', title: 'Private study',        meta: 'Library' },
            ]} />
          </Panel>

          <Panel title="Assignments" more="All 6" onMore={() => go('homework')}>
            <Table
              cols={[
                { key: 'task', label: 'Task' },
                { key: 'subject', label: 'Subject' },
                { key: 'due', label: 'Due', align: 'right' },
              ]}
              onRow={() => go('homework')}
              rows={[
                { task: <span className="nm">WASSCE 2019 Q7<span className="sub">Centre and radius of a circle</span></span>,
                  subject: 'Elective Maths', due: <Pill tone="crit">Tomorrow</Pill> },
                { task: <span className="nm">Practical write-up<span className="sub">Titration results</span></span>,
                  subject: 'Chemistry', due: <Pill tone="warn">Friday</Pill> },
                { task: <span className="nm">Waves worksheet<span className="sub">Handed in Tuesday</span></span>,
                  subject: 'Physics', due: <Pill tone="good">18 / 20</Pill> },
                { task: <span className="nm">The straight line<span className="sub">Handed in last week</span></span>,
                  subject: 'Elective Maths', due: <Pill tone="good">15 / 20</Pill> },
              ]}
            />
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="What needs attention" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              <b style={{ color: 'var(--ink)' }}>Mole calculations · 20 minutes.</b> You lost most of
              your chemistry marks on this one topic across three tests. Twenty minutes here moves
              your grade more than anything else you could do.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => go('tutor')}>Practise now</button>
            </div>
          </Panel>

          <Panel title="Continue learning" more="Library" onMore={() => go('lessons')}>
            <Feed items={[
              { text: <><b>Equation of a circle</b> · 14 pages</>, ago: 'today' },
              { text: <><b>The straight line</b> · revisit</>, ago: 'Thu' },
              { text: <><b>Waves and sound</b> · Physics</>, ago: 'Tue' },
              { text: <><b>Rates of reaction</b> · Chemistry</>, ago: 'Mon' },
              { text: <><b>Newton's laws</b> · Physics</>, ago: '24 Jul' },
            ]} />
          </Panel>

          <Panel title="Career path" more="Explore">
            <Feed items={[
              { text: <>Target: <b>Civil Engineering</b>, KNUST</>, ago: '', tone: 'good' },
              { text: <>Strong in Mathematics and Physics</>, ago: '', tone: 'good' },
              { text: <>Chemistry below the entry grade</>, ago: '', tone: 'warn' },
              { text: <><b>3 scholarships</b> match your profile</>, ago: 'new' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

function Marks() {
  const [term, setTerm] = useState<1 | 2 | 3>(3)

  /** Each term's figures, so the filter changes something real. */
  const byTerm: Record<number, { avg: string; pos: string }> = {
    1: { avg: '64%', pos: '14 of 41' },
    2: { avg: '68%', pos: '11 of 41' },
    3: { avg: '72%', pos: '7 of 41' },
  }

  return (
    <>
      <PageHead eyebrow="Progress" title="My marks" />
      <p className="nb-sub">Wesley Girls' Senior High · Form 3 General Science · 2026/2027</p>

      <div style={{ display: 'flex', gap: 6, marginTop: 18 }}>
        {([1, 2, 3] as const).map(t => (
          <button
            key={t}
            onClick={() => setTerm(t)}
            className="nb-btn g"
            style={{
              minHeight: 36, padding: '7px 15px',
              borderColor: term === t ? 'var(--blue)' : 'var(--line)',
              color: term === t ? 'var(--blue-700)' : 'var(--ink)',
              background: term === t ? 'var(--blue-50)' : 'var(--card)',
            }}
          >
            Term {t}
          </button>
        ))}
      </div>

      <Stats items={[
        { label: 'Average', value: byTerm[term].avg, note: term === 3 ? 'up 4 points' : 'end of term', dir: 'up' },
        { label: 'Position', value: byTerm[term].pos },
        { label: 'Attendance', value: '96%', dir: 'up' },
        { label: 'Subjects', value: '8' },
      ]} />

      <Section title="By subject">
        <SubjectTiles units={SUBJECT_MARKS} />
      </Section>

      <Grid kind="two">
        <Panel title="Assessment history" more="All 24">
          <Table
            cols={[
              { key: 'a', label: 'Assessment' },
              { key: 's', label: 'Subject' },
              { key: 'm', label: 'Mark', align: 'right' },
            ]}
            rows={[
              ['Waves worksheet', 'Class exercise · 12 Jul', 'Physics', '18 / 20', 'good'],
              ['The straight line', 'Homework · 8 Jul', 'Elective Maths', '15 / 20', 'good'],
              ['Mid-term test', 'Test · 1 Jul', 'Elective Maths', '34 / 40', 'good'],
              ['Titration practical', 'Practical · 24 Jun', 'Chemistry', '11 / 20', 'warn'],
              ['Mole calculations', 'Test · 17 Jun', 'Chemistry', '9 / 20', 'crit'],
              ['Comprehension', 'Class exercise · 10 Jun', 'English', '16 / 20', 'good'],
            ].map(r => ({
              a: <span className="nm">{r[0] as string}<span className="sub">{r[1] as string}</span></span>,
              s: r[2],
              m: <Pill tone={r[4] as 'good' | 'warn' | 'crit'}>{r[3] as string}</Pill>,
            }))}
          />
        </Panel>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="What would actually help" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              <b style={{ color: 'var(--ink)' }}>Chemistry, mole calculations.</b> You lost most of
              your chemistry marks on this one topic across three assessments. Twenty minutes of
              practice moves your grade more than anything else you could do.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p">Practise now</button>
            </div>
          </Panel>

          <Panel title="Strengths">
            <Feed items={[
              { text: <>Algebra and coordinate geometry</>, ago: 'strong', tone: 'good' },
              { text: <>Mechanics and waves</>, ago: 'strong', tone: 'good' },
              { text: <>Comprehension and essays</>, ago: 'steady' },
            ]} />
          </Panel>

          <Panel title="Needs work">
            <Feed items={[
              { text: <>Mole calculations</>, ago: '3 tests', tone: 'crit' },
              { text: <>Balancing equations</>, ago: '2 tests', tone: 'warn' },
              { text: <>Organic nomenclature</>, ago: '1 test', tone: 'warn' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

function Lessons({ go }: { go: (s: ScreenId) => void }) {
  const [subject, setSubject] = useState<string>('All')
  const subjects = ['All', 'Elective Maths', 'Physics', 'Chemistry']
  const shown = subject === 'All'
    ? STUDENT_LESSONS
    : STUDENT_LESSONS.filter(l => l.meta.startsWith(subject))

  return (
    <>
      <PageHead eyebrow="My learning" title="Lessons" />
      <p className="nb-sub">Every lesson you have been taught this year, kept so you can go back
        over it before an exam.</p>

      <div style={{ display: 'flex', gap: 6, marginTop: 18, flexWrap: 'wrap' }}>
        {subjects.map(s => (
          <button
            key={s}
            onClick={() => setSubject(s)}
            className="nb-btn g"
            style={{
              minHeight: 34, padding: '6px 13px', fontSize: 13,
              borderColor: subject === s ? 'var(--blue)' : 'var(--line)',
              color: subject === s ? 'var(--blue-700)' : 'var(--ink)',
              background: subject === s ? 'var(--blue-50)' : 'var(--card)',
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <Stats items={[
        { label: 'Lessons kept', value: String(STUDENT_LESSONS.length * 12), note: 'this year' },
        { label: 'Downloaded', value: '18', note: 'available offline', dir: 'up' },
        { label: 'Revisited', value: '31', note: 'this term' },
        { label: 'Storage used', value: '46 MB' },
      ]} />

      <Section title={subject === 'All' ? 'Most recent' : subject}>
        <Panel title={`${shown.length} lessons`} more="Download all">
          <Table
            cols={[
              { key: 'l', label: 'Lesson' },
              { key: 'w', label: 'When', align: 'right' },
              { key: 'o', label: 'Offline', align: 'right' },
            ]}
            onRow={() => go('lesson')}
            rows={shown.map((l, i) => ({
              l: <span className="nm">{l.name}<span className="sub">{l.meta}</span></span>,
              w: l.meta.split(' · ')[1] ?? '',
              o: i < 3 ? <Pill tone="good">Saved</Pill> : <Pill tone="flat">Download</Pill>,
            }))}
          />
        </Panel>
      </Section>

      <div className="nb-note">
        <b>Works with no data.</b> Download a lesson once on the school network and it stays on your
        phone for the year. Nothing is charged to your bundle when you open it again.
      </div>
    </>
  )
}

/** The 14 board pages of the archived lesson, stepped through. */
const BOARD_PAGES = [
  '(x − a)² + (y − b)² = r²',
  'Centre (a, b), radius r',
  'Distance from (x, y) to (a, b) = r',
  'x² + y² − 6x + 4y − 12 = 0',
  '(x − 3)² + (y + 2)² = 25',
  'Centre (3, −2), radius 5',
]

function LessonReplay({ go }: { go: (s: ScreenId) => void }) {
  const [page, setPage] = useState(0)
  const [saved, setSaved] = useState(false)

  return (
    <>
      <PageHead eyebrow="Elective Mathematics · Mrs Adjei · today" title="Equation of a circle" />
      <p className="nb-sub">SHS 2 Science A · periods 3 and 4 · 14 board pages kept</p>

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="The board" more={saved ? 'Saved offline' : 'Download'} onMore={() => setSaved(true)}>
            <div style={{ padding: '34px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '.01em', color: 'var(--ink)' }}>
                {BOARD_PAGES[page]}
              </div>
              <p style={{ marginTop: 12, color: 'var(--faint)', fontSize: 12.5 }}>
                Page {page + 1} of {BOARD_PAGES.length} · exactly what was written in class
              </p>
            </div>

            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', padding: '0 14px 16px' }}>
              <button className="nb-btn g" disabled={page === 0}
                      style={{ opacity: page === 0 ? 0.45 : 1 }}
                      onClick={() => setPage(p => Math.max(0, p - 1))}>
                Back
              </button>
              <button className="nb-btn p" disabled={page === BOARD_PAGES.length - 1}
                      style={{ opacity: page === BOARD_PAGES.length - 1 ? 0.45 : 1 }}
                      onClick={() => setPage(p => Math.min(BOARD_PAGES.length - 1, p + 1))}>
                Next page
              </button>
              <button className="nb-btn g" onClick={() => setPage(0)}>Restart</button>
            </div>
          </Panel>

          <Panel title="Practice on this topic">
            <Table
              cols={[
                { key: 'q', label: 'Question' },
                { key: 'y', label: 'Year', align: 'right' },
                { key: 'a', label: '', align: 'right' },
              ]}
              onRow={() => go('homework')}
              rows={[
                ['WASSCE Question 7', 'Centre and radius', '2019'],
                ['WASSCE Question 4', 'Equation from centre', '2022'],
                ['WASSCE Question 9', 'Tangent to a circle', '2017'],
                ['WASSCE Question 6', 'Circle through 3 points', '2014'],
              ].map(r => ({
                q: <span className="nm">{r[0]}<span className="sub">{r[1]}</span></span>,
                y: r[2],
                a: <Pill tone="flat">Try it</Pill>,
              }))}
            />
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="What you should be able to do" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              Write the equation of a circle when you are given the centre and radius, and complete
              the square to recover the centre and radius from the general form.
            </p>
          </Panel>

          <Panel title="In this lesson">
            <Feed items={[
              { text: <>Distance formula recap</>, ago: '10 min' },
              { text: <>Deriving the equation</>, ago: '20 min' },
              { text: <>Two worked examples</>, ago: '15 min' },
              { text: <>Completing the square</>, ago: '20 min' },
              { text: <>Homework set</>, ago: '5 min' },
            ]} />
          </Panel>

          <Panel title="Stuck?" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              The tutor already knows this lesson was taught today and what was covered in it.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => go('tutor')}>Ask about this lesson</button>
            </div>
          </Panel>
        </div>
      </Grid>
    </>
  )
}

interface Task { id: string; title: string; detail: string; subject: string; due: string; tone: 'crit' | 'warn' }

const DUE: Task[] = [
  { id: 'h1', title: 'WASSCE 2019 Question 7', detail: 'Find the centre and radius of the circle x² + y² − 6x + 4y − 12 = 0.', subject: 'Elective Mathematics', due: 'Tomorrow', tone: 'crit' },
  { id: 'h2', title: 'Titration practical write-up', detail: 'Results table, calculations and conclusion from Monday\'s practical.', subject: 'Chemistry', due: 'Friday', tone: 'warn' },
]

function Homework() {
  const [submitted, setSubmitted] = useState<string[]>([])
  const outstanding = DUE.filter(t => !submitted.includes(t.id))

  return (
    <>
      <PageHead eyebrow="Assignments" title="Your work" />
      <p className="nb-sub">SHS 2 Science A · term 3, week 6</p>

      <Stats items={[
        { label: 'Due now', value: String(outstanding.length),
          note: outstanding.length ? 'not handed in' : 'all handed in',
          dir: outstanding.length ? 'down' : 'up' },
        { label: 'Handed in', value: String(14 + submitted.length), note: 'this term', dir: 'up' },
        { label: 'Average', value: '15 / 20', note: '75%' },
        { label: 'On time', value: '93%', dir: 'up' },
      ]} />

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          {outstanding.length === 0 ? (
            <Panel title="Nothing due" pad>
              <p style={{ margin: 0, fontSize: 13.5, color: 'var(--ink-2)' }}>
                Everything set for this week has been handed in. The next assignment appears here
                when your teacher sets it.
              </p>
            </Panel>
          ) : outstanding.map(t => (
            <Panel key={t.id} title={t.title} pad>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 9, marginBottom: 8 }}>
                <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>{t.subject}</span>
                <Pill tone={t.tone}>{`Due ${t.due}`}</Pill>
              </div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>{t.detail}</p>
              <div className="nb-acts">
                <button className="nb-btn p" onClick={() => setSubmitted(s => [...s, t.id])}>
                  Answer on the board
                </button>
                <button className="nb-btn g" onClick={() => setSubmitted(s => [...s, t.id])}>
                  Take a photo instead
                </button>
              </div>
            </Panel>
          ))}

          <Panel title="Handed in">
            <Table
              cols={[
                { key: 'w', label: 'Work' },
                { key: 's', label: 'Subject' },
                { key: 'm', label: 'Mark', align: 'right' },
              ]}
              rows={[
                ...submitted.map(id => {
                  const t = DUE.find(d => d.id === id)!
                  return {
                    w: <span className="nm">{t.title}<span className="sub">Just now</span></span>,
                    s: t.subject,
                    m: <Pill tone="flat">Awaiting marking</Pill>,
                  }
                }),
                { w: <span className="nm">Waves worksheet<span className="sub">Handed in Tuesday</span></span>,
                  s: 'Physics', m: <Pill tone="good">18 / 20</Pill> },
                { w: <span className="nm">The straight line<span className="sub">Handed in last week</span></span>,
                  s: 'Elective Maths', m: <Pill tone="good">15 / 20</Pill> },
                { w: <span className="nm">Mole calculations test<span className="sub">17 June</span></span>,
                  s: 'Chemistry', m: <Pill tone="crit">9 / 20</Pill> },
              ]}
            />
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Answer in real mathematics" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              The board you answer on is <b style={{ color: 'var(--ink)' }}>the same one your teacher
              taught with</b>, so your working arrives as real notation rather than a blurred photo
              of an exercise book. Photos still work when the power is out.
            </p>
          </Panel>

          <Panel title="Teacher feedback">
            <Feed items={[
              { text: <>Full working shown, well done</>, ago: 'waves', tone: 'good' },
              { text: <>Lost marks completing the square</>, ago: 'straight line', tone: 'warn' },
              { text: <>Revise moles before the next test</>, ago: 'chemistry', tone: 'crit' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/**
 * The tutor.
 *
 * Typing works and the reply is drawn from a scripted set keyed on what was
 * asked. Deliberately not wired to a model yet: an AI confidently teaching the
 * Ghanaian syllabus wrong is the single fastest way to lose a ministry, so the
 * real one needs the curriculum retrieval layer behind it first.
 */
function Tutor() {
  const [turns, setTurns] = useState(TUTOR)
  const [draft, setDraft] = useState('')

  const reply = (q: string): string => {
    const s = q.toLowerCase()
    if (s.includes('understand') || s.includes('confus') || s.includes('simpl'))
      return 'Let me put it another way. Think about pushing a trolley at Melcom: empty, a small push sends it off. Loaded with cement, the same push barely moves it. Same push, more mass, less acceleration.'
    if (s.includes('example'))
      return 'A 3 kg block is pushed with a force of 12 N. Acceleration is 12 ÷ 3, which is 4 m/s².'
    if (s.includes('question') || s.includes('test me') || s.includes('practice'))
      return 'Here is one. A 5 kg crate accelerates at 2 m/s². What force is acting on it?'
    if (s.includes('circle') || s.includes('radius'))
      return 'The equation of a circle is (x − a)² + (y − b)² = r², where (a, b) is the centre and r the radius. Your class covered this today with Mrs Adjei.'
    if (s.includes('mole') || s.includes('chemistry'))
      return 'Moles are just a counting unit. One mole is 6.02 × 10²³ particles. To find moles, divide the mass you have by the molar mass. This is the topic costing you the most marks, so it is worth the time.'
    return 'That is outside what your class has covered so far, so I would rather not guess. Ask your teacher, or pick a topic from this term and I will take you through it.'
  }

  const send = (e: React.FormEvent) => {
    e.preventDefault()
    const q = draft.trim()
    if (!q) return
    setTurns(t => [...t, { who: 'me', text: q }, { who: 'ai', text: reply(q) }])
    setDraft('')
  }

  return (
    <>
      <PageHead eyebrow="AI tutor" title="Ask anything" />
      <p className="nb-sub">It knows your class, your syllabus position and what your teacher
        actually covered this week.</p>

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 12 }}>
          <div className="nb-card" style={{ maxHeight: 460, overflowY: 'auto' }}>
            {turns.map((t, i) => (
              <div key={i} className={`nb-msg ${t.who}`}>{t.text}</div>
            ))}
          </div>

          <form onSubmit={send} style={{ display: 'flex', gap: 8 }}>
            <input
              value={draft}
              onChange={e => setDraft(e.target.value)}
              placeholder="Ask about anything you were taught"
              aria-label="Ask the tutor"
              style={{
                flex: '1 1 auto', font: 'inherit', fontSize: 14, padding: '11px 13px',
                borderRadius: 9, border: '1px solid var(--line)', background: 'var(--card)',
                color: 'var(--ink)',
              }}
            />
            <button className="nb-btn p" type="submit">Ask</button>
          </form>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Try asking">
            <Feed items={[
              { text: 'Give me an example', ago: '' },
              { text: 'Give me a question', ago: '' },
              { text: 'Explain the circle again', ago: '' },
              { text: 'Help me with moles', ago: '' },
            ]} />
          </Panel>

          <Panel title="Kept honest" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              The tutor teaches only from the approved curriculum and only what has actually been
              covered. <b style={{ color: 'var(--ink)' }}>Ask it something off-syllabus and it says
              so</b> rather than inventing an answer. Try it.
            </p>
          </Panel>

          <Panel title="What it knows about you">
            <Feed items={[
              { text: <>SHS 2 Science A · Elective Maths</>, ago: 'class' },
              { text: <>Week 6, the circle</>, ago: 'position' },
              { text: <>Weak on mole calculations</>, ago: 'from marks', tone: 'warn' },
              { text: <>Strong on algebra</>, ago: 'from marks', tone: 'good' },
            ]} />
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* -------------------------------------------------------------------- parent */

function ParentHome({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Family" title="Good morning, Ama's Parent" />
      <p className="nb-sub">Ama Mensah · JHS 2 · Achimota Basic School · term 3, week 6</p>

      <Stats items={[
        { label: 'Attendance', value: '96%', note: '2 days missed this term', dir: 'up' },
        { label: 'Assignments', value: '91%', note: 'handed in on time', dir: 'up' },
        { label: 'Learning progress', value: '78%', note: 'of the term syllabus' },
        { label: 'Position', value: '7 of 41', note: 'up from 11th', dir: 'up' },
      ]} />

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="How Ama is doing" pad>
            <div style={{ display: 'flex', gap: 26, flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 190px' }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em',
                               textTransform: 'uppercase', color: 'var(--good)' }}>Strong areas</span>
                <div style={{ marginTop: 9, display: 'grid', gap: 7 }}>
                  <span style={{ fontSize: 14.5, fontWeight: 600 }}>Mathematics</span>
                  <span style={{ fontSize: 14.5, fontWeight: 600 }}>Science</span>
                </div>
              </div>
              <div style={{ flex: '1 1 190px' }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em',
                               textTransform: 'uppercase', color: 'var(--crit)' }}>Needs attention</span>
                <div style={{ marginTop: 9 }}>
                  <span style={{ fontSize: 14.5, fontWeight: 600, display: 'block' }}>English</span>
                  <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>Reading comprehension</span>
                </div>
              </div>
            </div>
            <div className="nb-acts">
              <button className="nb-btn p" onClick={() => go('progress')}>See learning progress</button>
            </div>
          </Panel>

          <Panel title="Assignments" more="All" onMore={() => go('progress')}>
            <Table
              cols={[
                { key: 'w', label: 'Work' },
                { key: 's', label: 'Subject' },
                { key: 'd', label: 'Status', align: 'right' },
              ]}
              rows={[
                { w: <span className="nm">Reading comprehension exercise<span className="sub">Set Monday</span></span>,
                  s: 'English', d: <Pill tone="crit">Not done</Pill> },
                { w: <span className="nm">Linear equations worksheet<span className="sub">Set Tuesday</span></span>,
                  s: 'Mathematics', d: <Pill tone="good">18 / 20</Pill> },
                { w: <span className="nm">Photosynthesis diagram<span className="sub">Set last week</span></span>,
                  s: 'Science', d: <Pill tone="good">16 / 20</Pill> },
                { w: <span className="nm">Map work<span className="sub">Set last week</span></span>,
                  s: 'Social Studies', d: <Pill tone="good">15 / 20</Pill> },
              ]}
            />
          </Panel>

          <Panel title="Upcoming assessments">
            <Feed items={[
              { text: <><b>Mathematics</b> end of term test</>, ago: '18 Dec', tone: 'warn' },
              { text: <><b>English</b> comprehension paper</>, ago: '19 Dec', tone: 'warn' },
              { text: <><b>Science</b> practical</>, ago: '20 Dec' },
              { text: <><b>Social Studies</b> written paper</>, ago: '21 Dec' },
            ]} />
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Recommended activity" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              <b style={{ color: 'var(--ink)' }}>Twenty minutes of reading, three times a week.</b>{' '}
              Ama answers factual questions well but loses marks when asked to infer meaning.
              Reading together and asking her <em>why</em> a character did something builds exactly
              that skill.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p">Open the activity</button>
            </div>
          </Panel>

          <Panel title="Teacher feedback" more="All messages" onMore={() => go('messages')}>
            <Feed items={[
              { text: <><b>Mrs Adjei</b> · Mathematics · doing very well</>, ago: '2 days', tone: 'good' },
              { text: <><b>Miss Owusu</b> · English · comprehension needs work</>, ago: '4 days', tone: 'warn' },
              { text: <><b>Mr Boateng</b> · Science · strong practical work</>, ago: '1 week', tone: 'good' },
            ]} />
          </Panel>

          <Panel title="Attendance" more="Detail" onMore={() => go('progress')}>
            <div className="nb-split"><span className="k">This term</span><span className="v">96%</span></div>
            <div className="nb-split"><span className="k">Days missed</span><span className="v">2 of 62</span></div>
            <div className="nb-split"><span className="k">Late arrivals</span><span className="v">1</span></div>
            <div className="nb-split"><span className="k">School average</span><span className="v">93%</span></div>
          </Panel>

          <div className="nb-note">
            <b>One thing, not eight numbers.</b> We tell you the single change that would help most,
            rather than a table you have to interpret. Everything else is here if you want it.
          </div>
        </div>
      </Grid>
    </>
  )
}

function Progress() {
  return (
    <>
      <PageHead eyebrow="Family · term 3" title="How Ama is doing" />
      <p className="nb-sub">Plain figures, and what they actually mean. Wesley Girls' Senior High ·
        Form 3 General Science</p>

      <Stats items={[
        { label: 'Average', value: '72%', note: 'up from 68% in term 2', dir: 'up' },
        { label: 'Position', value: '7 of 41', note: 'up from 11th', dir: 'up' },
        { label: 'Attendance', value: '96%', note: '2 days missed', dir: 'up' },
        { label: 'Work handed in', value: '14 / 16', dir: 'down' },
      ]} />

      <Section title="Every subject">
        <SubjectTiles units={SUBJECT_MARKS} />
      </Section>

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Term by term">
            <Table
              cols={[
                { key: 's', label: 'Subject' },
                { key: 't1', label: 'Term 1', align: 'right' },
                { key: 't2', label: 'Term 2', align: 'right' },
                { key: 't3', label: 'Term 3', align: 'right' },
              ]}
              rows={[
                ['Elective Mathematics', 71, 76, 81, 'good'],
                ['Physics', 68, 71, 74, 'good'],
                ['Core Mathematics', 66, 68, 70, 'good'],
                ['English Language', 70, 69, 71, 'good'],
                ['Chemistry', 61, 57, 54, 'crit'],
              ].map(r => ({
                s: <span className="nm">{r[0] as string}</span>,
                t1: `${r[1]}%`, t2: `${r[2]}%`,
                t3: <Pill tone={r[4] as 'good' | 'crit'}>{`${r[3]}%`}</Pill>,
              }))}
            />
          </Panel>

          <Panel title="What would help at home" pad>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
              <h3 style={{ margin: 0, fontSize: 15.5, fontWeight: 700 }}>Twenty minutes, twice a week</h3>
              <Pill tone="warn">one thing</Pill>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              Ama has lost most of her chemistry marks on <b style={{ color: 'var(--ink)' }}>mole
              calculations</b>, in three tests running. That single topic is costing her more than
              everything else put together, and it is the only thing between her and the KNUST entry
              grade.
            </p>
            <div className="nb-acts">
              <button className="nb-btn p">See the practice work</button>
            </div>
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Strengths">
            <Feed items={[
              { text: <>Algebra and coordinate geometry</>, ago: 'strong', tone: 'good' },
              { text: <>Mechanics and waves</>, ago: 'strong', tone: 'good' },
              { text: <>Attendance and punctuality</>, ago: '96%', tone: 'good' },
            ]} />
          </Panel>

          <Panel title="Needs attention">
            <Feed items={[
              { text: <>Chemistry falling for two terms</>, ago: '61 → 54', tone: 'crit' },
              { text: <>Two assignments outstanding</>, ago: 'this week', tone: 'warn' },
            ]} />
          </Panel>

          <Panel title="Why one number, not eight" pad>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              We tell you the single thing that matters rather than a table you have to interpret.
              Everything else is here if you want it.
            </p>
          </Panel>
        </div>
      </Grid>
    </>
  )
}

interface Msg { id: string; from: string; role: string; when: string; body: string; unread?: boolean }

const INBOX: Msg[] = [
  { id: 'm1', from: 'Mrs Adjei', role: 'Elective Mathematics', when: '2 days ago', unread: true,
    body: 'Good afternoon. Ama is doing very well in mathematics and I would encourage her to consider it at university. She has missed one homework this term. Nothing to worry about.' },
  { id: 'm2', from: 'Mr Boateng', role: 'Chemistry', when: '5 days ago',
    body: 'Ama is finding mole calculations difficult. I have set extra practice on the platform. Twenty minutes twice a week at home would make a real difference before WASSCE.' },
  { id: 'm3', from: 'School office', role: 'Wesley Girls\' Senior High', when: 'last week',
    body: 'Term 3 ends on 18 December. Reports will be released on the platform on 20 December. PTA meeting Saturday 14th at 10am in the assembly hall.' },
]

function Messages() {
  const [openId, setOpenId] = useState<string>(INBOX[0].id)
  const [read, setRead] = useState<string[]>([])
  const [draft, setDraft] = useState('')
  const [sent, setSent] = useState(false)

  const open = INBOX.find(m => m.id === openId)!
  const isUnread = (m: Msg) => m.unread && !read.includes(m.id)

  const select = (id: string) => {
    setOpenId(id)
    setRead(r => (r.includes(id) ? r : [...r, id]))
    setSent(false)
  }

  return (
    <>
      <PageHead eyebrow="Family" title="Messages" />
      <p className="nb-sub">From Ama's teachers and the school office</p>

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title={open.from} pad>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>{open.role}</span>
              <Pill tone="flat">{open.when}</Pill>
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'var(--ink-2)' }}>{open.body}</p>
          </Panel>

          <Panel title="Reply" pad>
            {sent ? (
              <p style={{ margin: 0, fontSize: 13.5, color: 'var(--good)' }}>
                Sent to {open.from}. They will see it next time they open NEXA•EDU.
              </p>
            ) : (
              <>
                <textarea
                  value={draft}
                  onChange={e => setDraft(e.target.value)}
                  rows={4}
                  placeholder={`Write to ${open.from}`}
                  style={{
                    width: '100%', font: 'inherit', fontSize: 13.5, lineHeight: 1.6, padding: 11,
                    borderRadius: 9, border: '1px solid var(--line)', color: 'var(--ink)',
                    resize: 'vertical', background: 'var(--card)',
                  }}
                />
                <div className="nb-acts">
                  <button
                    className="nb-btn p"
                    disabled={!draft.trim()}
                    style={{ opacity: draft.trim() ? 1 : 0.5 }}
                    onClick={() => { setSent(true); setDraft('') }}
                  >
                    Send
                  </button>
                </div>
              </>
            )}
          </Panel>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Inbox">
            {INBOX.map(m => (
              <button
                key={m.id}
                className="nb-rank"
                onClick={() => select(m.id)}
                style={{ background: m.id === openId ? 'var(--blue-50)' : undefined }}
              >
                <div className="nb-rank-top">
                  <span className="nb-rank-name">{m.from}</span>
                  <span className="nb-rank-sub">{m.when}</span>
                  {isUnread(m) && <span style={{ marginLeft: 'auto' }}><Pill tone="warn">New</Pill></span>}
                </div>
                <p style={{
                  margin: '4px 0 0', fontSize: 12, color: 'var(--muted)',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {m.body}
                </p>
              </button>
            ))}
          </Panel>

          <Panel title="No smartphone?" pad>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              Parents without a smartphone receive the same messages by <b style={{ color: 'var(--ink)' }}>SMS</b>,
              and can reply the same way. Nobody is cut out of their child's education by the device
              they own.
            </p>
          </Panel>
        </div>
      </Grid>
    </>
  )
}

/* ------------------------------------------------------------------ passport */

function Passport({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <PageHead eyebrow="Lifelong identity" title="Education Passport" />
      <p className="nb-sub">One identity, many institutions, one lifelong learning history.</p>

      <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', marginTop: 22 }}>
        <div className="nb-idcard">
          <div className="nm">AMA MENSAH</div>
          <div className="lb">Education Learner ID</div>
          <div className="id">EDU-2048-0192</div>
          <div className="vf">Verified learning identity · Ghana Card linked</div>
        </div>

        <div style={{ flex: '1 1 300px', minWidth: 260 }}>
          <div className="nb-card">
            <div className="nb-split"><span className="k">Academic</span><span className="v">WASSCE · BSc · MSc</span></div>
            <div className="nb-split"><span className="k">Skills</span><span className="v">CAD · Coding · Leadership</span></div>
            <div className="nb-split"><span className="k">Achievements</span><span className="v">3 projects · 2 awards</span></div>
            <div className="nb-split"><span className="k">Professional</span><span className="v">CPD · Certifications</span></div>
          </div>
        </div>
      </div>

      <Section title="The learner journey"
               say="One education identity connects the stages without forcing every institution to use the same experience.">
        <div className="nb-journey">
          {['Early Years', 'Primary', 'JHS', 'SHS', 'TVET / University', 'Professional', 'Lifelong']
            .map((label, i) => (
              <div
                key={label}
                className={`nb-stage${i === 3 ? ' now' : i > 3 ? ' future' : ''}`}
              >
                <b>{String(i + 1).padStart(2, '0')}</b>
                <span>{label}</span>
              </div>
            ))}
        </div>
      </Section>

      <Section title="Education history">
        <div className="nb-ranks">
          {PASSPORT_STAGES.map(s => (
            <div className="nb-rank" key={s.title} style={{ cursor: 'default', opacity: s.future ? 0.55 : 1 }}>
              <div className="nb-rank-top">
                <span className="nb-rank-name">{s.title}</span>
                <span className="nb-rank-sub">{s.when}</span>
                {s.pill && <span style={{ marginLeft: 'auto' }}><Pill tone={s.pill.tone}>{s.pill.text}</Pill></span>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Who can see this">
        <Card title="Ama decides"
              actions={[{ label: 'See how a certificate is checked', onClick: () => go('verify') }]}>
          Her school and her parents can see it now. Universities only while she is applying.
          Employers see certificates and skills, never her marks, and only if she turns it on. She can
          see every time anyone looks.
        </Card>
      </Section>
    </>
  )
}

/** The one certificate in this demonstration register. */
const CERT_REGISTER: Record<string, { holder: string; award: string; issuer: string; year: string }> = {
  'GH-CERT-BECE-2028-778104': {
    holder: 'Ama Mensah',
    award: 'Basic Education Certificate',
    issuer: 'West African Examinations Council',
    year: '2028',
  },
}

/**
 * Certificate verification.
 *
 * Type a number and it is looked up. Not found is a first-class result, not an
 * error state: the whole value of this screen is that a forged number returns
 * nothing, in front of the person holding the forgery.
 */
function Verify() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<{ code: string; found: boolean } | null>(null)

  const check = (e: React.FormEvent) => {
    e.preventDefault()
    const code = query.trim().toUpperCase()
    if (!code) return
    setResult({ code, found: Boolean(CERT_REGISTER[code]) })
  }

  const record = result?.found ? CERT_REGISTER[result.code] : null

  return (
    <>
      <PageHead eyebrow="Anyone · no account needed" title="Check a certificate" />
      <p className="nb-sub">Employers and universities confirm a qualification in seconds instead of
        telephoning a school.</p>

      <Grid kind="two">
        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Certificate number" pad>
            <form onSubmit={check} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="GH-CERT-BECE-2028-778104"
                aria-label="Certificate number"
                style={{
                  flex: '1 1 240px', font: 'inherit', fontSize: 14, padding: '11px 13px',
                  borderRadius: 9, border: '1px solid var(--line)', background: 'var(--card)',
                  color: 'var(--ink)', fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                }}
              />
              <button className="nb-btn p" type="submit">Check</button>
            </form>
            <p style={{ margin: '10px 0 0', fontSize: 12, color: 'var(--muted)' }}>
              Try <code>GH-CERT-BECE-2028-778104</code> for a valid one, or any other number to see a
              forgery fail.
            </p>
          </Panel>

          {result && (
            <Panel title={result.code} pad>
              <div style={{ marginBottom: 14 }}>
                {record ? <Pill tone="good">Valid</Pill> : <Pill tone="crit">Not found</Pill>}
              </div>
              {record ? (
                <>
                  <div className="nb-split"><span className="k">Holder</span><span className="v">{record.holder}</span></div>
                  <div className="nb-split"><span className="k">Award</span><span className="v">{record.award}</span></div>
                  <div className="nb-split"><span className="k">Issued by</span><span className="v">{record.issuer}</span></div>
                  <div className="nb-split"><span className="k">Year</span><span className="v">{record.year}</span></div>
                  <div className="nb-split"><span className="k">Checked</span><span className="v">just now</span></div>
                </>
              ) : (
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
                  No certificate with this number has ever been issued. If someone has presented it to
                  you as genuine, it is not.
                </p>
              )}
            </Panel>
          )}
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <Panel title="Why this comes first" pad>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
              <b style={{ color: 'var(--ink)' }}>It needs no schools, no teachers and no lessons.</b>{' '}
              Only the record has to exist. And it makes a forged certificate close to worthless
              overnight, which is a headline a minister can own inside a year.
            </p>
          </Panel>

          <Panel title="Who checks certificates">
            <Feed items={[
              { text: <>Employers hiring</>, ago: 'daily' },
              { text: <>Universities admitting</>, ago: 'admissions' },
              { text: <>Professional bodies licensing</>, ago: 'registration' },
              { text: <>Scholarship boards</>, ago: 'awards' },
            ]} />
          </Panel>

          <Panel title="The learner stays in control" pad>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              A check confirms the certificate exists and who holds it. It never exposes marks,
              attendance or anything else on the record, and the learner can see every check made
              against their number.
            </p>
          </Panel>
        </div>
      </Grid>
    </>
  )
}
