import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { X, Plus, Trash2, LineChart, RotateCcw, Crosshair, Box } from 'lucide-react'
import { drawPlot, autoYRange, autoXRange, checkExpression, parsePoints, type PlotSeries } from '../lib/plot'
import {
  drawPlot3d, autoZRange, autoXYRange, parsePoints3d, SURFACE_VARS,
  type Series3D,
} from '../lib/plot3d'

interface Props {
  onInsert: (dataUrl: string) => void
  onClose: () => void
}

const CURVE_COLORS = ['#5ab82e', '#3b82f6', '#ef4444', '#8b5cf6', '#f59e0b', '#ec4899']

const EXAMPLES: { label: string; expression: string }[] = [
  { label: 'Straight line', expression: '2x + 1' },
  { label: 'Parabola', expression: 'x^2' },
  { label: 'Cubic', expression: 'x^3 - 3x' },
  { label: 'Reciprocal', expression: '1/x' },
  { label: 'Sine', expression: 'sin(x)' },
  { label: 'Cosine', expression: 'cos(x)' },
  { label: 'Tangent', expression: 'tan(x)' },
  { label: 'Exponential', expression: '2^x' },
  { label: 'Natural log', expression: 'ln(x)' },
  { label: 'Square root', expression: 'sqrt(x)' },
  { label: 'Modulus', expression: 'abs(x)' },
  { label: 'Circle (upper half)', expression: 'sqrt(9 - x^2)' },
]

const POINTS_PLACEHOLDER = ['1, 2', '2, 4.5', '3, 9'].join('\n')
const POINTS3D_PLACEHOLDER = ['1, 1, 2', '2, 3, 5', '4, 2, 7'].join('\n')

const SURFACE_EXAMPLES: { label: string; expression: string }[] = [
  { label: 'Bowl', expression: 'x^2 + y^2' },
  { label: 'Saddle', expression: 'x^2 - y^2' },
  { label: 'Plane', expression: '2x + 3y' },
  { label: 'Ripple', expression: 'sin(sqrt(x^2 + y^2))' },
  { label: 'Waves', expression: 'sin(x)*cos(y)' },
  { label: 'Product', expression: 'x*y' },
  { label: 'Cone', expression: 'sqrt(x^2 + y^2)' },
  { label: 'Peak', expression: 'exp(0 - x^2 - y^2)' },
]

const WIDTH = 640
const HEIGHT = 440

type Join = 'none' | 'line' | 'smooth'

/**
 * What the panel is editing.
 *
 * A point row keeps the raw text the teacher typed, not the parsed points, so
 * a half finished line survives a re-render. Parsing happens on the way to the
 * canvas, which keeps plot.ts free of any notion of a text box.
 */
type Row =
  | { kind: 'function'; expression: string; color: string }
  | { kind: 'points'; text: string; label: string; color: string; join: Join; markers: boolean }

/** The same idea one dimension up: a surface z = f(x, y), or readings in space. */
type Row3D =
  | { kind: 'surface'; expression: string; color: string; wireframe: boolean }
  | { kind: 'points3d'; text: string; label: string; color: string; join: 'none' | 'line'; markers: boolean }

export default function GraphModal({ onInsert, onClose }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [rows, setRows] = useState<Row[]>([{ kind: 'function', expression: 'x^2', color: CURVE_COLORS[0] }])

  const parsed = useMemo(
    () => rows.map(r => (r.kind === 'points' ? parsePoints(r.text) : null)),
    [rows])

  const series = useMemo<PlotSeries[]>(
    () => rows.map((r, i) => r.kind === 'function'
      ? { kind: 'function', expression: r.expression, color: r.color }
      : {
          kind: 'points',
          points: parsed[i]?.points ?? [],
          color: r.color,
          join: r.join,
          markers: r.markers,
          label: r.label,
        }),
    [rows, parsed])
  // Three dimensional mode keeps its own rows, so switching back and forth does
  // not throw away what was typed in the other one.
  const [mode, setMode] = useState<'2d' | '3d'>('2d')
  const [rows3d, setRows3d] = useState<Row3D[]>([
    { kind: 'surface', expression: 'x^2 + y^2', color: CURVE_COLORS[0], wireframe: false },
  ])
  const [turn, setTurn] = useState(35)
  const [tilt, setTilt] = useState(25)
  const [y3Min, setY3Min] = useState('-5')
  const [y3Max, setY3Max] = useState('5')
  const [zMinText, setZMinText] = useState('')
  const [zMaxText, setZMaxText] = useState('')
  const [autoZ, setAutoZ] = useState(true)
  const [zLabel, setZLabel] = useState('z')
  const lastAutoZ = useRef<{ min: number; max: number }>({ min: -10, max: 10 })

  const parsed3d = useMemo(
    () => rows3d.map(r => (r.kind === 'points3d' ? parsePoints3d(r.text) : null)),
    [rows3d])

  const series3d = useMemo<Series3D[]>(
    () => rows3d.map((r, i) => r.kind === 'surface'
      ? { kind: 'surface', expression: r.expression, color: r.color, wireframe: r.wireframe }
      : {
          kind: 'points3d',
          points: parsed3d[i]?.points ?? [],
          color: r.color,
          join: r.join,
          markers: r.markers,
          label: r.label,
        }),
    [rows3d, parsed3d])

  const [title, setTitle] = useState('')
  const [xLabel, setXLabel] = useState('x')
  const [yLabel, setYLabel] = useState('y')
  const [xMin, setXMin] = useState('-10')
  const [xMax, setXMax] = useState('10')
  const [yMin, setYMin] = useState('')
  const [yMax, setYMax] = useState('')
  const [autoY, setAutoY] = useState(true)
  const [showGrid, setShowGrid] = useState(true)
  const [error, setError] = useState<string | null>(null)
  // Last auto-fitted y range, used to seed the boxes when auto fit is switched off.
  const lastAutoY = useRef<{ min: number; max: number }>({ min: -10, max: 10 })

  const num = (text: string, fallback: number) => {
    const value = parseFloat(text)
    return Number.isFinite(value) ? value : fallback
  }

  const render = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (mode === '3d') {
      const ax0 = num(xMin, -5)
      let ax1 = num(xMax, 5)
      if (ax1 <= ax0) ax1 = ax0 + 1
      const ay0 = num(y3Min, -5)
      let ay1 = num(y3Max, 5)
      if (ay1 <= ay0) ay1 = ay0 + 1

      let az0: number
      let az1: number
      if (autoZ) {
        const auto = autoZRange(series3d, ax0, ax1, ay0, ay1)
        az0 = auto.zMin
        az1 = auto.zMax
        lastAutoZ.current = { min: az0, max: az1 }
      } else {
        az0 = num(zMinText, -10)
        az1 = num(zMaxText, 10)
        if (az1 <= az0) az1 = az0 + 1
      }

      setError(drawPlot3d(
        canvas, series3d,
        { xMin: ax0, xMax: ax1, yMin: ay0, yMax: ay1, zMin: az0, zMax: az1 },
        { turn, tilt },
        {
          title: title.trim() || undefined,
          xLabel: xLabel.trim() || undefined,
          yLabel: yLabel.trim() || undefined,
          zLabel: zLabel.trim() || undefined,
        },
      ))
      return
    }

    const x0 = num(xMin, -10)
    let x1 = num(xMax, 10)
    if (x1 <= x0) x1 = x0 + 1

    let y0: number
    let y1: number
    if (autoY) {
      const auto = autoYRange(series, x0, x1)
      y0 = auto.yMin
      y1 = auto.yMax
      lastAutoY.current = { min: y0, max: y1 }
    } else {
      y0 = num(yMin, -10)
      y1 = num(yMax, 10)
      if (y1 <= y0) y1 = y0 + 1
    }

    const problem = drawPlot(canvas, series, { xMin: x0, xMax: x1, yMin: y0, yMax: y1 }, {
      title: title.trim() || undefined,
      xLabel: xLabel.trim() || undefined,
      yLabel: yLabel.trim() || undefined,
      showGrid,
    })
    setError(problem)
  }, [mode, series, series3d, title, xLabel, yLabel, zLabel,
      xMin, xMax, yMin, yMax, autoY, showGrid,
      y3Min, y3Max, zMinText, zMaxText, autoZ, turn, tilt])

  /** Taking manual control starts from whatever the auto fit last chose. */
  const toggleAutoY = (on: boolean) => {
    if (!on) {
      const tidy = (n: number) => {
        const text = n.toFixed(2)
        return text.includes('.') ? text.replace(/\.?0+$/, '') : text
      }
      setYMin(tidy(lastAutoY.current.min))
      setYMax(tidy(lastAutoY.current.max))
    }
    setAutoY(on)
  }

  useEffect(() => { render() }, [render])

  const patchRow = (i: number, patch: Partial<Row>) =>
    setRows(prev => prev.map((r, idx) => (idx === i ? { ...r, ...patch } as Row : r)))

  const addFunction = () =>
    setRows(prev => [...prev, { kind: 'function', expression: '', color: CURVE_COLORS[prev.length % CURVE_COLORS.length] }])

  const addPoints = () =>
    setRows(prev => [...prev, {
      kind: 'points', text: '', label: '', join: 'line', markers: true,
      color: CURVE_COLORS[prev.length % CURVE_COLORS.length],
    }])

  const removeRow = (i: number) => setRows(prev => prev.filter((_, idx) => idx !== i))

  const resetView = () => {
    setXMin('-10'); setXMax('10'); setAutoY(true)
  }

  /** Frame the readings, for when the points sit nowhere near -10 to 10. */
  const fitToData = () => {
    const fit = autoXRange(series)
    if (!fit) return
    const tidy = (n: number) => {
      const text = n.toFixed(2)
      return text.includes('.') ? text.replace(/\.?0+$/, '') : text
    }
    setXMin(tidy(fit.xMin)); setXMax(tidy(fit.xMax)); setAutoY(true)
  }

  const hasPoints = series.some(s => s.kind === 'points' && s.points.length > 0)

  const patchRow3d = (i: number, patch: Partial<Row3D>) =>
    setRows3d(prev => prev.map((r, idx) => (idx === i ? { ...r, ...patch } as Row3D : r)))

  const addSurface = () =>
    setRows3d(prev => [...prev, {
      kind: 'surface', expression: '', wireframe: false,
      color: CURVE_COLORS[prev.length % CURVE_COLORS.length],
    }])

  const addPoints3d = () =>
    setRows3d(prev => [...prev, {
      kind: 'points3d', text: '', label: '', join: 'none', markers: true,
      color: CURVE_COLORS[prev.length % CURVE_COLORS.length],
    }])

  const removeRow3d = (i: number) => setRows3d(prev => prev.filter((_, idx) => idx !== i))

  const tidy = (n: number) => {
    const text = n.toFixed(2)
    return text.includes('.') ? text.replace(/\.?0+$/, '') : text
  }

  /** Frame the box around readings in space. */
  const fitToData3d = () => {
    const fit = autoXYRange(series3d)
    if (!fit) return
    setXMin(tidy(fit.xMin)); setXMax(tidy(fit.xMax))
    setY3Min(tidy(fit.yMin)); setY3Max(tidy(fit.yMax))
    setAutoZ(true)
  }

  const toggleAutoZ = (on: boolean) => {
    if (!on) {
      setZMinText(tidy(lastAutoZ.current.min))
      setZMaxText(tidy(lastAutoZ.current.max))
    }
    setAutoZ(on)
  }

  const hasPoints3d = series3d.some(s => s.kind === 'points3d' && s.points.length > 0)

  const insert = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    onInsert(canvas.toDataURL('image/png'))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onMouseDown={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden border border-green-200"
        onMouseDown={e => e.stopPropagation()}
        onKeyDown={e => { if (e.key === 'Escape') onClose() }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-green-100 bg-[#f3fcf0] shrink-0">
          <LineChart size={16} className="text-[#5ab82e]" />
          <span className="font-bold text-sm text-[#1b2b4b]">Graph</span>
          <div className="flex items-center bg-white border border-green-200 rounded-lg p-0.5 gap-0.5 ml-2">
            <button onClick={() => setMode('2d')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${mode === '2d' ? 'bg-[#5ab82e] text-white' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}>
              <LineChart size={12} /> Flat
            </button>
            <button onClick={() => setMode('3d')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${mode === '3d' ? 'bg-[#5ab82e] text-white' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}>
              <Box size={12} /> 3D
            </button>
          </div>
          <span className="text-[11px] text-[#6b7280] hidden lg:inline">
            {mode === '2d' ? 'An equation in x, or your own table of points' : 'A surface z = f(x, y), or points in space'}
          </span>
          <button onClick={onClose} className="ml-auto p-1 text-[#9ca3af] hover:text-[#1b2b4b] transition-colors rounded">
            <X size={16} />
          </button>
        </div>

        {/* Reversed when stacked so the graph stays on screen on shorter windows */}
        <div className="flex flex-1 min-h-0 flex-col-reverse lg:flex-row">
          {/* Controls */}
          <div className="w-full lg:w-80 shrink-0 border-t lg:border-t-0 lg:border-r border-green-100 overflow-y-auto p-4 flex flex-col gap-4">
            {mode === '2d' ? <>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider">Curves</label>
                <div className="flex items-center gap-2">
                  <button onClick={addFunction} className="flex items-center gap-1 text-xs text-[#5ab82e] hover:text-[#489f22] font-medium">
                    <Plus size={12} /> Equation
                  </button>
                  <button onClick={addPoints} className="flex items-center gap-1 text-xs text-[#5ab82e] hover:text-[#489f22] font-medium">
                    <Plus size={12} /> Points
                  </button>
                </div>
              </div>
              <div className="space-y-1.5">
                {rows.map((r, i) => {
                  if (r.kind === 'function') {
                    const problem = r.expression.trim() ? checkExpression(r.expression) : null
                    return (
                      <div key={i}>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: r.color }} />
                          <span className="text-xs text-[#6b7280] font-mono shrink-0">y =</span>
                          <input
                            value={r.expression}
                            onChange={e => patchRow(i, { expression: e.target.value })}
                            spellCheck={false}
                            placeholder="x^2"
                            className={`flex-1 min-w-0 bg-[#f9fef6] border rounded-lg px-2 py-1.5 font-mono text-sm text-[#1b2b4b] outline-none focus:bg-white ${problem ? 'border-red-300 focus:border-red-400' : 'border-green-200 focus:border-[#5ab82e]'}`}
                          />
                          <button onClick={() => removeRow(i)} disabled={rows.length <= 1}
                            className="text-red-400 hover:text-red-600 disabled:opacity-25 disabled:cursor-not-allowed shrink-0">
                            <Trash2 size={13} />
                          </button>
                        </div>
                        {problem && <div className="text-[10px] text-red-500 ml-[4.2rem] mt-0.5">{problem}</div>}
                      </div>
                    )
                  }

                  const result = parsed[i]
                  const count = result?.points.length ?? 0
                  return (
                    <div key={i} className="rounded-lg border border-green-200 bg-[#f9fef6] p-2">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: r.color }} />
                        <input
                          value={r.label}
                          onChange={e => patchRow(i, { label: e.target.value })}
                          placeholder="Points"
                          className="flex-1 min-w-0 bg-white border border-green-200 rounded px-2 py-1 text-xs text-[#1b2b4b] outline-none focus:border-[#5ab82e]"
                        />
                        <button onClick={() => removeRow(i)} disabled={rows.length <= 1}
                          className="text-red-400 hover:text-red-600 disabled:opacity-25 disabled:cursor-not-allowed shrink-0">
                          <Trash2 size={13} />
                        </button>
                      </div>
                      <textarea
                        value={r.text}
                        onChange={e => patchRow(i, { text: e.target.value })}
                        spellCheck={false}
                        rows={5}
                        placeholder={POINTS_PLACEHOLDER}
                        className="w-full bg-white border border-green-200 rounded-lg px-2 py-1.5 font-mono text-xs text-[#1b2b4b] outline-none focus:border-[#5ab82e] resize-y"
                      />
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <select value={r.join} onChange={e => patchRow(i, { join: e.target.value as Join })}
                          className="bg-white border border-green-200 rounded px-1.5 py-1 text-[11px] text-[#1b2b4b] outline-none focus:border-[#5ab82e]">
                          <option value="none">Points only</option>
                          <option value="line">Join with lines</option>
                          <option value="smooth">Smooth curve</option>
                        </select>
                        <label className="flex items-center gap-1 text-[11px] text-[#6b7280] cursor-pointer">
                          <input type="checkbox" checked={r.markers}
                            onChange={e => patchRow(i, { markers: e.target.checked })}
                            className="accent-[#5ab82e]" />
                          Show points
                        </label>
                        <span className="ml-auto text-[10px] text-[#9ca3af]">
                          {count} {count === 1 ? 'point' : 'points'}
                        </span>
                      </div>
                      {result?.error && <div className="text-[10px] text-red-500 mt-0.5">{result.error}</div>}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Range */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider">Range</label>
                <div className="flex items-center gap-2">
                  {hasPoints && (
                    <button onClick={fitToData} title="Frame the graph around the points"
                      className="flex items-center gap-1 text-[10px] text-[#5ab82e] hover:text-[#489f22] font-medium">
                      <Crosshair size={10} /> Fit to data
                    </button>
                  )}
                  <button onClick={resetView} className="flex items-center gap-1 text-[10px] text-[#6b7280] hover:text-[#1b2b4b] font-medium">
                    <RotateCcw size={10} /> Reset
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <label className="text-[10px] text-[#6b7280]">x from
                  <input value={xMin} onChange={e => setXMin(e.target.value)} type="number"
                    className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e]" />
                </label>
                <label className="text-[10px] text-[#6b7280]">x to
                  <input value={xMax} onChange={e => setXMax(e.target.value)} type="number"
                    className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e]" />
                </label>
                <label className={`text-[10px] ${autoY ? 'text-[#c7cdd6]' : 'text-[#6b7280]'}`}>y from
                  <input value={autoY ? '' : yMin} onChange={e => setYMin(e.target.value)} type="number"
                    disabled={autoY} placeholder="auto"
                    className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e] disabled:opacity-50" />
                </label>
                <label className={`text-[10px] ${autoY ? 'text-[#c7cdd6]' : 'text-[#6b7280]'}`}>y to
                  <input value={autoY ? '' : yMax} onChange={e => setYMax(e.target.value)} type="number"
                    disabled={autoY} placeholder="auto"
                    className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e] disabled:opacity-50" />
                </label>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <label className="flex items-center gap-1.5 text-xs text-[#6b7280] cursor-pointer">
                  <input type="checkbox" checked={autoY} onChange={e => toggleAutoY(e.target.checked)}
                    className="accent-[#5ab82e]" />
                  Fit y automatically
                </label>
                <label className="flex items-center gap-1.5 text-xs text-[#6b7280] cursor-pointer">
                  <input type="checkbox" checked={showGrid} onChange={e => setShowGrid(e.target.checked)}
                    className="accent-[#5ab82e]" />
                  Grid
                </label>
              </div>
            </div>

            {/* Labels */}
            <div>
              <label className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">Labels</label>
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title (optional)"
                className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e] mb-1.5" />
              <div className="grid grid-cols-2 gap-1.5">
                <input value={xLabel} onChange={e => setXLabel(e.target.value)} placeholder="x axis"
                  className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e]" />
                <input value={yLabel} onChange={e => setYLabel(e.target.value)} placeholder="y axis"
                  className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e]" />
              </div>
            </div>

            {/* Examples */}
            <div>
              <label className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">Quick picks</label>
              <div className="flex flex-wrap gap-1">
                {EXAMPLES.map(ex => (
                  <button key={ex.label} title={ex.label}
                    onClick={() => setRows([{ kind: 'function', expression: ex.expression, color: CURVE_COLORS[0] }])}
                    className="px-2 py-1 rounded-lg border border-green-200 bg-white text-[11px] font-mono text-[#1b2b4b] hover:bg-[#f3fcf0] hover:border-[#5ab82e] transition-colors">
                    {ex.expression}
                  </button>
                ))}
              </div>
            </div>
            </> : <>

            {/* Surfaces and readings in space */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider">Surfaces</label>
                <div className="flex items-center gap-2">
                  <button onClick={addSurface} className="flex items-center gap-1 text-xs text-[#5ab82e] hover:text-[#489f22] font-medium">
                    <Plus size={12} /> Surface
                  </button>
                  <button onClick={addPoints3d} className="flex items-center gap-1 text-xs text-[#5ab82e] hover:text-[#489f22] font-medium">
                    <Plus size={12} /> Points
                  </button>
                </div>
              </div>
              <div className="space-y-1.5">
                {rows3d.map((r, i) => {
                  if (r.kind === 'surface') {
                    const problem = r.expression.trim() ? checkExpression(r.expression, SURFACE_VARS) : null
                    return (
                      <div key={i}>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: r.color }} />
                          <span className="text-xs text-[#6b7280] font-mono shrink-0">z =</span>
                          <input
                            value={r.expression}
                            onChange={e => patchRow3d(i, { expression: e.target.value })}
                            spellCheck={false}
                            placeholder="x^2 + y^2"
                            className={`flex-1 min-w-0 bg-[#f9fef6] border rounded-lg px-2 py-1.5 font-mono text-sm text-[#1b2b4b] outline-none focus:bg-white ${problem ? 'border-red-300 focus:border-red-400' : 'border-green-200 focus:border-[#5ab82e]'}`}
                          />
                          <button onClick={() => removeRow3d(i)} disabled={rows3d.length <= 1}
                            className="text-red-400 hover:text-red-600 disabled:opacity-25 disabled:cursor-not-allowed shrink-0">
                            <Trash2 size={13} />
                          </button>
                        </div>
                        <label className="flex items-center gap-1.5 text-[11px] text-[#6b7280] cursor-pointer ml-[4.2rem] mt-1">
                          <input type="checkbox" checked={r.wireframe}
                            onChange={e => patchRow3d(i, { wireframe: e.target.checked })}
                            className="accent-[#5ab82e]" />
                          Mesh only
                        </label>
                        {problem && <div className="text-[10px] text-red-500 ml-[4.2rem] mt-0.5">{problem}</div>}
                      </div>
                    )
                  }

                  const result = parsed3d[i]
                  const count = result?.points.length ?? 0
                  return (
                    <div key={i} className="rounded-lg border border-green-200 bg-[#f9fef6] p-2">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: r.color }} />
                        <input
                          value={r.label}
                          onChange={e => patchRow3d(i, { label: e.target.value })}
                          placeholder="Points"
                          className="flex-1 min-w-0 bg-white border border-green-200 rounded px-2 py-1 text-xs text-[#1b2b4b] outline-none focus:border-[#5ab82e]"
                        />
                        <button onClick={() => removeRow3d(i)} disabled={rows3d.length <= 1}
                          className="text-red-400 hover:text-red-600 disabled:opacity-25 disabled:cursor-not-allowed shrink-0">
                          <Trash2 size={13} />
                        </button>
                      </div>
                      <textarea
                        value={r.text}
                        onChange={e => patchRow3d(i, { text: e.target.value })}
                        spellCheck={false}
                        rows={5}
                        placeholder={POINTS3D_PLACEHOLDER}
                        className="w-full bg-white border border-green-200 rounded-lg px-2 py-1.5 font-mono text-xs text-[#1b2b4b] outline-none focus:border-[#5ab82e] resize-y"
                      />
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <select value={r.join} onChange={e => patchRow3d(i, { join: e.target.value as 'none' | 'line' })}
                          className="bg-white border border-green-200 rounded px-1.5 py-1 text-[11px] text-[#1b2b4b] outline-none focus:border-[#5ab82e]">
                          <option value="none">Points only</option>
                          <option value="line">Join in order</option>
                        </select>
                        <label className="flex items-center gap-1 text-[11px] text-[#6b7280] cursor-pointer">
                          <input type="checkbox" checked={r.markers}
                            onChange={e => patchRow3d(i, { markers: e.target.checked })}
                            className="accent-[#5ab82e]" />
                          Show points
                        </label>
                        <span className="ml-auto text-[10px] text-[#9ca3af]">
                          {count} {count === 1 ? 'point' : 'points'}
                        </span>
                      </div>
                      {result?.error && <div className="text-[10px] text-red-500 mt-0.5">{result.error}</div>}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Where the viewer stands */}
            <div>
              <label className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">View</label>
              <label className="block text-[10px] text-[#6b7280] mb-1">
                Turn {turn}&deg;
                <input type="range" min={0} max={360} value={turn} onChange={e => setTurn(Number(e.target.value))}
                  className="w-full accent-[#5ab82e]" />
              </label>
              <label className="block text-[10px] text-[#6b7280]">
                Tilt {tilt}&deg;
                <input type="range" min={0} max={89} value={tilt} onChange={e => setTilt(Number(e.target.value))}
                  className="w-full accent-[#5ab82e]" />
              </label>
            </div>

            {/* Range */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider">Range</label>
                <div className="flex items-center gap-2">
                  {hasPoints3d && (
                    <button onClick={fitToData3d} title="Frame the box around the points"
                      className="flex items-center gap-1 text-[10px] text-[#5ab82e] hover:text-[#489f22] font-medium">
                      <Crosshair size={10} /> Fit to data
                    </button>
                  )}
                  <button onClick={() => { setXMin('-5'); setXMax('5'); setY3Min('-5'); setY3Max('5'); setAutoZ(true); setTurn(35); setTilt(25) }}
                    className="flex items-center gap-1 text-[10px] text-[#6b7280] hover:text-[#1b2b4b] font-medium">
                    <RotateCcw size={10} /> Reset
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <label className="text-[10px] text-[#6b7280]">x from
                  <input value={xMin} onChange={e => setXMin(e.target.value)} type="number"
                    className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e]" />
                </label>
                <label className="text-[10px] text-[#6b7280]">x to
                  <input value={xMax} onChange={e => setXMax(e.target.value)} type="number"
                    className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e]" />
                </label>
                <label className="text-[10px] text-[#6b7280]">y from
                  <input value={y3Min} onChange={e => setY3Min(e.target.value)} type="number"
                    className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e]" />
                </label>
                <label className="text-[10px] text-[#6b7280]">y to
                  <input value={y3Max} onChange={e => setY3Max(e.target.value)} type="number"
                    className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e]" />
                </label>
                <label className={`text-[10px] ${autoZ ? 'text-[#c7cdd6]' : 'text-[#6b7280]'}`}>z from
                  <input value={autoZ ? '' : zMinText} onChange={e => setZMinText(e.target.value)} type="number"
                    disabled={autoZ} placeholder="auto"
                    className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e] disabled:opacity-50" />
                </label>
                <label className={`text-[10px] ${autoZ ? 'text-[#c7cdd6]' : 'text-[#6b7280]'}`}>z to
                  <input value={autoZ ? '' : zMaxText} onChange={e => setZMaxText(e.target.value)} type="number"
                    disabled={autoZ} placeholder="auto"
                    className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e] disabled:opacity-50" />
                </label>
              </div>
              <label className="flex items-center gap-1.5 text-xs text-[#6b7280] cursor-pointer mt-2">
                <input type="checkbox" checked={autoZ} onChange={e => toggleAutoZ(e.target.checked)}
                  className="accent-[#5ab82e]" />
                Fit z automatically
              </label>
            </div>

            {/* Labels */}
            <div>
              <label className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">Labels</label>
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title (optional)"
                className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e] mb-1.5" />
              <div className="grid grid-cols-3 gap-1.5">
                <input value={xLabel} onChange={e => setXLabel(e.target.value)} placeholder="x axis"
                  className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e]" />
                <input value={yLabel} onChange={e => setYLabel(e.target.value)} placeholder="y axis"
                  className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e]" />
                <input value={zLabel} onChange={e => setZLabel(e.target.value)} placeholder="z axis"
                  className="w-full bg-[#f9fef6] border border-green-200 rounded-lg px-2 py-1.5 text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e]" />
              </div>
            </div>

            {/* Quick picks */}
            <div>
              <label className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">Quick picks</label>
              <div className="flex flex-wrap gap-1">
                {SURFACE_EXAMPLES.map(ex => (
                  <button key={ex.label} title={ex.expression}
                    onClick={() => setRows3d([{ kind: 'surface', expression: ex.expression, color: CURVE_COLORS[0], wireframe: false }])}
                    className="px-2 py-1 rounded-lg border border-green-200 bg-white text-[11px] text-[#1b2b4b] hover:bg-[#f3fcf0] hover:border-[#5ab82e] transition-colors">
                    {ex.label}
                  </button>
                ))}
              </div>
            </div>
            </>}
          </div>

          {/* Preview */}
          <div className="flex-1 min-w-0 shrink-0 flex flex-col items-center justify-center p-4 bg-[#fafffe] overflow-auto">
            <canvas ref={canvasRef} width={WIDTH} height={HEIGHT}
              className="rounded-xl border border-green-100 shadow-sm max-w-full h-auto" />
            {error && (
              <div className="mt-2 text-xs text-red-500 font-medium">{error}</div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 px-4 py-3 border-t border-green-100 bg-[#f9fef6] shrink-0">
          <span className="text-[10px] text-[#9ca3af] hidden sm:inline">
            {mode === '3d'
              ? 'Use x and y in the equation. Drag Turn and Tilt to look from another side.'
              : 'Supports + - * / ^, brackets, sin cos tan, ln log sqrt abs exp, pi and e'}
          </span>
          <button onClick={onClose}
            className="ml-auto px-4 py-1.5 text-xs font-semibold text-[#6b7280] bg-white border border-green-200 rounded-lg hover:bg-[#f3fcf0] transition-colors">
            Cancel
          </button>
          <button onClick={insert}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-[#5ab82e] rounded-lg hover:bg-[#489f22] transition-colors">
            Insert graph
          </button>
        </div>
      </div>
    </div>
  )
}
