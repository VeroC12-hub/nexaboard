/**
 * The blocks a piece of tutor text breaks into.
 *
 * Exported because the lesson shows a few at a time rather than all of them at
 * once, and it cannot page what it cannot count. The splitting lives here so
 * the page and the renderer can never disagree about where a block ends.
 *
 * ── Why blocks are still strings ────────────────────────────────────────────
 *
 * A lesson may now contain tables, charts, pictures, a facts box and a
 * question, not only paragraphs. The obvious move was to parse all that into
 * typed objects here and hand the renderer a discriminated union.
 *
 * It stays strings, because `Learn.tsx` pages a lesson by taking a slice of
 * these and re-joining it with blank lines before rendering. That is a
 * reasonable thing for it to do and it only works if a block survives the
 * round trip through text. So the rule is: this function decides WHERE a block
 * begins and ends, `classify` below says WHAT it is, and neither of them
 * rewrites the content.
 *
 * ── Two things that used to go wrong ────────────────────────────────────────
 *
 * The previous version did `lines.join(' ')` on every block, which is right
 * for a paragraph the model happened to hard wrap and fatal for anything where
 * the line breaks carry meaning. A markdown table came out as one long line of
 * pipes. It also split on blank lines first, which cuts a fenced block in half
 * if there is a blank line inside it, and there usually is inside pretty
 * printed JSON. Hence the order below: fenced blocks are lifted out whole
 * before anything is split on blank lines.
 *
 * The second was worse and much less visible. See `flatten`.
 */

/** What a block turns out to be. `text` is always the block, verbatim. */
export type BlockKind = 'p' | 'table' | 'chart' | 'image' | 'count' | 'money' | 'facts' | 'try'

export interface Block {
  kind: BlockKind
  text: string
  /** For a fenced block, what is inside the fence. */
  body: string
}

/** A fence whose language is one this product understands. */
const FENCE = /^```(chart|image|count|money|facts|try)[ \t]*\n([\s\S]*?)\n?```[ \t]*$/

/** The same fences, found in the whole text before it is split up. */
const FENCE_SCAN = /```(chart|image|count|money|facts|try)[ \t]*\n[\s\S]*?\n?```/g

/**
 * Carriage returns, removed before anything else looks at the text.
 *
 * This is not tidiness, it is the fix for a real and nearly invisible bug.
 *
 * Paragraphs are split on a blank line, and a blank line is written here as
 * two consecutive newlines. In CRLF text the two newlines have a carriage
 * return between them, so that pattern matches nothing and the text is never
 * split at all.
 *
 * The tutor runs the Claude Code CLI, and on Windows its output is CRLF. So
 * every lesson written on this machine arrived as one unbroken block. It did
 * not look like a crash, which is why it survived: the lesson rendered as a
 * single three thousand character paragraph, and `Learn.tsx` then counted one
 * paragraph and put the whole lesson on one page, which reads as a layout
 * decision rather than a fault.
 *
 * Done here because this is the one function that decides where a block
 * begins, so it is the one place that has to agree with itself about what a
 * line is. Every regex below can then assume a single newline.
 */
function flatten(text: string): string {
  return (text ?? '').split('\r').join('')
}

/**
 * Whether these lines are a markdown pipe table.
 *
 * Needs a header, a separator of dashes, and at least one row, which is what
 * distinguishes a real table from a paragraph that merely mentions a vertical
 * bar. Being strict matters: a false positive turns a sentence into a one cell
 * table, which looks broken in a way a learner cannot explain.
 */
function isTable(lines: string[]): boolean {
  if (lines.length < 3) return false
  if (!lines[0].includes('|')) return false
  const sep = lines[1].trim()
  if (!/^\|?[\s:-]*\|[\s:|-]*$/.test(sep)) return false
  if (!sep.includes('-')) return false
  return lines.slice(2).some(l => l.includes('|'))
}

export function blocksOf(text: string): string[] {
  const out: string[] = []
  const source = flatten(text)

  /* Fenced blocks first, so a blank line inside one cannot split it. The text
     between fences is processed normally. */
  let at = 0
  for (const m of source.matchAll(FENCE_SCAN)) {
    const start = m.index ?? 0
    if (start > at) out.push(...plain(source.slice(at, start)))
    out.push(m[0].trim())
    at = start + m[0].length
  }
  if (at < source.length) out.push(...plain(source.slice(at)))
  return teachFirst(out)
}

/**
 * A lesson never opens with a question.
 *
 * ── Why this is enforced here and not asked for ────────────────────────────
 *
 * Because asking did not work. The prompt says, in as many words, that the
 * lesson may not open with a question and that a learner asked about something
 * they have not met has been set up to fail. It was verified as present in the
 * prompt the model received, and the model opened with a question anyway. By
 * then the prompt was ten thousand characters and a rule in the middle of it
 * is a suggestion.
 *
 * So it is a guarantee rather than a request. This is not a style preference
 * dressed up as a rule: a JHS 1 learner met "which two flower parts were
 * involved, anther or stigma" as the first thing on the page, about parts the
 * lesson had not introduced yet, which is a lesson that has failed at its first
 * line.
 *
 * The question is moved rather than dropped. It is a good question and it
 * belongs after the thing it asks about, which is the first block that teaches
 * something.
 */
function teachFirst(blocks: string[]): string[] {
  const isTry = (b: string) => b.trimStart().startsWith('```try')
  if (!blocks.length || !isTry(blocks[0])) return blocks

  const teaches = blocks.findIndex(b => !isTry(b))
  /* Nothing but questions. Reordering cannot rescue that, and leaving it alone
     at least shows what the tutor produced rather than hiding it. */
  if (teaches === -1) return blocks

  const opening = blocks.slice(0, teaches)
  return [...blocks.slice(teaches, teaches + 1), ...opening, ...blocks.slice(teaches + 1)]
}

/** Everything that is not a fenced block: paragraphs, steps and tables. */
function plain(text: string): string[] {
  const blocks: string[] = []
  for (const para of text.split(/\n{2,}/)) {
    const trimmed = para.trim()
    if (!trimmed) continue
    const lines = trimmed.split('\n').map(l => l.trim())

    /* A table keeps its line breaks, because they are its rows. */
    if (isTable(lines)) {
      blocks.push(lines.join('\n'))
      continue
    }

    /* A block that is entirely steps becomes one paragraph per step. */
    const stepped = lines.length > 1 && lines.every(l => /^(\d+[.)]|[-*])\s/.test(l))
    if (stepped) { blocks.push(...lines); continue }

    /* A run of short lines is a script, and its line breaks are its pacing.

       This is what a lesson for a pre-reader looks like: "Touch the first
       mango. Say one." on one line, "Touch the next one. Say two." on the
       next. Joined with a space they became a single grey paragraph, which is
       the opposite of what the line breaks were for, and it also collapsed
       four separate beats into one block so only one of them could carry a
       question box.

       Three or more lines, none longer than a phone's line, and none of them
       ending mid sentence. That last test is what keeps an ordinary hard
       wrapped paragraph out: prose wraps in the middle of a clause, a script
       ends each line with a full stop. */
    const script = lines.length >= 3
      && lines.every(l => l.length <= 64 && /[.!?:]$/.test(l))
    if (script) { blocks.push(...lines); continue }

    blocks.push(lines.join(' '))
  }
  return blocks
}

/**
 * What a block is, so the renderer can choose a component for it.
 *
 * Deliberately total: anything unrecognised is a paragraph. A lesson with one
 * malformed chart in it should show the rest of the lesson, and the worst case
 * is that a learner sees some JSON. That is better than a blank page, and it
 * is also a visible signal that something is wrong, which a silently dropped
 * block is not.
 */
export function classify(block: string): Block {
  /* Flattened here too, because this is called on a block a caller may have
     carried through its own joins and slices. */
  const text = flatten(block).trim()

  const fenced = FENCE.exec(text)
  if (fenced) return { kind: fenced[1] as BlockKind, text, body: fenced[2] }

  const lines = text.split('\n').map(l => l.trim())
  if (isTable(lines)) return { kind: 'table', text, body: text }

  return { kind: 'p', text, body: text }
}

/**
 * A pipe table, as a header and rows.
 *
 * Returns null rather than throwing on anything malformed, so a table the
 * model wrote badly degrades to a paragraph instead of taking the lesson down
 * with it.
 */
export function parseTable(text: string): { head: string[], rows: string[][] } | null {
  const lines = flatten(text).split('\n').map(l => l.trim()).filter(Boolean)
  if (lines.length < 3) return null

  const cells = (line: string): string[] => {
    let s = line.trim()
    /* Outer pipes are optional in markdown and both forms are common. */
    if (s.startsWith('|')) s = s.slice(1)
    if (s.endsWith('|')) s = s.slice(0, -1)
    return s.split('|').map(c => c.trim())
  }

  const head = cells(lines[0])
  if (!head.length) return null

  const rows = lines.slice(2)
    .filter(l => l.includes('|'))
    .map(cells)
    /* Ragged rows are padded rather than rejected: a missing trailing cell is
       the commonest thing a model gets wrong about a table, and showing the
       row anyway costs the learner nothing. */
    .map(r => r.length >= head.length
      ? r.slice(0, head.length)
      : [...r, ...Array(head.length - r.length).fill('')])

  if (!rows.length) return null
  return { head, rows }
}
