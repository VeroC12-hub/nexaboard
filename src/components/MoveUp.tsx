/**
 * The end of year examination, and the class it moves you into.
 *
 * Three states in one component, because they are three moments of one event
 * and splitting them across screens would lose the paper when the answers are
 * submitted: the notice before sitting, the paper itself, and the result.
 *
 * The paper is deliberately plain. No timer, no progress ring, no encouraging
 * mascot. A learner who is being examined should be able to tell, from the
 * page alone, that this one counts, and every ornament that makes a lesson
 * friendly works against that here.
 */

import { useMemo, useState } from 'react'
import {
  attemptsFrom, eligibility, examFor, markExam, PASS,
  type Exam, type ExamResult,
} from '../lib/education/promotion'
import type { Attempt } from '../lib/education/mastery'
import type { LearnerProfile } from '../lib/education/learner'

export default function MoveUp({
  profile, attempts, onMoved, onAttempts,
}: {
  profile: LearnerProfile
  attempts: Attempt[]
  /** Passed, and these are the stage and year they are now in. */
  onMoved: (stage: LearnerProfile['stage'], level: string) => void
  /** Every answer, so the plan learns from the paper as it does from practice. */
  onAttempts: (a: Attempt[]) => void
}) {
  const exam = useMemo<Exam>(() => examFor(profile), [profile])
  const may = useMemo(() => eligibility(profile, attempts), [profile, attempts])

  const [sitting, setSitting] = useState(false)
  const [given, setGiven] = useState<Map<string, string>>(new Map())
  const [result, setResult] = useState<ExamResult | null>(null)

  const answer = (id: string, value: string) =>
    setGiven(prev => new Map(prev).set(id, value))

  const answered = exam.sections
    .flatMap(s => s.questions)
    .filter(({ question: q }) => (given.get(q.id) ?? '').trim().length > 0).length

  const submit = () => {
    const marked = markExam(exam, given)
    setResult(marked)
    setSitting(false)
    onAttempts(attemptsFrom(exam, given))
    /* The move happens here rather than behind a second button. Passing is the
       event; making them press "accept" afterwards would invite the reading
       that it did not count unless they agreed to it. */
    if (marked.moveTo) onMoved(marked.moveTo.stage, marked.moveTo.level)
  }

  /* ── the result ─────────────────────────────────────────────────────────── */

  if (result) {
    const pc = Math.round(result.share * 100)
    return (
      <div className="sch-panel">
        <div className="sch-panel-top">
          <h2>{result.passed ? 'You have moved up' : 'Not this time'}</h2>
        </div>

        <p className="nx-lede" style={{ marginTop: 0 }}>
          {result.right} out of {result.total}, which is {pc} per cent.
          {' '}
          {result.passed
            ? result.moveTo
              ? `You are now in ${result.moveTo.level}${result.moveTo.newStage
                  ? ', and that is a new stage, so your subjects change today.'
                  : '.'}`
              : 'There is nowhere further to move in this app.'
            : `The pass mark is ${Math.round(PASS * 100)} per cent. `
              + 'Nothing is lost. Go back to the subjects that went worst, and sit it again when you are ready.'}
        </p>

        {/* Per subject, because a learner who failed needs to know where, and
            a learner who passed still has a subject that nearly stopped
            them. A single percentage tells neither of them anything. */}
        <div className="sch-marks">
          {result.bySubject
            .slice()
            .sort((a, b) => (a.right / a.total) - (b.right / b.total))
            .map(s => (
              <div className="sch-line" key={s.subjectId}>
                <span className="sch-line-body">
                  <span className="sch-line-title">{s.subjectName}</span>
                  <span className="sch-line-sub">
                    {s.right} of {s.total}
                  </span>
                </span>
                <span
                  className={`sch-pill${s.right / s.total >= PASS ? ' is-pass' : ' is-fail'}`}>
                  {Math.round((s.right / s.total) * 100)}%
                </span>
              </div>
            ))}
        </div>

        <button
          className="sch-btn is-quiet"
          style={{ marginTop: 18 }}
          onClick={() => { setResult(null); setGiven(new Map()) }}>
          Done
        </button>
      </div>
    )
  }

  /* ── the paper ──────────────────────────────────────────────────────────── */

  if (sitting) {
    return (
      <div className="sch-panel">
        <div className="sch-panel-top">
          <h2>End of {exam.level}</h2>
          <span className="sch-line-sub">{answered} of {exam.total} answered</span>
        </div>

        {exam.sections.map(s => (
          <section key={s.subjectId} className="sch-exam-part">
            <h3 className="sch-exam-subject">{s.subjectName}</h3>
            {s.questions.map(({ question: q }, i) => (
              <div className="sch-exam-q" key={q.id}>
                <p className="sch-exam-ask">
                  <span className="sch-exam-no">{i + 1}</span> {q.ask}
                </p>

                {q.kind === 'choice' && q.options ? (
                  <div className="sch-exam-options">
                    {q.options.map(o => (
                      <label className="sch-exam-option" key={o}>
                        <input
                          type="radio"
                          name={q.id}
                          value={o}
                          checked={given.get(q.id) === o}
                          onChange={() => answer(q.id, o)} />
                        <span>{o}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <input
                    className="sch-exam-input"
                    inputMode="text"
                    aria-label={q.ask}
                    value={given.get(q.id) ?? ''}
                    onChange={e => answer(q.id, e.target.value)} />
                )}
              </div>
            ))}
          </section>
        ))}

        <div className="sch-exam-foot">
          {/* No confirmation step. The warning was given before they started,
              and asking "are you sure" after every question is answered only
              teaches people to click through warnings. */}
          <button className="sch-btn" onClick={submit}>
            Submit the paper
          </button>
          <span className="sch-line-sub">
            {answered < exam.total
              ? `${exam.total - answered} unanswered will be marked wrong.`
              : 'Every question answered.'}
          </span>
        </div>
      </div>
    )
  }

  /* ── before sitting ─────────────────────────────────────────────────────── */

  return (
    <div className="sch-panel">
      <div className="sch-panel-top">
        <h2>Move up a class</h2>
      </div>

      <p className="nx-lede" style={{ marginTop: 0 }}>
        {exam.next
          ? `Sit the end of ${exam.level} examination. Pass it and you move into `
            + `${exam.next.level}${exam.next.newStage
              ? ', which is a new stage, so your subjects change.'
              : '.'}`
          : `${exam.level} is the last class this app carries.`}
      </p>

      {/* What it is, and what it is not. A learner who thinks this is BECE
          will either panic or will later believe they hold a certificate. */}
      <p className="nx-fineprint">
        This is Learning-Pal's own check that you are ready for next year's
        work. It is not BECE or WASSCE, it is not sat with an invigilator, and
        it awards nothing a school or an employer will recognise. What it
        changes is what you are taught here.
      </p>

      {exam.sections.length > 0 && (
        <div className="sch-marks">
          {exam.sections.map(s => (
            <div className="sch-line" key={s.subjectId}>
              <span className="sch-line-body">
                <span className="sch-line-title">{s.subjectName}</span>
                <span className="sch-line-sub">
                  {s.questions.length} {s.questions.length === 1 ? 'question' : 'questions'}
                </span>
              </span>
            </div>
          ))}
        </div>
      )}

      {may.ready ? (
        <>
          <p className="nx-fineprint">
            {exam.total} questions, {Math.round(PASS * 100)} per cent to pass.
            No hints, and the tutor will not help while you are sitting it.
          </p>
          <button className="sch-btn" onClick={() => setSitting(true)}>
            Start the examination
          </button>
        </>
      ) : (
        <p className="sch-none">{may.why}</p>
      )}
    </div>
  )
}
