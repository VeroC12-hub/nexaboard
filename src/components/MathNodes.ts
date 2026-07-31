import { Node as TiptapNode, Extension, InputRule, mergeAttributes } from '@tiptap/core'
import { NodeSelection, Plugin, PluginKey, TextSelection } from '@tiptap/pm/state'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { MathInlineView, MathBlockView } from './MathNodeViews'

// ── Equation nodes ────────────────────────────────────────────────────────────
// `mathInline` sits inside a sentence, `mathBlock` gets its own centred line.
// Both are atoms holding a single `latex` attribute, so they travel through the
// existing Tiptap JSON broadcast to students with no extra plumbing.

export const MathInline = TiptapNode.create({
  name: 'mathInline',
  group: 'inline',
  inline: true,
  atom: true,
  selectable: true,

  addAttributes() {
    return { latex: { default: '' } }
  },

  parseHTML() { return [{ tag: 'span[data-math-inline]' }] },

  renderHTML({ HTMLAttributes, node }) {
    return ['span', mergeAttributes(HTMLAttributes, { 'data-math-inline': '' }), `$${node.attrs.latex}$`]
  },

  renderText({ node }) { return `$${node.attrs.latex}$` },

  addNodeView() { return ReactNodeViewRenderer(MathInlineView) },

  addInputRules() {
    const type = this.type
    return [
      // Typing `$x^2$` turns into a rendered equation. Tiptap's `nodeInputRule`
      // keeps the delimiters when the pattern has a capture group, so replace the
      // whole matched range ourselves.
      new InputRule({
        // The lookbehind keeps `$$…$$` from matching halfway through.
        find: /(?<!\$)\$([^$\n]+)\$$/,
        handler: ({ state, range, match }) => {
          state.tr.replaceWith(range.from, range.to, type.create({ latex: match[1].trim() }))
        },
      }),
    ]
  },
})

export const MathBlock = TiptapNode.create({
  name: 'mathBlock',
  group: 'block',
  atom: true,
  selectable: true,

  addAttributes() {
    return { latex: { default: '' } }
  },

  parseHTML() { return [{ tag: 'div[data-math-block]' }] },

  renderHTML({ HTMLAttributes, node }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-math-block': '' }), `$$${node.attrs.latex}$$`]
  },

  renderText({ node }) { return `$$${node.attrs.latex}$$` },

  addNodeView() { return ReactNodeViewRenderer(MathBlockView) },

  addInputRules() {
    const type = this.type
    return [
      // `$$x^2$$` on a line of its own becomes a centred equation, replacing the
      // whole paragraph rather than nesting a block node inside it.
      new InputRule({
        find: /\$\$([^$\n]+)\$\$$/,
        handler: ({ state, range, match }) => {
          const { tr } = state
          const node = type.create({ latex: match[1].trim() })
          // `replaceRangeWith` lifts the block out of the paragraph when the
          // equation was typed mid-sentence, so it always lands on its own line.
          tr.replaceRangeWith(range.from, range.to, node)
          // Leave a text cursor after the equation — a selected atom would be wiped
          // out by the next keystroke.
          const after = Math.min(tr.selection.to + 1, tr.doc.content.size)
          tr.setSelection(TextSelection.near(tr.doc.resolve(after), 1))
        },
      }),
    ]
  },
})

/**
 * A centred equation at the very end of the document would leave nowhere to put
 * the cursor, so keep an empty paragraph after it.
 */
export const MathTrailingParagraph = Extension.create({
  name: 'mathTrailingParagraph',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('mathTrailingParagraph'),
        appendTransaction: (_transactions, _oldState, newState) => {
          const { doc, tr, schema, selection } = newState
          if (doc.lastChild?.type.name !== 'mathBlock') return null
          const end = doc.content.size
          tr.insert(end, schema.nodes.paragraph.create())
          // A selected equation would be replaced by the next keystroke — move the
          // cursor into the fresh paragraph instead.
          if (selection instanceof NodeSelection && selection.node.type.name === 'mathBlock') {
            tr.setSelection(TextSelection.create(tr.doc, end + 1))
          }
          return tr
        },
      }),
    ]
  },
})
