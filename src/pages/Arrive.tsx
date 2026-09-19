/**
 * Arriving on a new device.
 *
 * The counterpart to the transfer code shown on the learner card. A learner
 * types what their other device is showing, and they are themselves again:
 * same identity, same year, same preferences, same standing in every topic.
 *
 * No account, no email, no message to pay for, and no connection required,
 * which are the four things that would have shut out most of the people this
 * is built for.
 *
 * The code is checked before anything is accepted, and a bad one says exactly
 * what is wrong rather than failing into a half made learner.
 */

import { useState } from 'react'
import '../styles/nexaedu.css'
import { unpack, type Carried } from '../lib/education/transfer'

const STAGE_LABEL: Record<string, string> = {
  creche: 'Creche & KG', primary: 'Primary', jhs: 'JHS',
  shs: 'SHS', tvet: 'TVET', uni: 'University',
}

export default function Arrive({ onCarried, onBack }: {
  onCarried: (c: Carried) => void
  onBack: () => void
}) {
  const [code, setCode] = useState('')
  const [why, setWhy] = useState<string | null>(null)
  const [found, setFound] = useState<Carried | null>(null)

  const read = () => {
    setWhy(null); setFound(null)
    if (!code.trim()) return
    const r = unpack(code)
    if (r.ok) setFound(r.carried)
    else setWhy(r.why)
  }

  const done = found
    ? found.attempts.filter(a => a.isCorrect).length
    : 0

  return (
    <div className="ne">
      <div className="ne-shell">
        <header className="ne-top">
          <button className="ne-wordmark" onClick={onBack}
            style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer' }}>
            NEXA<i>•</i>EDU
          </button>
        </header>

        <main className="ne-arrive ne-rise ne-rise-1">
          <h1 className="ne-display">Carry yourself across</h1>
          <p className="lede">
            On the device you already use, open your learner card and choose
            "Use this on another device". Type what it shows here.
          </p>

          <textarea
            className="ne-paste" autoFocus value={code}
            placeholder="NE1-...."
            onChange={e => { setCode(e.target.value); setWhy(null); setFound(null) }}
          />

          {why && <p className="ne-bad">{why}</p>}

          {found && (
            <div className="ne-found">
              <p className="ne-display" style={{ fontSize: 26, margin: '0 0 4px' }}>
                {found.profile.name.trim() || 'Your learner'}
              </p>
              <p style={{ margin: '0 0 4px', fontFamily: 'ui-monospace, Menlo, monospace', color: 'var(--green)' }}>
                {found.profile.id}
              </p>
              <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 15.5 }}>
                {STAGE_LABEL[found.profile.stage]} · {found.profile.level}
                {found.attempts.length > 0 &&
                  <>, {done} of {found.attempts.length} answered correctly so far</>}
              </p>
            </div>
          )}

          <div className="ne-row" style={{ marginTop: 22 }}>
            {found ? (
              <button className="ne-btn ne-btn-go" onClick={() => onCarried(found)}>
                Yes, this is me
              </button>
            ) : (
              <button className="ne-btn ne-btn-go" disabled={!code.trim()} onClick={read}>
                Read the code
              </button>
            )}
            <button className="ne-quiet-link" onClick={onBack}>Back</button>
          </div>

          <p className="ne-field-note" style={{ marginTop: 26 }}>
            Attached report cards stay on the device that holds them, so they do
            not travel in the code. Everything else does: your year, how you like
            to be taught, and where you had reached in every topic.
          </p>
        </main>
      </div>
    </div>
  )
}
