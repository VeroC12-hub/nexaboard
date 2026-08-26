// Function plotting: a small expression evaluator plus a canvas renderer.
// No eval() and no parser dependency — expressions are tokenised, converted to
// RPN with the shunting-yard algorithm, and evaluated numerically.

// ── Tokeniser ─────────────────────────────────────────────────────────────────

type Token =
  | { kind: 'num'; value: number }
  | { kind: 'var' }
  | { kind: 'fn'; name: string }
  | { kind: 'op'; name: string }
  | { kind: 'lparen' }
  | { kind: 'rparen' }

const FUNCTIONS: Record<string, (n: number) => number> = {
  sin: Math.sin, cos: Math.cos, tan: Math.tan,
  asin: Math.asin, acos: Math.acos, atan: Math.atan,
  sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
  sqrt: Math.sqrt, abs: Math.abs, exp: Math.exp,
  ln: Math.log, log: (n: number) => Math.log10(n), log10: (n: number) => Math.log10(n),
  floor: Math.floor, ceil: Math.ceil, round: Math.round, sign: Math.sign,
}

const CONSTANTS: Record<string, number> = { pi: Math.PI, e: Math.E }

/** Binding power and associativity for the binary operators we support. */
const OPS: Record<string, { prec: number; rightAssoc?: boolean }> = {
  '+': { prec: 1 },
  '-': { prec: 1 },
  '*': { prec: 2 },
  '/': { prec: 2 },
  '%': { prec: 2 },
  '^': { prec: 4, rightAssoc: true },
  // Unary minus, given its own symbol so it never collides with subtraction.
  'u-': { prec: 3, rightAssoc: true },
}

class ParseError extends Error {}

function tokenise(input: string): Token[] {
  const src = input.toLowerCase().replace(/\s+/g, '')
  const tokens: Token[] = []
  let i = 0

  /** True when the previous token can end a value, so `2x` means `2 * x`. */
  const afterValue = () => {
    const prev = tokens[tokens.length - 1]
    return !!prev && (prev.kind === 'num' || prev.kind === 'var' || prev.kind === 'rparen')
  }

  while (i < src.length) {
    const ch = src[i]

    if (/[0-9.]/.test(ch)) {
      const match = /^[0-9]*\.?[0-9]+([eE][+-]?[0-9]+)?/.exec(src.slice(i))
      if (!match) throw new ParseError(`unexpected "${ch}"`)
      if (afterValue()) tokens.push({ kind: 'op', name: '*' })
      tokens.push({ kind: 'num', value: parseFloat(match[0]) })
      i += match[0].length
      continue
    }

    if (/[a-z]/.test(ch)) {
      const match = /^[a-z][a-z0-9]*/.exec(src.slice(i))!
      let name = match[0]
      // Greedily match the longest known name, so `sinx` reads as sin(x) and
      // `xy` does not swallow a function name that is not there.
      while (name.length > 1 && !(name in FUNCTIONS) && !(name in CONSTANTS) && name !== 'x') {
        name = name.slice(0, -1)
      }
      if (afterValue()) tokens.push({ kind: 'op', name: '*' })
      if (name in FUNCTIONS) tokens.push({ kind: 'fn', name })
      else if (name in CONSTANTS) tokens.push({ kind: 'num', value: CONSTANTS[name] })
      else if (name === 'x') tokens.push({ kind: 'var' })
      else throw new ParseError(`unknown name "${name}"`)
      i += name.length
      continue
    }

    if (ch === '(') {
      if (afterValue()) tokens.push({ kind: 'op', name: '*' })
      tokens.push({ kind: 'lparen' }); i++; continue
    }
    if (ch === ')') { tokens.push({ kind: 'rparen' }); i++; continue }

    if ('+-*/^%'.includes(ch)) {
      const prev = tokens[tokens.length - 1]
      const isUnary = ch === '-' && (!prev || prev.kind === 'op' || prev.kind === 'lparen')
      tokens.push({ kind: 'op', name: isUnary ? 'u-' : ch })
      i++
      continue
    }

    throw new ParseError(`unexpected "${ch}"`)
  }

  return tokens
}

// ── Shunting-yard → RPN ───────────────────────────────────────────────────────

function toRpn(tokens: Token[]): Token[] {
  const output: Token[] = []
  const stack: Token[] = []

  for (const token of tokens) {
    switch (token.kind) {
      case 'num':
      case 'var':
        output.push(token)
        break
      case 'fn':
        stack.push(token)
        break
      case 'op': {
        // Unary minus is a prefix operator: it applies to what comes next, so it
        // must never pop the operator it follows (`2^-1` is 2 to the power -1).
        if (token.name === 'u-') { stack.push(token); break }
        const { prec, rightAssoc } = OPS[token.name]
        while (stack.length) {
          const top = stack[stack.length - 1]
          if (top.kind === 'fn') { output.push(stack.pop()!); continue }
          if (top.kind !== 'op') break
          const topPrec = OPS[top.name].prec
          if (topPrec > prec || (topPrec === prec && !rightAssoc)) output.push(stack.pop()!)
          else break
        }
        stack.push(token)
        break
      }
      case 'lparen':
        stack.push(token)
        break
      case 'rparen': {
        let matched = false
        while (stack.length) {
          const top = stack.pop()!
          if (top.kind === 'lparen') { matched = true; break }
          output.push(top)
        }
        if (!matched) throw new ParseError('unbalanced brackets')
        if (stack[stack.length - 1]?.kind === 'fn') output.push(stack.pop()!)
        break
      }
    }
  }

  while (stack.length) {
    const top = stack.pop()!
    if (top.kind === 'lparen') throw new ParseError('unbalanced brackets')
    output.push(top)
  }

  return output
}

export interface CompiledExpression {
  /** Evaluate at x. Returns NaN where the function is undefined. */
  eval: (x: number) => number
}

/**
 * Parse `y = ...` into something plottable. Throws a readable message on bad
 * input so the graph editor can show it rather than silently drawing nothing.
 */
export function compile(source: string): CompiledExpression {
  const body = source.replace(/^\s*y\s*=/i, '').trim()
  if (!body) throw new ParseError('nothing to plot')
  const rpn = toRpn(tokenise(body))
  if (!rpn.length) throw new ParseError('nothing to plot')

  const evaluate = (x: number): number => {
    const stack: number[] = []
    for (const token of rpn) {
      if (token.kind === 'num') { stack.push(token.value); continue }
      if (token.kind === 'var') { stack.push(x); continue }
      if (token.kind === 'fn') {
        const a = stack.pop()
        if (a === undefined) return NaN
        stack.push(FUNCTIONS[token.name](a))
        continue
      }
      if (token.kind === 'op') {
        if (token.name === 'u-') {
          const a = stack.pop()
          if (a === undefined) return NaN
          stack.push(-a)
          continue
        }
        const b = stack.pop()
        const a = stack.pop()
        if (a === undefined || b === undefined) return NaN
        switch (token.name) {
          case '+': stack.push(a + b); break
          case '-': stack.push(a - b); break
          case '*': stack.push(a * b); break
          case '/': stack.push(a / b); break
          case '%': stack.push(a % b); break
          case '^': stack.push(Math.pow(a, b)); break
        }
      }
    }
    return stack.length === 1 ? stack[0] : NaN
  }

  // Fail fast on structurally broken input rather than at draw time.
  const probe = evaluate(1)
  if (Number.isNaN(probe) && Number.isNaN(evaluate(0.5)) && Number.isNaN(evaluate(2))) {
    throw new ParseError('could not evaluate this expression')
  }

  return { eval: evaluate }
}

/** Validate without throwing. Returns null when fine, or a message to show. */
export function checkExpression(source: string): string | null {
  try { compile(source); return null } catch (err) {
    return err instanceof Error ? err.message : 'invalid expression'
  }
}

// ── Renderer ──────────────────────────────────────────────────────────────────

export interface PlotPoint {
  x: number
  y: number
}

/** A curve worked out from an equation. */
export interface FunctionSeries {
  kind: 'function'
  expression: string
  color: string
}

/**
 * A curve read straight off a list of points, for when there is no equation:
 * a table of readings, an experiment, a survey.
 *
 * The points are drawn in the order they were given rather than sorted by x, so
 * a closed shape or a path that doubles back survives. A table of readings is
 * normally entered in order anyway.
 */
export interface PointSeries {
  kind: 'points'
  points: PlotPoint[]
  color: string
  /** Straight segments, a smooth curve through them, or nothing joining them. */
  join: 'none' | 'line' | 'smooth'
  /** A marker at each reading. */
  markers: boolean
  label?: string
}

export type PlotSeries = FunctionSeries | PointSeries

const NUMBER = /-?\d*\.?\d+(?:[eE][+-]?\d+)?/g

/**
 * Read points out of whatever the teacher typed.
 *
 * Accepts a pair per line ("1, 2", "(1,2)", "1 2") and several pairs on one
 * line, so both a column pasted from a spreadsheet and "(1,2) (3,4) (5,6)"
 * work. Anything that is not a number is ignored, which lets a header row like
 * "x y" sit at the top harmlessly.
 */
export function parsePoints(text: string): { points: PlotPoint[]; error: string | null } {
  const points: PlotPoint[] = []
  const lines = text.split(/\r?\n/)
  for (let i = 0; i < lines.length; i++) {
    const found = lines[i].match(NUMBER)
    if (!found) continue
    if (found.length % 2 !== 0) {
      return { points, error: `Line ${i + 1} has an odd number of values, so a point is missing its pair.` }
    }
    for (let j = 0; j < found.length; j += 2) {
      const x = parseFloat(found[j])
      const y = parseFloat(found[j + 1])
      if (Number.isFinite(x) && Number.isFinite(y)) points.push({ x, y })
    }
  }
  return { points, error: null }
}

/** The x window that just contains every point, with a little air either side. */
export function autoXRange(series: PlotSeries[]): { xMin: number; xMax: number } | null {
  const xs: number[] = []
  for (const s of series) {
    if (s.kind !== 'points') continue
    for (const p of s.points) if (Number.isFinite(p.x)) xs.push(p.x)
  }
  if (!xs.length) return null
  let lo = Math.min(...xs)
  let hi = Math.max(...xs)
  if (hi === lo) { lo -= 1; hi += 1 }
  const pad = (hi - lo) * 0.08
  return { xMin: lo - pad, xMax: hi + pad }
}

export interface PlotRange {
  xMin: number
  xMax: number
  yMin: number
  yMax: number
}

export interface PlotOptions {
  title?: string
  xLabel?: string
  yLabel?: string
  showGrid?: boolean
}

/** A tick step that lands on 1, 2 or 5 times a power of ten. */
function niceStep(span: number, targetTicks: number): number {
  const raw = span / Math.max(1, targetTicks)
  const magnitude = Math.pow(10, Math.floor(Math.log10(raw)))
  const scaled = raw / magnitude
  const step = scaled >= 5 ? 10 : scaled >= 2 ? 5 : scaled >= 1 ? 2 : 1
  return step * magnitude
}

function formatTick(value: number, step: number): string {
  if (Math.abs(value) < step / 1000) return '0'
  const decimals = Math.max(0, -Math.floor(Math.log10(step)))
  const text = value.toFixed(Math.min(decimals, 6))
  // Only trim inside the fraction: a blanket trim turns "-10" into "-1".
  return text.includes('.') ? text.replace(/\.?0+$/, '') : text
}

/**
 * Work out a sensible y range from the data, ignoring the runaway values around
 * asymptotes so that tan(x) does not flatten everything else into a line.
 */
export function autoYRange(series: PlotSeries[], xMin: number, xMax: number): { yMin: number; yMax: number } {
  const samples: number[] = []
  for (const s of series) {
    if (s.kind === 'points') {
      // Only what is actually on screen, so narrowing x also tightens y.
      for (const p of s.points) {
        if (p.x >= xMin && p.x <= xMax && Number.isFinite(p.y)) samples.push(p.y)
      }
      continue
    }
    let compiled: CompiledExpression
    try { compiled = compile(s.expression) } catch { continue }
    for (let i = 0; i <= 400; i++) {
      const y = compiled.eval(xMin + ((xMax - xMin) * i) / 400)
      if (Number.isFinite(y)) samples.push(y)
    }
  }
  if (!samples.length) return { yMin: -10, yMax: 10 }

  samples.sort((a, b) => a - b)
  const at = (q: number) => samples[Math.min(samples.length - 1, Math.max(0, Math.round(q * (samples.length - 1))))]
  let lo = at(0.02)
  let hi = at(0.98)
  if (!(hi > lo)) { lo -= 1; hi += 1 }

  const pad = (hi - lo) * 0.12
  lo -= pad
  hi += pad
  // Keep the x axis in frame when the curve sits close to it.
  if (lo > 0 && lo < (hi - lo) * 0.5) lo = 0
  if (hi < 0 && -hi < (hi - lo) * 0.5) hi = 0
  return { yMin: lo, yMax: hi }
}

/** Draw one set of readings: the joining line, then a marker on each point. */
function drawPointSeries(
  ctx: CanvasRenderingContext2D,
  s: PointSeries,
  toPxX: (x: number) => number,
  toPxY: (y: number) => number,
) {
  if (!s.points.length) return
  const px = s.points.map(p => ({ x: toPxX(p.x), y: toPxY(p.y) }))

  if (s.join !== 'none' && px.length > 1) {
    ctx.strokeStyle = s.color
    ctx.lineWidth = 2.25
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(px[0].x, px[0].y)
    if (s.join === 'line') {
      for (let i = 1; i < px.length; i++) ctx.lineTo(px[i].x, px[i].y)
    } else {
      // Catmull-Rom through every reading, written as the beziers canvas draws.
      // It passes through the points rather than near them, which matters when
      // the class is reading values back off the curve.
      for (let i = 0; i < px.length - 1; i++) {
        const p0 = i > 0 ? px[i - 1] : px[i]
        const p1 = px[i]
        const p2 = px[i + 1]
        const p3 = i + 2 < px.length ? px[i + 2] : p2
        ctx.bezierCurveTo(
          p1.x + (p2.x - p0.x) / 6, p1.y + (p2.y - p0.y) / 6,
          p2.x - (p3.x - p1.x) / 6, p2.y - (p3.y - p1.y) / 6,
          p2.x, p2.y,
        )
      }
    }
    ctx.stroke()
  }

  if (!s.markers) return
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#ffffff'
  ctx.fillStyle = s.color
  for (const p of px) {
    ctx.beginPath()
    ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
  }
}

/** Draw the graph onto a canvas. Returns an error message for any bad series. */
export function drawPlot(
  canvas: HTMLCanvasElement,
  series: PlotSeries[],
  range: PlotRange,
  options: PlotOptions = {},
): string | null {
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const { xMin, xMax, yMin, yMax } = range
  const width = canvas.width
  const height = canvas.height
  const pad = { top: options.title ? 34 : 16, right: 16, bottom: options.xLabel ? 44 : 30, left: 52 }
  const plotW = width - pad.left - pad.right
  const plotH = height - pad.top - pad.bottom

  const toPxX = (x: number) => pad.left + ((x - xMin) / (xMax - xMin)) * plotW
  const toPxY = (y: number) => pad.top + plotH - ((y - yMin) / (yMax - yMin)) * plotH

  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, width, height)

  const xStep = niceStep(xMax - xMin, 8)
  const yStep = niceStep(yMax - yMin, 6)

  // Grid
  if (options.showGrid !== false) {
    ctx.strokeStyle = '#e8f5e2'
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
      const px = Math.round(toPxX(x)) + 0.5
      ctx.moveTo(px, pad.top); ctx.lineTo(px, pad.top + plotH)
    }
    for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
      const py = Math.round(toPxY(y)) + 0.5
      ctx.moveTo(pad.left, py); ctx.lineTo(pad.left + plotW, py)
    }
    ctx.stroke()
  }

  // Axes, drawn at zero when zero is in frame, otherwise along the edges
  ctx.strokeStyle = '#94a3b8'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  const axisY = yMin <= 0 && yMax >= 0 ? toPxY(0) : pad.top + plotH
  const axisX = xMin <= 0 && xMax >= 0 ? toPxX(0) : pad.left
  ctx.moveTo(pad.left, Math.round(axisY) + 0.5); ctx.lineTo(pad.left + plotW, Math.round(axisY) + 0.5)
  ctx.moveTo(Math.round(axisX) + 0.5, pad.top); ctx.lineTo(Math.round(axisX) + 0.5, pad.top + plotH)
  ctx.stroke()

  // Tick labels
  ctx.fillStyle = '#64748b'
  ctx.font = '11px Inter, system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'
  for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax + xStep / 2; x += xStep) {
    if (Math.abs(x) < xStep / 1000 && xMin <= 0 && xMax >= 0) continue
    ctx.fillText(formatTick(x, xStep), toPxX(x), Math.min(axisY + 5, pad.top + plotH + 5))
  }
  ctx.textAlign = 'right'
  ctx.textBaseline = 'middle'
  for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax + yStep / 2; y += yStep) {
    if (Math.abs(y) < yStep / 1000 && yMin <= 0 && yMax >= 0) continue
    ctx.fillText(formatTick(y, yStep), pad.left - 6, toPxY(y))
  }

  // Origin label
  if (xMin <= 0 && xMax >= 0 && yMin <= 0 && yMax >= 0) {
    ctx.textAlign = 'right'
    ctx.textBaseline = 'top'
    ctx.fillText('0', toPxX(0) - 4, toPxY(0) + 4)
  }

  // Curves
  let firstError: string | null = null
  const jumpLimit = plotH * 0.6

  for (const s of series) {
    // Clip first, then build the path: starting a new path after clipping would
    // throw the curve away.
    ctx.save()
    ctx.beginPath()
    ctx.rect(pad.left, pad.top, plotW, plotH)
    ctx.clip()

    if (s.kind === 'points') {
      drawPointSeries(ctx, s, toPxX, toPxY)
      ctx.restore()
      continue
    }

    if (!s.expression.trim()) { ctx.restore(); continue }
    let compiled: CompiledExpression
    try {
      compiled = compile(s.expression)
    } catch (err) {
      if (!firstError) firstError = err instanceof Error ? err.message : 'invalid expression'
      ctx.restore()
      continue
    }

    ctx.strokeStyle = s.color
    ctx.lineWidth = 2.25
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.beginPath()

    let pen = false
    let prevPy = 0
    const steps = Math.max(200, Math.round(plotW * 2))
    for (let i = 0; i <= steps; i++) {
      const x = xMin + ((xMax - xMin) * i) / steps
      const y = compiled.eval(x)
      if (!Number.isFinite(y)) { pen = false; continue }
      const px = toPxX(x)
      const py = toPxY(y)
      // Clamp far off-screen values so a near-vertical segment stays drawable,
      // but break the line across an asymptote instead of joining the branches.
      const clamped = Math.max(pad.top - plotH, Math.min(pad.top + plotH * 2, py))
      if (pen && Math.abs(clamped - prevPy) > jumpLimit && (py < pad.top || py > pad.top + plotH)) {
        pen = false
      }
      if (!pen) { ctx.moveTo(px, clamped); pen = true } else { ctx.lineTo(px, clamped) }
      prevPy = clamped
    }
    ctx.stroke()
    ctx.restore()
  }

  // Title and axis labels
  if (options.title) {
    ctx.fillStyle = '#1b2b4b'
    ctx.font = 'bold 14px Inter, system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillText(options.title, width / 2, 10)
  }
  ctx.fillStyle = '#64748b'
  ctx.font = '12px Inter, system-ui, sans-serif'
  if (options.xLabel) {
    ctx.textAlign = 'center'
    ctx.textBaseline = 'bottom'
    ctx.fillText(options.xLabel, pad.left + plotW / 2, height - 6)
  }
  if (options.yLabel) {
    ctx.save()
    ctx.translate(12, pad.top + plotH / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillText(options.yLabel, 0, 0)
    ctx.restore()
  }

  // Legend
  const drawn = series.filter(s =>
    s.kind === 'points'
      ? s.points.length > 0
      : s.expression.trim() && !checkExpression(s.expression))
  if (drawn.length > 1) {
    ctx.font = '11px Inter, system-ui, sans-serif'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    let ly = pad.top + 10
    for (const s of drawn) {
      const label = s.kind === 'points'
        ? (s.label?.trim() || 'Points')
        : `y = ${s.expression.replace(/^\s*y\s*=/i, '').trim()}`
      const w = ctx.measureText(label).width + 34
      ctx.fillStyle = 'rgba(255,255,255,0.85)'
      ctx.fillRect(pad.left + plotW - w - 6, ly - 8, w, 16)
      // Match the swatch to what is actually on the graph, so a scatter with no
      // joining line is not advertised in the key as a line.
      const joined = s.kind !== 'points' || s.join !== 'none'
      if (joined) {
        ctx.strokeStyle = s.color
        ctx.lineWidth = 2.5
        ctx.beginPath()
        ctx.moveTo(pad.left + plotW - w, ly)
        ctx.lineTo(pad.left + plotW - w + 14, ly)
        ctx.stroke()
      }
      if (s.kind === 'points' && s.markers) {
        ctx.fillStyle = s.color
        ctx.beginPath()
        ctx.arc(pad.left + plotW - w + 7, ly, 3.5, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.fillStyle = '#1b2b4b'
      ctx.fillText(label, pad.left + plotW - w + 18, ly)
      ly += 18
    }
  }

  return firstError
}
