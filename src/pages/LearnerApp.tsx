import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/school.css'
import '../styles/learner.css'
import LearnerShell, { type Destination } from '../components/learner/Shell'
import {
  PageTitle, Breadcrumbs, Select, EmptyState, LoadingBlock, type Crumb,
} from '../components/learner/ui'
import {
  WelcomeScreen, WelcomeSkeleton, NoContextScreen, ContextErrorScreen,
} from '../components/learner/Welcome'
import { Prose, Diagram, InlineCheck } from '../components/learner/Teaching'
import { continueLearning, nextLesson, type Waypoint } from '../lib/education/journey'
import { resolveLearnerContext, type LearnerContext } from '../lib/education/context'
import {
  offeringsForLevel, exploreLevels, hierarchyFor, objectivesInTopic,
  objectiveDetail, periodLabel,
  type Offering, type StrandNode, type ObjectiveRow, type ObjectiveDetail, type ProgressState,
} from '../lib/education/navigator'
import {
  openLesson, recordStep, completeLesson, restartLesson,
  type OpenLesson,
} from '../lib/education/lesson'
import {
  openResource, resourcesForLesson, fileSize, runtime,
  type Resource,
} from '../lib/education/resources'
import {
  practiceForObjective, submitAnswer, summarise,
  type PracticeQuestion, type Marked,
} from '../lib/education/practice'
import {
  examPreparation, yearRange,
  type ExamPreparation,
} from '../lib/education/examination'
import { signOut } from '../lib/school/api'

/**
 * The learner curriculum navigator and objective page.
 *
 * Every label on this screen comes from the resolved context. There is no
 * branch anywhere below on education level: a KG learner and a university
 * learner render through the same components, differing only in the context
 * they were handed.
 *
 * The period selector appears only when the context actually has a period, and
 * is named by the context's own noun. A university reads "Semester" from the
 * same code path that gives a school "Term".
 */

type View =
  | { at: 'subjects' }
  | { at: 'hierarchy'; offering: Offering }
  | { at: 'objective'; offering: Offering; objectiveId: string }
  | { at: 'lesson'; offering: Offering; objectiveId: string; lessonId: string }
  | { at: 'resource'; offering: Offering; objectiveId: string; contentId: string }
  | { at: 'practice'; offering: Offering; objectiveId: string; sourceExam?: string }
  | { at: 'exam' }

const STATE_LABEL: Record<ProgressState, string> = {
  NO_CONTENT: 'No content yet',
  NOT_STARTED: 'Not started',
  IN_PROGRESS: 'In progress',
  COMPLETED: 'Completed',
}

/**
 * "No content yet" is deliberately neutral, never a progress tone. Showing it
 * as 0% would tell a learner they had failed to begin something that does not
 * exist.
 */
const STATE_TONE: Record<ProgressState, string> = {
  NO_CONTENT: 'flat',
  NOT_STARTED: 'flat',
  IN_PROGRESS: 'warn',
  COMPLETED: 'good',
}

/** Matches the nexaboard_* convention this application already uses. */
const welcomeKey = (studentId: string) => `nexaboard_learner_welcomed_${studentId}`

/**
 * Where the learner is, as an address.
 *
 * The learning experience used to live entirely in component state, so a
 * refresh anywhere inside it dropped the learner back at the subject list.
 * Putting the position in the URL makes every screen addressable, survivable
 * across a reload, and shareable with a teacher.
 *
 * Identifiers appear in the path because a URL has to name something stable,
 * but they are never rendered: the interface still shows names throughout.
 */
function pathFor(v: View): string {
  switch (v.at) {
    case 'subjects':  return '/learn'
    case 'exam':      return '/learn/exam'
    case 'hierarchy': return `/learn/subject/${v.offering.id}`
    case 'objective': return `/learn/subject/${v.offering.id}/objective/${v.objectiveId}`
    case 'lesson':    return `/learn/subject/${v.offering.id}/objective/${v.objectiveId}/lesson/${v.lessonId}`
    case 'resource':  return `/learn/subject/${v.offering.id}/objective/${v.objectiveId}/material/${v.contentId}`
    case 'practice':  return `/learn/subject/${v.offering.id}/objective/${v.objectiveId}/practice`
  }
}

interface ParsedPath {
  offeringId?: string
  objectiveId?: string
  lessonId?: string
  contentId?: string
  practice?: boolean
  exam?: boolean
}

function parsePath(pathname: string): ParsedPath {
  const seg = pathname.replace(/^\/learn\/?/, '').split('/').filter(Boolean)
  const out: ParsedPath = {}
  if (seg[0] === 'exam') return { exam: true }
  for (let i = 0; i < seg.length; i += 2) {
    const [k, val] = [seg[i], seg[i + 1]]
    if (k === 'subject' && val) out.offeringId = val
    else if (k === 'objective' && val) out.objectiveId = val
    else if (k === 'lesson' && val) out.lessonId = val
    else if (k === 'material' && val) out.contentId = val
    else if (k === 'practice') { out.practice = true; i -= 1 }
  }
  return out
}

function DemoBadge() {
  return (
    <span
      className="nb-pill warn"
      title="Demonstration data. Not official curriculum."
      style={{ letterSpacing: '.06em' }}
    >
      DEMO · not official
    </span>
  )
}

export default function LearnerApp() {
  const navigate = useNavigate()
  const location = useLocation()

  /**
   * Signing out has to leave the page as well as clear the session.
   *
   * /learn renders on its own rather than behind an auth guard, so clearing the
   * session alone left the learner looking at a screen that was no longer true.
   * Navigating hands control back to the router, which sends a signed-out user
   * to the sign-in page.
   */
  const leave = useCallback(async () => {
    try { await signOut() } finally { navigate('/auth', { replace: true }) }
  }, [navigate])

  const [ctx, setCtx] = useState<LearnerContext | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  /**
   * Whether this learner has already been through the welcome.
   *
   * Kept in localStorage, the mechanism this application already uses for
   * per-device learner state. Nothing is stored server-side: remembering that
   * someone has read a welcome screen does not warrant a row in an audited
   * education database. Keyed per student so two learners sharing a device do
   * not inherit each other's answer.
   */
  const [entered, setEntered] = useState(false)

  /** True once the address has been read into state at least once. */
  const hydrated = useRef(false)
  /**
   * The address the two effects below last agreed on.
   *
   * One writes the address from the view, the other rebuilds the view from the
   * address. Without a single arbiter they undo each other: whichever ran last
   * would see a mismatch and act on it. Recording the agreed value means each
   * effect can tell its own work from a genuine change, so clicking pushes
   * history and Back actually moves.
   */
  const lastPath = useRef<string | null>(null)
  /** Set when the view is changing because the address changed, not the reverse. */
  const fromPath = useRef(false)

  const [mode, setMode] = useState<'current' | 'explore'>('current')
  /** A destination with no content of its own yet. Null means the curriculum. */
  const [place, setPlace] = useState<Destination | null>(null)
  const [exploreLevel, setExploreLevel] = useState<string | null>(null)
  const [levels, setLevels] = useState<{ code: string; label: string; system: string }[]>([])
  const [period, setPeriod] = useState<number | null>(null)

  const [offerings, setOfferings] = useState<Offering[]>([])
  const [view, setView] = useState<View>({ at: 'subjects' })
  const [tree, setTree] = useState<StrandNode[]>([])
  const [openTopic, setOpenTopic] = useState<string | null>(null)
  const [objectives, setObjectives] = useState<ObjectiveRow[]>([])
  const [detail, setDetail] = useState<ObjectiveDetail | null>(null)

  /* lesson player */
  const [lesson, setLesson] = useState<OpenLesson | null>(null)
  const [step, setStep] = useState(0)
  const [lessonMissing, setLessonMissing] = useState(false)

  /* resource viewer */
  /** Where the learner left off, and what follows the lesson they are in. */
  const [resume, setResume] = useState<Waypoint | null>(null)
  const [resumeLoading, setResumeLoading] = useState(true)
  const [upNext, setUpNext] = useState<Waypoint | null>(null)

  /* examination preparation */
  const [exam, setExam] = useState<ExamPreparation | null>(null)

  /* practice */
  const [questions, setQuestions] = useState<PracticeQuestion[] | null>(null)
  const [qIndex, setQIndex] = useState(0)
  const [answers, setAnswers] = useState<Map<string, unknown>>(new Map())
  const [marks, setMarks] = useState<Map<string, Marked>>(new Map())
  const [submitting, setSubmitting] = useState(false)
  const [practiceDone, setPracticeDone] = useState(false)

  const [lessonResources, setLessonResources] = useState<Resource[]>([])
  const [resource, setResource] = useState<Resource | null>(null)
  const [resourceMissing, setResourceMissing] = useState(false)
  const [useLite, setUseLite] = useState(false)

  useEffect(() => {
    resolveLearnerContext()
      .then(c => {
        setCtx(c)
        if (c?.period) setPeriod(c.period.number)
        if (c) {
          try { setEntered(localStorage.getItem(welcomeKey(c.studentId)) === '1') } catch { /* private mode */ }
        }
      })
      .catch(e => setError(e instanceof Error ? e.message : 'Could not resolve your context'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => { exploreLevels().then(setLevels).catch(() => {}) }, [])

  // Recomputed whenever the lesson changes, so finishing one updates the
  // suggestion the learner sees on their next visit.
  useEffect(() => {
    if (!ctx) return
    setResumeLoading(true)
    continueLearning(ctx.studentId)
      .then(setResume).catch(() => setResume(null))
      .finally(() => setResumeLoading(false))
  }, [ctx, lesson])

  useEffect(() => {
    if (!lesson) { setUpNext(null); return }
    nextLesson(lesson.id).then(setUpNext).catch(() => setUpNext(null))
  }, [lesson])

  // Read the level out of the address before anything is fetched, so the first
  // offerings request is already for the right level.
  useEffect(() => {
    if (hydrated.current) return
    const want = new URLSearchParams(location.search).get('level')
    if (want) { setMode('explore'); setExploreLevel(want) }
  }, [location.search])

  const levelInView = mode === 'explore' && exploreLevel ? exploreLevel : ctx?.levelCode ?? null

  useEffect(() => {
    if (!levelInView) return
    setView({ at: 'subjects' })
    offeringsForLevel(levelInView)
      .then(all => {
        // My curriculum is the subjects this learner's class actually takes.
        // A level can carry several courses for the same subject, so showing
        // every offering at the level would list a subject more than once.
        // Explore is different: there the whole level is the point.
        const mine = new Set((ctx?.offerings ?? []).map(o => o.id))
        setOfferings(mode === 'current' && mine.size > 0 ? all.filter(o => mine.has(o.id)) : all)
      })
      .catch(e => setError(String(e)))
  }, [levelInView, mode, ctx])

  /**
   * Moving between destinations. Deep state is reset so nothing leaks across.
   *
   * Declared with the other callbacks, above the early returns below, because
   * hooks must run in the same order on every render.
   */
  const navigateTo = useCallback((to: Destination) => {
    setView({ at: 'subjects' })
    if (to === 'explore') { setMode('explore'); setPlace(null) }
    else if (to === 'curriculum' || to === 'continue') {
      setMode('current'); setExploreLevel(null); setPlace(to === 'continue' ? 'continue' : null)
    } else if (to === 'exam') { setMode('current'); setPlace(null); setView({ at: 'exam' }) }
    else { setMode('current'); setExploreLevel(null); setPlace(to) }
  }, [])

  const openOffering = useCallback((o: Offering) => {
    setView({ at: 'hierarchy', offering: o })
    setOpenTopic(null)
    setObjectives([])
    hierarchyFor(o.id).then(setTree).catch(e => setError(String(e)))
  }, [])

  const openTopicNode = useCallback((topicId: string) => {
    if (!ctx) return
    setOpenTopic(topicId)
    objectivesInTopic(topicId, ctx.studentId).then(setObjectives).catch(e => setError(String(e)))
  }, [ctx])

  const openObjective = useCallback((offering: Offering, id: string) => {
    if (!ctx) return
    setView({ at: 'objective', offering, objectiveId: id })
    setDetail(null)
    objectiveDetail(id, ctx.studentId).then(setDetail).catch(e => setError(String(e)))
  }, [ctx])

  const enterPractice = useCallback((offering: Offering, objectiveId: string, sourceExam?: string) => {
    setView({ at: 'practice', offering, objectiveId, sourceExam })
    setQuestions(null); setQIndex(0); setPracticeDone(false)
    setAnswers(new Map()); setMarks(new Map())
    practiceForObjective(objectiveId, sourceExam).then(setQuestions).catch(e => setError(String(e)))
  }, [])

  // Only ever loaded when the resolved context actually has an examination.
  useEffect(() => {
    if (!ctx?.examination) { setExam(null); return }
    examPreparation(ctx.examination).then(setExam).catch(e => setError(String(e)))
  }, [ctx])

  /** Submits the current answer. The verdict is the server's, never computed here. */
  const submitCurrent = useCallback(async (q: PracticeQuestion) => {
    if (marks.has(q.id) || submitting) return
    setSubmitting(true)
    try {
      const marked = await submitAnswer(q.id, answers.get(q.id) ?? null)
      setMarks(m => new Map(m).set(q.id, marked))
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setSubmitting(false)
    }
  }, [answers, marks, submitting])

  const enterResource = useCallback((offering: Offering, objectiveId: string, contentId: string) => {
    setView({ at: 'resource', offering, objectiveId, contentId })
    setResource(null); setResourceMissing(false); setUseLite(false)
    openResource(contentId)
      .then(r => { if (!r) setResourceMissing(true); else setResource(r) })
      .catch(e => setError(String(e)))
  }, [])

  const enterLesson = useCallback((offering: Offering, objectiveId: string, lessonId: string) => {
    if (!ctx) return
    setView({ at: 'lesson', offering, objectiveId, lessonId })
    setLesson(null); setLessonMissing(false); setLessonResources([])
    resourcesForLesson(lessonId).then(setLessonResources).catch(() => {})
    openLesson(lessonId, ctx.studentId)
      .then(l => {
        if (!l) { setLessonMissing(true); return }
        setLesson(l)
        // Resume where they left off, clamped to steps that actually exist.
        const resume = Math.min(l.progress?.lastStep ?? 0, Math.max(l.steps.length - 1, 0))
        setStep(resume)
      })
      .catch(e => setError(String(e)))
  }, [ctx])

  /**
   * Rebuild the view from the address, once.
   *
   * Runs when the offerings for the level in view have arrived, because a
   * subject in the path has to be matched against a real offering before the
   * screens below it can open. Guarded so it happens on entry only and does not
   * fight the effect that writes the URL back.
   */
  useEffect(() => {
    if (!ctx || offerings.length === 0) return
    const wantLevel = new URLSearchParams(location.search).get('level')
    if (wantLevel && exploreLevel !== wantLevel) return   // offerings not switched yet

    // Runs on every address change, not only on entry, so Back and Forward
    // actually move the learner.
    const here = location.pathname + location.search
    if (lastPath.current === here) { hydrated.current = true; return }
    lastPath.current = here
    hydrated.current = true
    // The view is about to change because the address changed. The writer below
    // must skip that one run, or it would push the previous screen back on and
    // destroy the forward entry.
    fromPath.current = true

    const p = parsePath(location.pathname)
    if (p.exam) { setView({ at: 'exam' }); return }
    // The bare address means the subject list. Returning early here would leave
    // whatever was on screen mounted, so Back appeared to do nothing.
    if (!p.offeringId) { setView({ at: 'subjects' }); return }

    const offering = offerings.find(o => o.id === p.offeringId)
    // A subject that is not in this learner's level: fall back to the list
    // rather than showing a page belonging to somebody else's curriculum.
    if (!offering) { fromPath.current = false; navigate('/learn', { replace: true }); return }

    if (p.objectiveId && p.lessonId) enterLesson(offering, p.objectiveId, p.lessonId)
    else if (p.objectiveId && p.contentId) enterResource(offering, p.objectiveId, p.contentId)
    else if (p.objectiveId && p.practice) enterPractice(offering, p.objectiveId)
    else if (p.objectiveId) openObjective(offering, p.objectiveId)
    else openOffering(offering)
  }, [ctx, offerings, location.pathname, location.search, exploreLevel, navigate,
      enterLesson, enterResource, enterPractice, openObjective, openOffering])

  /** Keep the address in step with where the learner actually is. */
  useEffect(() => {
    if (!hydrated.current) return
    // This run is the echo of a Back, Forward or refresh. Consume it silently.
    if (fromPath.current) { fromPath.current = false; return }
    // Explore looks at another level's curriculum, so the level travels with the
    // address; without it a refresh would rebuild the wrong subject.
    const q = mode === 'explore' && exploreLevel ? `?level=${encodeURIComponent(exploreLevel)}` : ''
    const want = pathFor(view) + q
    if (want === lastPath.current) return      // already agreed; nothing to push
    lastPath.current = want
    navigate(want)
  }, [view, mode, exploreLevel, navigate])


  const goToStep = useCallback((n: number) => {
    if (!ctx || !lesson) return
    setStep(n)
    recordStep(ctx.studentId, lesson.id, n).catch(() => {})
  }, [ctx, lesson])

  // The shell cannot render until the context is known, because the navigation
  // is built from it. These four states sit outside the shell by design.
  if (loading) {
    return <div className="nb-school"><WelcomeSkeleton /></div>
  }

  if (error) {
    return <div className="nb-school">
      <ContextErrorScreen detail={error} onRetry={() => window.location.reload()} />
    </div>
  }

  if (!ctx) {
    return <div className="nb-school"><NoContextScreen onSignOut={leave} /></div>
  }

  // First entry: confirm the school-provided context before opening the app.
  if (!entered) {
    return <div className="nb-school">
      <WelcomeScreen ctx={ctx} onEnter={() => {
        try { localStorage.setItem(welcomeKey(ctx.studentId), '1') } catch { /* private mode */ }
        setEntered(true)
      }} />
    </div>
  }

  /* Topics are filtered by period only when the context HAS a period, and only
     in Current mode. Explore deliberately shows the whole level. */
  const activePeriod = mode === 'current' ? ctx.period : null
  const periodApplies = activePeriod !== null

  const levelInViewLabel = mode === 'explore' && exploreLevel
    ? levels.find(l => l.code === exploreLevel)?.label ?? ''
    : ctx.levelLabel

  /**
   * Which navigation item is current.
   *
   * Derived from where the learner actually is, so the sidebar can never
   * disagree with the page. Deep views stay under the destination they were
   * entered from.
   */
  const destination: Destination =
    place !== null ? place
    : view.at === 'exam' ? 'exam'
    : view.at === 'practice' ? 'practice'
    : mode === 'explore' ? 'explore'
    : 'curriculum'

  const HEADING: Record<Destination, string> = {
    home: 'Home',
    curriculum: 'My curriculum',
    continue: 'Continue learning',
    explore: 'Explore',
    practice: ctx.workLabel,
    exam: ctx.examination ? `${ctx.examination.label} preparation` : 'Examination',
    progress: ctx.progressLabel,
    profile: 'Profile',
    settings: 'Settings',
  }
  const heading = HEADING[destination]

  /** The curriculum browser belongs to these two destinations only. */
  const onCatalogue = destination === 'curriculum' || destination === 'explore'

  /**
   * The trail, built from resolved names.
   *
   * Codes such as the objective's full code are deliberately absent: they are
   * how the curriculum files a statement, not how a learner refers to it.
   */
  const crumbs: Crumb[] = (() => {
    if (destination !== 'curriculum' && destination !== 'explore') return []
    const out: Crumb[] = [{
      label: destination === 'explore' ? 'Explore' : 'My curriculum',
      onClick: () => navigateTo(destination),
    }]
    if (view.at !== 'subjects' && view.at !== 'exam') {
      out.push({ label: view.offering.subjectName, onClick: () => openOffering(view.offering) })
    }
    if (view.at === 'objective' && detail) out.push({ label: detail.position.topic || detail.text })
    if (view.at === 'lesson' && lesson) out.push({ label: lesson.title })
    if (view.at === 'resource' && resource) out.push({ label: resource.title })
    if (view.at === 'practice') out.push({ label: ctx.workLabel })
    return out.length > 1 ? out : []
  })()

  return (
    <LearnerShell ctx={ctx} at={destination} heading={heading}
                  onNavigate={navigateTo} onSignOut={leave}>
      <>
        <>
          {/* Where the learner is, in words. Never a code or an identifier. */}
          <Breadcrumbs items={crumbs} />

          {/* Everything below is the Stage One to Eight experience, unchanged in
              behaviour and now rendered inside the shell. */}
          {destination === 'curriculum' && view.at === 'subjects' && (
            <PageTitle title={`Your ${ctx.workLabel.toLowerCase()} in ${levelInViewLabel}`}
                       lede="Choose a subject to see what you will learn, the lessons that teach it, and the materials that go with it." />
          )}

          {destination === 'explore' && view.at === 'subjects' && (
            <PageTitle title="Explore other learning"
                       lede="Look back at earlier learning or forward to what comes next. This does not change your own level." />
          )}

            {/* Period selector appears ONLY when the context has a period, and
                is named by the context's own noun. */}
            {view.at === 'subjects' && onCatalogue && activePeriod && (
              <div style={{ display: 'flex', gap: 6, marginTop: 18, flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em',
                               textTransform: 'uppercase', color: 'var(--muted)', marginRight: 4 }}>
                  {activePeriod.noun}
                </span>
                {Array.from({ length: activePeriod.count }, (_, i) => i + 1).map(p => (
                  <button key={p} className="nb-btn g"
                    onClick={() => setPeriod(period === p ? null : p)}
                    style={{
                      minHeight: 32, padding: '5px 12px', fontSize: 13,
                      borderColor: period === p ? 'var(--brand)' : 'var(--line)',
                      color: period === p ? 'var(--brand-700)' : 'var(--ink)',
                      background: period === p ? 'var(--brand-50)' : 'var(--card)',
                    }}>
                    {activePeriod.noun} {p}
                  </button>
                ))}
                <button className="nb-btn g" style={{ minHeight: 32, padding: '5px 12px', fontSize: 13 }}
                        onClick={() => setPeriod(null)}>All</button>
              </div>
            )}

            {/* Choosing another level now lives on the Explore destination and
                is a single control, rather than a wall of buttons occupying the
                learner's own home. The capability is unchanged. */}
            {destination === 'explore' && view.at === 'subjects' && (
              <div style={{ maxWidth: 380, marginTop: 20 }}>
                <Select
                  label="Show me learning for"
                  value={exploreLevel ?? ''}
                  placeholder="Choose a stage of education"
                  options={levels.map(l => ({ value: l.code, label: l.label }))}
                  onChange={v => setExploreLevel(v || null)}
                  hint="Your own level and progress are not affected."
                />
              </div>
            )}

            {/* ---------------- subjects ---------------- */}
            {/* The entry point exists only when the learner's level is configured
                to lead to an examination. Nothing here names one. */}
            {view.at === 'subjects' && onCatalogue && destination === 'curriculum' && ctx.examination && (
              <div className="nb-sec">
                <span className="nb-h2">Examination</span>
                <button className="nb-rank" style={{ marginTop: 8, textAlign: 'left' }}
                        onClick={() => setView({ at: 'exam' })}>
                  <div className="nb-rank-top">
                    <span className="nb-rank-name">Preparing for {ctx.examination.label}</span>
                    <span className="nb-rank-sub">
                      {exam === null
                        ? 'Opening'
                        : exam.topics.length === 0
                          ? 'No past questions loaded yet'
                          : `${exam.topics.length} ${exam.topics.length === 1 ? 'objective' : 'objectives'} covered`}
                    </span>
                  </div>
                </button>
              </div>
            )}

            {view.at === 'subjects' && onCatalogue && (
              <div className="nb-sec">
                <span className="nb-h2">Subjects</span>
                {offerings.length === 0 ? (
                  <div className="nb-note" style={{ marginTop: 10 }}>
                    <b>No subjects are set up for this level yet.</b> Subjects appear here once a
                    curriculum has been published for it.
                  </div>
                ) : (
                  <div className="nb-subjects" style={{ marginTop: 10 }}>
                    {offerings.map(o => (
                      <button key={o.id} className="nb-subj" onClick={() => openOffering(o)}>
                        <b>{o.subjectName}</b>
                        {/* The curriculum code and version are how the platform
                            files this subject, not something a learner needs. */}
                        <span>{o.isCore ? 'Core subject' : 'Elective subject'}</span>
                        {o.curriculum && !o.curriculum.isOfficial && (
                          <span style={{ marginTop: 9, display: 'block' }}><DemoBadge /></span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ---------------- hierarchy ---------------- */}
            {view.at === 'hierarchy' && (
              <>
                <div className="nb-sec">
                  <button className="nb-btn g" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                          onClick={() => setView({ at: 'subjects' })}>
                    All subjects
                  </button>
                </div>

                {view.offering.curriculum && !view.offering.curriculum.isOfficial && (
                  <div className="nb-note" style={{ borderColor: 'var(--warn)', background: 'var(--warn-bg)' }}>
                    <b>This is demonstration curriculum, not official content.</b> It exists so the
                    navigator can be tested while the official curriculum is empty.
                  </div>
                )}

                {tree.length === 0 ? (
                  <div className="nb-note">
                    <b>No curriculum has been authored for this subject yet.</b> Strands and topics
                    appear here once published.
                  </div>
                ) : tree.map(strand => (
                  <div className="nb-sec" key={strand.id}>
                    <span className="nb-h2">{strand.name}</span>
                    {strand.subStrands.map(ss => (
                      <div key={ss.id} style={{ marginTop: 12 }}>
                        <p className="nb-say" style={{ marginBottom: 8 }}>{ss.name}</p>
                        <div className="nb-ranks">
                          {ss.topics
                            .filter(t => !periodApplies || period === null || t.expectedPeriod === period)
                            .map(t => (
                              <div key={t.id}>
                                <button className="nb-rank" onClick={() => openTopicNode(t.id)}>
                                  <div className="nb-rank-top">
                                    <span className="nb-rank-name">{t.name}</span>
                                    {periodLabel(ctx, t.expectedPeriod) && (
                                      <span className="nb-rank-sub">{periodLabel(ctx, t.expectedPeriod)}</span>
                                    )}
                                    <span style={{ marginLeft: 'auto' }}>
                                      {t.objectiveCount === 0
                                        ? <span className="nb-pill flat">No content yet</span>
                                        : <span className="nb-pill flat">{t.objectiveCount} objectives</span>}
                                    </span>
                                  </div>
                                </button>

                                {openTopic === t.id && (
                                  <div style={{ padding: '0 13px 12px' }}>
                                    {t.objectiveCount === 0 ? (
                                      <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)' }}>
                                        No learning objectives have been authored for this topic yet.
                                      </p>
                                    ) : objectives.length === 0 ? (
                                      <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)' }}>Loading</p>
                                    ) : objectives.map(ob => (
                                      <button key={ob.id} className="nb-rank"
                                              onClick={() => openObjective(view.offering, ob.id)}>
                                        <div className="nb-rank-top">
                                          <code style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand-700)' }}>
                                            {ob.fullCode}
                                          </code>
                                          <span className="nb-rank-name" style={{ fontWeight: 500 }}>{ob.text}</span>
                                          <span style={{ marginLeft: 'auto' }}>
                                            <span className={`nb-pill ${STATE_TONE[ob.state]}`}>
                                              {STATE_LABEL[ob.state]}
                                            </span>
                                          </span>
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          {ss.topics.filter(t => !periodApplies || period === null || t.expectedPeriod === period).length === 0 && (
                            <p style={{ padding: '12px 13px', margin: 0, fontSize: 13, color: 'var(--muted)' }}>
                              No topics for this {activePeriod ? activePeriod.noun.toLowerCase() : 'period'}.
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}

            {/* ---------------- objective page ---------------- */}
            {view.at === 'objective' && (
              <>
                <div className="nb-sec">
                  <button className="nb-btn g" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                          onClick={() => openOffering(view.offering)}>
                    Back to {view.offering.subjectName}
                  </button>
                </div>

                {!detail ? (
                  <p className="nb-say">Loading</p>
                ) : (
                  <>
                    <div className="nb-card">
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                        <code style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand-700)' }}>
                          {detail.fullCode}
                        </code>
                        <span className={`nb-pill ${STATE_TONE[detail.progress.state]}`}>
                          {STATE_LABEL[detail.progress.state]}
                        </span>
                        {detail.position.curriculum && !detail.position.curriculum.isOfficial && <DemoBadge />}
                      </div>
                      <p style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6 }}>{detail.text}</p>
                      {detail.competency && (
                        <p style={{ marginTop: 8, fontSize: 13.5, color: 'var(--muted)' }}>
                          Competency: {detail.competency}
                        </p>
                      )}
                      <p style={{ marginTop: 12, fontSize: 12.5, color: 'var(--muted)' }}>
                        {[detail.position.subject, detail.position.strand,
                          detail.position.subStrand, detail.position.topic].filter(Boolean).join(' → ')}
                        {periodLabel(ctx, detail.expectedPeriod) ? ` · ${periodLabel(ctx, detail.expectedPeriod)}` : ''}
                      </p>
                    </div>

                    <div className="nb-sec">
                      <span className="nb-h2">Before you learn this</span>
                      {detail.prerequisites.length === 0 ? (
                        // No section is invented when the curriculum records nothing.
                        <p className="nb-say">No prerequisites are recorded for this objective.</p>
                      ) : (
                        <>
                          {/* A prerequisite is a suggestion, never a lock. Nothing
                              on this page prevents opening the current objective. */}
                          <p className="nb-say">
                            The curriculum records these as useful to learn first. You can
                            still learn this objective now.
                          </p>
                          <div className="nb-ranks" style={{ marginTop: 8 }}>
                          {detail.prerequisites.map(p => (
                            <button key={p.id} className="nb-rank"
                                    onClick={() => openObjective(
                                      // Open it in the subject it actually belongs to.
                                      offerings.find(o => o.id === p.offeringId) ?? view.offering,
                                      p.id,
                                    )}>
                              <div className="nb-rank-top">
                                <code style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand-700)' }}>
                                  {p.fullCode}
                                </code>
                                <span className="nb-rank-name" style={{ fontWeight: 500 }}>{p.text}</span>
                                <span style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                                  {/* The learner's existing state. NO_CONTENT reads as
                                      "No content yet", never as 0% or Not started. */}
                                  <span className={`nb-pill ${STATE_TONE[p.state]}`}>{STATE_LABEL[p.state]}</span>
                                  <span className="nb-pill flat">{p.strength === 'REQUIRED' ? 'Required' : 'Helpful'}</span>
                                </span>
                              </div>
                              {(p.subject || p.topic) && (
                                <p className="nb-rank-sub" style={{ margin: '4px 0 0' }}>
                                  {[p.subject, p.topic].filter(Boolean).join(' → ')}
                                </p>
                              )}
                            </button>
                          ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="nb-sec">
                      <span className="nb-h2">Lessons</span>
                      {detail.lessons.length === 0 ? (
                        <p className="nb-say">No approved lesson is available for this objective yet.</p>
                      ) : (
                        <div className="nb-ranks" style={{ marginTop: 8 }}>
                          {detail.lessons.map(l => (
                            <button key={l.id} className="nb-rank"
                                    onClick={() => enterLesson(view.offering, detail.id, l.id)}>
                              <div className="nb-rank-top">
                                <span className="nb-rank-name">{l.title}</span>
                                <span className="nb-rank-sub">
                                  {l.steps} steps{l.minutes ? ` · ${l.minutes} min` : ''}
                                </span>
                                <span style={{ marginLeft: 'auto' }}>
                                  <span className="nb-pill flat">Open</span>
                                </span>
                              </div>
                              {l.summary && <p className="nb-rank-sub" style={{ margin: '4px 0 0' }}>{l.summary}</p>}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="nb-sec">
                      <span className="nb-h2">Learning materials</span>
                      {detail.resources.length === 0 ? (
                        <p className="nb-say">No approved materials are attached to this objective yet.</p>
                      ) : (
                        <div className="nb-ranks" style={{ marginTop: 8 }}>
                          {detail.resources.map(r => (
                            <button key={r.id} className="nb-rank"
                                    onClick={() => enterResource(view.offering, detail.id, r.id)}>
                              <div className="nb-rank-top">
                                <span className="nb-rank-name">{r.title}</span>
                                <span className="nb-rank-sub">
                                  {[
                                    r.kind.replace(/_/g, ' ').toLowerCase(),
                                    runtime(r.durationSeconds),
                                    fileSize(r.sizeBytes),
                                    r.hasLite ? 'low-data version available' : null,
                                    r.downloadable ? 'can be saved' : null,
                                  ].filter(Boolean).join(' · ')}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="nb-sec">
                      <span className="nb-h2">Practice</span>
                      {detail.practiceCount === 0 ? (
                        <p className="nb-say">No practice questions are available for this objective yet.</p>
                      ) : (
                        <>
                          <p className="nb-say">
                            {detail.practiceCount} practice {detail.practiceCount === 1 ? 'question is' : 'questions are'} available.
                            Practice is for your own learning and is not part of your official record.
                          </p>
                          <button className="nb-btn" style={{ marginTop: 10 }}
                                  onClick={() => enterPractice(view.offering, detail.id)}>
                            Start practice
                          </button>
                        </>
                      )}
                    </div>

                    <div className="nb-sec">
                      <span className="nb-h2">{ctx.progressLabel}</span>
                      {detail.progress.state === 'NO_CONTENT' ? (
                        <div className="nb-note">
                          <b>There is nothing to complete yet.</b> This objective has no approved
                          lessons, so there is no progress to report. This is not the same as not
                          having started.
                        </div>
                      ) : (
                        <p className="nb-say">
                          {detail.progress.lessonsCompleted} of {detail.progress.lessonsTotal} lessons completed.
                        </p>
                      )}
                    </div>
                  </>
                )}
              </>
            )}

            {/* ---------------- lesson player ---------------- */}
            {view.at === 'lesson' && (
              <>
                <div className="nb-sec">
                  <button className="nb-btn g" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                          onClick={() => openObjective(view.offering, view.objectiveId)}>
                    Back to the objective
                  </button>
                </div>

                {lessonMissing ? (
                  <div className="nb-note">
                    <b>This lesson is not available.</b> It may not have been approved for learners
                    yet. Nothing has been removed from your progress.
                  </div>
                ) : !lesson ? (
                  <p className="nb-say">Opening the lesson</p>
                ) : (
                  <>
                    <div className="nb-card">
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                        <h2 style={{ margin: 0, fontSize: 19, fontWeight: 700 }}>{lesson.title}</h2>
                        {lesson.progress?.status === 'COMPLETED' && (
                          <span className="nb-pill good">Completed</span>
                        )}
                        {lesson.curriculum && !lesson.curriculum.isOfficial && <DemoBadge />}
                      </div>
                      {lesson.summary && (
                        <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--ink-2)' }}>{lesson.summary}</p>
                      )}
                      <p style={{ margin: '10px 0 0', fontSize: 12.5, color: 'var(--muted)' }}>
                        {[lesson.position.subject, lesson.position.strand,
                          lesson.position.subStrand, lesson.position.topic].filter(Boolean).join(' → ')}
                        {lesson.minutes ? ` · ${lesson.minutes} min` : ''}
                      </p>
                      {lesson.objectives.length > 0 && (
                        <p style={{ margin: '8px 0 0', fontSize: 12.5, color: 'var(--muted)' }}>
                          Teaches {lesson.objectives.map(o => o.fullCode).join(', ')}
                        </p>
                      )}
                    </div>

                    {lesson.steps.length === 0 ? (
                      <div className="nb-note">
                        <b>This lesson has no steps yet.</b> Its content has not been authored, so
                        there is nothing to work through. This is not something you have failed to
                        start.
                      </div>
                    ) : (
                      <>
                        <div className="nb-steps" role="progressbar"
                             aria-valuenow={step + 1} aria-valuemax={lesson.steps.length}>
                          {lesson.steps.map((s, n) => (
                            <i key={s.id} className={n < step ? 'done' : n === step ? 'now' : ''} />
                          ))}
                        </div>

                        <div className="nb-card">
                          <span className="nb-stage">
                            Step {step + 1} of {lesson.steps.length}
                            {lesson.steps[step].kind ? ` · ${lesson.steps[step].kind.replace(/_/g, ' ').toLowerCase()}` : ''}
                          </span>
                          {lesson.steps[step].title && (
                            <h3 style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 700,
                                         letterSpacing: '-.02em' }}>
                              {lesson.steps[step].title}
                            </h3>
                          )}
                          {/* Authored prose, with its paragraphs and emphasis
                              intact, and the diagram the step asks for. */}
                          {lesson.steps[step].body
                            ? <Prose text={lesson.steps[step].body} />
                            : <p className="nb-say">This step has no content yet.</p>}

                          <Diagram name={
                            (lesson.steps[step].payload as { diagram?: string })?.diagram
                          } />

                          {/* A check inside the lesson, drawn from the very
                              objective this lesson teaches, so the question is
                              always about what was just explained. */}
                          {lesson.steps[step].kind === 'CHECK' && lesson.objectives[0] && (
                            <InlineCheck objectiveId={lesson.objectives[0].id} />
                          )}

                          <div className="nb-acts">
                            <button className="nb-btn g" disabled={step === 0}
                                    style={{ opacity: step === 0 ? 0.45 : 1 }}
                                    onClick={() => goToStep(step - 1)}>
                              Previous
                            </button>
                            {step < lesson.steps.length - 1 ? (
                              <button className="nb-btn p" onClick={() => goToStep(step + 1)}>Next</button>
                            ) : lesson.progress?.status === 'COMPLETED' ? (
                              <>
                                {/* Finishing a lesson should lead somewhere. The
                                    next lesson comes from the order the
                                    curriculum declares, not from a guess. */}
                                {upNext && (
                                  <button className="nb-btn p" onClick={() => {
                                    const o = offerings.find(x => x.id === upNext.offeringId) ?? view.offering
                                    enterLesson(o, upNext.objectiveId ?? view.objectiveId, upNext.lessonId)
                                  }}>
                                    Continue to {upNext.lessonTitle}
                                  </button>
                                )}
                                <button className="nb-btn g" onClick={() => {
                                  if (!ctx) return
                                  restartLesson(ctx.studentId, lesson.id)
                                    .then(() => enterLesson(view.offering, view.objectiveId, lesson.id))
                                    .catch(e => setError(String(e)))
                                }}>
                                  Start again
                                </button>
                              </>
                            ) : (
                              <button className="nb-btn p" onClick={() => {
                                if (!ctx) return
                                completeLesson(ctx.studentId, lesson.id, step)
                                  .then(() => enterLesson(view.offering, view.objectiveId, lesson.id))
                                  .catch(e => setError(String(e)))
                              }}>
                                Mark as complete
                              </button>
                            )}
                          </div>
                        </div>

                        {lesson.progress && lesson.progress.status !== 'COMPLETED'
                          && lesson.progress.lastStep > 0 && step === lesson.progress.lastStep && (
                          <div className="nb-note">
                            Resumed where you left off, at step {lesson.progress.lastStep + 1}.
                          </div>
                        )}
                      </>
                    )}

                    <div className="nb-sec">
                      <span className="nb-h2">Materials for this lesson</span>
                      {lessonResources.length === 0 ? (
                        <p className="nb-say">No approved materials are attached to this lesson.</p>
                      ) : (
                        <div className="nb-ranks" style={{ marginTop: 8 }}>
                          {lessonResources.map(r => (
                            <button key={r.id} className="nb-rank"
                                    onClick={() => enterResource(view.offering, view.objectiveId, r.id)}>
                              <div className="nb-rank-top">
                                <span className="nb-rank-name">{r.title}</span>
                                <span className="nb-rank-sub">
                                  {[r.kind.replace(/_/g, ' ').toLowerCase(),
                                    runtime(r.durationSeconds), fileSize(r.sizeBytes),
                                    r.unavailable ? 'not available yet' : null,
                                  ].filter(Boolean).join(' · ')}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </>
            )}

            {/* ---------------- resource viewer ---------------- */}
            {view.at === 'resource' && (
              <>
                <div className="nb-sec">
                  <button className="nb-btn g" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                          onClick={() => openObjective(view.offering, view.objectiveId)}>
                    Back to the objective
                  </button>
                </div>

                {resourceMissing ? (
                  <div className="nb-note">
                    <b>This material is not available.</b> It may not have been approved for learners
                    yet. Nothing has been removed from your progress.
                  </div>
                ) : !resource ? (
                  <p className="nb-say">Opening the material</p>
                ) : (
                  <ResourceView r={resource} useLite={useLite} onLite={setUseLite} />
                )}
              </>
            )}

            {/* ---------------- examination preparation ---------------- */}
            {view.at === 'exam' && (
              <>
                <div className="nb-sec">
                  <button className="nb-btn g" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                          onClick={() => setView({ at: 'subjects' })}>
                    Back to subjects
                  </button>
                </div>

                {!ctx.examination ? (
                  // Unreachable through the interface, but stated rather than
                  // assumed: no configured examination means no experience.
                  <p className="nb-say">Your level does not lead to an examination.</p>
                ) : !exam ? (
                  <p className="nb-say">Opening examination preparation</p>
                ) : (
                  <>
                    <div className="nb-card">
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                        <h2 style={{ margin: 0, fontSize: 19, fontWeight: 700 }}>{exam.name}</h2>
                        {/* Urgency is configuration, never a computed countdown. */}
                        {exam.imminent && <span className="nb-pill warn">Coming up this year</span>}
                      </div>
                      <p style={{ margin: '10px 0 0', fontSize: 12.5, color: 'var(--muted)' }}>
                        {[exam.code, exam.authority].filter(Boolean).join(' · ')}
                      </p>
                      {!exam.imminent && (
                        <p style={{ margin: '8px 0 0', fontSize: 13.5, color: 'var(--ink-2)' }}>
                          This is the examination your level leads to. There is time yet.
                        </p>
                      )}
                    </div>

                    {exam.topics.length === 0 ? (
                      // The honest state for this platform today. Past questions
                      // are official examination material and have not been
                      // loaded; inventing them would be a lie about provenance.
                      <div className="nb-note" style={{ marginTop: 12 }}>
                        <b>No past {exam.name} questions have been loaded yet.</b>
                        <p style={{ margin: '8px 0 0', fontSize: 13.5 }}>
                          Official examination material has not been added to the platform.
                          When past papers are loaded, the objectives each question tests
                          will appear here, so you can see exactly what to learn.
                        </p>
                        <p style={{ margin: '8px 0 0', fontSize: 13.5 }}>
                          The demonstration questions in this build carry no examination
                          source, and are deliberately not shown here as though they did.
                        </p>
                      </div>
                    ) : (
                      <div className="nb-sec">
                        <span className="nb-h2">What this examination tests</span>
                        <p className="nb-say">
                          Each row is a learning objective that real past questions have tested.
                        </p>
                        <div className="nb-ranks" style={{ marginTop: 8 }}>
                          {exam.topics.map(t => (
                            <button key={t.objectiveId} className="nb-rank" style={{ textAlign: 'left' }}
                                    onClick={() => {
                                      const o = offerings.find(x => x.subjectName === t.subject) ?? offerings[0]
                                      if (o) enterPractice(o, t.objectiveId, exam.code)
                                    }}>
                              <div className="nb-rank-top">
                                <span className="nb-rank-name">{t.fullCode}  {t.objectiveText}</span>
                                <span className="nb-rank-sub">
                                  {[t.subject, t.topic,
                                    `${t.questionCount} past ${t.questionCount === 1 ? 'question' : 'questions'}`,
                                    yearRange(t.years),
                                    t.papers.length > 0 ? t.papers.join(', ') : null,
                                  ].filter(Boolean).join(' · ')}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}

            {/* ---------------- practice ---------------- */}
            {view.at === 'practice' && (
              <>
                <div className="nb-sec" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <button className="nb-btn g" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                          onClick={() => openObjective(view.offering, view.objectiveId)}>
                    Back to the objective
                  </button>
                  {view.sourceExam && (
                    <button className="nb-btn g" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                            onClick={() => setView({ at: 'exam' })}>
                      Back to {view.sourceExam}
                    </button>
                  )}
                </div>

                {/* Practice is labelled as practice everywhere it appears, so it
                    can never be mistaken for an examination result. Practising
                    past questions is still practice. */}
                <div className="nb-note">
                  <b>This is practice.</b>{' '}
                  {view.sourceExam
                    ? `These are past ${view.sourceExam} questions, used here for your own preparation.`
                    : 'It is here to help you check your own understanding.'}{' '}
                  Nothing you do here goes into your official school record.
                </div>

                {!questions ? (
                  <p className="nb-say">Loading practice</p>
                ) : questions.length === 0 ? (
                  <p className="nb-say">No practice questions are available for this objective yet.</p>
                ) : practiceDone ? (
                  <PracticeSummaryView
                    summary={summarise(marks)}
                    total={questions.length}
                    onRetry={() => enterPractice(view.offering, view.objectiveId)}
                    onBack={() => openObjective(view.offering, view.objectiveId)}
                  />
                ) : (
                  <QuestionView
                    q={questions[qIndex]}
                    index={qIndex}
                    total={questions.length}
                    answer={answers.get(questions[qIndex].id)}
                    marked={marks.get(questions[qIndex].id) ?? null}
                    submitting={submitting}
                    onAnswer={v => setAnswers(a => new Map(a).set(questions[qIndex].id, v))}
                    onSubmit={() => submitCurrent(questions[qIndex])}
                    onPrev={() => setQIndex(i => Math.max(0, i - 1))}
                    onNext={() => {
                      if (qIndex + 1 < questions.length) setQIndex(i => i + 1)
                      else setPracticeDone(true)
                    }}
                  />
                )}
              </>
            )}

          {/* Destinations whose content belongs to a later stage. Said plainly
              rather than shown as an empty page that looks broken. */}
          {/* Continue learning, built from the learner's own progress record. */}
          {destination === 'continue' && (
            <>
              <PageTitle title="Continue learning"
                         lede="Pick up where you stopped, or start the next thing in your curriculum." />
              {resumeLoading ? (
                <div style={{ marginTop: 20 }}><LoadingBlock rows={1} title={false} /></div>
              ) : !resume ? (
                <div style={{ marginTop: 20 }}>
                  <EmptyState
                    title="Nothing to continue yet"
                    say="Once you open a lesson it will appear here so you can carry on from where you stopped."
                    action={<button className="nb-btn p" onClick={() => navigateTo('curriculum')}>
                      Go to my curriculum
                    </button>} />
                </div>
              ) : (
                <div className="nb-card" style={{ marginTop: 20, maxWidth: 560 }}>
                  <span className="nb-stage">{resume.subjectName}</span>
                  <h3 style={{ margin: '6px 0 0', fontSize: 19, fontWeight: 700, letterSpacing: '-.02em' }}>
                    {resume.lessonTitle}
                  </h3>
                  <p className="nb-metaline" style={{ marginTop: 6 }}>
                    {[resume.topicName,
                      resume.position ? `Lesson ${resume.position.index} of ${resume.position.total}` : null,
                    ].filter(Boolean).join(' · ')}
                  </p>
                  {/* Said plainly. No percentage is invented for a lesson. */}
                  <p className="nb-say" style={{ margin: '10px 0 0' }}>
                    {resume.status === 'IN_PROGRESS'
                      ? `You stopped at step ${resume.lastStep + 1}.`
                      : 'You have not started this one yet.'}
                  </p>
                  <div style={{ marginTop: 16 }}>
                    <button className="nb-btn p" onClick={() => {
                      const o = offerings.find(x => x.id === resume.offeringId)
                      if (o) enterLesson(o, resume.objectiveId ?? '', resume.lessonId)
                    }}>
                      {resume.status === 'IN_PROGRESS' ? 'Continue this lesson' : 'Start this lesson'}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {['home', 'progress', 'profile', 'settings'].includes(destination) && (
            <EmptyState
              title={`${heading} is being built next`}
              say="The foundation for this part of your learning space is in place. Use Learn to reach your subjects, lessons, materials and practice in the meantime."
              action={<button className="nb-btn p" onClick={() => navigateTo('curriculum')}>Go to my curriculum</button>}
            />
          )}
        </>
      </>
    </LearnerShell>
  )
}

/**
 * One practice question.
 *
 * The answer key is not present in this component's data, because the server
 * never sent one. Correctness arrives only after submission, from the server,
 * in `marked`. Nothing here decides whether an answer is right.
 */
function QuestionView({ q, index, total, answer, marked, submitting,
                        onAnswer, onSubmit, onPrev, onNext }: {
  q: PracticeQuestion; index: number; total: number
  answer: unknown; marked: Marked | null; submitting: boolean
  onAnswer: (v: unknown) => void; onSubmit: () => void
  onPrev: () => void; onNext: () => void
}) {
  const locked = marked !== null

  return (
    <>
      <div className="nb-card">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          <span className="nb-pill">Question {index + 1} of {total}</span>
          {q.difficulty && <span className="nb-rank-sub">{q.difficulty.toLowerCase()}</span>}
          <span className="nb-rank-sub">{q.marks} {q.marks === 1 ? 'mark' : 'marks'}</span>
          {/* Provenance only when the question actually carries it. */}
          {q.source && (
            <span className="nb-pill">
              {[q.source.exam, q.source.year, q.source.paper].filter(Boolean).join(' ')}
            </span>
          )}
          {!q.autoMarkable && <span className="nb-pill">Marked by your teacher</span>}
        </div>

        <p style={{ margin: '12px 0 0', fontSize: 15, lineHeight: 1.55 }}>{q.stem}</p>

        <div style={{ marginTop: 14, display: 'grid', gap: 8 }}>
          {q.kind === 'MULTIPLE_CHOICE' && q.options.map(o => (
            <button key={o.key} className={`nb-rank ${answer === o.key ? 'sel' : ''}`}
                    disabled={locked}
                    style={{ textAlign: 'left', opacity: locked && answer !== o.key ? 0.55 : 1 }}
                    onClick={() => onAnswer(o.key)}>
              <span className="nb-rank-name"><b>{o.key}</b>  {o.text}</span>
            </button>
          ))}

          {q.kind === 'TRUE_FALSE' && [true, false].map(v => (
            <button key={String(v)} className={`nb-rank ${answer === v ? 'sel' : ''}`}
                    disabled={locked}
                    style={{ textAlign: 'left', opacity: locked && answer !== v ? 0.55 : 1 }}
                    onClick={() => onAnswer(v)}>
              <span className="nb-rank-name">{v ? 'True' : 'False'}</span>
            </button>
          ))}

          {q.kind === 'NUMERIC' && (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input className="nb-input" type="number" disabled={locked}
                     value={answer === undefined || answer === null ? '' : String(answer)}
                     placeholder={q.placeholder ?? 'Enter a number'}
                     onChange={e => onAnswer(e.target.value)} />
              {q.unit && <span className="nb-rank-sub">{q.unit}</span>}
            </div>
          )}

          {q.kind === 'SHORT_ANSWER' && (
            <input className="nb-input" disabled={locked}
                   value={answer === undefined || answer === null ? '' : String(answer)}
                   placeholder={q.placeholder ?? 'Type your answer'}
                   onChange={e => onAnswer(e.target.value)} />
          )}

          {(q.kind === 'ESSAY' || q.kind === 'STRUCTURED') && (
            <textarea className="nb-input" rows={7} disabled={locked}
                      value={answer === undefined || answer === null ? '' : String(answer)}
                      placeholder={q.placeholder ?? 'Write your answer'}
                      onChange={e => onAnswer(e.target.value)} />
          )}

          {/* A kind this interface has not been taught to collect. Said plainly
              rather than showing an input that would submit nothing useful. */}
          {!['MULTIPLE_CHOICE','TRUE_FALSE','NUMERIC','SHORT_ANSWER','ESSAY','STRUCTURED'].includes(q.kind) && (
            <p className="nb-say">
              This question is answered outside the app, as a {q.kind.replace(/_/g, ' ').toLowerCase()}.
            </p>
          )}
        </div>
      </div>

      {marked && (
        <div className="nb-note" style={{ marginTop: 12 }}>
          {marked.needsReview ? (
            <>
              <b>Answer recorded. Awaiting review.</b> This question is marked by a person,
              so there is no score yet. It has not been marked wrong.
            </>
          ) : marked.isCorrect ? (
            <><b>Correct.</b></>
          ) : (
            <><b>Not correct.</b></>
          )}
          {/* Only the explanation the question actually stores. Nothing generated. */}
          {!marked.needsReview && (
            <p style={{ margin: '8px 0 0', fontSize: 13.5 }}>
              {marked.explanation ?? 'No explanation has been recorded for this question yet.'}
            </p>
          )}
        </div>
      )}

      <div className="nb-sec" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button className="nb-btn g" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                disabled={index === 0} onClick={onPrev}>
          Previous
        </button>
        {!locked ? (
          <button className="nb-btn" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                  disabled={answer === undefined || answer === null || answer === '' || submitting}
                  onClick={onSubmit}>
            {submitting ? 'Submitting' : 'Submit answer'}
          </button>
        ) : (
          <button className="nb-btn" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                  onClick={onNext}>
            {index + 1 < total ? 'Next question' : 'Finish practice'}
          </button>
        )}
      </div>
    </>
  )
}

/**
 * What the practice came to.
 *
 * Questions awaiting review are reported separately and never counted as
 * wrong. When nothing could be marked automatically there is no percentage,
 * and the interface says so instead of showing zero.
 */
function PracticeSummaryView({ summary, total, onRetry, onBack }: {
  summary: ReturnType<typeof summarise>; total: number
  onRetry: () => void; onBack: () => void
}) {
  return (
    <>
      <div className="nb-card">
        <h2 style={{ margin: 0, fontSize: 19, fontWeight: 700 }}>Practice finished</h2>
        <p style={{ margin: '10px 0 0', fontSize: 14, color: 'var(--ink-2)' }}>
          You answered {summary.answered} of {total}.
        </p>

        {summary.percentage === null ? (
          <p style={{ margin: '10px 0 0', fontSize: 14 }}>
            None of these questions could be marked automatically, so there is no score to show.
          </p>
        ) : (
          <p style={{ margin: '10px 0 0', fontSize: 14 }}>
            <b>{summary.correct} correct</b> and {summary.incorrect} not correct,
            out of the {summary.correct + summary.incorrect} marked automatically
            ({summary.percentage}%).
          </p>
        )}

        {summary.awaitingReview > 0 && (
          <p style={{ margin: '8px 0 0', fontSize: 13.5, color: 'var(--muted)' }}>
            {summary.awaitingReview} {summary.awaitingReview === 1 ? 'question is' : 'questions are'} waiting
            to be marked by a person. They are not counted above.
          </p>
        )}

        <p style={{ margin: '12px 0 0', fontSize: 12.5, color: 'var(--muted)' }}>
          This was practice. It has not been added to your official record.
        </p>
      </div>

      {/* Practice returns the learner to learning rather than ending the path. */}
      <div className="nb-sec" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button className="nb-btn" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                onClick={onBack}>
          Back to the objective
        </button>
        <button className="nb-btn g" style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                onClick={onRetry}>
          Practise again
        </button>
      </div>
    </>
  )
}

/** A URI the browser can actually fetch. Demonstration URIs deliberately are not. */
function isPlayable(uri: string | null): uri is string {
  return Boolean(uri && /^https?:\/\//i.test(uri))
}

/**
 * The resource viewer.
 *
 * Presentation follows `kind`, which is the authored fact, never the file
 * extension. Every figure shown here is read from the row: nothing about size,
 * runtime or page count is estimated, and where a row carries no figure the
 * interface says nothing rather than guessing.
 *
 * There is no progress bar. Resource progress is not recorded anywhere, so
 * drawing one would be inventing a fact the platform does not hold.
 */
function ResourceView({ r, useLite, onLite }: {
  r: Resource; useLite: boolean; onLite: (v: boolean) => void
}) {
  const active = useLite && r.lite ? r.lite.uri : r.uri ?? r.lite?.uri ?? null
  const activeSize = useLite && r.lite ? r.lite.sizeBytes : r.sizeBytes

  const facts = [
    r.author, r.publisher,
    runtime(r.durationSeconds),
    r.pageCount ? `${r.pageCount} pages` : null,
    fileSize(activeSize),
    r.language ? r.language.toUpperCase() : null,
  ].filter(Boolean)

  return (
    <>
      <div className="nb-card">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0, fontSize: 19, fontWeight: 700 }}>{r.title}</h2>
          <span className="nb-pill">{r.kind.replace(/_/g, ' ').toLowerCase()}</span>
          {r.title.includes('[DEMO]') && <DemoBadge />}
        </div>
        {facts.length > 0 && (
          <p style={{ margin: '10px 0 0', fontSize: 12.5, color: 'var(--muted)' }}>
            {facts.join(' · ')}
          </p>
        )}
      </div>

      {/* Approved, but nothing was ever attached. Said plainly rather than
          rendering an empty player. */}
      {r.unavailable ? (
        <div className="nb-note">
          <b>There is no file for this material yet.</b> It has been approved, but the
          file has not been uploaded. Nothing is missing from your side.
        </div>
      ) : (
        <>
          {r.lite && (
            <div className="nb-sec" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <button className={`nb-btn ${useLite ? 'g' : ''}`}
                      style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                      onClick={() => onLite(false)}>
                Full version{fileSize(r.sizeBytes) ? ` · ${fileSize(r.sizeBytes)}` : ''}
              </button>
              <button className={`nb-btn ${useLite ? '' : 'g'}`}
                      style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}
                      onClick={() => onLite(true)}>
                Low-data version{fileSize(r.lite.sizeBytes) ? ` · ${fileSize(r.lite.sizeBytes)}` : ''}
              </button>
            </div>
          )}
          {!r.lite && r.viewer === 'VIDEO' && (
            <p className="nb-say" style={{ marginTop: 8 }}>
              No low-data version has been prepared for this video.
            </p>
          )}

          <div className="nb-card" style={{ marginTop: 12 }}>
            {!isPlayable(active) ? (
              // A demonstration placeholder. Saying so is better than a player
              // that silently fails in front of the person being shown it.
              <div style={{
                display: 'grid', placeItems: 'center', minHeight: 200, textAlign: 'center',
                border: '1px dashed var(--line)', borderRadius: 10, padding: 20,
              }}>
                <div>
                  <p style={{ margin: 0, fontWeight: 650, fontSize: 14 }}>
                    Demonstration material
                  </p>
                  <p style={{ margin: '6px 0 0', fontSize: 12.5, color: 'var(--muted)' }}>
                    This entry carries no real file. The viewer, the low-data option and the
                    save option all work; only the file itself is a placeholder.
                  </p>
                </div>
              </div>
            ) : r.viewer === 'VIDEO' ? (
              <video src={active} controls style={{ width: '100%', borderRadius: 10, background: '#000' }} />
            ) : r.viewer === 'AUDIO' ? (
              <audio src={active} controls style={{ width: '100%' }} />
            ) : r.viewer === 'DOCUMENT' ? (
              <iframe src={active} title={r.title}
                      style={{ width: '100%', height: '70vh', border: '1px solid var(--line)', borderRadius: 10 }} />
            ) : (
              <a className="nb-btn" href={active} target="_blank" rel="noreferrer">Open this material</a>
            )}
          </div>

          <div className="nb-sec">
            {r.downloadable ? (
              isPlayable(active) ? (
                <a className="nb-btn g" href={active} download
                   style={{ minHeight: 34, padding: '6px 13px', fontSize: 13 }}>
                  Save for offline{fileSize(activeSize) ? ` · ${fileSize(activeSize)}` : ''}
                </a>
              ) : (
                <p className="nb-say">
                  This material may be saved for offline use once its file is attached.
                </p>
              )
            ) : (
              <p className="nb-say">
                This material can be read here but not saved, as set by whoever approved it.
              </p>
            )}
          </div>
        </>
      )}
    </>
  )
}
