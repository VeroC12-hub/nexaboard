/**
 * The grown up's door, for the things a child must not do by accident.
 *
 * ── Why a gate at all ──────────────────────────────────────────────────────
 *
 * Signing out has to be easy to find and hard to do. Those pull in opposite
 * directions, and the old screen resolved it by making it hard to find: three
 * taps deep, behind a tab, at the bottom of a page of text. A parent handing a
 * phone back could not see how to leave, which is the complaint this answers.
 *
 * So the control moves into the header, where it is one tap from anywhere, and
 * the protection moves from "buried" to "answer this first".
 *
 * ── Why a sum and not the password ─────────────────────────────────────────
 *
 * A learner on this screen may not be signed in as an account at all: a child
 * opened by a parent has a learner profile and no password of their own. There
 * is also no PIN stored anywhere yet. Verifying the account password would mean
 * a round trip to Supabase Auth, which fails on the bad connections this app is
 * built to keep working on, and would put a password box in front of a five
 * year old holding the phone.
 *
 * A two digit multiplication is offline, instant, and beyond the person the
 * gate exists to stop. It is not security: it stops accidents, which is all
 * that is being asked of it. If a real PIN is ever stored on the account, this
 * is the one place that has to change.
 */

import { useMemo, useRef, useState } from 'react'

/** Two numbers whose product a child of this age cannot reach, but an adult can. */
function challenge() {
  const a = 6 + Math.floor(Math.random() * 7)   /* 6 to 12 */
  const b = 6 + Math.floor(Math.random() * 7)
  return { a, b, answer: a * b }
}

export default function GrownUpGate({ what, onPass, onCancel }: {
  /** What is about to happen, said plainly. "sign out", "see progress". */
  what: string
  onPass: () => void
  onCancel: () => void
}) {
  /* Fixed for the life of the dialog. Rolling a new sum on every keystroke
     would make it unanswerable. */
  const sum = useMemo(() => challenge(), [])
  const [said, setSaid] = useState('')
  const [wrong, setWrong] = useState(false)
  const field = useRef<HTMLInputElement | null>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (Number(said.trim()) === sum.answer) { onPass(); return }
    setWrong(true)
    setSaid('')
    field.current?.focus()
  }

  return (
    <div className="kg-veil" role="dialog" aria-modal="true" aria-label="For a grown up">
      <form className="kg-card" onSubmit={submit}>
        <h2 className="kg-title">For a grown up</h2>
        <p className="kg-why">
          Answer this to {what}.
        </p>

        <p className="kg-sum">{sum.a} × {sum.b} = ?</p>

        <input
          ref={field}
          className={`kg-field${wrong ? ' is-wrong' : ''}`}
          /* `text` with a numeric keypad rather than `number`: the spinner
             arrows on a number field are the first thing a child presses, and
             they are not an answer. */
          type="text"
          inputMode="numeric"
          autoComplete="off"
          aria-label="The answer"
          value={said}
          autoFocus
          onChange={e => { setSaid(e.target.value); setWrong(false) }}
        />

        {wrong && <p className="kg-no">Not quite. Ask a grown up.</p>}

        <div className="kg-row">
          <button type="button" className="kg-quiet" onClick={onCancel}>
            Go back
          </button>
          <button type="submit" className="kg-go" disabled={!said.trim()}>
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}
