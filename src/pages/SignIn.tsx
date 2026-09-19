/**
 * Coming back.
 *
 * A learner types the name they chose and their password. A parent or a school
 * types their email and their password. One field and one password either way,
 * because the handle is whatever that kind of account signs in with, and
 * nobody should have to remember which box their identity lives in.
 *
 * A failed attempt says the same thing whether the name was wrong or the
 * password was: a message that tells them apart tells a stranger holding the
 * phone which names exist on it.
 */

import { useState } from 'react'
import '../styles/nexaedu.css'
import { signIn, type Created } from '../lib/education/accounts'

export default function SignIn({ onSignedIn, onCreate, onBack }: {
  onSignedIn: (c: Created) => void
  onCreate: () => void
  onBack: () => void
}) {
  const [handle, setHandle] = useState('')
  const [password, setPassword] = useState('')
  const [why, setWhy] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const submit = async () => {
    setWhy(null)
    if (!handle.trim() || !password) return
    setBusy(true)
    const r = await signIn(handle, password)
    setBusy(false)
    if (r.ok) onSignedIn({ account: r.account, session: r.session })
    else setWhy(r.why)
  }

  return (
    <div className="ne">
      <div className="ne-shell">
        <header className="ne-top">
          <button className="ne-wordmark" onClick={onBack}
            style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer' }}>
            NEXA<i>•</i>EDU
          </button>
        </header>

        <main className="ne-signin ne-rise ne-rise-1">
          <h1 className="ne-display ne-make-h1">Welcome back</h1>
          <p className="ne-make-blurb" style={{ margin: '0 0 22px' }}>
            Your name if you are learning. Your email if you are a parent or a school.
          </p>

          <div className="ne-panel">
            <div style={{ display: 'grid', gap: 16 }}>
              <label className="ne-fx">
                <span className="ne-fx-label">Name or email</span>
                <input className="ne-in" autoFocus value={handle}
                  placeholder="Kwame Boateng"
                  onChange={e => { setHandle(e.target.value); setWhy(null) }}
                  onKeyDown={e => { if (e.key === 'Enter') submit() }} />
              </label>

              <label className="ne-fx">
                <span className="ne-fx-label">Password</span>
                <input className="ne-in" type="password" value={password}
                  placeholder="Your password"
                  onChange={e => { setPassword(e.target.value); setWhy(null) }}
                  onKeyDown={e => { if (e.key === 'Enter') submit() }} />
              </label>
            </div>
          </div>

          {why && <p className="ne-bad">{why}</p>}

          <div className="ne-make-go">
            <button className="ne-btn ne-btn-go" disabled={busy || !handle.trim() || !password}
              onClick={submit}>
              {busy ? 'Checking…' : 'Sign in'}
            </button>
            <button className="ne-quiet-link" onClick={onCreate}>
              I do not have a profile yet
            </button>
          </div>

          <p className="ne-fineprint" style={{ marginTop: 26, maxWidth: '52ch' }}>
            Profiles live on the device they were made on. To use one somewhere
            else, open it here and choose "use on another device" to get a
            transfer code.
          </p>
        </main>
      </div>
    </div>
  )
}
