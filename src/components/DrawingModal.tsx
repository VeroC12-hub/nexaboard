import { useState, useRef, useCallback, useEffect } from 'react'
import { X, Pencil, Square, Circle, Minus, ArrowRight, Triangle, Eraser, Trash2, Undo2 } from 'lucide-react'

type Point = { x: number; y: number }
type Tool = 'pen' | 'rect' | 'circle' | 'line' | 'arrow' | 'triangle' | 'eraser'

interface Shape {
  tool: Tool
  points: Point[]
  color: string
  width: number
  fill: boolean
}

interface Props {
  onInsert: (dataUrl: string) => void
  onClose: () => void
}

const COLORS = ['#1b2b4b', '#ef4444', '#3b82f6', '#5ab82e', '#f59e0b', '#8b5cf6', '#ec4899', '#000000']
const SIZES = [2, 5, 10]

const TOOLS: [Tool, React.ElementType, string][] = [
  ['pen', Pencil, 'Freehand'],
  ['rect', Square, 'Rectangle'],
  ['circle', Circle, 'Circle'],
  ['line', Minus, 'Line'],
  ['arrow', ArrowRight, 'Arrow'],
  ['triangle', Triangle, 'Triangle'],
  ['eraser', Eraser, 'Eraser'],
]

function drawShape(ctx: CanvasRenderingContext2D, shape: Shape) {
  if (shape.points.length < 1) return
  ctx.save()
  ctx.strokeStyle = shape.color
  ctx.fillStyle = shape.color + '88'
  ctx.lineWidth = shape.width
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  const p = shape.points
  switch (shape.tool) {
    case 'pen': {
      if (p.length < 2) break
      ctx.globalCompositeOperation = 'source-over'
      ctx.beginPath(); ctx.moveTo(p[0].x, p[0].y)
      for (let i = 1; i < p.length; i++) ctx.lineTo(p[i].x, p[i].y)
      ctx.stroke(); break
    }
    case 'eraser': {
      if (p.length < 2) break
      ctx.globalCompositeOperation = 'destination-out'
      ctx.strokeStyle = 'rgba(0,0,0,1)'; ctx.lineWidth = shape.width * 4
      ctx.beginPath(); ctx.moveTo(p[0].x, p[0].y)
      for (let i = 1; i < p.length; i++) ctx.lineTo(p[i].x, p[i].y)
      ctx.stroke(); break
    }
    case 'rect': {
      if (p.length < 2) break
      const x = Math.min(p[0].x, p[1].x), y = Math.min(p[0].y, p[1].y)
      const w = Math.abs(p[1].x - p[0].x), h = Math.abs(p[1].y - p[0].y)
      ctx.beginPath(); ctx.rect(x, y, w, h)
      if (shape.fill) ctx.fill(); ctx.stroke(); break
    }
    case 'circle': {
      if (p.length < 2) break
      const cx = (p[0].x + p[1].x) / 2, cy = (p[0].y + p[1].y) / 2
      const rx = Math.abs(p[1].x - p[0].x) / 2, ry = Math.abs(p[1].y - p[0].y) / 2
      ctx.beginPath(); ctx.ellipse(cx, cy, Math.max(rx, 1), Math.max(ry, 1), 0, 0, Math.PI * 2)
      if (shape.fill) ctx.fill(); ctx.stroke(); break
    }
    case 'line': {
      if (p.length < 2) break
      ctx.beginPath(); ctx.moveTo(p[0].x, p[0].y); ctx.lineTo(p[1].x, p[1].y); ctx.stroke(); break
    }
    case 'arrow': {
      if (p.length < 2) break
      const angle = Math.atan2(p[1].y - p[0].y, p[1].x - p[0].x)
      const head = Math.max(14, shape.width * 5)
      ctx.beginPath(); ctx.moveTo(p[0].x, p[0].y); ctx.lineTo(p[1].x, p[1].y); ctx.stroke()
      ctx.fillStyle = shape.color; ctx.beginPath(); ctx.moveTo(p[1].x, p[1].y)
      ctx.lineTo(p[1].x - head * Math.cos(angle - Math.PI / 6), p[1].y - head * Math.sin(angle - Math.PI / 6))
      ctx.lineTo(p[1].x - head * Math.cos(angle + Math.PI / 6), p[1].y - head * Math.sin(angle + Math.PI / 6))
      ctx.closePath(); ctx.fill(); break
    }
    case 'triangle': {
      if (p.length < 2) break
      const tx = Math.min(p[0].x, p[1].x), ty = Math.min(p[0].y, p[1].y)
      const tw = Math.abs(p[1].x - p[0].x), th = Math.abs(p[1].y - p[0].y)
      ctx.beginPath(); ctx.moveTo(tx + tw / 2, ty); ctx.lineTo(tx + tw, ty + th); ctx.lineTo(tx, ty + th)
      ctx.closePath(); if (shape.fill) ctx.fill(); ctx.stroke(); break
    }
  }
  ctx.restore()
}

export default function DrawingModal({ onInsert, onClose }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shapes = useRef<Shape[]>([])
  const isDrawing = useRef(false)
  const startPt = useRef<Point>({ x: 0, y: 0 })
  const livePts = useRef<Point[]>([])

  const [tool, setTool] = useState<Tool>('pen')
  const [color, setColor] = useState('#1b2b4b')
  const [size, setSize] = useState(2)
  const [fill, setFill] = useState(false)

  // Refs so touch handlers always read latest state
  const toolRef = useRef(tool)
  const colorRef = useRef(color)
  const sizeRef = useRef(size)
  const fillRef = useRef(fill)
  useEffect(() => { toolRef.current = tool }, [tool])
  useEffect(() => { colorRef.current = color }, [color])
  useEffect(() => { sizeRef.current = size }, [size])
  useEffect(() => { fillRef.current = fill }, [fill])

  const redraw = useCallback((preview?: Shape) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const s of shapes.current) drawShape(ctx, s)
    if (preview) drawShape(ctx, preview)
  }, [])

  // ── Mouse events ────────────────────────────────────────────────────────────
  const getMousePos = (e: React.MouseEvent<HTMLCanvasElement>): Point => {
    const r = canvasRef.current!.getBoundingClientRect()
    return { x: e.clientX - r.left, y: e.clientY - r.top }
  }

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDrawing.current = true
    const pt = getMousePos(e)
    startPt.current = pt; livePts.current = [pt]
  }

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return
    const pt = getMousePos(e)
    if (tool === 'pen' || tool === 'eraser') livePts.current.push(pt)
    else livePts.current = [startPt.current, pt]
    redraw({ tool, points: livePts.current, color, width: size, fill })
  }

  const onMouseUp = () => {
    if (!isDrawing.current) return
    isDrawing.current = false
    if (livePts.current.length >= 2) {
      shapes.current = [...shapes.current, { tool, points: [...livePts.current], color, width: size, fill }]
    }
    livePts.current = []; redraw()
  }

  // ── Touch events ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const getPos = (touch: Touch): Point => {
      const r = canvas.getBoundingClientRect()
      return { x: touch.clientX - r.left, y: touch.clientY - r.top }
    }

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      isDrawing.current = true
      const pt = getPos(e.touches[0])
      startPt.current = pt; livePts.current = [pt]
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isDrawing.current) return
      e.preventDefault()
      const pt = getPos(e.touches[0])
      const t = toolRef.current
      if (t === 'pen' || t === 'eraser') livePts.current.push(pt)
      else livePts.current = [startPt.current, pt]
      redraw({ tool: t, points: livePts.current, color: colorRef.current, width: sizeRef.current, fill: fillRef.current })
    }

    const onTouchEnd = () => {
      if (!isDrawing.current) return
      isDrawing.current = false
      if (livePts.current.length >= 2) {
        shapes.current = [...shapes.current, {
          tool: toolRef.current, points: [...livePts.current],
          color: colorRef.current, width: sizeRef.current, fill: fillRef.current,
        }]
      }
      livePts.current = []; redraw()
    }

    canvas.addEventListener('touchstart', onTouchStart, { passive: false })
    canvas.addEventListener('touchmove', onTouchMove, { passive: false })
    canvas.addEventListener('touchend', onTouchEnd)
    return () => {
      canvas.removeEventListener('touchstart', onTouchStart)
      canvas.removeEventListener('touchmove', onTouchMove)
      canvas.removeEventListener('touchend', onTouchEnd)
    }
  }, [redraw])

  const undo = () => { shapes.current = shapes.current.slice(0, -1); redraw() }
  const clear = () => { shapes.current = []; redraw() }
  const insert = () => { const c = canvasRef.current; if (c) onInsert(c.toDataURL('image/png')) }
  const fillable = ['rect', 'circle', 'triangle'].includes(tool)

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col w-full sm:max-w-[700px] max-h-[95vh] sm:max-h-[90vh] sm:mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-green-100 shrink-0">
          <h2 className="text-base font-bold text-[#1b2b4b]">Draw &amp; Shapes</h2>
          <button onClick={onClose} className="text-[#9ca3af] hover:text-[#1b2b4b] transition-colors p-1"><X size={18} /></button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-green-100 shrink-0 flex-wrap bg-[#fafffe]">
          <div className="flex items-center bg-white border border-green-200 rounded-lg p-0.5 gap-0.5 flex-wrap">
            {TOOLS.map(([t, Icon, label]) => (
              <button key={t} onClick={() => setTool(t)} title={label}
                className={`p-2 rounded-md transition-colors ${tool === t ? 'bg-[#5ab82e] text-white' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}>
                <Icon size={15} />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {COLORS.map(c => (
              <button key={c} onClick={() => setColor(c)}
                className={`w-7 h-7 rounded-full border-2 transition-all ${color === c ? 'border-[#1b2b4b] scale-110' : 'border-gray-200'}`}
                style={{ backgroundColor: c }} />
            ))}
          </div>

          <div className="flex items-center gap-1">
            {SIZES.map(s => (
              <button key={s} onClick={() => setSize(s)}
                className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${size === s ? 'bg-[#f3fcf0] ring-1 ring-[#5ab82e]' : 'hover:bg-[#f3fcf0]'}`}>
                <div className="rounded-full bg-[#1b2b4b]" style={{ width: s * 2.5, height: s * 2.5 }} />
              </button>
            ))}
          </div>

          {fillable && (
            <button onClick={() => setFill(v => !v)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${fill ? 'bg-[#5ab82e] text-white border-[#5ab82e]' : 'border-green-200 text-[#6b7280]'}`}>
              Fill
            </button>
          )}

          <div className="ml-auto flex gap-1.5">
            <button onClick={undo} className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-[#6b7280] border border-green-200 rounded-lg">
              <Undo2 size={12} /> Undo
            </button>
            <button onClick={clear} className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-red-500 border border-red-100 rounded-lg">
              <Trash2 size={12} /> Clear
            </button>
          </div>
        </div>

        {/* Canvas — scrollable on small screens */}
        <div className="flex-1 overflow-auto p-3 bg-[#f8fffe] flex items-start justify-center">
          <canvas
            ref={canvasRef}
            width={620}
            height={360}
            className="bg-white rounded-xl shadow-sm border border-green-100 touch-none"
            style={{ cursor: tool === 'eraser' ? 'cell' : 'crosshair', display: 'block' }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t border-green-100 shrink-0">
          <button onClick={onClose}
            className="px-4 py-2 text-sm text-[#6b7280] border border-green-200 rounded-lg transition-colors">
            Cancel
          </button>
          <button onClick={insert}
            className="px-5 py-2 text-sm font-semibold bg-[#5ab82e] hover:bg-[#489f22] text-white rounded-lg transition-colors">
            Insert Drawing
          </button>
        </div>
      </div>
    </div>
  )
}
