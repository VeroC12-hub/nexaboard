/**
 * Reading the rich blocks a tutor puts inside a lesson.
 *
 * A lesson is prose plus, where they genuinely help, a table, a chart, a
 * picture, a facts box and one question. The table is plain markdown and is
 * parsed in `components/blocks.ts`. The other three arrive as JSON inside a
 * fence, and this is where that JSON is turned into something a component can
 * render, or refused.
 *
 * ── Why these are here and not beside their components ──────────────────────
 *
 * They were, and Fast Refresh objects: a module that exports both a component
 * and a plain function cannot be hot reloaded reliably, because React has no
 * way to know whether the non component export is stateful. The lint rule that
 * says so is right, and the split is an improvement anyway. These are pure
 * functions over untrusted text, they are the part worth testing without a
 * renderer, and none of them needs React.
 *
 * ── Why every field is checked ──────────────────────────────────────────────
 *
 * This is model output. The failure that matters is not a crash, it is a chart
 * that renders with a bar missing or a question whose right answer is out of
 * range, because both look like content rather than faults and a learner has
 * no way to tell. So anything incomplete returns null, and the caller shows
 * the block as text: visibly odd beats quietly wrong.
 */

export interface ChartPoint {
  label: string
  value: number
}

export interface ChartSpec {
  kind: 'bar' | 'line' | 'pie'
  title: string
  /** What the numbers are, for the caption and the screen reader. */
  unit?: string
  xLabel?: string
  yLabel?: string
  data: ChartPoint[]
}

export interface TrySpec {
  ask: string
  choices: string[]
  answer: number
  because: string
}

export interface ImageSpec {
  prompt: string
  alt: string
  caption?: string
  /**
   * The parts of the thing, named, in the order a reader should find them.
   *
   * Rendered as a numbered legend under the picture, in real text, which is
   * the whole point: a generated image cannot spell. Asking a picture model
   * for a labelled diagram of a plant returns confident nonsense where the
   * words should be, so the prompt forbids labels INSIDE the picture and the
   * naming happens here instead.
   *
   * A lesson may use as many pictures as the topic has parts: the whole thing,
   * then one part opened up, then a part of that part. Nothing limits how many.
   */
  labels?: string[]
}

/** A trimmed string, or empty. */
const text = (v: unknown): string => (typeof v === 'string' ? v.trim() : '')

/** Parse, or nothing. Never throws, because a fence is untrusted input. */
function object(json: string): Record<string, unknown> | null {
  let raw: unknown
  try { raw = JSON.parse(json) } catch { return null }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  return raw as Record<string, unknown>
}

export function readChart(json: string): ChartSpec | null {
  const o = object(json)
  if (!o) return null

  const kind = o.kind === 'line' ? 'line' : o.kind === 'pie' ? 'pie' : 'bar'
  const title = text(o.title)
  if (!title) return null
  if (!Array.isArray(o.data)) return null

  const data: ChartPoint[] = []
  for (const item of o.data) {
    if (!item || typeof item !== 'object') continue
    const p = item as Record<string, unknown>
    const label = text(p.label)
    const value = typeof p.value === 'number' ? p.value : Number(p.value)
    /* A non finite value is the one that would silently produce an invisible
       bar or an NaN in a path, so it is dropped here rather than drawn. */
    if (!label || !Number.isFinite(value)) continue
    data.push({ label, value })
  }

  /* One point is not a chart, and a pie of one slice is a circle. */
  if (data.length < 2) return null
  /* More than a dozen bars is unreadable on a phone, and a tutor that wanted
     to show more than that wanted a table. */
  if (data.length > 12) return null
  /* A negative slice cannot be drawn as an angle. Refused rather than drawn
     wrongly, which for a pie means drawn as its own complement. */
  if (kind === 'pie' && data.some(p => p.value < 0)) return null

  return {
    kind,
    title,
    unit: text(o.unit) || undefined,
    xLabel: text(o.xLabel) || undefined,
    yLabel: text(o.yLabel) || undefined,
    data,
  }
}

export function readTry(json: string): TrySpec | null {
  const o = object(json)
  if (!o) return null

  const ask = text(o.ask)
  const because = text(o.because)
  /* No explanation means no question. A wrong answer with nothing after it
     teaches a learner that they were wrong and not why. */
  if (!ask || !because) return null
  if (!Array.isArray(o.choices)) return null

  const choices = o.choices.map(text).filter(Boolean)
  /* Two so a guess costs something, four at most so it stays readable on a
     phone and a wrong guess is not a lottery. */
  if (choices.length < 2 || choices.length > 4) return null

  const answer = typeof o.answer === 'number' ? o.answer : Number(o.answer)
  /* Out of range is the dangerous one: it renders as a question with no right
     answer, which a learner cannot pass and cannot report. */
  if (!Number.isInteger(answer) || answer < 0 || answer >= choices.length) return null

  return { ask, choices, answer, because }
}

/**
 * An image fence, or null.
 *
 * `alt` is required and that is not a formality. A generated picture is the
 * one block a learner may not receive at all, either because they are using a
 * screen reader or because no renderer is configured and nothing ever arrives.
 * Without alt text there is nothing left where the picture was, so a block
 * that cannot describe itself does not render. `lesson.ts` makes the same call
 * about step images, for the same reason.
 */
export function readImage(json: string): ImageSpec | null {
  const o = object(json)
  if (!o) return null

  const prompt = text(o.prompt)
  const alt = text(o.alt)
  if (!prompt || !alt) return null

  const caption = text(o.caption)
  const labels = Array.isArray(o.labels)
    ? o.labels.map(text).filter(Boolean).slice(0, 12)
    : []

  return {
    prompt,
    alt,
    ...(caption ? { caption } : {}),
    ...(labels.length ? { labels } : {}),
  }
}

export interface CountSpec {
  /** One of the objects `public/ananse/count.js` knows how to draw. */
  thing: string
  n: number
  caption?: string
}

/**
 * The objects the shared artwork can draw.
 *
 * Duplicated from `THINGS` in `public/ananse/count.js`, because that file is
 * plain browser script loaded at runtime and this validation has to happen
 * before it is on the page. A name not on this list is refused here rather
 * than drawn as nothing, which is the failure that looks like a missing
 * picture and is really a typo.
 */
export const COUNTABLE = ['mango', 'orange', 'ball', 'fish', 'drum', 'star']

/**
 * A count fence, or null.
 *
 * ── Why this exists next to readImage ──────────────────────────────────────
 *
 * Because a generated picture cannot be asked for a number. The first KG
 * counting lesson requested "ten ripe mangoes on a wooden table" and got a
 * handsome photograph in which the mangoes ran off the edge of the frame and
 * could not be counted. When the number IS the lesson, the picture has to be
 * drawn from the number, which is what `CountBlock` does.
 *
 * So: `image` for something a learner must recognise, `count` for something a
 * learner must count. The prompt says which to use and when.
 */
export function readCount(json: string): CountSpec | null {
  const o = object(json)
  if (!o) return null

  const thing = text(o.thing).toLowerCase()
  if (!COUNTABLE.includes(thing)) return null

  const n = typeof o.n === 'number' ? o.n : Number(o.n)
  /* One is not a group to count and the row layout tops out at two rows of
     five, which is also as far as this ever needs to go: ten is the whole of
     the KG counting syllabus. */
  if (!Number.isInteger(n) || n < 2 || n > 10) return null

  const caption = text(o.caption)
  return { thing, n, ...(caption ? { caption } : {}) }
}

export interface MoneySpec {
  /** The whole amount in pesewas, so there is no floating point money. */
  pesewas: number
  caption?: string
}

/**
 * A money fence, or null.
 *
 * Given in pesewas rather than cedis on purpose. Money in a lesson is exact,
 * and 3.40 as a binary float is 3.4000000000000004, which is the sort of thing
 * that eventually shows up on a child's screen. Integers of the smallest unit
 * is how money is held everywhere it matters.
 *
 * `MoneyBlock` works out which notes and coins make the amount, so the
 * breakdown is right by construction rather than by the model having been
 * careful with it.
 */
export function readMoney(json: string): MoneySpec | null {
  const o = object(json)
  if (!o) return null

  const pesewas = typeof o.pesewas === 'number' ? o.pesewas : Number(o.pesewas)
  if (!Number.isInteger(pesewas) || pesewas < 1) return null
  /* Two thousand cedis is past anything a primary lesson needs and would draw
     a row of a hundred notes. */
  if (pesewas > 200000) return null

  const caption = text(o.caption)
  return { pesewas, ...(caption ? { caption } : {}) }
}
