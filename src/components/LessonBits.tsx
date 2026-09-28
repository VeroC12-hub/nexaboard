/**
 * The parts of a lesson that are not paragraphs.
 *
 * A table, a facts box and a question to try, each rendered where the tutor
 * put it rather than collected at the bottom of the page. That placement is
 * the whole point: a table of unit conversions three paragraphs below the
 * sentence that needs it is a table nobody reads.
 */

import { useState } from 'react'
import { Line } from './Prose'
import { parseTable } from './blocks'
import { StepPicture } from './learner/StepMedia'
import type { TrySpec } from '../lib/education/lesson-blocks'

/**
 * A table the tutor wrote, as a real table.
 *
 * Markdown pipe syntax in, `<table>` out. Not a picture of a table, for the
 * same reason charts are not pictures: the numbers have to be the numbers.
 *
 * `scope` on the header cells is what makes this readable with a screen
 * reader, which announces the column heading before each cell. Without it a
 * table is a stream of unlabelled values, and a data table is exactly the
 * content where that matters most.
 */
export function LessonTable({ text }: { text: string }) {
  const table = parseTable(text)
  /* Malformed markdown falls back to the source. Ugly and honest: the learner
     sees the pipes, which is strange, and does not silently lose a row. */
  if (!table) return <p className="nx-ai-p"><Line text={text} /></p>

  return (
    <div className="nx-table-wrap">
      <table className="nx-table">
        <thead>
          <tr>{table.head.map((h, i) => (
            <th key={i} scope="col"><Line text={h} /></th>
          ))}</tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                /* The first cell of a row labels the row, so it is a header
                   too. That is what lets a screen reader say "Ashanti,
                   rainfall, 1400" instead of just "1400". */
                c === 0
                  ? <th key={c} scope="row"><Line text={cell} /></th>
                  : <td key={c}><Line text={cell} /></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/**
 * What to remember, boxed.
 *
 * One fact per line inside the fence. Deliberately not a summary of the
 * lesson: a box that repeats the lesson teaches a learner to skip the lesson.
 * The prompt asks for the things that are worth memorising and cannot be
 * worked out, which is a much shorter list.
 */
export function FactsBox({ body }: { body: string }) {
  /* Strip a LIST MARKER, and only a list marker.

     This was the character class `^[-*\d.)\s]+`, which happily ate the start
     of any fact beginning with a number. "1 hectare = 10,000 square metres"
     became "hectare = ...", and in a real KG lesson the counting sequence
     "1, 2, 3, 4, 5, 6, 7, 8, 9, 10" rendered as ", 2, 3, 4, 5, 6, 7, 8, 9, 10".
     In a lesson about counting to ten, the one is the worst character to lose.

     A marker is a bullet, or one or two digits followed by a dot or a bracket,
     and then at least one space. Requiring that space is what makes
     "1 hectare" safe while still removing "1. ". */
  const items = body.split('\n')
    .map(l => l.replace(/^\s*(?:[-*•]|\d{1,2}[.)])\s+/, '').trim())
    .filter(Boolean)
  if (!items.length) return null

  return (
    <aside className="nx-facts" aria-label="Worth remembering">
      <h3 className="nx-facts-h">Worth remembering</h3>
      <ul className="nx-facts-list">
        {items.map((f, i) => <li key={i}><Line text={f} /></li>)}
      </ul>
    </aside>
  )
}

/**
 * A question in the middle of the lesson.
 *
 * ── Why this is here and not at the end ─────────────────────────────────────
 *
 * A lesson you scroll is a lesson you leave. Something that has to be answered
 * before the rest makes sense turns reading into doing, and it also tells the
 * learner whether they have understood the last three paragraphs at the point
 * where going back is cheap, rather than at the end where it is a decision.
 *
 * ── Why a wrong answer is not hidden ────────────────────────────────────────
 *
 * The explanation shows either way, and a wrong choice is marked rather than
 * cleared so the learner can see what they picked next to what was right.
 * Silently resetting a wrong answer teaches guessing.
 *
 * `onAnswered` is optional, and when a page passes it the attempt is recorded
 * like any other, with `via: 'prose'`. That matters more than it looks: the
 * mastery record is what lets the platform say a learner is shaky when they
 * read something and secure when they watch it, and until now nothing inside
 * a lesson body produced evidence at all.
 */
export function TryIt({ spec, onAnswered }: {
  spec: TrySpec
  onAnswered?: (correct: boolean) => void
}) {
  const [picked, setPicked] = useState<number | null>(null)
  const done = picked !== null
  const right = picked === spec.answer

  return (
    <section className="nx-try" aria-label="Try this">
      <p className="nx-try-ask"><Line text={spec.ask} /></p>
      <div className="nx-try-choices" role="group">
        {spec.choices.map((c, i) => {
          const state = !done ? ''
            : i === spec.answer ? ' nx-try-right'
              : i === picked ? ' nx-try-wrong' : ''
          return (
            <button
              key={i}
              type="button"
              className={`nx-try-choice${state}`}
              /* Left clickable after answering would invite hunting for the
                 right one, which is not the same as understanding it. */
              disabled={done}
              aria-pressed={picked === i}
              onClick={() => {
                if (done) return
                setPicked(i)
                onAnswered?.(i === spec.answer)
              }}
            >
              <Line text={c} />
            </button>
          )
        })}
      </div>
      {done && (
        <p className={`nx-try-why${right ? ' nx-try-why-ok' : ''}`} role="status">
          <b>{right ? 'Yes. ' : 'Not quite. '}</b>
          <Line text={spec.because} />
        </p>
      )}
    </section>
  )
}

/**
 * A generated picture with its parts named underneath.
 *
 * ── Why the labels are not in the picture ──────────────────────────────────
 *
 * Because a picture model cannot spell. Asked for a labelled diagram it
 * returns something that looks like a labelled diagram, with confident
 * lettering that says nothing, and the one thing a learner would take from a
 * parts diagram is the names. So the prompt forbids words inside the image and
 * the naming is done here, in text, where it is always right.
 *
 * Not overlaid on the picture either, and that is a deliberate limit rather
 * than laziness: placing a label on an image needs coordinates, the model
 * would be guessing them, and a label pointing at the wrong part of a plant is
 * worse than a list. A numbered legend under the picture is honest about what
 * is known.
 *
 * A lesson may hold as many of these as the topic has parts, each one going
 * further in: the whole plant, then the flower, then inside the flower.
 * Nothing here or in the prompt limits the number.
 */
export function LessonPicture({ image, stepId }: {
  image: { prompt: string; alt: string; caption?: string; labels?: string[] }
  stepId: string
}) {
  const labels = image.labels ?? []
  return (
    <div className="nx-figure">
      <StepPicture image={image} stepId={stepId} />
      {labels.length > 0 && (
        <ol className="nx-figure-parts">
          {labels.map((l, i) => <li key={i}><Line text={l} /></li>)}
        </ol>
      )}
    </div>
  )
}
