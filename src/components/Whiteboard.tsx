import { useEffect, useRef, useCallback, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Pencil, Eraser, Trash2 } from 'lucide-react'

interface Props {
  sessionId: string
  isTeacher: boolean
  canDraw: boolean
}

type Point = { x: number; y: number }
type Stroke = { points: Point[]; color: string; width: number; tool: 'pen' | 'eraser' }

const COLORS = ['#1b2b4b', '#ef4444', '#3b82f6', '#5ab82e', '#f59e0b', '#8b5cf6', '#000000']
const SIZES = [2, 5, 12]

export default function Whiteboard({ sessionId, isTeacher, canDraw }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null)
  const isDrawing = useRef(false)
  const currentStroke = useRef<Stroke | null>(null)
  const allStrokes = useRef<Stroke[]>([])
  const lastBroadcast = useRef(0)

  const [color, setColor] = useState('#1b2b4b')
  const [size, setSize] = useState(2)
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen')

  const locked = !isTeacher && !canDraw

  // Keep refs in sync so touch handlers always read current values
  const lockedRef = useRef(locked)
  const colorRef = useRef(color)
  const sizeRef = useRef(size)
  const toolRef = useRef(tool)
  useEffect(() => { lockedRef.current = locked }, [locked])
  useEffect(() => { colorRef.current = color }, [color])
  useEffect(() => { sizeRef.current = size }, [size])
  useEffect(() => { toolRef.current = tool }, [tool])

  const redraw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const stroke of allStrokes.current) {
      if (stroke.points.length < 2) continue
      ctx.save()
      ctx.beginPath()
      ctx.lineWidth = stroke.width
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      if (stroke.tool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out'
        ctx.strokeStyle = 'rgba(0,0,0,1)'
      } else {
        ctx.globalCompositeOperation = 'source-over'
        ctx.strokeStyle = stroke.color
      }
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y)
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y)
      }
      ctx.stroke()
      ctx.restore()
    }
  }, [])

  const fitCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    canvas.width = container.clientWidth
    canvas.height = container.clientHeight
    redraw()
  }, [redraw])

  useEffect(() => {
    fitCanvas()
    const ro = new ResizeObserver(fitCanvas)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [fitCanvas])

  useEffect(() => {
    const channel = supabase
      .channel(`whiteboard:${sessionId}`)
      .on('broadcast', { event: 'wb_strokes' }, ({ payload }) => {
        allStrokes.current = payload.strokes ?? []
        redraw()
      })
      .on('broadcast', { event: 'wb_clear' }, () => {
        allStrokes.current = []
        redraw()
      })
      .on('broadcast', { event: 'wb_sync_req' }, () => {
        if (allStrokes.current.length > 0) {
          channel.send({ type: 'broadcast', event: 'wb_strokes', payload: { strokes: allStrokes.current } })
        }
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          channel.send({ type: 'broadcast', event: 'wb_sync_req', payload: {} })
        }
      })
    channelRef.current = channel
    return () => { supabase.removeChannel(channel) }
  }, [sessionId, redraw])

  const broadcastStrokes = useCallback(() => {
    const now = Date.now()
    if (now - lastBroadcast.current < 60) return
    lastBroadcast.current = now
    channelRef.current?.send({
      type: 'broadcast',
      event: 'wb_strokes',
      payload: { strokes: allStrokes.current },
    })
  }, [])

  // ── Mouse events ────────────────────────────────────────────────────────────
  const getMousePos = (e: React.MouseEvent<HTMLCanvasElement>): Point => {
    const rect = canvasRef.current!.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (locked) return
    isDrawing.current = true
    const stroke: Stroke = { points: [getMousePos(e)], color, width: size, tool }
    currentStroke.current = stroke
    allStrokes.current = [...allStrokes.current, stroke]
  }

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || !currentStroke.current || locked) return
    currentStroke.current.points.push(getMousePos(e))
    redraw()
    broadcastStrokes()
  }

  const onMouseUp = () => {
    if (isDrawing.current) broadcastStrokes()
    isDrawing.current = false
    currentStroke.current = null
  }

  // ── Touch events (passive: false to allow preventDefault) ───────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const getPos = (touch: Touch): Point => {
      const rect = canvas.getBoundingClientRect()
      return { x: touch.clientX - rect.left, y: touch.clientY - rect.top }
    }

    const onTouchStart = (e: TouchEvent) => {
      if (lockedRef.current) return
      e.preventDefault()
      const point = getPos(e.touches[0])
      isDrawing.current = true
      const stroke: Stroke = {
        points: [point],
        color: colorRef.current,
        width: sizeRef.current,
        tool: toolRef.current,
      }
      currentStroke.current = stroke
      allStrokes.current = [...allStrokes.current, stroke]
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isDrawing.current || !currentStroke.current || lockedRef.current) return
      e.preventDefault()
      currentStroke.current.points.push(getPos(e.touches[0]))
      redraw()
      broadcastStrokes()
    }

    const onTouchEnd = () => {
      if (isDrawing.current) broadcastStrokes()
      isDrawing.current = false
      currentStroke.current = null
    }

    canvas.addEventListener('touchstart', onTouchStart, { passive: false })
    canvas.addEventListener('touchmove', onTouchMove, { passive: false })
    canvas.addEventListener('touchend', onTouchEnd)
    return () => {
      canvas.removeEventListener('touchstart', onTouchStart)
      canvas.removeEventListener('touchmove', onTouchMove)
      canvas.removeEventListener('touchend', onTouchEnd)
    }
  }, [redraw, broadcastStrokes])

  const clearBoard = () => {
    allStrokes.current = []
    redraw()
    channelRef.current?.send({ type: 'broadcast', event: 'wb_clear', payload: {} })
  }

  return (
    <div className="h-full w-full flex flex-col">
      {/* Toolbar — only for users who can draw */}
      {!locked && (
        <div className="flex items-center gap-2 px-3 py-2 border-b border-green-100 bg-white shrink-0 flex-wrap">
          <div className="flex items-center bg-[#f3fcf0] rounded-lg p-0.5 gap-0.5 border border-green-200">
            <button
              onClick={() => setTool('pen')}
              title="Pen"
              className={`p-2 rounded-md transition-colors ${tool === 'pen' ? 'bg-[#5ab82e] text-white shadow-sm' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}
            >
              <Pencil size={15} />
            </button>
            <button
              onClick={() => setTool('eraser')}
              title="Eraser"
              className={`p-2 rounded-md transition-colors ${tool === 'eraser' ? 'bg-[#1b2b4b] text-white shadow-sm' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}
            >
              <Eraser size={15} />
            </button>
          </div>

          <div className="w-px h-5 bg-green-100 hidden sm:block" />

          <div className="flex items-center gap-1.5 flex-wrap">
            {COLORS.map(c => (
              <button
                key={c}
                onClick={() => { setColor(c); setTool('pen') }}
                title={c}
                className={`w-7 h-7 rounded-full border-2 transition-all hover:scale-110 ${color === c && tool === 'pen' ? 'border-[#5ab82e] scale-110' : 'border-gray-200'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          <div className="w-px h-5 bg-green-100 hidden sm:block" />

          <div className="flex items-center gap-1">
            {SIZES.map(s => (
              <button
                key={s}
                onClick={() => setSize(s)}
                title={`Size ${s}`}
                className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${size === s ? 'bg-[#f3fcf0] ring-1 ring-[#5ab82e]' : 'hover:bg-[#f3fcf0]'}`}
              >
                <div className="rounded-full bg-[#1b2b4b]" style={{ width: s * 2.2, height: s * 2.2 }} />
              </button>
            ))}
          </div>

          {isTeacher && (
            <>
              <div className="w-px h-5 bg-green-100 hidden sm:block" />
              <button
                onClick={clearBoard}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-red-100"
              >
                <Trash2 size={13} /> Clear
              </button>
            </>
          )}
        </div>
      )}

      {/* Drawing canvas */}
      <div ref={containerRef} className="flex-1 relative overflow-hidden bg-white">
        {locked && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur border border-green-200 rounded-full px-4 py-1.5 text-xs text-[#6b7280] pointer-events-none shadow-sm whitespace-nowrap">
            View only — tap "Request Board" to draw
          </div>
        )}
        <canvas
          ref={canvasRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            touchAction: 'none',
            cursor: locked ? 'default' : tool === 'eraser' ? 'cell' : 'crosshair',
          }}
        />
      </div>
    </div>
  )
}
