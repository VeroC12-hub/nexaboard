/**
 * Where a school declares its own curriculum and has the AI build it.
 *
 * ── The thing this screen exists to avoid ───────────────────────────────────
 *
 * Every piece of the pipeline already existed and none of it had a front door.
 * `defineCurriculum`, `generateOutline`, `generateTaught` and `approveOutline`
 * were written, tested and reachable from nothing, so a school could not use
 * any of it. This is that door.
 *
 * ── The order of the work, and why it is this order ─────────────────────────
 *
 *   1. name the curriculum      a school says it teaches its own scheme
 *   2. add a subject            the AI writes strands, topics and outcomes
 *   3. read the outline         a person approves it, and only then is it real
 *   4. write the lessons        one topic at a time, each landing in /review
 *
 * The outline has to come first and be approved before step four, because a
 * lesson is written against a topic id and there are no topic ids until a
 * person has agreed to the outline. Reversing those two would mean generating
 * forty lessons for a list of topics the school then rejects.
 *
 * ── What is deliberately not automatic ──────────────────────────────────────
 *
 * Nothing generates in bulk on a timer. Each subject and each lesson is asked
 * for by somebody who is looking at the screen, because every one of them
 * spends real money or real subscription allowance, and a loop that spends a
 * school's budget while nobody watches is the easiest bad feature to write
 * and the hardest to notice.
 *
 * A school's curriculum is an overlay, never a replacement. Filing your own
 * Mathematics gets you your Mathematics and the national everything else, so
 * adding one subject is a small act rather than an obligation to supply the
 * other thirty. `resolve` in `syllabus.ts` is what makes that true.
 */

import { useEffect, useState, useSyncExternalStore } from 'react'
import { useSchoolAuth } from '../lib/school/useSchoolAuth'
import { can } from '../lib/school/permissions'
import { idFor, keepCurriculum, schoolCurricula } from '../lib/education/curriculum-store'
import { generateOutline, generateTaught } from '../lib/education/generate'
import {
  allPending, allPendingOutlines, approveOutline,
} from '../lib/education/generated-store'
import { hasTaught } from '../lib/education/taught-registry'
import { loadLessons, lessonsReady, onLessonsLoaded } from '../lib/education/library/lessons/load'
import { allLearners, saveLearner } from '../lib/education/accounts'
import { NATIONAL } from '../lib/education/syllabus'
import { allTopics, type Syllabus } from '../lib/education/syllabus'
import { TutorOff } from '../lib/education/ai'
import type { Curriculum } from '../lib/education/syllabus'
import type { LearnerProfile, Stage } from '../lib/education/learner'
import '../styles/tokens.css'

const STAGES: Array<{ id: Stage, name: string }> = [
  { id: 'creche', name: 'Creche & KG' },
  { id: 'primary', name: 'Primary' },
  { id: 'jhs', name: 'JHS' },
  { id: 'shs', name: 'SHS' },
  { id: 'tvet', name: 'TVET' },
  { id: 'uni', name: 'University' },
]

const YEARS: Record<Stage, string[]> = {
  creche: ['Creche', 'Nursery', 'KG 1', 'KG 2'],
  primary: ['Basic 1', 'Basic 2', 'Basic 3', 'Basic 4', 'Basic 5', 'Basic 6'],
  jhs: ['JHS 1', 'JHS 2', 'JHS 3'],
  shs: ['SHS 1', 'SHS 2', 'SHS 3'],
  tvet: ['Year 1', 'Year 2', 'Year 3'],
  uni: ['Level 100', 'Level 200', 'Level 300', 'Level 400'],
}

/**
 * A stand in learner, for the one thing the prompt needs a learner for.
 *
 * Writing an outline is not writing for a person: it is the shape of a
 * subject, the same for everybody who takes it. But `buildSystem` takes a
 * learner brief because every other task has one, so this supplies the only
 * parts that bear on an outline, the stage and the year, and leaves the
 * teaching preferences at their middle settings where they change nothing.
 */
function outlineLearner(stage: Stage, year: string): LearnerProfile {
  return {
    id: 'curriculum-author',
    name: 'the school',
    stage,
    level: year,
    forChild: false,
    goal: 'KEEP_UP',
    approach: 'IDEA_FIRST',
    whenStuck: 'HINT',
    footing: 'OK',
    diet: 'MIX',
    programme: null,
    subjectId: null,
    aiNotes: {},
    results: [],
    version: 6,
  } as unknown as LearnerProfile
}

/**
 * Which years an outline covers, read off its topics.
 *
 * A `Syllabus` has no year of its own because one outline can span several:
 * the national Mathematics covers Basic 1 to Basic 6 in a single document.
 * So the years are whatever its topics say, listed once each.
 */
function yearsOf(s: Syllabus): string {
  const seen = [...new Set(allTopics(s).map(t => t.year))]
  return seen.length ? seen.join(', ') : 'no year given'
}

function Shut({ heading, body }: { heading: string, body: string }) {
  return (
    <div className="nx" style={{ minHeight: '100dvh', background: 'var(--nx-paper)' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '80px 20px' }}>
        <h1 style={{ margin: '0 0 10px', fontSize: 26 }}>{heading}</h1>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--nx-ink-2)' }}>{body}</p>
      </div>
    </div>
  )
}

export default function CurriculumPage() {
  const { state } = useSchoolAuth()

  if (state.status === 'loading') return <Shut heading="One moment" body="Checking who you are." />
  if (state.status === 'signed-out') {
    return (
      <Shut
        heading="Please sign in"
        body={'This screen decides what a whole school is taught, so it needs '
          + 'to know who you are. Sign in with your school account.'}
      />
    )
  }
  if (state.status === 'no-schema' || state.status === 'error') {
    return <Shut heading="Not available" body={state.message} />
  }
  if (!can(state.profile.role, 'curriculum.author')) {
    return (
      <Shut
        heading="Not for this account"
        body={'Declaring that the school teaches its own curriculum is for a '
          + 'head teacher or a school administrator. Your account is signed in '
          + 'as ' + state.profile.role.replace(/_/g, ' ') + '. A teacher can '
          + 'still read and approve the lessons it produces.'}
      />
    )
  }

  return <Desk by={state.profile.full_name ?? 'a head teacher'} />
}

function Desk({ by }: { by: string }) {
  const [mine, setMine] = useState<Curriculum[]>(() => schoolCurricula())
  const [name, setName] = useState('')
  const [note, setNote] = useState('')

  const [chosen, setChosen] = useState<string | null>(null)
  const [subject, setSubject] = useState('')
  const [stage, setStage] = useState<Stage>('primary')
  /* The lessons for whichever stage is being looked at.

     This screen asks `hasTaught` whether a topic already has a written
     lesson, and uses the answer to decide what still needs generating. The
     library is loaded one stage at a time now, so without this the answer is
     no for everything and a head teacher is invited to generate several
     hundred lessons that already exist. Nothing here waits on it: the list
     renders at once and corrects itself when the chunk lands. */
  const lessonsIn = useSyncExternalStore(onLessonsLoaded, () => lessonsReady(stage))
  useEffect(() => { void loadLessons(stage) }, [stage])
  const [year, setYear] = useState('Basic 1')
  const [askedFor, setAskedFor] = useState('')

  const [busy, setBusy] = useState(false)
  const [why, setWhy] = useState('')
  const [built, setBuilt] = useState<Syllabus | null>(null)
  const [waiting, setWaiting] = useState(() => allPendingOutlines())

  /** Which topic is being written now, so only one button spins. */
  const [writing, setWriting] = useState<string | null>(null)
  const [learners, setLearners] = useState(() => allLearners())
  /** Topics written this sitting, so the list updates without a reload. */
  const [done, setDone] = useState<Set<string>>(
    () => new Set(allPending().map(p => p.taught.topicId)))

  function create() {
    const trimmed = name.trim()
    if (!trimmed) return
    const made = keepCurriculum({
      id: idFor(trimmed),
      name: trimmed,
      note: note.trim() || null,
    })
    if (!made) { setWhy('That name is reserved. Choose another.'); return }
    setMine(schoolCurricula())
    setChosen(made.id)
    setName('')
    setNote('')
    setWhy('')
  }

  async function build() {
    if (!chosen || !subject.trim() || busy) return
    setBusy(true)
    setWhy('')
    setBuilt(null)
    try {
      const made = await generateOutline({
        learner: {
          subjectId: idFor(subject).replace('school-', ''),
          subjectName: subject.trim(),
          profile: outlineLearner(stage, year),
        },
        subjectId: idFor(subject).replace('school-', ''),
        subjectName: subject.trim(),
        stage,
        year,
        curriculum: chosen,
        askedFor: askedFor.trim() || undefined,
      })
      setBuilt(made)
      setWaiting(allPendingOutlines())
    } catch (e) {
      /* Said plainly, and distinguishing the two very different reasons.
         "No tutor configured" is something the person reading this can fix in
         the deployment settings; a refused reply is something to try again. */
      if (e instanceof TutorOff) {
        setWhy('No tutor is switched on for this deployment, so nothing can be '
          + 'written yet. Whoever deploys the app has to add a key, or run the '
          + 'worker, before this screen can build anything.')
      } else {
        setWhy(e instanceof Error ? e.message : 'That did not work. Try again.')
      }
    } finally {
      setBusy(false)
    }
  }

  function accept(s: Syllabus) {
    approveOutline(s.curriculum ?? '', s.stage, s.subjectId, by)
    setWaiting(allPendingOutlines())
    setBuilt(null)
  }

  /**
   * Write one lesson, for one topic.
   *
   * One at a time and never in a loop, which is the same decision
   * `generate.ts` makes and for the same reason: each of these spends real
   * money or real subscription allowance, and only the person at the screen
   * knows whether the first one that came back was any good. A button that
   * wrote forty lessons would be three lines shorter and far easier to
   * regret.
   *
   * What comes back is not taught to anybody. It goes to the review screen
   * and waits for a teacher, exactly like every other generated lesson.
   */
  async function writeLesson(s: Syllabus, topicId: string, title: string,
    outcome: string, yr: string) {
    if (writing) return
    setWriting(topicId)
    setWhy('')
    try {
      await generateTaught({
        learner: {
          subjectId: s.subjectId,
          subjectName: s.subject,
          profile: outlineLearner(s.stage, yr),
        },
        topicId,
        topic: title,
        outcome,
        year: yr,
        curriculum: s.curriculum,
      })
      setDone(prev => new Set(prev).add(topicId))
    } catch (e) {
      if (e instanceof TutorOff) {
        setWhy('No tutor is switched on for this deployment, so no lesson can '
          + 'be written yet.')
      } else {
        setWhy(e instanceof Error ? e.message : 'That did not work. Try again.')
      }
    } finally {
      setWriting(null)
    }
  }

  /**
   * Put a learner on this curriculum, or back on the national one.
   *
   * This is the hop that makes the rest of the screen mean anything. Defining
   * a curriculum and approving its outline changes nothing a child sees until
   * some learner is actually following it, because `syllabusFor` is given the
   * learner's own curriculum and falls back to the national one.
   *
   * Set on the learner and not on the school, for the reason the id comment
   * in `learner.ts` gives: a child who leaves this school keeps their record
   * and their identity, and only this field has to change.
   */
  function follow(id: string, curriculum: string | undefined) {
    const who = learners.find(l => l.id === id)
    if (!who) return
    saveLearner({ ...who, curriculum })
    setLearners(allLearners())
  }

  const field: React.CSSProperties = { width: '100%', marginBottom: 12 }
  const label: React.CSSProperties = { display: 'block', fontSize: 14, marginBottom: 4 }

  return (
    <div className="nx" style={{ minHeight: '100dvh', background: 'var(--nx-paper)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '28px 20px 80px' }}>

        <h1 style={{ margin: '0 0 6px', fontSize: 30 }}>Your school&rsquo;s curriculum</h1>
        <p style={{ margin: '0 0 28px', color: 'var(--nx-ink-2)', maxWidth: '62ch', fontSize: 17 }}>
          Add only the subjects you teach differently. Everything you do not
          file here keeps coming from the national curriculum, so adding one
          subject does not oblige you to supply the rest.
        </p>

        {/* ── 1. the curriculum itself ─────────────────────────────────── */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, margin: '0 0 10px' }}>1. Name it</h2>
          {mine.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
              {mine.map(c => (
                <button
                  key={c.id}
                  type="button"
                  className={c.id === chosen ? 'nx-btn nx-btn-primary' : 'nx-btn'}
                  onClick={() => setChosen(c.id)}>
                  {c.name}
                </button>
              ))}
            </div>
          )}
          <label style={label}>What you call it</label>
          <input
            className="nx-field"
            style={field}
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="St Mary's scheme of work"
          />
          <label style={label}>A line for learners, so they know whose it is</label>
          <input
            className="nx-field"
            style={field}
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Our own scheme, following Cambridge Primary"
          />
          <button type="button" className="nx-btn" onClick={create} disabled={!name.trim()}>
            Add this curriculum
          </button>
        </section>

        {/* ── 2. a subject ─────────────────────────────────────────────── */}
        {chosen && (
          <section style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, margin: '0 0 10px' }}>2. Add a subject</h2>
            <label style={label}>Subject</label>
            <input
              className="nx-field"
              style={field}
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="French"
            />
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <label style={{ flex: '1 1 180px' }}>
                <span style={label}>Stage</span>
                <select
                  className="nx-field"
                  style={field}
                  value={stage}
                  onChange={e => {
                    const next = e.target.value as Stage
                    setStage(next)
                    setYear(YEARS[next][0])
                  }}>
                  {STAGES.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </label>
              <label style={{ flex: '1 1 180px' }}>
                <span style={label}>Year</span>
                <select
                  className="nx-field"
                  style={field}
                  value={year}
                  onChange={e => setYear(e.target.value)}>
                  {YEARS[stage].map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </label>
            </div>
            <label style={label}>
              What this subject should cover at your school. What you write here
              outranks anything the AI would otherwise assume.
            </label>
            <textarea
              className="nx-field"
              style={{ ...field, minHeight: 90 }}
              value={askedFor}
              onChange={e => setAskedFor(e.target.value)}
              placeholder="Three terms. Greetings and the family in term one, the market and numbers in term two, simple past tense in term three. Speaking before writing."
            />
            <button
              type="button"
              className="nx-btn nx-btn-primary"
              onClick={build}
              disabled={busy || !subject.trim()}>
              {busy ? 'Writing the outline, about half a minute' : 'Build the outline'}
            </button>
            {why && (
              <p style={{ marginTop: 12, color: 'var(--nx-red)', maxWidth: '60ch' }}>{why}</p>
            )}
          </section>
        )}

        {/* ── 3. read it before it is real ─────────────────────────────── */}
        {built && (
          <section style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, margin: '0 0 4px' }}>3. Read it</h2>
            <p style={{ margin: '0 0 16px', color: 'var(--nx-ink-2)', maxWidth: '60ch' }}>
              Nothing below is being taught to anybody yet. It becomes part of
              your curriculum when you approve it, and your name is stored with
              the approval.
            </p>
            <div style={{
              border: '1px solid var(--nx-line)', borderRadius: 12, padding: '16px 18px',
            }}>
              <p style={{ margin: '0 0 12px', fontWeight: 700, fontSize: 18 }}>
                {built.subject} · {yearsOf(built)} · {allTopics(built).length} topics
              </p>
              {built.strands.map(strand => (
                <div key={strand.id} style={{ marginBottom: 14 }}>
                  <p style={{ margin: '0 0 4px', fontWeight: 700 }}>{strand.name}</p>
                  {strand.subStrands.map(sub => (
                    <div key={sub.id} style={{ paddingLeft: 14, marginBottom: 8 }}>
                      <p style={{ margin: '0 0 2px', color: 'var(--nx-ink-2)' }}>{sub.name}</p>
                      <ul style={{ margin: 0, paddingLeft: 20 }}>
                        {sub.topics.map(t => (
                          <li key={t.id} style={{ marginBottom: 3 }}>
                            <b>{t.title}</b>{' '}
                            <span style={{ color: 'var(--nx-ink-2)' }}>{t.outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <button type="button" className="nx-btn nx-btn-primary" onClick={() => accept(built)}>
                This is our curriculum
              </button>
              <button type="button" className="nx-btn" onClick={() => setBuilt(null)}>
                Throw it away
              </button>
            </div>
          </section>
        )}

        {/* ── what is already filed ────────────────────────────────────── */}
        <section>
          <h2 style={{ fontSize: 20, margin: '0 0 10px' }}>Filed so far</h2>
          {waiting.length === 0 ? (
            <p style={{ color: 'var(--nx-ink-2)' }}>Nothing yet.</p>
          ) : (
            <ul style={{ paddingLeft: 20 }}>
              {waiting.map(p => (
                <li key={`${p.syllabus.curriculum}:${p.syllabus.stage}:${p.syllabus.subjectId}`}
                  style={{ marginBottom: 6 }}>
                  <b>{p.syllabus.subject}</b> · {yearsOf(p.syllabus)} ·{' '}
                  {allTopics(p.syllabus).length} topics ·{' '}
                  {p.approvedAt
                    ? <span style={{ color: 'var(--nx-green)' }}>approved by {p.approvedBy}</span>
                    : <span style={{ color: 'var(--nx-ink-3)' }}>waiting to be read</span>}
                </li>
              ))}
            </ul>
          )}
          <p style={{ marginTop: 18, color: 'var(--nx-ink-2)', maxWidth: '62ch' }}>
            Nothing generated reaches a learner unread. Every lesson written
            below waits in the review screen until a teacher has approved it.
          </p>
        </section>

        {/* ── who follows it ──────────────────────────────────────────── */}
        {chosen && (
          <section style={{ marginTop: 36 }}>
            <h2 style={{ fontSize: 20, margin: '0 0 4px' }}>Who follows it</h2>
            <p style={{ margin: '0 0 16px', color: 'var(--nx-ink-2)', maxWidth: '62ch' }}>
              Until a learner is put on this curriculum they keep getting the
              national one, so nothing above changes what any child sees. A
              learner on your curriculum still gets the national outline for
              every subject you have not filed.
            </p>
            {learners.length === 0 ? (
              <p style={{ color: 'var(--nx-ink-2)' }}>
                No learners on this device yet.
              </p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {learners.map(l => {
                  const on = l.curriculum === chosen
                  return (
                    <li
                      key={l.id}
                      style={{
                        display: 'flex', gap: 10, alignItems: 'baseline',
                        flexWrap: 'wrap', padding: '8px 0',
                        borderTop: '1px solid var(--nx-line)',
                      }}>
                      <span style={{ flex: '1 1 200px' }}>
                        <b>{l.name}</b>{' '}
                        <span style={{ color: 'var(--nx-ink-3)', fontSize: 14 }}>
                          {l.level}
                        </span>
                      </span>
                      <span style={{ fontSize: 14, color: 'var(--nx-ink-2)' }}>
                        {on ? 'yours' : 'national'}
                      </span>
                      <button
                        type="button"
                        className={on ? 'nx-btn' : 'nx-btn nx-btn-primary'}
                        onClick={() => follow(l.id, on ? undefined : chosen)}>
                        {on ? 'Put back on national' : 'Put on ours'}
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
            <p style={{ marginTop: 12, fontSize: 14, color: 'var(--nx-ink-3)' }}>
              The national curriculum is {NATIONAL}.
            </p>
          </section>
        )}

        {/* ── 4. the lessons ──────────────────────────────────────────── */}
        {waiting.some(p => p.approvedAt) && (
          <section style={{ marginTop: 36 }}>
            <h2 style={{ fontSize: 20, margin: '0 0 4px' }}>4. Write the lessons</h2>
            <p style={{ margin: '0 0 16px', color: 'var(--nx-ink-2)', maxWidth: '62ch' }}>
              One topic at a time, because each one costs something and
              somebody should be watching. A topic that already has a lesson is
              marked and has no button.
            </p>
            {waiting.filter(p => p.approvedAt).map(p => (
              <div
                key={`${p.syllabus.curriculum}:${p.syllabus.stage}:${p.syllabus.subjectId}`}
                style={{
                  border: '1px solid var(--nx-line)', borderRadius: 12,
                  padding: '14px 16px', marginBottom: 16,
                }}>
                <p style={{ margin: '0 0 10px', fontWeight: 700, fontSize: 17 }}>
                  {p.syllabus.subject} · {yearsOf(p.syllabus)}
                </p>
                {allTopics(p.syllabus).map(t => {
                  const already = done.has(t.id) || (lessonsIn && hasTaught(t.id))
                  return (
                    <div
                      key={t.id}
                      style={{
                        display: 'flex', gap: 10, alignItems: 'baseline',
                        flexWrap: 'wrap', padding: '6px 0',
                        borderTop: '1px solid var(--nx-line)',
                      }}>
                      <span style={{ flex: '1 1 220px' }}>
                        <b>{t.title}</b>{' '}
                        <span style={{ color: 'var(--nx-ink-3)', fontSize: 14 }}>{t.year}</span>
                      </span>
                      {already ? (
                        <span style={{ color: 'var(--nx-green)', fontSize: 14 }}>
                          written, waiting to be read
                        </span>
                      ) : (
                        <button
                          type="button"
                          className="nx-btn"
                          disabled={writing !== null}
                          onClick={() => writeLesson(
                            p.syllabus, t.id, t.title, t.outcome, t.year)}>
                          {writing === t.id ? 'writing...' : 'Write this lesson'}
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}
