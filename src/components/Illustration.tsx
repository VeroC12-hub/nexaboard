/**
 * A picture in a lesson.
 *
 * Three things can arrive here and they are shown differently, because they
 * mean different things to a learner:
 *
 *   figure        an SVG, drawn by the tutor. Labels are correct and may be
 *                 read as fact. Sits on the page like a textbook diagram.
 *   illustration  a photograph from an open model. Sets the scene.
 *   clip          a few seconds of video from an open model. Loops, silent,
 *                 and never autoplays with sound in a classroom.
 *
 * Who made it is printed under it rather than hidden. A learner who can see
 * that a photograph came from a machine is better placed to judge it, and the
 * two rendered kinds carry a plain warning that they are not to be read for
 * detail, because they cannot spell and cannot be trusted with a quantity.
 */

import { carriesFacts, type Visual } from '../lib/education/visuals'

/**
 * Whether a url is something a <video> element can actually play.
 *
 * Decided by the file rather than by the kind of visual, because a clip does
 * not always arrive as video: the test renderer returns an animated image, and
 * a future renderer may return a gif or a webp. Putting an image in a <video>
 * shows an empty black box, which looks exactly like a broken lesson.
 */
function playsAsVideo(url: string): boolean {
  if (url.startsWith('data:')) return /^data:video\//i.test(url)
  return /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(url)
}

export default function Illustration({ visual }: { visual: Visual }) {
  const factual = carriesFacts(visual.kind)

  return (
    <figure className={`nx-fig${factual ? ' is-drawn' : ''}`}>
      {visual.kind === 'figure' ? (
        /* Drawn by the tutor, then stripped of anything executable by
           `cleanSvg` before it ever reaches this component. */
        <div
          className="nx-fig-svg"
          role="img"
          aria-label={visual.alt}
          dangerouslySetInnerHTML={{ __html: visual.body }}
        />
      ) : visual.kind === 'clip' && visual.url && playsAsVideo(visual.url) ? (
        <video
          className="nx-fig-media"
          src={visual.url}
          poster={undefined}
          controls
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={visual.alt}
        />
      ) : visual.url ? (
        /* Not lazy. A lesson has one or two pictures and they are the point of
           the page, not a feed to scroll. Lazily loaded, the element starts at
           zero height, never enters the viewport by the browser's reckoning,
           and so never loads: a two pixel sliver where a photograph should be.
           Decoding stays async so a slow image cannot block the lesson text. */
        <img
          className="nx-fig-media"
          src={visual.url}
          alt={visual.alt}
          decoding="async"
          /* A picture that fails takes itself off the page. A broken image icon
             in the middle of a lesson is worse than no picture at all. */
          onError={e => { e.currentTarget.closest('figure')?.remove() }}
        />
      ) : null}

      <figcaption className="nx-fig-cap">
        {visual.caption && <span className="nx-fig-words">{visual.caption}</span>}
        <span className="nx-fig-by">
          {visual.madeBy}
          {/* The honest limit, said where it matters rather than in a footer.
              These two kinds cannot write and cannot be trusted with an
              amount, so a learner must not read them for detail. */}
          {!factual && '. A generated picture: look at it, do not read it for detail.'}
        </span>
      </figcaption>
    </figure>
  )
}
