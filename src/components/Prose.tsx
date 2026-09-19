/**
 * Rendering what the AI wrote.
 *
 * Everything the tutor produces is prose with maths in it: inline in single
 * dollars, display in double, as `api/prompt.js` instructs. This turns that
 * into readable text with the equations properly set.
 *
 * Shared by the tutor panel and the lesson screen, because a lesson and an
 * explanation are the same kind of text and rendering them differently would
 * make the platform feel like two products.
 *
 * Anything KaTeX cannot read is shown as its own source rather than as an
 * error. A slightly wrong equation is still readable; a red box in the middle
 * of a lesson is not.
 */

import { Fragment } from 'react'
import { renderMath } from '../lib/math'
import { blocksOf } from './blocks'

/** One run of text, with its maths set. */
function WithMaths({ text }: { text: string }) {
  const parts = text.split(/(\$\$[^$]*\$\$|\$[^$\n]*\$)/g).filter(Boolean)
  return (
    <>
      {parts.map((p, i) => {
        const display = p.startsWith('$$') && p.endsWith('$$') && p.length > 4
        const inline = !display && p.startsWith('$') && p.endsWith('$') && p.length > 2
        if (!display && !inline) return <span key={i}>{p}</span>
        const src = display ? p.slice(2, -2) : p.slice(1, -1)
        const out = renderMath(src, display)
        if (out.error) return <span key={i}>{src}</span>
        return (
          <span key={i} className={display ? 'nx-ai-display' : undefined}
            dangerouslySetInnerHTML={{ __html: out.html }} />
        )
      })}
    </>
  )
}

/** Bold runs, which is the only inline structure the AI is asked to produce. */
export function Line({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') && p.length > 4
          ? <b key={i}><WithMaths text={p.slice(2, -2)} /></b>
          : <WithMaths key={i} text={p} />)}
    </>
  )
}

/**
 * A whole answer, split into paragraphs.
 *
 * Blank lines separate paragraphs. A line that begins with a number and a stop,
 * or a dash, is kept as its own paragraph rather than being folded into the one
 * above, because the AI writes methods as numbered steps and running them
 * together would undo the point of numbering them.
 */
export default function Prose({ text, className = 'nx-ai-p', after, startIndex = 0 }: {
  text: string
  className?: string
  /**
   * Anything to put after a given paragraph.
   *
   * This is what lets an answer appear where the learner asked rather than in
   * a panel somewhere else. She selects a word in the third paragraph and asks
   * for a picture, and the picture arrives under the third paragraph.
   */
  after?: (index: number) => React.ReactNode
  /**
   * What the first paragraph on this page is numbered.
   *
   * An ask is filed against the paragraph it was made in. Numbering from zero
   * on every page would file a question asked on page three against page one.
   */
  startIndex?: number
}) {
  const blocks = blocksOf(text)

  return (
    <>
      {blocks.map((b, i) => (
        <Fragment key={i}>
          {/* Numbered, so a selection can be traced back to the paragraph it
              was made in without depending on where this sits in the page. */}
          <p className={className} data-block={startIndex + i}><Line text={b} /></p>
          {after ? after(startIndex + i) : null}
        </Fragment>
      ))}
    </>
  )
}
