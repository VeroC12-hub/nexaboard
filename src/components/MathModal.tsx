import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { X, Sigma, Trash2, CornerDownLeft } from 'lucide-react'
import { renderMath, normaliseMathPaste, MATH_GROUPS, MATH_TEMPLATES, type MathItem } from '../lib/math'

interface Props {
  /** Existing LaTeX when editing, empty when inserting a new equation. */
  initialLatex?: string
  /** Display (centred, own line) vs inline (sits in the sentence). */
  initialDisplay?: boolean
  /** Hide the inline/display switch where it makes no sense (whiteboard). */
  showModeToggle?: boolean
  onInsert: (latex: string, display: boolean) => void
  onClose: () => void
  /** Provided when editing an existing equation, so it can be removed. */
  onDelete?: () => void
}

/** Renders a KaTeX snippet into a button label. */
function SymbolButton({ item, onPick }: { item: MathItem; onPick: (latex: string) => void }) {
  const html = useMemo(() => renderMath(item.preview ?? item.latex, false).html, [item])
  return (
    <button
      type="button"
      title={item.title}
      onMouseDown={e => { e.preventDefault(); onPick(item.latex) }}
      className="flex items-center justify-center min-w-9 h-9 px-2 rounded-lg border border-green-200 bg-white text-[#1b2b4b] hover:bg-[#f3fcf0] hover:border-[#5ab82e] transition-colors overflow-hidden"
    >
      <span className="math-btn" dangerouslySetInnerHTML={{ __html: html }} />
    </button>
  )
}

export default function MathModal({
  initialLatex = '',
  initialDisplay = true,
  showModeToggle = true,
  onInsert,
  onClose,
  onDelete,
}: Props) {
  const [latex, setLatex] = useState(initialLatex)
  const [display, setDisplay] = useState(initialDisplay)
  const [group, setGroup] = useState(MATH_GROUPS[0].name)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const pendingCaret = useRef<number | null>(null)

  const isEditing = initialLatex.trim().length > 0
  const { html, error } = useMemo(() => renderMath(latex, display), [latex, display])

  useEffect(() => {
    const el = inputRef.current
    if (!el) return
    el.focus()
    el.setSelectionRange(el.value.length, el.value.length)
  }, [])

  // The textarea is controlled, so React rewrites its value and pushes the caret to
  // the end. Reposition it once the new value is on screen.
  useEffect(() => {
    if (pendingCaret.current === null) return
    const el = inputRef.current
    if (el) {
      el.focus()
      el.setSelectionRange(pendingCaret.current, pendingCaret.current)
    }
    pendingCaret.current = null
  }, [latex])

  /**
   * Insert a snippet at the caret. If the snippet contains an empty `{}` (or an
   * empty `[]`), the caret lands inside it so you can keep typing the argument.
   */
  const insertSnippet = useCallback((snippet: string) => {
    const el = inputRef.current
    if (!el) return
    const start = el.selectionStart ?? latex.length
    const end = el.selectionEnd ?? start
    const selected = latex.slice(start, end)

    let body = snippet
    let caret = snippet.length

    const slot = snippet.search(/\{\}|\[\]/)
    if (slot !== -1) {
      // Wrap any selected text into the first slot, otherwise leave it empty.
      body = snippet.slice(0, slot + 1) + selected + snippet.slice(slot + 1)
      caret = slot + 1 + selected.length
    } else if (selected) {
      body = snippet + selected
      caret = body.length
    }

    setLatex(latex.slice(0, start) + body + latex.slice(end))
    pendingCaret.current = start + caret
  }, [latex])

  const submit = () => {
    const trimmed = latex.trim()
    if (!trimmed || error) return
    onInsert(trimmed, display)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); submit() }
    if (e.key === 'Escape') { e.preventDefault(); onClose() }
  }

  const activeGroup = MATH_GROUPS.find(g => g.name === group) ?? MATH_GROUPS[0]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onMouseDown={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden border border-green-200"
        onMouseDown={e => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-green-100 bg-[#f3fcf0] shrink-0">
          <Sigma size={16} className="text-[#5ab82e]" />
          <span className="font-bold text-sm text-[#1b2b4b]">
            {isEditing ? 'Edit equation' : 'Insert equation'}
          </span>
          {showModeToggle && (
            <div className="flex items-center bg-white border border-green-200 rounded-lg p-0.5 gap-0.5 ml-3">
              <button type="button" onClick={() => setDisplay(false)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${!display ? 'bg-[#5ab82e] text-white' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}>
                Inline
              </button>
              <button type="button" onClick={() => setDisplay(true)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${display ? 'bg-[#5ab82e] text-white' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}>
                Own line
              </button>
            </div>
          )}
          <button onClick={onClose} className="ml-auto p-1 text-[#9ca3af] hover:text-[#1b2b4b] transition-colors rounded">
            <X size={16} />
          </button>
        </div>

        {/* Live preview */}
        <div className="px-4 py-4 border-b border-green-100 shrink-0 min-h-[92px] flex flex-col justify-center">
          <div className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">Preview</div>
          {latex.trim() === '' ? (
            <div className="text-sm text-[#9ca3af] italic">
              Pick symbols below or type LaTeX — your equation appears here.
            </div>
          ) : error ? (
            <div className="text-xs text-red-500 font-medium break-words">
              Not a valid equation yet: {error}
            </div>
          ) : (
            <div className="math-preview overflow-x-auto text-[#1b2b4b]" dangerouslySetInnerHTML={{ __html: html }} />
          )}
        </div>

        {/* LaTeX input */}
        <div className="px-4 pt-3 shrink-0">
          <textarea
            ref={inputRef}
            value={latex}
            onChange={e => setLatex(e.target.value)}
            onPaste={e => {
              // Working copied out of a chat or a PDF arrives with characters KaTeX
              // cannot read. Clean it up and keep the line breaks, so a whole
              // solution can go up in one go instead of equation by equation.
              const text = e.clipboardData.getData('text/plain')
              if (!text) return
              e.preventDefault()
              const el = e.currentTarget
              const start = el.selectionStart ?? latex.length
              const end = el.selectionEnd ?? start
              const cleaned = normaliseMathPaste(text)
              setLatex(latex.slice(0, start) + cleaned + latex.slice(end))
              pendingCaret.current = start + cleaned.length
            }}
            rows={4}
            spellCheck={false}
            placeholder={'One line, or paste a whole working out:\nA = A_1 + A_2 - A_3 - A_4\nA = 72000 + 22619.47 - 7853.98 - 4800\nA = 81965.49'}
            className="w-full px-3 py-2 rounded-lg border border-green-200 bg-[#f9fef6] font-mono text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e] focus:bg-white resize-none"
          />
        </div>

        {/* Symbol palette */}
        <div className="px-4 pt-3 flex items-center gap-1 flex-wrap shrink-0">
          {MATH_GROUPS.map(g => (
            <button key={g.name} type="button" onClick={() => setGroup(g.name)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-colors ${
                group === g.name
                  ? 'bg-[#1b2b4b] text-white border-[#1b2b4b]'
                  : 'bg-white text-[#6b7280] border-green-200 hover:bg-[#f3fcf0] hover:text-[#1b2b4b]'
              }`}>
              {g.name}
            </button>
          ))}
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-4 py-3">
          <div className="flex flex-wrap gap-1.5">
            {activeGroup.items.map(item => (
              <SymbolButton key={item.title + item.latex} item={item} onPick={insertSnippet} />
            ))}
          </div>

          <div className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mt-5 mb-2">
            Ready-made equations
          </div>
          <div className="flex flex-wrap gap-1.5">
            {MATH_TEMPLATES.map(t => (
              <button key={t.title} type="button" title={t.title}
                onMouseDown={e => { e.preventDefault(); setLatex(t.latex) }}
                className="flex items-center justify-center px-2.5 h-9 rounded-lg border border-green-200 bg-white hover:bg-[#f3fcf0] hover:border-[#5ab82e] transition-colors overflow-hidden">
                <span className="math-btn" dangerouslySetInnerHTML={{ __html: renderMath(t.latex, false).html }} />
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 px-4 py-3 border-t border-green-100 bg-[#f9fef6] shrink-0">
          <span className="text-[10px] text-[#9ca3af] hidden sm:flex items-center gap-1">
            <CornerDownLeft size={11} /> Ctrl+Enter to insert. Several lines are lined up on their equals sign.
          </span>
          {onDelete && (
            <button onClick={onDelete}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-500 bg-white border border-red-100 rounded-lg hover:bg-red-50 transition-colors ml-2">
              <Trash2 size={12} /> Remove
            </button>
          )}
          <button onClick={onClose}
            className="ml-auto px-4 py-1.5 text-xs font-semibold text-[#6b7280] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] transition-colors">
            Cancel
          </button>
          <button onClick={submit} disabled={!latex.trim() || !!error}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-[#5ab82e] rounded-lg hover:bg-[#489f22] disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
            {isEditing ? 'Update' : 'Insert'}
          </button>
        </div>
      </div>
    </div>
  )
}
