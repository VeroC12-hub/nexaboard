/**
 * The working, one line at a time.
 *
 * ── Why this component exists ──────────────────────────────────────────────
 *
 * A worked example used to render as a numbered list of sentences. For an
 * English topic that is right. For a maths topic it is the wrong shape
 * entirely: "subtract 2x from both sides to get 3x minus 7 equals 8" asks a
 * learner to find the equation inside the sentence, rebuild it in their
 * head, and compare it with the one before, which is precisely the work the
 * worked example was supposed to save them.
 *
 * What a teacher does on a board is write the line, then say why. So that is
 * what this draws: the mathematics on its own line, large, in mathematical
 * notation, with the reason under it in smaller type. A learner can follow
 * the left edge of the page down without reading a word, which is how
 * anybody checks working they already half understand, and read the reasons
 * only where they lose the thread.
 *
 * ── Three shapes, one component ────────────────────────────────────────────
 *
 * A step arrives as one of three things and all three have to look right,
 * because 589 lessons are already written and none of them are going to be
 * rewritten to suit a component:
 *
 *   { math, why }   the new form. Equation and reason, set apart.
 *   "text $x=3$"    a sentence with mathematics in it. The maths is pulled
 *                   onto its own line and what is left becomes the reason,
 *                   which turns an old lesson into the new shape for free.
 *   "plain text"    a sentence with no mathematics, such as "check the
 *                   argument of every logarithm is positive". Left as a
 *                   sentence, because that is what it is.
 */

import { renderMath } from '../lib/math'
import { Line } from './Prose'
import type { WorkedStep } from '../lib/education/taught'

/** What one step turns out to be once it has been looked at. */
interface Read {
  math: string | null
  why: string
}

/**
 * The mathematics in a legacy step, if the step is mostly mathematics.
 *
 * Deliberately conservative. A sentence with one incidental `$n$` in it is
 * prose and must stay prose, so the maths is only lifted out when it is a
 * substantial part of the step: either the step is almost entirely maths, or
 * the expression carries a relation, which is what makes it a line of
 * working rather than a mention of a symbol.
 */
function lift(text: string): Read {
  const parts = [...text.matchAll(/\$\$([^$]+)\$\$|\$([^$\n]+)\$/g)]
  if (parts.length !== 1) return { math: null, why: text }

  const found = (parts[0][1] ?? parts[0][2] ?? '').trim()
  const rest = text.replace(parts[0][0], ' ').replace(/\s+/g, ' ').trim()

  const isRelation = /[=<>]|\\leq|\\geq|\\to/.test(found)
  const dominant = found.length >= rest.length
  if (!isRelation && !dominant) return { math: null, why: text }

  /* A reason left as "so" or "therefore" says nothing, and an empty line
     under an equation looks like something failed to load. */
  const why = rest.replace(/^(so|then|therefore|and|thus|hence)[,:]?\s*/i, '').trim()
  return { math: found, why: why.length > 2 ? why : '' }
}

function read(step: string | WorkedStep): Read {
  if (typeof step !== 'string') {
    return { math: step.math.trim() || null, why: (step.why ?? '').trim() }
  }
  return lift(step)
}

/** One line of mathematics, set as display maths, falling back to its source. */
function Maths({ src }: { src: string }) {
  const out = renderMath(src, true)
  if (out.error) return <code className="nx-step-raw">{src}</code>
  return <span className="nx-step-math" dangerouslySetInnerHTML={{ __html: out.html }} />
}

export default function WorkedSteps({ steps }: { steps: Array<string | WorkedStep> }) {
  const rows = steps.map(read)

  /* If nothing in this example is mathematics, it is an ordinary list of
     instructions and should look like one. Giving an English comprehension
     step the full stepped treatment would be as wrong in the other
     direction. */
  if (!rows.some(r => r.math)) {
    return (
      <ol className="nx-worked-steps">
        {rows.map((r, i) => <li key={i}><Line text={r.why} /></li>)}
      </ol>
    )
  }

  return (
    <ol className="nx-steps">
      {rows.map((r, i) => (
        <li key={i} className={`nx-step${r.math ? ' has-math' : ''}`}>
          <span className="nx-step-n" aria-hidden="true">{i + 1}</span>
          <div className="nx-step-body">
            {r.math && <Maths src={r.math} />}
            {r.why && (
              <p className={r.math ? 'nx-step-why' : 'nx-step-said'}>
                <Line text={r.why} />
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
