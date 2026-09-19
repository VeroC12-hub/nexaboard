/**
 * Getting a picture onto a lesson page.
 *
 * Two models, one after the other, which is the whole point of this file:
 *
 *   1. Claude decides WHAT to show and writes the brief. It is the one that
 *      knows the topic, the learner's year, and what the lesson actually said.
 *   2. An open source model renders it, for the two kinds that are rendered.
 *
 * For a `figure` there is no second step: Claude writes the SVG itself, so the
 * diagram is on the page in one call, costs nothing to render and has correct
 * labels. That is why figures are the default and the other two are asked for
 * rather than assumed.
 *
 * Everything degrades to no picture. A lesson without a diagram is a lesson; a
 * lesson with a broken image where a diagram should be is worse than one with
 * nothing, so anything that does not come back clean is dropped silently.
 */

import { askVisual } from './ai'
import type { LearnerBrief, SyllabusPlace } from './ai'
import {
  cleanSvg, readBrief,
  type Visual, type VisualBrief, type VisualKind,
} from './visuals'

/** How often to look while the renderer works, and when to give up on it. */
const POLL_MS = 2500
const GIVE_UP_MS = 6 * 60 * 1000

/** The model saying, correctly, that this topic does not need a picture. */
const DECLINED = /^\s*NO (FIGURE|IMAGE|CLIP)\s*\.?\s*$/i

export class RendererOff extends Error {}

/**
 * Whether this deployment can render anything at all.
 *
 * Asked once and remembered. Without it, a lesson on a deployment with no
 * renderer would still pay a full tutor call to write a photograph brief and a
 * video brief that nothing can turn into pictures. On the free route that is a
 * minute of the worker's time, twice, for nothing.
 *
 * A GET with no id answers 400 when a renderer is configured and 501 when it is
 * not, so the question costs one request and no render.
 */
let rendererKnown: Promise<boolean> | null = null

export function rendererAvailable(): Promise<boolean> {
  rendererKnown ??= fetch('/api/render')
    .then(res => res.status !== 501 && res.status !== 404)
    .catch(() => false)
  return rendererKnown
}

const wait = (ms: number) => new Promise(res => setTimeout(res, ms))

async function errorFrom(res: Response, fallback: string): Promise<string> {
  const said = await res.json().catch(() => null)
  return said && typeof said.error === 'string' ? said.error : fallback
}

/**
 * Ask for a visual, and render it if it is the kind that needs rendering.
 *
 * Returns null when the model judged that this topic does not need one, which
 * it is explicitly told is the right answer more often than not. A null here is
 * a decision, not a failure.
 */
export async function illustrate(
  r: {
    kind: VisualKind
    topicId: string
    learner: LearnerBrief
    syllabus: SyllabusPlace
    /** The lesson text, so the picture shows what was actually taught. */
    lesson?: string
    askedFor?: string
  },
  signal?: AbortSignal,
  onStage?: (what: 'briefing' | 'rendering') => void,
): Promise<Visual | null> {
  onStage?.('briefing')

  const text = await askVisual(
    {
      task: r.kind,
      learner: r.learner,
      syllabus: r.syllabus,
      lesson: r.lesson,
      askedFor: r.askedFor,
    },
    signal,
  )

  if (DECLINED.test(text)) return null

  const brief = readBrief(text, r.kind)
  if (!brief) return null

  const id = `${r.topicId}-${r.kind}-${Date.now().toString(36)}`

  /* A figure is finished the moment it is written. No renderer, no key, no
     cost, and the labels say exactly what Claude meant them to say. */
  if (r.kind === 'figure') {
    return { ...brief, id, topicId: r.topicId, madeBy: 'drawn by your tutor' }
  }

  onStage?.('rendering')
  const made = await render(brief, signal)
  if (!made) return null
  return { ...brief, id, topicId: r.topicId, url: made.url, madeBy: made.madeBy }
}

/**
 * Hand a prompt to the open source model and wait for the file.
 *
 * Returns null rather than throwing when the deployment has no renderer
 * configured, because that is the ordinary state of things and a lesson should
 * not show an error for a photograph it was never going to get.
 */
async function render(
  brief: VisualBrief,
  signal?: AbortSignal,
): Promise<{ url: string, madeBy: string } | null> {
  let res: Response
  try {
    res = await fetch('/api/render', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal,
      body: JSON.stringify({ kind: brief.kind, prompt: brief.body }),
    })
  } catch (e) {
    if (signal?.aborted) throw e
    return null
  }

  /* 404 is a dev server with no functions, 501 is a deployment with no key.
     Both mean there is no renderer here, which is not an error. */
  if (res.status === 404 || res.status === 501) {
    console.info('[render] ' + await errorFrom(res, 'no renderer configured'))
    return null
  }
  if (!res.ok) {
    console.info('[render] ' + await errorFrom(res, 'the renderer refused'))
    return null
  }

  const { id } = await res.json() as { id?: string }
  if (!id) return null

  const until = Date.now() + GIVE_UP_MS
  for (;;) {
    if (signal?.aborted) return null
    await wait(POLL_MS)
    if (signal?.aborted) return null

    const look = await fetch(`/api/render?id=${encodeURIComponent(id)}`, { signal })
    if (!look.ok) return null
    const state = await look.json() as {
      status?: string
      url?: string
      madeBy?: string
      error?: string
    }

    if (state.status === 'done' && state.url) {
      return { url: state.url, madeBy: state.madeBy || 'an open model' }
    }
    if (state.status === 'error') {
      console.info('[render] ' + (state.error || 'failed'))
      return null
    }
    if (Date.now() > until) {
      console.info('[render] gave up waiting')
      return null
    }
  }
}

/** Re-exported so a caller can check an SVG that came from anywhere else. */
export { cleanSvg }
