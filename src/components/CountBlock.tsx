/**
 * Exactly N things, drawn, for a lesson about how many there are.
 *
 * ── Why a generated picture is the wrong tool here ──────────────────────────
 *
 * The first KG lesson asked for "ten ripe mangoes arranged in a row on a
 * wooden table" and Pollinations returned a handsome photograph of mangoes,
 * dramatically lit, some of them cut off by the right edge. You cannot count
 * ten of them. In a lesson whose entire subject is counting to ten, the one
 * thing the picture had to get right was the number, and a diffusion model
 * cannot be asked for a number.
 *
 * This is the same failure as a generated chart with invented bar heights, and
 * it gets the same answer, which this codebase already applies to video and to
 * charts: when the number IS the content, draw it. Ten here is ten because a
 * loop ran ten times.
 *
 * ── Why it borrows the games' own artwork ───────────────────────────────────
 *
 * `public/ananse/count.js` already draws these objects and is already shared
 * by the games and by the Remotion lesson videos, so the mango a child counts
 * in a lesson is the same mango they then pick up in Feed Ananse. That
 * continuity was a deliberate decision made when `count.js` was extracted, and
 * a second mango drawn here would quietly undo it.
 *
 * It needs `kit.js` for its shapes and ink. Loading that is safe despite its
 * size: the file only assigns `window.AnanseKit`, and every side effect it has,
 * the listeners, the resize hook, the animation frame, lives inside `run()`,
 * which is never called from here.
 *
 * ── Why the row breaks at five ──────────────────────────────────────────────
 *
 * `count.js` decides that, not this file, and its reasoning is worth repeating
 * because it looks like a layout choice and is a teaching one: ten in a line is
 * a line a child has to count along, ten as two fives is a shape they can come
 * to recognise without counting, and it is also how hands work.
 */

import { useEffect, useRef, useState } from 'react'
import type { CountSpec } from '../lib/education/lesson-blocks'

interface Spot { x: number, y: number, index: number }
interface Box { x: number, y: number, w: number, h: number }

interface CountApi {
  THINGS: Record<string, { one: string, many: string }>
  NAMES: string[]
  draw: (name: string, ctx: CanvasRenderingContext2D, r: number, opts?: unknown) => void
  row: (n: number, box: Box, per?: number) => Spot[]
  sizeFor: (n: number, box: Box, per?: number) => number
}

declare global {
  interface Window {
    AnanseCount?: CountApi
    AnanseKit?: unknown
  }
}

/**
 * Load the two scripts once per page, in order.
 *
 * A module level promise rather than per component state, because a lesson may
 * hold several of these and they must not each append their own script tag.
 * Order matters: `count.js` reads `window.AnanseKit` when it draws.
 */
let loading: Promise<CountApi | null> | null = null

function loadArt(): Promise<CountApi | null> {
  if (window.AnanseCount) return Promise.resolve(window.AnanseCount)
  loading ??= (async () => {
    const one = (src: string) => new Promise<void>((resolve, reject) => {
      const had = document.querySelector<HTMLScriptElement>(`script[data-art="${src}"]`)
      if (had) {
        /* Appended by another instance that has not finished yet. */
        had.addEventListener('load', () => resolve(), { once: true })
        had.addEventListener('error', () => reject(new Error(src)), { once: true })
        return
      }
      const el = document.createElement('script')
      el.src = src
      el.async = false
      el.dataset.art = src
      el.onload = () => resolve()
      el.onerror = () => reject(new Error(src))
      document.head.appendChild(el)
    })
    try {
      await one('/ananse/kit.js')
      await one('/ananse/count.js')
      return window.AnanseCount ?? null
    } catch {
      /* The lesson still has its words and its caption. See the fallback. */
      return null
    }
  })()
  return loading
}

export default function CountBlock({ spec }: { spec: CountSpec }) {
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let live = true
    void loadArt().then(api => {
      const el = canvas.current
      if (!live || !el) return
      if (!api || !api.THINGS[spec.thing]) { setFailed(true); return }

      /* Drawn at device resolution and scaled back down, so the outlines are
         not soft on a phone, which is where this is mostly read. */
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const w = el.clientWidth || 460
      const h = Math.round(spec.n > 5 ? w * 0.48 : w * 0.3)
      el.width = Math.round(w * ratio)
      el.height = Math.round(h * ratio)
      el.style.height = `${h}px`

      const ctx = el.getContext('2d')
      if (!ctx) { setFailed(true); return }
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      ctx.clearRect(0, 0, w, h)

      const pad = 10
      const box: Box = { x: pad, y: pad, w: w - pad * 2, h: h - pad * 2 }
      const r = api.sizeFor(spec.n, box, 5)

      for (const spot of api.row(spec.n, box, 5)) {
        ctx.save()
        ctx.translate(spot.x, spot.y)
        /* Faces on, because these are the same characters the games use and a
           mango with eyes is the reason a four year old looks at it. `t` is
           fixed so this is a still: a lesson page is read, not played, and an
           idle bob here would be movement with nothing to say. */
        api.draw(spec.thing, ctx, r, { face: true, t: 0, index: spot.index })
        ctx.restore()
      }
    })
    return () => { live = false }
  }, [spec.thing, spec.n])

  const api = typeof window !== 'undefined' ? window.AnanseCount : undefined
  const word = api?.THINGS[spec.thing]
    ? (spec.n === 1 ? api.THINGS[spec.thing].one : api.THINGS[spec.thing].many)
    : spec.thing
  const said = spec.caption?.trim() || `${spec.n} ${word}`

  /* If the artwork cannot load, the sentence is what is left, and it still
     carries the number. A blank space would take the lesson's subject with
     it. */
  if (failed) {
    return (
      <figure className="nx-count">
        <figcaption className="nx-count-cap">{said}</figcaption>
      </figure>
    )
  }

  return (
    <figure className="nx-count">
      {/* A canvas is invisible to a screen reader, so it carries the sentence
          as its label. The caption repeats it for everybody else. */}
      <canvas
        ref={canvas}
        className="nx-count-canvas"
        role="img"
        aria-label={said}
      />
      <figcaption className="nx-count-cap">{said}</figcaption>
    </figure>
  )
}
