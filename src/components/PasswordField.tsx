/**
 * A password box with an eye.
 *
 * ── Why every password box needs one ────────────────────────────────────────
 *
 * Typing a password you cannot see, on a phone keyboard, in a language that is
 * often not your first, is the commonest reason a person gives up at a sign in
 * screen. This product is used on shared phones in classrooms by children and
 * by parents who may not type quickly, and "that name and password do not
 * match an account" is the only thing the app can honestly say when it goes
 * wrong, which helps nobody who simply mistyped.
 *
 * So the characters can be shown. It is off by default, because the other
 * half of a shared phone is somebody standing next to you.
 *
 * ── The details that matter ─────────────────────────────────────────────────
 *
 * The toggle is a real `button` inside the field, not an icon with an onClick,
 * so it is reachable by keyboard and announced. `aria-pressed` says which
 * state it is in, because "Show password" alone does not tell a screen reader
 * whether the password is currently showing.
 *
 * `type="button"` is load bearing: inside a form, a button without it submits,
 * so revealing your password would try to sign you in with a half typed one.
 */

import { useState } from 'react'

export default function PasswordField({
  value, onChange, placeholder, autoComplete = 'current-password',
  id, className = 'ne-in', autoFocus, onEnter,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  /** `new-password` on a sign up form, so a manager offers to generate one. */
  autoComplete?: 'current-password' | 'new-password'
  id?: string
  className?: string
  autoFocus?: boolean
  onEnter?: () => void
}) {
  const [shown, setShown] = useState(false)

  return (
    <span className="pw">
      <input
        id={id}
        className={`${className} pw-in`}
        type={shown ? 'text' : 'password'}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter' && onEnter) onEnter() }} />

      <button
        type="button"
        className="pw-eye"
        aria-label={shown ? 'Hide password' : 'Show password'}
        title={shown ? 'Hide password' : 'Show password'}
        aria-pressed={shown}
        /* Keeps the caret where it was. Without this the field loses focus to
           the button and a learner has to tap back into it to carry on. */
        onMouseDown={e => e.preventDefault()}
        onClick={() => setShown(s => !s)}>
        <Eye open={shown} />
      </button>
    </span>
  )
}

/**
 * The eye, and the eye struck through.
 *
 * One path for the lid and one for the pupil, with a stroke across it when
 * hidden. Drawn rather than a font character because an emoji eye renders as
 * a different picture on every device, and on some Android builds as nothing.
 */
function Eye({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.8 12s3.9-7 10.2-7 10.2 7 10.2 7-3.9 7-10.2 7S1.8 12 1.8 12Z" />
      <circle cx="12" cy="12" r="3.2" />
      {!open && <path d="M4 20 L20 4" />}
    </svg>
  )
}
