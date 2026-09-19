/**
 * The tutor, on the page, at the moment a learner has just got something wrong.
 *
 * The written explanation that ships with a question is the same for everyone.
 * This one is not: it is given the learner's year, how they said they want to
 * be taught, and the note they wrote in their own words about this subject, so
 * it can say where THEIR answer went wrong rather than restating the method.
 *
 * It is asked for, never forced. A learner who understood the mistake the
 * moment they saw the right answer should not have to scroll past a paragraph
 * of AI to reach the next question, so nothing appears until they press.
 *
 * When there is no key on the deployment, this says so in one line and the
 * course carries on. The tutor adds to the lesson; it is never the lesson.
 */

import { useEffect, useRef, useState } from 'react'
import Prose from './Prose'
import {
  askTutor, TutorOff, type SyllabusPlace, type TutorStage,
} from '../lib/education/ai'
import type { LearnerProfile } from '../lib/education/learner'

/** What this panel can be asked for. The teaching tasks live on other screens. */
type PanelTask = 'explain' | 'method'

export default function Tutor({
  profile, subjectId, subjectName, question, answer, given, stuckOn,
  learned, pace, syllabus,
}: {
  profile: LearnerProfile
  subjectId: string
  subjectName: string
  question: string
  answer: string
  /** What the learner put. Blank is meaningful, so it is passed through. */
  given: string
  stuckOn?: string[]
  /** What has been noticed about how they work, from `adapt.ts`. */
  learned?: string[]
  /** The computed line about how they are going. */
  pace?: string | null
  /** Where this sits in the syllabus, when the question came from one. */
  syllabus?: SyllabusPlace
}) {
  const [task, setTask] = useState<PanelTask | null>(null)
  const [text, setText] = useState('')
  const [state, setState] = useState<'idle' | 'live' | 'done' | 'off' | 'failed'>('idle')
  const [stage, setStage] = useState<TutorStage>('sent')
  const [why, setWhy] = useState('')
  const abort = useRef<AbortController | null>(null)

  /* A learner who presses Next mid-answer has moved on, and a half finished
     explanation streaming into an unmounted page is just a bill. */
  useEffect(() => () => abort.current?.abort(), [])

  const ask = (t: PanelTask) => {
    abort.current?.abort()
    const ctrl = new AbortController()
    abort.current = ctrl
    setTask(t)
    setText('')
    setStage('sent')
    setState('live')

    askTutor(
      {
        task: t,
        question,
        answer,
        given,
        syllabus,
        learner: { subjectId, subjectName, profile, stuckOn, learned, pace },
      },
      {
        onText: chunk => setText(prev => prev + chunk),
        onStage: setStage,
      },
      ctrl.signal,
    )
      .then(() => { if (!ctrl.signal.aborted) setState('done') })
      .catch((e: unknown) => {
        if (ctrl.signal.aborted) return
        const said = e instanceof Error ? e.message : ''
        if (e instanceof TutorOff) {
          /* Why it is off is a fact about the deployment, naming environment
             variables and files. That belongs to whoever set it up, not to a
             child who got a question wrong, so the detail goes to the console
             and the learner is told the one thing that concerns them. */
          if (said) console.info('[tutor] ' + said)
          setWhy('The tutor is not switched on here. The explanation above still stands.')
          setState('off')
          return
        }
        setWhy(said || 'The tutor could not be reached.')
        setState('failed')
      })
  }

  return (
    <div className="nx-ai">
      {state === 'idle' ? (
        <div className="nx-ai-ask">
          <button className="nx-link" onClick={() => ask('explain')}>
            Ask the tutor where I went wrong
          </button>
          <button className="nx-link" onClick={() => ask('method')}>
            Show me the method
          </button>
        </div>
      ) : (
        <>
          <p className="nx-ai-who">
            {task === 'method' ? 'The method' : 'Your tutor'}
            {state === 'live' && (
              <span className="nx-ai-live">
                {stage === 'writing' ? 'writing' : 'asking'}
              </span>
            )}
          </p>

          <Prose text={text} />

          {state === 'live' && !text.trim() && (
            /* Said out loud, because the free route waits on a machine rather
               than on thinking, and a learner deserves to know which. */
            <p className="nx-ai-p nx-ai-wait">
              {stage === 'queued'
                ? 'Your question is with the tutor. This takes a few seconds.'
                : 'Reading your answer.'}
            </p>
          )}

          {(state === 'off' || state === 'failed') && (
            <p className="nx-ai-p nx-ai-wait">
              {why}
              {state === 'failed' && (
                <>
                  {' '}
                  <button className="nx-link" onClick={() => ask(task ?? 'explain')}>
                    Try again
                  </button>
                </>
              )}
            </p>
          )}

          {state === 'done' && task !== 'method' && (
            <div className="nx-ai-ask">
              <button className="nx-link" onClick={() => ask('method')}>
                Show me the method for any question like this
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
