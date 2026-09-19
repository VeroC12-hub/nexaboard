/**
 * Setting up a learner.
 *
 * The page is the card.
 *
 * Three earlier attempts all failed the same way: they were forms. Chips under
 * numbered headings, then bare words with a highlighter, then a tidy stack of
 * segmented controls. Each was cleaner than the last and none of them was
 * anything. A form in the middle of an empty page has no subject.
 *
 * So the subject is the learner's own card, and the questions are answered on
 * it. You are not filling in a form beside your identity, you are filling in
 * your identity. That gives the page one object instead of five controls, it
 * carries the woven band and the bold type over from the front page so the
 * product does not change character between screens, and it makes the promise
 * physical: the thing you are holding is the thing that follows you from creche
 * to university.
 *
 * Three preferences that used to be asked here are gone rather than hidden.
 * How someone likes to be taught and what helps when they are stuck belong on
 * the screen where the answer just went wrong, not before they have seen a
 * question. Confidence only set a starting difficulty, and the adaptive model
 * corrects its own guess within a few answers.
 */

import { useState } from 'react'
import '../styles/nexaedu.css'
import {
  ANSWERED_BY_ADULT, DEFAULT_PROFILE, GOALS, STAGE_YEARS,
  newLearnerId, quickProfile,
  type LearnerProfile, type Stage,
} from '../lib/education/learner'
import { pack, readable } from '../lib/education/transfer'

const STAGE_LABEL: Record<Stage, string> = {
  creche: 'Creche & KG', primary: 'Primary', jhs: 'JHS',
  shs: 'SHS', tvet: 'TVET', uni: 'University',
}

const STAGES: Stage[] = ['creche', 'primary', 'jhs', 'shs', 'tvet', 'uni']

const SUBJECT: Record<Stage, string> = {
  creche: 'Early number', primary: 'Mathematics', jhs: 'Mathematics',
  shs: 'Core Mathematics', tvet: 'Trade calculations', uni: 'Mathematics',
}

const THREADS = ['var(--gold)', 'var(--green)', 'var(--red)', 'var(--sky)']

/**
 * The goal, in as few words as a card column allows.
 *
 * The full sentences belong on the front page where there is room to explain.
 * Under a label reading HERE TO, "Catch up" is unambiguous and "Catch up on
 * what I missed" is a clipped string.
 */
const GOAL_SHORT: Record<string, string> = {
  KEEP_UP: 'Keep up', CATCH_UP: 'Catch up',
  EXAM: 'Pass an exam', GO_FURTHER: 'Go further',
}

/** A field written on the card: a label, and a control that looks like text. */
function CardField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="ne-cf">
      <span className="ne-cf-label">{label}</span>
      {children}
    </label>
  )
}

interface Props {
  stage: Stage
  onDone: (p: LearnerProfile) => void
  onBack: () => void
}

export default function Onboarding({ stage: initial, onDone, onBack }: Props) {
  const [p, setP] = useState<LearnerProfile>({
    ...DEFAULT_PROFILE,
    id: newLearnerId(),
    stage: initial,
    level: STAGE_YEARS[initial][Math.floor(STAGE_YEARS[initial].length / 2)],
    forChild: ANSWERED_BY_ADULT.includes(initial),
  })
  const [showCode, setShowCode] = useState(false)

  const set = <K extends keyof LearnerProfile>(k: K, v: LearnerProfile[K]) =>
    setP(d => ({ ...d, [k]: v }))

  /** Changing stage moves the year with it, or the two disagree. */
  const setStage = (s: Stage) => setP(d => ({
    ...d,
    stage: s,
    level: STAGE_YEARS[s][Math.floor(STAGE_YEARS[s].length / 2)],
    forChild: ANSWERED_BY_ADULT.includes(s),
  }))

  return (
    <div className="ne">
      <div className="ne-shell">
        <header className="ne-top">
          <button className="ne-wordmark" onClick={onBack}
            style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer' }}>
            NEXA<i>•</i>EDU
          </button>
          <button className="ne-quiet-link" style={{ marginLeft: 'auto' }}
            onClick={() => onDone(quickProfile(p.stage))}>
            Skip and start now
          </button>
        </header>

        <main className="ne-issue">
          <div className="ne-issue-head ne-rise ne-rise-1">
            <h1 className="ne-display ne-issue-h1">
              This is <span className="ne-mark-gold">yours</span>.
            </h1>
            <p className="ne-issue-sub">
              Fill it in and start. One identity for the whole journey: changing
              school changes the enrolment, never this.
            </p>
          </div>

          {/* The card is the page. Every answer is written onto it. */}
          <div className="ne-bigcard ne-rise ne-rise-2">
            <div className="ne-weave" aria-hidden style={{ height: 10, gap: 3 }}>
              {Array.from({ length: 22 }, (_, i) => (
                <span key={i} className="ne-weave-block ne-weave-static"
                  style={{ background: THREADS[i % THREADS.length] }} />
              ))}
            </div>

            <div className="ne-bigcard-body">
              <span className="ne-mono ne-bigcard-brand">NEXA<i>•</i>EDU</span>

              <input
                className="ne-bigcard-name" autoFocus value={p.name}
                placeholder={p.forChild ? "Your child's name" : 'Your name'}
                aria-label={p.forChild ? "Your child's name" : 'Your name'}
                onChange={e => set('name', e.target.value)}
              />
              <p className="ne-bigcard-id">{p.id}</p>

              <div className="ne-cf-grid">
                <CardField label="Stage">
                  <select className="ne-cf-sel" value={p.stage}
                    onChange={e => setStage(e.target.value as Stage)}>
                    {STAGES.map(s => <option key={s} value={s}>{STAGE_LABEL[s]}</option>)}
                  </select>
                </CardField>

                <CardField label="Year">
                  <select className="ne-cf-sel" value={p.level}
                    onChange={e => set('level', e.target.value)}>
                    {STAGE_YEARS[p.stage].map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </CardField>

                <CardField label="Here to">
                  <select className="ne-cf-sel" value={p.goal}
                    onChange={e => set('goal', e.target.value as LearnerProfile['goal'])}>
                    {GOALS.map(g => (
                      <option key={g.value} value={g.value}>{GOAL_SHORT[g.value]}</option>
                    ))}
                  </select>
                </CardField>
              </div>

              <div className="ne-bigcard-foot">
                <span>{SUBJECT[p.stage]}</span>
                <span className="ne-bigcard-life">Creche to university</span>
              </div>
            </div>
          </div>

          <div className="ne-issue-go ne-rise ne-rise-3">
            <button className="ne-btn ne-btn-go" onClick={() => onDone(p)}>
              Start learning
            </button>

            {ANSWERED_BY_ADULT.includes(p.stage) && (
              <label className="ne-check" style={{ marginTop: 0 }}>
                <input type="checkbox" checked={p.forChild}
                  onChange={e => set('forChild', e.target.checked)} />
                I am a parent setting this up
              </label>
            )}

            <button type="button" className="ne-quiet-link"
              onClick={() => setShowCode(c => !c)}>
              {showCode ? 'Hide code' : 'Already using another device?'}
            </button>
          </div>

          {showCode && (
            <div className="ne-code ne-issue-code">
              <p className="ne-code-text">{readable(pack({ profile: p, attempts: [] }))}</p>
              <p className="ne-field-note" style={{ marginTop: 8 }}>
                Type this on the other device to carry this learner across. No
                account and no connection needed.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
