/**
 * Where the learner pointed, inside a lesson.
 *
 * Its own file because a module that exports a hook alongside components
 * cannot be hot reloaded, and this is the file most likely to be edited while
 * a lesson is open on screen.
 */

import { useCallback, useEffect, useState } from 'react'

/* ── where she pointed ────────────────────────────────────────────────────── */

export interface Spot {
  /** The text she selected. */
  text: string
  /** Which paragraph it was in, so the answer can go there. */
  block: number
  /** Where to put the menu, in page coordinates. */
  x: number
  y: number
}

/**
 * Watch for a selection inside the lesson.
 *
 * Deliberately on `pointerup` and not on `selectionchange`. A selection
 * changes continuously while a finger is dragging, and a menu that appears
 * mid-drag lands under the thumb and gets pressed by accident. Waiting for the
 * finger to lift costs nothing and is how every reading app behaves.
 */
export function useSpot(ref: React.RefObject<HTMLElement | null>) {
  const [spot, setSpot] = useState<Spot | null>(null)
  const clear = useCallback(() => setSpot(null), [])

  useEffect(() => {
    const host = ref.current
    if (!host) return
    /* Held as a non-null local: a function declaration does not keep the
       narrowing from the check above it. */
    const lesson: HTMLElement = host

    function onUp() {
      const sel = window.getSelection()
      if (!sel || sel.isCollapsed || !sel.rangeCount) { setSpot(null); return }

      const text = sel.toString().replace(/\s+/g, ' ').trim()
      /* A stray tap selects a single character. Two words is the shortest
         thing worth asking about, and one letter is almost always a mistake. */
      if (text.length < 2) { setSpot(null); return }

      const range = sel.getRangeAt(0)
      /* Only selections inside the lesson, so selecting the page heading or a
         button label does not offer to explain it. */
      const node = range.commonAncestorContainer
      const el = node.nodeType === 1 ? node as Element : node.parentElement
      if (!el || !lesson.contains(el)) { setSpot(null); return }

      const para = el.closest('[data-block]')
      const block = para ? Number(para.getAttribute('data-block')) : -1

      const box = range.getBoundingClientRect()
      setSpot({
        text,
        block: Number.isFinite(block) ? block : -1,
        /* Above the selection where there is room, below it when the selection
           is near the top of the screen. */
        x: box.left + box.width / 2,
        y: box.top > 92 ? box.top : box.bottom + 8,
      })
    }

    lesson.addEventListener('pointerup', onUp)
    return () => lesson.removeEventListener('pointerup', onUp)
  }, [ref])

  return { spot, clear }
}
