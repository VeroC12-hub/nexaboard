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

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  forgetHelperContext, setHelperContext,
} from '../lib/education/helper-context'
import '../styles/study.css'
import Front from './Front'
import CreateProfile from './CreateProfile'
import SignIn from './SignIn'
import Learners from './Learners'
import School from './School'
import Subjects from './Subjects'
import SyllabusLearn from './Learn'
import { loadLessons, lessonsReady, onLessonsLoaded } from '../lib/education/library/lessons/load'
import { subjectById } from '../lib/education/subjects'
import { subjectOfTopic, syllabusFor } from '../lib/education/syllabus'
import ScholarApp from './ScholarApp'

import Arrive from './Arrive'
import type { Attempt } from '../lib/education/mastery'
import type { LearnerProfile, Stage } from '../lib/education/learner'
import {
  accountById, addLearnerTo, attemptsFor, learnerById, learnersFor,
  loadSession, resume, saveAttempts, saveLearner, saveSession, signOut,
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
/* ── where you are, as a URL ──────────────────────────────────────────────────

   Every screen in here used to be a field of React state under the single path
   /study, which meant the browser had nothing to go back through: pressing back
   anywhere inside the app left the app entirely, and a refresh landed you at
   the front page however deep you were. On a phone, where back is a hardware
   gesture people use constantly, that made the whole thing feel broken.

   So the state machine is the URL now. `pathOfGate` and `gateOfPath` are the
   only two places that know the spelling, and they are each other's inverse:
   every `setGate` is a navigation, and every back press is a `setGate` the
   browser did for us.
   -------------------------------------------------------------------------- */

const GATE_WORD: Record<Exclude<Gate['at'], 'course'>, string> = {
  front: '',
  create: 'new',
  signin: 'signin',
  arrive: 'arrive',
  roll: 'learners',
  subjects: 'subjects',
}

/**
 * The screens inside a learner's own app, as words.
 *
 * The learner app got real addresses and the screens *inside* it did not, so
 * back out of a game landed on Home rather than on the Play list it was
 * started from, and the grown up's page could not be returned to at all. These
 * are the four places a child can be once their app is open.
 *
 * `home` is the empty string because it is the learner app itself: /study/subjects.
 */
const PANEL_WORD: Record<Panel, string> = {
  home: '',
  play: 'play',
  rewards: 'stars',
  profile: 'grown-up',
}

/** A screen inside the learner's own app. The two tabs, and two more. */
export type Panel = 'home' | 'play' | 'rewards' | 'profile'

/** What a topic opens as. A game is not a lesson with a game in it. */
export type Mode = 'lesson' | 'practice' | 'game'

/** What a place inside a course is doing: the three things `Learn` renders. */
export type Place =
  | { at: 'outline' }
  | { at: 'lesson' | 'practice' | 'game', topicId: string }

const MODES = ['lesson', 'practice', 'game'] as const

function pathOfGate(g: Gate, place?: Place): string {
  if (g.at === 'subjects') {
    /* A subject opened in place is a screen of its own, so backing out of it
       returns to the tiles rather than to the subject chooser. */
    if (g.subjectId) return `/study/subjects/subject/${encodeURIComponent(g.subjectId)}`
    const panel = PANEL_WORD[g.panel ?? 'home']
    return '/study/subjects' + (panel ? '/' + panel : '')
  }
  if (g.at !== 'course') {
    const word = GATE_WORD[g.at]
    return '/study' + (word ? '/' + word : '')
  }
  /* A course carries where you are inside it, so that back out of a lesson
     reaches the outline rather than the subject chooser. */
  const at = place ?? (g.topicId
    ? { at: g.mode ?? 'lesson', topicId: g.topicId }
    : { at: 'outline' as const })
  if (at.at === 'outline') return '/study/course'
  return `/study/course/${encodeURIComponent(at.topicId)}/${at.at}`
}

/** The inverse. `null` for a path this app does not own, so the caller can bounce it. */
function gateOfPath(pathname: string): { gate: Gate, place: Place } | null {
  const rest = pathname.replace(/^\/study\/?/, '').replace(/\/+$/, '')
  if (!rest) return { gate: { at: 'front' }, place: { at: 'outline' } }

  const parts = rest.split('/').map(decodeURIComponent)

  if (parts[0] === 'subjects') {
    if (parts[1] === 'subject') {
      return parts[2]
        ? { gate: { at: 'subjects', subjectId: parts[2] }, place: { at: 'outline' } }
        : null
    }
    const panel = (Object.keys(PANEL_WORD) as Panel[])
      .find(k => PANEL_WORD[k] === (parts[1] ?? ''))
    /* An unknown word under /study/subjects is bounced rather than silently
       treated as the home screen: a mistyped address should go somewhere
       truthful, not somewhere plausible. */
    return panel ? { gate: { at: 'subjects', panel }, place: { at: 'outline' } } : null
  }

  if (parts[0] === 'course') {
    const topicId = parts[1]
    if (!topicId) return { gate: { at: 'course' }, place: { at: 'outline' } }
    /* An unknown or missing mode is a lesson, which is what a deep link from a
       child's own screen means and what this used to do with `startTopicId`. */
    const mode = MODES.find(m => m === parts[2]) ?? 'lesson'
    return { gate: { at: 'course', topicId }, place: { at: mode, topicId } }
  }

  const found = (Object.keys(GATE_WORD) as Array<keyof typeof GATE_WORD>)
    .find(k => GATE_WORD[k] === parts[0])
  return found ? { gate: { at: found }, place: { at: 'outline' } } : null
}

type Gate =
  | { at: 'front' }
  | { at: 'create' }
  | { at: 'signin' }
  | { at: 'arrive' }
  /** A parent's flat roll, or a school's classes. */
  | { at: 'roll' }
  /**
   * The learner's own app: which subject, and how to teach them.
   *
   * `panel` is which screen inside it, and `subjectId` is a subject opened in
   * place on the kid home screen. Both were React state, which is why back
   * inside a child's app left the child's app.
   */
  | { at: 'subjects', panel?: Panel, subjectId?: string }
  /**
   * `topicId` when the learner tapped a topic rather than a subject, and
   * `mode` when they asked for something other than the lesson. The play
   * button on a child's Play screen means the game, and without this it
   * landed them on a lesson being written.
   */
  | { at: 'course', topicId?: string, mode?: Mode }

export default function Study() {
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

  /**
   * This learner's stage of the lesson library, fetched before any lesson is
   * asked for.
   *
   * The library is split by stage and loaded on demand, because the whole of
   * it was being downloaded by every visitor to the front page. This is the
   * place that load belongs: a profile has been chosen, so the stage is
   * known, and this screen is allowed to wait where a `useMemo` inside
   * `Learn` is not.
   *
   * `loadLessons` never rejects, so this cannot leave a learner stuck on the
   * loading bar. A chunk that fails to arrive leaves the registry empty for
   * that stage and the topic is taught by the tutor from its outline, which
   * is the same fallback as a topic nobody has written yet.
   */
  const stageReady = useSyncExternalStore(
    onLessonsLoaded,
    () => !profile || lessonsReady(profile.stage),
  )

  useEffect(() => {
    if (profile) void loadLessons(profile.stage)
  }, [profile])

  /**
   * Where the session says they belong, when the URL says nothing.
   *
   * Only consulted for a bare /study and for a path that cannot be honoured,
   * because the URL outranks it: somebody who bookmarked a lesson is asking
   * for that lesson, not for wherever they happened to stop last time.
   */
  const landing = useMemo<Gate>(() => {
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
    /* Recomputed when the session changes, which it did not used to be.

       This was a lazy `useState`, decided once on mount, on the reasoning
       that re-deciding underneath somebody already somewhere would move
       them. That reasoning was right about the risk and wrong about the
       cost, and it produced two bugs that looked unrelated:

         - signing out left `landing` saying "subjects". Pressing back then
           landed on /study/subjects, which bounces to `landing`, which was
           still subjects, so a signed out person was shown a signed in page.
         - the same stale value made a bare /study swap to subjects for ever,
           so the wordmark could never reach the front page again.

       It is safe to recompute because it is only ever *consulted* for a bare
       /study and for a path this session cannot honour. Every other path
       outranks it, so nobody standing somewhere valid is moved. */
  }, [account, profile])


  /**
   * Whether this is the first look at the address.
   *
   * Distinguishes arriving at a page from asking for it, which is the whole
   * difference between a bookmark and a tap on the wordmark.
   */
  const cold = useRef(true)

  const nav = useNavigate()
  const { pathname } = useLocation()

  const read = useMemo(() => gateOfPath(pathname), [pathname])
  const gate: Gate = read?.gate ?? landing
  /* Its own memo so that the identity is stable: `addressed` depends on it,
     and a fresh object each render would re-search every subject's outline
     on every render of the whole app. */
  const place: Place = useMemo(
    () => read?.place ?? { at: 'outline' },
    [read])

  /**
   * Moving is navigating. Pushes, so back undoes it.
   *
   * `swap` replaces instead, for the moves that are not places a person chose
   * to be at: signing out, and a path that could not be honoured. Back through
   * those would land on a screen that no longer exists for this session.
   */
  const setGate = useCallback(
    (g: Gate) => { nav(pathOfGate(g)) },
    [nav])
  const swapGate = useCallback(
    (g: Gate) => { nav(pathOfGate(g), { replace: true }) },
    [nav])
  /**
   * The address decides the subject, not the stored one.
   *
   * `/study/course/<topicId>/<mode>` names a topic and no subject, so the
   * subject used to come from whatever this learner last had open. Those two
   * disagree more often than it sounds: reopening a lesson after changing
   * subject does it, and so does a shared phone where the other child studied
   * something else in between. When they disagreed the topic was not in the
   * syllabus being searched, and the lesson screen bounced back to the tiles
   * in silence, which read as the app refusing to open a lesson at all.
   *
   * So when the address names a topic, the subject that owns that topic wins.
   * `null` covers the outline, where no topic is named, and a topic id that
   * belongs to no subject, which is genuinely unopenable and still bounces.
   *
   * Nothing is written to storage here on purpose. The subject the address
   * names is used to build the syllabus, and `Learn` keys a learner's plan
   * off that syllabus rather than off the stored subject, so the view is
   * already consistent. Saving would mean a state write during render for
   * no gain, and the next subject a learner actually chooses saves itself.
   */
  const addressed = useMemo(
    () => (profile && place.at !== 'outline'
      ? subjectOfTopic(profile.stage, place.topicId)
      : null),
    [profile, place])

  /** Where you are inside a course, from `Learn`. */
  const setPlace = useCallback(
    (p: Place) => { nav(pathOfGate({ at: 'course' }, p)) },
    [nav])

  /**
   * Honour the URL, or bounce it.
   *
   * A path can ask for something this session cannot give: /study/subjects
   * with no learner open, /study/learners while signed out, or a word this app
   * does not know. Each of those renders nothing useful, so it is replaced
   * with the landing rather than left on screen.
   */
  useEffect(() => {
    if (!read) { swapGate(landing); return }
    const needsLearner = read.gate.at === 'subjects' || read.gate.at === 'course'
    if (needsLearner && !profile) { swapGate(landing); return }
    if (read.gate.at === 'roll' && !account) { swapGate(landing); return }
    /* A bare /study on arrival is the wrong page for somebody already signed
       in, and the right page for them the moment they ask for it.

       Arriving at /study cold, from a bookmark or a typed address, should
       land a signed in learner on their own work rather than on the sales
       page for a product they have already bought. That is what this line
       was for and it stays.

       But it fired on every navigation, so tapping the wordmark from inside
       the app bounced straight back to subjects and the front page became
       unreachable to anybody with a session. The two cases are told apart by
       `cold`: true until this effect has run once, which is exactly the
       difference between landing on the page and asking for it. */
    if (cold.current && read.gate.at === 'front' && landing.at !== 'front') {
      swapGate(landing)
    }
    cold.current = false
  }, [read, profile, account, landing, swapGate])


  /**
   * Who the helper is talking to, outside a course.
   *
   * Enough for the year and the stage, which is what decides how it answers,
   * and enough to answer a question about the app itself. The `Learn` screen
   * publishes a far richer brief over the top of this one as soon as a subject
   * is open, and clears only its own parts when it leaves.
   */
  useEffect(() => {
    if (!profile) { forgetHelperContext(['learner', 'syllabus', 'lesson']); return }
    /* Inside a course, `Learn` publishes all of this and more: the same brief
       plus what they keep getting wrong, their plan, their own words and the
       lesson on screen. This must not overwrite it with the thin version.

       And it would, silently: effects run child first, so on a direct load of
       a lesson URL `Learn` publishes the rich brief and this effect then runs
       second and replaces it. Found by opening a game and watching the helper
       report that the learner was on the home screen. */
    if (gate.at === 'course') return
    const subject = subjectById(profile.stage, profile.subjectId ?? null)
    setHelperContext({
      learner: {
        subjectId: profile.subjectId ?? '',
        subjectName: subject?.name ?? '',
        profile,
      },
      where: 'their own home screen, choosing what to learn',
    })
  }, [profile, gate.at])
  /**
   * Catch up with the server, after the cached page is already on screen.
   *
   * Everything above reads the device cache synchronously, which is what makes
   * the app open instantly and work with no connection at all. The cost is
   * that the cache can be behind: a learner who answered questions on a school
   * tablet this morning and opens their phone this afternoon would see this
   * morning's state for ever, because nothing would ever go and look.
   *
   * So this runs once, in the background, and quietly replaces what is on
   * screen if the server knows more. It is deliberately not awaited by
   * anything and deliberately not shown: a learner with no network gets the
   * cached page and no error, which is the whole point of the cache. It also
   * flushes the outbox, so answers written offline are sent the moment there
   * is a connection to send them on.
   */
  useEffect(() => {
    let live = true
    void resume().then(fresh => {
      if (!live || !fresh) return
      setAccount(fresh)
      const s = loadSession()
      if (!s?.activeLearnerId) return
      const l = learnerById(s.activeLearnerId)
      if (l) setProfile(l)
      setAttempts(attemptsFor(s.activeLearnerId))
    }).catch(() => { /* offline, or signed out elsewhere. The cache stands. */ })
    return () => { live = false }
  }, [])

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
  }

  const openLearner = (id: string) => {
    const l = learnerById(id)
    if (!l || !account) return
    saveSession({ accountId: account.id, activeLearnerId: id })
    setProfile(l)
    setAttempts(attemptsFor(id))
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
    /* Replaced, not pushed: back out of a sign out must not walk into the
       signed in screens it just left. */
    swapGate({ at: 'front' })
  }

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
     * One home screen, for every learner.
     *
     * There were three: a picture grid for the small ones, a phone column for
     * primary and junior high, and the dashboard for senior high. Only the
     * dashboard answered the question a learner actually arrives with, which
     * is "where am I": each subject, how far through it, how they are doing on
     * it, and what to open next. The other two showed tiles and a streak, so a
     * Basic 4 pupil who wanted to know whether they were behind had nowhere to
     * look, and the same pupil's parent had nowhere either.
     *
     * Being nine is not a reason to be told less about your own progress. The
     * differences that are real, which are reading age and the size of a
     * finger, are handled in the type, the spacing and the voice rather than
     * by taking the screen away.
     */
    const onOpen = (subjectId: string, topicId?: string, mode?: Mode) => {
      const next = { ...profile, subjectId }
      saveLearner(next)
      setProfile(next)
      setGate({ at: 'course', topicId, mode })
    }
    const goBack = account && account.kind !== 'learner' ? leaveLearner : undefined

    return (
      <ScholarApp
        profile={profile}
        attempts={attempts}
        onOpenSubject={onOpen}
        /* Which screen, from the address rather than from state, so that
           back inside the app moves inside the app instead of leaving it.
           The small learners' shell had this and the dashboard did not. */
        panel={gate.panel ?? 'home'}
        onPanel={pan => setGate({ at: 'subjects', panel: pan })}
        onHome={() => setGate({ at: 'front' })}
        /* Passing the end of year examination is the one thing in the app
           that changes a learner's year. It is saved the moment it happens,
           because a promotion that is lost on refresh is worse than one that
           was never offered. */
        onMoved={(movedStage, level) => {
          const moved = { ...profile, stage: movedStage, level }
          saveLearner(moved)
          setProfile(moved)
        }}
        onAttempts={more => setAttempts(prev => [...prev, ...more])}
        onSignOut={leave}
        onBack={goBack}
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
  /**
   * The address decides the subject, not the stored one.
   *
   * `/study/course/<topicId>/<mode>` names a topic and no subject, so the
   * subject used to come from whatever this learner last had open. Those two
   * disagree more often than it sounds: reopening a lesson after changing
   * subject does it, and so does a shared phone where the other child studied
   * something else in between. When they disagreed the topic was not in the
   * syllabus being searched, and the lesson screen bounced back to the tiles
   * in silence, which read as the app refusing to open a lesson.
   *
   * So when the address names a topic, the subject that owns that topic wins.
   * Falling back to the stored one covers the outline, where no topic is
   * named, and a topic id that belongs to nothing, which still bounces.
   */
  const chosen = subjectById(profile.stage, addressed ?? profile.subjectId)
  /* Wait for this stage's lessons before deciding what to serve. Without
     this the registry is empty on the first visit to a course and every
     topic falls back to the tutor, which looks to a learner like the written
     lesson having disappeared. The bar is the same one route changes use. */
  if (!stageReady) {
    return <div className="nx-route-loading" role="status" aria-label="Loading lessons" />
  }
  /**
   * The syllabus is the course, for every subject.
   *
   * There used to be a `WRITTEN` table that overrode this, holding exactly one
   * entry: JHS Mathematics. It won where it existed, on the reasoning that a
   * course checked by a person beats one assembled from an outline. That
   * reasoning expired. The library now holds a written, checked lesson for
   * every topic in that syllabus, and the override was serving the old course
   * instead.
   *
   * What it cost, measured before it was removed: the JHS Mathematics
   * syllabus has 38 topics and all 38 have a written lesson. The override
   * served 4 of them, so the dashboard advertised "16 topics" for the year
   * and the course screen offered four. The other 34 were unreachable. It
   * also served them on the old ruled sheet, which is capped at 940px and
   * carries no read aloud, so the one subject most likely to be opened was
   * the one subject that looked and behaved like a different product.
   */
  {
    const syllabus = chosen ? syllabusFor(profile.stage, chosen.id, profile.curriculum) : null
    if (syllabus) {
      return (
        <SyllabusLearn
          syllabus={syllabus}
          profile={profile}
          attempts={attempts}
          onAttempt={(a: Attempt) => setAttempts(prev => [...prev, a])}
          onBack={() => setGate({ at: 'subjects' })}
          /* A path the learn screen cannot honour, so the address is replaced
             rather than pushed: back must not return to it. */
          onBounce={() => swapGate({ at: 'subjects' })}
          onSignOut={leave}
          /* Where it is, and how it moves. Both go through the URL, so the
             outline, a lesson, the questions and a game are four addresses
             rather than four values of one hidden variable. */
          place={place}
          onPlace={setPlace}
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
}
