import { useEffect, useRef, useCallback, useState, useMemo } from 'react'
import { supabase } from '../lib/supabase'
import { Pencil, Eraser, Trash2, Hand, Sigma, X, Plus, Minus, ChevronDown, ChevronUp, LineChart, BarChart2, ImageIcon } from 'lucide-react'
import MathModal from './MathModal'
import GraphModal from './GraphModal'
import ChartModal from './ChartModal'
import { renderMath } from '../lib/math'
import toast from 'react-hot-toast'

interface Props {
  sessionId: string
  isTeacher: boolean
  canDraw: boolean
}

type Point = { x: number; y: number }
type Tool = 'pen' | 'eraser' | 'pan'
type Stroke = { points: Point[]; color: string; width: number; tool: 'pen' | 'eraser' }
/** An equation placed on the board, positioned in board pixels. */
type MathItem = { id: string; latex: string; x: number; y: number; scale: number }
/** A graph, chart or pasted picture placed on the board. */
type ImageItem = { id: string; src: string; x: number; y: number; width: number }

const COLORS = ['#1b2b4b', '#ef4444', '#3b82f6', '#5ab82e', '#f59e0b', '#8b5cf6', '#000000']
const SIZES = [2, 5, 12]

/** The board is always at least this tall, and grows as you draw near the bottom. */
const MIN_BOARD_HEIGHT = 1600
const GROW_STEP = 800
const GROW_MARGIN = 320

export default function Whiteboard({ sessionId, isTeacher, canDraw }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null)
  const isDrawing = useRef(false)
  const currentStroke = useRef<Stroke | null>(null)
  const allStrokes = useRef<Stroke[]>([])
  const lastBroadcast = useRef(0)

  const [color, setColor] = useState('#1b2b4b')
  const [size, setSize] = useState(2)
  const [tool, setTool] = useState<Tool>('pen')
  const [boardHeight, setBoardHeight] = useState(MIN_BOARD_HEIGHT)
  const [mathItems, setMathItems] = useState<MathItem[]>([])
  const [imageItems, setImageItems] = useState<ImageItem[]>([])
  const [showMathModal, setShowMathModal] = useState(false)
  const [showGraphModal, setShowGraphModal] = useState(false)
  const [showChartModal, setShowChartModal] = useState(false)
  const [editingMath, setEditingMath] = useState<MathItem | null>(null)
  // Students follow the teacher's scroll position until they scroll themselves.
  const [following, setFollowing] = useState(!isTeacher)
  // Which way the "back to live" arrow points once a student has scrolled off.
  const [teacherAbove, setTeacherAbove] = useState(false)

  const locked = !isTeacher && !canDraw

  // Keep refs in sync so touch handlers always read current values
  const lockedRef = useRef(locked)
  const colorRef = useRef(color)
  const sizeRef = useRef(size)
  const toolRef = useRef(tool)
  const boardHeightRef = useRef(boardHeight)
  const mathItemsRef = useRef(mathItems)
  const imageItemsRef = useRef(imageItems)
  const followingRef = useRef(following)
  const teacherScrollTop = useRef(0)
  const lastViewBroadcast = useRef(0)
  useEffect(() => { lockedRef.current = locked }, [locked])
  useEffect(() => { colorRef.current = color }, [color])
  useEffect(() => { sizeRef.current = size }, [size])
  useEffect(() => { toolRef.current = tool }, [tool])
  useEffect(() => { boardHeightRef.current = boardHeight }, [boardHeight])
  useEffect(() => { mathItemsRef.current = mathItems }, [mathItems])
  useEffect(() => { imageItemsRef.current = imageItems }, [imageItems])
  useEffect(() => { followingRef.current = following }, [following])

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
    canvas.height = boardHeightRef.current
    redraw()
  }, [redraw])

  useEffect(() => {
    fitCanvas()
    const ro = new ResizeObserver(fitCanvas)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [fitCanvas])

  // The board is a fixed-width, growing-height page — resizing the canvas wipes it,
  // so every height change has to redraw.
  useEffect(() => { fitCanvas() }, [boardHeight, fitCanvas])

  /** Grow the page when a stroke reaches the bottom, so you can just keep writing. */
  const growIfNeeded = useCallback((y: number) => {
    if (y < boardHeightRef.current - GROW_MARGIN) return
    const next = boardHeightRef.current + GROW_STEP
    boardHeightRef.current = next
    setBoardHeight(next)
  }, [])

  /** Where the teacher is looking, clamped to how far this board can actually scroll. */
  const followTarget = (el: HTMLDivElement) =>
    Math.max(0, Math.min(teacherScrollTop.current, el.scrollHeight - el.clientHeight))

  /** Move a student's view to wherever the teacher is looking. */
  const scrollToTeacher = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    // Instant, not smooth: a smooth animation is throttled in background tabs and
    // lags behind a teacher who keeps scrolling.
    el.scrollTop = followTarget(el)
  }, [])

  /**
   * The teacher's scroll position drives everyone else's, so students still see
   * what is being written when it goes below the fold.
   */
  const onScroll = useCallback(() => {
    const el = containerRef.current
    if (isTeacher) {
      const now = Date.now()
      if (now - lastViewBroadcast.current < 150) return
      lastViewBroadcast.current = now
      channelRef.current?.send({
        type: 'broadcast',
        event: 'wb_view',
        payload: { scrollTop: el?.scrollTop ?? 0, boardHeight: boardHeightRef.current },
      })
      return
    }
    if (!el) return
    const target = followTarget(el)
    // A follow-scroll lands exactly on the teacher's position. So does a student who
    // scrolls back onto it by hand, which quietly puts them back on live.
    if (Math.abs(el.scrollTop - target) < 4) {
      if (!followingRef.current) setFollowing(true)
      return
    }
    // Anything else is the student scrolling away, which hands their view back to them.
    if (followingRef.current) setFollowing(false)
    setTeacherAbove(target < el.scrollTop)
  }, [isTeacher])

  // ── Realtime sync ───────────────────────────────────────────────────────────
  useEffect(() => {
    const channel = supabase
      .channel(`whiteboard:${sessionId}`)
      .on('broadcast', { event: 'wb_strokes' }, ({ payload }) => {
        allStrokes.current = payload.strokes ?? []
        if (payload.boardHeight && payload.boardHeight > boardHeightRef.current) {
          boardHeightRef.current = payload.boardHeight
          setBoardHeight(payload.boardHeight)
        }
        redraw()
      })
      .on('broadcast', { event: 'wb_math' }, ({ payload }) => {
        setMathItems(payload.items ?? [])
        if (payload.boardHeight && payload.boardHeight > boardHeightRef.current) {
          boardHeightRef.current = payload.boardHeight
          setBoardHeight(payload.boardHeight)
        }
      })
      .on('broadcast', { event: 'wb_images' }, ({ payload }) => {
        setImageItems(payload.items ?? [])
        if (payload.boardHeight && payload.boardHeight > boardHeightRef.current) {
          boardHeightRef.current = payload.boardHeight
          setBoardHeight(payload.boardHeight)
        }
      })
      .on('broadcast', { event: 'wb_view' }, ({ payload }) => {
        if (isTeacher) return
        if (payload.boardHeight && payload.boardHeight > boardHeightRef.current) {
          boardHeightRef.current = payload.boardHeight
          setBoardHeight(payload.boardHeight)
        }
        teacherScrollTop.current = payload.scrollTop ?? 0
        if (!followingRef.current) {
          // Keep the arrow pointing the right way as the teacher moves around.
          const el = containerRef.current
          if (el) setTeacherAbove(followTarget(el) < el.scrollTop)
          return
        }
        scrollToTeacher()
      })
      .on('broadcast', { event: 'wb_clear' }, () => {
        allStrokes.current = []
        setMathItems([])
        setImageItems([])
        redraw()
      })
      .on('broadcast', { event: 'wb_sync_req' }, () => {
        if (allStrokes.current.length > 0) {
          channel.send({
            type: 'broadcast', event: 'wb_strokes',
            payload: { strokes: allStrokes.current, boardHeight: boardHeightRef.current },
          })
        }
        if (mathItemsRef.current.length > 0) {
          channel.send({
            type: 'broadcast', event: 'wb_math',
            payload: { items: mathItemsRef.current, boardHeight: boardHeightRef.current },
          })
        }
        if (imageItemsRef.current.length > 0) {
          channel.send({
            type: 'broadcast', event: 'wb_images',
            payload: { items: imageItemsRef.current, boardHeight: boardHeightRef.current },
          })
        }
        // Land a student who just joined on the part of the board being taught.
        if (isTeacher) {
          channel.send({
            type: 'broadcast', event: 'wb_view',
            payload: { scrollTop: containerRef.current?.scrollTop ?? 0, boardHeight: boardHeightRef.current },
          })
        }
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          channel.send({ type: 'broadcast', event: 'wb_sync_req', payload: {} })
        }
      })
    channelRef.current = channel
    return () => { supabase.removeChannel(channel) }
  }, [sessionId, redraw, isTeacher, scrollToTeacher])

  const broadcastStrokes = useCallback(() => {
    const now = Date.now()
    if (now - lastBroadcast.current < 60) return
    lastBroadcast.current = now
    channelRef.current?.send({
      type: 'broadcast',
      event: 'wb_strokes',
      payload: { strokes: allStrokes.current, boardHeight: boardHeightRef.current },
    })
  }, [])

  const broadcastMath = useCallback((items: MathItem[]) => {
    channelRef.current?.send({
      type: 'broadcast',
      event: 'wb_math',
      payload: { items, boardHeight: boardHeightRef.current },
    })
  }, [])

  // ── Mouse events ────────────────────────────────────────────────────────────
  // getBoundingClientRect already accounts for scroll, so these are board coordinates.
  const getMousePos = (e: React.MouseEvent<HTMLCanvasElement>): Point => {
    const rect = canvasRef.current!.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (locked || tool === 'pan') return
    isDrawing.current = true
    const stroke: Stroke = { points: [getMousePos(e)], color, width: size, tool }
    currentStroke.current = stroke
    allStrokes.current = [...allStrokes.current, stroke]
  }

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || !currentStroke.current || locked) return
    const point = getMousePos(e)
    currentStroke.current.points.push(point)
    growIfNeeded(point.y)
    redraw()
    broadcastStrokes()
  }

  const onMouseUp = () => {
    if (isDrawing.current) {
      lastBroadcast.current = 0
      broadcastStrokes()
    }
    isDrawing.current = false
    currentStroke.current = null
  }

  // ── Touch events (passive: false to allow preventDefault) ───────────────────
  // One finger draws; two fingers (or the Pan tool) scroll the page.
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const getPos = (touch: Touch): Point => {
      const rect = canvas.getBoundingClientRect()
      return { x: touch.clientX - rect.left, y: touch.clientY - rect.top }
    }

    const onTouchStart = (e: TouchEvent) => {
      if (lockedRef.current || toolRef.current === 'pan' || e.touches.length > 1) return
      e.preventDefault()
      const point = getPos(e.touches[0])
      isDrawing.current = true
      const stroke: Stroke = {
        points: [point],
        color: colorRef.current,
        width: sizeRef.current,
        tool: toolRef.current === 'eraser' ? 'eraser' : 'pen',
      }
      currentStroke.current = stroke
      allStrokes.current = [...allStrokes.current, stroke]
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isDrawing.current || !currentStroke.current || lockedRef.current) return
      if (e.touches.length > 1) { isDrawing.current = false; currentStroke.current = null; return }
      e.preventDefault()
      const point = getPos(e.touches[0])
      currentStroke.current.points.push(point)
      growIfNeeded(point.y)
      redraw()
      broadcastStrokes()
    }

    const onTouchEnd = () => {
      if (isDrawing.current) {
        lastBroadcast.current = 0
        broadcastStrokes()
      }
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
  }, [redraw, broadcastStrokes, growIfNeeded])

  const clearBoard = () => {
    allStrokes.current = []
    setMathItems([])
    redraw()
    channelRef.current?.send({ type: 'broadcast', event: 'wb_clear', payload: {} })
  }

  const addSpace = () => {
    const next = boardHeightRef.current + GROW_STEP
    boardHeightRef.current = next
    setBoardHeight(next)
    containerRef.current?.scrollTo({ top: next, behavior: 'smooth' })
    lastBroadcast.current = 0
    broadcastStrokes()
  }

  const scrollDown = () => {
    const el = containerRef.current
    if (!el) return
    el.scrollTo({ top: el.scrollTop + el.clientHeight * 0.85, behavior: 'smooth' })
  }

  // ── Equations ───────────────────────────────────────────────────────────────
  const commitMath = (items: MathItem[]) => {
    setMathItems(items)
    mathItemsRef.current = items
    broadcastMath(items)
  }

  const insertMath = (latex: string) => {
    const el = containerRef.current
    // Drop it near the top-left of whatever the user is currently looking at.
    const x = 60
    const y = (el?.scrollTop ?? 0) + 80
    commitMath([...mathItemsRef.current, { id: crypto.randomUUID(), latex, x, y, scale: 1 }])
    setShowMathModal(false)
  }

  const updateMath = (id: string, patch: Partial<MathItem>) => {
    commitMath(mathItemsRef.current.map(m => (m.id === id ? { ...m, ...patch } : m)))
  }

  const deleteMath = (id: string) => {
    commitMath(mathItemsRef.current.filter(m => m.id !== id))
  }

  // ── Graphs, charts and pasted pictures ──────────────────────────────────────
  const commitImages = (items: ImageItem[]) => {
    setImageItems(items)
    imageItemsRef.current = items
    channelRef.current?.send({
      type: 'broadcast',
      event: 'wb_images',
      payload: { items, boardHeight: boardHeightRef.current },
    })
  }

  const placeImage = (src: string, width = 420) => {
    const el = containerRef.current
    const top = el?.scrollTop ?? 0
    // Cascade anything already dropped on this screenful so items do not land
    // exactly on top of each other.
    const nearby = imageItemsRef.current.filter(
      m => m.y > top && m.y < top + (el?.clientHeight ?? 600),
    ).length
    commitImages([
      ...imageItemsRef.current,
      { id: crypto.randomUUID(), src, x: 60 + nearby * 28, y: top + 70 + nearby * 28, width },
    ])
  }

  /**
   * Board items are broadcast in full on every change, so a base64 picture would
   * be re-sent on each nudge. Upload it once and share the URL instead, falling
   * back to inline data only if storage is unavailable.
   */
  const uploadAndPlace = useCallback(async (blob: Blob, name: string, fallbackDataUrl?: string) => {
    const toastId = toast.loading('Adding to board…')
    try {
      const ext = (blob.type.split('/')[1] || 'png').replace('+xml', '')
      const path = `${sessionId}/board-${Date.now()}-${name}.${ext}`
      const { error } = await supabase.storage.from('session-files')
        .upload(path, blob, { upsert: true, contentType: blob.type || 'image/png' })
      if (error) throw error
      const { data: { publicUrl } } = supabase.storage.from('session-files').getPublicUrl(path)
      placeImage(publicUrl)
      toast.success('Added to board', { id: toastId })
    } catch (err) {
      if (fallbackDataUrl) {
        placeImage(fallbackDataUrl)
        toast.success('Added to board', { id: toastId })
        return
      }
      const msg = err instanceof Error ? err.message : String(err)
      toast.error(`Could not add image: ${msg}`, { id: toastId })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId])

  const placeDataUrl = async (dataUrl: string, name: string) => {
    try {
      const blob = await (await fetch(dataUrl)).blob()
      await uploadAndPlace(blob, name, dataUrl)
    } catch {
      placeImage(dataUrl)
    }
  }

  // Paste a graph, chart or screenshot straight onto the board
  useEffect(() => {
    if (locked) return
    const handler = (e: ClipboardEvent) => {
      const files = Array.from(e.clipboardData?.files ?? []).filter(f => f.type.startsWith('image/'))
      if (!files.length) return
      e.preventDefault()
      files.forEach(file => { void uploadAndPlace(file, 'pasted') })
    }
    window.addEventListener('paste', handler)
    return () => window.removeEventListener('paste', handler)
  }, [locked, uploadAndPlace])

  const updateImage = (id: string, patch: Partial<ImageItem>) => {
    commitImages(imageItemsRef.current.map(m => (m.id === id ? { ...m, ...patch } : m)))
  }

  const deleteImage = (id: string) => {
    commitImages(imageItemsRef.current.filter(m => m.id !== id))
  }

  return (
    <div className="h-full w-full flex flex-col relative">
      <input ref={imageInputRef} type="file" accept="image/*" className="hidden"
        onChange={e => {
          const file = e.target.files?.[0]
          e.target.value = ''
          if (file) void uploadAndPlace(file, 'image')
        }} />

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
            <button
              onClick={() => setTool('pan')}
              title="Scroll the board with your finger or mouse"
              className={`p-2 rounded-md transition-colors ${tool === 'pan' ? 'bg-[#1b2b4b] text-white shadow-sm' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}
            >
              <Hand size={15} />
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

          <div className="w-px h-5 bg-green-100 hidden sm:block" />

          <button
            onClick={() => setShowMathModal(true)}
            title="Type a maths equation onto the board"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] transition-colors"
          >
            <Sigma size={13} /> Equation
          </button>

          <button
            onClick={() => setShowGraphModal(true)}
            title="Plot a function such as y = x² or y = sin(x)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] transition-colors"
          >
            <LineChart size={13} /> Graph
          </button>

          <button
            onClick={() => setShowChartModal(true)}
            title="Build a bar, line or pie chart from data"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] transition-colors"
          >
            <BarChart2 size={13} /> Chart
          </button>

          <button
            onClick={() => imageInputRef.current?.click()}
            title="Put a picture on the board. You can also just paste one with Ctrl+V"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] transition-colors"
          >
            <ImageIcon size={13} /> Image
          </button>

          <button
            onClick={addSpace}
            title="Add more space at the bottom of the board"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#6b7280] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] hover:text-[#1b2b4b] transition-colors"
          >
            <Plus size={13} /> Add Space
          </button>

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

      {/* Scrollable board page */}
      <div
        ref={containerRef}
        onScroll={onScroll}
        className="flex-1 overflow-y-auto overflow-x-hidden bg-white"
      >
        <div className="relative" style={{ height: boardHeight }}>
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
              touchAction: locked || tool === 'pan' ? 'pan-y' : 'none',
              cursor: locked ? 'default' : tool === 'pan' ? 'grab' : tool === 'eraser' ? 'cell' : 'crosshair',
            }}
          />

          {imageItems.map(item => (
            <BoardImage
              key={item.id}
              item={item}
              locked={locked}
              onMove={(x, y) => updateImage(item.id, { x, y })}
              onResize={width => updateImage(item.id, { width })}
              onDelete={() => deleteImage(item.id)}
            />
          ))}

          {mathItems.map(item => (
            <BoardEquation
              key={item.id}
              item={item}
              locked={locked}
              onMove={(x, y) => updateMath(item.id, { x, y })}
              onScale={delta => updateMath(item.id, { scale: Math.min(3, Math.max(0.6, item.scale + delta)) })}
              onEdit={() => setEditingMath(item)}
              onDelete={() => deleteMath(item.id)}
            />
          ))}
        </div>
      </div>

      {locked && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur border border-green-200 rounded-full px-4 py-1.5 text-xs text-[#6b7280] pointer-events-none shadow-sm whitespace-nowrap">
          View only. Tap "Request Board" to draw.
        </div>
      )}

      {/*
        Students follow the teacher silently. Nothing is shown until they scroll off
        on their own, and then one arrow takes them back to the live position.
      */}
      {!isTeacher && !following && (
        <button
          onClick={() => { setFollowing(true); followingRef.current = true; scrollToTeacher() }}
          title="Back to what the teacher is writing"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#5ab82e] text-white shadow-lg ring-4 ring-[#5ab82e]/20 hover:bg-[#489f22] transition-colors"
        >
          {teacherAbove ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </button>
      )}

      {/* Teacher: jump down a screenful */}
      {isTeacher && (
        <button
          onClick={scrollDown}
          title="Scroll down"
          className="absolute bottom-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-white border border-green-200 text-[#6b7280] shadow-md hover:bg-[#f3fcf0] hover:text-[#1b2b4b] transition-colors"
        >
          <ChevronDown size={16} />
        </button>
      )}

      {showMathModal && (
        <MathModal
          showModeToggle={false}
          onInsert={latex => insertMath(latex)}
          onClose={() => setShowMathModal(false)}
        />
      )}

      {showGraphModal && (
        <GraphModal
          onInsert={dataUrl => { setShowGraphModal(false); void placeDataUrl(dataUrl, 'graph') }}
          onClose={() => setShowGraphModal(false)}
        />
      )}

      {showChartModal && (
        <ChartModal
          onInsert={dataUrl => { setShowChartModal(false); void placeDataUrl(dataUrl, 'chart') }}
          onClose={() => setShowChartModal(false)}
        />
      )}

      {editingMath && (
        <MathModal
          initialLatex={editingMath.latex}
          showModeToggle={false}
          onInsert={latex => { updateMath(editingMath.id, { latex }); setEditingMath(null) }}
          onDelete={() => { deleteMath(editingMath.id); setEditingMath(null) }}
          onClose={() => setEditingMath(null)}
        />
      )}
    </div>
  )
}

// ── A graph, chart or picture sitting on the board ────────────────────────────

interface BoardImageProps {
  item: ImageItem
  locked: boolean
  onMove: (x: number, y: number) => void
  onResize: (width: number) => void
  onDelete: () => void
}

function BoardImage({ item, locked, onMove, onResize, onDelete }: BoardImageProps) {
  const dragOffset = useRef<Point | null>(null)
  const resizeStart = useRef<{ x: number; width: number } | null>(null)
  const [active, setActive] = useState(false)

  const onPointerDown = (e: React.PointerEvent) => {
    if (locked) return
    if ((e.target as HTMLElement).closest('[data-img-control]')) return
    e.preventDefault()
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    setActive(true)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (resizeStart.current) {
      onResize(Math.max(80, resizeStart.current.width + (e.clientX - resizeStart.current.x)))
      return
    }
    if (!dragOffset.current) return
    const parent = (e.currentTarget as HTMLElement).offsetParent as HTMLElement | null
    if (!parent) return
    const parentRect = parent.getBoundingClientRect()
    onMove(
      Math.max(0, e.clientX - parentRect.left - dragOffset.current.x),
      Math.max(0, e.clientY - parentRect.top - dragOffset.current.y),
    )
  }

  const endDrag = (e: React.PointerEvent) => {
    dragOffset.current = null
    resizeStart.current = null
    setActive(false)
    ;(e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId)
  }

  const startResize = (e: React.PointerEvent) => {
    e.preventDefault()
    e.stopPropagation()
    resizeStart.current = { x: e.clientX, width: item.width }
    ;(e.currentTarget.parentElement as HTMLElement)?.setPointerCapture?.(e.pointerId)
    setActive(true)
  }

  return (
    <div
      className={`group absolute select-none ${locked ? '' : 'cursor-move'} ${active ? 'z-20' : 'z-10'}`}
      style={{ left: item.x, top: item.y, width: item.width, touchAction: 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <img
        src={item.src}
        alt=""
        draggable={false}
        className={`w-full h-auto rounded-lg bg-white shadow-sm ${locked ? '' : 'group-hover:ring-2 group-hover:ring-[#5ab82e]'}`}
      />

      {!locked && (
        <>
          <button data-img-control onClick={onDelete} title="Remove from board"
            className="absolute -top-2 -right-2 hidden group-hover:flex items-center justify-center w-6 h-6 rounded-full bg-white border border-green-200 text-[#9ca3af] hover:text-red-500 shadow-sm transition-colors">
            <X size={12} />
          </button>
          {/* Drag this corner to resize */}
          <div data-img-control onPointerDown={startResize} title="Drag to resize"
            className="absolute -bottom-1.5 -right-1.5 hidden group-hover:block w-4 h-4 rounded-sm bg-[#5ab82e] border-2 border-white shadow cursor-nwse-resize" />
        </>
      )}
    </div>
  )
}

// ── A single equation sitting on the board ────────────────────────────────────

interface EquationProps {
  item: MathItem
  locked: boolean
  onMove: (x: number, y: number) => void
  onScale: (delta: number) => void
  onEdit: () => void
  onDelete: () => void
}

function BoardEquation({ item, locked, onMove, onScale, onEdit, onDelete }: EquationProps) {
  const { html, error } = useMemo(() => renderMath(item.latex, true), [item.latex])
  const dragOffset = useRef<Point | null>(null)
  const [dragging, setDragging] = useState(false)

  const onPointerDown = (e: React.PointerEvent) => {
    if (locked) return
    // Let the control buttons handle their own clicks.
    if ((e.target as HTMLElement).closest('[data-eq-control]')) return
    e.preventDefault()
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    setDragging(true)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragOffset.current) return
    const parent = (e.currentTarget as HTMLElement).offsetParent as HTMLElement | null
    if (!parent) return
    const parentRect = parent.getBoundingClientRect()
    onMove(
      Math.max(0, e.clientX - parentRect.left - dragOffset.current.x),
      Math.max(0, e.clientY - parentRect.top - dragOffset.current.y),
    )
  }

  const endDrag = (e: React.PointerEvent) => {
    if (!dragOffset.current) return
    dragOffset.current = null
    setDragging(false)
    ;(e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId)
  }

  return (
    <div
      className={`group absolute select-none ${locked ? '' : 'cursor-move'} ${dragging ? 'z-20' : 'z-10'}`}
      style={{ left: item.x, top: item.y, touchAction: 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onDoubleClick={() => { if (!locked) onEdit() }}
    >
      <div
        className={`board-equation px-2 py-1 rounded-lg transition-colors ${locked ? '' : 'hover:bg-[#f3fcf0]/90 hover:ring-1 hover:ring-[#5ab82e]'}`}
        style={{ fontSize: `${item.scale}rem` }}
      >
        {error
          ? <span className="math-error">{item.latex}</span>
          : <span dangerouslySetInnerHTML={{ __html: html }} />}
      </div>

      {!locked && (
        <div className="absolute -top-3 right-0 hidden group-hover:flex items-center gap-0.5 bg-white border border-green-200 rounded-lg shadow-sm px-0.5 py-0.5">
          <button data-eq-control onClick={() => onScale(-0.2)} title="Smaller"
            className="p-1 text-[#6b7280] hover:text-[#1b2b4b] hover:bg-[#f3fcf0] rounded transition-colors">
            <Minus size={11} />
          </button>
          <button data-eq-control onClick={() => onScale(0.2)} title="Bigger"
            className="p-1 text-[#6b7280] hover:text-[#1b2b4b] hover:bg-[#f3fcf0] rounded transition-colors">
            <Plus size={11} />
          </button>
          <button data-eq-control onClick={onEdit} title="Edit equation"
            className="p-1 text-[#6b7280] hover:text-[#5ab82e] hover:bg-[#f3fcf0] rounded transition-colors">
            <Pencil size={11} />
          </button>
          <button data-eq-control onClick={onDelete} title="Remove equation"
            className="p-1 text-[#9ca3af] hover:text-red-500 hover:bg-red-50 rounded transition-colors">
            <X size={11} />
          </button>
        </div>
      )}
    </div>
  )
}
