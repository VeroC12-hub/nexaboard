/**
 * The end of year examination, subject by subject, and the class it moves you
 * into.
 *
 * ── Why it is one paper per subject ─────────────────────────────────────────
 *
 * The first version put four questions from every subject into one paper. That
 * is not an examination, it is a quiz that decides whether you repeat a year.
 * A real end of year examination is one paper per subject, twenty objective
 * questions each, sat over several days, and promotion is decided on the
 * aggregate. So that is the shape: the learner sits Mathematics when they are
 * ready for Mathematics, the mark is kept, and the class moves when every
 * paper is in and the aggregate reaches the pass mark.
 *
 * ── Why there is no readiness gate ──────────────────────────────────────────
 *
 * There was one: a quarter of the year's topics had to be worked first. It was
 * meant kindly and it was wrong. A learner who already knows the work, or who
 * joined late, or who is simply curious what the paper looks like, was told to
 * go away and study something they may already know. Every class may sit, at
 * any time, as often as they like.
 *
 * The paper itself is deliberately plain. No timer, no progress ring, no
 * mascot. A learner being examined should be able to tell from the page alone
 * that this one counts.
 */

import { useMemo, useState } from 'react'
import {
  attemptsFromPaper, clearPapers, markPaper, paperFor, PASS,
  recordPaper, standingOfExam,
  type ExamSection, type PaperMark,
} from '../lib/education/promotion'
import { optionsOf } from '../lib/education/course'
import type { Attempt } from '../lib/education/mastery'
import type { LearnerProfile } from '../lib/education/learner'

const pc = (share: number) => Math.round(share * 100)

export default function MoveUp({
  profile, onMoved, onAttempts,
}: {
  profile: LearnerProfile
  /** Passed the whole examination: this is their new stage and year. */
  onMoved: (stage: LearnerProfile['stage'], level: string) => void
  /** Every answer, so the plan learns from a paper as it does from practice. */
  onAttempts: (a: Attempt[]) => void
}) {
  /* Bumped after every paper, so the standing is read from storage again
     rather than from a value captured when the screen first rendered. */
  const [turn, setTurn] = useState(0)
  const standing = useMemo(
    () => standingOfExam(profile),
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [profile, turn])

  const [sitting, setSitting] = useState<ExamSection | null>(null)
  const [given, setGiven] = useState<Map<string, string>>(new Map())
  const [justMarked, setJustMarked] = useState<PaperMark | null>(null)

  const answer = (id: string, value: string) =>
    setGiven(prev => new Map(prev).set(id, value))

  const start = (subjectId: string) => {
    const paper = paperFor(profile, subjectId)
    if (!paper) return
    setGiven(new Map())
    setJustMarked(null)
    setSitting(paper)
  }

  const submit = () => {
    if (!sitting) return
    const mark = markPaper(sitting, given)
    recordPaper(profile.id, profile.level, mark)
    onAttempts(attemptsFromPaper(sitting, given))
    setJustMarked(mark)
    setSitting(null)
    setTurn(t => t + 1)
  }

  /** Every paper in, and the aggregate reached: move, and start a clean set. */
  const moveUp = () => {
    if (!standing.passed || !standing.next) return
    clearPapers(profile.id, profile.level)
    onMoved(standing.next.stage, standing.next.level)
  }

  /* ── sitting one ────────────────────────────────────────────────────────── */

  if (sitting) {
    const answered = sitting.questions
      .filter(({ question: q }) => (given.get(q.id) ?? '').trim().length > 0).length

    return (
      <div className="sch-panel">
        <div className="sch-panel-top">
          <h2>{sitting.subjectName}</h2>
          <span className="sch-line-sub">
            {answered} of {sitting.questions.length} answered
          </span>
        </div>

        {sitting.questions.map(({ question: q }, i) => (
          <div className="sch-exam-q" key={q.id}>
            <p className="sch-exam-ask">
              <span className="sch-exam-no">{i + 1}</span> {q.ask}
            </p>

            {q.kind === 'choice' && q.options ? (
              <div className="sch-exam-options">
                {optionsOf(q).map(o => (
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

        <div className="sch-exam-foot">
          <button className="sch-btn" onClick={submit}>Submit this paper</button>
          <button className="sch-btn is-quiet" onClick={() => setSitting(null)}>
            Leave it
          </button>
          <span className="sch-line-sub">
            {answered < sitting.questions.length
              ? `${sitting.questions.length - answered} unanswered will be marked wrong.`
              : 'Every question answered.'}
          </span>
        </div>
      </div>
    )
  }

  /* ── the examination as a whole ─────────────────────────────────────────── */

  const justSat = justMarked
    && standing.papers.find(p => p.subjectId === justMarked.subjectId)

  return (
    <div className="sch-panel">
      <div className="sch-panel-top">
        <h2>End of {standing.level}</h2>
        {standing.sat > 0 && (
          <span className="sch-line-sub">
            {standing.sat} of {standing.papers.length} papers sat
          </span>
        )}
      </div>

      {justSat && justMarked && (
        <p className="nx-lede" style={{ marginTop: 0 }}>
          {justSat.subjectName}: {justMarked.right} out of {justMarked.total}.
          {' '}
          {standing.complete
            ? ''
            : `${standing.papers.length - standing.sat} `
              + `${standing.papers.length - standing.sat === 1 ? 'paper' : 'papers'} left.`}
        </p>
      )}

      {!standing.next ? (
        <p className="sch-none">
          {standing.level} is the last class this app carries, so there is
          nowhere to move up to.
        </p>
      ) : !standing.papers.length ? (
        <p className="sch-none">There are no questions written for this class yet.</p>
      ) : (
        <>
          <p className="nx-lede" style={{ marginTop: justSat ? 0 : undefined }}>
            One paper for each subject, {PER_LENGTH(standing.papers[0].length)} each.
            Sit them in any order, on any day. When every paper is in and your
            aggregate is {pc(PASS)} per cent or more, you move into{' '}
            {standing.next.level}
            {standing.next.newStage
              ? ', which is a new stage, so your subjects change.'
              : '.'}
          </p>

          {/* What it is, and what it is not. A learner who thinks this is BECE
              will either panic or will later believe they hold a certificate. */}
          <p className="nx-fineprint">
            This is Learning-Pal's own examination. It is not BECE or WASSCE, it
            is not sat with an invigilator, and it awards nothing a school or an
            employer will recognise. What it changes is what you are taught here.
          </p>

          <div className="sch-marks">
            {standing.papers.map(p => (
              <div className="sch-line" key={p.subjectId}>
                <span className="sch-line-body">
                  <span className="sch-line-title">{p.subjectName}</span>
                  <span className="sch-line-sub">
                    {p.mark
                      ? `${p.mark.right} of ${p.mark.total}`
                      : `${p.length} questions, not yet sat`}
                  </span>
                </span>
                {p.mark && (
                  <span
                    className={`sch-pill${p.mark.right / p.mark.total >= PASS
                      ? ' is-pass' : ' is-fail'}`}>
                    {pc(p.mark.right / p.mark.total)}%
                  </span>
                )}
                <button className="sch-btn is-quiet" onClick={() => start(p.subjectId)}>
                  {p.mark ? 'Sit again' : 'Sit the paper'}
                </button>
              </div>
            ))}
          </div>

          {standing.sat > 0 && (
            <p className="nx-lede">
              Aggregate so far: {standing.right} out of {standing.total},
              which is {pc(standing.share)} per cent.
            </p>
          )}

          {standing.complete && (
            standing.passed ? (
              <button className="sch-btn" onClick={moveUp}>
                Move into {standing.next.level}
              </button>
            ) : (
              <p className="sch-none">
                Every paper is in, and the aggregate is {pc(standing.share)} per
                cent against a pass mark of {pc(PASS)}. Nothing is lost. Go back
                to the subjects that went worst and sit those papers again.
              </p>
            )
          )}
        </>
      )}
    </div>
  )
}

/** "20 questions", or the honest number where a subject has fewer written. */
function PER_LENGTH(n: number): string {
  return `${n} ${n === 1 ? 'question' : 'questions'}`
}
