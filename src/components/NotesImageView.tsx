import { useRef, useState, useEffect } from 'react'
import { NodeViewWrapper } from '@tiptap/react'
import { AlignLeft, AlignCenter, AlignRight, Trash2 } from 'lucide-react'

/**
 * A picture in the notes that can be moved, resized and removed.
 *
 * The board gives a picture free coordinates because it is a canvas. Notes are a
 * document, so "move" here means where the picture sits in the flow of the
 * writing: dragging it between paragraphs, and choosing which side of the page
 * it sits on. Placing it at an arbitrary pixel would fight the text around it.
 *
 * Controls appear when the picture is selected rather than only on hover,
 * because a tablet has no hover and the teacher's device is often the only one
 * in the room.
 */

type Align = 'left' | 'center' | 'right'

const ALIGNMENTS: [Align, React.ElementType, string][] = [
  ['left', AlignLeft, 'Move to the left'],
  ['center', AlignCenter, 'Move to the middle'],
  ['right', AlignRight, 'Move to the right'],
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function NotesImageView({ node, updateAttributes, deleteNode, selected, editor, getPos }: any) {
  const { src, alt, width, align } = node.attrs as {
    src: string; alt: string | null; width: number | null; align: Align
  }
  const editable = editor.isEditable
  const imgRef = useRef<HTMLImageElement>(null)
  const resizeStart = useRef<{ x: number; width: number } | null>(null)
  const [hovered, setHovered] = useState(false)

  // Tapping the picture selects it, which is what puts the controls on screen.
  const pick = () => {
    if (!editable || typeof getPos !== 'function') return
    editor.commands.setNodeSelection(getPos())
  }

  const startResize = (e: React.PointerEvent) => {
    e.preventDefault(); e.stopPropagation()
    resizeStart.current = { x: e.clientX, width: imgRef.current?.getBoundingClientRect().width ?? 320 }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onResizeMove = (e: React.PointerEvent) => {
    if (!resizeStart.current) return
    e.preventDefault()
    const next = resizeStart.current.width + (e.clientX - resizeStart.current.x)
    updateAttributes({ width: Math.round(Math.max(80, next)) })
  }

  const endResize = (e: React.PointerEvent) => {
    if (!resizeStart.current) return
    resizeStart.current = null
    ;(e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId)
  }

  // Backspace or Delete on a picked image removes it, the way it does elsewhere.
  useEffect(() => {
    if (!selected || !editable) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Backspace' && e.key !== 'Delete') return
      e.preventDefault()
      deleteNode()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [selected, editable, deleteNode])

  const show = editable && (selected || hovered)
  const justify = align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'

  return (
    <NodeViewWrapper>
      <div className="my-3 flex" style={{ justifyContent: justify }}>
        <div
          className="relative inline-block max-w-full"
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <img
            ref={imgRef}
            src={src}
            alt={alt ?? ''}
            data-drag-handle
            onPointerDown={pick}
            style={{ width: width ? `${width}px` : undefined, maxWidth: '100%' }}
            className={`h-auto rounded-lg block ${editable ? 'cursor-move' : ''} ${
              selected ? 'ring-2 ring-[#5ab82e]' : ''
            }`}
          />

          {show && (
            <div contentEditable={false}
              className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-0.5 bg-white border border-green-200 rounded-lg shadow-sm px-0.5 py-0.5 z-10">
              {ALIGNMENTS.map(([value, Icon, title]) => (
                <button key={value} type="button" title={title}
                  onMouseDown={e => e.preventDefault()}
                  onClick={() => updateAttributes({ align: value })}
                  className={`p-1 rounded transition-colors ${
                    align === value
                      ? 'bg-[#f3fcf0] text-[#5ab82e]'
                      : 'text-[#6b7280] hover:text-[#1b2b4b] hover:bg-[#f3fcf0]'
                  }`}>
                  <Icon size={12} />
                </button>
              ))}
              <span className="w-px h-4 bg-green-100 mx-0.5" />
              <button type="button" title="Remove this picture"
                onMouseDown={e => e.preventDefault()}
                onClick={() => deleteNode()}
                className="p-1 text-[#9ca3af] hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                <Trash2 size={12} />
              </button>
            </div>
          )}

          {show && (
            <div contentEditable={false} title="Drag to resize"
              onPointerDown={startResize}
              onPointerMove={onResizeMove}
              onPointerUp={endResize}
              onPointerCancel={endResize}
              style={{ touchAction: 'none' }}
              className="absolute -bottom-1.5 -right-1.5 w-4 h-4 rounded-sm bg-[#5ab82e] border-2 border-white shadow cursor-nwse-resize z-10" />
          )}
        </div>
      </div>
    </NodeViewWrapper>
  )
}
