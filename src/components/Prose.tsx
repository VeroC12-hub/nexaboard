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
import { blocksOf, classify } from './blocks'
import LessonChart from './LessonChart'
import CountBlock from './CountBlock'
import MoneyBlock from './MoneyBlock'
import { FactsBox, LessonTable, TryIt } from './LessonBits'
import { readChart, readCount, readMoney, readTry } from '../lib/education/lesson-blocks'

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
 * One block, as whatever it turns out to be.
 *
 * A lesson is no longer only paragraphs: it may carry a table, a chart, a
 * facts box or a question, placed where the tutor put it. `classify` decides
 * which, and anything unrecognised or malformed falls through to a paragraph,
 * so one bad chart costs a learner one odd looking block rather than the
 * lesson.
 *
 * `picture` is passed in rather than rendered here because a picture has to be
 * requested from the renderer, which is asynchronous and belongs to the page
 * that knows the topic. This component stays synchronous and pure.
 */
function OneBlock({ block, blockKey, className, picture, onTried }: {
  block: string
  /** Stable across re-renders, so a picture is not re-requested on every one. */
  blockKey: string
  className: string
  picture?: (body: string, key: string) => React.ReactNode
  onTried?: (correct: boolean) => void
}) {
  const it = classify(block)

  if (it.kind === 'table') return <LessonTable text={it.body} />

  if (it.kind === 'facts') return <FactsBox body={it.body} />

  if (it.kind === 'chart') {
    const spec = readChart(it.body)
    if (spec) return <LessonChart spec={spec} />
  }

  if (it.kind === 'count') {
    const spec = readCount(it.body)
    if (spec) return <CountBlock spec={spec} />
  }

  if (it.kind === 'money') {
    const spec = readMoney(it.body)
    if (spec) return <MoneyBlock spec={spec} />
  }

  if (it.kind === 'try') {
    const spec = readTry(it.body)
    if (spec) return <TryIt spec={spec} onAnswered={onTried} />
  }

  if (it.kind === 'image' && picture) {
    const made = picture(it.body, blockKey)
    if (made) return <>{made}</>
  }

  /* Everything else, including a fence this build does not understand and a
     chart whose numbers did not survive validation. Shown as text on purpose:
     visibly odd beats silently missing, because a dropped block is a hole
     nobody can report. */
  return <p className={className} data-block-kind={it.kind}><Line text={it.text} /></p>
}

/**
 * A whole answer, split into blocks.
 *
 * Blank lines separate paragraphs. A line that begins with a number and a stop,
 * or a dash, is kept as its own paragraph rather than being folded into the one
 * above, because the AI writes methods as numbered steps and running them
 * together would undo the point of numbering them.
 */
export default function Prose({
  text, className = 'nx-ai-p', after, beside, startIndex = 0, picture, onTried,
}: {
  text: string
  className?: string
  /**
   * Turn an ```image fence into a picture.
   *
   * Given the fence body and a stable key. The page supplies this because
   * rendering a picture means asking `/api/render` and waiting, which is the
   * page's business and not this component's. Left out, an image fence shows
   * as its own source, which is what the tutor panel wants: a chat reply has
   * nowhere to put a generated picture.
   */
  picture?: (body: string, key: string) => React.ReactNode
  /** Called when a learner answers an inline question. */
  onTried?: (correct: boolean) => void
  /**
   * What goes in the margin beside a block, level with it.
   *
   * For a control rather than for content: the margin is narrow by design, so
   * anything with sentences in it belongs in `after` instead. Putting a
   * tutor's answer here made it a vertical ribbon four words wide.
   */
  beside?: (index: number) => React.ReactNode
  /**
   * Anything to put after a given block, at full width.
   *
   * This is what lets an answer appear where the learner asked rather than in
   * a panel somewhere else. She asks about the third paragraph and the answer
   * arrives under the third paragraph, with room to be read and to be replied
   * to. The control that starts it lives in `beside`.
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
          {/* Numbered, so a selection can be traced back to the block it was
              made in without depending on where this sits in the page. The
              wrapper carries the number rather than the paragraph, because a
              block may now be a table or a chart and a question can be asked
              about either. */}
          {/* The block and whatever sits beside it, as one row.
 
              `after` used to render below the block, in the reading column, so
              a question box appeared between one paragraph and the next and a
              lesson with ten paragraphs had ten controls interrupting it. It
              is now a side column: out of the way of the sentence, still
              level with the paragraph it belongs to, and it collapses under
              the text on a narrow screen where there is no margin to use. */}
          <div className="nx-row">
            <div className="nx-block" data-block={startIndex + i}>
              <OneBlock
                block={b}
                blockKey={String(startIndex + i)}
                className={className}
                picture={picture}
                onTried={onTried}
              />
            </div>
            {beside ? <aside className="nx-aside">{beside(startIndex + i)}</aside> : null}
          </div>
          {/* Full width, under the whole row. A conversation with the tutor
              needs the reading measure: squeezed into the margin beside the
              paragraph it became a column of single words. */}
          {after ? after(startIndex + i) : null}
        </Fragment>
      ))}
    </>
  )
}
