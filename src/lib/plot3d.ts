// Three dimensional plotting: a surface z = f(x, y), or points in space.
//
// Built on the same evaluator as the flat graph and drawn with the ordinary 2D
// canvas, so it adds no dependency and nothing to download. There is no depth
// buffer, so the surface is cut into quads and painted far to near, which is
// exact for a height field like this one.

import { compile, niceStep, formatTick, parseTuples, type CompiledExpression } from './plot'

/** The variables a surface expression may use. */
export const SURFACE_VARS = ['x', 'y'] as const

export interface Point3D {
  x: number
  y: number
  z: number
}

/** A surface worked out from an equation in x and y. */
export interface SurfaceSeries {
  kind: 'surface'
  expression: string
  color: string
  /** Draw only the mesh lines, so a second surface underneath stays visible. */
  wireframe: boolean
}

/** Readings in space, for when there is no equation. */
export interface Points3DSeries {
  kind: 'points3d'
  points: Point3D[]
  color: string
  join: 'none' | 'line'
  markers: boolean
  label?: string
}

export type Series3D = SurfaceSeries | Points3DSeries

export interface Range3D {
  xMin: number; xMax: number
  yMin: number; yMax: number
  zMin: number; zMax: number
}

/** Where the viewer stands, in degrees. */
export interface View3D {
  /** Turn around the upright axis. */
  turn: number
  /** Height above the flat plane. 0 is edge on, 90 is straight down. */
  tilt: number
}

export interface Options3D {
  title?: string
  xLabel?: string
  yLabel?: string
  zLabel?: string
  showBox?: boolean
}

// ── Reading points ────────────────────────────────────────────────────────────

/** Read `x, y, z` triples out of whatever the teacher typed. */
export function parsePoints3d(text: string): { points: Point3D[]; error: string | null } {
  const { rows, error } = parseTuples(text, 3)
  return { points: rows.map(([x, y, z]) => ({ x, y, z })), error }
}

/** The x and y window that just contains every point, with a little air round it. */
export function autoXYRange(series: Series3D[]): { xMin: number; xMax: number; yMin: number; yMax: number } | null {
  const xs: number[] = []
  const ys: number[] = []
  for (const s of series) {
    if (s.kind !== 'points3d') continue
    for (const p of s.points) {
      if (Number.isFinite(p.x)) xs.push(p.x)
      if (Number.isFinite(p.y)) ys.push(p.y)
    }
  }
  if (!xs.length || !ys.length) return null
  const span = (values: number[]) => {
    let lo = Math.min(...values)
    let hi = Math.max(...values)
    if (hi === lo) { lo -= 1; hi += 1 }
    const pad = (hi - lo) * 0.08
    return { lo: lo - pad, hi: hi + pad }
  }
  const x = span(xs)
  const y = span(ys)
  return { xMin: x.lo, xMax: x.hi, yMin: y.lo, yMax: y.hi }
}

/**
 * A sensible height range, ignoring the runaway values around a pole so that
 * one spike does not flatten the rest of the surface into a sheet.
 */
export function autoZRange(
  series: Series3D[],
  xMin: number, xMax: number, yMin: number, yMax: number,
): { zMin: number; zMax: number } {
  const samples: number[] = []
  for (const s of series) {
    if (s.kind === 'points3d') {
      for (const p of s.points) {
        if (p.x >= xMin && p.x <= xMax && p.y >= yMin && p.y <= yMax && Number.isFinite(p.z)) samples.push(p.z)
      }
      continue
    }
    let fn: CompiledExpression
    try { fn = compile(s.expression, SURFACE_VARS) } catch { continue }
    const steps = 24
    for (let i = 0; i <= steps; i++) {
      for (let j = 0; j <= steps; j++) {
        const z = fn.eval(xMin + ((xMax - xMin) * i) / steps, yMin + ((yMax - yMin) * j) / steps)
        if (Number.isFinite(z)) samples.push(z)
      }
    }
  }
  if (!samples.length) return { zMin: -10, zMax: 10 }

  samples.sort((a, b) => a - b)
  const at = (q: number) => samples[Math.min(samples.length - 1, Math.max(0, Math.round(q * (samples.length - 1))))]
  let lo = at(0.02)
  let hi = at(0.98)
  if (!(hi > lo)) { lo -= 1; hi += 1 }
  const pad = (hi - lo) * 0.1
  return { zMin: lo - pad, zMax: hi + pad }
}

// ── Colour helpers ────────────────────────────────────────────────────────────

type Rgb = [number, number, number]

function hexToRgb(hex: string): Rgb {
  const clean = hex.replace('#', '')
  const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean
  const n = parseInt(full, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

const mix = (a: Rgb, b: Rgb, t: number): Rgb =>
  [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]

const css = (c: Rgb) => `rgb(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])})`

// ── Projection ────────────────────────────────────────────────────────────────

interface Projected {
  sx: number
  sy: number
  /** Distance from the viewer. Larger is further away. */
  depth: number
}

/**
 * Turn a point into screen coordinates.
 *
 * The data is first squashed into a cube around the origin so that the three
 * axes are comparable whatever units they are in: without that, seconds against
 * kilometres would draw as a razor blade. The cube is then turned about its
 * upright axis and tilted towards the viewer.
 */
function makeProjector(range: Range3D, view: View3D) {
  const { xMin, xMax, yMin, yMax, zMin, zMax } = range
  const midX = (xMin + xMax) / 2, halfX = (xMax - xMin) / 2 || 1
  const midY = (yMin + yMax) / 2, halfY = (yMax - yMin) / 2 || 1
  const midZ = (zMin + zMax) / 2, halfZ = (zMax - zMin) / 2 || 1

  const turn = (view.turn * Math.PI) / 180
  const tilt = (view.tilt * Math.PI) / 180
  const cosT = Math.cos(turn), sinT = Math.sin(turn)
  const cosE = Math.cos(tilt), sinE = Math.sin(tilt)

  return (x: number, y: number, z: number): Projected => {
    const nx = (x - midX) / halfX
    const ny = (y - midY) / halfY
    const nz = (z - midZ) / halfZ
    // Turn about the upright axis.
    const rx = nx * cosT - ny * sinT
    const ry = nx * sinT + ny * cosT
    // Tilt: at 0 degrees the height axis is straight up the screen, at 90 the
    // viewer is overhead and the flat plane fills the picture.
    return {
      sx: rx,
      sy: -(nz * cosE + ry * sinE),
      depth: ry * cosE - nz * sinE,
    }
  }
}

/** A corner of the box, in the unit cube where each axis runs 0 to 1. */
type Corner = [number, number, number]
type BoxEdge = [Corner, Corner]

const CUBE_CORNERS: Corner[] = [
  [0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0],
  [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1],
]

/** The twelve edges of the box, as pairs of indices into CUBE_CORNERS. */
const CUBE_EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
]

// ── Renderer ──────────────────────────────────────────────────────────────────

/**
 * Draw the graph onto a canvas. Returns an error message for any bad series.
 */
export function drawPlot3d(
  canvas: HTMLCanvasElement,
  series: Series3D[],
  range: Range3D,
  view: View3D,
  options: Options3D = {},
): string | null {
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const width = canvas.width
  const height = canvas.height
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, width, height)

  const project = makeProjector(range, view)
  const { xMin, xMax, yMin, yMax, zMin, zMax } = range
  const at = (u: number, v: number, w: number) =>
    project(xMin + (xMax - xMin) * u, yMin + (yMax - yMin) * v, zMin + (zMax - zMin) * w)

  // Fit whatever the current angle produces, so turning the graph never pushes
  // it off the edge of the picture.
  const corners = CUBE_CORNERS.map(([u, v, w]) => at(u, v, w))
  const padTop = options.title ? 30 : 14
  const padSide = 46
  const padBottom = 26
  let minSx = Infinity, maxSx = -Infinity, minSy = Infinity, maxSy = -Infinity
  for (const c of corners) {
    minSx = Math.min(minSx, c.sx); maxSx = Math.max(maxSx, c.sx)
    minSy = Math.min(minSy, c.sy); maxSy = Math.max(maxSy, c.sy)
  }
  const availW = width - padSide * 2
  const availH = height - padTop - padBottom
  const scale = Math.min(availW / (maxSx - minSx || 1), availH / (maxSy - minSy || 1))
  const originX = padSide + (availW - (maxSx - minSx) * scale) / 2 - minSx * scale
  const originY = padTop + (availH - (maxSy - minSy) * scale) / 2 - minSy * scale
  const toX = (p: Projected) => originX + p.sx * scale
  const toY = (p: Projected) => originY + p.sy * scale

  // ── the box ────────────────────────────────────────────────────────────────
  const drawEdges = (behind: boolean) => {
    if (options.showBox === false) return
    ctx.lineWidth = 1
    ctx.strokeStyle = behind ? '#e2e8f0' : '#cbd5e1'
    ctx.beginPath()
    for (const [a, b] of CUBE_EDGES) {
      const pa = corners[a], pb = corners[b]
      const isBehind = (pa.depth + pb.depth) / 2 > 0
      if (isBehind !== behind) continue
      ctx.moveTo(toX(pa), toY(pa))
      ctx.lineTo(toX(pb), toY(pb))
    }
    ctx.stroke()
  }

  drawEdges(true)

  // ── the surfaces and points, painted far to near ───────────────────────────
  let firstError: string | null = null

  interface Facet {
    depth: number
    draw: () => void
  }
  const facets: Facet[] = []

  for (const s of series) {
    if (s.kind === 'points3d') {
      collectPoints(s, project, toX, toY, ctx, facets)
      continue
    }
    if (!s.expression.trim()) continue
    let fn: CompiledExpression
    try {
      fn = compile(s.expression, SURFACE_VARS)
    } catch (err) {
      if (!firstError) firstError = err instanceof Error ? err.message : 'invalid expression'
      continue
    }
    collectSurface(s, fn, range, project, toX, toY, ctx, facets)
  }

  facets.sort((a, b) => b.depth - a.depth)
  ctx.save()
  ctx.beginPath()
  ctx.rect(0, 0, width, height)
  ctx.clip()
  for (const f of facets) f.draw()
  ctx.restore()

  drawEdges(false)

  // ── ticks and labels ───────────────────────────────────────────────────────
  if (options.showBox !== false) {
    drawAxisTicks(ctx, range, at, toX, toY, options)
  }

  if (options.title) {
    ctx.fillStyle = '#1b2b4b'
    ctx.font = 'bold 14px Inter, system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillText(options.title, width / 2, 8)
  }

  drawLegend(ctx, series, width, padTop)

  return firstError
}

/** Cut a surface into quads and hand them to the painter. */
function collectSurface(
  s: SurfaceSeries,
  fn: CompiledExpression,
  range: Range3D,
  project: (x: number, y: number, z: number) => Projected,
  toX: (p: Projected) => number,
  toY: (p: Projected) => number,
  ctx: CanvasRenderingContext2D,
  facets: { depth: number; draw: () => void }[],
) {
  const { xMin, xMax, yMin, yMax, zMin, zMax } = range
  const STEPS = 40
  const base = hexToRgb(s.color)
  const light = mix(base, [255, 255, 255], 0.62)
  const dark = mix(base, [0, 0, 0], 0.34)
  const zSpan = zMax - zMin || 1

  // Evaluate the grid once; every quad shares its corners with its neighbours.
  const zs: number[][] = []
  for (let i = 0; i <= STEPS; i++) {
    const row: number[] = []
    const x = xMin + ((xMax - xMin) * i) / STEPS
    for (let j = 0; j <= STEPS; j++) {
      row.push(fn.eval(x, yMin + ((yMax - yMin) * j) / STEPS))
    }
    zs.push(row)
  }

  const xAt = (i: number) => xMin + ((xMax - xMin) * i) / STEPS
  const yAt = (j: number) => yMin + ((yMax - yMin) * j) / STEPS
  // Hold the surface inside the box rather than letting a pole shoot off screen.
  const clamp = (z: number) => Math.max(zMin, Math.min(zMax, z))

  for (let i = 0; i < STEPS; i++) {
    for (let j = 0; j < STEPS; j++) {
      const raw = [zs[i][j], zs[i + 1][j], zs[i + 1][j + 1], zs[i][j + 1]]
      // A hole in the domain, such as the inside of a square root, is simply
      // left empty rather than drawn as a wall at zero.
      if (!raw.every(Number.isFinite)) continue

      const quad = [
        project(xAt(i), yAt(j), clamp(raw[0])),
        project(xAt(i + 1), yAt(j), clamp(raw[1])),
        project(xAt(i + 1), yAt(j + 1), clamp(raw[2])),
        project(xAt(i), yAt(j + 1), clamp(raw[3])),
      ]
      const depth = (quad[0].depth + quad[1].depth + quad[2].depth + quad[3].depth) / 4
      const meanZ = (raw[0] + raw[1] + raw[2] + raw[3]) / 4
      const t = Math.max(0, Math.min(1, (meanZ - zMin) / zSpan))

      // Shade by how steeply the quad leans, using the screen area as a cheap
      // stand-in for a normal: a face turned away from the viewer is narrower.
      const area = Math.abs(
        (toX(quad[1]) - toX(quad[0])) * (toY(quad[3]) - toY(quad[0])) -
        (toX(quad[3]) - toX(quad[0])) * (toY(quad[1]) - toY(quad[0])))
      const flat = Math.min(1, area / 400)
      const shade = 0.72 + 0.28 * flat

      const colour = mix(light, dark, t)
      const face = css([colour[0] * shade, colour[1] * shade, colour[2] * shade])

      facets.push({
        depth,
        draw: () => {
          ctx.beginPath()
          ctx.moveTo(toX(quad[0]), toY(quad[0]))
          for (let k = 1; k < 4; k++) ctx.lineTo(toX(quad[k]), toY(quad[k]))
          ctx.closePath()
          if (s.wireframe) {
            ctx.strokeStyle = face
            ctx.lineWidth = 1
            ctx.stroke()
            return
          }
          ctx.fillStyle = face
          ctx.fill()
          // A hairline in the same colour closes the seams between quads that
          // antialiasing would otherwise show as a grid of pale lines.
          ctx.strokeStyle = face
          ctx.lineWidth = 0.75
          ctx.stroke()
        },
      })
    }
  }
}

/** Project readings in space and hand them to the painter. */
function collectPoints(
  s: Points3DSeries,
  project: (x: number, y: number, z: number) => Projected,
  toX: (p: Projected) => number,
  toY: (p: Projected) => number,
  ctx: CanvasRenderingContext2D,
  facets: { depth: number; draw: () => void }[],
) {
  const pts = s.points.filter(p => Number.isFinite(p.x) && Number.isFinite(p.y) && Number.isFinite(p.z))
  if (!pts.length) return
  const projected = pts.map(p => project(p.x, p.y, p.z))

  if (s.join === 'line' && projected.length > 1) {
    // The joining line is drawn as one piece behind every marker, at the depth
    // of its furthest end, rather than being cut up between them.
    const depth = Math.max(...projected.map(p => p.depth))
    facets.push({
      depth,
      draw: () => {
        ctx.strokeStyle = s.color
        ctx.lineWidth = 2
        ctx.lineJoin = 'round'
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(toX(projected[0]), toY(projected[0]))
        for (let i = 1; i < projected.length; i++) ctx.lineTo(toX(projected[i]), toY(projected[i]))
        ctx.stroke()
      },
    })
  }

  if (!s.markers) return
  for (const p of projected) {
    facets.push({
      depth: p.depth,
      draw: () => {
        ctx.fillStyle = s.color
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(toX(p), toY(p), 4, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
      },
    })
  }
}

/** Numbers along the three axes, on whichever edge is nearest the viewer. */
function drawAxisTicks(
  ctx: CanvasRenderingContext2D,
  range: Range3D,
  at: (u: number, v: number, w: number) => Projected,
  toX: (p: Projected) => number,
  toY: (p: Projected) => number,
  options: Options3D,
) {
  const { xMin, xMax, yMin, yMax, zMin, zMax } = range
  ctx.font = '10px Inter, system-ui, sans-serif'
  ctx.fillStyle = '#64748b'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  /** Of the parallel edges, the one closest to the viewer carries the numbers. */
  const nearest = (candidates: BoxEdge[]): BoxEdge => {
    let best = candidates[0]
    let bestDepth = Infinity
    for (const edge of candidates) {
      const a = at(...edge[0])
      const b = at(...edge[1])
      const d = (a.depth + b.depth) / 2
      if (d < bestDepth) { bestDepth = d; best = edge }
    }
    return best
  }

  const label = (p: Projected, text: string, away: Projected) => {
    // Nudge the text away from the box so it does not sit on the line.
    const dx = toX(p) - toX(away)
    const dy = toY(p) - toY(away)
    const len = Math.hypot(dx, dy) || 1
    ctx.fillText(text, toX(p) + (dx / len) * 14, toY(p) + (dy / len) * 10)
  }

  // x runs along the bottom, at one of the two front bottom edges
  const xEdge = nearest([
    [[0, 0, 0], [1, 0, 0]],
    [[0, 1, 0], [1, 1, 0]],
  ])
  const xv = xEdge[0][1]
  const xStep = niceStep(xMax - xMin, 5)
  for (let v = Math.ceil(xMin / xStep) * xStep; v <= xMax + xStep / 2; v += xStep) {
    const u = (v - xMin) / (xMax - xMin || 1)
    if (u < -0.01 || u > 1.01) continue
    label(at(u, xv, 0), formatTick(v, xStep), at(u, 1 - xv, 0.35))
  }

  // y runs along the other bottom direction
  const yEdge = nearest([
    [[0, 0, 0], [0, 1, 0]],
    [[1, 0, 0], [1, 1, 0]],
  ])
  const yu = yEdge[0][0]
  const yStep = niceStep(yMax - yMin, 5)
  for (let v = Math.ceil(yMin / yStep) * yStep; v <= yMax + yStep / 2; v += yStep) {
    const w = (v - yMin) / (yMax - yMin || 1)
    if (w < -0.01 || w > 1.01) continue
    label(at(yu, w, 0), formatTick(v, yStep), at(1 - yu, w, 0.35))
  }

  // z runs up one of the four uprights
  const zEdge = nearest([
    [[0, 0, 0], [0, 0, 1]], [[1, 0, 0], [1, 0, 1]],
    [[0, 1, 0], [0, 1, 1]], [[1, 1, 0], [1, 1, 1]],
  ])
  const [zu, zv] = zEdge[0]
  const zStep = niceStep(zMax - zMin, 5)
  ctx.textAlign = 'right'
  for (let v = Math.ceil(zMin / zStep) * zStep; v <= zMax + zStep / 2; v += zStep) {
    const w = (v - zMin) / (zMax - zMin || 1)
    if (w < -0.01 || w > 1.01) continue
    label(at(zu, zv, w), formatTick(v, zStep), at(1 - zu, 1 - zv, w))
  }

  // axis names
  ctx.fillStyle = '#1b2b4b'
  ctx.font = 'bold 11px Inter, system-ui, sans-serif'
  ctx.textAlign = 'center'
  if (options.xLabel) label(at(0.5, xv, 0), options.xLabel, at(0.5, 1 - xv, 0.9))
  if (options.yLabel) label(at(yu, 0.5, 0), options.yLabel, at(1 - yu, 0.5, 0.9))
  if (options.zLabel) label(at(zu, zv, 1.04), options.zLabel, at(1 - zu, 1 - zv, 1.04))
}

function drawLegend(ctx: CanvasRenderingContext2D, series: Series3D[], width: number, top: number) {
  const drawn = series.filter(s => (s.kind === 'points3d' ? s.points.length > 0 : s.expression.trim()))
  if (drawn.length < 2) return
  ctx.font = '11px Inter, system-ui, sans-serif'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  let ly = top + 8
  for (const s of drawn) {
    const label = s.kind === 'points3d'
      ? (s.label?.trim() || 'Points')
      : `z = ${s.expression.replace(/^\s*z\s*=/i, '').trim()}`
    const w = ctx.measureText(label).width + 30
    ctx.fillStyle = 'rgba(255,255,255,0.85)'
    ctx.fillRect(width - w - 12, ly - 8, w, 16)
    ctx.fillStyle = s.color
    ctx.fillRect(width - w - 6, ly - 4, 10, 8)
    ctx.fillStyle = '#1b2b4b'
    ctx.fillText(label, width - w + 8, ly)
    ly += 18
  }
}
