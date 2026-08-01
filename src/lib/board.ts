import { supabase } from './supabase'

// ── Board coordinate system ───────────────────────────────────────────────────
// Everything on the board is stored in "board units", not screen pixels, so a
// teacher on a laptop and a student on a phone see the same layout. One board is
// BOARD_WIDTH units wide; y grows downward in the same units, which keeps the
// aspect ratio identical on every screen.

export const BOARD_WIDTH = 1000
/** A fresh board is this many units tall, and grows as you write near the bottom. */
export const DEFAULT_BOARD_HEIGHT = 1400
export const GROW_STEP = 700
export const GROW_MARGIN = 280

export type Point = { x: number; y: number }
export type PenTool = 'pen' | 'highlighter'
export type ShapeKind = 'line' | 'arrow' | 'rect' | 'circle'

export interface Stroke {
  id: string
  /** Who drew it, so undo only takes back your own work. */
  by: string
  points: Point[]
  color: string
  width: number
  tool: PenTool
  /** Present for straight-edge shapes; freehand strokes leave it undefined. */
  shape?: ShapeKind
}

export interface MathItem {
  id: string
  by: string
  latex: string
  x: number
  y: number
  scale: number
}

export interface ImageItem {
  id: string
  by: string
  src: string
  x: number
  y: number
  width: number
}

export interface TextItem {
  id: string
  by: string
  text: string
  x: number
  y: number
  /** Font size in board units. */
  size: number
  color: string
  bold: boolean
}

export type Background = 'plain' | 'grid' | 'graph' | 'lined'

/** One board. A lesson holds several, so filling one does not destroy the last. */
export interface BoardPage {
  id: string
  name: string
  strokes: Stroke[]
  mathItems: MathItem[]
  imageItems: ImageItem[]
  textItems: TextItem[]
  boardHeight: number
  background: Background
}

export interface BoardState {
  version: 3
  pages: BoardPage[]
  activePageId: string
}

export const emptyPage = (name = 'Page 1'): BoardPage => ({
  id: crypto.randomUUID(),
  name,
  strokes: [],
  mathItems: [],
  imageItems: [],
  textItems: [],
  boardHeight: DEFAULT_BOARD_HEIGHT,
  background: 'plain',
})

export const emptyBoard = (): BoardState => {
  const page = emptyPage()
  return { version: 3, pages: [page], activePageId: page.id }
}

/** Fill in anything a stored page is missing, so older saves still open. */
function normalisePage(raw: Partial<BoardPage>, index: number): BoardPage {
  return {
    id: raw.id ?? crypto.randomUUID(),
    name: raw.name ?? `Page ${index + 1}`,
    strokes: Array.isArray(raw.strokes) ? raw.strokes : [],
    mathItems: Array.isArray(raw.mathItems) ? raw.mathItems : [],
    imageItems: Array.isArray(raw.imageItems) ? raw.imageItems : [],
    textItems: Array.isArray(raw.textItems) ? raw.textItems : [],
    boardHeight: typeof raw.boardHeight === 'number' ? raw.boardHeight : DEFAULT_BOARD_HEIGHT,
    background: raw.background ?? 'plain',
  }
}

/**
 * Accept whatever is in the database. Version 2 was a single board and becomes
 * page one. Anything older used raw pixel coordinates that would render in the
 * wrong place, so it is dropped rather than shown wrongly.
 */
export function parseBoardState(raw: unknown): BoardState {
  if (!raw || typeof raw !== 'object') return emptyBoard()
  const value = raw as { version?: number; pages?: Partial<BoardPage>[]; activePageId?: string } & Partial<BoardPage>

  if (value.version === 3 && Array.isArray(value.pages) && value.pages.length) {
    const pages = value.pages.map((p, i) => normalisePage(p, i))
    const active = pages.some(p => p.id === value.activePageId) ? value.activePageId! : pages[0].id
    return { version: 3, pages, activePageId: active }
  }

  if (value.version === 2) {
    const page = normalisePage({ ...value, name: 'Page 1' }, 0)
    return { version: 3, pages: [page], activePageId: page.id }
  }

  return emptyBoard()
}

export const activePage = (state: BoardState): BoardPage =>
  state.pages.find(p => p.id === state.activePageId) ?? state.pages[0]

// ── Persistence ───────────────────────────────────────────────────────────────
// Board and notes share the existing `sessions.whiteboard_state` jsonb column, so
// saving a lesson needs no schema change. RLS lets the teacher write it and
// anyone read it back, which is what late joiners and absentees need.

export interface LessonState {
  board?: BoardState
  notes?: unknown
  questions?: unknown
}

export async function loadLesson(sessionId: string): Promise<LessonState | null> {
  const { data, error } = await supabase
    .from('sessions')
    .select('whiteboard_state')
    .eq('id', sessionId)
    .maybeSingle()
  if (error || !data?.whiteboard_state) return null
  return data.whiteboard_state as LessonState
}

/** Thrown when a save is accepted by the API but changes nothing. */
export class NotSavedError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'NotSavedError'
  }
}

/**
 * Merge one slice of the lesson into the stored blob. Read-modify-write is fine
 * here: only the teacher's client ever saves.
 *
 * The `select` matters. A blocked update returns success with zero rows and no
 * error, so without asking for the affected row back there is no way to tell a
 * real save from a silent no-op, and the lesson would look saved when it was
 * never written.
 */
export async function saveLessonSlice(
  sessionId: string,
  slice: Partial<LessonState>,
): Promise<void> {
  const current = (await loadLesson(sessionId)) ?? {}
  const { data, error } = await supabase
    .from('sessions')
    .update({ whiteboard_state: { ...current, ...slice } })
    .eq('id', sessionId)
    .select('id')

  if (error) throw error
  if (!data || data.length === 0) {
    throw new NotSavedError(
      'The lesson was not written. The session may have ended, or you may not be signed in as its teacher.',
    )
  }
}

// ── Drawing ───────────────────────────────────────────────────────────────────

/** Paint the paper: plain, squared, graph paper or ruled lines. */
export function drawBackground(
  ctx: CanvasRenderingContext2D,
  background: Background,
  width: number,
  height: number,
  scale: number,
) {
  ctx.save()
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, width, height)
  if (background === 'plain') { ctx.restore(); return }

  const line = (step: number, colour: string, weight: number, verticals: boolean) => {
    ctx.strokeStyle = colour
    ctx.lineWidth = weight
    ctx.beginPath()
    for (let y = step; y < height; y += step) {
      const py = Math.round(y) + 0.5
      ctx.moveTo(0, py); ctx.lineTo(width, py)
    }
    if (verticals) {
      for (let x = step; x < width; x += step) {
        const px = Math.round(x) + 0.5
        ctx.moveTo(px, 0); ctx.lineTo(px, height)
      }
    }
    ctx.stroke()
  }

  if (background === 'lined') {
    line(36 * scale, '#dbeafe', 1, false)
  } else if (background === 'grid') {
    line(25 * scale, '#e5eef7', 1, true)
  } else if (background === 'graph') {
    // Fine squares with a heavier line every five, the way graph paper reads.
    line(10 * scale, '#eaf2f8', 1, true)
    line(50 * scale, '#cfe0ee', 1.2, true)
  }
  ctx.restore()
}

/** Draw one stroke. Coordinates come in board units and are scaled to pixels. */
export function drawStroke(ctx: CanvasRenderingContext2D, stroke: Stroke, scale: number) {
  const p = stroke.points
  if (p.length < 1) return
  ctx.save()
  ctx.lineWidth = Math.max(0.5, stroke.width * scale)
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.globalCompositeOperation = 'source-over'
  ctx.strokeStyle = stroke.color
  // A highlighter lays down translucent ink so the work underneath still reads.
  if (stroke.tool === 'highlighter') {
    ctx.globalAlpha = 0.35
    ctx.lineWidth = Math.max(0.5, stroke.width * scale * 3)
    ctx.lineCap = 'butt'
  }

  const x = (i: number) => p[i].x * scale
  const y = (i: number) => p[i].y * scale

  ctx.beginPath()
  if (!stroke.shape) {
    if (p.length < 2) { ctx.restore(); return }
    ctx.moveTo(x(0), y(0))
    for (let i = 1; i < p.length; i++) ctx.lineTo(x(i), y(i))
    ctx.stroke()
    ctx.restore()
    return
  }

  if (p.length < 2) { ctx.restore(); return }
  const [x0, y0, x1, y1] = [x(0), y(0), x(1), y(1)]
  switch (stroke.shape) {
    case 'line':
      ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke()
      break
    case 'arrow': {
      ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke()
      const angle = Math.atan2(y1 - y0, x1 - x0)
      const head = Math.max(10, stroke.width * scale * 4)
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x1 - head * Math.cos(angle - Math.PI / 7), y1 - head * Math.sin(angle - Math.PI / 7))
      ctx.moveTo(x1, y1)
      ctx.lineTo(x1 - head * Math.cos(angle + Math.PI / 7), y1 - head * Math.sin(angle + Math.PI / 7))
      ctx.stroke()
      break
    }
    case 'rect':
      ctx.rect(Math.min(x0, x1), Math.min(y0, y1), Math.abs(x1 - x0), Math.abs(y1 - y0))
      ctx.stroke()
      break
    case 'circle': {
      // Drawn compass-style: first point is the centre, second sets the radius.
      const r = Math.hypot(x1 - x0, y1 - y0)
      ctx.arc(x0, y0, Math.max(r, 1), 0, Math.PI * 2)
      ctx.stroke()
      break
    }
  }
  ctx.restore()
}

// ── Hit testing ───────────────────────────────────────────────────────────────

/** Shortest distance from a point to a line segment, in board units. */
function distanceToSegment(p: Point, a: Point, b: Point): number {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const lengthSq = dx * dx + dy * dy
  if (lengthSq === 0) return Math.hypot(p.x - a.x, p.y - a.y)
  let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / lengthSq
  t = Math.max(0, Math.min(1, t))
  return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy))
}

/**
 * Is this point close enough to the stroke to count as touching it? Used by the
 * eraser and by tap-to-select, so both behave the same way.
 */
export function strokeHitsPoint(stroke: Stroke, point: Point, tolerance: number): boolean {
  const reach = tolerance + stroke.width / 2
  const p = stroke.points
  if (!p.length) return false
  if (p.length === 1) return Math.hypot(point.x - p[0].x, point.y - p[0].y) <= reach

  if (stroke.shape === 'rect') {
    const [a, b] = p
    const left = Math.min(a.x, b.x), right = Math.max(a.x, b.x)
    const top = Math.min(a.y, b.y), bottom = Math.max(a.y, b.y)
    const corners: Point[] = [
      { x: left, y: top }, { x: right, y: top }, { x: right, y: bottom }, { x: left, y: bottom },
    ]
    for (let i = 0; i < 4; i++) {
      if (distanceToSegment(point, corners[i], corners[(i + 1) % 4]) <= reach) return true
    }
    return false
  }

  if (stroke.shape === 'circle') {
    const radius = Math.hypot(p[1].x - p[0].x, p[1].y - p[0].y)
    return Math.abs(Math.hypot(point.x - p[0].x, point.y - p[0].y) - radius) <= reach
  }

  for (let i = 1; i < p.length; i++) {
    if (distanceToSegment(point, p[i - 1], p[i]) <= reach) return true
  }
  return false
}

/** Bounding box of a stroke, for drawing selection handles. */
export function strokeBounds(stroke: Stroke): { x: number; y: number; w: number; h: number } {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  const consider = (x: number, y: number) => {
    if (x < minX) minX = x
    if (x > maxX) maxX = x
    if (y < minY) minY = y
    if (y > maxY) maxY = y
  }
  if (stroke.shape === 'circle' && stroke.points.length > 1) {
    const r = Math.hypot(stroke.points[1].x - stroke.points[0].x, stroke.points[1].y - stroke.points[0].y)
    consider(stroke.points[0].x - r, stroke.points[0].y - r)
    consider(stroke.points[0].x + r, stroke.points[0].y + r)
  } else {
    for (const p of stroke.points) consider(p.x, p.y)
  }
  const pad = stroke.width
  return { x: minX - pad, y: minY - pad, w: maxX - minX + pad * 2, h: maxY - minY + pad * 2 }
}

/** Move every point of a stroke, used when dragging a selection. */
export function translateStroke(stroke: Stroke, dx: number, dy: number): Stroke {
  return { ...stroke, points: stroke.points.map(p => ({ x: p.x + dx, y: p.y + dy })) }
}

/** Snap a dragged shape to horizontal, vertical or 45 degrees. */
export function constrainPoint(from: Point, to: Point): Point {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const angle = Math.atan2(dy, dx)
  const step = Math.PI / 4
  const snapped = Math.round(angle / step) * step
  const length = Math.hypot(dx, dy)
  return { x: from.x + length * Math.cos(snapped), y: from.y + length * Math.sin(snapped) }
}

/** Length and angle readout shown while a shape is being dragged out. */
export function shapeReadout(shape: ShapeKind, a: Point, b: Point): string {
  const dx = b.x - a.x
  const dy = b.y - a.y
  if (shape === 'circle') return `r ${Math.round(Math.hypot(dx, dy))}`
  if (shape === 'rect') return `${Math.round(Math.abs(dx))} × ${Math.round(Math.abs(dy))}`
  // Screen y grows downward, so flip it to report the angle people expect.
  let deg = (Math.atan2(-dy, dx) * 180) / Math.PI
  if (deg < 0) deg += 360
  return `${Math.round(Math.hypot(dx, dy))} @ ${Math.round(deg)}°`
}
