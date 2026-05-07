import { useEffect, useRef, useCallback, useState } from 'react'
import { useEditor, EditorContent, ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react'
import { Node, mergeAttributes } from '@tiptap/core'
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
import toast from 'react-hot-toast'
import {
  Bold, Italic, UnderlineIcon, Strikethrough,
  Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Code2, Minus,
  Table as TableIcon, ImageIcon, BarChart2, PenLine,
  Trash2, PlusSquare, Lock, FileText, FolderOpen, Loader2, X, Maximize2,
} from 'lucide-react'

// ── Document embed node ───────────────────────────────────────────────────────

type FileType = 'pdf' | 'word' | 'spreadsheet' | 'presentation'

function getFileType(filename: string): FileType {
  const ext = filename.split('.').pop()?.toLowerCase() ?? ''
  if (ext === 'pdf') return 'pdf'
  if (ext === 'doc' || ext === 'docx') return 'word'
  if (ext === 'xls' || ext === 'xlsx') return 'spreadsheet'
  if (ext === 'ppt' || ext === 'pptx') return 'presentation'
  return 'pdf'
}

function getEmbedUrl(src: string, fileType: FileType): string {
  if (fileType === 'pdf') return src
  return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(src)}`
}

const FILE_ICONS: Record<FileType, string> = {
  pdf: '📄', word: '📝', spreadsheet: '📊', presentation: '📑',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DocumentEmbedView({ node, deleteNode }: { node: any; deleteNode: () => void }) {
  const { src, filename, fileType } = node.attrs as { src: string; filename: string; fileType: FileType }
  const embedUrl = getEmbedUrl(src, fileType)

  const openFullscreen = () => {
    window.dispatchEvent(new CustomEvent('doc-fullscreen', { detail: { src, filename, fileType, open: true } }))
  }

  return (
    <NodeViewWrapper>
      <div className="my-3 border border-green-200 rounded-xl overflow-hidden select-none" contentEditable={false}>
        <div className="flex items-center gap-2 px-3 py-2 bg-[#f3fcf0] border-b border-green-100">
          <span className="text-base leading-none">{FILE_ICONS[fileType]}</span>
          <span className="text-sm font-medium text-[#1b2b4b] flex-1 truncate">{filename}</span>
          <button onClick={openFullscreen}
            className="flex items-center gap-1 text-xs text-[#1b2b4b] bg-white border border-green-200 hover:bg-green-50 px-2 py-0.5 rounded transition-colors font-medium">
            <Maximize2 size={11} /> Expand
          </button>
          <a href={src} target="_blank" rel="noreferrer"
            className="text-xs text-[#5ab82e] hover:underline px-2 py-0.5 rounded transition-colors">
            Open
          </a>
          <button onClick={deleteNode}
            className="p-0.5 text-[#9ca3af] hover:text-red-500 transition-colors rounded">
            <X size={13} />
          </button>
        </div>
        <iframe src={embedUrl} className="w-full border-0" style={{ height: 480 }}
          title={filename} allow="fullscreen" />
      </div>
    </NodeViewWrapper>
  )
}

const DocumentEmbed = Node.create({
  name: 'documentEmbed',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      src: { default: null },
      filename: { default: '' },
      fileType: { default: 'pdf' },
    }
  },

  parseHTML() { return [{ tag: 'div[data-document-embed]' }] },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-document-embed': '' })]
  },

  addNodeView() { return ReactNodeViewRenderer(DocumentEmbedView) },
})

// ── Document bar — chips listing embedded files ────────────────────────────────
// Walks the Tiptap JSON to find documentEmbed nodes and renders quick-access chips.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DocBar({ editor }: { editor: any }) {
  const [docs, setDocs] = useState<{ src: string; filename: string; fileType: FileType }[]>([])

  useEffect(() => {
    if (!editor) return
    const collect = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const found: any[] = []
      editor.state.doc.descendants((node: any) => {
        if (node.type.name === 'documentEmbed') found.push(node.attrs)
      })
      setDocs(found)
    }
    collect()
    editor.on('update', collect)
    return () => editor.off('update', collect)
  }, [editor])

  if (docs.length === 0) return null

  return (
    <div className="flex items-center gap-2 px-4 py-1.5 border-b border-green-100 bg-[#f3fcf0] shrink-0 overflow-x-auto">
      <span className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider shrink-0">Documents:</span>
      {docs.map((d, i) => (
        <a key={i} href={d.src} target="_blank" rel="noreferrer"
          className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-green-200 rounded-lg text-xs text-[#1b2b4b] hover:bg-green-50 transition-colors shrink-0 font-medium">
          <span>{FILE_ICONS[d.fileType]}</span>
          <span className="max-w-[140px] truncate">{d.filename}</span>
        </a>
      ))}
    </div>
  )
}

// ── Table size picker ─────────────────────────────────────────────────────────

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
              <div key={c}
                onMouseEnter={() => setHover({ r: r + 1, c: c + 1 })}
                onMouseDown={e => { e.preventDefault(); onPick(r + 1, c + 1) }}
                className={`w-6 h-6 rounded-sm border transition-colors cursor-pointer ${
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

// ── Main component ────────────────────────────────────────────────────────────

interface Props {
  sessionId: string
  isTeacher: boolean
  canEdit?: boolean
  participantId?: string | null
  participantName?: string
}

const STORAGE_KEY = (sessionId: string) => `nexaboard_notes_${sessionId}`

function loadSaved(sessionId: string) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY(sessionId))
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

export default function RichTextEditor({ sessionId, isTeacher, canEdit = false, participantId, participantName }: Props) {
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null)
  const lastBroadcast = useRef(0)
  const isRemoteUpdate = useRef(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

  const [showChartModal, setShowChartModal] = useState(false)
  const [showDrawingModal, setShowDrawingModal] = useState(false)
  const [showTablePicker, setShowTablePicker] = useState(false)
  const [requesting, setRequesting] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [activeEditor, setActiveEditor] = useState<string | null>(null)
  const [fullscreenDoc, setFullscreenDoc] = useState<{ src: string; filename: string; fileType: FileType } | null>(null)

  const myId = isTeacher ? 'teacher' : (participantId || 'anon')
  const canWrite = isTeacher || canEdit

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
      DocumentEmbed,
    ],
    content: loadSaved(sessionId) ?? undefined,
    editable: canWrite,
    onUpdate: ({ editor }) => {
      if (isRemoteUpdate.current || !canWrite) return
      const content = editor.getJSON()
      if (isTeacher) localStorage.setItem(STORAGE_KEY(sessionId), JSON.stringify(content))
      broadcastContent(content)
    },
  })

  useEffect(() => { editor?.setEditable(canWrite) }, [editor, canWrite])

  const broadcastContent = useCallback((content: object) => {
    const now = Date.now()
    if (now - lastBroadcast.current < 500) return
    lastBroadcast.current = now
    channelRef.current?.send({
      type: 'broadcast', event: 'notes_update',
      payload: { content, senderId: myId, senderName: participantName || (isTeacher ? 'Teacher' : 'Student') },
    })
  }, [myId, participantName, isTeacher])

  useEffect(() => {
    const channel = supabase
      .channel(`notes:${sessionId}`)
      .on('broadcast', { event: 'notes_update' }, ({ payload }) => {
        if (!editor || payload.senderId === myId) return
        isRemoteUpdate.current = true
        editor.commands.setContent(payload.content)
        localStorage.setItem(STORAGE_KEY(sessionId), JSON.stringify(payload.content))
        isRemoteUpdate.current = false
        if (isTeacher && payload.senderName) setActiveEditor(payload.senderName)
      })
      .on('broadcast', { event: 'notes_sync_req' }, () => {
        if (!editor || !isTeacher) return
        const content = editor.getJSON()
        channel.send({
          type: 'broadcast', event: 'notes_update',
          payload: { content, senderId: myId, senderName: 'Teacher' },
        })
      })
      .on('broadcast', { event: 'doc_fullscreen' }, ({ payload }) => {
        if (payload.senderId === myId) return
        if (payload.open) setFullscreenDoc({ src: payload.src, filename: payload.filename, fileType: payload.fileType })
        else setFullscreenDoc(null)
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          channel.send({ type: 'broadcast', event: 'notes_sync_req', payload: {} })
        }
      })
    channelRef.current = channel
    return () => { supabase.removeChannel(channel) }
  }, [sessionId, editor, isTeacher, myId])

  // Listen for local expand clicks from DocumentEmbedView (which can't access channelRef directly)
  useEffect(() => {
    const handler = (e: Event) => {
      const { src, filename, fileType, open } = (e as CustomEvent).detail
      if (open) setFullscreenDoc({ src, filename, fileType })
      else setFullscreenDoc(null)
      channelRef.current?.send({
        type: 'broadcast', event: 'doc_fullscreen',
        payload: { src, filename, fileType, open, senderId: myId },
      })
    }
    window.addEventListener('doc-fullscreen', handler)
    return () => window.removeEventListener('doc-fullscreen', handler)
  }, [myId])

  useEffect(() => {
    const close = () => { setShowTablePicker(false); setShowImageInput(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  // ── File upload ─────────────────────────────────────────────────────────────
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !editor) return
    e.target.value = ''

    const fileType = getFileType(file.name)
    const supported = /\.(pdf|docx?|xlsx?|pptx?)$/i.test(file.name)
    if (!supported) {
      toast.error('Supported: PDF, Word (.docx), Excel (.xlsx), PowerPoint (.pptx)')
      return
    }

    const toastId = toast.loading(`Uploading ${file.name}…`)
    setUploading(true)

    try {
      const path = `${sessionId}/${Date.now()}-${file.name.replace(/\s+/g, '_')}`
      const { error: uploadError } = await supabase.storage
        .from('session-files')
        .upload(path, file, { upsert: true })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage.from('session-files').getPublicUrl(path)

      editor.chain().focus().insertContent({
        type: 'documentEmbed',
        attrs: { src: publicUrl, filename: file.name, fileType },
      }).run()

      // Trigger a notes broadcast so all students see the embedded document
      lastBroadcast.current = 0
      broadcastContent(editor.getJSON())

      toast.success(`${file.name} added to notes`, { id: toastId })
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error('Upload error:', err)
      toast.error(`Upload failed: ${msg}`, { id: toastId })
    } finally {
      setUploading(false)
    }
  }

  // ── Notes access request ────────────────────────────────────────────────────
  const requestNotesAccess = async () => {
    if (requesting || !participantId) return
    setRequesting(true)
    const { data: existing } = await supabase.from('board_requests').select('id')
      .eq('session_id', sessionId).eq('participant_id', participantId)
      .eq('request_type', 'notes').eq('status', 'pending').single()
    if (existing) {
      toast('Request already sent. Wait for teacher.', { icon: '⏳' })
      setRequesting(false)
      return
    }
    await supabase.from('board_requests').insert({
      session_id: sessionId,
      participant_id: participantId,
      participant_name: participantName || 'Student',
      request_type: 'notes',
      status: 'pending',
    })
    toast.success('Notes access request sent!')
    setRequesting(false)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !editor) return
    e.target.value = ''
    if (!/\.(png|jpe?g|gif|webp|svg)$/i.test(file.name)) {
      toast.error('Supported image formats: PNG, JPG, GIF, WebP, SVG')
      return
    }
    const toastId = toast.loading(`Uploading ${file.name}…`)
    try {
      const path = `${sessionId}/img-${Date.now()}-${file.name.replace(/\s+/g, '_')}`
      const { error } = await supabase.storage.from('session-files').upload(path, file, { upsert: true })
      if (error) throw error
      const { data: { publicUrl } } = supabase.storage.from('session-files').getPublicUrl(path)
      editor.chain().focus().setImage({ src: publicUrl }).run()
      lastBroadcast.current = 0
      broadcastContent(editor.getJSON())
      toast.success('Image inserted', { id: toastId })
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      toast.error(`Image upload failed: ${msg}`, { id: toastId })
    }
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
    <button onMouseDown={e => { e.preventDefault(); onClick() }} title={title}
      className={`p-1.5 rounded transition-colors ${active ? 'bg-[#5ab82e] text-white' : 'text-[#6b7280] hover:bg-[#f3fcf0] hover:text-[#1b2b4b]'}`}>
      {children}
    </button>
  )

  const sep = () => <div className="w-px h-5 bg-green-100 mx-0.5" />

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Hidden file inputs */}
      <input ref={fileInputRef} type="file"
        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
        onChange={handleFileUpload} className="hidden" />
      <input ref={imageInputRef} type="file"
        accept="image/png,image/jpeg,image/gif,image/webp,image/svg+xml"
        onChange={handleImageUpload} className="hidden" />

      {/* Toolbar — teacher and students with access */}
      {canWrite && (
        <>
          <div className="flex items-center flex-wrap gap-0.5 px-3 py-2 border-b border-green-100 bg-white shrink-0">
            {btn(editor.isActive('heading', { level: 1 }), () => editor.chain().focus().toggleHeading({ level: 1 }).run(), 'Heading 1', <Heading1 size={15} />)}
            {btn(editor.isActive('heading', { level: 2 }), () => editor.chain().focus().toggleHeading({ level: 2 }).run(), 'Heading 2', <Heading2 size={15} />)}
            {btn(editor.isActive('heading', { level: 3 }), () => editor.chain().focus().toggleHeading({ level: 3 }).run(), 'Heading 3', <Heading3 size={15} />)}
            {sep()}
            {btn(editor.isActive('bold'), () => editor.chain().focus().toggleBold().run(), 'Bold', <Bold size={15} />)}
            {btn(editor.isActive('italic'), () => editor.chain().focus().toggleItalic().run(), 'Italic', <Italic size={15} />)}
            {btn(editor.isActive('underline'), () => editor.chain().focus().toggleUnderline().run(), 'Underline', <UnderlineIcon size={15} />)}
            {btn(editor.isActive('strike'), () => editor.chain().focus().toggleStrike().run(), 'Strikethrough', <Strikethrough size={15} />)}
            {sep()}
            {btn(editor.isActive('bulletList'), () => editor.chain().focus().toggleBulletList().run(), 'Bullet List', <List size={15} />)}
            {btn(editor.isActive('orderedList'), () => editor.chain().focus().toggleOrderedList().run(), 'Numbered List', <ListOrdered size={15} />)}
            {btn(editor.isActive('blockquote'), () => editor.chain().focus().toggleBlockquote().run(), 'Quote', <Quote size={15} />)}
            {btn(editor.isActive('codeBlock'), () => editor.chain().focus().toggleCodeBlock().run(), 'Code Block', <Code2 size={15} />)}
            {btn(false, () => editor.chain().focus().setHorizontalRule().run(), 'Divider', <Minus size={15} />)}
            {sep()}

            {/* Open document — prominent labeled button */}
            <button
              onMouseDown={e => { e.preventDefault(); fileInputRef.current?.click() }}
              disabled={uploading}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1b2b4b] hover:bg-[#243660] disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors ml-1"
            >
              {uploading
                ? <><Loader2 size={13} className="animate-spin" /> Uploading…</>
                : <><FolderOpen size={13} /> Open Document</>}
            </button>

            {/* Teacher-only: table, image, chart, drawing */}
            {isTeacher && (
              <>
                {sep()}
                <div className="relative" onMouseDown={e => e.stopPropagation()}>
                  <button onMouseDown={e => { e.preventDefault(); setShowTablePicker(v => !v); setShowImageInput(false) }}
                    title="Insert Table"
                    className={`p-1.5 rounded transition-colors ${showTablePicker ? 'bg-[#5ab82e] text-white' : 'text-[#6b7280] hover:bg-[#f3fcf0] hover:text-[#1b2b4b]'}`}>
                    <TableIcon size={15} />
                  </button>
                  {showTablePicker && <TablePicker onPick={handleTablePick} />}
                </div>
                <button onMouseDown={e => { e.preventDefault(); imageInputRef.current?.click() }}
                  title="Insert Image"
                  className="p-1.5 rounded transition-colors text-[#6b7280] hover:bg-[#f3fcf0] hover:text-[#1b2b4b]">
                  <ImageIcon size={15} />
                </button>
                {btn(false, () => setShowChartModal(true), 'Insert Chart', <BarChart2 size={15} />)}
                {btn(false, () => setShowDrawingModal(true), 'Draw & Shapes', <PenLine size={15} />)}
              </>
            )}

            {/* Teacher: active editor indicator */}
            {isTeacher && activeEditor && (
              <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg text-xs text-purple-600 font-medium">
                <FileText size={10} /> Editing: {activeEditor}
              </div>
            )}
          </div>

          {/* Table controls (teacher only, when cursor is in a table) */}
          {inTable && isTeacher && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3fcf0] border-b border-green-200 shrink-0">
              <span className="text-[10px] font-semibold text-[#5ab82e] uppercase tracking-wider mr-1">Table:</span>
              {([
                ['Add Row Below', () => editor.chain().focus().addRowAfter().run()],
                ['Add Row Above', () => editor.chain().focus().addRowBefore().run()],
                ['Add Column Right', () => editor.chain().focus().addColumnAfter().run()],
                ['Add Column Left', () => editor.chain().focus().addColumnBefore().run()],
              ] as [string, () => void][]).map(([label, fn]) => (
                <button key={label} onMouseDown={e => { e.preventDefault(); fn() }}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-green-50 transition-colors font-medium">
                  <PlusSquare size={12} /> {label}
                </button>
              ))}
              <button onMouseDown={e => { e.preventDefault(); editor.chain().focus().deleteRow().run() }}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-red-500 bg-white border border-red-100 rounded-lg hover:bg-red-50 transition-colors font-medium">
                <Trash2 size={12} /> Delete Row
              </button>
              <button onMouseDown={e => { e.preventDefault(); editor.chain().focus().deleteColumn().run() }}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-red-500 bg-white border border-red-100 rounded-lg hover:bg-red-50 transition-colors font-medium">
                <Trash2 size={12} /> Delete Column
              </button>
              <button onMouseDown={e => { e.preventDefault(); editor.chain().focus().deleteTable().run() }}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors font-semibold ml-auto">
                <Trash2 size={12} /> Delete Table
              </button>
            </div>
          )}
        </>
      )}

      {/* Student view-only bar */}
      {!isTeacher && !canEdit && (
        <div className="flex items-center gap-2 px-4 py-2 border-b border-green-100 bg-[#f9fef6] shrink-0">
          <Lock size={11} className="text-[#9ca3af]" />
          <span className="text-xs text-[#9ca3af]">View only</span>
          <button onClick={requestNotesAccess} disabled={requesting}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-purple-600/20 hover:bg-purple-600/30 text-purple-600 border border-purple-600/30 rounded-lg transition-colors disabled:opacity-50 ml-2">
            <FileText size={11} /> {requesting ? 'Requested...' : 'Request Notes Access'}
          </button>
        </div>
      )}

      {/* Document chips — always visible, extracted from editor content */}
      <DocBar editor={editor} />

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-3xl mx-auto">
          <EditorContent editor={editor} className="notes-editor outline-none" />
        </div>
      </div>

      {showChartModal && <ChartModal onInsert={handleChartInsert} onClose={() => setShowChartModal(false)} />}
      {showDrawingModal && <DrawingModal onInsert={handleDrawingInsert} onClose={() => setShowDrawingModal(false)} />}

      {fullscreenDoc && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/80">
          <div className="flex items-center gap-3 px-4 py-2 bg-[#1b2b4b] shrink-0">
            <span className="text-base leading-none">{FILE_ICONS[fullscreenDoc.fileType]}</span>
            <span className="text-sm font-medium text-white flex-1 truncate">{fullscreenDoc.filename}</span>
            <a href={fullscreenDoc.src} target="_blank" rel="noreferrer"
              className="text-xs text-[#5ab82e] hover:underline px-2 py-1 rounded transition-colors">
              Open original
            </a>
            {isTeacher && (
              <button
                onClick={() => {
                  setFullscreenDoc(null)
                  channelRef.current?.send({
                    type: 'broadcast', event: 'doc_fullscreen',
                    payload: { open: false, senderId: myId },
                  })
                }}
                className="flex items-center gap-1 text-xs bg-red-500/20 hover:bg-red-500/30 text-red-300 px-2 py-1 rounded transition-colors">
                <X size={12} /> Close for everyone
              </button>
            )}
            {!isTeacher && (
              <button onClick={() => setFullscreenDoc(null)}
                className="p-1 text-white/70 hover:text-white transition-colors rounded">
                <X size={16} />
              </button>
            )}
          </div>
          <div className="flex-1 min-h-0">
            <iframe src={getEmbedUrl(fullscreenDoc.src, fullscreenDoc.fileType)}
              className="w-full h-full border-0" title={fullscreenDoc.filename} allow="fullscreen" />
          </div>
        </div>
      )}
    </div>
  )
}
