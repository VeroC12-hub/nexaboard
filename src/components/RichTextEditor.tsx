import { useEffect, useRef, useCallback, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Table } from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableHeader from '@tiptap/extension-table-header'
import TableCell from '@tiptap/extension-table-cell'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import { supabase } from '../lib/supabase'
import ChartModal from './ChartModal'
import DrawingModal from './DrawingModal'
import {
  Bold, Italic, UnderlineIcon, Strikethrough,
  Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Code2, Minus,
  Table as TableIcon, ImageIcon, BarChart2, PenLine,
  Trash2, PlusSquare,
} from 'lucide-react'

interface Props {
  sessionId: string
  isTeacher: boolean
}

const GRID_SIZE = 8

function TablePicker({ onPick }: { onPick: (rows: number, cols: number) => void }) {
  const [hover, setHover] = useState({ r: 0, c: 0 })
  return (
    <div className="absolute top-full left-0 mt-1 z-30 bg-white border border-green-200 rounded-xl shadow-xl p-3 select-none">
      <div className="text-[10px] text-[#9ca3af] text-center mb-2 font-medium">
        {hover.r > 0 ? `${hover.r} × ${hover.c} table` : 'Hover to select size'}
      </div>
      <div className="flex flex-col gap-0.5">
        {Array.from({ length: GRID_SIZE }, (_, r) => (
          <div key={r} className="flex gap-0.5">
            {Array.from({ length: GRID_SIZE }, (_, c) => (
              <div
                key={c}
                onMouseEnter={() => setHover({ r: r + 1, c: c + 1 })}
                onMouseDown={e => { e.preventDefault(); onPick(r + 1, c + 1) }}
                className={`w-5 h-5 rounded-sm border transition-colors cursor-pointer ${
                  r < hover.r && c < hover.c
                    ? 'bg-[#5ab82e] border-[#5ab82e]'
                    : 'bg-[#f3fcf0] border-green-200 hover:border-[#5ab82e]'
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const STORAGE_KEY = (sessionId: string) => `nexaboard_notes_${sessionId}`

function loadSaved(sessionId: string) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY(sessionId))
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

export default function RichTextEditor({ sessionId, isTeacher }: Props) {
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null)
  const lastBroadcast = useRef(0)
  const isRemoteUpdate = useRef(false)
  const [showChartModal, setShowChartModal] = useState(false)
  const [showDrawingModal, setShowDrawingModal] = useState(false)
  const [showImageInput, setShowImageInput] = useState(false)
  const [showTablePicker, setShowTablePicker] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Underline,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Image.configure({ inline: false, allowBase64: true }),
      Placeholder.configure({ placeholder: 'Start typing your notes here...' }),
    ],
    content: loadSaved(sessionId) ?? undefined,
    editable: isTeacher,
    onUpdate: ({ editor }) => {
      if (!isTeacher || isRemoteUpdate.current) return
      const content = editor.getJSON()
      localStorage.setItem(STORAGE_KEY(sessionId), JSON.stringify(content))
      broadcastContent(content)
    },
  })

  const broadcastContent = useCallback((content: object) => {
    const now = Date.now()
    if (now - lastBroadcast.current < 500) return
    lastBroadcast.current = now
    channelRef.current?.send({
      type: 'broadcast',
      event: 'notes_update',
      payload: { content },
    })
  }, [])

  useEffect(() => {
    const channel = supabase
      .channel(`notes:${sessionId}`)
      .on('broadcast', { event: 'notes_update' }, ({ payload }) => {
        if (!editor || isTeacher) return
        isRemoteUpdate.current = true
        editor.commands.setContent(payload.content)
        localStorage.setItem(STORAGE_KEY(sessionId), JSON.stringify(payload.content))
        isRemoteUpdate.current = false
      })
      .on('broadcast', { event: 'notes_sync_req' }, () => {
        if (!editor || !isTeacher) return
        const content = editor.getJSON()
        channel.send({ type: 'broadcast', event: 'notes_update', payload: { content } })
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          channel.send({ type: 'broadcast', event: 'notes_sync_req', payload: {} })
        }
      })
    channelRef.current = channel
    return () => { supabase.removeChannel(channel) }
  }, [sessionId, editor, isTeacher])

  // Close popups when clicking outside
  useEffect(() => {
    const close = () => { setShowTablePicker(false); setShowImageInput(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const insertImage = () => {
    if (!imageUrl.trim() || !editor) return
    editor.chain().focus().setImage({ src: imageUrl.trim() }).run()
    setImageUrl('')
    setShowImageInput(false)
  }

  const handleChartInsert = (dataUrl: string) => {
    editor?.chain().focus().setImage({ src: dataUrl }).run()
    setShowChartModal(false)
  }

  const handleDrawingInsert = (dataUrl: string) => {
    editor?.chain().focus().setImage({ src: dataUrl }).run()
    setShowDrawingModal(false)
  }

  const handleTablePick = (rows: number, cols: number) => {
    editor?.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run()
    setShowTablePicker(false)
  }

  if (!editor) return null

  const inTable = editor.isActive('table')

  const btn = (active: boolean, onClick: () => void, title: string, children: React.ReactNode) => (
    <button
      onMouseDown={e => { e.preventDefault(); onClick() }}
      title={title}
      className={`p-1.5 rounded transition-colors ${active ? 'bg-[#5ab82e] text-white' : 'text-[#6b7280] hover:bg-[#f3fcf0] hover:text-[#1b2b4b]'}`}
    >
      {children}
    </button>
  )

  const sep = () => <div className="w-px h-5 bg-green-100 mx-0.5" />

  return (
    <div className="h-full flex flex-col bg-white">
      {isTeacher && (
        <>
          {/* Main toolbar */}
          <div className="flex items-center flex-wrap gap-0.5 px-3 py-2 border-b border-green-100 bg-white shrink-0">
            {btn(editor.isActive('heading', { level: 1 }), () => editor.chain().focus().toggleHeading({ level: 1 }).run(), 'Heading 1', <Heading1 size={15} />)}
            {btn(editor.isActive('heading', { level: 2 }), () => editor.chain().focus().toggleHeading({ level: 2 }).run(), 'Heading 2', <Heading2 size={15} />)}
            {btn(editor.isActive('heading', { level: 3 }), () => editor.chain().focus().toggleHeading({ level: 3 }).run(), 'Heading 3', <Heading3 size={15} />)}
            {sep()}

            {btn(editor.isActive('bold'), () => editor.chain().focus().toggleBold().run(), 'Bold (Ctrl+B)', <Bold size={15} />)}
            {btn(editor.isActive('italic'), () => editor.chain().focus().toggleItalic().run(), 'Italic (Ctrl+I)', <Italic size={15} />)}
            {btn(editor.isActive('underline'), () => editor.chain().focus().toggleUnderline().run(), 'Underline (Ctrl+U)', <UnderlineIcon size={15} />)}
            {btn(editor.isActive('strike'), () => editor.chain().focus().toggleStrike().run(), 'Strikethrough', <Strikethrough size={15} />)}
            {sep()}

            {btn(editor.isActive('bulletList'), () => editor.chain().focus().toggleBulletList().run(), 'Bullet List', <List size={15} />)}
            {btn(editor.isActive('orderedList'), () => editor.chain().focus().toggleOrderedList().run(), 'Numbered List', <ListOrdered size={15} />)}
            {btn(editor.isActive('blockquote'), () => editor.chain().focus().toggleBlockquote().run(), 'Quote', <Quote size={15} />)}
            {btn(editor.isActive('codeBlock'), () => editor.chain().focus().toggleCodeBlock().run(), 'Code Block', <Code2 size={15} />)}
            {btn(false, () => editor.chain().focus().setHorizontalRule().run(), 'Divider', <Minus size={15} />)}
            {sep()}

            {/* Table button with grid picker */}
            <div className="relative" onMouseDown={e => e.stopPropagation()}>
              <button
                onMouseDown={e => { e.preventDefault(); setShowTablePicker(v => !v); setShowImageInput(false) }}
                title="Insert Table — choose size"
                className={`p-1.5 rounded transition-colors ${showTablePicker ? 'bg-[#5ab82e] text-white' : 'text-[#6b7280] hover:bg-[#f3fcf0] hover:text-[#1b2b4b]'}`}
              >
                <TableIcon size={15} />
              </button>
              {showTablePicker && <TablePicker onPick={handleTablePick} />}
            </div>

            {sep()}

            {/* Image */}
            <div className="relative" onMouseDown={e => e.stopPropagation()}>
              <button
                onMouseDown={e => { e.preventDefault(); setShowImageInput(v => !v); setShowTablePicker(false) }}
                title="Insert Image"
                className={`p-1.5 rounded transition-colors ${showImageInput ? 'bg-[#5ab82e] text-white' : 'text-[#6b7280] hover:bg-[#f3fcf0] hover:text-[#1b2b4b]'}`}
              >
                <ImageIcon size={15} />
              </button>
              {showImageInput && (
                <div className="absolute top-full left-0 mt-1 z-30 bg-white border border-green-200 rounded-xl shadow-lg p-3 w-72 flex gap-2">
                  <input
                    autoFocus
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') insertImage(); if (e.key === 'Escape') setShowImageInput(false) }}
                    placeholder="Paste image URL..."
                    className="flex-1 bg-[#f3fcf0] border border-green-200 rounded-lg px-3 py-1.5 text-sm text-[#1b2b4b] placeholder-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#5ab82e]"
                  />
                  <button onClick={insertImage}
                    className="px-3 py-1.5 bg-[#5ab82e] hover:bg-[#489f22] text-white rounded-lg text-sm font-semibold transition-colors">
                    Insert
                  </button>
                </div>
              )}
            </div>

            {btn(false, () => setShowChartModal(true), 'Insert Chart', <BarChart2 size={15} />)}
          {btn(false, () => setShowDrawingModal(true), 'Draw & Shapes', <PenLine size={15} />)}
          </div>

          {/* Table controls — always visible when cursor is inside a table */}
          {inTable && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3fcf0] border-b border-green-200 shrink-0">
              <span className="text-[10px] font-semibold text-[#5ab82e] uppercase tracking-wider mr-1">Table:</span>
              <button
                onMouseDown={e => { e.preventDefault(); editor.chain().focus().addRowAfter().run() }}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-green-50 transition-colors font-medium"
              >
                <PlusSquare size={12} /> Add Row Below
              </button>
              <button
                onMouseDown={e => { e.preventDefault(); editor.chain().focus().addRowBefore().run() }}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-green-50 transition-colors font-medium"
              >
                <PlusSquare size={12} /> Add Row Above
              </button>
              <button
                onMouseDown={e => { e.preventDefault(); editor.chain().focus().addColumnAfter().run() }}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-green-50 transition-colors font-medium"
              >
                <PlusSquare size={12} /> Add Column Right
              </button>
              <button
                onMouseDown={e => { e.preventDefault(); editor.chain().focus().addColumnBefore().run() }}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-green-50 transition-colors font-medium"
              >
                <PlusSquare size={12} /> Add Column Left
              </button>
              <button
                onMouseDown={e => { e.preventDefault(); editor.chain().focus().deleteRow().run() }}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-red-500 bg-white border border-red-100 rounded-lg hover:bg-red-50 transition-colors font-medium"
              >
                <Trash2 size={12} /> Delete Row
              </button>
              <button
                onMouseDown={e => { e.preventDefault(); editor.chain().focus().deleteColumn().run() }}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-red-500 bg-white border border-red-100 rounded-lg hover:bg-red-50 transition-colors font-medium"
              >
                <Trash2 size={12} /> Delete Column
              </button>
              <button
                onMouseDown={e => { e.preventDefault(); editor.chain().focus().deleteTable().run() }}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors font-semibold ml-auto"
              >
                <Trash2 size={12} /> Delete Table
              </button>
            </div>
          )}
        </>
      )}

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-3xl mx-auto">
          <EditorContent editor={editor} className="notes-editor outline-none" />
        </div>
      </div>

      {showChartModal && (
        <ChartModal onInsert={handleChartInsert} onClose={() => setShowChartModal(false)} />
      )}
      {showDrawingModal && (
        <DrawingModal onInsert={handleDrawingInsert} onClose={() => setShowDrawingModal(false)} />
      )}
    </div>
  )
}
