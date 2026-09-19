/**
 * Pictures and video for a lesson.
 *
 * The arrangement the rest of the platform already uses: Claude knows the
 * topic, the learner's year and what they have been getting wrong, so Claude
 * decides what needs to be SHOWN and writes the brief. Something else renders
 * it. Claude is the teacher, the renderer is the illustrator, and neither does
 * the other's job.
 *
 * ── Three kinds, and why the distinction is not negotiable ───────────────────
 *
 * A diffusion model cannot write. Ask Wan or FLUX for "the water cycle with
 * each stage labelled" and it returns a beautiful picture with WATFR CYLCE
 * across the top and arrows pointing at nothing. It also cannot be trusted with
 * a quantity: a triangle it draws is not the triangle in the question, and a
 * beaker it fills is not filled to 250 ml.
 *
 * That is fatal for teaching and harmless for atmosphere, so the kind of visual
 * decides which renderer may produce it:
 *
 *   figure        an accurate labelled diagram. Written as SVG by the model
 *                 itself, so every label, axis and value is exactly what was
 *                 intended. Costs nothing, renders instantly, needs no GPU.
 *                 This is the right answer for most of what a lesson needs.
 *
 *   illustration  a still image with no writing in it: a trotro at a junction,
 *                 a market scale, a cocoa pod cut open. Sets the scene and
 *                 carries no facts. Rendered by an open source image model.
 *
 *   clip          a few seconds of video showing something happen: a collision,
 *                 a wave passing, water evaporating. Same rule as illustration,
 *                 no writing and no quantities. Rendered by an open source
 *                 video model.
 *
 * So a lesson on the water cycle gets a `figure` with the stages labelled and
 * may also get a `clip` of rain falling on a hillside. The figure teaches; the
 * clip makes the page feel alive. Confusing the two is how a platform ends up
 * teaching children misspelt labels.
 */

/** What is being shown, which decides what may render it and what it may claim. */
export type VisualKind = 'figure' | 'illustration' | 'clip'

export interface VisualBrief {
  kind: VisualKind
  /** One line for the learner, shown under it. Always present. */
  caption: string
  /**
   * For `figure`: the SVG itself, written by the model.
   * For the other two: the prompt handed to the renderer.
   */
  body: string
  /** Alternative text. Required: a picture nobody can see teaches nobody. */
  alt: string
}

/** A visual that has been produced and can be put on a page. */
export interface Visual extends VisualBrief {
  id: string
  topicId: string
  /** Where the rendered file is, for illustration and clip. */
  url?: string
  /** Which model made it, shown to the learner rather than hidden. */
  madeBy?: string
}

/**
 * Whether a visual is allowed to carry facts.
 *
 * The one rule this file exists to enforce. A figure may be labelled and may
 * carry numbers because the model wrote every character of it. The other two
 * may not, because the renderer invents the pixels and cannot spell.
 */
export const carriesFacts = (kind: VisualKind): boolean => kind === 'figure'

/**
 * What a topic most likely wants shown.
 *
 * Only decides which option is offered FIRST. It used to decide which was
 * offered at all, and it was wrong in the obvious case: asked about
 * Kinematics, which is the study of motion, it offered a still photograph,
 * because the string "Kinematics" does not contain the string "motion".
 *
 * A learner knows what they want to see better than a keyword list does, so
 * both are always offered and this only sets the order. That also means being
 * wrong here now costs a button's position rather than a whole option.
 */
export function likelyKind(topicTitle: string, subjectId: string): VisualKind {
  const t = topicTitle.toLowerCase()

  /* Things that are only themselves when they move. Named for what they are
     as well as what they do, since a topic is usually titled with the noun:
     kinematics rather than motion, osmosis rather than flowing. */
  if (/motion|kinemat|dynamic|collision|momentum|wave|sound|cycle|flow|current|circulat|reaction|growth|germinat|erosion|orbit|osmosis|diffus|respirat|digest|transpir|evaporat|condens|photosynth|friction|pressure|magnet|induct/.test(t)) {
    return 'clip'
  }
  /* Things a learner needs to recognise in the world rather than understand
     the structure of. */
  if (/^(soil|rock|habitat|crop|tool|instrument|material|landform)/.test(t)
      || /culture|festival|community|trade|market/.test(t)) {
    return 'illustration'
  }
  /* Everything mathematical, and everything with parts to be named. */
  if (subjectId.includes('math') || /graph|angle|triangle|circle|vector|structure|parts of|apparatus|circuit/.test(t)) {
    return 'figure'
  }
  return 'figure'
}

/* ── reading an SVG back safely ───────────────────────────────────────────── */

/**
 * Elements and attributes that turn a picture into a way in.
 *
 * An SVG goes into the page as markup, so it is code, not an image file. The
 * model writing it is ours and the prompt says to produce a plain diagram, but
 * "the model would not do that" is not a security boundary: this SVG travels
 * through a queue, a database and a worker, and anything on that path that is
 * ever compromised would otherwise have a script tag straight into a child's
 * browser. So it is stripped, on the way in, every time.
 */
/* Deliberately NOT global. A /g regex used with .test() carries `lastIndex`
   between calls, so a refusal that returns early leaves the next check starting
   from the middle of a different string, and a <foreignObject> at the front
   sails through. That is not hypothetical: it happened here, and foreignObject
   embeds arbitrary HTML. `image` and `use` are in the list because both can
   reach outside the document. */
const FORBIDDEN_TAGS =
  /<\s*(script|foreignObject|iframe|object|embed|link|style|set|use|image|animate[^>\s]*)\b/i
const EVENT_ATTRS = /\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi
const HREFS = /\s(?:xlink:href|href)\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi
const CSS_URLS = /url\s*\(\s*['"]?\s*(?!#)[^)]*\)/gi

/**
 * Make an SVG safe to put in a page, or refuse it.
 *
 * Returns null when what came back is not an SVG at all, which is the honest
 * outcome: a lesson with no picture is fine, and a lesson with a broken one
 * where a diagram should be is not.
 */
export function cleanSvg(raw: string): string | null {
  const fenced = raw.match(/```(?:svg|xml|html)?\s*([\s\S]*?)```/i)
  const source = fenced ? fenced[1] : raw

  const start = source.search(/<svg[\s>]/i)
  const end = source.toLowerCase().lastIndexOf('</svg>')
  if (start === -1 || end <= start) return null

  let svg = source.slice(start, end + '</svg>'.length)

  /* Anything that could execute, fetch, or animate its way out. Hyperlinks go
     too: a diagram has no business navigating anywhere. */
  if (FORBIDDEN_TAGS.test(svg)) return null

  svg = svg.replace(EVENT_ATTRS, '')
  svg = svg.replace(HREFS, '')
  svg = svg.replace(CSS_URLS, 'none')

  /* Must scale to the column it sits in rather than to whatever the model
     happened to type, and must have a viewBox to scale by. */
  if (!/viewBox\s*=/i.test(svg)) return null
  svg = svg.replace(/\s(width|height)\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
  svg = svg.replace(/<svg/i, '<svg width="100%" height="auto"')

  /* A picture too big to have come from a diagram. */
  return svg.length > 120_000 ? null : svg
}

/**
 * Pull a brief out of what the model returned.
 *
 * Same tolerance as `readQuestions`: a fence around it and prose either side
 * are handled, anything that does not survive yields null rather than half a
 * picture.
 */
export function readBrief(text: string, kind: VisualKind): VisualBrief | null {
  if (kind === 'figure') {
    const svg = cleanSvg(text)
    if (!svg) return null
    /* The caption and alt are asked for as comments inside the SVG, so the
       whole reply is one object and there is nothing to parse around it. */
    const caption = text.match(/<!--\s*caption:\s*([\s\S]*?)-->/i)?.[1]?.trim()
    const alt = text.match(/<!--\s*alt:\s*([\s\S]*?)-->/i)?.[1]?.trim()
    return {
      kind,
      body: svg,
      caption: caption || '',
      alt: alt || caption || 'A diagram for this topic.',
    }
  }

  /* For the rendered kinds the model returns JSON: the prompt, a caption and
     alternative text describing what the picture will show. */
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start === -1 || end <= start) return null
  let parsed: unknown
  try {
    parsed = JSON.parse(text.slice(start, end + 1))
  } catch {
    return null
  }
  const o = parsed as Record<string, unknown>
  const prompt = typeof o.prompt === 'string' ? o.prompt.trim() : ''
  if (!prompt) return null
  return {
    kind,
    body: prompt,
    caption: typeof o.caption === 'string' ? o.caption.trim() : '',
    alt: typeof o.alt === 'string' && o.alt.trim() ? o.alt.trim() : prompt,
  }
}
