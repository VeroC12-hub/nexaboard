/**
 * A box on every block, for the question that block provoked.
 *
 * ── Why one per block rather than one per lesson ────────────────────────────
 *
 * There was already a box, once, under the whole lesson. That works for "I am
 * lost" and badly for everything else, because by the time a learner has
 * scrolled to the bottom they have to describe WHICH part confused them, in
 * words, to a tutor that cannot see where they were looking. Most people will
 * not bother, and the ones who do spend their question explaining the
 * location instead of asking the thing.
 *
 * A box attached to the paragraph carries the location for free. The block's
 * own text goes along as the `about`, so the tutor answers the sentence in
 * front of her rather than the topic in general, and the answer appears under
 * that same paragraph because `useAsking` files it against the block index.
 *
 * There was a selection based route too, where a learner highlighted a phrase
 * and a menu appeared. That stays and is better when it fires, but it requires
 * knowing to highlight, which a child does not, and it does not exist at all
 * for a table or a chart. This does.
 *
 * ── Why it is quiet until it is used ────────────────────────────────────────
 *
 * Ten expanded text boxes down a lesson would compete with the lesson. So each
 * one is a single muted line that grows into a field when it is touched, which
 * is small enough to ignore and obvious enough to find. It is deliberately not
 * hidden behind a hover: a phone has no hover, and this audience is mostly on
 * phones.
 */

import { useState } from 'react'

export default function BlockAsk({ onAsk, young, busy }: {
  /** Sends the question, with the text of the block it was asked about. */
  onAsk: (words: string) => void
  /** Younger learners get plainer wording and a bigger target. */
  young?: boolean
  /** True while the tutor is already working, so a second ask can wait. */
  busy?: boolean
}) {
  const [open, setOpen] = useState(false)
  const [words, setWords] = useState('')

  if (!open) {
    return (
      <button
        type="button"
        className="nx-blockask-open"
        onClick={() => setOpen(true)}
      >
        {young ? 'Ask about this bit' : 'Ask about this'}
      </button>
    )
  }

  return (
    <form
      className="nx-blockask"
      onSubmit={e => {
        e.preventDefault()
        const said = words.trim()
        if (!said) return
        onAsk(said)
        setWords('')
        /* Closed again on send, because the answer appears directly below and
           an open empty box under it reads as though nothing happened. */
        setOpen(false)
      }}
    >
      <input
        className="nx-blockask-box"
        value={words}
        autoFocus
        placeholder={young ? 'What do you want to know?' : 'What is your question?'}
        aria-label="Your question about this part"
        onChange={e => setWords(e.target.value)}
        onKeyDown={e => {
          /* Escape closes it. Without this the only way out of a box opened by
             accident is to send something. */
          if (e.key === 'Escape') { setWords(''); setOpen(false) }
        }}
      />
      <button
        type="submit"
        className="nx-blockask-send"
        disabled={!words.trim() || busy}
      >
        {busy ? 'Wait' : 'Ask'}
      </button>
    </form>
  )
}
