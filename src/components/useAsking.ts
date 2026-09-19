/**
 * Answering what the learner asked, in place.
 *
 * `Ask.tsx` is how she asks. This is what happens next: the request is stored,
 * the right machinery is called for it, and the answer is written back against
 * the ask so it can appear under the paragraph she pointed at.
 *
 * ── Nothing here is new capability ──────────────────────────────────────────
 *
 * Every route this calls already existed and was already in use, and that is
 * the point. The platform could write an explanation, draw a labelled figure,
 * generate a photograph and render a narrated film before any of this; what it
 * could not do was let the **learner** ask for one. The whole feature is a
 * handle on machinery that was already there and only the app was allowed to
 * touch.
 *
 * ── Who decides a picture is a diagram or a photograph ──────────────────────
 *
 * Claude does, and it does it by refusing.
 *
 * A picture request tries `figure` first: an SVG Claude writes itself, which
 * costs nothing, arrives in seconds, contains no people, cannot be
 * photographic, and unlike diffusion is allowed to carry labels and real
 * quantities. Claude is told that declining is a valid answer, so when a
 * diagram genuinely cannot carry the thing, it declines, and only then does
 * the request fall through to diffusion. So the safe route is the default and
 * the model opts out of it rather than into it.
 *
 * That ordering is deliberate: issue 15 is BLOCKING, nothing reviews a
 * generated photograph before a child sees it, and letting a learner request
 * images on demand would otherwise multiply how many unreviewed ones she sees.
 *
 * ── Still lost ──────────────────────────────────────────────────────────────
 *
 * When she says an answer did not help, this **changes the shape** rather than
 * rewording it. Text that failed becomes a picture; a picture that failed
 * becomes plainer words. Saying the same thing again more slowly is what a bad
 * teacher does, and it is what a naive retry would have done.
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  answered, asksFor, helped as sayHelped, record,
  type Ask, type Answer, type Want,
} from '../lib/education/ask'
import { illustrate } from '../lib/education/illustrate'
import { askTutor, askVideo, TutorOff } from '../lib/education/ai'
import type { LearnerBrief, SyllabusPlace } from '../lib/education/ai'
import type { Medium } from '../lib/education/medium'
import { say } from '../lib/education/speak'
import type { Spot } from './useSpot'

/** What a given ask ended up being answered with, once it is known. */
function ready(kind: Answer['kind'], body: string): Answer {
  return { kind, status: 'ready', body, at: new Date().toISOString() }
}

function failed(body: string): Answer {
  return { kind: 'text', status: 'failed', body, at: new Date().toISOString() }
}

export function useAsking({
  learnerId, topicId, learner, place, lesson, medium, speak,
}: {
  learnerId: string
  topicId: string
  learner: LearnerBrief
  place: SyllabusPlace
  /** The lesson text, so an answer is about what she was actually reading. */
  lesson: string
  /** What she is being taught in, recorded against the ask. */
  medium: Medium
  /** Whether to read answers out, which the youngest need. */
  speak: boolean
}) {
  const [asks, setAsks] = useState<Ask[]>(() => asksFor(learnerId, topicId))

  /* Everything in flight, so leaving the lesson does not leave a request
     writing into a component that is gone. */
  const live = useRef<AbortController[]>([])
  useEffect(() => () => {
    for (const c of live.current) c.abort()
    live.current = []
  }, [])

  const put = useCallback((id: string, answer: Answer) => {
    answered(learnerId, id, answer)
    setAsks(rows => rows.map(a => (a.id === id ? { ...a, answer } : a)))
  }, [learnerId])

  /** Do the work for one ask. Never throws: a failure is an answer too. */
  const resolve = useCallback(async (ask: Ask) => {
    const control = new AbortController()
    live.current.push(control)

    try {
      if (ask.want === 'aloud') {
        /* No model, no wait, no cost. The text is already on the page. */
        const words = ask.about ?? lesson.slice(0, 600)
        say(words)
        put(ask.id, ready('spoken', words))
        return
      }

      if (ask.want === 'picture') {
        /* A diagram first. Claude declines when a diagram cannot carry it, and
           only then does this fall through to a generated photograph. */
        const drawn = await illustrate({
          kind: 'figure',
          topicId,
          learner,
          syllabus: place,
          lesson,
          askedFor: ask.words ?? (ask.about ? `Draw this part: ${ask.about}` : undefined),
        }, control.signal)

        if (drawn && drawn.kind === 'figure') {
          put(ask.id, ready('figure', drawn.body))
          return
        }

        const shot = await illustrate({
          kind: 'illustration',
          topicId,
          learner,
          syllabus: place,
          lesson,
          askedFor: ask.words ?? (ask.about ? `A picture of this: ${ask.about}` : undefined),
        }, control.signal)

        if (shot?.url) {
          put(ask.id, ready('picture', shot.url))
          return
        }
        put(ask.id, failed('There is no picture that would help with this one.'))
        return
      }

      if (ask.want === 'video') {
        /* Minutes, on the worker machine. The card already says so, and she is
           not blocked while it happens. */
        const film = await askVideo({ learner, syllabus: place, lesson }, control.signal)
        if (film?.url) put(ask.id, ready('video', film.url))
        else put(ask.id, failed('No video could be made just now.'))
        return
      }

      /* explain, and lost. Both are words; they differ in what is asked for. */
      const question = ask.words
        ? (ask.about ? `${ask.words}\n\nAbout this part: "${ask.about}"` : ask.words)
        : ask.want === 'lost'
          ? 'The learner says they do not understand this lesson at all.'
            + ' Teach it again from the beginning, a different way, much simpler,'
            + ' and do not repeat the wording that already failed.'
          : `Explain this part of the lesson: "${ask.about ?? ''}"`

      let text = ''
      await askTutor(
        { task: 'explain', question, learner, syllabus: place },
        {
          onText: chunk => {
            text += chunk
            /* Written through as it arrives, so a long answer is readable
               before it is finished. */
            put(ask.id, { kind: 'text', status: 'ready', body: text, at: new Date().toISOString() })
          },
        },
        control.signal,
      )
      if (!text.trim()) put(ask.id, failed('Nothing came back. Try asking again.'))

    } catch (e) {
      if (control.signal.aborted) return
      put(ask.id, failed(e instanceof TutorOff
        ? 'The tutor is not switched on for this device yet.'
        : 'That did not work just now. Try asking again.'))
    } finally {
      live.current = live.current.filter(c => c !== control)
    }
  }, [learner, place, lesson, topicId, put])

  /** She asked for something. Stored first, then answered. */
  const ask = useCallback((want: Want, spot: Spot | null, words: string | null) => {
    const row = record(learnerId, {
      topicId,
      about: spot?.text ?? null,
      want,
      words,
      medium,
    })
    /* Blocks are remembered on the object rather than in the store: where a
       card belongs is a fact about this page, not about the learner. */
    const placed = { ...row, block: spot?.block ?? -1 } as Ask & { block: number }
    setAsks(rows => [...rows, placed])
    void resolve(row)
    return placed
  }, [learnerId, topicId, medium, resolve])

  /**
   * She said whether it helped, and if it did not, something different follows.
   *
   * The change of shape is the whole behaviour. An explanation that failed is
   * followed by a picture, not by the same explanation in longer words.
   */
  const helped = useCallback((row: Ask & { block?: number }, did: boolean) => {
    sayHelped(learnerId, row.id, did)
    setAsks(rows => rows.map(a => (a.id === row.id ? { ...a, helped: did } : a)))
    if (did) return

    const was = row.answer?.kind
    const next: Want = was === 'text' || was === 'spoken' ? 'picture' : 'explain'
    const plea = next === 'explain'
      ? 'That did not help. Explain it again in much simpler words,'
        + ' and use a different approach from the one that just failed.'
      : null

    const fresh = record(learnerId, {
      topicId,
      about: row.about,
      want: next,
      words: plea,
      medium,
    })
    setAsks(rows => [...rows, { ...fresh, block: row.block ?? -1 } as Ask])
    void resolve(fresh)
  }, [learnerId, topicId, medium, resolve])

  /** Anything still being worked on, so a button can say so. */
  const busy = asks.some(a => !a.answer || a.answer.status === 'waiting')

  return { asks: asks as Array<Ask & { block?: number }>, ask, helped, busy, speak }
}
