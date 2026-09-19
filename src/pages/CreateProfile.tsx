/**
 * Creating a profile.
 *
 * Three people arrive at this page and only one of them has an email address.
 *
 *   A learner   makes a profile with a name and a password. No email, because
 *               most basic school pupils do not have one and SMS costs money
 *               per message on a product meant to be free.
 *   A parent    makes a page that holds their children.
 *   A school    makes a page that holds its students.
 *
 * For a learner this is also where the platform is told how to teach them: the
 * level, what they came for, whether to show or let them try, what helps when
 * they are stuck, and what kind of material to lead with. None of it is
 * decoration. Every answer is read by the course screen or the adaptive model,
 * and a learner who says "watching" and is handed walls of text stops coming
 * back.
 *
 * The controls are all one shape and one height, in two columns, because eight
 * questions laid out consistently read as one task and eight questions in eight
 * different shapes read as a chore.
 */

import { useState } from 'react'
import '../styles/nexaedu.css'
import {
  APPROACHES, DEFAULT_PROFILE, DIETS, FOOTINGS, GOALS, PERIODS, STAGE_YEARS,
  WHEN_STUCK, newLearnerId,
  type Choice, type LearnerProfile, type Stage,
} from '../lib/education/learner'
import {
  createAccount, emailProblem, handleTaken, passwordProblem,
  type AccountKind, type Created,
} from '../lib/education/accounts'

const STAGE_LABEL: Record<Stage, string> = {
  creche: 'Creche & KG', primary: 'Primary', jhs: 'JHS',
  shs: 'SHS', tvet: 'TVET', uni: 'University',
}
const STAGES: Stage[] = ['creche', 'primary', 'jhs', 'shs', 'tvet', 'uni']

const KINDS: { value: AccountKind; label: string; blurb: string }[] = [
  { value: 'learner', label: 'I am learning', blurb: 'One profile, yours for the whole journey.' },
  { value: 'parent', label: 'I am a parent', blurb: 'One page holding all of your children.' },
  { value: 'school', label: 'We are a school', blurb: 'One page holding all of your students.' },
]

/** A labelled control. Every field on the page is one of these. */
function Field({ label, hint, children }: {
  label: string; hint?: string; children: React.ReactNode
}) {
  return (
    <label className="ne-fx">
      <span className="ne-fx-label">
        {label}
        {hint && <span className="ne-fx-hint">{hint}</span>}
      </span>
      {children}
    </label>
  )
}

function Select<T extends string>({ value, options, onChange }: {
  value: T
  options: Choice<T>[] | { value: T; label: string }[]
  onChange: (v: T) => void
}) {
  return (
    <select className="ne-sel" value={value} onChange={e => onChange(e.target.value as T)}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  )
}

interface Props {
  stage: Stage
  onCreated: (c: Created) => void
  onSignIn: () => void
  onBack: () => void
  /**
   * A parent or school adding another learner.
   *
   * No account is created and no password is asked for: the child is attached
   * to the account already signed in. The child can claim their own sign in
   * later without anything being moved, because the learner record was never
   * owned by the parent's account in the first place.
   */
  onlyLearner?: boolean
  onLearner?: (learner: LearnerProfile) => void
}

export default function CreateProfile({
  stage: initial, onCreated, onSignIn, onBack, onlyLearner = false, onLearner,
}: Props) {
  const [kind, setKind] = useState<AccountKind>('learner')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [problem, setProblem] = useState<string | null>(null)

  const [p, setP] = useState<LearnerProfile>({
    ...DEFAULT_PROFILE,
    id: newLearnerId(),
    stage: initial,
    level: STAGE_YEARS[initial][Math.floor(STAGE_YEARS[initial].length / 2)],
  })

  const set = <K extends keyof LearnerProfile>(k: K, v: LearnerProfile[K]) =>
    setP(d => ({ ...d, [k]: v }))

  /** Changing stage moves the year with it, or the two disagree. */
  const setStage = (s: Stage) => setP(d => ({
    ...d,
    stage: s,
    level: STAGE_YEARS[s][Math.floor(STAGE_YEARS[s].length / 2)],
  }))

  const attach = (files: FileList | null) => {
    if (!files?.length) return
    setP(d => ({
      ...d,
      results: [...d.results, {
        id: `r${Date.now()}`,
        level: d.level,
        period: PERIODS[0],
        school: '',
        files: Array.from(files).map(f => ({ name: f.name, size: f.size })),
        addedAt: new Date().toISOString(),
      }],
    }))
  }

  const isLearner = onlyLearner || kind === 'learner'
  const nameLabel = onlyLearner ? 'Their name'
    : kind === 'school' ? 'School name' : 'Your name'

  const submit = async () => {
    setProblem(null)

    /* Adding a child under an account that already exists: a name and a level,
       nothing else. Asking a parent to invent a second password per child is
       how a family ends up with one password on four profiles. */
    if (onlyLearner) {
      if (!name.trim()) return setProblem('A name is needed, so they can be told apart.')
      onLearner?.({ ...p, name: name.trim() })
      return
    }

    if (!name.trim()) return setProblem(`${nameLabel} is needed, so you can sign back in.`)
    const pw = passwordProblem(password)
    if (pw) return setProblem(pw)
    if (!isLearner) {
      const em = emailProblem(email)
      if (em) return setProblem(em)
    }
    const handle = isLearner ? name : email
    if (handleTaken(handle)) {
      return setProblem(isLearner
        ? 'That name already has a profile on this device. Sign in instead, or use a fuller name.'
        : 'That email already has an account on this device. Sign in instead.')
    }

    setBusy(true)
    try {
      const created = isLearner
        ? await createAccount({
            kind: 'learner', name: name.trim(), password,
            learner: { ...p, name: name.trim() },
          })
        : await createAccount({ kind, name: name.trim(), email: email.trim(), password })
      onCreated(created)
    } catch {
      setProblem('Could not save the profile on this device. Check that storage is not full or blocked.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="ne">
      <div className="ne-shell">
        <header className="ne-top">
          <button className="ne-wordmark" onClick={onBack}
            style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer' }}>
            NEXA<i>•</i>EDU
          </button>
          <span className="ne-fineprint" style={{ marginLeft: 'auto' }}>
            Already have a profile?
          </span>
          <button className="ne-quiet-link" onClick={onSignIn}>Sign in</button>
        </header>

        <main className="ne-make ne-rise ne-rise-1">
          <h1 className="ne-display ne-make-h1">
            {onlyLearner ? 'Add a learner' : 'Create your profile'}
          </h1>

          {/* Who is signing up decides what is asked. */}
          {!onlyLearner && (
          <div className="ne-tabs" role="tablist" aria-label="Kind of profile">
            {KINDS.map(k => (
              <button key={k.value} role="tab" aria-selected={kind === k.value}
                className={`ne-tab${kind === k.value ? ' is-on' : ''}`}
                onClick={() => { setKind(k.value); setProblem(null) }}>
                {k.label}
              </button>
            ))}
          </div>
          )}
          <p className="ne-make-blurb">
            {onlyLearner
              ? 'They get their own page, their own identity and their own history.'
              : KINDS.find(k => k.value === kind)!.blurb}
          </p>

          <div className="ne-panel">
            <div className="ne-grid2">
              {/* Only true when this name IS the handle. A parent adding a child
                  signs in with their own email, so saying it here would be a
                  lie about whose credential this is. */}
              <Field label={nameLabel}
                hint={onlyLearner ? 'so they can be told apart'
                  : isLearner ? 'this is what you sign in with' : undefined}>
                <input className="ne-in" value={name} autoFocus
                  placeholder={onlyLearner ? 'Abena Boateng'
                    : kind === 'school' ? 'Wesley Girls SHS' : 'Kwame Boateng'}
                  onChange={e => setName(e.target.value)} />
              </Field>

              {!isLearner && (
                <Field label="Email" hint="this is what you sign in with">
                  <input className="ne-in" type="email" value={email}
                    placeholder="you@school.edu.gh"
                    onChange={e => setEmail(e.target.value)} />
                </Field>
              )}

              {!onlyLearner && (
                <Field label="Password" hint="six characters or more">
                  <input className="ne-in" type="password" value={password}
                    placeholder="Choose a password"
                    onChange={e => setPassword(e.target.value)} />
                </Field>
              )}
            </div>

            {isLearner && (
              <>
                <div className="ne-panel-rule"><span>Your level</span></div>
                <div className="ne-grid2">
                  <Field label="Stage">
                    <Select value={p.stage} onChange={setStage}
                      options={STAGES.map(s => ({ value: s, label: STAGE_LABEL[s] }))} />
                  </Field>
                  <Field label="Year">
                    <Select value={p.level} onChange={y => set('level', y)}
                      options={STAGE_YEARS[p.stage].map(y => ({ value: y, label: y }))} />
                  </Field>
                </div>

                <div className="ne-panel-rule"><span>How to teach you</span></div>
                <div className="ne-grid2">
                  <Field label="What you came for">
                    <Select value={p.goal} options={GOALS} onChange={g => set('goal', g)} />
                  </Field>
                  <Field label="You learn best when">
                    <Select value={p.approach} options={APPROACHES}
                      onChange={a => set('approach', a)} />
                  </Field>
                  <Field label="When you get stuck">
                    <Select value={p.whenStuck} options={WHEN_STUCK}
                      onChange={w => set('whenStuck', w)} />
                  </Field>
                  <Field label="Material you prefer">
                    <Select value={p.diet} options={DIETS} onChange={d => set('diet', d)} />
                  </Field>
                  <Field label="How you find it now" hint="only sets where to start">
                    <Select value={p.footing} options={FOOTINGS}
                      onChange={f => set('footing', f)} />
                  </Field>
                </div>

                <div className="ne-panel-rule"><span>What you have already done</span></div>
                <Field label="Report card, results or transcript" hint="optional">
                  <div>
                    <input id="ne-results" type="file" multiple hidden accept="image/*,.pdf"
                      onChange={e => { attach(e.target.files); e.target.value = '' }} />
                    {p.results.length > 0 && (
                      <ul className="ne-filelist">
                        {p.results.map(r => (
                          <li key={r.id}>
                            <span>{r.files.map(f => f.name).join(', ')}</span>
                            <button type="button" className="ne-file-x"
                              onClick={() => setP(d => ({
                                ...d, results: d.results.filter(x => x.id !== r.id),
                              }))}>remove</button>
                          </li>
                        ))}
                      </ul>
                    )}
                    <label htmlFor="ne-results" className="ne-attach">
                      {p.results.length ? 'Add another' : 'Attach a file'}
                    </label>
                    <p className="ne-fx-note">
                      Helps place you at the right level. Kept on this device, and a
                      school has to confirm a result before it counts officially.
                    </p>
                  </div>
                </Field>
              </>
            )}
          </div>

          {problem && <p className="ne-bad">{problem}</p>}

          <div className="ne-make-go">
            <button className="ne-btn ne-btn-go" disabled={busy} onClick={submit}>
              {busy ? 'Creating…'
                : onlyLearner ? 'Add them'
                : isLearner ? 'Create my profile' : 'Create the page'}
            </button>
            <p className="ne-fineprint">
              {onlyLearner
                ? `${p.id} stays theirs, from creche to university.`
                : isLearner
                  ? `${p.id} stays yours, from creche to university.`
                  : 'You will add learners on the next screen.'}
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
