/**
 * The host for a generated game.
 *
 * The game itself runs in a sandboxed frame and talks through four messages.
 * This side owns everything the game is deliberately not trusted with: the
 * voice, the progress, the mastery record, and the decision about what happens
 * when it fails to load.
 *
 * ── What this will not do ───────────────────────────────────────────────────
 *
 * It will not pass the learner in. The frame is given numbers, words and
 * objects, and never a name, an id, a record or a session. That is not caution
 * about today's games, which are ours: it is what makes it safe to drop in a
 * model-written game tomorrow and somebody else's engine export after that.
 *
 * `sandbox="allow-scripts"` without `allow-same-origin` is the load bearing
 * line. It gives the frame an opaque origin, so our storage, our cookies and
 * our Supabase session are unreachable from inside it. It also means
 * `event.origin` arrives as the string "null", which is why the check below is
 * on the source window rather than on the origin.
 *
 * ── Why two components ─────────────────────────────────────────────────────
 *
 * A new game is a new page with nothing carried over: no score, no half filled
 * basket, no timer from the last one. That is a remount, so the part that
 * holds a game's state is a separate component with the game as its key, and
 * React resets it rather than this file trying to.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import '../styles/games.css'
import {
  ENGINE_PATH, composeSpec, fingerprint, fromGame, remember,
  type GameSpec,
} from '../lib/education/heavy'
import { recordPlay } from '../lib/education/taste'
import {
  canSpeak, say, setVoiceOn, stop, voiceOn, whenVoicesReady,
} from '../lib/education/speak'
import type { Attempt } from '../lib/education/mastery'
import type { Stage } from '../lib/education/learner'

/** How long to wait for the frame before offering a way out. */
const PATIENCE_MS = 7000

export default function HeavyGame({
  topicId, topicTitle, stage, year, accuracy, learnerId,
  onAttempt, onDone, onRead, onSimple,
}: {
  topicId: string
  topicTitle: string
  stage: Stage
  year: string
  /** How they have been doing, so the numbers are set to suit. */
  accuracy: number | null
  /** Used only to remember which games they have played. Never sent to the frame. */
  learnerId: string
  onAttempt: (a: Attempt) => void
  onDone: () => void
  /** Back to the written lesson, which at this age is for the adult. */
  onRead: () => void
  /** The plain tapping games, if the frame will not run. */
  onSimple?: () => void
}) {
  /**
   * Which game. Composed here rather than fetched, so it is instant, free and
   * works offline.
   *
   * `nth` is how another one is asked for. The composer is random and avoids
   * what this learner has played recently, so asking again with the same
   * arguments is a different game, which is the entire point of generating
   * rather than shipping a fixed set.
   */
  const [nth, setNth] = useState(0)
  const spec = useMemo<GameSpec | null>(
    () => composeSpec({ stage, year, accuracy, topicTitle, learnerId }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stage, year, accuracy, topicTitle, learnerId, nth])

  const [voice, setVoice] = useState(() => canSpeak() && voiceOn())

  /* Once per game, so the next one is a shape they have not just had. */
  useEffect(() => {
    if (spec) remember(learnerId, spec)
  }, [spec, learnerId])

  /* Nothing should still be talking after the game closes. */
  useEffect(() => () => stop(), [])

  /* Chrome populates its voice list asynchronously, so the first line spoken
     on a page load would otherwise come out in the wrong voice or not at all. */
  useEffect(() => {
    if (voice) whenVoicesReady(() => {})
  }, [voice])

  /* No game fits this topic. The caller decides whether that is a dead end. */
  if (!spec) return null

  return (
    <Session
      key={`${fingerprint(spec)}-${nth}`}
      spec={spec}
      topicId={topicId}
      topicTitle={topicTitle}
      learnerId={learnerId}
      voice={voice}
      onVoice={next => { setVoice(next); setVoiceOn(next); if (!next) stop() }}
      onAnother={() => { stop(); setNth(n => n + 1) }}
      onAttempt={onAttempt}
      onDone={onDone}
      onRead={onRead}
      onSimple={onSimple}
    />
  )
}

/** One game, from loading it to finishing it. Remounted for the next one. */
function Session({
  spec, topicId, topicTitle, learnerId, voice, onVoice, onAnother,
  onAttempt, onDone, onRead, onSimple,
}: {
  spec: GameSpec
  topicId: string
  topicTitle: string
  /** Used only to write down how this game went. Never sent to the frame. */
  learnerId: string
  voice: boolean
  onVoice: (on: boolean) => void
  onAnother: () => void
  onAttempt: (a: Attempt) => void
  onDone: () => void
  onRead: () => void
  onSimple?: () => void
}) {
  const frame = useRef<HTMLIFrameElement | null>(null)
  const [marks, setMarks] = useState<boolean[]>([])
  const [running, setRunning] = useState(false)
  const [late, setLate] = useState(false)

  /**
   * How it went, written down when the game ends however it ends.
   *
   * Recorded on unmount rather than on `done`, because the interesting case is
   * the one that never reaches `done`. A child who is enjoying a game plays
   * its rounds; one who is not wanders off, and walking away is the clearest
   * opinion a four year old can give. Only recording completions would record
   * only the games that went well, and taste built from that would be a
   * measure of nothing.
   *
   * A ref because the cleanup runs once, at the end, and must see the final
   * marks rather than the ones that existed when the effect was set up.
   */
  const soFar = useRef<boolean[]>([])
  useEffect(() => { soFar.current = marks }, [marks])

  useEffect(() => () => {
    const played = soFar.current
    /* Nothing attempted is not a play. A frame that never loaded, or a child
       who opened it and left at once, says nothing about what they like. */
    if (!played.length) return
    recordPlay(learnerId, {
      goal: spec.goal,
      subject: spec.subject,
      topicId,
      offered: spec.rounds,
      finished: played.length,
      right: played.filter(Boolean).length,
      at: new Date().toISOString(),
    })
    /* Runs once per game. `spec` is fixed for the life of this component,
       which is remounted by key for the next one. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * A frame that never reports in.
   *
   * Sandboxing, an extension, or a file that did not deploy. Whatever the
   * cause, a child is looking at a blank rectangle, so after a few seconds
   * they are offered something that does work rather than left there.
   */
  useEffect(() => {
    const t = setTimeout(() => setLate(true), PATIENCE_MS)
    return () => clearTimeout(t)
  }, [])

  const attempt = useCallback((correct: boolean) => {
    setMarks(m => [...m, correct])
    /* The same record a written question writes, so the same mastery model and
       the same adaptation follow a four year old dragging mangoes as follow a
       sixth former solving equations. */
    onAttempt({
      objectiveId: topicId,
      isCorrect: correct,
      hintUsed: false,
      at: new Date().toISOString(),
    })
  }, [onAttempt, topicId])

  /* The voice preference is read through a ref so that changing it does not
     tear down and rebuild the listener mid game. */
  const speaking = useRef(voice)
  useEffect(() => { speaking.current = voice }, [voice])

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      /* The only check here that means anything. The frame has an opaque
         origin, so `e.origin` is the string "null" and proves nothing; the
         source window proves it came from our frame rather than another one
         on the page. */
      if (!frame.current || e.source !== frame.current.contentWindow) return

      const msg = fromGame(e.data)
      if (!msg) return

      switch (msg.type) {
        case 'ready':
          setRunning(true)
          setLate(false)
          /* The spec, and nothing else. No learner, no record, no session. */
          frame.current.contentWindow?.postMessage({ nx: 1, type: 'setup', spec }, '*')
          break
        case 'say':
          /* The app owns the voice, so there is one voice and one mute switch
             across the games, the videos and the lessons. */
          if (speaking.current) say(msg.text)
          break
        case 'attempt':
          attempt(msg.correct)
          break
        case 'done':
          onDone()
          break
      }
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [spec, attempt, onDone])

  const score = marks.filter(Boolean).length

  return (
    <div className="gm gm-heavy">
      <div className="gm-top">
        <span className="gm-dots" aria-label={`round ${marks.length + 1} of ${spec.rounds}`}>
          {Array.from({ length: spec.rounds }, (_, i) => (
            <i key={i} className={
              i < marks.length ? (marks[i] ? 'is-right' : 'is-wrong')
                : i === marks.length ? 'is-now' : ''
            } />
          ))}
        </span>
        <span className="gm-controls">
          {/* Another game, on demand. A child who is bored of this one should
              not have to finish it to see a different one, and there is always
              a different one. */}
          <button
            className="gm-icon"
            aria-label="A different game"
            title="A different game"
            onClick={onAnother}>
            🎲
          </button>
          {canSpeak() && (
            <button
              className={`gm-icon${voice ? ' is-on' : ''}`}
              aria-label={voice ? 'Turn the voice off' : 'Turn the voice on'}
              aria-pressed={voice}
              title={voice ? 'Voice on' : 'Voice off'}
              onClick={() => onVoice(!voice)}>
              {voice ? '🔔' : '🔕'}
            </button>
          )}
          <button className="gm-quiet" onClick={onRead}>For the grown up</button>
        </span>
      </div>

      <div className="gm-frame-wrap">
        <iframe
          ref={frame}
          className="gm-frame"
          src={ENGINE_PATH}
          title={spec.title}
          /* No allow-same-origin. See the note at the top of this file. */
          sandbox="allow-scripts"
          /* Nothing in here should ever want any of these. */
          allow=""
          referrerPolicy="no-referrer"
        />

        {late && !running && (
          <div className="gm-frame-fail">
            <p>This game will not open on this device.</p>
            {onSimple && (
              <button className="gm-go" onClick={onSimple}>Play the simple game</button>
            )}
            <button className="gm-quiet" onClick={onRead}>Read the lesson instead</button>
          </div>
        )}
      </div>

      <p className="gm-foot">
        {spec.title} · {topicTitle}
        {marks.length ? ` · ${score} of ${marks.length} right` : ''}
      </p>
    </div>
  )
}
