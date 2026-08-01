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
export type PenTool = 'pen' | 'eraser'
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

export type Background = 'plain' | 'grid' | 'graph' | 'lined'

export interface BoardState {
  version: 2
  strokes: Stroke[]
  mathItems: MathItem[]
  imageItems: ImageItem[]
  boardHeight: number
  background: Background
}

export const emptyBoard = (): BoardState => ({
  version: 2,
  strokes: [],
  mathItems: [],
  imageItems: [],
  boardHeight: DEFAULT_BOARD_HEIGHT,
  background: 'plain',
})

/**
 * Accept whatever is in the database. Anything without a version is from before
 * board units existed, and its pixel coordinates would be meaningless now, so it
 * is dropped rather than drawn in the wrong place.
 */
export function parseBoardState(raw: unknown): BoardState {
  const base = emptyBoard()
  if (!raw || typeof raw !== 'object') return base
  const value = raw as Partial<BoardState>
  if (value.version !== 2) return base
  return {
    version: 2,
    strokes: Array.isArray(value.strokes) ? value.strokes : [],
    mathItems: Array.isArray(value.mathItems) ? value.mathItems : [],
    imageItems: Array.isArray(value.imageItems) ? value.imageItems : [],
    boardHeight: typeof value.boardHeight === 'number' ? value.boardHeight : DEFAULT_BOARD_HEIGHT,
    background: value.background ?? 'plain',
  }
}

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

/**
 * Merge one slice of the lesson into the stored blob. Read-modify-write is fine
 * here: only the teacher's client ever saves.
 */
export async function saveLessonSlice(
  sessionId: string,
  slice: Partial<LessonState>,
): Promise<void> {
  const current = (await loadLesson(sessionId)) ?? {}
  const { error } = await supabase
    .from('sessions')
    .update({ whiteboard_state: { ...current, ...slice } })
    .eq('id', sessionId)
  if (error) throw error
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
  if (stroke.tool === 'eraser') {
    ctx.globalCompositeOperation = 'destination-out'
    ctx.strokeStyle = 'rgba(0,0,0,1)'
  } else {
    ctx.globalCompositeOperation = 'source-over'
    ctx.strokeStyle = stroke.color
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
