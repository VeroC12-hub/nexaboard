import { useEffect, useRef, useCallback, useState, useMemo } from 'react'
import { supabase } from '../lib/supabase'
import {
  Pencil, Eraser, Trash2, Hand, Sigma, X, Plus, Minus, ChevronDown, ChevronUp,
  LineChart, BarChart2, ImageIcon, Undo2, Redo2, Minus as LineIcon, ArrowRight,
  Square, Circle, Grid3x3, Compass, Type, Highlighter, Files,
} from 'lucide-react'
import MathModal from './MathModal'
import GraphModal from './GraphModal'
import ChartModal from './ChartModal'
import Protractor from './Protractor'
import { renderMath } from '../lib/math'
import {
  BOARD_WIDTH, GROW_STEP, GROW_MARGIN, DEFAULT_BOARD_HEIGHT,
  drawBackground, drawStroke, shapeReadout, loadLesson, saveLessonSlice,
  parseBoardState, emptyBoard, emptyPage, activePage,
  strokeHitsPoint, constrainPoint,
  type Point, type Stroke, type MathItem, type ImageItem, type Background,
  type ShapeKind, type PenTool, type BoardState, type BoardPage, type TextItem,
} from '../lib/board'
import toast from 'react-hot-toast'

interface Props {
  sessionId: string
  isTeacher: boolean
  canDraw: boolean
}

type Tool = PenTool | 'eraser' | 'pan' | 'text' | ShapeKind

const COLORS = ['#1b2b4b', '#ef4444', '#3b82f6', '#5ab82e', '#f59e0b', '#8b5cf6', '#000000']
const SIZES = [2, 5, 12]

const SHAPE_TOOLS: [ShapeKind, React.ElementType, string][] = [
  ['line', LineIcon, 'Straight line (ruler)'],
  ['arrow', ArrowRight, 'Arrow'],
  ['rect', Square, 'Rectangle'],
  ['circle', Circle, 'Circle (compass): drag from the centre'],
]

const BACKGROUNDS: [Background, string][] = [
  ['plain', 'Plain'],
  ['grid', 'Squared'],
  ['graph', 'Graph paper'],
  ['lined', 'Ruled'],
]

/** One undoable thing this user did. */
type Action =
  | { kind: 'stroke'; id: string }
  | { kind: 'erase'; id: string }
  | { kind: 'math'; item: MathItem }
  | { kind: 'image'; item: ImageItem }
  | { kind: 'text'; item: TextItem }

export default function Whiteboard({ sessionId, isTeacher, canDraw }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null)

  const isDrawing = useRef(false)
  const currentStroke = useRef<Stroke | null>(null)
  /** How many points of the live stroke have already gone out on the wire. */
  const sentPoints = useRef(0)
  const allStrokes = useRef<Stroke[]>([])
  const lastPointBroadcast = useRef(0)

  const [color, setColor] = useState('#1b2b4b')
  const [size, setSize] = useState(2)
  const [tool, setTool] = useState<Tool>('pen')
  const [boardHeight, setBoardHeight] = useState(DEFAULT_BOARD_HEIGHT)
  const [background, setBackground] = useState<Background>('plain')
  const [mathItems, setMathItems] = useState<MathItem[]>([])
  const [imageItems, setImageItems] = useState<ImageItem[]>([])
  const [textItems, setTextItems] = useState<TextItem[]>([])
  /** Every page in the lesson. The one being drawn on is held in the state above. */
  const [pages, setPages] = useState<BoardPage[]>([])
  const [activePageId, setActivePageId] = useState('')
  const [editingText, setEditingText] = useState<string | null>(null)
  const [showMathModal, setShowMathModal] = useState(false)
  const [showGraphModal, setShowGraphModal] = useState(false)
  const [showChartModal, setShowChartModal] = useState(false)
  const [showProtractor, setShowProtractor] = useState(false)
  const [showBackgroundMenu, setShowBackgroundMenu] = useState(false)
  const [editingMath, setEditingMath] = useState<MathItem | null>(null)
  const [following, setFollowing] = useState(!isTeacher)
  const [teacherAbove, setTeacherAbove] = useState(false)
  const [readout, setReadout] = useState<string | null>(null)
  const [canUndo, setCanUndo] = useState(false)
  const [canRedo, setCanRedo] = useState(false)

  const locked = !isTeacher && !canDraw
  const myId = useMemo(() => (isTeacher ? 'teacher' : `s-${crypto.randomUUID().slice(0, 8)}`), [isTeacher])

  // Undo and redo only ever touch this user's own work, so one student cannot
  // wipe out another's, or the teacher's.
  const undoStack = useRef<Action[]>([])
  const redoStack = useRef<Action[]>([])
  const refreshUndoFlags = () => {
    setCanUndo(undoStack.current.length > 0)
    setCanRedo(redoStack.current.length > 0)
  }

  const lockedRef = useRef(locked)
  const colorRef = useRef(color)
  const sizeRef = useRef(size)
  const toolRef = useRef(tool)
  const boardHeightRef = useRef(boardHeight)
  const backgroundRef = useRef(background)
  const mathItemsRef = useRef(mathItems)
  const imageItemsRef = useRef(imageItems)
  const textItemsRef = useRef(textItems)
  const pagesRef = useRef(pages)
  const activePageIdRef = useRef(activePageId)
  const followingRef = useRef(following)
  const teacherScrollTop = useRef(0)
  const lastViewBroadcast = useRef(0)
  useEffect(() => { lockedRef.current = locked }, [locked])
  useEffect(() => { colorRef.current = color }, [color])
  useEffect(() => { sizeRef.current = size }, [size])
  useEffect(() => { toolRef.current = tool }, [tool])
  useEffect(() => { boardHeightRef.current = boardHeight }, [boardHeight])
  useEffect(() => { backgroundRef.current = background }, [background])
  useEffect(() => { mathItemsRef.current = mathItems }, [mathItems])
  useEffect(() => { imageItemsRef.current = imageItems }, [imageItems])
  useEffect(() => { textItemsRef.current = textItems }, [textItems])
  useEffect(() => { pagesRef.current = pages }, [pages])
  useEffect(() => { activePageIdRef.current = activePageId }, [activePageId])
  useEffect(() => { followingRef.current = following }, [following])

  /**
   * Pixels per board unit for this screen. The ref is for drawing and pointer
   * maths; the state copy is what positions the equations and pictures, so they
   * follow along when the window is resized.
   */
  const scaleRef = useRef(1)
  const [scale, setScale] = useState(1)

  // ── Rendering ───────────────────────────────────────────────────────────────
  const redraw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const scale = scaleRef.current
    drawBackground(ctx, backgroundRef.current, canvas.width, canvas.height, scale)
    for (const stroke of allStrokes.current) drawStroke(ctx, stroke, scale)
  }, [])

  const fitCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const width = container.clientWidth
    if (!width) return
    scaleRef.current = width / BOARD_WIDTH
    setScale(scaleRef.current)
    canvas.width = width
    canvas.height = Math.round(boardHeightRef.current * scaleRef.current)
    redraw()
  }, [redraw])

  useEffect(() => {
    fitCanvas()
    const ro = new ResizeObserver(fitCanvas)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [fitCanvas])

  useEffect(() => { fitCanvas() }, [boardHeight, background, fitCanvas])

  const growIfNeeded = useCallback((y: number) => {
    if (y < boardHeightRef.current - GROW_MARGIN) return
    const next = boardHeightRef.current + GROW_STEP
    boardHeightRef.current = next
    setBoardHeight(next)
    channelRef.current?.send({
      type: 'broadcast', event: 'wb_meta',
      payload: { boardHeight: next, background: backgroundRef.current },
    })
  }, [])

  // ── Saving the lesson ───────────────────────────────────────────────────────
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  /** The page currently being drawn on, built from the live working state. */
  const currentPage = useCallback((): BoardPage => {
    const existing = pagesRef.current.find(p => p.id === activePageIdRef.current)
    return {
      id: activePageIdRef.current,
      name: existing?.name ?? 'Page 1',
      strokes: allStrokes.current,
      mathItems: mathItemsRef.current,
      imageItems: imageItemsRef.current,
      textItems: textItemsRef.current,
      boardHeight: boardHeightRef.current,
      background: backgroundRef.current,
    }
  }, [])

  const snapshot = useCallback((): BoardState => {
    const live = currentPage()
    const pages = pagesRef.current.length
      ? pagesRef.current.map(p => (p.id === live.id ? live : p))
      : [live]
    return { version: 3, pages, activePageId: live.id }
  }, [currentPage])

  /** Replace the working state with a page's contents. */
  const openPage = useCallback((page: BoardPage) => {
    allStrokes.current = page.strokes
    boardHeightRef.current = page.boardHeight
    backgroundRef.current = page.background
    mathItemsRef.current = page.mathItems
    imageItemsRef.current = page.imageItems
    textItemsRef.current = page.textItems
    activePageIdRef.current = page.id
    setMathItems(page.mathItems)
    setImageItems(page.imageItems)
    setTextItems(page.textItems)
    setBoardHeight(page.boardHeight)
    setBackground(page.background)
    setActivePageId(page.id)
    undoStack.current = []
    redoStack.current = []
    refreshUndoFlags()
    requestAnimationFrame(() => fitCanvas())
  }, [fitCanvas])

  /** Only the teacher writes, and only after things settle, to keep writes cheap. */
  const scheduleSave = useCallback(() => {
    if (!isTeacher) return
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      saveLessonSlice(sessionId, { board: snapshot() }).catch(err => {
        console.error('Could not save the board:', err)
      })
    }, 2500)
  }, [isTeacher, sessionId, snapshot])

  useEffect(() => () => { if (saveTimer.current) clearTimeout(saveTimer.current) }, [])

  // Load whatever was saved before anyone joins the live channel, so a refresh or
  // a late arrival still sees the lesson.
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    let cancelled = false
    loadLesson(sessionId).then(lesson => {
      if (cancelled) return
      const board = lesson?.board ? parseBoardState(lesson.board) : emptyBoard()
      setPages(board.pages)
      pagesRef.current = board.pages
      openPage(activePage(board))
      setLoaded(true)
    }).catch(() => {
      const board = emptyBoard()
      setPages(board.pages)
      pagesRef.current = board.pages
      openPage(board.pages[0])
      setLoaded(true)
    })
    return () => { cancelled = true }
  }, [sessionId, openPage])

  // ── Live sync ───────────────────────────────────────────────────────────────
  const scrollToTeacher = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    el.scrollTop = Math.max(0, Math.min(teacherScrollTop.current, el.scrollHeight - el.clientHeight))
  }, [])

  const followTarget = (el: HTMLDivElement) =>
    Math.max(0, Math.min(teacherScrollTop.current, el.scrollHeight - el.clientHeight))

  const onScroll = useCallback(() => {
    const el = containerRef.current
    if (isTeacher) {
      const now = Date.now()
      if (now - lastViewBroadcast.current < 150) return
      lastViewBroadcast.current = now
      channelRef.current?.send({
        type: 'broadcast', event: 'wb_view',
        payload: { scrollTop: el?.scrollTop ?? 0, viewHeight: el?.clientHeight ?? 0 },
      })
      return
    }
    if (!el) return
    if (Math.abs(el.scrollTop - followTarget(el)) < 4) {
      if (!followingRef.current) setFollowing(true)
      return
    }
    if (followingRef.current) setFollowing(false)
    setTeacherAbove(followTarget(el) < el.scrollTop)
  }, [isTeacher])

  useEffect(() => {
    if (!loaded) return
    const channel = supabase
      .channel(`whiteboard:${sessionId}`)
      // A stroke begins: everyone gets the opening points straight away.
      .on('broadcast', { event: 'wb_stroke_add' }, ({ payload }) => {
        if (payload.stroke.by === myId) return
        allStrokes.current = [...allStrokes.current, payload.stroke as Stroke]
        redraw()
      })
      // Only the new points travel while a stroke is being drawn, so a long
      // lesson does not rebroadcast the whole board on every movement.
      .on('broadcast', { event: 'wb_stroke_points' }, ({ payload }) => {
        if (payload.by === myId) return
        const stroke = allStrokes.current.find(s => s.id === payload.id)
        if (!stroke) return
        stroke.points.push(...(payload.points as Point[]))
        redraw()
      })
      .on('broadcast', { event: 'wb_remove' }, ({ payload }) => {
        const ids = new Set(payload.ids as string[])
        allStrokes.current = allStrokes.current.filter(s => !ids.has(s.id))
        setMathItems(prev => prev.filter(m => !ids.has(m.id)))
        setImageItems(prev => prev.filter(m => !ids.has(m.id)))
        redraw()
      })
      .on('broadcast', { event: 'wb_restore' }, ({ payload }) => {
        if (payload.by === myId) return
        if (payload.stroke) allStrokes.current = [...allStrokes.current, payload.stroke as Stroke]
        if (payload.math) setMathItems(prev => [...prev, payload.math as MathItem])
        if (payload.image) setImageItems(prev => [...prev, payload.image as ImageItem])
        redraw()
      })
      .on('broadcast', { event: 'wb_math' }, ({ payload }) => setMathItems(payload.items ?? []))
      .on('broadcast', { event: 'wb_images' }, ({ payload }) => setImageItems(payload.items ?? []))
      .on('broadcast', { event: 'wb_meta' }, ({ payload }) => {
        if (typeof payload.boardHeight === 'number' && payload.boardHeight > boardHeightRef.current) {
          boardHeightRef.current = payload.boardHeight
          setBoardHeight(payload.boardHeight)
        }
        if (payload.background) {
          backgroundRef.current = payload.background
          setBackground(payload.background)
        }
      })
      .on('broadcast', { event: 'wb_view' }, ({ payload }) => {
        if (isTeacher) return
        teacherScrollTop.current = payload.scrollTop ?? 0
        if (!followingRef.current) {
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
        undoStack.current = []
        redoStack.current = []
        refreshUndoFlags()
        redraw()
      })
      .on('broadcast', { event: 'wb_snapshot' }, ({ payload }) => {
        // A peer's live state is newer than what came out of the database.
        const board = parseBoardState(payload.board)
        setPages(board.pages)
        pagesRef.current = board.pages
        openPage(activePage(board))
      })
      // The teacher turning to another page takes the class with them.
      .on('broadcast', { event: 'wb_page' }, ({ payload }) => {
        const board = parseBoardState(payload.board)
        setPages(board.pages)
        pagesRef.current = board.pages
        openPage(activePage(board))
      })
      .on('broadcast', { event: 'wb_text' }, ({ payload }) => {
        setTextItems(payload.items ?? [])
        textItemsRef.current = payload.items ?? []
      })
      .on('broadcast', { event: 'wb_sync_req' }, () => {
        if (!isTeacher) return
        channel.send({ type: 'broadcast', event: 'wb_snapshot', payload: { board: snapshot() } })
        channel.send({
          type: 'broadcast', event: 'wb_view',
          payload: { scrollTop: containerRef.current?.scrollTop ?? 0 },
        })
      })
      .subscribe(status => {
        if (status === 'SUBSCRIBED') {
          channel.send({ type: 'broadcast', event: 'wb_sync_req', payload: {} })
        }
      })
    channelRef.current = channel
    return () => { supabase.removeChannel(channel) }
  }, [sessionId, loaded, isTeacher, myId, redraw, snapshot, scrollToTeacher, openPage])

  // ── Text on the board ───────────────────────────────────────────────────────
  const commitText = (items: TextItem[], record?: TextItem) => {
    setTextItems(items)
    textItemsRef.current = items
    channelRef.current?.send({ type: 'broadcast', event: 'wb_text', payload: { items } })
    if (record) {
      undoStack.current.push({ kind: 'text', item: record })
      redoStack.current = []
      refreshUndoFlags()
    }
    scheduleSave()
  }

  const updateText = (id: string, patch: Partial<TextItem>) =>
    commitText(textItemsRef.current.map(t => (t.id === id ? { ...t, ...patch } : t)))

  const deleteText = (id: string) =>
    commitText(textItemsRef.current.filter(t => t.id !== id))

  // ── Drawing input ───────────────────────────────────────────────────────────
  /** Screen position to board units. getBoundingClientRect already allows for scroll. */
  const toBoard = (clientX: number, clientY: number): Point => {
    const rect = canvasRef.current!.getBoundingClientRect()
    const scale = scaleRef.current || 1
    return { x: (clientX - rect.left) / scale, y: (clientY - rect.top) / scale }
  }

  const isShape = (t: Tool): t is ShapeKind =>
    t === 'line' || t === 'arrow' || t === 'rect' || t === 'circle'

  const beginStroke = (point: Point) => {
    const active = toolRef.current
    const stroke: Stroke = {
      id: crypto.randomUUID(),
      by: myId,
      points: [point],
      color: colorRef.current,
      width: sizeRef.current,
      tool: active === 'highlighter' ? 'highlighter' : 'pen',
      ...(isShape(active) ? { shape: active } : {}),
    }
    currentStroke.current = stroke
    sentPoints.current = 0
    allStrokes.current = [...allStrokes.current, stroke]
    isDrawing.current = true
  }

  const extendStroke = (point: Point, constrain = false) => {
    const stroke = currentStroke.current
    if (!stroke) return
    if (stroke.shape) {
      // A shape is defined by two points: drag moves the second one. Holding
      // shift snaps it to horizontal, vertical or 45 degrees.
      stroke.points[1] = constrain ? constrainPoint(stroke.points[0], point) : point
      setReadout(shapeReadout(stroke.shape, stroke.points[0], point))
    } else {
      stroke.points.push(point)
      growIfNeeded(point.y)
    }
    redraw()

    // Freehand streams its new points; shapes are cheap enough to resend whole.
    // eslint-disable-next-line react-hooks/purity -- pointer handler, not render
    const now = Date.now()
    if (now - lastPointBroadcast.current < 60) return
    lastPointBroadcast.current = now
    if (stroke.shape) {
      channelRef.current?.send({
        type: 'broadcast', event: 'wb_remove', payload: { ids: [stroke.id] },
      })
      channelRef.current?.send({
        type: 'broadcast', event: 'wb_stroke_add', payload: { stroke: { ...stroke, by: '' } },
      })
      return
    }
    if (sentPoints.current === 0) {
      channelRef.current?.send({
        type: 'broadcast', event: 'wb_stroke_add',
        payload: { stroke: { ...stroke, points: stroke.points.slice() } },
      })
    } else {
      channelRef.current?.send({
        type: 'broadcast', event: 'wb_stroke_points',
        payload: { id: stroke.id, by: myId, points: stroke.points.slice(sentPoints.current) },
      })
    }
    sentPoints.current = stroke.points.length
  }

  const endStroke = () => {
    const stroke = currentStroke.current
    isDrawing.current = false
    currentStroke.current = null
    setReadout(null)
    if (!stroke) return

    // A shape needs a second point; a tap that never moved leaves nothing behind.
    if (stroke.shape && stroke.points.length < 2) {
      allStrokes.current = allStrokes.current.filter(s => s.id !== stroke.id)
      redraw()
      return
    }

    if (stroke.shape) {
      channelRef.current?.send({ type: 'broadcast', event: 'wb_remove', payload: { ids: [stroke.id] } })
      channelRef.current?.send({ type: 'broadcast', event: 'wb_stroke_add', payload: { stroke: { ...stroke, by: '' } } })
      growIfNeeded(Math.max(stroke.points[0].y, stroke.points[1].y))
    } else if (sentPoints.current === 0) {
      channelRef.current?.send({ type: 'broadcast', event: 'wb_stroke_add', payload: { stroke } })
    } else if (stroke.points.length > sentPoints.current) {
      channelRef.current?.send({
        type: 'broadcast', event: 'wb_stroke_points',
        payload: { id: stroke.id, by: myId, points: stroke.points.slice(sentPoints.current) },
      })
    }

    undoStack.current.push({ kind: 'stroke', id: stroke.id })
    redoStack.current = []
    refreshUndoFlags()
    scheduleSave()
  }

  /**
   * The eraser lifts whole strokes rather than painting over them. Scrubbing out
   * pixels used to punch holes in the squared and graph paper, and left an
   * ever-growing pile of eraser strokes in the saved lesson.
   */
  const eraseAt = (point: Point) => {
    const tolerance = Math.max(6, sizeRef.current * 2)
    const hit = allStrokes.current.filter(s => strokeHitsPoint(s, point, tolerance))
    if (!hit.length) return
    const ids = hit.map(s => s.id)
    for (const stroke of hit) {
      undoneStrokes.current.set(stroke.id, stroke)
      undoStack.current.push({ kind: 'erase', id: stroke.id })
    }
    redoStack.current = []
    refreshUndoFlags()
    allStrokes.current = allStrokes.current.filter(s => !ids.includes(s.id))
    channelRef.current?.send({ type: 'broadcast', event: 'wb_remove', payload: { ids } })
    redraw()
    scheduleSave()
  }

  const addTextAt = (point: Point) => {
    const item: TextItem = {
      id: crypto.randomUUID(), by: myId, text: '',
      x: point.x, y: point.y, size: 26, color: colorRef.current, bold: false,
    }
    commitText([...textItemsRef.current, item], item)
    setEditingText(item.id)
    setTool('pen')
  }

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (locked || tool === 'pan') return
    const point = toBoard(e.clientX, e.clientY)
    if (tool === 'text') { addTextAt(point); return }
    if (tool === 'eraser') { isDrawing.current = true; eraseAt(point); return }
    beginStroke(point)
  }
  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || locked) return
    const point = toBoard(e.clientX, e.clientY)
    if (toolRef.current === 'eraser') { eraseAt(point); return }
    extendStroke(point, e.shiftKey)
  }
  const onMouseUp = () => {
    if (toolRef.current === 'eraser') { isDrawing.current = false; return }
    if (isDrawing.current) endStroke()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const onTouchStart = (e: TouchEvent) => {
      if (lockedRef.current || toolRef.current === 'pan' || e.touches.length > 1) return
      e.preventDefault()
      const sp = toBoard(e.touches[0].clientX, e.touches[0].clientY)
      if (toolRef.current === 'text') { addTextAt(sp); return }
      if (toolRef.current === 'eraser') { isDrawing.current = true; eraseAt(sp); return }
      beginStroke(sp)
    }
    const onTouchMove = (e: TouchEvent) => {
      if (!isDrawing.current || lockedRef.current) return
      if (e.touches.length > 1) { isDrawing.current = false; currentStroke.current = null; return }
      e.preventDefault()
      const tp = toBoard(e.touches[0].clientX, e.touches[0].clientY)
      if (toolRef.current === 'eraser') { eraseAt(tp); return }
      extendStroke(tp)
    }
    const onTouchEnd = () => { if (isDrawing.current) endStroke() }
    canvas.addEventListener('touchstart', onTouchStart, { passive: false })
    canvas.addEventListener('touchmove', onTouchMove, { passive: false })
    canvas.addEventListener('touchend', onTouchEnd)
    return () => {
      canvas.removeEventListener('touchstart', onTouchStart)
      canvas.removeEventListener('touchmove', onTouchMove)
      canvas.removeEventListener('touchend', onTouchEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Undo and redo ───────────────────────────────────────────────────────────
  const undo = useCallback(() => {
    const action = undoStack.current.pop()
    if (!action) return
    if (action.kind === 'stroke') {
      const stroke = allStrokes.current.find(s => s.id === action.id)
      if (stroke) redoStack.current.push({ kind: 'stroke', id: action.id })
      allStrokes.current = allStrokes.current.filter(s => s.id !== action.id)
      if (stroke) undoneStrokes.current.set(action.id, stroke)
      channelRef.current?.send({ type: 'broadcast', event: 'wb_remove', payload: { ids: [action.id] } })
      redraw()
    } else if (action.kind === 'erase') {
      // Undoing an erase puts the stroke back where it was.
      const stroke = undoneStrokes.current.get(action.id)
      if (stroke) {
        allStrokes.current = [...allStrokes.current, stroke]
        channelRef.current?.send({ type: 'broadcast', event: 'wb_restore', payload: { by: myId, stroke } })
        redraw()
      }
      redoStack.current.push(action)
    } else if (action.kind === 'text') {
      redoStack.current.push(action)
      const next = textItemsRef.current.filter(t => t.id !== action.item.id)
      setTextItems(next); textItemsRef.current = next
      channelRef.current?.send({ type: 'broadcast', event: 'wb_text', payload: { items: next } })
    } else if (action.kind === 'math') {
      redoStack.current.push(action)
      const next = mathItemsRef.current.filter(m => m.id !== action.item.id)
      setMathItems(next); mathItemsRef.current = next
      channelRef.current?.send({ type: 'broadcast', event: 'wb_remove', payload: { ids: [action.item.id] } })
    } else {
      redoStack.current.push(action)
      const next = imageItemsRef.current.filter(m => m.id !== action.item.id)
      setImageItems(next); imageItemsRef.current = next
      channelRef.current?.send({ type: 'broadcast', event: 'wb_remove', payload: { ids: [action.item.id] } })
    }
    refreshUndoFlags()
    scheduleSave()
  }, [myId, redraw, scheduleSave])

  /** Strokes taken off the board by undo, kept so redo can put them back. */
  const undoneStrokes = useRef(new Map<string, Stroke>())

  const redo = useCallback(() => {
    const action = redoStack.current.pop()
    if (!action) return
    if (action.kind === 'stroke') {
      const stroke = undoneStrokes.current.get(action.id)
      if (stroke) {
        allStrokes.current = [...allStrokes.current, stroke]
        undoneStrokes.current.delete(action.id)
        channelRef.current?.send({ type: 'broadcast', event: 'wb_restore', payload: { by: myId, stroke } })
        redraw()
      }
      undoStack.current.push(action)
    } else if (action.kind === 'erase') {
      const stroke = allStrokes.current.find(s => s.id === action.id)
      if (stroke) undoneStrokes.current.set(action.id, stroke)
      allStrokes.current = allStrokes.current.filter(s => s.id !== action.id)
      channelRef.current?.send({ type: 'broadcast', event: 'wb_remove', payload: { ids: [action.id] } })
      redraw()
      undoStack.current.push(action)
    } else if (action.kind === 'text') {
      const next = [...textItemsRef.current, action.item]
      setTextItems(next); textItemsRef.current = next
      channelRef.current?.send({ type: 'broadcast', event: 'wb_text', payload: { items: next } })
      undoStack.current.push(action)
    } else if (action.kind === 'math') {
      const next = [...mathItemsRef.current, action.item]
      setMathItems(next); mathItemsRef.current = next
      channelRef.current?.send({ type: 'broadcast', event: 'wb_restore', payload: { by: myId, math: action.item } })
      undoStack.current.push(action)
    } else {
      const next = [...imageItemsRef.current, action.item]
      setImageItems(next); imageItemsRef.current = next
      channelRef.current?.send({ type: 'broadcast', event: 'wb_restore', payload: { by: myId, image: action.item } })
      undoStack.current.push(action)
    }
    refreshUndoFlags()
    scheduleSave()
  }, [myId, redraw, scheduleSave])

  useEffect(() => {
    if (locked) return
    const handler = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return
      const key = e.key.toLowerCase()
      if (key === 'z' && !e.shiftKey) { e.preventDefault(); undo() }
      else if ((key === 'z' && e.shiftKey) || key === 'y') { e.preventDefault(); redo() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [locked, undo, redo])

  // ── Board furniture ─────────────────────────────────────────────────────────
  const clearBoard = () => {
    if (!window.confirm('Clear the whole board for everyone? This cannot be undone.')) return
    allStrokes.current = []
    setMathItems([]); mathItemsRef.current = []
    setImageItems([]); imageItemsRef.current = []
    setTextItems([]); textItemsRef.current = []
    undoStack.current = []; redoStack.current = []
    refreshUndoFlags()
    redraw()
    channelRef.current?.send({ type: 'broadcast', event: 'wb_clear', payload: {} })
    scheduleSave()
  }

  const changeBackground = (next: Background) => {
    backgroundRef.current = next
    setBackground(next)
    setShowBackgroundMenu(false)
    channelRef.current?.send({
      type: 'broadcast', event: 'wb_meta',
      payload: { background: next, boardHeight: boardHeightRef.current },
    })
    scheduleSave()
  }

  const addSpace = () => {
    const next = boardHeightRef.current + GROW_STEP
    boardHeightRef.current = next
    setBoardHeight(next)
    channelRef.current?.send({
      type: 'broadcast', event: 'wb_meta',
      payload: { boardHeight: next, background: backgroundRef.current },
    })
    requestAnimationFrame(() => {
      containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' })
    })
    scheduleSave()
  }

  const scrollDown = () => {
    const el = containerRef.current
    if (!el) return
    el.scrollTo({ top: el.scrollTop + el.clientHeight * 0.85, behavior: 'smooth' })
  }

  // ── Pages ───────────────────────────────────────────────────────────────────
  /** Fold the live working state back into the page list. */
  const syncPages = useCallback((): BoardPage[] => {
    const live = currentPage()
    const next = pagesRef.current.length
      ? pagesRef.current.map(p => (p.id === live.id ? live : p))
      : [live]
    pagesRef.current = next
    setPages(next)
    return next
  }, [currentPage])

  const broadcastPages = (list: BoardPage[], activeId: string) => {
    channelRef.current?.send({
      type: 'broadcast', event: 'wb_page',
      payload: { board: { version: 3, pages: list, activePageId: activeId } },
    })
  }

  const goToPage = (id: string) => {
    if (id === activePageIdRef.current) return
    const list = syncPages()
    const target = list.find(p => p.id === id)
    if (!target) return
    openPage(target)
    broadcastPages(list, id)
    scheduleSave()
  }

  const addPage = () => {
    const list = syncPages()
    const page = emptyPage(`Page ${list.length + 1}`)
    // A new page keeps the paper you were already using.
    page.background = backgroundRef.current
    const next = [...list, page]
    pagesRef.current = next
    setPages(next)
    openPage(page)
    broadcastPages(next, page.id)
    scheduleSave()
  }

  const deletePage = (id: string) => {
    const list = syncPages()
    if (list.length <= 1) { toast.error('A lesson needs at least one page'); return }
    if (!window.confirm('Delete this page for everyone?')) return
    const index = list.findIndex(p => p.id === id)
    const next = list.filter(p => p.id !== id)
    pagesRef.current = next
    setPages(next)
    openPage(next[Math.max(0, index - 1)])
    broadcastPages(next, next[Math.max(0, index - 1)].id)
    scheduleSave()
  }

  // ── Equations ───────────────────────────────────────────────────────────────
  const commitMath = (items: MathItem[], record?: MathItem) => {
    setMathItems(items)
    mathItemsRef.current = items
    channelRef.current?.send({ type: 'broadcast', event: 'wb_math', payload: { items } })
    if (record) {
      undoStack.current.push({ kind: 'math', item: record })
      redoStack.current = []
      refreshUndoFlags()
    }
    scheduleSave()
  }

  const insertMath = (latex: string) => {
    const el = containerRef.current
    const scale = scaleRef.current || 1
    const item: MathItem = {
      id: crypto.randomUUID(), by: myId, latex,
      x: 60, y: (el?.scrollTop ?? 0) / scale + 70, scale: 1,
    }
    commitMath([...mathItemsRef.current, item], item)
    setShowMathModal(false)
  }

  const updateMath = (id: string, patch: Partial<MathItem>) =>
    commitMath(mathItemsRef.current.map(m => (m.id === id ? { ...m, ...patch } : m)))

  const deleteMath = (id: string) =>
    commitMath(mathItemsRef.current.filter(m => m.id !== id))

  // ── Graphs, charts and pictures ─────────────────────────────────────────────
  const commitImages = (items: ImageItem[], record?: ImageItem) => {
    setImageItems(items)
    imageItemsRef.current = items
    channelRef.current?.send({ type: 'broadcast', event: 'wb_images', payload: { items } })
    if (record) {
      undoStack.current.push({ kind: 'image', item: record })
      redoStack.current = []
      refreshUndoFlags()
    }
    scheduleSave()
  }

  const placeImage = (src: string, width = 420) => {
    const el = containerRef.current
    const scale = scaleRef.current || 1
    const top = (el?.scrollTop ?? 0) / scale
    const viewHeight = (el?.clientHeight ?? 600) / scale
    const nearby = imageItemsRef.current.filter(m => m.y > top && m.y < top + viewHeight).length
    const item: ImageItem = {
      id: crypto.randomUUID(), by: myId, src,
      x: 60 + nearby * 26, y: top + 70 + nearby * 26, width,
    }
    commitImages([...imageItemsRef.current, item], item)
  }

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
      toast.error(`Could not add image: ${err instanceof Error ? err.message : String(err)}`, { id: toastId })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId])

  const placeDataUrl = async (dataUrl: string, name: string) => {
    try {
      await uploadAndPlace(await (await fetch(dataUrl)).blob(), name, dataUrl)
    } catch {
      placeImage(dataUrl)
    }
  }

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

  const updateImage = (id: string, patch: Partial<ImageItem>) =>
    commitImages(imageItemsRef.current.map(m => (m.id === id ? { ...m, ...patch } : m)))

  const deleteImage = (id: string) =>
    commitImages(imageItemsRef.current.filter(m => m.id !== id))

  useEffect(() => {
    const close = () => setShowBackgroundMenu(false)
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const toolButton = (active: boolean, onClick: () => void, title: string, icon: React.ReactNode) => (
    <button onClick={onClick} title={title}
      className={`p-2 rounded-md transition-colors ${active ? 'bg-[#5ab82e] text-white shadow-sm' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}>
      {icon}
    </button>
  )

  return (
    <div className="h-full w-full flex flex-col relative">
      <input ref={imageInputRef} type="file" accept="image/*" className="hidden"
        onChange={e => {
          const file = e.target.files?.[0]
          e.target.value = ''
          if (file) void uploadAndPlace(file, 'image')
        }} />

      {!locked && (
        <div className="flex items-center gap-2 px-3 py-2 border-b border-green-100 bg-white shrink-0 flex-wrap">
          <div className="flex items-center bg-[#f3fcf0] rounded-lg p-0.5 gap-0.5 border border-green-200">
            {toolButton(tool === 'pen', () => setTool('pen'), 'Pen', <Pencil size={15} />)}
            {toolButton(tool === 'highlighter', () => setTool('highlighter'), 'Highlighter', <Highlighter size={15} />)}
            {toolButton(tool === 'eraser', () => setTool('eraser'), 'Eraser: rub over a stroke to lift it', <Eraser size={15} />)}
            {toolButton(tool === 'text', () => setTool('text'), 'Text: click the board and type', <Type size={15} />)}
            {toolButton(tool === 'pan', () => setTool('pan'), 'Scroll the board with your finger or mouse', <Hand size={15} />)}
          </div>

          {/* Straight edge, arrow, box and compass */}
          <div className="flex items-center bg-[#f3fcf0] rounded-lg p-0.5 gap-0.5 border border-green-200">
            {SHAPE_TOOLS.map(([kind, Icon, title]) =>
              <span key={kind}>{toolButton(tool === kind, () => setTool(kind), title, <Icon size={15} />)}</span>)}
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {COLORS.map(c => (
              <button key={c} onClick={() => { setColor(c); if (tool === 'eraser' || tool === 'pan') setTool('pen') }}
                title={c}
                className={`w-7 h-7 rounded-full border-2 transition-all hover:scale-110 ${color === c && tool !== 'eraser' ? 'border-[#5ab82e] scale-110' : 'border-gray-200'}`}
                style={{ backgroundColor: c }} />
            ))}
          </div>

          <div className="flex items-center gap-1">
            {SIZES.map(s => (
              <button key={s} onClick={() => setSize(s)} title={`Size ${s}`}
                className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${size === s ? 'bg-[#f3fcf0] ring-1 ring-[#5ab82e]' : 'hover:bg-[#f3fcf0]'}`}>
                <div className="rounded-full bg-[#1b2b4b]" style={{ width: s * 2.2, height: s * 2.2 }} />
              </button>
            ))}
          </div>

          <div className="w-px h-5 bg-green-100 hidden sm:block" />

          <div className="flex items-center bg-[#f3fcf0] rounded-lg p-0.5 gap-0.5 border border-green-200">
            <button onClick={undo} disabled={!canUndo} title="Undo (Ctrl+Z)"
              className="p-2 rounded-md text-[#6b7280] hover:text-[#1b2b4b] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              <Undo2 size={15} />
            </button>
            <button onClick={redo} disabled={!canRedo} title="Redo (Ctrl+Shift+Z)"
              className="p-2 rounded-md text-[#6b7280] hover:text-[#1b2b4b] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              <Redo2 size={15} />
            </button>
          </div>

          <button onClick={() => setShowMathModal(true)} title="Type a maths equation onto the board"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] transition-colors">
            <Sigma size={13} /> Equation
          </button>
          <button onClick={() => setShowGraphModal(true)} title="Plot a function such as y = x² or y = sin(x)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] transition-colors">
            <LineChart size={13} /> Graph
          </button>
          <button onClick={() => setShowChartModal(true)} title="Build a bar, line or pie chart from data"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] transition-colors">
            <BarChart2 size={13} /> Chart
          </button>
          <button onClick={() => imageInputRef.current?.click()} title="Put a picture on the board. You can also just paste one with Ctrl+V"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] transition-colors">
            <ImageIcon size={13} /> Image
          </button>

          <button onClick={() => setShowProtractor(v => !v)} title="Show a protractor you can drag and turn"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${showProtractor ? 'bg-[#5ab82e] text-white border-[#5ab82e]' : 'text-[#1b2b4b] bg-white border-green-200 hover:bg-[#f3fcf0]'}`}>
            <Compass size={13} /> Protractor
          </button>

          {/* Paper type */}
          <div className="relative" onMouseDown={e => e.stopPropagation()}>
            <button onClick={() => setShowBackgroundMenu(v => !v)} title="Change the paper"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] transition-colors">
              <Grid3x3 size={13} /> Paper
            </button>
            {/* Anchored right: this button sits near the end of a wide toolbar */}
            {showBackgroundMenu && (
              <div className="absolute top-full right-0 mt-1 z-40 bg-white border border-green-200 rounded-xl shadow-xl p-1.5 w-40">
                {BACKGROUNDS.map(([value, label]) => (
                  <button key={value} onClick={() => changeBackground(value)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${background === value ? 'bg-[#5ab82e] text-white' : 'text-[#1b2b4b] hover:bg-[#f3fcf0]'}`}>
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={addSpace} title="Add more space at the bottom of the board"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#6b7280] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] hover:text-[#1b2b4b] transition-colors">
            <Plus size={13} /> Add Space
          </button>

          {isTeacher && (
            <button onClick={clearBoard}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-red-100">
              <Trash2 size={13} /> Clear
            </button>
          )}
        </div>
      )}

      {/* Pages: fill one board, start the next, and flip back whenever you like */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-green-100 bg-[#f9fef6] shrink-0 overflow-x-auto">
        <Files size={12} className="text-[#9ca3af] shrink-0" />
        {pages.map((page, i) => (
          <button key={page.id} onClick={() => !locked && goToPage(page.id)}
            title={locked ? page.name : `Go to ${page.name}`}
            className={`group flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-colors shrink-0 ${
              page.id === activePageId
                ? 'bg-[#1b2b4b] text-white border-[#1b2b4b]'
                : 'bg-white text-[#6b7280] border-green-200 hover:bg-[#f3fcf0] hover:text-[#1b2b4b]'
            }`}>
            {i + 1}
            {!locked && pages.length > 1 && page.id === activePageId && (
              <span onClick={e => { e.stopPropagation(); deletePage(page.id) }}
                title="Delete this page"
                className="ml-0.5 text-white/60 hover:text-red-300"><X size={11} /></span>
            )}
          </button>
        ))}
        {!locked && (
          <button onClick={addPage} title="Start a new page"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-[#5ab82e] bg-white border border-green-200 hover:bg-[#f3fcf0] transition-colors shrink-0">
            <Plus size={12} /> New page
          </button>
        )}
        <span className="ml-auto text-[10px] text-[#9ca3af] shrink-0 hidden sm:block">
          {pages.length} {pages.length === 1 ? 'page' : 'pages'} in this lesson
        </span>
      </div>

      <div ref={containerRef} onScroll={onScroll} className="flex-1 overflow-y-auto overflow-x-hidden bg-white">
        <div className="relative" style={{ height: Math.round(boardHeight * scale) }}>
          <canvas
            ref={canvasRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            style={{
              position: 'absolute', top: 0, left: 0,
              touchAction: locked || tool === 'pan' ? 'pan-y' : 'none',
              cursor: locked ? 'default' : tool === 'pan' ? 'grab' : tool === 'eraser' ? 'cell' : 'crosshair',
            }}
          />

          {imageItems.map(item => (
            <BoardImage key={item.id} item={item} locked={locked} scale={scale}
              onMove={(x, y) => updateImage(item.id, { x, y })}
              onResize={width => updateImage(item.id, { width })}
              onDelete={() => deleteImage(item.id)} />
          ))}

          {textItems.map(item => (
            <BoardText key={item.id} item={item} locked={locked} scale={scale}
              editing={editingText === item.id}
              onEdit={() => setEditingText(item.id)}
              onDone={() => setEditingText(null)}
              onChange={text => updateText(item.id, { text })}
              onMove={(x, y) => updateText(item.id, { x, y })}
              onResize={delta => updateText(item.id, { size: Math.min(90, Math.max(12, item.size + delta)) })}
              onDelete={() => { setEditingText(null); deleteText(item.id) }} />
          ))}

          {mathItems.map(item => (
            <BoardEquation key={item.id} item={item} locked={locked} scale={scale}
              onMove={(x, y) => updateMath(item.id, { x, y })}
              onScale={delta => updateMath(item.id, { scale: Math.min(3, Math.max(0.6, item.scale + delta)) })}
              onEdit={() => setEditingMath(item)}
              onDelete={() => deleteMath(item.id)} />
          ))}

          {showProtractor && !locked && <Protractor />}
        </div>
      </div>

      {/* Length and angle while a shape is being dragged out */}
      {readout && (
        <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-[#1b2b4b] text-white text-xs font-mono shadow-lg pointer-events-none">
          {readout}
        </div>
      )}

      {locked && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur border border-green-200 rounded-full px-4 py-1.5 text-xs text-[#6b7280] pointer-events-none shadow-sm whitespace-nowrap">
          View only. Tap "Request Board" to draw.
        </div>
      )}

      {!isTeacher && !following && (
        <button
          onClick={() => { setFollowing(true); followingRef.current = true; scrollToTeacher() }}
          title="Back to what the teacher is writing"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#5ab82e] text-white shadow-lg ring-4 ring-[#5ab82e]/20 hover:bg-[#489f22] transition-colors">
          {teacherAbove ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </button>
      )}

      {isTeacher && (
        <button onClick={scrollDown} title="Scroll down"
          className="absolute bottom-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-white border border-green-200 text-[#6b7280] shadow-md hover:bg-[#f3fcf0] hover:text-[#1b2b4b] transition-colors">
          <ChevronDown size={16} />
        </button>
      )}

      {showMathModal && (
        <MathModal showModeToggle={false} onInsert={latex => insertMath(latex)} onClose={() => setShowMathModal(false)} />
      )}
      {editingMath && (
        <MathModal
          initialLatex={editingMath.latex}
          showModeToggle={false}
          onInsert={latex => { updateMath(editingMath.id, { latex }); setEditingMath(null) }}
          onDelete={() => { deleteMath(editingMath.id); setEditingMath(null) }}
          onClose={() => setEditingMath(null)} />
      )}
      {showGraphModal && (
        <GraphModal onInsert={dataUrl => { setShowGraphModal(false); void placeDataUrl(dataUrl, 'graph') }}
          onClose={() => setShowGraphModal(false)} />
      )}
      {showChartModal && (
        <ChartModal onInsert={dataUrl => { setShowChartModal(false); void placeDataUrl(dataUrl, 'chart') }}
          onClose={() => setShowChartModal(false)} />
      )}
    </div>
  )
}

// ── Typed text sitting on the board ───────────────────────────────────────────

interface BoardTextProps {
  item: TextItem
  locked: boolean
  scale: number
  editing: boolean
  onEdit: () => void
  onDone: () => void
  onChange: (text: string) => void
  onMove: (x: number, y: number) => void
  onResize: (delta: number) => void
  onDelete: () => void
}

function BoardText({
  item, locked, scale, editing, onEdit, onDone, onChange, onMove, onResize, onDelete,
}: BoardTextProps) {
  const dragOffset = useRef<Point | null>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [dragging, setDragging] = useState(false)
  /** Set once the box has really had the caret, so a stray blur cannot bin it. */
  const hasFocused = useRef(false)

  useEffect(() => {
    if (!editing) return
    // Focus on the next frame: the click that created this box is still in
    // flight, and the canvas would otherwise take focus straight back.
    const id = requestAnimationFrame(() => {
      const el = inputRef.current
      if (!el) return
      el.focus()
      el.setSelectionRange(el.value.length, el.value.length)
      hasFocused.current = true
    })
    return () => cancelAnimationFrame(id)
  }, [editing])

  const onPointerDown = (e: React.PointerEvent) => {
    if (locked || editing) return
    if ((e.target as HTMLElement).closest('[data-text-control]')) return
    e.preventDefault(); e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    setDragging(true)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragOffset.current) return
    const parent = (e.currentTarget as HTMLElement).offsetParent as HTMLElement | null
    if (!parent) return
    const rect = parent.getBoundingClientRect()
    onMove(
      Math.max(0, (e.clientX - rect.left - dragOffset.current.x) / scale),
      Math.max(0, (e.clientY - rect.top - dragOffset.current.y) / scale),
    )
  }

  const endDrag = (e: React.PointerEvent) => {
    dragOffset.current = null
    setDragging(false)
    ;(e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId)
  }

  // An empty box the teacher actually typed nothing into was a mis-click, so it
  // removes itself. A blur before the caret ever arrived is ignored.
  const finish = () => {
    if (!hasFocused.current) return
    if (!item.text.trim()) onDelete()
    else onDone()
  }

  const fontSize = item.size * scale
  const shared: React.CSSProperties = {
    fontSize,
    color: item.color,
    fontWeight: item.bold ? 700 : 400,
    lineHeight: 1.25,
    fontFamily: 'Inter, system-ui, sans-serif',
  }

  return (
    <div
      className={`group absolute ${locked ? '' : editing ? '' : 'cursor-move'} ${dragging || editing ? 'z-20' : 'z-10'}`}
      style={{ left: item.x * scale, top: item.y * scale, touchAction: 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onDoubleClick={() => { if (!locked) onEdit() }}
    >
      {editing ? (
        <textarea
          ref={inputRef}
          value={item.text}
          onChange={e => onChange(e.target.value)}
          onBlur={finish}
          onKeyDown={e => {
            if (e.key === 'Escape') { e.preventDefault(); finish() }
            // Enter commits; Shift+Enter starts a new line.
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); finish() }
          }}
          rows={1}
          placeholder="Type…"
          spellCheck={false}
          className="bg-white/95 border border-[#5ab82e] rounded-lg px-2 py-1 outline-none resize-none shadow-sm min-w-[160px]"
          style={{ ...shared, width: `${Math.max(160, item.text.length * fontSize * 0.62)}px` }}
        />
      ) : (
        <div
          className={`px-2 py-1 rounded-lg whitespace-pre-wrap ${locked ? '' : 'hover:bg-[#f3fcf0]/80 hover:ring-1 hover:ring-[#5ab82e]'}`}
          style={shared}
        >
          {item.text}
        </div>
      )}

      {!locked && !editing && (
        <div className="absolute -top-3 right-0 hidden group-hover:flex items-center gap-0.5 bg-white border border-green-200 rounded-lg shadow-sm px-0.5 py-0.5">
          <button data-text-control onClick={() => onResize(-4)} title="Smaller"
            className="p-1 text-[#6b7280] hover:text-[#1b2b4b] hover:bg-[#f3fcf0] rounded transition-colors"><Minus size={11} /></button>
          <button data-text-control onClick={() => onResize(4)} title="Bigger"
            className="p-1 text-[#6b7280] hover:text-[#1b2b4b] hover:bg-[#f3fcf0] rounded transition-colors"><Plus size={11} /></button>
          <button data-text-control onClick={onEdit} title="Edit text"
            className="p-1 text-[#6b7280] hover:text-[#5ab82e] hover:bg-[#f3fcf0] rounded transition-colors"><Pencil size={11} /></button>
          <button data-text-control onClick={onDelete} title="Remove text"
            className="p-1 text-[#9ca3af] hover:text-red-500 hover:bg-red-50 rounded transition-colors"><X size={11} /></button>
        </div>
      )}
    </div>
  )
}

// ── A graph, chart or picture sitting on the board ────────────────────────────

interface BoardImageProps {
  item: ImageItem
  locked: boolean
  scale: number
  onMove: (x: number, y: number) => void
  onResize: (width: number) => void
  onDelete: () => void
}

function BoardImage({ item, locked, scale, onMove, onResize, onDelete }: BoardImageProps) {
  const dragOffset = useRef<Point | null>(null)
  const resizeStart = useRef<{ x: number; width: number } | null>(null)
  const [active, setActive] = useState(false)

  const onPointerDown = (e: React.PointerEvent) => {
    if (locked) return
    if ((e.target as HTMLElement).closest('[data-img-control]')) return
    e.preventDefault(); e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    setActive(true)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (resizeStart.current) {
      onResize(Math.max(60, resizeStart.current.width + (e.clientX - resizeStart.current.x) / scale))
      return
    }
    if (!dragOffset.current) return
    const parent = (e.currentTarget as HTMLElement).offsetParent as HTMLElement | null
    if (!parent) return
    const rect = parent.getBoundingClientRect()
    onMove(
      Math.max(0, (e.clientX - rect.left - dragOffset.current.x) / scale),
      Math.max(0, (e.clientY - rect.top - dragOffset.current.y) / scale),
    )
  }

  const endDrag = (e: React.PointerEvent) => {
    dragOffset.current = null
    resizeStart.current = null
    setActive(false)
    ;(e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId)
  }

  const startResize = (e: React.PointerEvent) => {
    e.preventDefault(); e.stopPropagation()
    resizeStart.current = { x: e.clientX, width: item.width }
    ;(e.currentTarget.parentElement as HTMLElement)?.setPointerCapture?.(e.pointerId)
    setActive(true)
  }

  return (
    <div
      className={`group absolute select-none ${locked ? '' : 'cursor-move'} ${active ? 'z-20' : 'z-10'}`}
      style={{ left: item.x * scale, top: item.y * scale, width: item.width * scale, touchAction: 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <img src={item.src} alt="" draggable={false}
        className={`w-full h-auto rounded-lg bg-white shadow-sm ${locked ? '' : 'group-hover:ring-2 group-hover:ring-[#5ab82e]'}`} />
      {!locked && (
        <>
          <button data-img-control onClick={onDelete} title="Remove from board"
            className="absolute -top-2 -right-2 hidden group-hover:flex items-center justify-center w-6 h-6 rounded-full bg-white border border-green-200 text-[#9ca3af] hover:text-red-500 shadow-sm transition-colors">
            <X size={12} />
          </button>
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
  scale: number
  onMove: (x: number, y: number) => void
  onScale: (delta: number) => void
  onEdit: () => void
  onDelete: () => void
}

function BoardEquation({ item, locked, scale, onMove, onScale, onEdit, onDelete }: EquationProps) {
  const { html, error } = useMemo(() => renderMath(item.latex, true), [item.latex])
  const dragOffset = useRef<Point | null>(null)
  const [dragging, setDragging] = useState(false)

  const onPointerDown = (e: React.PointerEvent) => {
    if (locked) return
    if ((e.target as HTMLElement).closest('[data-eq-control]')) return
    e.preventDefault(); e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    setDragging(true)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragOffset.current) return
    const parent = (e.currentTarget as HTMLElement).offsetParent as HTMLElement | null
    if (!parent) return
    const rect = parent.getBoundingClientRect()
    onMove(
      Math.max(0, (e.clientX - rect.left - dragOffset.current.x) / scale),
      Math.max(0, (e.clientY - rect.top - dragOffset.current.y) / scale),
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
      style={{ left: item.x * scale, top: item.y * scale, touchAction: 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onDoubleClick={() => { if (!locked) onEdit() }}
    >
      <div className={`board-equation px-2 py-1 rounded-lg transition-colors ${locked ? '' : 'hover:bg-[#f3fcf0]/90 hover:ring-1 hover:ring-[#5ab82e]'}`}
        style={{ fontSize: `${item.scale * scale}rem` }}>
        {error ? <span className="math-error">{item.latex}</span>
          : <span dangerouslySetInnerHTML={{ __html: html }} />}
      </div>

      {!locked && (
        <div className="absolute -top-3 right-0 hidden group-hover:flex items-center gap-0.5 bg-white border border-green-200 rounded-lg shadow-sm px-0.5 py-0.5">
          <button data-eq-control onClick={() => onScale(-0.2)} title="Smaller"
            className="p-1 text-[#6b7280] hover:text-[#1b2b4b] hover:bg-[#f3fcf0] rounded transition-colors"><Minus size={11} /></button>
          <button data-eq-control onClick={() => onScale(0.2)} title="Bigger"
            className="p-1 text-[#6b7280] hover:text-[#1b2b4b] hover:bg-[#f3fcf0] rounded transition-colors"><Plus size={11} /></button>
          <button data-eq-control onClick={onEdit} title="Edit equation"
            className="p-1 text-[#6b7280] hover:text-[#5ab82e] hover:bg-[#f3fcf0] rounded transition-colors"><Pencil size={11} /></button>
          <button data-eq-control onClick={onDelete} title="Remove equation"
            className="p-1 text-[#9ca3af] hover:text-red-500 hover:bg-red-50 rounded transition-colors"><X size={11} /></button>
        </div>
      )}
    </div>
  )
}
