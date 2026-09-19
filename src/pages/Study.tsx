/**
 * The learner surface.
 *
 * Runs with nothing in the database: the course is the model source described
 * in `capability.ts`, the decisions come from `mastery.ts`, and the profile and
 * attempts sit on the device so a learner can start immediately and still be
 * met where they left off tomorrow.
 *
 * The page is an exercise book. Marking lives in the margin, which is where it
 * lives on paper, and the order of what appears is the adaptive model's rather
 * than the syllabus's: what is going wrong comes before what is next.
 */

import { useCallback, useEffect, useMemo, useState } from 'react'
import '../styles/study.css'
import Balance from '../components/study/Balance'
import Front from './Front'
import CreateProfile from './CreateProfile'
import SignIn from './SignIn'
import Learners from './Learners'
import School from './School'
import Subjects from './Subjects'
import Tutor from '../components/Tutor'
import SyllabusLearn from './Learn'
import { readinessOf, subjectById } from '../lib/education/subjects'
import { syllabusFor } from '../lib/education/syllabus'
import KidApp from './KidApp'
import TeenApp from './TeenApp'
import ScholarApp from './ScholarApp'
import { learnedBrief } from '../lib/education/adapt'

/**
 * The subjects that have a course written out in full.
 *
 * Exactly one today. Every other subject is taught by the tutor from its
 * syllabus outline, on the `Learn` screen, which is the normal path rather
 * than the degraded one. A written course wins where it exists because its
 * explanations were checked by a person.
 */
const WRITTEN = { 'jhs:maths': MATHS_JHS2 } as const
import Arrive from './Arrive'
import { MATHS_JHS2 } from '../lib/education/library/maths-jhs2'
import {
  isRight, objectiveOf, outlineOf, questionsAt,
  type Objective, type Question,
} from '../lib/education/course'
import {
  masteryOf, nextStep, pictureOf,
  type Attempt, type MasteryState, type ObjectiveMastery,
} from '../lib/education/mastery'
import {
  greeting, opensWithTeaching, purposeLine,
  reliefFor, skinFor, startingLevel,
  type LearnerProfile, type Stage,
} from '../lib/education/learner'
import {
  accountById, addLearnerTo, attemptsFor, learnerById, learnersFor,
  loadSession, saveAttempts, saveLearner, saveSession, signOut,
  type Account, type Created,
} from '../lib/education/accounts'

/**
 * Where the visitor is in the shell.
 *
 * A learner with a session goes straight to their course. A parent or school
 * goes to their roll, and picking a child opens that child's own page, which is
 * the same course screen a learner sees, because a child's page is not a
 * cut down view of their parent's.
 */
type Gate =
  | { at: 'front' }
  | { at: 'create' }
  | { at: 'signin' }
  | { at: 'arrive' }
  /** A parent's flat roll, or a school's classes. */
  | { at: 'roll' }
  /** The learner's own page: which subject, and how to teach them. */
  | { at: 'subjects' }
  /** `topicId` when the learner tapped a topic rather than a subject. */
  | { at: 'course', topicId?: string }

const STATE_WORD: Record<MasteryState, { word: string; cls: string }> = {
  SECURE:     { word: 'secure',      cls: 'is-secure' },
  DEVELOPING: { word: 'in progress', cls: 'is-going' },
  SHAKY:      { word: 'needs work',  cls: 'is-shaky' },
  STALE:      { word: 'gone cold',   cls: 'is-cold' },
  UNSEEN:     { word: 'not started', cls: 'is-new' },
}

type View =
  | { at: 'home' }
  | { at: 'learn'; objectiveId: string }
  | { at: 'practice'; objectiveId: string; level: number }

function Tick({ wrong }: { wrong?: boolean }) {
  if (wrong) {
    return (
      <svg className="nx-mark-svg is-wrong" width="18" height="18" viewBox="0 0 20 20" aria-hidden>
        <path d="M4.5 4.5 L15.5 15.5" />
        <path d="M15.5 4.5 L4.5 15.5" />
      </svg>
    )
  }
  return (
    <svg className="nx-mark-svg" width="22" height="19" viewBox="0 0 22 19" aria-hidden>
      <path d="M2.5 10 L7.5 15.5 L19.5 2.5" />
    </svg>
  )
}

export default function Study() {
  const course = MATHS_JHS2
  const outline = useMemo(() => outlineOf(course), [course])

  /* A session is read once on mount, so returning to the page lands you back
     where you were rather than on the front page again. */
  const [account, setAccount] = useState<Account | null>(() => {
    const s = loadSession()
    return s ? accountById(s.accountId) : null
  })
  const [profile, setProfile] = useState<LearnerProfile | null>(() => {
    const s = loadSession()
    return s?.activeLearnerId ? learnerById(s.activeLearnerId) : null
  })
  const [attempts, setAttempts] = useState<Attempt[]>(() => {
    const s = loadSession()
    return s?.activeLearnerId ? attemptsFor(s.activeLearnerId) : []
  })

  const [gate, setGate] = useState<Gate>(() => {
    const s = loadSession()
    if (!s) return { at: 'front' }
    const a = accountById(s.accountId)
    if (!a) return { at: 'front' }
    const l = s.activeLearnerId ? learnerById(s.activeLearnerId) : null
    /* Always the subject page, never straight into a course.
       Coming back is a decision, not a resumption: a learner may want a
       different subject today, or to change what they told the tutor about how
       to teach them. Their last subject is already selected there, so carrying
       on is one tap, and switching is also one tap. Landing them mid-lesson
       makes the second of those impossible to find. */
    if (!l) return { at: 'roll' }
    return { at: 'subjects' }
  })
  const [view, setView] = useState<View>({ at: 'home' })
  const [stage, setStage] = useState<Stage>('jhs')
  /* Set when a parent or school is adding another learner, so the create
     screen attaches them rather than starting a new account. Carries the class
     they should land in, when a school added them from a class. */
  const [adding, setAdding] = useState(false)
  const [addingToClass, setAddingToClass] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (profile) saveAttempts(profile.id, attempts)
  }, [attempts, profile])

  const enter = (c: Created) => {
    setAccount(c.account)
    const id = c.session.activeLearnerId
    const l = id ? learnerById(id) : null
    if (l) {
      setProfile(l)
      setAttempts(attemptsFor(l.id))
      setGate({ at: 'subjects' })
    } else {
      setProfile(null)
      setGate({ at: 'roll' })
    }
    setView({ at: 'home' })
  }

  const openLearner = (id: string) => {
    const l = learnerById(id)
    if (!l || !account) return
    saveSession({ accountId: account.id, activeLearnerId: id })
    setProfile(l)
    setAttempts(attemptsFor(id))
    setView({ at: 'home' })
    setGate({ at: 'subjects' })
  }

  const leaveLearner = () => {
    if (!account) return
    saveSession({ accountId: account.id, activeLearnerId: null })
    setProfile(null)
    setGate({ at: 'roll' })
  }

  const leave = () => {
    signOut()
    setAccount(null)
    setProfile(null)
    setAttempts([])
    setGate({ at: 'front' })
  }

  const mastery = useMemo(() => masteryOf(attempts, outline), [attempts, outline])
  const picture = useMemo(() => pictureOf(mastery), [mastery])
  const suggestion = useMemo(() => nextStep(mastery, outline), [mastery, outline])

  const record = useCallback((objectiveId: string, correct: boolean, hintUsed: boolean) => {
    setAttempts(prev => [...prev, {
      objectiveId, isCorrect: correct, hintUsed, at: new Date().toISOString(),
    }])
  }, [])

  /* The front page first, then a profile, then the course. A visitor meets the
     product working before being asked anything about themselves, and the stage
     they chose on the front page is carried into setup so nothing is asked
     twice. */
  if (gate.at === 'arrive') {
    return (
      <Arrive
        onBack={() => setGate({ at: 'front' })}
        onCarried={c => {
          /* Everything arrives together: who they are, and where they had got
             to. Landing them on an empty course would make the code pointless. */
          saveLearner(c.profile)
          saveSession({ accountId: c.profile.id, activeLearnerId: c.profile.id })
          saveAttempts(c.profile.id, c.attempts)
          setProfile(c.profile)
          setAttempts(c.attempts)
          setGate({ at: 'course' })
        }}
      />
    )
  }

  if (gate.at === 'front') {
    return (
      <Front
        onStart={s => { setStage(s); setGate({ at: 'create' }) }}
        onArrive={() => setGate({ at: 'signin' })}
      />
    )
  }

  if (gate.at === 'signin') {
    return (
      <SignIn
        onSignedIn={enter}
        onCreate={() => setGate({ at: 'create' })}
        onBack={() => setGate({ at: 'front' })}
      />
    )
  }

  if (gate.at === 'create') {
    /* A parent adding a second child is not creating another account: the new
       learner is attached to the account already signed in. */
    if (adding && account) {
      return (
        <CreateProfile
          stage={stage}
          onlyLearner
          onLearner={l => {
            addLearnerTo(account.id, l, addingToClass)
            setAdding(false)
            setAddingToClass(undefined)
            /* Refresh the account so the class shows its new member. */
            setAccount(accountById(account.id))
            setGate({ at: 'roll' })
          }}
          onCreated={() => { /* unused when onlyLearner */ }}
          onSignIn={() => setGate({ at: 'signin' })}
          onBack={() => {
            setAdding(false); setAddingToClass(undefined); setGate({ at: 'roll' })
          }}
        />
      )
    }
    return (
      <CreateProfile
        stage={stage}
        onCreated={enter}
        onSignIn={() => setGate({ at: 'signin' })}
        onBack={() => setGate({ at: 'front' })}
      />
    )
  }

  if (gate.at === 'roll' && account) {
    /* A school thinks in classes with a teacher in front of each. A family does
       not, so a parent gets the flat list. */
    if (account.kind === 'school') {
      return (
        <School
          account={account}
          learners={learnersFor(account)}
          onOpen={openLearner}
          onAddStudent={classId => {
            setAddingToClass(classId)
            setAdding(true)
            setGate({ at: 'create' })
          }}
          onSignOut={leave}
          onChanged={setAccount}
        />
      )
    }
    return (
      <Learners
        account={account}
        learners={learnersFor(account)}
        onOpen={openLearner}
        onAdd={() => { setAdding(true); setGate({ at: 'create' }) }}
        onSignOut={leave}
      />
    )
  }

  if (gate.at === 'subjects' && profile) {
    /**
     * Each learner meets the interface built for them, not a restyled one.
     *
     * The old chooser was a list of subjects with a note under each and a text
     * box for telling the tutor how to teach you. A five year old can use none
     * of that, and a sixth former on a laptop is served a phone column. Every
     * one of these screens reads the same syllabus, the same attempts and the
     * same plan; only what a person can actually use differs.
     */
    const onOpen = (subjectId: string, topicId?: string) => {
      const next = { ...profile, subjectId }
      saveLearner(next)
      setProfile(next)
      setGate({ at: 'course', topicId })
    }
    const goBack = account && account.kind !== 'learner' ? leaveLearner : undefined
    const skin = skinFor(profile)

    if (skin === 'kid') {
      return (
        <KidApp
          profile={profile}
          attempts={attempts}
          onOpenSubject={onOpen}
          onSignOut={leave}
          onBack={goBack}
        />
      )
    }

    if (skin === 'teen') {
      return (
        <TeenApp
          profile={profile}
          attempts={attempts}
          onOpenSubject={onOpen}
          onSignOut={leave}
          onBack={goBack}
        />
      )
    }

    if (skin === 'scholar') {
      return (
        <ScholarApp
          profile={profile}
          attempts={attempts}
          onOpenSubject={onOpen}
          onSignOut={leave}
          onBack={goBack}
        />
      )
    }

    return (
      <Subjects
        profile={profile}
        attempts={attempts}
        onSave={p => { saveLearner(p); setProfile(p) }}
        onStudy={() => setGate({ at: 'course' })}
        onSignOut={leave}
        onBack={account && account.kind !== 'learner' ? leaveLearner : undefined}
      />
    )
  }
  if (!profile) {
    return (
      <CreateProfile
        stage={stage}
        onCreated={enter}
        onSignIn={() => setGate({ at: 'signin' })}
        onBack={() => setGate({ at: 'front' })}
      />
    )
  }

  /* Which material this learner's chosen subject actually has. Before the
     syllabus layer existed only Mathematics could be chosen, so this screen
     could assume its course; now every subject opens and the assumption would
     serve JHS 2 Mathematics to somebody who asked for Physics. */
  const chosen = subjectById(profile.stage, profile.subjectId)
  const written = chosen && readinessOf(profile.stage, chosen) === 'written'
    ? WRITTEN[`${profile.stage}:${chosen.id}` as keyof typeof WRITTEN] ?? null
    : null

  if (!written) {
    const syllabus = chosen ? syllabusFor(profile.stage, chosen.id) : null
    if (syllabus) {
      return (
        <SyllabusLearn
          syllabus={syllabus}
          profile={profile}
          attempts={attempts}
          onAttempt={(a: Attempt) => setAttempts(prev => [...prev, a])}
          onBack={() => setGate({ at: 'subjects' })}
          onSignOut={leave}
          startTopicId={gate.at === 'course' ? gate.topicId : undefined}
        />
      )
    }
    /* No course and no outline. Sending them back to choose is the only honest
       thing left, and the chooser says which subjects are open. */
    return (
      <Subjects
        profile={profile}
        attempts={attempts}
        onSave={p => { saveLearner(p); setProfile(p) }}
        onStudy={() => setGate({ at: 'course' })}
        onSignOut={leave}
        onBack={account && account.kind !== 'learner' ? leaveLearner : undefined}
      />
    )
  }

  const objective = objectiveOf(course, view.at === 'home' ? null : view.objectiveId)

  return (
    <div className="nx">
      <div className="nx-page">
        <header className="nx-top">
          <span className="nx-wordmark">NEXA<span>•</span>EDU</span>
          <span className="nx-mark" style={{ letterSpacing: '0.1em' }}>
            {course.subject} · {profile.level}
          </span>
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 16 }}>
            <button className="nx-link" onClick={() => setGate({ at: 'subjects' })}>
              Change subject
            </button>
            {/* A parent looking at a child's page needs the way back to the
                others, not a way to wipe this one. */}
            {account && account.kind !== 'learner' && (
              <button className="nx-link" onClick={leaveLearner}>
                All learners
              </button>
            )}
            <button className="nx-link" onClick={leave}>Sign out</button>
          </span>
        </header>

        <main className="nx-sheet">
          {view.at === 'home' && (
            <Home
              profile={profile}
              objectives={course.objectives}
              note={course.note}
              mastery={mastery}
              picture={picture}
              suggestion={suggestion}
              onLearn={id => setView({ at: 'learn', objectiveId: id })}
              onPractice={(id, level) => setView({ at: 'practice', objectiveId: id, level })}
            />
          )}

          {view.at === 'learn' && objective && (
            <Learn
              objective={objective}
              onBack={() => setView({ at: 'home' })}
              onPractice={() => setView({
                at: 'practice', objectiveId: objective.id, level: startingLevel(profile),
              })}
            />
          )}

          {view.at === 'practice' && objective && (
            <Practice
              key={objective.id + view.level}
              objective={objective}
              level={view.level}
              profile={profile}
              stuckOn={picture.needsHelp
                .map(id => course.objectives.find(o => o.id === id)?.title)
                .filter((t): t is string => Boolean(t))}
              learnedBrief={learnedBrief(
                profile.id,
                /* Keyed by subject, not by course. What has been noticed about
                   how somebody works in Mathematics belongs to the subject and
                   must follow them if the course behind it ever changes. */
                profile.subjectId ?? course.subject.toLowerCase(),
                attempts,
              )}
              onAnswer={(correct, hinted) => record(objective.id, correct, hinted)}
              onBack={() => setView({ at: 'home' })}
              onLearn={() => setView({ at: 'learn', objectiveId: objective.id })}
            />
          )}
        </main>
      </div>
    </div>
  )
}

/* ── home ─────────────────────────────────────────────────────────────────── */

function Home({ profile, objectives, note, mastery, picture, suggestion, onLearn, onPractice }: {
  profile: LearnerProfile
  objectives: Objective[]
  note: string | null
  mastery: ObjectiveMastery[]
  picture: ReturnType<typeof pictureOf>
  suggestion: ReturnType<typeof nextStep>
  onLearn: (id: string) => void
  onPractice: (id: string, level: number) => void
}) {
  const byId = new Map(mastery.map(m => [m.objectiveId, m]))
  const suggested = objectives.find(o => o.id === suggestion.objectiveId)
  const teachFirst = opensWithTeaching(profile)

  const heading = suggestion.kind === 'RETEACH' ? 'Go over this again'
    : suggestion.kind === 'REFRESH' ? 'Worth a quick check'
    : suggestion.kind === 'CONTINUE' ? 'Carry on where you stopped'
    : suggestion.kind === 'DONE' ? 'Course complete'
    : 'Start here'

  return (
    <>
      <div style={{ position: 'relative', paddingTop: 26 }}>
        <div className="nx-body">
          <p className="nx-mark nx-settle nx-settle-1" style={{ margin: '0 0 10px' }}>
            {purposeLine(profile)}
          </p>
          <h1 className="nx-display nx-h1 nx-settle nx-settle-1" style={{ margin: '0 0 8px' }}>
            {greeting(profile)}
          </h1>
          {note && (
            <p className="nx-settle nx-settle-2" style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 16 }}>
              {note}
            </p>
          )}
        </div>
      </div>

      {suggested && (
        <section style={{ position: 'relative', marginTop: 34 }} className="nx-settle nx-settle-3">
          <div className="nx-body">
            <div className="nx-card is-focus">
              <p className="nx-mark" style={{ margin: '0 0 8px', color: 'var(--grow-deep)' }}>
                {heading}
              </p>
              <h2 className="nx-display nx-h2" style={{ margin: '0 0 8px' }}>{suggested.title}</h2>
              <p style={{ margin: '0 0 18px', color: 'var(--ink-soft)', maxWidth: '52ch' }}>
                {suggestion.because}
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {teachFirst || suggestion.kind === 'RETEACH' ? (
                  <>
                    <button className="nx-btn nx-btn-primary" onClick={() => onLearn(suggested.id)}>
                      Teach me this
                    </button>
                    <button className="nx-btn nx-btn-quiet"
                      onClick={() => onPractice(suggested.id, suggestion.level)}>
                      Straight to questions
                    </button>
                  </>
                ) : (
                  <>
                    <button className="nx-btn nx-btn-grow"
                      onClick={() => onPractice(suggested.id, suggestion.level)}>
                      Let me try it
                    </button>
                    <button className="nx-btn nx-btn-quiet" onClick={() => onLearn(suggested.id)}>
                      Explain it first
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <div style={{ position: 'relative', marginTop: 46 }}>
        <div className="nx-in-margin nx-mark" style={{ top: 4 }}>
          {picture.secure}/{objectives.length}
        </div>
        <div className="nx-body">
          <p className="nx-mark" style={{ margin: '0 0 4px' }}>Contents</p>
        </div>
      </div>

      <ol style={{ listStyle: 'none', margin: '10px 0 0', padding: 0 }}>
        {objectives.map((o, i) => {
          const m = byId.get(o.id)
          const state = STATE_WORD[m?.state ?? 'UNSEEN']
          const secure = m?.state === 'SECURE'
          const shaky = m?.state === 'SHAKY'
          return (
            <li key={o.id} style={{ position: 'relative', padding: '18px 0', borderBottom: '1px solid var(--rule)' }}>
              {/* The margin: the number you wrote, and the mark you were given. */}
              <div className="nx-in-margin" style={{ top: 18 }}>
                {secure || shaky
                  ? <Tick wrong={shaky} />
                  : <span className="nx-mark">{String(i + 1).padStart(2, '0')}</span>}
              </div>

              <div className="nx-body" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'baseline' }}>
                <div style={{ flex: '1 1 260px', minWidth: 0 }}>
                  <h3 className="nx-display" style={{ fontSize: 21, margin: '0 0 3px' }}>{o.title}</h3>
                  <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-soft)' }}>{o.outcome}</p>
                  {m && m.attempts > 0 && (
                    <p className="nx-mark" style={{ margin: '7px 0 0' }}>
                      {m.correct} of {m.attempts} right
                      {m.daysSince !== null && m.daysSince > 0 &&
                        ` · ${m.daysSince} day${m.daysSince === 1 ? '' : 's'} ago`}
                    </p>
                  )}
                </div>
                <span className={`nx-state ${state.cls}`}>{state.word}</span>
                <span style={{ display: 'flex', gap: 8 }}>
                  <button className="nx-btn nx-btn-quiet" style={{ padding: '7px 14px', fontSize: 15 }}
                    onClick={() => onLearn(o.id)}>Learn</button>
                  <button className="nx-btn nx-btn-quiet" style={{ padding: '7px 14px', fontSize: 15 }}
                    onClick={() => onPractice(o.id, m ? Math.max(1, Math.min(4, Math.round((m.recent ?? 0) * 4) || 1)) : startingLevel(profile))}>
                    Practise
                  </button>
                </span>
              </div>
            </li>
          )
        })}
      </ol>
    </>
  )
}

/* ── learn ────────────────────────────────────────────────────────────────── */

function Learn({ objective, onBack, onPractice }: {
  objective: Objective
  onBack: () => void
  onPractice: () => void
}) {
  return (
    <article style={{ position: 'relative', paddingTop: 26 }}>
      <div className="nx-body">
        <button className="nx-link" onClick={onBack} style={{ marginBottom: 22 }}>Back</button>
        <h1 className="nx-display nx-h1 nx-settle nx-settle-1" style={{ margin: '0 0 10px' }}>
          {objective.title}
        </h1>
        <p className="nx-lede nx-settle nx-settle-2" style={{ margin: '0 0 34px' }}>
          {objective.outcome}
        </p>

        <div className="nx-prose nx-settle nx-settle-3">
          {objective.explain.map((p, i) => (
            <div key={i}>
              <p>{p}</p>
              {/* The figure lands right after the paragraph that explains why
                  both sides must move together, so it is a demonstration of
                  what was just read rather than an ornament at the top. */}
              {i === 1 && objective.id === 'lin-eq' && <Balance />}
            </div>
          ))}
        </div>
      </div>

      <p className="nx-mark nx-body" style={{ margin: '44px 0 14px' }}>Worked examples</p>
      {objective.worked.map((w, i) => (
        <section key={i} style={{ position: 'relative', marginBottom: 22 }}>
          <div className="nx-in-margin nx-mark" style={{ top: 24 }}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <div className="nx-body">
            <div className="nx-card">
              <p className="nx-display" style={{ fontSize: 19, margin: '0 0 14px' }}>{w.ask}</p>
              <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {w.steps.map((s, j) => (
                  <li key={j} style={{ display: 'flex', gap: 14, marginBottom: 9 }}>
                    <span className="nx-mark" style={{ paddingTop: 5, minWidth: 16 }}>{j + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              <p style={{
                margin: '16px 0 0', paddingTop: 14, borderTop: '1px solid var(--rule)',
                fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 17, color: 'var(--grow-deep)',
              }}>
                {w.answer}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section style={{ position: 'relative', marginTop: 30 }}>
        <div className="nx-body">
          <div style={{
            borderLeft: '3px solid var(--margin)', paddingLeft: 20,
            background: 'color-mix(in srgb, var(--margin) 4%, transparent)',
            padding: '16px 20px', borderRadius: 2,
          }}>
            <p className="nx-mark" style={{ margin: '0 0 6px', color: 'var(--margin)' }}>
              Where marks are lost
            </p>
            <p style={{ margin: 0 }}>{objective.pitfall}</p>
          </div>

          <button className="nx-btn nx-btn-grow" style={{ marginTop: 30 }} onClick={onPractice}>
            Try it yourself
          </button>
        </div>
      </section>
    </article>
  )
}

/* ── practice ─────────────────────────────────────────────────────────────── */

function Practice({
  objective, level, profile, stuckOn, learnedBrief: brief, onAnswer, onBack, onLearn,
}: {
  objective: Objective
  level: number
  profile: LearnerProfile
  /** Titles of what this learner keeps getting wrong, for the tutor to join up. */
  stuckOn: string[]
  /** What has been noticed about how they work, and how they are going. */
  learnedBrief: { learned: string[], pace: string | null }
  onAnswer: (correct: boolean, hinted: boolean) => void
  onBack: () => void
  onLearn: () => void
}) {
  const questions = useMemo(() => questionsAt(objective, level), [objective, level])
  const [index, setIndex] = useState(0)
  const [given, setGiven] = useState('')
  const [verdict, setVerdict] = useState<null | boolean>(null)
  const [hinted, setHinted] = useState(false)
  const [marks, setMarks] = useState<boolean[]>([])

  const q: Question | undefined = questions[index]
  const relief = reliefFor(profile)
  const subject = subjectById(profile.stage, profile.subjectId)

  const submit = (answer = given) => {
    if (!q || verdict !== null || !answer.trim()) return
    const correct = isRight(q, answer)
    setVerdict(correct)
    setMarks(m => [...m, correct])
    onAnswer(correct, hinted)
  }

  const next = () => {
    setIndex(i => i + 1)
    setGiven(''); setVerdict(null); setHinted(false)
  }

  const score = marks.filter(Boolean).length

  if (index >= questions.length) {
    return (
      <div style={{ position: 'relative', paddingTop: 60 }}>
        <div className="nx-in-margin" style={{ top: 60, display: 'grid', gap: 6, justifyItems: 'end' }}>
          {marks.map((ok, i) => <Tick key={i} wrong={!ok} />)}
        </div>
        <div className="nx-body">
          <p className="nx-mark" style={{ margin: '0 0 10px' }}>{objective.title}</p>
          <h1 className="nx-display" style={{ fontSize: 'clamp(52px,9vw,86px)', margin: '0 0 14px' }}>
            {score}<span style={{ color: 'var(--ink-faint)' }}>/{questions.length}</span>
          </h1>
          <p className="nx-lede" style={{ margin: '0 0 28px' }}>
            {score === questions.length
              ? 'All correct. This one looks secure, so you will be moved on rather than kept here.'
              : score === 0
                ? 'None right this time. That usually means the idea has not landed yet, not that you cannot do it.'
                : 'Some of it went in. What did not will come round again before anything new does.'}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className="nx-btn nx-btn-primary" onClick={onLearn}>Read it again</button>
            <button className="nx-btn nx-btn-quiet" onClick={onBack}>Back to the course</button>
          </div>
        </div>
      </div>
    )
  }

  if (!q) return null

  return (
    <div style={{ position: 'relative', paddingTop: 26 }}>
      {/* Every mark you have earned so far, running down the margin. */}
      <div className="nx-in-margin" style={{ top: 96, display: 'grid', gap: 6, justifyItems: 'end' }}>
        {marks.map((ok, i) => <Tick key={i} wrong={!ok} />)}
      </div>

      <div className="nx-body">
        <button className="nx-link" onClick={onBack} style={{ marginBottom: 22 }}>Back</button>

        <p className="nx-mark" style={{ margin: '0 0 18px' }}>
          {objective.title} · question {index + 1} of {questions.length}
        </p>

        <h1 className="nx-display" style={{ fontSize: 'clamp(27px,4vw,38px)', margin: '0 0 28px' }}>
          {q.ask}
        </h1>

        {q.kind === 'choice' && q.options ? (
          <div style={{ display: 'grid', gap: 8, maxWidth: 560 }}>
            {q.options.map(opt => {
              const picked = given === opt
              const cls = verdict === null
                ? picked ? ' is-picked' : ''
                : opt === q.answer ? ' is-answer' : picked ? ' is-missed' : ''
              return (
                <button key={opt} className={`nx-choice${cls}`} disabled={verdict !== null}
                  onClick={() => { setGiven(opt); submit(opt) }}>
                  {opt}
                </button>
              )
            })}
          </div>
        ) : (
          <div style={{ maxWidth: 420 }}>
            <input
              className={`nx-write${verdict === null ? '' : verdict ? ' is-right' : ' is-wrong'}`}
              autoFocus
              value={given}
              disabled={verdict !== null}
              placeholder="write your answer"
              onChange={e => setGiven(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') submit() }}
            />
          </div>
        )}

        {verdict === null ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 26 }}>
            {q.kind !== 'choice' && (
              <button className="nx-btn nx-btn-grow" disabled={!given.trim()} onClick={() => submit()}>
                Check
              </button>
            )}
            <button className="nx-link" onClick={() => { setHinted(true); onLearn() }}>
              {relief.label}
            </button>
          </div>
        ) : (
          <div style={{ marginTop: 28, maxWidth: 'var(--measure)' }}>
            <p className="nx-display" style={{
              fontSize: 21, margin: '0 0 10px',
              color: verdict ? 'var(--grow-deep)' : 'var(--shaky)',
            }}>
              {verdict ? 'Right.' : `Not quite. The answer is ${q.answer}.`}
            </p>
            {/* Shown either way: getting it right by luck and getting it right
                for the reason are not the same thing on the next question. */}
            <p style={{ margin: '0 0 22px' }}>{q.teach}</p>

            {/* The written explanation above is the same for everyone. The
                tutor below is given this learner's year, how they asked to be
                taught, and what they actually put, so it can address the
                mistake rather than repeat the method. Offered on a right
                answer too: a lucky guess is worth unpicking. */}
            <Tutor
              key={`${objective.id}-${index}`}
              profile={profile}
              subjectId={profile.subjectId ?? 'maths'}
              subjectName={subject?.name ?? 'Mathematics'}
              question={q.ask}
              answer={q.answer}
              given={given}
              stuckOn={stuckOn}
              learned={brief.learned}
              pace={brief.pace}
            />

            <button className="nx-btn nx-btn-primary" onClick={next}
              style={{ marginTop: 24 }}>
              {index + 1 === questions.length ? 'Finish' : 'Next question'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
