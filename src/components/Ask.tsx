/**
 * How the learner interrupts.
 *
 * She points at anything in a lesson and says what she wants done about it:
 * explain it, draw it, film it, read it out, or simply that she does not
 * understand. The answer arrives under the paragraph she pointed at.
 *
 * ── Why this is the most important component in the lesson ──────────────────
 *
 * Before it, the lesson was something done to her. The platform wrote what it
 * decided she should read, watched whether she got the following questions
 * right, and inferred from that how she learns. A learner who understood
 * nothing and closed the page left no trace at all.
 *
 * This inverts it. The request is the signal: unambiguous, immediate, and
 * about the exact thing that was not landing. Six right-or-wrong answers take
 * a week to mean anything and still cannot tell you *what* went wrong. One tap
 * on the word "fewer" tells you everything, on her first screen.
 *
 * ── Two interfaces, one feature ─────────────────────────────────────────────
 *
 * Selecting text is useless to a five year old who cannot read or drag a
 * cursor. So the same asking works two ways: a menu on a selection for readers,
 * and one large button plus the answer spoken aloud for everybody else. The
 * record they produce is identical, so nothing downstream has to care which
 * one a learner used.
 */

import { useEffect, useRef, useState } from 'react'
import Prose from './Prose'
import type { Spot } from './useSpot'
import { Icon, type Mark } from './kid/art'
import { WANT_WORDS, type Ask, type Want } from '../lib/education/ask'
import { say } from '../lib/education/speak'
import '../styles/ask.css'

/* ── the menu ─────────────────────────────────────────────────────────────── */

const OFFERED: Array<{ want: Want, icon: Mark, label: string }> = [
  { want: 'explain', icon: 'think', label: 'Explain this' },
  { want: 'picture', icon: 'star', label: 'Draw this' },
  { want: 'video', icon: 'play', label: 'Video of this' },
  { want: 'aloud', icon: 'speak', label: 'Read it out' },
]

export function AskMenu({ spot, onWant, onClose }: {
  spot: Spot
  onWant: (want: Want, words: string | null) => void
  onClose: () => void
}) {
  const [typing, setTyping] = useState(false)
  const [words, setWords] = useState('')

  /* Escape closes it, because a menu that can only be dismissed by tapping
     exactly the right empty space is a trap on a phone. */
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="ak-menu"
      style={{ left: spot.x, top: spot.y }}
      /* The menu must not clear the selection it is about. */
      onPointerDown={e => e.preventDefault()}>

      {!typing ? (
        <>
          {OFFERED.map(o => (
            <button key={o.want} className="ak-item" onClick={() => onWant(o.want, null)}>
              <Icon mark={o.icon} size={17} /> {o.label}
            </button>
          ))}
          <button className="ak-item ak-ask" onClick={() => setTyping(true)}>
            <Icon mark="next" size={17} /> Ask about it
          </button>
        </>
      ) : (
        <form
          className="ak-form"
          onSubmit={e => { e.preventDefault(); onWant('explain', words.trim() || null) }}>
          <input
            className="ak-input"
            autoFocus
            value={words}
            maxLength={400}
            placeholder={`What about "${spot.text.slice(0, 24)}"?`}
            onChange={e => setWords(e.target.value)} />
          <button className="ak-go" type="submit">Ask</button>
        </form>
      )}
    </div>
  )
}

/* ── the big button, for learners who cannot read the menu ────────────────── */

/**
 * One button, always there, for the youngest.
 *
 * No selection, no typing, no reading. It means "this is not working", which
 * is the only thing a child who cannot read needs to be able to say, and it is
 * the signal the platform was most completely blind to.
 */
export function LostButton({ onLost, waiting }: {
  onLost: () => void
  waiting: boolean
}) {
  return (
    <button
      className={`ak-lost${waiting ? ' is-waiting' : ''}`}
      onClick={onLost}
      disabled={waiting}>
      {/* Drawn, not an emoji. A platform emoji beside the drawn characters on
          the same screen was the most visible seam in the interface. */}
      <Icon mark="think" size={22} />
      {waiting ? 'Getting you another way' : 'I do not understand'}
    </button>
  )
}

/* ── an answer, where she asked for it ────────────────────────────────────── */

/**
 * One ask and whatever came back.
 *
 * Always shows what she asked, in her words or as the thing she pointed at,
 * because an answer with no visible question is just more text on the page.
 */
export function AskCard({ ask, onHelped, onAgain, speak }: {
  ask: Ask
  onHelped: (did: boolean) => void
  /** Try again, differently, when the answer did not land. */
  onAgain: () => void
  /** Whether to read the answer out as well as show it. */
  speak: boolean
}) {
  const answer = ask.answer
  const spoken = useRef(false)

  /* Read it out once, for the learners who cannot read it. */
  useEffect(() => {
    if (!speak || spoken.current) return
    if (answer?.status === 'ready' && answer.kind === 'text') {
      spoken.current = true
      say(answer.body.slice(0, 600))
    }
  }, [speak, answer])

  return (
    <div className="ak-card">
      <p className="ak-asked">
        <span aria-hidden>❓</span>{' '}
        {ask.words
          ? <>You asked: <b>{ask.words}</b></>
          : ask.about
            ? <>You asked to {WANT_WORDS[ask.want]}: <b>{ask.about}</b></>
            : <>You said: <b>{WANT_WORDS[ask.want]}</b></>}
      </p>

      {!answer || answer.status === 'waiting' ? (
        <p className="ak-waiting">
          {ask.want === 'video'
            /* Honest about minutes. A child told "one moment" for three
               minutes learns that the app lies to her. */
            ? 'Making your video. It takes a few minutes, so keep going and it will appear here.'
            : 'Working on it'}
        </p>
      ) : answer.status === 'failed' ? (
        <p className="ak-failed">
          {answer.body || 'That did not work just now. Try asking again.'}
        </p>
      ) : answer.kind === 'figure' ? (
        /* Already sanitised by `cleanSvg` before it was stored. */
        <div className="ak-figure" dangerouslySetInnerHTML={{ __html: answer.body }} />
      ) : answer.kind === 'picture' ? (
        <img className="ak-picture" src={answer.body} alt={ask.about ?? 'A picture of this'} />
      ) : answer.kind === 'video' ? (
        <video className="ak-video" src={answer.body} controls playsInline preload="metadata" />
      ) : (
        <div className="ak-answer"><Prose text={answer.body} /></div>
      )}

      {answer?.status === 'ready' && (
        <div className="ak-did">
          {ask.helped === null ? (
            <>
              <span className="ak-did-q">Did that help?</span>
              <button className="ak-yes" onClick={() => onHelped(true)}>Yes</button>
              {/* The most valuable button on the page. An answer that failed is
                  the one thing a right-and-wrong log can never tell the tutor. */}
              <button className="ak-no" onClick={() => { onHelped(false); onAgain() }}>
                Still lost
              </button>
            </>
          ) : (
            <span className="ak-did-said">
              {ask.helped ? 'Good.' : 'Trying a different way.'}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
