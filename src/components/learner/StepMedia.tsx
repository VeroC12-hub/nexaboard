import { useEffect, useState, type CSSProperties } from 'react'
import Illustration from '../Illustration'
import { rendererAvailable } from '../../lib/education/illustrate'
import type { Visual } from '../../lib/education/visuals'
import type { StepImage, StepVideo } from '../../lib/education/lesson'
import { Prose } from './Teaching'

/**
 * Pictures and clips inside a lesson step.
 *
 * ── Why this exists beside Diagram ──────────────────────────────────────────
 *
 * `Diagram` serves a fixed set of SVGs drawn by hand in Teaching.tsx. It stays
 * exactly as it is: it is the tutor's own drawing, its labels are real text, it
 * scales, and it is the right answer for anything a learner must read. What it
 * cannot do is serve a lesson generated for one learner about a topic nobody
 * drew in advance. That is the gap these two components close, and they are an
 * addition to the diagram rather than a replacement for it.
 *
 * ── Media is enrichment, structurally and not as a promise ──────────────────
 *
 * Both components return null when they have nothing good to show, and the
 * step renders the prose and the diagram before either of them is consulted.
 * So a deployment with no renderer, a renderer that times out, a 404 on a
 * storage url and a learner on a connection that will not carry video all
 * produce the same outcome: the step still teaches, in prose, with its diagram.
 * Nothing here is on the path between a learner and the lesson text.
 *
 * ── A generated picture is never the only carrier of a fact ─────────────────
 *
 * The platform's existing rule, and the reason the video renderer draws its own
 * labels: an image model cannot spell and cannot be trusted with a quantity.
 * Ask one for "a triangle with sides 3, 4 and 5" and it returns a triangle that
 * is not that triangle, with numerals that are not those numerals. So the
 * picture here is atmosphere: it shows what a cocoa pod or a market scale looks
 * like. Every number, label and equation lives in the step's prose or in the
 * named SVG diagram, both of which are real DOM written by the tutor. A step
 * whose meaning survives only when the picture arrives is an authoring bug, not
 * a rendering one, and it will read as broken to every learner whose renderer
 * is off.
 */

/** How often to look while the renderer works, and when to stop looking. */
const POLL_MS = 2500
const GIVE_UP_MS = 3 * 60 * 1000

const wait = (ms: number) => new Promise(res => setTimeout(res, ms))

/**
 * Hand a prompt to the renderer and wait for the file.
 *
 * Deliberately the same POST then GET contract as `api/render.js` states, and
 * deliberately not routed through `illustrate()`: that function spends a tutor
 * call to WRITE a brief, and a step payload already carries the prompt the
 * tutor wrote when the lesson was generated. Paying for the brief twice would
 * be paying to have it reworded.
 *
 * Returns null for every unhappy ending, because from the lesson's side they
 * are all the same ending: no picture. 404 is a dev server with no functions
 * and 501 is a deployment with no key, and neither is an error a learner
 * should be shown.
 */
async function renderPicture(
  prompt: string,
  signal: AbortSignal,
): Promise<{ url: string; madeBy: string } | null> {
  let res: Response
  try {
    res = await fetch('/api/render', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal,
      body: JSON.stringify({ kind: 'illustration', prompt }),
    })
  } catch {
    return null
  }
  if (!res.ok) return null

  const { id } = await res.json().catch(() => ({})) as { id?: string }
  if (!id) return null

  const until = Date.now() + GIVE_UP_MS
  for (;;) {
    if (signal.aborted) return null
    await wait(POLL_MS)
    if (signal.aborted) return null

    const look = await fetch(`/api/render?id=${encodeURIComponent(id)}`, { signal })
      .catch(() => null)
    if (!look || !look.ok) return null
    const state = await look.json().catch(() => ({})) as
      { status?: string; url?: string; madeBy?: string }

    if (state.status === 'done' && state.url) {
      return { url: state.url, madeBy: state.madeBy || 'an open model' }
    }
    if (state.status === 'error') return null
    if (Date.now() > until) return null
  }
}

/* ── not rendering the same picture twice ──────────────────────────────────── */

/**
 * Pictures already made in this session, keyed on the prompt that made them.
 *
 * A learner moving back a step, or a re-render of the page, was starting the
 * whole POST and poll again for a picture that was on screen a moment ago.
 * That is a second render billed, a second wait, and on the free route a
 * second job in front of the one worker.
 *
 * ── Why this is keyed on the prompt and not on the topic ────────────────────
 *
 * There is a shared store for artifacts in `ahead.ts`, and it is deliberately
 * not used here. It is keyed on `kind:subject:topic:style`, which is right for
 * a thing there is one of per topic: the lesson film, the topic photograph. An
 * inline picture is not one of those. A lesson has several steps and each
 * carries its own prompt, so every picture in a topic would hash to a single
 * key and the third step's picture would be served for the first. Sharing it
 * across learners would also be wrong in a way the film is not: this prompt
 * was written by the tutor from the lesson THIS learner was given, so it is
 * personal for the same reason the diagram is.
 *
 * So: per prompt, in memory, for this session only. Small, exact, and it
 * cannot serve one step's picture to another.
 */
const madePictures = new Map<string, { url: string; madeBy: string }>()

/**
 * Renders in flight, so two steps with the same prompt make one request.
 *
 * The shared promise is deliberately NOT given any caller's abort signal. If
 * it were, the first learner to navigate away would cancel a render the second
 * one is still waiting for. Each caller checks its own signal after awaiting
 * instead, which is the difference between "I stopped caring" and "nobody
 * wants this".
 */
const rendering = new Map<string, Promise<{ url: string; madeBy: string } | null>>()

/** Enough for a long session, bounded so it can never be a leak. */
const KEEP_PICTURES = 60

/**
 * The picture for a prompt: from this session if it has been made, else made.
 *
 * A failure is not cached. A deployment with no renderer is already handled by
 * `rendererAvailable` before this is called, so a null here is a render that
 * genuinely went wrong, and those are usually transient. Remembering it would
 * turn one bad minute into a step that never shows a picture again.
 */
async function pictureFor(
  prompt: string,
  signal: AbortSignal,
): Promise<{ url: string; madeBy: string } | null> {
  const had = madePictures.get(prompt)
  if (had) return had

  let run = rendering.get(prompt)
  if (!run) {
    /* Its own controller, belonging to the render rather than to whoever asked
       for it first. See the note on `rendering`. */
    run = renderPicture(prompt, new AbortController().signal)
      .then(made => {
        if (made) {
          madePictures.set(prompt, made)
          while (madePictures.size > KEEP_PICTURES) {
            madePictures.delete(madePictures.keys().next().value as string)
          }
        }
        return made
      })
      .catch(() => null)
      .finally(() => { rendering.delete(prompt) })
    rendering.set(prompt, run)
  }

  const made = await run
  return signal.aborted ? null : made
}

/**
 * The tokens Illustration's stylesheet expects.
 *
 * `.nx-fig` and its children are styled in study.css, which declares its
 * colours and measure on `.nx`. The learner app is `.nb-school`, so the rules
 * apply but the variables they read resolve to nothing, and the picture lands
 * with no border on a transparent ground. This maps the learner app's own
 * tokens onto the names that stylesheet reads. It is a bridge, not a second
 * palette: every value on the right is an existing token, so the picture takes
 * the colours of the page it is on rather than importing another design.
 */
const FIG_TOKENS = {
  /* `--ink` is not here: the learner app already declares it, with the same
     meaning, so redefining it would be a second opinion about the same ink. */
  '--ink-soft': 'var(--ink-2)',
  '--ink-faint': 'var(--muted)',
  '--rule': 'var(--line)',
  '--paper-raised': 'var(--card)',
  '--measure': '100%',
} as CSSProperties

/**
 * A generated picture in the flow of the explanation.
 *
 * Rendered through `Illustration` rather than a second image component, so the
 * two screens agree on the things that were hard to get right there: the
 * picture is not lazily loaded, because a lazily loaded image inside a step
 * that starts at zero height never enters the viewport and so never loads; a
 * picture that fails takes itself off the page instead of leaving a broken
 * image icon mid lesson; and the honest limit, that this came from a machine
 * and is not to be read for detail, is printed under it rather than hidden.
 */
export function StepPicture({ image, stepId }: { image: StepImage; stepId: string }) {
  /**
   * Starts as waiting, and is never reset here.
   *
   * This used to clear both pieces of state at the top of the effect below,
   * which React 19 rightly refuses: a state reset inside an effect is a second
   * render of the same commit, and it is doing by hand what a key does for
   * free. The caller in LearnerApp already keys this component on the step and
   * its prompt, so a different picture is a different mount with fresh state,
   * and the only thing the reset achieved was to make `waiting` true on the
   * first render. That is just the initial value.
   */
  const [visual, setVisual] = useState<Visual | null>(null)
  const [waiting, setWaiting] = useState(true)

  useEffect(() => {
    const ctl = new AbortController()
    let live = true

    void (async () => {
      /* Asked first and cached across the session by `illustrate.ts`. Without
         it, every step with a picture on a deployment that has no renderer
         starts a render that cannot happen, and shows a learner a line saying
         a picture is coming when none ever will. */
      if (!(await rendererAvailable())) {
        if (live) setWaiting(false)
        return
      }
      const made = await pictureFor(image.prompt, ctl.signal)
      if (!live) return
      setWaiting(false)
      if (!made) return
      setVisual({
        /* `illustration`, never `figure`. The kind is what tells Illustration
           whether this may be read as fact, and a rendered picture may not. */
        kind: 'illustration',
        id: `${stepId}-image`,
        topicId: '',
        body: image.prompt,
        alt: image.alt,
        caption: image.caption ?? '',
        url: made.url,
        madeBy: made.madeBy,
      })
    })()

    return () => { live = false; ctl.abort() }
  }, [image.prompt, image.alt, image.caption, stepId])

  /* Said once, quietly, and only while something is genuinely on its way. A
     spinner would claim more than is true: the picture is optional and the
     step is already readable above this line. */
  if (waiting) {
    return (
      <p className="nb-say" style={{ marginTop: 14 }}>
        A picture for this step is being drawn. The explanation above does not
        wait for it.
      </p>
    )
  }
  if (!visual) return null

  return (
    <div style={{ ...FIG_TOKENS, margin: '18px 0' }}>
      <Illustration visual={visual} />
    </div>
  )
}

/**
 * An inline clip or a rendered teaching film.
 *
 * ── Never autoplay ─────────────────────────────────────────────────────────
 *
 * No `autoPlay`, and `preload="metadata"` so pressing nothing costs nothing
 * but the poster. The audience is children on metered data and classrooms with
 * thirty devices in them: video that starts by itself spends somebody's money
 * and talks over somebody's teacher. `playsInline` keeps a phone from throwing
 * it into a fullscreen player and losing the learner's place in the lesson.
 *
 * ── The words are on the page, not in an attribute ─────────────────────────
 *
 * The transcript is rendered as text under the clip, folded away so it does
 * not compete with the video for a sighted learner who is about to press play.
 * `lesson.ts` will not hand over a clip without it, so the teaching in a clip
 * is always available to a learner using a screen reader, on a connection that
 * will not carry it, or sitting in a classroom with no sound.
 */
export function StepClip({ video }: { video: StepVideo }) {
  const [broken, setBroken] = useState(false)

  /* A url that will not play is the ordinary case for a storage object that
     moved or a clip whose signed url expired. When that happens the words are
     all that is left of the clip, so they stop being an aside and become the
     content: shown open, not folded. */
  if (broken) {
    return (
      <div className="nb-note" style={{ marginTop: 16 }}>
        <b>The video for this step would not play.</b> Here is what it shows.
        <Prose text={video.words} />
      </div>
    )
  }

  return (
    <figure className="nb-figure" style={{ marginTop: 18 }}>
      <video
        src={video.url}
        poster={video.poster}
        controls
        playsInline
        preload="metadata"
        aria-label={video.caption || 'A short video for this step'}
        onError={() => setBroken(true)}
        style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 10 }}
      />
      <figcaption>
        {video.caption || 'A short video for this step'}
      </figcaption>
      <details style={{ marginTop: 8 }}>
        <summary style={{ cursor: 'pointer', fontSize: 12.5, color: 'var(--muted)' }}>
          What the video says, in words
        </summary>
        <Prose text={video.words} />
      </details>
    </figure>
  )
}
