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
import {
  Bold, Italic, UnderlineIcon, Strikethrough,
  Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Code2, Minus,
  Table as TableIcon, ImageIcon, BarChart2,
  TableRowsSplit, Columns2, Trash2,
} from 'lucide-react'

interface Props {
  sessionId: string
  isTeacher: boolean
}

export default function RichTextEditor({ sessionId, isTeacher }: Props) {
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null)
  const lastBroadcast = useRef(0)
  const isRemoteUpdate = useRef(false)
  const [showChartModal, setShowChartModal] = useState(false)
  const [showImageInput, setShowImageInput] = useState(false)
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
    editable: isTeacher,
    onUpdate: ({ editor }) => {
      if (!isTeacher || isRemoteUpdate.current) return
      broadcastContent(editor.getJSON())
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

  const insertTable = () => {
    editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
  }

  if (!editor) return null

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
      {/* Toolbar */}
      {isTeacher && (
        <div className="flex items-center flex-wrap gap-0.5 px-3 py-2 border-b border-green-100 bg-white shrink-0">
          {/* Headings */}
          {btn(editor.isActive('heading', { level: 1 }), () => editor.chain().focus().toggleHeading({ level: 1 }).run(), 'Heading 1', <Heading1 size={15} />)}
          {btn(editor.isActive('heading', { level: 2 }), () => editor.chain().focus().toggleHeading({ level: 2 }).run(), 'Heading 2', <Heading2 size={15} />)}
          {btn(editor.isActive('heading', { level: 3 }), () => editor.chain().focus().toggleHeading({ level: 3 }).run(), 'Heading 3', <Heading3 size={15} />)}
          {sep()}

          {/* Formatting */}
          {btn(editor.isActive('bold'), () => editor.chain().focus().toggleBold().run(), 'Bold (Ctrl+B)', <Bold size={15} />)}
          {btn(editor.isActive('italic'), () => editor.chain().focus().toggleItalic().run(), 'Italic (Ctrl+I)', <Italic size={15} />)}
          {btn(editor.isActive('underline'), () => editor.chain().focus().toggleUnderline().run(), 'Underline (Ctrl+U)', <UnderlineIcon size={15} />)}
          {btn(editor.isActive('strike'), () => editor.chain().focus().toggleStrike().run(), 'Strikethrough', <Strikethrough size={15} />)}
          {sep()}

          {/* Lists */}
          {btn(editor.isActive('bulletList'), () => editor.chain().focus().toggleBulletList().run(), 'Bullet List', <List size={15} />)}
          {btn(editor.isActive('orderedList'), () => editor.chain().focus().toggleOrderedList().run(), 'Numbered List', <ListOrdered size={15} />)}
          {btn(editor.isActive('blockquote'), () => editor.chain().focus().toggleBlockquote().run(), 'Quote', <Quote size={15} />)}
          {btn(editor.isActive('codeBlock'), () => editor.chain().focus().toggleCodeBlock().run(), 'Code Block', <Code2 size={15} />)}
          {btn(false, () => editor.chain().focus().setHorizontalRule().run(), 'Divider', <Minus size={15} />)}
          {sep()}

          {/* Table */}
          {btn(false, insertTable, 'Insert Table', <TableIcon size={15} />)}
          {editor.isActive('table') && (
            <>
              {btn(false, () => editor.chain().focus().addRowAfter().run(), 'Add Row', <TableRowsSplit size={15} />)}
              {btn(false, () => editor.chain().focus().addColumnAfter().run(), 'Add Column', <Columns2 size={15} />)}
              {btn(false, () => editor.chain().focus().deleteTable().run(), 'Delete Table', <Trash2 size={15} />)}
            </>
          )}
          {sep()}

          {/* Image */}
          <div className="relative">
            {btn(showImageInput, () => setShowImageInput(v => !v), 'Insert Image', <ImageIcon size={15} />)}
            {showImageInput && (
              <div className="absolute top-full left-0 mt-1 z-20 bg-white border border-green-200 rounded-xl shadow-lg p-3 w-72 flex gap-2">
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

          {/* Chart */}
          {btn(false, () => setShowChartModal(true), 'Insert Chart', <BarChart2 size={15} />)}
        </div>
      )}

      {/* Editor area */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-3xl mx-auto">
          <EditorContent editor={editor} className="notes-editor outline-none" />
        </div>
      </div>

      {showChartModal && (
        <ChartModal onInsert={handleChartInsert} onClose={() => setShowChartModal(false)} />
      )}
    </div>
  )
}
