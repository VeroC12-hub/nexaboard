/**
 * The helper: one button, every screen, anything you want to ask.
 *
 * ── Why it exists ───────────────────────────────────────────────────────────
 *
 * Everything else here answers a question the app chose: `explain` fires on a
 * wrong answer, `hint` on a stuck one, a lesson on a topic tap. None of them
 * can be reached by somebody who simply does not understand what they are
 * looking at, which is the commonest state a learner is in and the one that
 * made them close the app. A learner who understands nothing and taps nothing
 * leaves no trace in any record.
 *
 * So: a button that is always there, a panel over whatever you were doing, and
 * their own words.
 *
 * ── Who it is talking to ────────────────────────────────────────────────────
 *
 * The learner brief, the same one lessons are written from, carries the stage
 * and the year. A creche child gets three spoken sentences; a sixth former
 * gets the working. That decision is in the prompt rather than here, because
 * the model is the thing that can act on it, and because two places deciding
 * how old somebody is would eventually disagree.
 *
 * Questions about the app itself are answered for an adult, since "where is
 * the sign out" is a parent holding the child's phone. That is also in the
 * prompt: this component cannot tell whose hands it is in, and guessing from
 * the wording is exactly the kind of cleverness that gets it wrong.
 *
 * ── Why the panel floats rather than replacing the screen ───────────────────
 *
 * The question is almost always about what is on screen. Navigating away from
 * the lesson to ask about the lesson loses the thing being asked about, and a
 * child cannot find their way back to it.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { askHelper, TutorOff, type Said, type TutorStage } from '../lib/education/ai'
import { useHelperContext } from '../lib/education/helper-context'
import { canSpeak, say, stop as stopSpeaking } from '../lib/education/speak'
import '../styles/helper.css'

/* The Web Speech API is not in this project's DOM types, and the vendor
   prefixed constructor is not in anybody's. Narrow to what is used. */
interface Heard {
  results: ArrayLike<ArrayLike<{ transcript: string }>>
}
interface Listener {
  continuous: boolean
  interimResults: boolean
  lang: string
  onresult: ((e: Heard) => void) | null
  onerror: (() => void) | null
  onend: (() => void) | null
  start: () => void
}
type SRCtor = new () => Listener

const getSR = (): SRCtor | undefined => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any
  return w.SpeechRecognition ?? w.webkitSpeechRecognition
}

/** One line of the conversation, plus whether it is still arriving. */
interface Turn extends Said {
  /** Set while the answer is streaming, so the bubble can show it is working. */
  coming?: boolean
}

/**
 * Whether this learner is read to rather than reading.
 *
 * The same test the lesson screen uses, so a child who has every lesson read
 * aloud is not handed a silent wall of text by the helper.
 */
function readTo(stage?: string, level?: string): boolean {
  if (!stage) return false
  return stage === 'creche' || /basic ?[12]\b/i.test(level ?? '')
}

export default function Helper() {
  const ctx = useHelperContext()
  const [open, setOpen] = useState(false)
  const [turns, setTurns] = useState<Turn[]>([])
  const [asking, setAsking] = useState('')
  const [stage, setStage] = useState<TutorStage | null>(null)
  const [off, setOff] = useState<string | null>(null)
  const [hearing, setHearing] = useState(false)

  const profile = ctx.learner?.profile
  const aloud = readTo(profile?.stage, profile?.level)
  /* Spoken answers are on by default only for learners who are read to.
     Everybody can turn them on, which is what was asked for, but a sixth
     former should not have their phone start talking in a library. */
  /* Their choice, remembered against the kind of learner it was made for, so
     that opening a different child's screen goes back to that child's default
     without an effect writing state during a render. */
  const [chose, setChose] = useState<{ when: boolean, on: boolean } | null>(null)
  const speaks = chose && chose.when === aloud ? chose.on : aloud
  const setSpeaks = (on: boolean) => setChose({ when: aloud, on })

  const live = useRef<AbortController | null>(null)
  const log = useRef<HTMLDivElement | null>(null)

  /* Stop talking and stop listening when the panel closes or the page goes. */
  useEffect(() => () => { live.current?.abort(); stopSpeaking() }, [])
  useEffect(() => { if (!open) { stopSpeaking() } }, [open])

  /* Follow the answer as it arrives, unless they have scrolled up to read. */
  useEffect(() => {
    const el = log.current
    if (!el) return
    const near = el.scrollHeight - el.scrollTop - el.clientHeight < 120
    if (near) el.scrollTop = el.scrollHeight
  }, [turns])

  const greeting = useMemo(() => {
    const first = profile?.name?.trim().split(' ')[0]
    if (aloud) return first ? `Hello ${first}. What shall I help with?` : 'What shall I help with?'
    return ctx.lesson
      ? 'Ask me anything about this lesson, this subject, or the app.'
      : 'Ask me anything about your lessons or about the app.'
  }, [aloud, profile?.name, ctx.lesson])

  const send = useCallback((question: string) => {
    const q = question.trim()
    if (!q) return

    live.current?.abort()
    const ctrl = new AbortController()
    live.current = ctrl

    /* The history sent is what was on screen BEFORE this question, which is
       what "what has been said already" means. */
    const said: Said[] = turns.map(t => ({ from: t.from, text: t.text }))

    setAsking('')
    setOff(null)
    setStage('sent')
    setTurns(prev => [...prev, { from: 'them', text: q }, { from: 'tutor', text: '', coming: true }])

    let answer = ''
    askHelper(
      {
        learner: ctx.learner as NonNullable<typeof ctx.learner>,
        question: q,
        where: ctx.where,
        lesson: ctx.lesson,
        syllabus: ctx.syllabus,
        said,
      },
      {
        onStage: setStage,
        onText: chunk => {
          answer += chunk
          setTurns(prev => prev.map((t, i) => (
            i === prev.length - 1 && t.from === 'tutor' ? { ...t, text: answer } : t
          )))
        },
      },
      ctrl.signal,
    )
      .then(() => {
        if (ctrl.signal.aborted) return
        setStage(null)
        setTurns(prev => prev.map((t, i) => (
          i === prev.length - 1 ? { ...t, coming: false } : t
        )))
        if (speaks && answer.trim()) say(answer, { asked: true })
      })
      .catch((e: unknown) => {
        if (ctrl.signal.aborted) return
        setStage(null)
        const why = e instanceof Error ? e.message : ''
        setTurns(prev => prev.slice(0, -1))
        setOff(e instanceof TutorOff
          ? 'The helper is not switched on here yet.'
          : (why || 'That did not get through. Try once more.'))
      })
  }, [ctx, turns, speaks])

  /**
   * Asking out loud.
   *
   * A single utterance rather than continuous dictation: this is one question,
   * and a microphone left open in a classroom picks up the whole room. It fills
   * the box rather than sending, so a child can see their words were heard and
   * an adult can correct them before they go.
   */
  const listen = useCallback(() => {
    const SR = getSR()
    if (!SR) { setOff('This browser cannot listen. Type the question instead.'); return }
    stopSpeaking()
    const rec = new SR()
    rec.continuous = false
    rec.interimResults = true
    rec.lang = 'en-GH'
    rec.onresult = (e: Heard) => {
      let heard = ''
      for (let i = 0; i < e.results.length; i++) heard += e.results[i][0].transcript
      setAsking(heard)
    }
    rec.onerror = () => { setHearing(false) }
    rec.onend = () => { setHearing(false) }
    setHearing(true)
    rec.start()
  }, [])

  /* Nothing to answer with yet: no learner is open, so there is no year, no
     record and no subject. The button would promise something it cannot do. */
  if (!ctx.learner) return null

  if (!open) {
    return (
      <button
        className="hp-button"
        aria-label="Ask for help"
        title="Ask for help"
        onClick={() => setOpen(true)}>
        <span aria-hidden>?</span>
      </button>
    )
  }

  return (
    <div className="hp" role="dialog" aria-modal="false" aria-label="Ask for help">
      <header className="hp-top">
        <span className="hp-name">Ask me</span>
        {canSpeak() && (
          <button
            className={`hp-chip${speaks ? ' is-on' : ''}`}
            aria-pressed={speaks}
            onClick={() => { setSpeaks(!speaks); if (speaks) stopSpeaking() }}>
            {speaks ? 'Reading out' : 'Read out'}
          </button>
        )}
        <button className="hp-x" aria-label="Close" onClick={() => setOpen(false)}>✕</button>
      </header>

      <div className="hp-log" ref={log}>
        {turns.length === 0 && <p className="hp-hello">{greeting}</p>}

        {turns.map((t, i) => (
          <div key={i} className={`hp-turn is-${t.from}`}>
            <p className="hp-said">
              {t.text}
              {t.coming && !t.text && (
                <span className="hp-wait">
                  {stage === 'queued' ? 'Thinking about it' : 'One moment'}
                </span>
              )}
            </p>
            {t.from === 'tutor' && !t.coming && t.text && canSpeak() && (
              <button
                className="hp-aloud"
                aria-label="Read this out"
                onClick={() => say(t.text, { asked: true })}>
                Read this out
              </button>
            )}
          </div>
        ))}

        {off && <p className="hp-off">{off}</p>}
      </div>

      <form
        className="hp-ask"
        onSubmit={e => { e.preventDefault(); send(asking) }}>
        <input
          className="hp-field"
          value={asking}
          onChange={e => setAsking(e.target.value)}
          placeholder={aloud ? 'Say or type your question' : 'Ask anything'}
          aria-label="Your question"
          autoComplete="off"
        />
        {getSR() && (
          <button
            type="button"
            className={`hp-mic${hearing ? ' is-on' : ''}`}
            aria-label={hearing ? 'Listening' : 'Ask out loud'}
            title={hearing ? 'Listening' : 'Ask out loud'}
            onClick={listen}>
            <span aria-hidden>{hearing ? '●' : '🎤'}</span>
          </button>
        )}
        <button className="hp-send" type="submit" disabled={!asking.trim() || stage !== null}>
          Ask
        </button>
      </form>
    </div>
  )
}
