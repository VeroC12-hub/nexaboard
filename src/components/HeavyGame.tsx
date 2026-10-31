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
  ENGINE_PATH, composeSpec, fingerprint, fromGame, remember, spokenLines,
  type GameSpec,
} from '../lib/education/heavy'
import { recordPlay } from '../lib/education/taste'
import {
  canSpeak, say, setVoiceOn, stop, voiceOn, whenVoicesReady,
} from '../lib/education/speak'
import { warm } from '../lib/education/voice-bank'
import type { Attempt } from '../lib/education/mastery'
import type { Stage } from '../lib/education/learner'

/** How long to wait for the frame before offering a way out. */
const PATIENCE_MS = 7000

export default function HeavyGame({
  topicId, topicTitle, stage, year, accuracy, learnerId,
  onAttempt, onDone, onRead, onLeave, onSimple,
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
  /** Out of the game, back to wherever they came in from. */
  onLeave: () => void
  /** The plain tapping games, if the frame will not run. */
  onSimple?: () => void
}) {
  /**
   * Which game. Composed here rather than fetched, so it is instant, free and
   * works offline.
   *
   * Another one is asked for by finishing this one: `onDone` is what remounts
   * this component with a fresh spec, and the composer is random and avoids
   * what this learner has played recently. There is no counter here as well,
   * because two counters for one thing is how a game ends up rebuilding itself
   * underneath a child who is still playing it.
   */
  const spec = useMemo<GameSpec | null>(
    () => composeSpec({ stage, year, accuracy, topicTitle, learnerId }),
    [stage, year, accuracy, topicTitle, learnerId])

  /**
   * One switch, two capabilities.
   *
   * This used to be `canSpeak() && voiceOn()`, which quietly tied the game's
   * own sound to whether the device could do text to speech. Those are
   * unrelated: a phone with no speech synthesis should still click when you
   * tap and chime when you are right. On such a device the whole game fell
   * silent, and nothing on screen explained why.
   *
   * So the switch is the preference alone, and speaking is the preference plus
   * the device being able to. A parent still presses one button.
   */
  const [sound, setSound] = useState(() => voiceOn())
  const voice = sound && canSpeak()

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
      key={fingerprint(spec)}
      spec={spec}
      topicId={topicId}
      learnerId={learnerId}
      voice={voice}
      sound={sound}
      onVoice={next => { setSound(next); setVoiceOn(next); if (!next) stop() }}
      onAttempt={onAttempt}
      onDone={onDone}
      onRead={onRead}
      onLeave={onLeave}
      onSimple={onSimple}
    />
  )
}

/** One game, from loading it to finishing it. Remounted for the next one. */
function Session({
  spec, topicId, learnerId, voice, sound, onVoice,
  onAttempt, onDone, onRead, onLeave, onSimple,
}: {
  spec: GameSpec
  topicId: string
  /** Used only to write down how this game went. Never sent to the frame. */
  learnerId: string
  /** Whether to speak: the preference, and a device that can. */
  voice: boolean
  /** Whether to make any noise at all: the preference alone. */
  sound: boolean
  onVoice: (on: boolean) => void
  onAttempt: (a: Attempt) => void
  onDone: () => void
  onRead: () => void
  onLeave: () => void
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

  /* Read through a ref for the same reason as the voice: the frame's `ready`
     arrives from a listener set up once, and must see the current preference
     rather than the one that existed when it was attached. */
  const making = useRef(sound)
  useEffect(() => { making.current = sound }, [sound])

  /* Pressing mute during a game has to reach the frame, which is making its
     own sound and cannot see the app's state. */
  useEffect(() => {
    frame.current?.contentWindow?.postMessage({ nx: 1, type: 'sound', on: sound }, '*')
  }, [sound])

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
          /* Pull the recordings this game will need into the cache now, while
             the frame is still laying out its first round. A spoken question
             that arrives after the child has started guessing is worse than
             one that was never spoken. */
          warm(spokenLines(spec))
          /* The spec, and nothing else. No learner, no record, no session. */
          frame.current.contentWindow?.postMessage({ nx: 1, type: 'setup', spec }, '*')
          /* And whether it may make a noise. The frame has its own effects and
             music now, and the app owns the one switch that turns all of it
             off along with the speech. */
          frame.current.contentWindow?.postMessage(
            { nx: 1, type: 'sound', on: making.current }, '*')
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

  /**
   * The game, and nothing else.
   *
   * This screen used to carry a row of progress dots, a button for a different
   * game, a sound control that could grow into a sentence, a link labelled
   * "For the grown up", and a footer naming the game, the topic and the score.
   * All of it was readable only by someone who can read, which is not who this
   * screen is for, and all of it sat between a four year old and the thing
   * they came to do.
   *
   * So the frame takes the whole screen and two controls float on top of it:
   * out, and sound. Out is the one a child needs and could not find. Sound
   * stays because a game making no noise looks broken to the adult sitting
   * next to them, which was a real report and not a guess.
   *
   * Everything that was removed still exists elsewhere: the score is in the
   * mastery record either way, since `attempt` writes every round, and the
   * lesson is a tap away once they are out.
   */
  return (
    <div className="gm gm-heavy is-bare">
      <div className="gm-frame-wrap">
        <button
          className="gm-exit"
          aria-label="Leave the game"
          title="Leave the game"
          onClick={() => { stop(); onLeave() }}>
          <span aria-hidden>✕</span>
        </button>

        {/* Muted is the state worth shouting about: a silent game is
            indistinguishable from a broken one, and the control that fixes it
            has to look like the answer rather than like decoration. On, it
            stays a bare symbol, because there is nothing to fix. */}
        <button
          className={`gm-sound${sound ? ' is-on' : ' is-muted'}`}
          aria-label={sound ? 'Turn the sound off' : 'Turn the sound on'}
          aria-pressed={sound}
          title={sound ? 'Sound on' : 'Sound is off. Press to turn it on.'}
          onClick={() => onVoice(!sound)}>
          {sound ? <span aria-hidden>🔔</span> : <><span aria-hidden>🔕</span> Sound is off</>}
        </button>

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
    </div>
  )
}
