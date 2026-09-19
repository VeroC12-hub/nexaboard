/**
 * The platform, for a learner who cannot read it.
 *
 * ── Why a separate interface rather than a theme ────────────────────────────
 *
 * The adult screens are a list of subjects, a lesson and some questions, and
 * they assume the person using them can read the navigation, knows what a
 * syllabus strand is, and will scroll to find things. None of that is true of
 * a five year old, and no amount of restyling makes it true.
 *
 * Nothing here is a second source of truth. Progress comes from the attempts
 * the mastery model already records, points and badges are derived from those
 * same attempts by `rewards.ts`, and the topics come from the syllabus.
 *
 * ── What changed after somebody looked at it ────────────────────────────────
 *
 * - **Five tabs became two.** `Learn` only repeated Home's subject tiles, so
 *   tapping a tile now opens the subject in place. `Profile` is a grown up's
 *   screen and was taking a fifth of a child's navigation, so it moved to the
 *   header. Rewards is reached by tapping your own stars.
 * - **The counters were inert.** Points and days looked like buttons, did
 *   nothing, and said nothing about what they counted.
 * - **It was too plain.** One character on white cards is not a world at this
 *   age. There is a drawn sky behind the page and a cast of six who turn up in
 *   different places.
 * - **Nothing hovered.** Schools have laptops, and on a laptop a card with no
 *   hover is indistinguishable from a picture.
 */

import { useEffect, useMemo, useState } from 'react'
import { KidBar, KidHead, KidShell, type KidTab } from '../components/kid/Shell'
import { BadgeArt, Icon, Pal, Sparkles, Tile, type TileArt } from '../components/kid/art'
import { palAt, palFor, type Friend } from '../components/kid/cast'
import { artFor } from '../components/kid/subjectArt'
import { subjectsFor } from '../lib/education/subjects'
import { allTopics, syllabusFor, topicsFor, type Topic } from '../lib/education/syllabus'
import { ackBadges, freshBadges, standingOf, type Standing } from '../lib/education/rewards'
import { playable } from '../lib/education/heavy'
import { localPlan, savedPlan } from '../lib/education/plan'
import { asksFor } from '../lib/education/ask'
import type { Attempt } from '../lib/education/mastery'
import type { LearnerProfile } from '../lib/education/learner'
import { canSpeak, setVoiceOn, stop as stopSpeech, voiceOn } from '../lib/education/speak'

/** Monday first, as the week strip is drawn. */
const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const DAY_LETTERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

const CHIPS: Array<readonly ['all' | 'new' | 'going', string]> = [
  ['all', 'Everything'],
  ['new', 'Not started'],
  ['going', 'Started'],
]

/** One subject, with everything the kid screens need about it. */
interface KidSubject {
  id: string
  name: string
  art: TileArt
  pal: Friend
  /** Their year's topics only. The whole subject is not a child's business. */
  topics: Topic[]
  /** How many of those they have worked on. */
  done: number
}

/* ── what every screen is given ───────────────────────────────────────────── */

interface Seen {
  profile: LearnerProfile
  attempts: Attempt[]
  subjects: KidSubject[]
  worked: Set<string>
  standing: Standing
  onOpen: (subjectId: string, topicId?: string) => void
}

/* ── home ─────────────────────────────────────────────────────────────────── */

/**
 * Opens on something to carry on with, not on a choice.
 *
 * A child asked to pick from four subjects picks the one with the nicest
 * picture. The subjects are still there, above the fold, but the first thing
 * offered is the topic they were last working on.
 */
function Home({ profile, subjects, standing, onOpen, carryOn, suggested, onSubject }: Seen & {
  carryOn: { subject: KidSubject, topic: Topic } | null
  suggested: Array<{ subject: KidSubject, topic: Topic }>
  onSubject: (id: string) => void
}) {
  const firstName = profile.name.trim().split(' ')[0]
  const todayBox = (new Date().getDay() + 6) % 7

  return (
    <>
      <div className="kid-hello">
        <div>
          <p className="kid-hi">Hi{firstName ? `, ${firstName}` : ''}</p>
          <h1 className="kid-ask">Ready to learn something today?</h1>
        </div>
        <span className="kid-mascot">
          <Pal who="star" size={96} mood={standing.goal.met ? 'happy' : 'wave'} />
        </span>
      </div>

      {/* The subjects, as pictures. Tapping one opens it here: there is no
          longer a separate Learn tab showing the same four tiles. */}
      <div className={`kid-tiles${subjects.length > 4 ? ' is-many' : ''}`}>
        {subjects.map(sub => (
          <button key={sub.id} className="kid-tile" onClick={() => onSubject(sub.id)}>
            <span className="kid-tile-art"><Tile art={sub.art} /></span>
            <span className="kid-tile-name">{sub.name}</span>
          </button>
        ))}
      </div>

      {/* The day's work, in answers rather than minutes: a clock rewards
          sitting still and this should reward doing something. */}
      <div className="kid-goal">
        <div className="kid-goal-body">
          <h2>Today</h2>
          <p>
            {standing.goal.met
              ? 'You did it. Anything more today is a bonus.'
              : standing.goal.done
                ? 'Keep going, you are nearly there.'
                : 'Answer a few questions to fill this up.'}
          </p>
          <span className="kid-bar" aria-hidden>
            <i style={{ width: `${Math.round(standing.goal.part * 100)}%` }} />
          </span>
          {/* Capped for display. The record keeps the true count, but a full
              bar over a line reading "6 of 5" looks like a fault. */}
          <p className="kid-goal-count">
            {Math.min(standing.goal.done, standing.goal.goal)} of {standing.goal.goal}
          </p>
        </div>
        <Pal who="sun" size={72} mood={standing.goal.met ? 'happy' : 'wave'} />
      </div>

      {/* Days learned this week. It grows and never resets: a child with no
          data for two days has not failed at anything. See rewards.ts. */}
      <div className="kid-week">
        <span className="kid-days">
          {standing.week.map((on, i) => (
            <span
              key={i}
              className={`kid-day${on ? ' is-done' : ''}${i === todayBox ? ' is-today' : ''}`}
              aria-label={`${DAY_NAMES[i]}${on ? ', learned' : ''}`}>
              {DAY_LETTERS[i]}
            </span>
          ))}
        </span>
        {/* No second flame here. The header already carries the count, and two
            of them on one screen said the same thing twice. This says what the
            row of boxes is instead. */}
        <span className="kid-row-sub" style={{ marginTop: 0 }}>this week</span>
      </div>

      {carryOn && (
        <>
          <KidHead title="Carry on" />
          <button
            className="kid-row"
            onClick={() => onOpen(carryOn.subject.id, carryOn.topic.id)}>
            <span className="kid-row-art"><Tile art={carryOn.subject.art} size={36} /></span>
            <span className="kid-row-body">
              <span className="kid-row-title">{carryOn.topic.title}</span>
              <span className="kid-row-sub">{carryOn.subject.name}</span>
            </span>
            <span className="kid-go" aria-hidden><Icon mark="play" size={18} /></span>
          </button>
        </>
      )}

      {suggested.length > 0 && (
        <>
          <KidHead title="Something new" />
          <div className="kid-two">
            {suggested.map(({ subject, topic }) => (
              <button
                key={topic.id}
                className="kid-card"
                onClick={() => onOpen(subject.id, topic.id)}>
                {/* A friend in the art panel, so this is not a pale block with
                    a small symbol floating in the middle of it. */}
                {/* The character alone. A friend and a subject symbol in the
                    same panel were two marks competing in 92 pixels; the
                    subject is already named on the line below. */}
                <span className="kid-card-art">
                  <Pal who={subject.pal} size={68} mood="wave" />
                </span>
                <span className="kid-card-name">{topic.title}</span>
                <span className="kid-card-sub">{subject.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </>
  )
}

/* ── one subject, its topics ──────────────────────────────────────────────── */

function SubjectPage({ subject, attempts, worked, onOpen, onBack }: Seen & {
  subject: KidSubject
  onBack: () => void
}) {
  const [only, setOnly] = useState<'all' | 'new' | 'going'>('all')

  const shown = subject.topics.filter(t => {
    if (only === 'new') return !worked.has(t.id)
    if (only === 'going') return worked.has(t.id)
    return true
  })

  return (
    <>
      <div className="kid-top">
        <button className="kid-back" aria-label="Back" onClick={onBack}>
          <Icon mark="back" size={20} />
        </button>
        <span className="kid-top-name">{subject.name}</span>
        <span style={{ width: 46 }} />
      </div>

      <div className="kid-banner">
        <div className="kid-banner-body">
          <h1>Let us do some {subject.name.toLowerCase()}</h1>
          <p>{subject.done} of {subject.topics.length} started</p>
        </div>
        <Pal who={subject.pal} size={74} mood="happy" />
      </div>

      <div className="kid-chips">
        {CHIPS.map(([k, name]) => (
          <button
            key={k}
            className={`kid-chip${only === k ? ' is-on' : ''}`}
            onClick={() => setOnly(k)}>
            {name}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <div className="kid-none kid-none-pal">
          <Pal who={subject.pal} size={68} mood="rest" />
          <span>Nothing here. Try another one.</span>
        </div>
      ) : shown.map((t, i) => {
        const mine = attempts.filter(a => a.objectiveId === t.id)
        const right = mine.filter(a => a.isCorrect === true).length
        return (
          <button key={t.id} className="kid-row" onClick={() => onOpen(subject.id, t.id)}>
            {/* A friend per row rather than the subject's symbol repeated.
                The subject is already named in the banner above, so four
                identical tiles down the page carried no information at all,
                and these are decoration that does not claim any: nothing
                about the character says anything about the topic. */}
            <span className="kid-row-art"><Pal who={palAt(i)} size={38} mood="wave" /></span>
            <span className="kid-row-body">
              <span className="kid-row-title">{t.title}</span>
              <KidBar done={right} total={Math.max(10, right)} />
            </span>
            <span className="kid-go" aria-hidden><Icon mark="play" size={18} /></span>
          </button>
        )
      })}
    </>
  )
}

/* ── play ─────────────────────────────────────────────────────────────────── */

function Play({ profile, subjects, onOpen }: Seen) {
  /* Only topics a game genuinely fits. A game bolted onto a topic it does not
     suit is a distraction wearing the costume of teaching, and this screen is
     where that would happen at scale. */
  const rows: Array<{ subject: KidSubject, topic: Topic }> = []
  for (const s of subjects) {
    for (const t of s.topics) {
      if (playable(profile.stage, t.title)) rows.push({ subject: s, topic: t })
    }
  }

  return (
    <>
      <div className="kid-banner is-warm">
        <div className="kid-banner-body">
          <h1>What shall we play?</h1>
          <p>Every game is a new one</p>
        </div>
        <Pal who="goat" size={74} mood="happy" />
      </div>

      {rows.length === 0 ? (
        <div className="kid-none kid-none-pal">
          <Pal who="bird" size={68} mood="rest" />
          <span>No games for your topics yet. There are lessons waiting though.</span>
        </div>
      ) : rows.slice(0, 12).map(({ subject, topic }, i) => (
        <button
          key={topic.id}
          className="kid-row"
          onClick={() => onOpen(subject.id, topic.id)}>
          {/* By position, so the row above and below are never the same
              friend. Hashing the id put two of the same next to each other. */}
          <span className="kid-row-art"><Pal who={palAt(i)} size={40} mood="wave" /></span>
          <span className="kid-row-body">
            <span className="kid-row-title">{topic.title}</span>
            <span className="kid-row-sub">{subject.name}</span>
          </span>
          <span className="kid-go" aria-hidden><Icon mark="play" size={18} /></span>
        </button>
      ))}
    </>
  )
}

/* ── rewards ──────────────────────────────────────────────────────────────── */

function Rewards({ standing, onBack }: Seen & { onBack: () => void }) {
  /**
   * Anything earned since the last time this screen was open.
   *
   * Read once, in the initialiser, rather than recomputed as the screen
   * re-renders: the whole point is a moment that happens once, and a value
   * that changes underneath would either replay it or lose it.
   */
  const [fresh] = useState(() => freshBadges(standing.badges))

  /* Marked as cheered on the way in, not on the way out, because a child who
     closes the app mid-celebration should not get it again. */
  useEffect(() => { ackBadges(fresh) }, [fresh])

  const won = fresh[0]

  return (
    <>
      {/* The one piece of decorative motion in the platform, and it only
          exists when something was actually won. */}
      {won && <Sparkles />}

      <div className="kid-top">
        <button className="kid-back" aria-label="Back" onClick={onBack}>
          <Icon mark="back" size={20} />
        </button>
        <span className="kid-top-name">Your stars</span>
        <span style={{ width: 46 }} />
      </div>

      <div className={`kid-banner${won ? ' is-won' : ''}`}>
        <div className="kid-banner-body">
          {/* When something has just been won, the screen says so by name.
              Confetti with no sentence under it tells a child that something
              good happened without telling them what. */}
          <h1>
            {won
              ? `You got ${won.name}`
              : standing.earned ? 'Look what you have done' : 'Your stars start here'}
          </h1>
          {/* What the two counters in the header actually mean, written down.
              This is the screen they now lead to, so it has to answer the
              question rather than show the same numbers again. */}
          <p>
            {standing.xp} points for answering, and {standing.daysLearned}{' '}
            {standing.daysLearned === 1 ? 'day' : 'days'} learning this week.
          </p>
        </div>
        <Pal who="star" size={74} mood={won || standing.earned ? 'happy' : 'rest'} />
      </div>

      <div className="kid-stats">
        <span className="kid-stat-cell">
          <span className="kid-stat-name">Topics you have tried</span>
          <span className="kid-stat-n">{standing.topics}</span>
        </span>
        <span className="kid-stat-cell">
          <span className="kid-stat-name">Days this week</span>
          <span className="kid-stat-n">
            {standing.daysLearned} <Icon mark="flame" size={22} />
          </span>
        </span>
        <span className="kid-stat-cell">
          <span className="kid-stat-name">Badges earned</span>
          <span className="kid-stat-n">{standing.earned}</span>
        </span>
      </div>

      <KidHead title="Badges" />
      {/* Unearned ones are drawn in outline rather than hidden. A child should
          see what is coming: a locked shape they cannot make out is not an
          incentive, it is a shut door. */}
      <div className="kid-badges">
        {standing.badges.map(b => (
          <span
            key={b.id}
            className={`kid-badge${b.earned ? ' is-earned' : ''}${
              fresh.some(f => f.id === b.id) ? ' is-new' : ''}`}>
            <BadgeArt art={b.art} earned={b.earned} size={62} />
            <span className="kid-badge-name">{b.name}</span>
          </span>
        ))}
      </div>

      {standing.next && (
        <>
          <KidHead title="Next one" />
          <div className="kid-row is-flat">
            <span className="kid-row-art" style={{ background: 'transparent' }}>
              <BadgeArt art={standing.next.art} earned={false} size={48} />
            </span>
            <span className="kid-row-body">
              <span className="kid-row-title">{standing.next.name}</span>
              <span className="kid-row-sub">{standing.next.how}</span>
              <span className="kid-row-bar" aria-hidden>
                <i style={{ width: `${Math.round(standing.next.part * 100)}%` }} />
              </span>
            </span>
          </div>
        </>
      )}

      <KidHead title="This week" />
      <div className="kid-row is-flat">
        <span className="kid-row-art" style={{ background: 'transparent' }}>
          <BadgeArt art="flame" earned={standing.challenge.met} size={48} />
        </span>
        <span className="kid-row-body">
          <span className="kid-row-title">{standing.challenge.what}</span>
          <KidBar done={standing.challenge.done} total={standing.challenge.target} />
        </span>
      </div>
    </>
  )
}

/* ── the grown up's screen ────────────────────────────────────────────────── */

function GrownUp({ profile, because, onBack, onSignOut, onBackToAll }: {
  profile: LearnerProfile
  because: string
  onBack: () => void
  onSignOut: () => void
  onBackToAll?: () => void
}) {
  /* Read once on the way in. Held in state rather than read from storage on
     every render, because the whole reason the old mute button did nothing was
     that it wrote the preference and never re-rendered. */
  const [voice, setVoice] = useState(() => canSpeak() && voiceOn())

  return (
    <>
      <div className="kid-top">
        <button className="kid-back" aria-label="Back" onClick={onBack}>
          <Icon mark="back" size={20} />
        </button>
        <span className="kid-top-name">For a grown up</span>
        <span style={{ width: 46 }} />
      </div>

      <div className="kid-banner is-cool">
        <div className="kid-banner-body">
          <h1>{profile.name || 'Your learner'}</h1>
          <p>{profile.level}</p>
        </div>
        <Pal who="drum" size={74} mood="wave" />
      </div>

      {/* What the tutor decided, said out loud. A parent whose child is being
          given video and no reading should know a decision was made rather
          than wonder whether the app is broken. */}
      <KidHead title="How they are being taught" />
      <p className="kid-none" style={{ textAlign: 'left' }}>{because}</p>

      {/* The voice preference, which used to be a second speaker in the
          child's header beside the one that reads the page: two identical
          icons, one of which turned the other on.

          It belongs here. Whether the games narrate themselves is a standing
          decision about a household, not an action a four year old takes, and
          the person who wants a quiet room is the person holding the phone.
          Tapping the speaker in the header still reads the page aloud whatever
          this says, because a direct request is not a preference. */}
      {canSpeak() && (
        <>
          <KidHead title="Sound" />
          <button
            className="kid-row"
            aria-pressed={voice}
            onClick={() => {
              const next = !voice
              setVoice(next)
              setVoiceOn(next)
              if (!next) stopSpeech()
            }}>
            <span className="kid-row-art">
              <Icon mark={voice ? 'speak' : 'mute'} size={26} />
            </span>
            <span className="kid-row-body">
              <span className="kid-row-title">
                {voice ? 'Games read themselves out' : 'Games stay quiet'}
              </span>
              <span className="kid-row-sub">
                {voice
                  ? 'Every round is said aloud as it appears. Tap to turn that off.'
                  : 'Nothing speaks unless it is asked to. Tap to turn the voice on.'}
              </span>
            </span>
            <span className="kid-go" aria-hidden><Icon mark="next" size={18} /></span>
          </button>
        </>
      )}

      {onBackToAll && (
        <button className="kid-row" onClick={onBackToAll}>
          <span className="kid-row-art"><Icon mark="grown" size={26} /></span>
          <span className="kid-row-body">
            <span className="kid-row-title">Back to everyone</span>
            <span className="kid-row-sub">The learners you look after</span>
          </span>
          <span className="kid-go" aria-hidden><Icon mark="next" size={18} /></span>
        </button>
      )}

      <button className="kid-row" onClick={onSignOut}>
        <span className="kid-row-art"><Icon mark="back" size={26} /></span>
        <span className="kid-row-body">
          <span className="kid-row-title">Sign out</span>
          <span className="kid-row-sub">You will need the password to come back</span>
        </span>
        <span className="kid-go" aria-hidden><Icon mark="next" size={18} /></span>
      </button>
    </>
  )
}

/* ── the app ──────────────────────────────────────────────────────────────── */

export default function KidApp({
  profile, attempts, onOpenSubject, onSignOut, onBack,
}: {
  profile: LearnerProfile
  attempts: Attempt[]
  /**
   * Into the real teaching.
   *
   * A topic id when they tapped a particular one, so the lesson or the game
   * opens on it rather than on an outline they cannot read.
   */
  onOpenSubject: (subjectId: string, topicId?: string) => void
  onSignOut: () => void
  /** Present when a parent or a school opened this learner. */
  onBack?: () => void
}) {
  const [tab, setTab] = useState<KidTab>('home')
  /** Which subject is open, if any. Lives on Home now that Learn is gone. */
  const [open, setOpen] = useState<string | null>(null)

  const worked = useMemo(() => new Set(attempts.map(a => a.objectiveId)), [attempts])

  const subjects = useMemo<KidSubject[]>(() => {
    return subjectsFor(profile.stage).map(s => {
      const syllabus = syllabusFor(profile.stage, s.id)
      const topics = syllabus ? topicsFor(syllabus, profile.level) : []
      /* Their year may hold nothing for a subject that starts later, in which
         case the whole subject is the honest fallback rather than an empty
         screen. */
      const mine = topics.length ? topics : (syllabus ? allTopics(syllabus) : [])
      return {
        id: s.id,
        name: s.name,
        art: artFor(s.name),
        pal: palFor(s.name),
        topics: mine,
        done: mine.filter(t => worked.has(t.id)).length,
      }
    }).filter(s => s.topics.length > 0)
  }, [profile.stage, profile.level, worked])

  const standing = useMemo(
    () => standingOf(attempts, profile.stage),
    [attempts, profile.stage])

  /**
   * How this learner is taught, for the grown up's screen to say out loud.
   *
   * Read rather than decided here: this screen reports the decision, it does
   * not make it.
   */
  const plan = useMemo(() => {
    const first = subjects[0]
    const saved = first ? savedPlan(profile.id, first.id) : null
    return saved ?? localPlan({ profile, attempts, asks: asksFor(profile.id) })
  }, [profile, attempts, subjects])

  /* Topic id to where it lives, built once. */
  const where = useMemo(() => {
    const m = new Map<string, { subject: KidSubject, topic: Topic }>()
    for (const s of subjects) {
      for (const t of s.topics) m.set(t.id, { subject: s, topic: t })
    }
    return m
  }, [subjects])

  const carryOn = useMemo(() => {
    const recent = attempts.filter(a => where.has(a.objectiveId)).at(-1)
    return recent ? where.get(recent.objectiveId) ?? null : null
  }, [attempts, where])

  /** Two they have not started, so there is always somewhere to go next. */
  const suggested = useMemo(() => {
    const out: Array<{ subject: KidSubject, topic: Topic }> = []
    for (const s of subjects) {
      const t = s.topics.find(x => !worked.has(x.id))
      if (t) out.push({ subject: s, topic: t })
    }
    return out.slice(0, 2)
  }, [subjects, worked])

  /**
   * What the screen you are on would say out loud.
   *
   * Built here because the control lives in the shell: one button that reads
   * this page, wherever you are. Numbers are said as words a child hears
   * rather than as labels they cannot read.
   */
  const reads = (): string => {
    const first = profile.name.trim().split(' ')[0]
    const g = standing.goal
    const sub = subjects.find(x => x.id === open)

    if (tab === 'home' && sub) {
      return `${sub.name}. You have started ${sub.done} of ${sub.topics.length}.`
        + ' Here are the topics. '
        + sub.topics.slice(0, 6).map(t => t.title).join('. ')
    }

    if (tab === 'home') {
      const bits = [
        first ? `Hi ${first}.` : 'Hi.',
        g.met
          ? `You have done all ${g.goal} for today. Well done.`
          : `Today you have done ${g.done} out of ${g.goal}.`,
        standing.daysLearned === 1
          ? 'You have learned on one day this week.'
          : `You have learned on ${standing.daysLearned} days this week.`,
      ]
      if (carryOn) bits.push(`You can carry on with ${carryOn.topic.title}.`)
      if (suggested.length) bits.push(`Or try ${suggested[0].topic.title}.`)
      return bits.join(' ')
    }

    if (tab === 'play') {
      return 'What shall we play? '
        + subjects.flatMap(x => x.topics)
          .filter(t => playable(profile.stage, t.title))
          .slice(0, 5).map(t => t.title).join('. ')
    }

    if (tab === 'rewards') {
      return [
        `You have ${standing.xp} points for answering questions.`,
        `You have learned on ${standing.daysLearned} days this week.`,
        `You have ${standing.earned} badges.`,
        standing.next ? `The next one is ${standing.next.name}. ${standing.next.how}.` : '',
      ].filter(Boolean).join(' ')
    }

    return [
      profile.name ? `${profile.name}.` : '',
      profile.level ? `They are in ${profile.level}.` : '',
      plan.because,
    ].filter(Boolean).join(' ')
  }

  const seen: Seen = {
    profile, attempts, subjects, worked, standing, onOpen: onOpenSubject,
  }
  const openSubject = subjects.find(s => s.id === open) ?? null

  return (
    <KidShell
      tab={tab}
      reads={reads}
      xp={standing.xp}
      days={standing.daysLearned}
      onTab={t => { setTab(t); if (t !== 'home') setOpen(null) }}>

      {tab === 'home' && (openSubject
        ? <SubjectPage {...seen} subject={openSubject} onBack={() => setOpen(null)} />
        : (
          <Home
            {...seen}
            carryOn={carryOn}
            suggested={suggested}
            onSubject={setOpen} />
        ))}

      {tab === 'play' && <Play {...seen} />}

      {tab === 'rewards' && <Rewards {...seen} onBack={() => setTab('home')} />}

      {tab === 'profile' && (
        <GrownUp
          profile={profile}
          because={plan.because}
          onBack={() => setTab('home')}
          onSignOut={onSignOut}
          onBackToAll={onBack} />
      )}
    </KidShell>
  )
}
