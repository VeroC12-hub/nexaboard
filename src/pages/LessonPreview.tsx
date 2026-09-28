/**
 * One generated lesson, rendered whole, with nothing else on the page.
 *
 * ── Why this route exists ───────────────────────────────────────────────────
 *
 * A lesson can now carry a table, a chart, a picture, a facts box and a
 * question, and none of that had ever been looked at. It was verified by
 * parsing real tutor output in a script, which proves the blocks are
 * well formed and says nothing about whether they are readable.
 *
 * Looking at four of them side by side, one per stage, is the only way to
 * answer the question that matters: does a KG lesson and an SHS lesson on this
 * platform look like they were made for the same product and for different
 * people. That cannot be done through the learner app, because a Supabase
 * session lives in one browser profile's storage, so four tabs share one
 * signed in learner and cannot be four different ones.
 *
 * So this reads a finished job by its id and renders it with the real
 * components and the real stylesheet. It is a review surface, not a learner
 * surface: no session, no progress, no adaptation.
 *
 * ── What it deliberately does differently ───────────────────────────────────
 *
 * `Learn.tsx` pages a lesson, one to five blocks at a time depending on age,
 * because a child needs a page they can finish. This shows the whole thing at
 * once, because the reviewer's question is about all of it and paging would
 * hide most of it behind buttons.
 *
 * So this is not a preview of the reading experience. It is a preview of the
 * content and its formatting, and the difference is worth remembering when
 * judging length here.
 */

import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Prose from '../components/Prose'
import { LessonPicture } from '../components/LessonBits'
import { readImage } from '../lib/education/lesson-blocks'
import { blocksOf, classify } from '../components/blocks'
import AskThread, { type Turn } from '../components/AskThread'
import '../styles/nexaedu.css'
import '../styles/study.css'

const POLL_MS = 4000

export default function LessonPreview() {
  const [params] = useSearchParams()
  const job = params.get('job') ?? ''

  const stage = params.get('stage') ?? ''
  const level = params.get('level') ?? ''
  const subject = params.get('subject') ?? ''
  const topic = params.get('topic') ?? ''

  const [text, setText] = useState('')
  /* A missing job id is known before the first render, so it is the initial
     state rather than something the effect below sets. Setting state inside an
     effect for a condition that was already true is a second render of the
     same commit, which React 19 refuses and is right to. */
  /* Which blocks have a conversation open. Held here rather than inside the
     thread because the control that opens one sits in the margin and the
     conversation itself is full width: two different slots, one piece of
     state. */
  const [asking, setAsking] = useState<Set<number>>(() => new Set())
  const [state, setState] = useState<'waiting' | 'done' | 'error'>(job ? 'waiting' : 'error')
  const [why, setWhy] = useState(job ? '' : 'No job id in the address.')

  useEffect(() => {
    if (!job) return
    let live = true
    let timer: number | undefined

    const look = async () => {
      try {
        const res = await fetch(`/api/queue?id=${encodeURIComponent(job)}`)
        const body = await res.json() as { status?: string, answer?: string, error?: string }
        if (!live) return
        if (body.error) { setState('error'); setWhy(body.error); return }
        if (body.status === 'done') {
          setText(String(body.answer ?? ''))
          setState('done')
          return
        }
        if (body.status === 'error') {
          setState('error')
          setWhy(String(body.answer ?? 'The tutor could not answer.'))
          return
        }
        /* Still pending or running. The worker answers one job at a time, so
           four of these queued together finish minutes apart. */
        timer = window.setTimeout(look, POLL_MS)
      } catch {
        if (!live) return
        setState('error')
        setWhy('Could not reach the queue. Is the dev server running?')
      }
    }
    void look()
    return () => { live = false; if (timer) window.clearTimeout(timer) }
  }, [job])

  /* What the lesson actually contains, counted, so a reviewer can see at a
     glance whether the tutor used the blocks it was offered. This is the
     single most useful thing on the page: a lesson with no table and no chart
     is the failure mode to watch for. */
  const tally = state === 'done'
    ? blocksOf(text).reduce<Record<string, number>>((acc, b) => {
      const k = classify(b).kind
      acc[k] = (acc[k] ?? 0) + 1
      return acc
    }, {})
    : {}

  /* Singular and plural, because "1 pictures" on a page whose whole purpose
     is judging presentation is a poor advertisement for the presentation. */
  const order: [string, string, string][] = [
    ['p', 'paragraph', 'paragraphs'],
    ['table', 'table', 'tables'],
    ['chart', 'chart', 'charts'],
    ['image', 'picture', 'pictures'],
    ['count', 'counted group', 'counted groups'],
    ['money', 'money amount', 'money amounts'],
    ['facts', 'facts box', 'facts boxes'],
    ['try', 'question', 'questions'],
  ]

  return (
    <div className="nx" style={{ padding: '18px 20px 60px', maxWidth: '44rem', margin: '0 auto' }}>
      <header style={{ marginBottom: 20, paddingBottom: 14, borderBottom: '2px solid var(--margin)' }}>
        <p style={{
          margin: 0, fontSize: '0.74em', letterSpacing: '0.04em',
          textTransform: 'uppercase', color: 'var(--ink-soft)',
        }}>
          {[stage, level, subject].filter(Boolean).join(' · ') || 'lesson preview'}
        </p>
        <h1 style={{ margin: '4px 0 0', fontSize: '1.5em', lineHeight: 1.25 }}>
          {topic || 'Lesson'}
        </h1>
        {state === 'done' && (
          <p style={{ margin: '8px 0 0', fontSize: '0.8em', color: 'var(--ink-soft)' }}>
            {text.length.toLocaleString()} characters ·{' '}
            {order
              .filter(([k]) => tally[k])
              .map(([k, one, many]) => `${tally[k]} ${tally[k] === 1 ? one : many}`)
              .join(', ')}
          </p>
        )}
      </header>

      {state === 'waiting' && (
        <p className="nx-ai-wait">
          The tutor is writing this. One job is answered at a time, so if
          several were queued together this may wait a few minutes. The page
          checks every {POLL_MS / 1000} seconds.
        </p>
      )}

      {state === 'error' && (
        <p className="nx-ai-p" style={{ borderLeftColor: 'var(--nx-red, #a8442f)' }}>
          {why}
        </p>
      )}

      {state === 'done' && (
        <Prose
          text={text}
          className="nx-lesson-p"
          /* The per block question box, and here it really asks.

             The learner app files an ask through `useAsking`, which needs a
             learner and writes to their record. There is no learner on a
             review page, so this goes straight to the tutor queue as an
             `explain` job with the block's own text as the context, and shows
             the answer underneath. Same route, same prompt, no record kept. */
          /* Full width, under the block: a conversation needs the reading
             measure and somewhere to type the next question. */
          /* The control in the margin, out of the way of the sentence. */
          beside={i => (asking.has(i) ? null : (
            <button
              type="button"
              className="nx-blockask-open"
              onClick={() => setAsking(now => new Set(now).add(i))}
            >
              Ask about this
            </button>
          ))}
          /* The conversation at full width, under the block it is about. */
          after={i => (asking.has(i) ? (
            <PreviewThread
              block={blocksOf(text)[i] ?? ''}
              topic={topic}
              stage={stage}
              level={level}
              subject={subject}
            />
          ) : null)}
          picture={(body, key) => {
            const img = readImage(body)
            return img ? <LessonPicture image={img} stepId={`pv${key}`} /> : null
          }}
          /* Nothing is recorded from a preview: there is no learner here, and
             writing an attempt against nobody would put noise into the
             mastery record that the adaptive model then reads as evidence. */
          onTried={() => { /* review surface, deliberately not recorded */ }}
        />
      )}
    </div>
  )
}

/**
 * A conversation about one block, answered by the real tutor.
 *
 * Not `useAsking`: that files the ask against a learner and writes it to their
 * record, and a review page has no learner. This posts to the tutor queue with
 * the block as context and the conversation so far, which is the same route and
 * the same prompt the learner app uses, and keeps nothing.
 */
function PreviewThread({ block, topic, stage, level, subject }: {
  block: string
  topic: string
  stage: string
  level: string
  subject: string
}) {
  const ask = async (question: string, before: Turn[]): Promise<string> => {
    /* The block, then the exchange so far, then the new question. Without the
       exchange a follow up like "I still do not understand the second part"
       is unanswerable. */
    const history = before
      .filter(t => t.answer)
      .map(t => `They asked: ${t.asked}
You answered: ${t.answer}`)
      .join('\n\n')

    const full = [
      `This is part of a lesson on ${topic}:`,
      '"""',
      block,
      '"""',
      history ? `Earlier in this conversation:

${history}` : '',
      history
        ? `They are still not satisfied and now ask: ${question}

Explain it a different way. Do not repeat the wording you already used.`
        : `Their question: ${question}`,
    ].filter(Boolean).join('\n\n')

    const res = await fetch('/api/queue', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        task: 'explain',
        question: full,
        learner: { stage, level, subjectName: subject },
      }),
    })
    const { id, error } = await res.json() as { id?: string, error?: string }
    if (!id) throw new Error(error || 'The tutor could not take that.')

    const until = Date.now() + 4 * 60 * 1000
    for (;;) {
      await new Promise(r => setTimeout(r, 2500))
      const look = await fetch(`/api/queue?id=${encodeURIComponent(id)}`)
      const got = await look.json() as { status?: string, answer?: string }
      if (got.status === 'done') return String(got.answer ?? '')
      if (got.status === 'error') throw new Error(String(got.answer ?? 'Failed.'))
      if (Date.now() > until) throw new Error('The tutor did not answer in time.')
    }
  }

  return <AskThread onAsk={ask} />
}
