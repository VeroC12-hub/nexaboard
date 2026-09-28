/**
 * A conversation about one part of a lesson, carried on until it lands.
 *
 * ── What was wrong before ───────────────────────────────────────────────────
 *
 * The box asked one question, printed one answer, and closed. If the answer did
 * not help, and the answer not helping is the normal case for the learner who
 * needed to ask, there was nowhere to say so. They would have to open the box
 * again and re-describe the whole thing to a tutor with no memory of the last
 * exchange.
 *
 * That is not how anybody learns something they are stuck on. Understanding
 * arrives after the second or third attempt at explaining it, when the learner
 * has said which bit of the first answer they did not follow. So this keeps the
 * whole exchange, sends it back each time, and the box after the last answer
 * never goes away.
 *
 * ── Why it is full width ────────────────────────────────────────────────────
 *
 * The control that opens it sits in the margin, out of the way of the lesson.
 * The conversation does not: an answer rendered in a nine rem margin is a
 * column of single words, which is unreadable, and there is nowhere to type a
 * follow up. So the trigger is `beside` and the thread is `after`.
 *
 * ── Why the transport is a prop ─────────────────────────────────────────────
 *
 * Two surfaces need this and they reach the tutor differently. The learner app
 * files an ask through `useAsking`, which writes it to the learner's record so
 * `plan.ts` can learn what they keep asking for. The review page has no learner
 * and goes straight to the queue. Both want the same conversation, so the
 * conversation is here and the sending is theirs.
 */

import { useRef, useState } from 'react'
import Prose from './Prose'

export interface Turn {
  asked: string
  /** Empty while it is still being answered. */
  answer: string
  failed?: string
}

export default function AskThread({ onAsk, young }: {
  /**
   * Send a question and return the answer.
   *
   * Given the whole conversation so far, because a follow up like "I still do
   * not get the second part" means nothing without it.
   */
  onAsk: (question: string, before: Turn[]) => Promise<string>
  young?: boolean
}) {
  const [turns, setTurns] = useState<Turn[]>([])
  const [words, setWords] = useState('')
  const [busy, setBusy] = useState(false)
  const box = useRef<HTMLInputElement | null>(null)

  const send = async () => {
    const asked = words.trim()
    if (!asked || busy) return
    setWords('')
    setBusy(true)

    /* The question goes on screen before the answer exists, so the learner can
       see what they asked while they wait rather than an empty box. */
    const before = turns
    setTurns([...before, { asked, answer: '' }])

    try {
      const answer = await onAsk(asked, before)
      setTurns(now => now.map((t, i) =>
        i === now.length - 1 ? { ...t, answer } : t))
    } catch (err) {
      const why = err instanceof Error && err.message
        ? err.message
        : 'The tutor could not answer that.'
      setTurns(now => now.map((t, i) =>
        i === now.length - 1 ? { ...t, failed: why } : t))
    } finally {
      setBusy(false)
      /* Focus returns to the box, because the likeliest next thing a learner
         does after reading an answer they did not follow is say so. */
      box.current?.focus()
    }
  }

  /* No trigger of its own. The control that opens this lives in the margin
     beside the paragraph, and the page owns that state, because the two sit in
     different slots: a narrow margin for the control, the full reading width
     for the conversation. A component cannot render itself into two places. */
  return (
    <section className="nx-thread" aria-label="Your questions about this part">
      {turns.map((t, i) => (
        <div key={i} className="nx-thread-turn">
          <p className="nx-thread-asked">{t.asked}</p>
          {t.failed
            ? <p className="nx-thread-failed">{t.failed}</p>
            : t.answer
              ? <div className="nx-thread-answer"><Prose text={t.answer} className="nx-ai-p" /></div>
              : <p className="nx-ai-wait">{young ? 'Thinking about it…' : 'The tutor is answering…'}</p>}
        </div>
      ))}

      {/* Always here, after the last answer. This is the whole point: the
          second question is the one that usually does the work. */}
      <form
        className="nx-thread-form"
        onSubmit={e => { e.preventDefault(); void send() }}
      >
        <input
          ref={box}
          className="nx-thread-box"
          value={words}
          autoFocus={!turns.length}
          placeholder={turns.length
            ? (young ? 'Still not sure? Say what is confusing' : 'Ask a follow up, or say what is still unclear')
            : (young ? 'What do you want to know?' : 'What is your question?')}
          aria-label="Your question"
          onChange={e => setWords(e.target.value)}
        />
        <button type="submit" className="nx-thread-send" disabled={!words.trim() || busy}>
          {busy ? 'Wait' : turns.length ? 'Ask again' : 'Ask'}
        </button>
      </form>

      {turns.length > 0 && (
        <p className="nx-thread-note">
          {young
            ? 'Keep asking until it makes sense.'
            : 'Keep asking until it makes sense. The tutor remembers this conversation.'}
        </p>
      )}
    </section>
  )
}
