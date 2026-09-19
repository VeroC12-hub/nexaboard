/**
 * The paragraphs a piece of tutor text breaks into.
 *
 * Exported because the lesson shows a few at a time rather than all of them at
 * once, and it cannot page what it cannot count. The splitting lives here so
 * the page and the renderer can never disagree about where a paragraph ends.
 */
export function blocksOf(text: string): string[] {
  const blocks: string[] = []
  for (const para of text.split(/\n{2,}/)) {
    const trimmed = para.trim()
    if (!trimmed) continue
    const lines = trimmed.split(/\n/)
    /* A block that is entirely steps becomes one paragraph per step. */
    const stepped = lines.length > 1 && lines.every(l => /^\s*(\d+[.)]|[-*])\s/.test(l))
    if (stepped) blocks.push(...lines.map(l => l.trim()))
    else blocks.push(lines.join(' '))
  }
  return blocks
}
