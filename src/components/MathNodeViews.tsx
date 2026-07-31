import { useMemo } from 'react'
import { NodeViewWrapper } from '@tiptap/react'
import { renderMath, type MathEditDetail } from '../lib/math'

// Node views for the `mathInline` / `mathBlock` Tiptap nodes. Clicking an equation
// fires a `math-edit` window event that RichTextEditor picks up to open the editor.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MathView({ node, updateAttributes, deleteNode, editor, getPos, isBlock }: any) {
  const latex = (node.attrs.latex as string) ?? ''
  const { html, error } = useMemo(() => renderMath(latex, isBlock), [latex, isBlock])

  const openEditor = () => {
    if (!editor?.isEditable) return
    const detail: MathEditDetail = {
      latex,
      display: isBlock,
      apply: (newLatex, newDisplay) => {
        if (newDisplay === isBlock) { updateAttributes({ latex: newLatex }); return }
        // Switching between inline and own-line means swapping the node type.
        const pos = typeof getPos === 'function' ? getPos() : null
        if (pos == null) { updateAttributes({ latex: newLatex }); return }
        editor.chain().focus().insertContentAt(
          { from: pos, to: pos + node.nodeSize },
          { type: newDisplay ? 'mathBlock' : 'mathInline', attrs: { latex: newLatex } },
        ).run()
      },
      remove: () => deleteNode(),
    }
    window.dispatchEvent(new CustomEvent('math-edit', { detail }))
  }

  const editable = !!editor?.isEditable
  const title = editable ? 'Click to edit this equation' : latex

  const body = error
    ? <span className="math-error" title={error}>{latex || 'empty equation'}</span>
    : <span dangerouslySetInnerHTML={{ __html: html }} />

  if (isBlock) {
    return (
      <NodeViewWrapper as="div" className="math-block-wrapper">
        <div contentEditable={false} onClick={openEditor} title={title}
          className={`math-node math-block ${editable ? 'math-editable' : ''}`}>
          {body}
        </div>
      </NodeViewWrapper>
    )
  }

  return (
    <NodeViewWrapper as="span" className="math-inline-wrapper">
      <span contentEditable={false} onClick={openEditor} title={title}
        className={`math-node math-inline ${editable ? 'math-editable' : ''}`}>
        {body}
      </span>
    </NodeViewWrapper>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MathInlineView = (props: any) => <MathView {...props} isBlock={false} />
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MathBlockView = (props: any) => <MathView {...props} isBlock />
