/**
 * Basic 3 to JHS 3.
 *
 * ── What changes at Basic 3 ─────────────────────────────────────────────────
 *
 * The learner reads. That one fact is the whole difference from the kid
 * interface, and it runs in both directions: words can carry the meaning
 * again, so the pictures shrink to markers and the type comes down; and a nine
 * year old reads a playroom as being for younger children, so an interface
 * that looks like the kid one is one they will not be seen using.
 *
 * It is also the line the platform already draws everywhere else. `isYoung`
 * decides who is taught by prose, `standingFor` decides where a game stops
 * leading, and this decides which home screen they get. All three agree
 * because they read the same function.
 *
 * ── What it keeps from the kid interface ────────────────────────────────────
 *
 * The record. Points, days learned and the daily goal are the same numbers
 * from the same attempts through the same `rewards.ts`, so a learner moving up
 * from Basic 2 to Basic 3 keeps their count. A platform that resets a child's
 * points because they had a birthday has told them the points were never
 * theirs.
 */

import { useMemo, useState } from 'react'
import '../styles/teen.css'
import { Icon, Tile, type TileArt } from '../components/kid/art'
import { artFor } from '../components/kid/subjectArt'
import { subjectsFor } from '../lib/education/subjects'
import { allTopics, syllabusFor, topicsFor, type Topic } from '../lib/education/syllabus'
import { standingOf } from '../lib/education/rewards'
import { localPlan, savedPlan } from '../lib/education/plan'
import { asksFor } from '../lib/education/ask'
import type { Attempt } from '../lib/education/mastery'
import type { LearnerProfile } from '../lib/education/learner'

const DAY_LETTERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

interface Course {
  id: string
  name: string
  note: string
  art: TileArt
  topics: Topic[]
  done: number
}

export default function TeenApp({
  profile, attempts, onOpenSubject, onSignOut, onBack,
}: {
  profile: LearnerProfile
  attempts: Attempt[]
  onOpenSubject: (subjectId: string, topicId?: string) => void
  onSignOut: () => void
  /** Present when a parent or a school opened this learner. */
  onBack?: () => void
}) {
  const [menu, setMenu] = useState(false)

  const worked = useMemo(() => new Set(attempts.map(a => a.objectiveId)), [attempts])

  const courses = useMemo<Course[]>(() => {
    return subjectsFor(profile.stage).map(s => {
      const syllabus = syllabusFor(profile.stage, s.id)
      const mine = syllabus ? topicsFor(syllabus, profile.level) : []
      const topics = mine.length ? mine : (syllabus ? allTopics(syllabus) : [])
      return {
        id: s.id,
        name: s.name,
        /* The year and the count, which is what they check. `note` from the
           subject list when it has one, because it is what tells near
           neighbours like Physics and Integrated Science apart. */
        note: s.note ? s.note : `${profile.level} · ${topics.length} topics`,
        art: artFor(s.name),
        topics,
        done: topics.filter(t => worked.has(t.id)).length,
      }
    }).filter(c => c.topics.length > 0)
  }, [profile.stage, profile.level, worked])

  const standing = useMemo(() => standingOf(attempts, profile.stage), [attempts, profile.stage])

  /** Read, not decided, so this screen reports the tutor's choice. */
  const plan = useMemo(() => {
    const first = courses[0]
    const saved = first ? savedPlan(profile.id, first.id) : null
    return saved ?? localPlan({ profile, attempts, asks: asksFor(profile.id) })
  }, [profile, attempts, courses])

  const where = useMemo(() => {
    const m = new Map<string, { course: Course, topic: Topic }>()
    for (const c of courses) for (const t of c.topics) m.set(t.id, { course: c, topic: t })
    return m
  }, [courses])

  const carryOn = useMemo(() => {
    const recent = attempts.filter(a => where.has(a.objectiveId)).at(-1)
    return recent ? where.get(recent.objectiveId) ?? null : null
  }, [attempts, where])

  const first = profile.name.trim().split(' ')[0] || 'there'
  const todayBox = (new Date().getDay() + 6) % 7

  return (
    <div className="teen">
      <div className="teen-bar">
        <div className="teen-bar-in">
          <span className="teen-wordmark">NEXA<span>·</span>EDU</span>
          <span className="teen-count is-xp" title="Points">
            <Icon mark="star" size={18} /> {standing.xp}
          </span>
          <span className="teen-count is-days" title="Days learned this week">
            <Icon mark="flame" size={18} /> {standing.daysLearned}
          </span>
          <button className="teen-menu" aria-label="Menu" onClick={() => setMenu(true)}>
            <Icon mark="menu" size={22} />
          </button>
        </div>
      </div>

      <div className="teen-page">
        <div className="teen-hello">
          <div>
            <h1 className="teen-hi">Hi {first}</h1>
            <span className="teen-chip">{profile.level}</span>
          </div>
        </div>

        {/* The day's work.

            The big number is points earned today and the small one is the goal
            in questions, because points are what they watch and questions are
            what the goal is honestly counted in. Showing a points target would
            mean inventing one. */}
        <div className="teen-card">
          <div className="teen-card-top">
            <h2>Daily goal</h2>
            {standing.goal.met && <span className="teen-chip">Done</span>}
          </div>
          <div className="teen-card-body">
            <div className="teen-goal-nums">
              <span className="teen-goal-xp">{standing.goal.xp} XP today</span>
              <span className="teen-goal-of">
                {Math.min(standing.goal.done, standing.goal.goal)} / {standing.goal.goal} questions
              </span>
            </div>
            <span className="teen-bar-track" aria-hidden>
              <i style={{ width: `${Math.round(standing.goal.part * 100)}%` }} />
            </span>

            {/* Days learned this week. It grows and never resets: see
                rewards.ts for why a broken streak is the wrong idea here. */}
            <div className="teen-week">
              <span className="teen-days">
                {standing.week.map((on, i) => (
                  <span
                    key={i}
                    className={`teen-day${on ? ' is-done' : ''}${i === todayBox ? ' is-today' : ''}`}
                    aria-label={`${DAY_NAMES[i]}${on ? ', learned' : ''}`}>
                    {DAY_LETTERS[i]}
                  </span>
                ))}
              </span>
              {/* No second flame. The header already carries the count, and
                  two of them on one screen said the same thing twice. */}
              <span className="teen-row-sub">this week</span>
            </div>
          </div>
        </div>

        {carryOn && (
          <div className="teen-card">
            <div className="teen-card-top is-wash">
              <h2>Carry on</h2>
            </div>
            <button
              className="teen-row"
              onClick={() => onOpenSubject(carryOn.course.id, carryOn.topic.id)}>
              <span className="teen-row-art"><Tile art={carryOn.course.art} size={26} /></span>
              <span className="teen-row-body">
                <span className="teen-row-title">{carryOn.topic.title}</span>
                <span className="teen-row-sub">{carryOn.course.name}</span>
              </span>
              <span className="teen-chev" aria-hidden><Icon mark="next" size={17} /></span>
            </button>
          </div>
        )}

        <div className="teen-card">
          <div className="teen-card-top is-wash">
            <h2>Subjects</h2>
            <span className="teen-row-sub">{courses.length}</span>
          </div>
          {courses.length === 0 ? (
            <p className="teen-none">
              No subjects have an outline for {profile.level} yet.
            </p>
          ) : courses.map(c => (
            <button key={c.id} className="teen-row" onClick={() => onOpenSubject(c.id)}>
              <span className="teen-row-art"><Tile art={c.art} size={26} /></span>
              <span className="teen-row-body">
                <span className="teen-row-title">{c.name}</span>
                <span className="teen-row-sub">{c.note}</span>
                {c.done > 0 && (
                  <span className="teen-line" aria-hidden>
                    <i style={{ width: `${Math.round(c.done / c.topics.length * 100)}%` }} />
                  </span>
                )}
              </span>
              <span className="teen-chev" aria-hidden><Icon mark="next" size={17} /></span>
            </button>
          ))}
        </div>

        {/* What the tutor decided about how they learn, said to them rather
            than about them. A learner given video and no reading should be
            told that a choice was made, not left to wonder. */}
        <div className="teen-card">
          <div className="teen-card-top is-wash">
            <h2>How you are being taught</h2>
          </div>
          <p className="teen-none">{plan.because}</p>
        </div>
      </div>

      {menu && (
        <div className="teen-sheet" onClick={() => setMenu(false)}>
          <div className="teen-sheet-in" onClick={e => e.stopPropagation()}>
            {onBack && (
              <button className="teen-sheet-item" onClick={onBack}>
                Back to everyone
              </button>
            )}
            <button className="teen-sheet-item" onClick={onSignOut}>Sign out</button>
            <button className="teen-sheet-item" onClick={() => setMenu(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
