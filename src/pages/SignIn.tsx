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
import {
  askForCode, signIn, useCode, type Created,
} from '../lib/education/accounts'
import PasswordField from '../components/PasswordField'

export default function SignIn({ onSignedIn, onCreate, onBack }: {
  onSignedIn: (c: Created) => void
  onCreate: () => void
  onBack: () => void
}) {
  const [handle, setHandle] = useState('')
  const [password, setPassword] = useState('')
  const [why, setWhy] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  /**
   * The forgotten password panel.
   *
   * `shut` is closed. `naming` asks who they are, `coding` has sent a code and
   * is waiting for it with the new password, `done` has changed it. One panel
   * rather than a screen of its own, because whoever is here has already typed
   * the name they sign in with and must not be asked for it twice.
   */
  const [step, setStep] = useState<'shut' | 'naming' | 'coding' | 'done'>('shut')
  const [sending, setSending] = useState(false)
  const [hint, setHint] = useState<string | null>(null)
  const [channel, setChannel] = useState<'sms' | 'email' | null>(null)
  const [code, setCode] = useState('')
  const [fresh, setFresh] = useState('')
  const [bad, setBad] = useState<string | null>(null)

  const submit = async () => {
    setWhy(null)
    if (!handle.trim() || !password) return
    setBusy(true)
    try {
      const r = await signIn(handle, password)
      if (r.ok) onSignedIn({ account: r.account, session: r.session })
      else setWhy(r.why)
    } catch (err) {
      /* `signIn` reports its expected failures by returning `{ ok: false }`,
         so reaching here means something unforeseen. Without this the throw
         escaped, `setBusy(false)` never ran, and the button stayed disabled
         for ever with nothing on screen: the one failure a person cannot even
         retry their way out of. */
      console.error('signIn', err)
      setWhy('Could not sign in just now. Please try again.')
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
            <span className="lp-mark"><b>Learning</b><i>-</i><em>Pal</em></span>
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
                <PasswordField
                  value={password}
                  placeholder="Your password"
                  onChange={v => { setPassword(v); setWhy(null) }}
                  onEnter={submit} />
              </label>
            </div>
          </div>

          {why && <p className="ne-bad">{why}</p>}

          {/* Forgotten.

              A code to the phone or email the family registered, then the new
              password in the same panel. The contact is never shown back in
              full, only a mask the owner recognises: see `api/reset.js`. */}
          {step !== 'shut' && (
            <div className="ne-panel" style={{ marginTop: 16 }}>
              {step === 'done' ? (
                <p style={{ margin: 0 }}>
                  Changed. Sign in with the new password.
                </p>
              ) : step === 'naming' ? (
                <>
                  <p style={{ margin: '0 0 14px' }}>
                    Type the name you sign in with. A code goes to the phone
                    number or email your account was registered with.
                  </p>
                  <label className="ne-fx">
                    <span className="ne-fx-label">Your name</span>
                    <input className="ne-in" value={handle}
                      placeholder="Kwame Boateng"
                      onChange={e => { setHandle(e.target.value); setBad(null) }} />
                  </label>
                  {bad && <p className="ne-bad">{bad}</p>}
                  <button
                    className="ne-btn ne-btn-go"
                    style={{ marginTop: 14 }}
                    disabled={sending || !handle.trim()}
                    onClick={async () => {
                      setSending(true)
                      setBad(null)
                      try {
                        const r = await askForCode(handle)
                        if (r.ok) {
                          setChannel(r.channel)
                          setHint(r.hint)
                          setStep('coding')
                        } else setBad(r.why)
                      } finally { setSending(false) }
                    }}>
                    {sending ? 'Sending…' : 'Send me a code'}
                  </button>
                </>
              ) : (
                <>
                  <p style={{ margin: '0 0 14px' }}>
                    {hint
                      ? <>A six digit code has gone to {channel === 'sms' ? 'the number' : 'the address'} <b>{hint}</b>.</>
                      : <>If that name is registered and has a phone number or
                        email on it, a code is on its way there now.</>}
                    {' '}Type it below with the password you want.
                  </p>
                  <div style={{ display: 'grid', gap: 16 }}>
                    <label className="ne-fx">
                      <span className="ne-fx-label">Code</span>
                      <input className="ne-in" value={code}
                        inputMode="numeric" autoComplete="one-time-code"
                        placeholder="123456"
                        onChange={e => { setCode(e.target.value); setBad(null) }} />
                    </label>
                    <label className="ne-fx">
                      <span className="ne-fx-label">New password</span>
                      <PasswordField
                        value={fresh}
                        autoComplete="new-password"
                        placeholder="Eight characters or more"
                        onChange={v => { setFresh(v); setBad(null) }} />
                    </label>
                  </div>
                  {bad && <p className="ne-bad">{bad}</p>}
                  <button
                    className="ne-btn ne-btn-go"
                    style={{ marginTop: 14 }}
                    disabled={sending || !code.trim() || fresh.length < 8}
                    onClick={async () => {
                      setSending(true)
                      setBad(null)
                      try {
                        const r = await useCode(handle, code, fresh)
                        if (r.ok) { setStep('done'); setPassword(fresh) }
                        else setBad(r.why ?? 'That could not be saved.')
                      } finally { setSending(false) }
                    }}>
                    {sending ? 'Saving…' : 'Set the password'}
                  </button>
                </>
              )}
            </div>
          )}

          <div className="ne-make-go">
            <button className="ne-btn ne-btn-go" disabled={busy || !handle.trim() || !password}
              onClick={submit}>
              {busy ? 'Checking…' : 'Sign in'}
            </button>
            <button className="ne-quiet-link" onClick={onCreate}>
              I do not have a profile yet
            </button>
            <button
              className="ne-quiet-link"
              onClick={() => { setStep(s => (s === 'shut' ? 'naming' : 'shut')); setBad(null) }}>
              I have forgotten my password
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
