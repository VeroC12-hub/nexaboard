import { useEffect, useRef, useCallback, useState } from 'react'
import { useEditor, EditorContent, ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react'
import { Node as TiptapNode, mergeAttributes } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { Table } from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableHeader from '@tiptap/extension-table-header'
import TableCell from '@tiptap/extension-table-cell'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import { TextStyle } from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import { supabase } from '../lib/supabase'
import { apsTranslate, apsStatus } from '../lib/aps'
import { dwgConvertStart, dwgConvertStatus } from '../lib/dwgConvert'
import ChartModal from './ChartModal'
import DrawingModal from './DrawingModal'
import CadViewer from './CadViewer'
import DxfViewer from './DxfViewer'
import GraphModal from './GraphModal'
import MathModal from './MathModal'
import { MathInline, MathBlock, MathTrailingParagraph } from './MathNodes'
import type { MathEditDetail } from '../lib/math'
import { loadLesson, saveLessonSlice } from '../lib/board'
import toast from 'react-hot-toast'
import {
  Bold, Italic, UnderlineIcon, Strikethrough,
  Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Code2, Minus,
  Table as TableIcon, ImageIcon, BarChart2, PenLine,
  Trash2, PlusSquare, Lock, FileText, FolderOpen, Loader2, X, Maximize2,
  Volume2, VolumeX, Palette, Highlighter, Sigma, LineChart,
} from 'lucide-react'

// ── Preset colour swatches ────────────────────────────────────────────────────
const PRESET_COLORS = [
  { hex: '#000000', label: 'Black' },
  { hex: '#ffffff', label: 'White' },
  { hex: '#6b7280', label: 'Gray' },
  { hex: '#ef4444', label: 'Red' },
  { hex: '#f97316', label: 'Orange' },
  { hex: '#eab308', label: 'Yellow' },
  { hex: '#22c55e', label: 'Green' },
  { hex: '#3b82f6', label: 'Blue' },
  { hex: '#8b5cf6', label: 'Purple' },
  { hex: '#ec4899', label: 'Pink' },
  { hex: '#1b2b4b', label: 'Navy' },
  { hex: '#5ab82e', label: 'Brand green' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ColorPicker({ editor, onClose }: { editor: any; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const customRef = useRef<HTMLInputElement>(null)
  const current = editor.getAttributes('textStyle').color as string | undefined

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [onClose])

  const setColor = (hex: string) => {
    editor.chain().focus().setColor(hex).run()
    onClose()
  }
  const removeColor = () => {
    editor.chain().focus().unsetColor().run()
    onClose()
  }

  return (
    <div ref={ref}
      className="absolute top-full left-0 mt-1 z-40 bg-white border border-green-200 rounded-xl shadow-xl p-3 w-52"
      onMouseDown={e => e.preventDefault()}>
      <div className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">Text colour</div>
      <div className="grid grid-cols-6 gap-1.5 mb-2">
        {PRESET_COLORS.map(({ hex, label }) => (
          <button key={hex} title={label} onClick={() => setColor(hex)}
            className={`w-6 h-6 rounded-md border-2 transition-all hover:scale-110 ${current === hex ? 'border-[#5ab82e] scale-110' : 'border-transparent hover:border-[#5ab82e]/50'}`}
            style={{ backgroundColor: hex, boxShadow: hex === '#ffffff' ? 'inset 0 0 0 1px #e5e7eb' : undefined }} />
        ))}
      </div>
      <div className="flex items-center gap-2 pt-2 border-t border-green-100">
        <label className="text-[10px] text-[#6b7280] font-medium shrink-0">Custom:</label>
        <input ref={customRef} type="color" defaultValue={current ?? '#000000'}
          className="w-8 h-6 rounded cursor-pointer border border-green-200 p-0 bg-transparent"
          onChange={e => editor.chain().focus().setColor(e.target.value).run()} />
        <button onClick={removeColor}
          className="ml-auto text-[10px] text-[#6b7280] hover:text-red-500 transition-colors font-medium">
          Remove
        </button>
      </div>
    </div>
  )
}

// ── Highlight picker ──────────────────────────────────────────────────────────
const HIGHLIGHT_COLORS = [
  { hex: '#fef08a', label: 'Yellow' },
  { hex: '#bbf7d0', label: 'Green' },
  { hex: '#bfdbfe', label: 'Blue' },
  { hex: '#fecaca', label: 'Red' },
  { hex: '#fed7aa', label: 'Orange' },
  { hex: '#e9d5ff', label: 'Purple' },
  { hex: '#fbcfe8', label: 'Pink' },
  { hex: '#e5e7eb', label: 'Gray' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HighlightPicker({ editor, onClose }: { editor: any; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const current = editor.getAttributes('highlight').color as string | undefined

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [onClose])

  const setHighlight = (hex: string) => {
    editor.chain().focus().setHighlight({ color: hex }).run()
    onClose()
  }
  const removeHighlight = () => {
    editor.chain().focus().unsetHighlight().run()
    onClose()
  }

  return (
    <div ref={ref}
      className="absolute top-full left-0 mt-1 z-40 bg-white border border-green-200 rounded-xl shadow-xl p-3 w-44"
      onMouseDown={e => e.preventDefault()}>
      <div className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">Highlight</div>
      <div className="grid grid-cols-4 gap-1.5 mb-2">
        {HIGHLIGHT_COLORS.map(({ hex, label }) => (
          <button key={hex} title={label} onClick={() => setHighlight(hex)}
            className={`w-7 h-7 rounded-md border-2 transition-all hover:scale-110 ${current === hex ? 'border-[#5ab82e] scale-110' : 'border-transparent hover:border-[#5ab82e]/50'}`}
            style={{ backgroundColor: hex }} />
        ))}
      </div>
      <div className="flex items-center gap-2 pt-2 border-t border-green-100">
        <label className="text-[10px] text-[#6b7280] font-medium shrink-0">Custom:</label>
        <input type="color" defaultValue={current ?? '#fef08a'}
          className="w-8 h-6 rounded cursor-pointer border border-green-200 p-0 bg-transparent"
          onChange={e => editor.chain().focus().setHighlight({ color: e.target.value }).run()} />
        <button onClick={removeHighlight}
          className="ml-auto text-[10px] text-[#6b7280] hover:text-red-500 transition-colors font-medium">
          Remove
        </button>
      </div>
    </div>
  )
}

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

const DocumentEmbed = TiptapNode.create({
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

// ── CAD embed node (DXF in-browser, or DWG via APS / CloudConvert) ─────────────
// kind 'dxf'         → renders instantly client-side
// kind 'dwg'         → APS SVF2 translation (poll apsStatus on the URN)
// kind 'dwg-convert' → CloudConvert DWG→DXF (poll dwgConvertStatus on the jobId → DXF url)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CadEmbedView({ node, deleteNode, editor }: { node: any; deleteNode: () => void; editor: any }) {
  const { filename, urn, src, kind, jobId } = node.attrs as { filename: string; urn: string; src: string; kind: string; jobId: string }
  const isDxf = kind === 'dxf'
  const isConvert = kind === 'dwg-convert'
  const [ready, setReady] = useState(isDxf)
  const [failed, setFailed] = useState(false)
  const [progress, setProgress] = useState('Preparing…')
  // For the CloudConvert path, the viewable output is a DXF url produced once conversion finishes.
  const [convertedDxf, setConvertedDxf] = useState('')

  useEffect(() => {
    if (isDxf) return
    let stop = false

    const pollAps = async () => {
      try {
        const r = await apsStatus(urn)
        if (stop) return
        if (r.status === 'success') { setReady(true); return }
        if (r.status === 'failed' || r.status === 'timeout') { setFailed(true); return }
        if (r.progress) setProgress(r.progress)
        setTimeout(pollAps, 4000)
      } catch { if (!stop) setTimeout(pollAps, 6000) }
    }

    const pollConvert = async () => {
      try {
        const r = await dwgConvertStatus(jobId, filename)
        if (stop) return
        if (r.status === 'finished' && r.dxfUrl) { setConvertedDxf(r.dxfUrl); setReady(true); return }
        if (r.status === 'error' || r.error) { setFailed(true); return }
        setProgress('converting…')
        setTimeout(pollConvert, 4000)
      } catch { if (!stop) setTimeout(pollConvert, 6000) }
    }

    if (isConvert && jobId) pollConvert()
    else if (urn) pollAps()
    return () => { stop = true }
  }, [urn, jobId, isDxf, isConvert, filename])

  const openFullscreen = () => {
    // DXF and converted-DWG both open in the client-side DXF viewer; native DWG opens in APS.
    const detail = isConvert
      ? { kind: 'dxf', src: convertedDxf, urn: '', filename, open: true }
      : { kind: kind || 'dwg', src, urn, filename, open: true }
    window.dispatchEvent(new CustomEvent('cad-fullscreen', { detail }))
  }

  return (
    <NodeViewWrapper>
      <div className="my-3 border border-blue-200 rounded-xl overflow-hidden select-none bg-[#f4f8ff]" contentEditable={false}>
        <div className="flex items-center gap-2 px-3 py-2 border-b border-blue-100">
          <span className="text-base leading-none">📐</span>
          <span className="text-sm font-medium text-[#1b2b4b] flex-1 truncate">{filename}</span>
          {ready ? (
            <button onClick={openFullscreen}
              className="flex items-center gap-1 text-xs text-white bg-blue-600 hover:bg-blue-500 px-2.5 py-1 rounded transition-colors font-medium">
              <Maximize2 size={11} /> Open drawing
            </button>
          ) : failed ? (
            <span className="text-xs text-red-500 font-medium">Couldn’t process this drawing</span>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-blue-600 font-medium">
              <Loader2 size={12} className="animate-spin" /> {isConvert ? 'Converting…' : `Rendering… ${progress}`}
            </span>
          )}
          {editor?.isEditable && (
            <button onClick={deleteNode}
              className="p-0.5 text-[#9ca3af] hover:text-red-500 transition-colors rounded">
              <X size={13} />
            </button>
          )}
        </div>
        <div className="px-3 py-2 text-xs text-[#6b7280]">
          {ready
            ? 'CAD drawing ready — click “Open drawing” to view, zoom and pan.'
            : failed
              ? 'Could not process this drawing. The file may be corrupt or an unsupported CAD version.'
              : isConvert
                ? 'Converting this DWG to a viewable drawing. This can take a minute.'
                : 'Autodesk is preparing a viewable version of this CAD file. This can take a minute for large drawings.'}
        </div>
      </div>
    </NodeViewWrapper>
  )
}

const CadEmbed = TiptapNode.create({
  name: 'cadEmbed',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      src: { default: null },
      filename: { default: '' },
      urn: { default: '' },
      jobId: { default: '' },
      status: { default: 'translating' },
      kind: { default: 'dwg' },
    }
  },

  parseHTML() { return [{ tag: 'div[data-cad-embed]' }] },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-cad-embed': '' })]
  },

  addNodeView() { return ReactNodeViewRenderer(CadEmbedView) },
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
  const [showGraphModal, setShowGraphModal] = useState(false)
  const [showDrawingModal, setShowDrawingModal] = useState(false)
  const [mathEdit, setMathEdit] = useState<MathEditDetail | null>(null)
  const [showMathModal, setShowMathModal] = useState(false)
  const [showTablePicker, setShowTablePicker] = useState(false)
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [showHighlightPicker, setShowHighlightPicker] = useState(false)
  const [requesting, setRequesting] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [activeEditor, setActiveEditor] = useState<string | null>(null)
  const [fullscreenDoc, setFullscreenDoc] = useState<{ src: string; filename: string; fileType: FileType } | null>(null)
  const [fullscreenCad, setFullscreenCad] = useState<{ urn: string; src: string; kind: string; filename: string } | null>(null)
  const [speaking, setSpeaking] = useState(false)

  const myId = isTeacher ? 'teacher' : (participantId || 'anon')
  const canWrite = isTeacher || canEdit

  // Paste and drop reach the editor before `insertImageBlob` exists, so they go
  // through a ref that is filled in once the handler is defined below.
  const insertImageRef = useRef<((blob: Blob, name: string) => void) | null>(null)

  /** Pull image files out of a paste or drop, ignoring anything else. */
  const imageFilesFrom = (data: DataTransfer | null): File[] => {
    if (!data) return []
    return Array.from(data.files).filter(f => f.type.startsWith('image/'))
  }

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Image.configure({ inline: false, allowBase64: true }),
      Placeholder.configure({ placeholder: 'Start typing your notes here...' }),
      DocumentEmbed,
      CadEmbed,
      MathInline,
      MathBlock,
      MathTrailingParagraph,
    ],
    content: loadSaved(sessionId) ?? undefined,
    editable: canWrite,
    editorProps: {
      // Copy a graph, chart or diagram from anywhere and paste it straight in.
      handlePaste: (_view, event) => {
        const files = imageFilesFrom(event.clipboardData)
        if (!files.length) return false
        event.preventDefault()
        files.forEach(file => insertImageRef.current?.(file, 'pasted'))
        return true
      },
      handleDrop: (_view, event) => {
        const files = imageFilesFrom((event as DragEvent).dataTransfer)
        if (!files.length) return false
        event.preventDefault()
        files.forEach(file => insertImageRef.current?.(file, 'dropped'))
        return true
      },
    },
    onUpdate: ({ editor }) => {
      if (isRemoteUpdate.current || !canWrite) return
      const content = editor.getJSON()
      if (isTeacher) {
        localStorage.setItem(STORAGE_KEY(sessionId), JSON.stringify(content))
        scheduleNotesSave(content)
      }
      broadcastContent(content)
    },
  })

  // Notes are saved to the lesson row as well as localStorage, so they survive a
  // refresh on any device and absent students can read them afterwards.
  const notesSaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const notesSaveWarned = useRef(false)
  const scheduleNotesSave = useCallback((content: object) => {
    if (!isTeacher) return
    if (notesSaveTimer.current) clearTimeout(notesSaveTimer.current)
    notesSaveTimer.current = setTimeout(() => {
      saveLessonSlice(sessionId, { notes: content }).catch(err => {
        console.error('Could not save the notes:', err)
        // Say so once. Silently losing a lesson is far worse than one warning.
        if (!notesSaveWarned.current) {
          notesSaveWarned.current = true
          toast.error(
            `These notes are not being saved. ${err instanceof Error ? err.message : ''}`,
            { duration: 8000 },
          )
        }
      })
    }, 2500)
  }, [isTeacher, sessionId])

  useEffect(() => () => { if (notesSaveTimer.current) clearTimeout(notesSaveTimer.current) }, [])

  // Pull the saved notes in on load. localStorage already covers the teacher's own
  // device; this is what gives students and other devices the lesson.
  useEffect(() => {
    if (!editor) return
    let cancelled = false
    loadLesson(sessionId).then(lesson => {
      if (cancelled || !lesson?.notes) return
      // Never clobber something the teacher has already started typing here.
      if (!editor.isEmpty && isTeacher) return
      isRemoteUpdate.current = true
      editor.commands.setContent(lesson.notes as object)
      isRemoteUpdate.current = false
    }).catch(() => {})
    return () => { cancelled = true }
  }, [editor, sessionId, isTeacher])

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
      .on('broadcast', { event: 'cad_fullscreen' }, ({ payload }) => {
        if (payload.senderId === myId) return
        if (payload.open) setFullscreenCad({ urn: payload.urn, src: payload.src, kind: payload.kind || 'dwg', filename: payload.filename })
        else setFullscreenCad(null)
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

  // Listen for local "open drawing" clicks from CadEmbedView, broadcast to students
  useEffect(() => {
    const handler = (e: Event) => {
      const { urn, src, kind, filename, open } = (e as CustomEvent).detail
      if (open) setFullscreenCad({ urn, src, kind: kind || 'dwg', filename })
      else setFullscreenCad(null)
      channelRef.current?.send({
        type: 'broadcast', event: 'cad_fullscreen',
        payload: { urn, src, kind, filename, open, senderId: myId },
      })
    }
    window.addEventListener('cad-fullscreen', handler)
    return () => window.removeEventListener('cad-fullscreen', handler)
  }, [myId])

  useEffect(() => {
    const close = () => { setShowTablePicker(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  // Clicking an equation in the document opens the equation editor
  useEffect(() => {
    const handler = (e: Event) => setMathEdit((e as CustomEvent).detail as MathEditDetail)
    window.addEventListener('math-edit', handler)
    return () => window.removeEventListener('math-edit', handler)
  }, [])

  // Ctrl/Cmd+M inserts a new equation
  useEffect(() => {
    if (!canWrite) return
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'm') {
        e.preventDefault()
        setShowMathModal(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [canWrite])

  const insertEquation = (latex: string, display: boolean) => {
    if (!editor) return
    editor.chain().focus().insertContent(
      display
        ? { type: 'mathBlock', attrs: { latex } }
        : { type: 'mathInline', attrs: { latex } },
    ).run()
    // insertContent leaves the new atom node selected — typing would replace it,
    // so drop a text cursor just after the equation instead.
    editor.commands.setTextSelection(editor.state.selection.to + 1)
    setShowMathModal(false)
    lastBroadcast.current = 0
    if (editor) broadcastContent(editor.getJSON())
  }

  // ── File upload ─────────────────────────────────────────────────────────────
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !editor) return
    e.target.value = ''

    // DXF renders in the browser with no Autodesk account; DWG goes through APS translation
    if (/\.dxf$/i.test(file.name)) {
      await handleDxfUpload(file)
      return
    }
    if (/\.dwg$/i.test(file.name)) {
      await handleCadUpload(file)
      return
    }

    const fileType = getFileType(file.name)
    const supported = /\.(pdf|docx?|xlsx?|pptx?)$/i.test(file.name)
    if (!supported) {
      toast.error('Supported: PDF, Word, Excel, PowerPoint, CAD (.dwg/.dxf)')
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

  // ── CAD upload (DWG/DXF → Autodesk Viewer) ───────────────────────────────────
  const handleCadUpload = async (file: File) => {
    if (!editor) return
    if (!isTeacher) { toast.error('Only the teacher can add CAD drawings'); return }

    const toastId = toast.loading(`Uploading ${file.name}…`)
    setUploading(true)
    try {
      const path = `${sessionId}/cad-${Date.now()}-${file.name.replace(/\s+/g, '_')}`
      const { error: uploadError } = await supabase.storage
        .from('session-files')
        .upload(path, file, { upsert: true })
      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage.from('session-files').getPublicUrl(path)

      toast.loading('Preparing 2D/3D view… this can take a minute', { id: toastId })

      // Prefer the Autodesk Viewer (best fidelity). If APS isn't configured, fall back to
      // CloudConvert DWG→DXF (no Autodesk account). If neither is set up, tell the user.
      const aps = await apsTranslate(publicUrl, file.name)
      if (aps.urn) {
        editor.chain().focus().insertContent({
          type: 'cadEmbed',
          attrs: { src: publicUrl, filename: file.name, urn: aps.urn, status: 'translating', kind: 'dwg' },
        }).run()
      } else {
        const conv = await dwgConvertStart(publicUrl, file.name)
        if (conv.jobId) {
          editor.chain().focus().insertContent({
            type: 'cadEmbed',
            attrs: { src: publicUrl, filename: file.name, jobId: conv.jobId, status: 'converting', kind: 'dwg-convert' },
          }).run()
        } else if (aps.error === 'not_configured' && conv.error === 'not_configured') {
          toast.error('DWG viewing isn’t set up yet — add an APS or CloudConvert key.', { id: toastId })
          return
        } else {
          throw new Error(conv.error || aps.error || 'could not start DWG processing')
        }
      }

      lastBroadcast.current = 0
      broadcastContent(editor.getJSON())
      toast.success(`${file.name} added — preparing in the notes`, { id: toastId })
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error('CAD upload error:', err)
      toast.error(`CAD upload failed: ${msg}`, { id: toastId })
    } finally {
      setUploading(false)
    }
  }

  // ── DXF upload (renders in-browser, no Autodesk account) ─────────────────────
  const handleDxfUpload = async (file: File) => {
    if (!editor) return
    const toastId = toast.loading(`Uploading ${file.name}…`)
    setUploading(true)
    try {
      const path = `${sessionId}/dxf-${Date.now()}-${file.name.replace(/\s+/g, '_')}`
      const { error: uploadError } = await supabase.storage
        .from('session-files')
        .upload(path, file, { upsert: true })
      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage.from('session-files').getPublicUrl(path)

      editor.chain().focus().insertContent({
        type: 'cadEmbed',
        attrs: { src: publicUrl, filename: file.name, urn: '', status: 'ready', kind: 'dxf' },
      }).run()

      lastBroadcast.current = 0
      broadcastContent(editor.getJSON())
      toast.success(`${file.name} added to notes`, { id: toastId })
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error('DXF upload error:', err)
      toast.error(`DXF upload failed: ${msg}`, { id: toastId })
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

  // ── Text-to-speech ──────────────────────────────────────────────────────────
  const speakContent = () => {
    if (!editor) return
    if (!('speechSynthesis' in window)) { toast.error('Text-to-speech not supported in this browser'); return }
    window.speechSynthesis.cancel()
    const { from, to, empty } = editor.state.selection
    let text = ''
    if (!empty) {
      editor.state.doc.nodesBetween(from, to, (node: { isText: boolean; text?: string }) => {
        if (node.isText) text += node.text ?? ''
      })
    } else {
      text = editor.getText()
    }
    if (!text.trim()) { toast('Nothing to read', { icon: '🔇' }); return }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)
    window.speechSynthesis.speak(utterance)
    setSpeaking(true)
  }

  const stopSpeaking = () => { window.speechSynthesis.cancel(); setSpeaking(false) }

  useEffect(() => { return () => window.speechSynthesis?.cancel() }, [])

  /**
   * Put an image into the notes. Uploading to storage keeps the document JSON
   * small, which matters because the whole document is broadcast on every edit;
   * if storage is unavailable we still embed the image inline rather than lose it.
   */
  const insertImageBlob = useCallback(async (blob: Blob, name: string, fallbackDataUrl?: string) => {
    if (!editor || !canWrite) return
    const toastId = toast.loading('Adding image…')
    try {
      const ext = (blob.type.split('/')[1] || 'png').replace('+xml', '')
      const path = `${sessionId}/img-${Date.now()}-${name}.${ext}`
      const { error } = await supabase.storage.from('session-files')
        .upload(path, blob, { upsert: true, contentType: blob.type || 'image/png' })
      if (error) throw error
      const { data: { publicUrl } } = supabase.storage.from('session-files').getPublicUrl(path)
      editor.chain().focus().setImage({ src: publicUrl }).run()
      toast.success('Image added', { id: toastId })
    } catch (err) {
      if (!fallbackDataUrl) {
        const msg = err instanceof Error ? err.message : String(err)
        toast.error(`Could not add image: ${msg}`, { id: toastId })
        return
      }
      editor.chain().focus().setImage({ src: fallbackDataUrl }).run()
      toast.success('Image added', { id: toastId })
    }
    lastBroadcast.current = 0
    broadcastContent(editor.getJSON())
  }, [editor, canWrite, sessionId, broadcastContent])

  useEffect(() => {
    insertImageRef.current = (blob, name) => { void insertImageBlob(blob, name) }
  }, [insertImageBlob])

  /** Charts, graphs and drawings arrive as PNG data URLs from their editors. */
  const insertDataUrl = async (dataUrl: string, name: string) => {
    try {
      const blob = await (await fetch(dataUrl)).blob()
      await insertImageBlob(blob, name, dataUrl)
    } catch {
      await insertImageBlob(new Blob(), name, dataUrl)
    }
  }

  const handleChartInsert = (dataUrl: string) => {
    setShowChartModal(false)
    void insertDataUrl(dataUrl, 'chart')
  }

  const handleGraphInsert = (dataUrl: string) => {
    setShowGraphModal(false)
    void insertDataUrl(dataUrl, 'graph')
  }

  const handleDrawingInsert = (dataUrl: string) => {
    setShowDrawingModal(false)
    void insertDataUrl(dataUrl, 'drawing')
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
        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.dwg,.dxf"
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
              title={isTeacher
                ? 'Open a document or CAD drawing — PDF, Word, Excel, PowerPoint, AutoCAD/Civil 3D (.dwg, .dxf)'
                : 'Open a document — PDF, Word, Excel, PowerPoint'}
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
                  <button onMouseDown={e => { e.preventDefault(); setShowTablePicker(v => !v) }}
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

      {/* ── Formatting tools row — colour, highlight, TTS (always visible) ─── */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-green-200 bg-[#f3fcf0] shrink-0 flex-wrap">
        {/* Font colour */}
        {canWrite && (
          <div className="relative">
            <button onMouseDown={e => { e.preventDefault(); setShowColorPicker(v => !v) }}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${showColorPicker ? 'bg-[#5ab82e] text-white border-[#5ab82e]' : 'text-[#1b2b4b] bg-white border-green-200 hover:bg-[#f3fcf0]'}`}>
              <Palette size={13} />
              <span>Text Colour</span>
              <span className="w-4 h-1.5 rounded-sm ml-0.5"
                style={{ backgroundColor: (editor.getAttributes('textStyle').color as string | undefined) ?? '#000000' }} />
            </button>
            {showColorPicker && <ColorPicker editor={editor} onClose={() => setShowColorPicker(false)} />}
          </div>
        )}

        {/* Highlighter */}
        {canWrite && (
          <div className="relative">
            <button onMouseDown={e => { e.preventDefault(); setShowHighlightPicker(v => !v) }}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${showHighlightPicker || editor.isActive('highlight') ? 'bg-[#5ab82e] text-white border-[#5ab82e]' : 'text-[#1b2b4b] bg-white border-green-200 hover:bg-[#f3fcf0]'}`}>
              <Highlighter size={13} />
              <span>Highlight</span>
              <span className="w-4 h-1.5 rounded-sm ml-0.5"
                style={{ backgroundColor: (editor.getAttributes('highlight').color as string | undefined) ?? '#fef08a' }} />
            </button>
            {showHighlightPicker && <HighlightPicker editor={editor} onClose={() => setShowHighlightPicker(false)} />}
          </div>
        )}

        {/* Equation editor — anyone who can write in the notes */}
        {canWrite && (
          <button
            onMouseDown={e => { e.preventDefault(); setShowMathModal(true) }}
            title="Insert a maths equation (Ctrl+M). You can also type $x^2$ inline, or $$…$$ on its own line"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors text-[#1b2b4b] bg-white border-green-200 hover:bg-[#f3fcf0]">
            <Sigma size={13} />
            <span>Equation</span>
          </button>
        )}

        {/* Function grapher — anyone who can write in the notes */}
        {canWrite && (
          <button
            onMouseDown={e => { e.preventDefault(); setShowGraphModal(true) }}
            title="Plot a function such as y = x² or y = sin(x)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors text-[#1b2b4b] bg-white border-green-200 hover:bg-[#f3fcf0]">
            <LineChart size={13} />
            <span>Graph</span>
          </button>
        )}

        {canWrite && <div className="w-px h-5 bg-green-100" />}

        {/* Text-to-speech — available to everyone */}
        <button
          onMouseDown={e => { e.preventDefault(); speaking ? stopSpeaking() : speakContent() }}
          title={speaking ? 'Stop reading' : 'Select text to read just that part, or read the whole document'}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${speaking ? 'bg-[#1b2b4b] text-white border-[#1b2b4b]' : 'text-[#1b2b4b] bg-white border-green-200 hover:bg-[#f3fcf0]'}`}>
          {speaking ? <VolumeX size={13} /> : <Volume2 size={13} />}
          {speaking ? 'Stop Reading' : 'Read Aloud'}
        </button>
      </div>

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
      {showGraphModal && <GraphModal onInsert={handleGraphInsert} onClose={() => setShowGraphModal(false)} />}
      {showDrawingModal && <DrawingModal onInsert={handleDrawingInsert} onClose={() => setShowDrawingModal(false)} />}

      {showMathModal && (
        <MathModal
          onInsert={insertEquation}
          onClose={() => setShowMathModal(false)}
        />
      )}

      {mathEdit && (
        <MathModal
          initialLatex={mathEdit.latex}
          initialDisplay={mathEdit.display}
          onInsert={(latex, display) => {
            mathEdit.apply(latex, display)
            setMathEdit(null)
            lastBroadcast.current = 0
            if (editor) broadcastContent(editor.getJSON())
          }}
          onDelete={() => {
            mathEdit.remove()
            setMathEdit(null)
            lastBroadcast.current = 0
            if (editor) broadcastContent(editor.getJSON())
          }}
          onClose={() => setMathEdit(null)}
        />
      )}

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

      {fullscreenCad && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/90">
          <div className="flex items-center gap-3 px-4 py-2 bg-[#1b2b4b] shrink-0">
            <span className="text-base leading-none">📐</span>
            <span className="text-sm font-medium text-white flex-1 truncate">{fullscreenCad.filename}</span>
            {isTeacher ? (
              <button
                onClick={() => {
                  setFullscreenCad(null)
                  channelRef.current?.send({
                    type: 'broadcast', event: 'cad_fullscreen',
                    payload: { open: false, senderId: myId },
                  })
                }}
                className="flex items-center gap-1 text-xs bg-red-500/20 hover:bg-red-500/30 text-red-300 px-2 py-1 rounded transition-colors">
                <X size={12} /> Close for everyone
              </button>
            ) : (
              <button onClick={() => setFullscreenCad(null)}
                className="p-1 text-white/70 hover:text-white transition-colors rounded">
                <X size={16} />
              </button>
            )}
          </div>
          <div className="flex-1 min-h-0">
            {fullscreenCad.kind === 'dxf'
              ? <DxfViewer src={fullscreenCad.src} />
              : <CadViewer urn={fullscreenCad.urn} />}
          </div>
        </div>
      )}
    </div>
  )
}
