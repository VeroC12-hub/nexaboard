/**
 * Studying a subject that has an outline but no written course.
 *
 * This is the normal path. Forty eight subjects have a syllabus outline and one
 * has a course written out in full, so most learning that ever happens here
 * happens on this screen.
 *
 * The division of labour is the whole design:
 *
 *   the syllabus   says what the subject covers, and in what order
 *   the profile    says how this learner wants to be taught
 *   adapt.ts       says what has been noticed about them since they started
 *   the AI         writes the lesson and the questions from all three
 *
 * So the screen itself stays plain. It is a list of topics, a lesson, and some
 * questions. What makes it a learning platform rather than a table of contents
 * is that no two learners get the same lesson from the same line, and that the
 * lesson changes as the platform learns them.
 *
 * Everything here degrades to the outline. If the AI cannot be reached, the
 * learner still sees what the subject covers, which topic comes next, and what
 * each one is for. That is less than a lesson and considerably more than an
 * error page.
 */

import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import '../styles/study.css'
import Prose from '../components/Prose'
import { blocksOf } from '../components/blocks'
import { AskCard, AskMenu, LostButton } from '../components/Ask'
import { useSpot } from '../components/useSpot'
import { useAsking } from '../components/useAsking'
import Tutor from '../components/Tutor'
import Illustration from '../components/Illustration'
import Games from '../components/Games'
import HeavyGame from '../components/HeavyGame'
import { gameFor } from '../lib/education/games'
import { playable } from '../lib/education/heavy'
import { Icon, Mascot } from '../components/kid/art'
import { say, stop as stopSpeaking } from '../lib/education/speak'
import '../styles/kid.css'
import '../styles/kid-pages.css'
import '../styles/teen.css'
import '../styles/scholar.css'
import '../styles/read.css'
import '../styles/paged.css'
import { asksFor, askBrief } from '../lib/education/ask'
import { mediumBrief } from '../lib/education/medium'
import {
  leadsWith, localPlan, planIsStale, rank, readPlan, savePlan, savedPlan,
  type Plan,
} from '../lib/education/plan'
import { askPlan } from '../lib/education/ai'
import { illustrate, rendererAvailable } from '../lib/education/illustrate'
import { likelyKind, type Visual, type VisualKind } from '../lib/education/visuals'
import {
  askLesson, askQuestions, askVideo, observeRound, TutorOff,
  type LearnerBrief, type RoundEntry, type SyllabusPlace, type TutorStage,
} from '../lib/education/ai'
import { styleFor } from '../lib/education/storyboard'
import { adaptationFor, observed, paceFrom, signalsFrom } from '../lib/education/adapt'
import { isRight, type Question } from '../lib/education/course'
import type { Attempt } from '../lib/education/mastery'
import {
  skinFor, type LearnerProfile, type Skin, type Stage,
} from '../lib/education/learner'
import {
  allTopics, foundations, placeOf, topicsFor,
  type Syllabus, type Topic,
} from '../lib/education/syllabus'

/** Which of the three things this screen is doing. */
type View =
  | { at: 'outline' }
  /**
   * `attempt` counts retries and re-teaches. It lives in the view rather than
   * inside the lesson, because it is used as the component's key: asking for a
   * topic to be taught again should remount rather than reset, so a half
   * arrived lesson cannot land in the middle of the new one.
   */
  | { at: 'lesson', topicId: string, attempt: number, askedFor: string }
  | { at: 'practice', topicId: string, attempt: number }
  /**
   * A game, for the stages that cannot read a lesson.
   *
   * `attempt` is the round counter, keyed the same way as the others so
   * "play again" remounts with fresh numbers rather than resetting state.
   */
  | {
    at: 'game', topicId: string, attempt: number,
    /**
     * The plain tapping games instead of the generated one.
     *
     * Only ever set by the child, or by the frame failing to load. Generated
     * is the default, because a fixed set of six is a countdown to the day
     * the app runs out of things to be.
     */
    plain?: boolean,
  }

/**
 * Where a topic sits, in the shape the prompt wants.
 *
 * Built here rather than on the server because the syllabus is already in the
 * bundle, and sending the six lines that matter is cheaper and clearer than
 * teaching the serverless function about subjects.
 */
function placeFor(syllabus: Syllabus, topic: Topic, stage: Stage): SyllabusPlace {
  const place = placeOf(syllabus, topic.id)
  return {
    /* Which of the five films a video for this learner should be. Decided from
       the stage, so a KG storyboard cannot come back as a lecture. */
    style: styleFor(stage),
    strand: place?.strand.name,
    subStrand: place?.subStrand.name,
    topic: topic.title,
    outcome: topic.outcome,
    builds: foundations(syllabus, topic.id, 1).map(t => t.outcome),
    year: topic.year,
    source: syllabus.source,
  }
}

/**
 * How they have been doing on this topic alone.
 *
 * Null below three answers, because two rounds is not a rate, and a game that
 * got easier or harder on the strength of one tap would feel arbitrary to a
 * child and tell an adult nothing.
 */
function accuracyOn(attempts: Attempt[], topicId: string): number | null {
  const rows = attempts.filter(a => a.objectiveId === topicId && a.isCorrect !== null)
  if (rows.length < 3) return null
  return rows.filter(a => a.isCorrect === true).length / rows.length
}

/**
 * The page, in whichever interface this learner uses.
 *
 * The lesson and the questions are shared between the two interfaces on
 * purpose: the logic that streams a lesson, orders it by the plan, asks for
 * pictures and marks answers is the same whoever is reading it, and forking it
 * would leave two of everything with one of them quietly rotting.
 *
 * So only the frame changes here, and `kid-pages.css` restyles what is inside
 * it. A learner given the kid home screen and then an adult lesson has been
 * handed the worst of both.
 */
function Page({ skin, kind, children }: {
  skin: Skin
  kind: 'lesson' | 'quiz'
  children: React.ReactNode
}) {
  if (skin === 'kid') {
    return (
      <div className="kid">
        <div className={kind === 'lesson' ? 'kid-lesson' : 'kid-quiz'}>{children}</div>
      </div>
    )
  }

  if (skin === 'teen') {
    return (
      <div className="teen">
        <div className="teen-read">{children}</div>
      </div>
    )
  }

  /* The reading column on the dashboard's own grey, in a white sheet, so
     moving from the dashboard into a lesson does not look like leaving the
     product. */
  return (
    <div className="sch-read">
      <div className="sch-read-in">{children}</div>
    </div>
  )
}

/** A tick or a cross in the margin, as on the written course screens. */
function Mark({ wrong }: { wrong?: boolean }) {
  return (
    <svg className={`nx-mark-svg${wrong ? ' is-wrong' : ''}`}
      width="18" height="18" viewBox="0 0 20 20" aria-hidden>
      {wrong
        ? <path d="M5 5 L15 15 M15 5 L5 15" fill="none" stroke="currentColor" strokeWidth="2" />
        : <path d="M4 11 L8 15 L16 5" fill="none" stroke="currentColor" strokeWidth="2" />}
    </svg>
  )
}

/** One topic in the outline. */
function TopicRow({ topic, done, onOpen }: {
  topic: Topic
  done: boolean
  onOpen: (t: Topic) => void
}) {
  return (
    <li className="nx-topic">
      <button className="nx-topic-btn" onClick={() => onOpen(topic)}>
        <span className="nx-topic-head">
          <span className="nx-topic-title">{topic.title}</span>
          {done && <span className="nx-topic-done">worked on</span>}
        </span>
        <span className="nx-topic-outcome">{topic.outcome}</span>
      </button>
    </li>
  )
}

export default function Learn({
  syllabus, profile, attempts, onAttempt, onBack, onSignOut, startTopicId,
}: {
  syllabus: Syllabus
  profile: LearnerProfile
  attempts: Attempt[]
  onAttempt: (a: Attempt) => void
  /** Back to the subject chooser. */
  onBack: () => void
  onSignOut: () => void
  /**
   * A topic to open straight away, skipping the outline.
   *
   * For the youngest learners, who reach a topic by tapping its picture on
   * their own screen rather than by reading a list of strands. Landing them on
   * an outline they cannot read would undo the point of that screen.
   */
  startTopicId?: string
}) {
  /**
   * Where "back" goes from inside a topic.
   *
   * Normally the outline, which is this screen's own list of topics. But when
   * the caller deep-linked into a topic, the outline is not where the learner
   * came from and may be somewhere they cannot use at all: the youngest arrive
   * here by tapping a picture in their own interface, and the outline is a
   * list of syllabus strands. Caught in Chrome, where pressing back from a KG
   * learner's lesson stranded them in the adult topic list.
   */
  const backFromTopic = startTopicId ? onBack : () => setView({ at: 'outline' })

  const [view, setView] = useState<View>(
    /* The lesson or the game, decided below by the plan, rather than the
       outline. `attempt: 0` because arriving is not a retry. */
    () => (startTopicId
      ? { at: 'lesson', topicId: startTopicId, attempt: 0, askedFor: '' }
      : { at: 'outline' }))
  /**
   * Which interface this learner is in.
   *
   * From the one function every other screen reads, so the home screen, the
   * lesson and the questions cannot disagree about who somebody is.
   */
  const skin = skinFor(profile)
  /** Whether the whole subject is shown, or only this learner's year. */
  const [wholeSubject, setWholeSubject] = useState(false)

  /**
   * What has been noticed about this learner, held as state rather than read
   * where it is needed.
   *
   * It has to be state because an observation is written after a round ends,
   * which changes storage and nothing else. Read inside a memo instead, the
   * note would sit in storage while every later lesson was still built from
   * the brief that existed before it, and the adaptation loop would look like
   * it worked while never closing.
   */
  const [observations, setObservations] = useState<string[]>(
    () => adaptationFor(profile.id, syllabus.subjectId).observations.map(o => o.note))

  /**
   * What she has asked for, held as state for the same reason observations are.
   *
   * An ask made inside a lesson changes storage and nothing else, so read
   * fresh here it would sit on disk while every later decision was still made
   * from the list that existed before it.
   */
  const [asks, setAsks] = useState(() => asksFor(profile.id))

  /**
   * How this learner is taught.
   *
   * This is what replaced deciding by stage. It can be a single medium, and
   * `wordless` can mean the written lesson is not the way the topic is taught
   * at all.
   *
   * Two layers, and the split is what keeps it instant. The local plan is
   * worked out here from the same evidence the tutor would read, so there is
   * always a plan and nothing ever waits for permission to be taught. The
   * tutor's own plan is asked for in the background, kept, and preferred once
   * it exists.
   */
  const [written, setWritten] = useState<Plan | null>(
    () => savedPlan(profile.id, syllabus.subjectId))

  const local = useMemo(
    () => localPlan({ profile, attempts, asks }),
    [profile, attempts, asks])

  const plan = written ?? local

  const everything = useMemo(() => allTopics(syllabus), [syllabus])
  const mine = useMemo(() => topicsFor(syllabus, profile.level), [syllabus, profile.level])
  const shown = wholeSubject ? everything : mine

  /* Which topics they have already worked on, from their own attempts, so the
     outline shows progress without needing a separate record of it. */
  const worked = useMemo(
    () => new Set(attempts.map(a => a.objectiveId)),
    [attempts])

  const learner: LearnerBrief = useMemo(() => {
    return {
      subjectId: syllabus.subjectId,
      subjectName: syllabus.subject,
      profile,
      learned: observations,
      pace: paceFrom(signalsFrom(attempts)),
      /* Her own words, which outrank everything else in the brief, and how she
         has done in each kind of material. Both were being collected and
         neither was reaching the tutor. */
      asked: askBrief(asks),
      mediums: mediumBrief(attempts),
      stuckOn: everything
        .filter(t => {
          const rows = attempts.filter(a => a.objectiveId === t.id && a.isCorrect !== null)
          if (rows.length < 2) return false
          return rows.filter(a => a.isCorrect === true).length / rows.length < 0.5
        })
        .map(t => t.title),
    }
  }, [profile, syllabus, attempts, everything, observations, asks])

  /**
   * Ask the tutor how she should be taught, in the background.
   *
   * Below the brief because it sends it. Never awaited by anything on screen:
   * the local plan is already in use, built from the same asks and the same
   * record, so a failure here costs the tutor's judgement about her and not
   * the session.
   */
  useEffect(() => {
    if (!planIsStale(written, attempts, asks)) return

    const ctrl = new AbortController()
    askPlan({ learner }, ctrl.signal)
      .then(text => {
        const start = text.indexOf('{')
        const end = text.lastIndexOf('}')
        if (start === -1 || end <= start) return
        const fresh = readPlan(JSON.parse(text.slice(start, end + 1)), profile)
        if (!fresh) return
        savePlan(profile.id, syllabus.subjectId, fresh)
        setWritten(fresh)
      })
      .catch(() => {
        /* No route, no key, no worker, or a refusal. */
      })
    return () => ctrl.abort()
    /* On the evidence changing, not on `learner` changing: the brief is rebuilt
       whenever an observation is written, and re-deciding how to teach somebody
       mid-session is both expensive and unsettling. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile, syllabus.subjectId, attempts.length, asks.length, written])

  const topic = useMemo(
    () => (view.at === 'outline' ? null : everything.find(t => t.id === view.topicId) ?? null),
    [view, everything])

  if (view.at !== 'outline' && topic) {
    const place = placeFor(syllabus, topic, profile.stage)

    if (view.at === 'game') {
      const { attempt, plain } = view

      /* A new game each time, composed from the grammar rather than chosen
         from a list. The plain games are the floor underneath it: a child
         whose device will not run the frame still gets to play. */
      if (!plain && playable(profile.stage, topic.title)) {
        return (
          <HeavyGame
            key={`${topic.id}-heavy-${attempt}`}
            topicId={topic.id}
            topicTitle={topic.title}
            stage={profile.stage}
            year={profile.level}
            accuracy={accuracyOn(attempts, topic.id)}
            learnerId={profile.id}
            onAttempt={onAttempt}
            onDone={() => setView({
              at: 'game', topicId: topic.id, attempt: attempt + 1,
            })}
            onRead={() => setView({
              at: 'lesson', topicId: topic.id, attempt: 0, askedFor: '',
            })}
            onSimple={() => setView({
              at: 'game', topicId: topic.id, attempt: attempt + 1, plain: true,
            })}
          />
        )
      }

      const gameId = gameFor(profile.stage, topic.title)
      if (gameId) {
        return (
          <Games
            key={`${topic.id}-game-${attempt}`}
            gameId={gameId}
            topicId={topic.id}
            topicTitle={topic.title}
            stage={profile.stage}
            year={profile.level}
            accuracy={accuracyOn(attempts, topic.id)}
            onAttempt={onAttempt}
            onDone={() => setView({
              at: 'game', topicId: topic.id, attempt: attempt + 1,
            })}
            onRead={() => setView({
              at: 'lesson', topicId: topic.id, attempt: 0, askedFor: '',
            })}
          />
        )
      }
    }

    if (view.at === 'lesson') {
      const { attempt, askedFor } = view
      return (
        <Lesson
          key={topic.id + '-' + attempt}
          topic={topic} place={place} learner={learner} askedFor={askedFor}
          plan={plan}
          skin={skin}
          onAsked={() => setAsks(asksFor(profile.id))}
          onBack={backFromTopic}
          onAgain={asked => setView({
            at: 'lesson', topicId: topic.id, attempt: attempt + 1, askedFor: asked,
          })}
          onPractise={() => setView({ at: 'practice', topicId: topic.id, attempt: 0 })}
          onPlay={playable(profile.stage, topic.title) || gameFor(profile.stage, topic.title)
            ? () => setView({ at: 'game', topicId: topic.id, attempt: 0 })
            : undefined}
        />
      )
    }
    const { attempt } = view
    return (
      <Practice
        key={topic.id + '-' + attempt}
        topic={topic} place={place} learner={learner} profile={profile}
        skin={skin}
        onAttempt={onAttempt}
        onObserved={setObservations}
        onMore={() => setView({ at: 'practice', topicId: topic.id, attempt: attempt + 1 })}
        onLesson={() => setView({
          at: 'lesson', topicId: topic.id, attempt: 0, askedFor: '',
        })}
        onBack={backFromTopic}
      />
    )
  }

  return (
    <div className="nx">
      <div className="nx-page">
        <header className="nx-top">
          <span className="nx-brand">NEXA<i>•</i>EDU</span>
          <span className="nx-mark">
            {/* Not uppercased. "INTEGRATED SCIENCE · JHS 2" is the same words
                made harder to read, and at 360px it took three lines of the
                header instead of one. */}
            {syllabus.subject} · {profile.level}
          </span>
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 16 }}>
            <button className="nx-link" onClick={onBack}>Change subject</button>
            <button className="nx-link" onClick={onSignOut}>Sign out</button>
          </span>
        </header>

        <div className="nx-body">
          <h1 className="nx-display" style={{ fontSize: 'clamp(30px,5vw,44px)', margin: '0 0 10px' }}>
            {syllabus.subject}
          </h1>
          <p className="nx-lede" style={{ margin: '0 0 6px' }}>
            {shown.length} {shown.length === 1 ? 'topic' : 'topics'}
            {wholeSubject
              ? ` across the whole subject, in ${syllabus.strands.length} parts.`
              : ` for ${profile.level}.`}
            {' '}Pick one and it will be taught to you.
          </p>
          {/* How this learner is being taught, and why.
              Shown because a parent whose child is given video and no reading
              deserves to know a decision was made rather than wonder whether
              the app is broken. It is also the only way anybody can tell that
              two learners are no longer getting the same thing. */}
          <p className="nx-plan-line">
            <b>How you are being taught:</b> {plan.because}
            {plan.source === 'stated' && ' This will change as your tutor learns you.'}
          </p>

          {/* Where the material came from, never hidden. */}
          {syllabus.note && (
            <p className="nx-fineprint" style={{ margin: '0 0 26px' }}>{syllabus.note}</p>
          )}

          <div style={{ marginBottom: 28 }}>
            <button className="nx-link" onClick={() => setWholeSubject(w => !w)}>
              {wholeSubject
                ? `Show only ${profile.level}`
                : 'Show the whole subject'}
            </button>
          </div>

          {syllabus.strands.map(strand => {
            const rows = strand.subStrands
              .map(ss => ({ ss, topics: ss.topics.filter(t => shown.includes(t)) }))
              .filter(r => r.topics.length)
            if (!rows.length) return null
            return (
              <section key={strand.id} style={{ marginBottom: 34 }}>
                <h2 className="nx-display" style={{ fontSize: 22, margin: '0 0 4px' }}>
                  {strand.name}
                </h2>
                <p className="nx-fineprint" style={{ margin: '0 0 16px' }}>{strand.purpose}</p>
                {rows.map(({ ss, topics }) => (
                  <div key={ss.id} style={{ marginBottom: 18 }}>
                    <p className="nx-mark" style={{ margin: '0 0 8px' }}>{ss.name}</p>
                    <ul className="nx-topics">
                      {topics.map(t => (
                        <TopicRow key={t.id} topic={t} done={worked.has(t.id)}
                          onOpen={() => setView(
                            /* For creche and early primary the game IS the
                               lesson, and the prose is the note the adult
                               sitting with them reads. Opening a topic should
                               therefore start the game, not a wall of text a
                               five year old cannot read. */
                            /* What leads is what this learner's plan says
                               leads, which is the whole point of the plan.
                               Her year decides nothing here any more. */
                            leadsWith(plan) === 'game' && playable(profile.stage, t.title)
                              ? { at: 'game', topicId: t.id, attempt: 0 }
                              : { at: 'lesson', topicId: t.id, attempt: 0, askedFor: '' })} />
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ── the lesson ───────────────────────────────────────────────────────────── */

function Lesson({
  topic, place, learner, askedFor, plan, skin, onAsked,
  onBack, onAgain, onPractise, onPlay,
}: {
  topic: Topic
  place: SyllabusPlace
  learner: LearnerBrief
  /** What the learner asked for last time, when they wanted it differently. */
  askedFor: string
  /** How this learner is taught: what leads, and whether words can be relied on. */
  plan: Plan
  /** Which interface this learner is in. Decides the frame and the chrome. */
  skin: Skin
  /** So an ask made here reaches the decision about how she is taught. */
  onAsked: () => void
  onBack: () => void
  onAgain: (askedFor: string) => void
  onPractise: () => void
  /** Present when this topic has a game, so the prose is never the only way in. */
  onPlay?: () => void
}) {
  const young = skin === 'kid'
  const [text, setText] = useState('')
  const [state, setState] = useState<'live' | 'done' | 'off' | 'failed'>('live')
  const [stage, setStage] = useState<TutorStage>('sent')
  const [why, setWhy] = useState('')
  const [asking, setAsking] = useState(false)
  const [request, setRequest] = useState('')
  /**
   * Whether the lesson is being read out.
   *
   * For the youngest, who are given a page of words by a tutor that has
   * decided words are the right medium for this topic. Reading them aloud is
   * the difference between that being teaching and being decoration.
   */
  const [reading, setReading] = useState(false)

  /* Nothing should still be talking after they leave the lesson. */
  useEffect(() => () => stopSpeaking(), [])

  /**
   * A lesson arrives as one long piece and is read a few paragraphs at a time.
   *
   * It used to be rendered whole: everything the tutor wrote, in one scroll,
   * with the questions and the game at the bottom of it. That is not how
   * anybody is taught. A child gets one idea and a page they can finish, and
   * the length of the whole thing stops being the first thing they see.
   *
   * How many paragraphs a page holds is the one number that changes with age.
   * A five year old gets one at a time; a university student would find that
   * insulting and gets five.
   */
  const perPage = skin === 'kid' ? 1 : skin === 'teen' ? 3 : 5
  const blocks = useMemo(() => blocksOf(text), [text])
  const pages = Math.max(1, Math.ceil(blocks.length / perPage))
  const [page, setPage] = useState(0)

  /* A page that no longer exists, because the lesson was re-taught shorter. */
  const here = Math.min(page, pages - 1)
  const from = here * perPage
  const shown = blocks.slice(from, from + perPage).join('\n\n')
  const last = here >= pages - 1

  /** Her own question, typed, with nothing selected first. */
  const [comment, setComment] = useState('')

  /**
   * Pictures for this lesson, all of them, from the start.
   *
   * A lesson arrives finished: the words, the diagram, the photograph and the
   * clip. The first version made the diagram automatically and left the other
   * two behind buttons, which meant a learner had to know to ask and then wait
   * again having already read the lesson.
   *
   * All three are asked for as soon as there is enough lesson text to draw
   * from, and each appears the moment it is ready rather than everything
   * waiting for the slowest. Any of them may come back as nothing, which is a
   * real answer: not every topic has something worth photographing, and most
   * have nothing worth filming.
   *
   * The cost of this is real and worth stating: with a renderer configured,
   * every lesson opened now pays for one image and one video. See
   * docs/visuals.md.
   */
  const [visuals, setVisuals] = useState<Visual[]>([])
  const [coming, setComing] = useState<VisualKind[]>([])
  const [declined, setDeclined] = useState<VisualKind[]>([])

  /**
   * The lesson video.
   *
   * Last of everything to arrive, because it is two stages: the model writes a
   * storyboard and then the worker machine renders it, which takes about a
   * minute on top of the wait for the scenes. So it is announced while it is
   * coming rather than appearing without warning, and the lesson is readable
   * long before it lands.
   */
  const [video, setVideo] = useState<
    { url: string, scenes: number, narrated: number } | null>(null)
  const [filming, setFilming] = useState(false)

  /**
   * Her side of the lesson.
   *
   * Everything above this line is the platform deciding what she gets. This is
   * the first thing on the page that lets her decide instead: point at any
   * part of it and say explain it, draw it, film it or read it out, and the
   * answer arrives under that paragraph.
   *
   * It is also the best evidence the platform has about how she learns. Six
   * right-or-wrong answers take a week to mean anything and still cannot say
   * what went wrong; one tap on a word says both immediately.
   */
  const lessonRef = useRef<HTMLDivElement | null>(null)
  const { spot, clear } = useSpot(lessonRef)

  /* The youngest cannot read a menu or drag a cursor, so they get one large
     button and the answer read out loud instead. */
  const reads = learner.profile.stage !== 'creche'
    && !/basic ?[12]\b/i.test(learner.profile.level)

  const hers = useAsking({
    learnerId: learner.profile.id,
    topicId: topic.id,
    learner,
    place,
    lesson: text,
    medium: 'prose',
    speak: !reads,
  })

  useEffect(() => {
    const ctrl = new AbortController()

    askLesson(
      { learner, syllabus: place, askedFor },
      { onText: chunk => setText(prev => prev + chunk), onStage: setStage },
      ctrl.signal,
    )
      .then(() => {
        if (ctrl.signal.aborted) return
        setState('done')
      })
      .catch((e: unknown) => {
        if (ctrl.signal.aborted) return
        const said = e instanceof Error ? e.message : ''
        if (e instanceof TutorOff) {
          if (said) console.info('[tutor] ' + said)
          setWhy('The tutor is not switched on here, so this topic cannot be taught yet.')
          setState('off')
          return
        }
        setWhy(said || 'The lesson could not be written just now.')
        setState('failed')
      })

    return () => ctrl.abort()
    /* Runs once. `learner` and `place` are rebuilt on every render of the
       parent, and a new topic or a re-teach arrives as a new key, which
       remounts this component rather than re-running the effect. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* Drawn from the finished lesson rather than from the topic title, so every
     picture illustrates what was actually taught. Silent about failure: a
     lesson with no diagram is still a lesson. */
  const started = useRef(false)
  useEffect(() => {
    if (state !== 'done' || started.current || !text.trim()) return
    started.current = true
    const ctrl = new AbortController()

    const ask = (kind: VisualKind) => {
      setComing(list => [...list, kind])
      return illustrate(
        { kind, topicId: topic.id, learner, syllabus: place, lesson: text },
        ctrl.signal,
      )
        .then(v => {
          if (ctrl.signal.aborted) return
          /* Shown the moment it is ready. Waiting for all three would make the
             page feel slower than the slowest of them. */
          if (v) setVisuals(list => [...list, v])
          else setDeclined(list => [...list, kind])
        })
        .catch(() => { if (!ctrl.signal.aborted) setDeclined(list => [...list, kind]) })
        .finally(() => {
          if (!ctrl.signal.aborted) setComing(list => list.filter(k => k !== kind))
        })
    }

    /* The diagram always, because it costs nothing and is the one that
       teaches. The other two only where something can actually render them. */
    ask('figure')

    /* And the film. Asked for last and awaited longest: it needs the worker to
       render it, so on the free route it queues behind everything else. */
    setFilming(true)
    askVideo({ learner, syllabus: place, lesson: text }, ctrl.signal)
      .then(made => {
        if (ctrl.signal.aborted) return
        setFilming(false)
        if (made) setVideo(made)
      })
      .catch(() => { if (!ctrl.signal.aborted) setFilming(false) })
    rendererAvailable().then(can => {
      if (ctrl.signal.aborted || !can) return
      const first = likelyKind(topic.title, learner.subjectId)
      /* Whichever suits the topic goes first, so that on the free route, where
         one worker answers one job at a time, the more useful one arrives
         first rather than last. */
      if (first === 'clip') { ask('clip'); ask('illustration') }
      else { ask('illustration'); ask('clip') }
    })

    return () => ctrl.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  /**
   * The lesson, as blocks that can be put in any order.
   *
   * Pulled out of the markup so the plan can sort them. Each one knows which
   * medium it is, which is the only thing the sort needs to know.
   */
  const proseNode = (
    <>
      {/* Wrapped, so a selection can be told from a selection anywhere else on
          the page, and numbered by paragraph so an answer can be put back
          where the question was asked. */}
      <div ref={lessonRef} className="nx-askable">
        <Prose
          text={shown}
          startIndex={from}
          className="nx-lesson-p"
          after={i => {
            const mine = hers.asks.filter(a => (a.block ?? -1) === i)
            if (!mine.length) return null
            return mine.map(a => (
              <AskCard
                key={a.id}
                ask={a}
                speak={!reads}
                onHelped={did => { hers.helped(a, did); onAsked() }}
                onAgain={() => { /* the next ask is made by `helped` */ }}
              />
            ))
          }}
        />
      </div>

      {/* Which page of the lesson this is, and how to move.

          Only when there is more than one, so a short lesson does not grow a
          pager it does not need. */}
      {pages > 1 && (
        <div className="nx-pager">
          <button
            className="nx-page-btn"
            disabled={here === 0}
            onClick={() => { setPage(here - 1); stopSpeaking() }}>
            <Icon mark="back" size={18} /> Back
          </button>

          <span className="nx-page-dots" aria-label={`Part ${here + 1} of ${pages}`}>
            {Array.from({ length: pages }, (_, i) => (
              <i key={i} className={i === here ? 'is-now' : i < here ? 'is-done' : ''} />
            ))}
          </span>

          <button
            className="nx-page-btn is-go"
            disabled={last}
            onClick={() => { setPage(here + 1); stopSpeaking() }}>
            Next <Icon mark="next" size={18} />
          </button>
        </div>
      )}

      {/* Somewhere to type, without having to select anything first.

          The only way to ask a question in words used to be to select text and
          find the box inside the menu that appeared. Anybody who did not know
          to do that had no way to say anything at all. */}
      {text.trim().length > 20 && (
        <form
          className="nx-comment"
          onSubmit={e => {
            e.preventDefault()
            const said = comment.trim()
            if (!said) return
            hers.ask('explain', null, said)
            setComment('')
            onAsked()
          }}>
          <label className="nx-comment-label" htmlFor="ask-box">
            {young ? 'Ask me about this' : 'Ask about this lesson'}
          </label>
          <div className="nx-comment-row">
            <input
              id="ask-box"
              className="nx-comment-box"
              value={comment}
              maxLength={400}
              placeholder={young
                ? 'What do you want to know?'
                : 'I did not follow the second step.'}
              onChange={e => setComment(e.target.value)} />
            <button className="nx-comment-go" type="submit" disabled={!comment.trim()}>
              Ask
            </button>
          </div>
        </form>
      )}

      {/* Asks with no paragraph of their own: the big button, and anything
          asked before the lesson had finished arriving. */}
      {hers.asks.filter(a => (a.block ?? -1) < 0).map(a => (
        <AskCard
          key={a.id}
          ask={a}
          speak={!reads}
          onHelped={did => { hers.helped(a, did); onAsked() }}
          onAgain={() => { /* the next ask is made by `helped` */ }}
        />
      ))}

      {/* One button that needs no reading, for the learners who cannot use the
          selection menu. Shown once there is something to not understand. */}
      {!reads && text.trim().length > 40 && (
        <LostButton
          waiting={hers.busy}
          onLost={() => { hers.ask('lost', null, null); onAsked() }} />
      )}

      {spot && (
        <AskMenu
          spot={spot}
          onClose={clear}
          onWant={(want, words) => { hers.ask(want, spot, words); clear(); onAsked() }} />
      )}
    </>
  )

  const filmNode = video ? (
    <figure className="nx-fig">
      <video
        className="nx-film"
        src={video.url}
        controls
        playsInline
        preload="metadata"
        aria-label={`A short video about ${topic.title}`}
      />
      <figcaption className="nx-fig-cap">
        <span className="nx-fig-words">
          A short video on {topic.title}, {video.scenes}{' '}
          {video.scenes === 1 ? 'scene' : 'scenes'}.
        </span>
        {/* Said plainly, because it is the reason the words in it are right
            and the reason it took a minute to arrive. */}
        <span className="nx-fig-by">
          Written by your tutor and drawn as text, so every number and
          label in it is exact.
          {/* Said, because a learner deciding whether to find headphones or
              turn the volume up should not have to press play to find out. */}
          {video.narrated > 0
            ? ' Read aloud, and the words are on screen too.'
            : ' No voice on it, so the words are on screen.'}
        </span>
      </figcaption>
    </figure>
  ) : null

  const picturesNode = visuals.length
    ? <>{visuals.map(v => <Illustration key={v.id} visual={v} />)}</>
    : null

  /**
   * The words, when they are not the way this topic is taught.
   *
   * A wordless plan does not delete the lesson. A parent may want to read it,
   * the learner may want it later, and hiding it outright would be deciding
   * something about her that nobody asked for. It is folded away, and it says
   * plainly who it is there for.
   */
  const [showWords, setShowWords] = useState(false)

  const foldedProse = (
    <details
      className="nx-words-fold"
      open={showWords}
      onToggle={e => setShowWords((e.currentTarget as HTMLDetailsElement).open)}>
      <summary className="nx-words-sum">The words, for a grown up</summary>
      {proseNode}
    </details>
  )

  const ordered = [
    {
      medium: 'video' as const,
      node: filmNode,
    },
    {
      medium: 'picture' as const,
      node: picturesNode,
    },
    {
      medium: 'prose' as const,
      /**
       * Folded only when something else is actually teaching.
       *
       * A wordless plan says words are not the channel for this learner. It
       * does not say she should be shown nothing. With no renderer configured
       * and no worker awake there is no film and no picture, and folding the
       * words then left the page as a title, a line of fineprint and a closed
       * fold: a lesson with nothing in it. Caught in Chrome, where it looked
       * exactly like the app was broken.
       *
       * So the words stand down only when the thing that replaced them has
       * arrived. Not when it is promised, and not when it is merely preferred.
       */
      node: plan.wordless && text.trim().length > 40 && (filmNode || picturesNode)
        ? foldedProse
        : proseNode,
    },
  ]
    .filter(b => b.node !== null)
    .sort((a, b) => rank(plan, a.medium) - rank(plan, b.medium))

  return (
    <Page skin={skin} kind="lesson">
      {young ? (
        <>
          {/* A chevron and the subject, because "Back to Numeracy" is four
              words a five year old cannot read and the arrow is one they
              already know from every other app on the phone. */}
          <div className="kid-lesson-top">
            <button className="kid-back" aria-label="Back" onClick={onBack}>
              <Icon mark="back" size={20} />
            </button>
            <span className="kid-top-name">{learner.subjectName}</span>
            <Mascot size={44} mood={state === 'done' ? 'happy' : 'wave'} />
          </div>

          <h1 className="nx-display" style={{ fontSize: 'clamp(24px,6.4vw,32px)', margin: '0 0 8px' }}>
            {topic.title}
          </h1>
          <p className="nx-lede" style={{ margin: '0 0 6px' }}>{topic.outcome}</p>

          {/* The most useful control on a page of words for somebody who
              cannot read them. Not in a menu, not below the fold. */}
          {text.trim().length > 20 && (
            <button
              className={`kid-read${reading ? ' is-on' : ''}`}
              onClick={() => {
                if (reading) { stopSpeaking(); setReading(false); return }
                setReading(true)
                say(`${topic.title}. ${text.replace(/[*#_`$]/g, '').slice(0, 1200)}`)
              }}>
              <span aria-hidden>🔊</span>
              {reading ? 'Stop reading' : 'Read it to me'}
            </button>
          )}
        </>
      ) : (
        <>
          <button className="nx-link" onClick={onBack} style={{ marginBottom: 22 }}>
            Back to {learner.subjectName}
          </button>

          <p className="nx-mark" style={{ margin: '0 0 10px' }}>
            {place.strand}{place.subStrand ? ` · ${place.subStrand}` : ''} · {topic.year}
          </p>
          <h1 className="nx-display" style={{ fontSize: 'clamp(28px,4.5vw,40px)', margin: '0 0 10px' }}>
            {topic.title}
          </h1>
          <p className="nx-lede" style={{ margin: '0 0 26px' }}>{topic.outcome}</p>
        </>
      )}

          {state === 'live' && !text.trim() && (
            <p className="nx-ai-p nx-ai-wait">
              {stage === 'queued'
                ? 'Your tutor is writing this lesson for you. It takes a few seconds.'
                : 'Preparing the lesson.'}
            </p>
          )}

          {/* In the order this learner needs them.

              The page used to be written in one order for everybody: the words,
              then the film, then the pictures. For a learner whose record says
              reading is where she comes unstuck, that puts the thing that does
              not work first and the thing that does work below the fold.

              So the blocks are laid out and then sorted by the plan. When the
              plan is wordless the written lesson is not the lead at all: it
              stays on the page, folded away, for the adult who wants it. */}
          {ordered.map(b => <Fragment key={b.medium}>{b.node}</Fragment>)}

          {/* What is still coming, named, so the page reads as unfinished
              rather than as finished and thin. */}
          {(coming.length > 0 || filming) && (
            <p className="nx-ai-p nx-ai-wait">
              {coming.includes('figure') && 'Drawing a diagram. '}
              {coming.includes('illustration') && 'Making a picture. '}
              {coming.includes('clip') && 'Making a short clip. '}
              {filming && 'Making a video of this lesson, which takes a minute or two. '}
            </p>
          )}

          {/* Said once, at the end, and only about what was actually turned
              down. A topic with nothing to film is the normal case. */}
          {coming.length === 0 && declined.length > 0 && (
            <p className="nx-fineprint" style={{ maxWidth: '44ch' }}>
              {declined.includes('clip') && declined.includes('illustration')
                ? 'Nothing here is worth a photograph or a video: this topic is '
                  + 'made of labels and exact amounts, which only the diagram can carry.'
                : declined.includes('clip')
                  ? 'Nothing in this topic moves, so there is no clip for it.'
                  : 'There is nothing useful to photograph here.'}
            </p>
          )}

          {state === 'live' && text.trim() && (
            <p className="nx-ai-who"><span className="nx-ai-live">still writing</span></p>
          )}

          {(state === 'off' || state === 'failed') && (
            young ? (
              /* The same failure, for somebody who cannot read it.

                 It used to be the adult copy: two sentences about the tutor
                 not being switched on, in a tier where the learner cannot
                 read either of them and there was no character and nothing to
                 press. A sleeping friend says "not now" without words. */
              <div className="kid-none kid-none-pal">
                <Mascot size={78} mood="rest" />
                <span>Your tutor is asleep. Try a game instead.</span>
                <div className="kid-actions" style={{ width: '100%' }}>
                  {onPlay && (
                    <button className="nx-btn nx-btn-primary" onClick={onPlay}>
                      Play a game
                    </button>
                  )}
                  <button className="nx-btn" onClick={() => onAgain(askedFor)}>
                    Try again
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="nx-ai-p nx-ai-wait">{why}</p>
                {/* The outline is still worth something on its own. */}
                <p className="nx-ai-p nx-ai-wait">
                  What this topic covers is above. You can still practise it, or
                  come back when the tutor is available.
                </p>
                {state === 'failed' && (
                  <button className="nx-link" onClick={() => onAgain(askedFor)}>
                    Try again
                  </button>
                )}
              </>
            )
          )}

          {/* The actions belong at the end, not under the first paragraph of a
              lesson somebody has not read yet. */}
          {state === 'done' && last && (
            /* Stacked for the youngest and in a row for everybody else. Two
               44px targets within a thumb of each other is a layout that
               presses the wrong one for a five year old. */
            <div
              className={young ? 'kid-actions' : undefined}
              style={young ? undefined : { marginTop: 30, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {/* A game first for the youngest, because it is the thing they
                  came for and the thing they can do without reading. */}
              {young && onPlay && (
                <button className="nx-btn nx-btn-primary" onClick={onPlay}>
                  Play a game
                </button>
              )}
              <button
                className={young ? 'nx-btn' : 'nx-btn nx-btn-primary'}
                onClick={onPractise}>
                {young ? 'Answer some questions' : 'Try some questions'}
              </button>
              <button className="nx-btn nx-btn-quiet" onClick={() => setAsking(a => !a)}>
                {young ? 'Teach me another way' : 'Teach it differently'}
              </button>
              {!young && onPlay && (
                <button className="nx-btn nx-btn-quiet" onClick={onPlay}>
                  Play it instead
                </button>
              )}
              {/* No "show me a picture" button any more. A lesson arrives
                  with its pictures; being asked to request them, and then wait
                  again having already read the words, was the wrong shape. */}
            </div>
          )}

          {asking && (
            /* The learner steering their own lesson, which is the thing a
               textbook can never do. It goes into the next attempt's prompt. */
            <div className="nx-ai" style={{ marginTop: 22 }}>
              <p className="nx-ai-who">What would help?</p>
              <textarea
                className="nx-note" rows={2} value={request}
                placeholder="Use a real example. I did not follow the second step."
                onChange={e => setRequest(e.target.value)}
              />
              <button className="nx-btn nx-btn-grow" style={{ marginTop: 12 }}
                disabled={!request.trim()}
                onClick={() => { setAsking(false); onAgain(request.trim()) }}>
                Teach it again
              </button>
            </div>
          )}
    </Page>
  )
}

/* ── practice ─────────────────────────────────────────────────────────────── */

function Practice({
  topic, place, learner, profile, skin, onAttempt, onObserved, onMore, onLesson, onBack,
}: {
  topic: Topic
  place: SyllabusPlace
  learner: LearnerBrief
  profile: LearnerProfile
  /** Which interface this learner is in. Decides the frame and the chrome. */
  skin: Skin
  onAttempt: (a: Attempt) => void
  /** Hands the updated observations up, so the next lesson is built with them. */
  onObserved: (notes: string[]) => void
  /** Another round on the same topic, which arrives as a fresh key. */
  onMore: () => void
  onLesson: () => void
  onBack: () => void
}) {
  const young = skin === 'kid'
  const [questions, setQuestions] = useState<Question[] | null>(null)
  const [state, setState] = useState<'loading' | 'ready' | 'off' | 'failed'>('loading')
  const [stage, setStage] = useState<TutorStage>('sent')
  const [why, setWhy] = useState('')
  const [index, setIndex] = useState(0)
  const [given, setGiven] = useState('')
  const [verdict, setVerdict] = useState<null | boolean>(null)
  const [hinted, setHinted] = useState(false)
  const [marks, setMarks] = useState<boolean[]>([])
  const [round, setRound] = useState<RoundEntry[]>([])

  useEffect(() => {
    const ctrl = new AbortController()

    askQuestions(
      { learner, syllabus: place, count: 4, level: 3 },
      ctrl.signal,
      setStage,
    )
      .then(qs => {
        if (ctrl.signal.aborted) return
        setQuestions(qs)
        setState('ready')
      })
      .catch((e: unknown) => {
        if (ctrl.signal.aborted) return
        const said = e instanceof Error ? e.message : ''
        if (e instanceof TutorOff) {
          if (said) console.info('[tutor] ' + said)
          setWhy('The tutor is not switched on here, so there are no questions yet.')
          setState('off')
          return
        }
        setWhy(said || 'The questions could not be written just now.')
        setState('failed')
      })

    return () => ctrl.abort()
    /* Runs once, for the same reason as the lesson: another round arrives as a
       new key rather than as a changed dependency. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const q = questions?.[index]

  const submit = (answer = given) => {
    if (!q || verdict !== null || !answer.trim()) return
    const correct = isRight(q, answer)
    setVerdict(correct)
    setMarks(m => [...m, correct])
    setRound(r => [...r, {
      ask: q.ask, answer: q.answer, given: answer, correct, hinted,
    }])
    /* Recorded against the topic id, so the same mastery model that follows a
       written course follows this one too. */
    onAttempt({
      objectiveId: topic.id,
      isCorrect: correct,
      hintUsed: hinted,
      at: new Date().toISOString(),
    })
  }

  const next = () => {
    setIndex(i => i + 1)
    setGiven(''); setVerdict(null); setHinted(false)
  }

  /* When the round ends, ask what was learned about this learner and keep it.
     This is the loop that makes the teaching adapt: the note goes into every
     later lesson and explanation in this subject. */
  const finished = !!questions && index >= questions.length
  const filed = useRef(false)
  useEffect(() => {
    if (!finished || filed.current || round.length === 0) return
    filed.current = true
    const ctrl = new AbortController()
    observeRound({ learner, syllabus: place, round }, ctrl.signal)
      .then(note => {
        if (!note || ctrl.signal.aborted) return
        const next = observed(profile.id, learner.subjectId, topic.id, note)
        onObserved(next.observations.map(o => o.note))
      })
    return () => ctrl.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished])

  if (state === 'loading') {
    return (
      <Page skin={skin} kind="quiz">
        <p className="nx-mark" style={{ margin: '0 0 10px' }}>{topic.title}</p>
        <p className="nx-ai-p nx-ai-wait">
          {stage === 'queued'
            ? young
              ? 'Getting your questions ready.'
              : 'Your tutor is writing questions on this topic. A few seconds.'
            : 'Preparing your questions.'}
        </p>
      </Page>
    )
  }

  if (state === 'off' || state === 'failed') {
    return (
      <Page skin={skin} kind="quiz">
        <button className="nx-link" onClick={onBack} style={{ marginBottom: 22 }}>Back</button>
        <p className="nx-mark" style={{ margin: '0 0 10px' }}>{topic.title}</p>
        <p className="nx-ai-p nx-ai-wait">{why}</p>
        <div
          className={young ? 'kid-actions' : undefined}
          style={young ? undefined : { display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 18 }}>
          {state === 'failed' && (
            <button className="nx-btn nx-btn-primary" onClick={onMore}>Try again</button>
          )}
          <button className="nx-btn nx-btn-quiet" onClick={onLesson}>
            {young ? 'Back to the lesson' : 'Read the lesson'}
          </button>
        </div>
      </Page>
    )
  }

  const score = marks.filter(Boolean).length

  if (finished) {
    if (young) {
      return (
        <Page skin="kid" kind="quiz">
          <div className="kid-lesson-top">
            <button className="kid-back" aria-label="Back" onClick={onBack}>
              <Icon mark="back" size={20} />
            </button>
            <span className="kid-top-name">{topic.title}</span>
          </div>

          <div className="kid-score">
            {/* The mascot is pleased for anything, and merely calm for
                nothing. A star pulling a face at a child who got none right
                would be the app telling them they are bad at this. */}
            <Mascot size={86} mood={score > 0 ? 'happy' : 'rest'} />
            <p className="kid-score-n">
              {score}<span>/{marks.length}</span>
            </p>
            <p>
              {score === marks.length
                ? 'Every one right. Your tutor saw how you did it.'
                : score === 0
                  ? 'That one was hard. It usually means it has not landed yet, not that you cannot do it.'
                  : 'Some of it went in. Your tutor saw which parts did not.'}
            </p>
          </div>

          <div className="kid-actions">
            <button className="nx-btn nx-btn-primary" onClick={onMore}>More questions</button>
            <button className="nx-btn nx-btn-quiet" onClick={onLesson}>Read it again</button>
            <button className="nx-btn nx-btn-quiet" onClick={onBack}>Back to the topics</button>
          </div>
        </Page>
      )
    }

    return (
      <div style={{ position: 'relative', paddingTop: 60 }}>
        <div className="nx-in-margin" style={{ top: 60, display: 'grid', gap: 6, justifyItems: 'end' }}>
          {marks.map((ok, i) => <Mark key={i} wrong={!ok} />)}
        </div>
        <div className="nx-body">
          <p className="nx-mark" style={{ margin: '0 0 10px' }}>{topic.title}</p>
          <h1 className="nx-display" style={{ fontSize: 'clamp(52px,9vw,86px)', margin: '0 0 14px' }}>
            {score}<span style={{ color: 'var(--ink-faint)' }}>/{marks.length}</span>
          </h1>
          <p className="nx-lede" style={{ margin: '0 0 28px' }}>
            {score === marks.length
              ? 'All correct. Your tutor has noted how you worked, and the next lesson will take it into account.'
              : score === 0
                ? 'None right this time. That usually means the idea has not landed yet, not that you cannot do it.'
                : 'Some of it went in. Your tutor has noted where it did not.'}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className="nx-btn nx-btn-primary" onClick={onMore}>
              More questions
            </button>
            <button className="nx-btn nx-btn-quiet" onClick={onLesson}>Read it again</button>
            <button className="nx-btn nx-btn-quiet" onClick={onBack}>Back to the topics</button>
          </div>
        </div>
      </div>
    )
  }

  if (!q || !questions) return null

  if (young) {
    return (
      <Page skin="kid" kind="quiz">
        <div className="kid-lesson-top">
          <button className="kid-back" aria-label="Back" onClick={onBack}>
              <Icon mark="back" size={20} />
            </button>
          <span className="kid-top-name">
            {index + 1} of {questions.length}
          </span>
          <Mascot
            size={44}
            mood={verdict === null ? 'wave' : verdict ? 'happy' : 'rest'} />
        </div>

        {/* Dots, as on the games, so progress reads the same way wherever a
            child meets it. */}
        <div className="kid-marks" aria-hidden>
          {questions.map((_, i) => (
            <i
              key={i}
              className={i < marks.length
                ? (marks[i] ? 'is-right' : 'is-wrong')
                : i === index ? 'is-now' : ''} />
          ))}
        </div>

        {/* The question in its own card, large, with a button to hear it. A
            child who cannot read the question cannot answer it however well
            they know the answer. */}
        <div className="kid-q">
          <Prose text={q.ask} className="nx-q-line" />
        </div>

        <button
          className="kid-read"
          onClick={() => say(q.ask.replace(/[*#_`$]/g, ''))}>
          <span aria-hidden>🔊</span> Say the question
        </button>

        {q.kind === 'choice' && q.options ? (
          <div>
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
          <input
            className={`nx-write${verdict === null ? '' : verdict ? ' is-right' : ' is-wrong'}`}
            autoFocus
            value={given}
            disabled={verdict !== null}
            placeholder="your answer"
            onChange={e => setGiven(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') submit() }}
          />
        )}

        {verdict === null ? (
          <div className="kid-actions">
            {q.kind !== 'choice' && (
              <button className="nx-btn nx-btn-primary" disabled={!given.trim()}
                onClick={() => submit()}>
                Check
              </button>
            )}
            <button className="nx-btn nx-btn-quiet"
              onClick={() => { setHinted(true); onLesson() }}>
              Show me the lesson again
            </button>
          </div>
        ) : (
          <>
            <div className={`kid-verdict${verdict ? ' is-right' : ' is-wrong'}`}>
              <Mascot size={44} mood={verdict ? 'happy' : 'rest'} />
              <span>
                {verdict ? 'Yes, that is right.' : `Not that one. It was ${q.answer}.`}
              </span>
            </div>

            {/* The explanation after a wrong answer is the most useful text on
                the page, so it is read out for a learner who cannot read it. */}
            <div className="kid-q" style={{ marginTop: 14 }}>
              <Prose text={q.teach} className="nx-lesson-p" />
            </div>
            <button
              className="kid-read"
              onClick={() => say(q.teach.replace(/[*#_`$]/g, '').slice(0, 800))}>
              <span aria-hidden>🔊</span> Read that to me
            </button>

            <div className="kid-actions">
              <button className="nx-btn nx-btn-primary" onClick={next}>
                {index + 1 === questions.length ? 'Finish' : 'Next question'}
              </button>
            </div>
          </>
        )}
      </Page>
    )
  }

  return (
    <div style={{ position: 'relative', paddingTop: 26 }}>
      <div className="nx-in-margin" style={{ top: 96, display: 'grid', gap: 6, justifyItems: 'end' }}>
        {marks.map((ok, i) => <Mark key={i} wrong={!ok} />)}
      </div>

      <div className="nx-body">
        <button className="nx-link" onClick={onBack} style={{ marginBottom: 22 }}>Back</button>

        <p className="nx-mark" style={{ margin: '0 0 18px' }}>
          {topic.title} · question {index + 1} of {questions.length}
        </p>

        <h1 className="nx-display" style={{ fontSize: 'clamp(24px,3.6vw,33px)', margin: '0 0 28px' }}>
          <Prose text={q.ask} className="nx-q-line" />
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
            <button className="nx-link" onClick={() => { setHinted(true); onLesson() }}>
              Read the lesson again
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
            <Prose text={q.teach} className="nx-lesson-p" />

            <Tutor
              key={`${topic.id}-${index}`}
              profile={profile}
              subjectId={learner.subjectId}
              subjectName={learner.subjectName}
              question={q.ask}
              answer={q.answer}
              given={given}
              stuckOn={learner.stuckOn}
              learned={learner.learned}
              pace={learner.pace}
              syllabus={place}
            />

            <button className="nx-btn nx-btn-primary" onClick={next} style={{ marginTop: 24 }}>
              {index + 1 === questions.length ? 'Finish' : 'Next question'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
