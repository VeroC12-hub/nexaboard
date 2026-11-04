/**
 * "Read this page", for every learner rather than only the small ones.
 *
 * The child's shell has had a speaker in its header since it was written, and
 * nothing else in the app has. That is backwards. A Basic 1 pupil who cannot
 * read yet is the obvious case, but the learner who most needs a page read to
 * them may equally be an SHS candidate with poor sight, a learner reading in
 * their second language, or anybody on a bus. So this is not a kid control
 * moved; it is the same ability given to everyone.
 *
 * ── Why it reads the DOM ────────────────────────────────────────────────────
 *
 * The kid shell is handed a `reads()` function and each of its screens supplies
 * the sentences for itself. That does not scale past four screens: every new
 * page would have to remember to write its own version, and the ones that
 * forgot would silently have no voice. Reading the rendered page instead means
 * a screen gets this by existing, which is the only way "across the board" is
 * true a month from now.
 *
 * The cost is that it must be told what is page and what is furniture, which
 * is what `data-unread` is for: put it on a navigation rail, a toolbar or a
 * decorative figure and the reader walks past it.
 */

import { useEffect, useState } from 'react'
import { canSpeak, say, stop } from '../lib/education/speak'
import { Icon } from './kid/art'

/**
 * Elements whose text is not the page.
 *
 * Navigation, controls and anything marked by hand. A page read that begins
 * "Menu. Search. Sign out." has lost the listener before the first sentence.
 */
const SKIP = 'nav, button, select, textarea, input, [data-unread], [aria-hidden="true"]'

/** Sentence-ish units, in the order they appear on screen. */
function pageLines(root: HTMLElement): string[] {
  const out: string[] = []
  const seen = new Set<string>()

  /* Block elements, because reading every text node separately breaks a
     sentence at each piece of emphasis inside it. */
  for (const el of root.querySelectorAll<HTMLElement>(
    'h1, h2, h3, h4, p, li, dt, dd, figcaption, caption, th, td, blockquote',
  )) {
    if (el.closest(SKIP)) continue
    /* A list item inside a paragraph, or a cell inside a row already taken:
       the outer one wins, so nothing is said twice. */
    if (el.parentElement?.closest('p, li, blockquote')) continue

    const text = (el.textContent ?? '').replace(/\s+/g, ' ').trim()
    if (!text || seen.has(text)) continue
    seen.add(text)

    /* A heading is a sentence of its own even without a full stop, so that the
       voice drops at the end of it instead of running into what follows. */
    out.push(/[.!?:]$/.test(text) ? text : text + '.')
  }
  return out
}

/**
 * The speaker.
 *
 * Nothing is rendered at all on a device with no voice, rather than a button
 * that does nothing when pressed.
 *
 * `within` is a selector for the part of the screen that is the page. It
 * defaults to `main`, which every shell in this app already has.
 */
export default function ReadAloud({
  within = 'main',
  className = '',
}: { within?: string, className?: string }) {
  const [talking, setTalking] = useState(false)

  /* Leaving a screen in the middle of a sentence should stop the sentence. */
  useEffect(() => () => stop(), [])

  if (!canSpeak()) return null

  const read = () => {
    if (talking) { stop(); setTalking(false); return }

    const root = document.querySelector<HTMLElement>(within) ?? document.body
    const lines = pageLines(root)
    if (!lines.length) return

    setTalking(true)
    /* `asked` because a finger on this button outranks the standing voice
       preference, which exists to govern narration nobody asked for. */
    say(lines, { asked: true, onEnd: () => setTalking(false) })
  }

  return (
    <button
      type="button"
      className={className}
      aria-label={talking ? 'Stop reading' : 'Read this page'}
      title={talking ? 'Stop reading' : 'Read this page'}
      aria-pressed={talking}
      onClick={read}>
      <Icon mark={talking ? 'mute' : 'speak'} size={17} />
    </button>
  )
}
