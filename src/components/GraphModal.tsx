import { useState, useRef, useEffect, useCallback } from 'react'
import { X, Plus, Trash2, LineChart, RotateCcw } from 'lucide-react'
import { drawPlot, autoYRange, checkExpression, type PlotSeries } from '../lib/plot'

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

const WIDTH = 640
const HEIGHT = 440

export default function GraphModal({ onInsert, onClose }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [series, setSeries] = useState<PlotSeries[]>([{ expression: 'x^2', color: CURVE_COLORS[0] }])
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
  }, [series, title, xLabel, yLabel, xMin, xMax, yMin, yMax, autoY, showGrid])

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

  const updateSeries = (i: number, expression: string) =>
    setSeries(prev => prev.map((s, idx) => (idx === i ? { ...s, expression } : s)))

  const addSeries = () =>
    setSeries(prev => [...prev, { expression: '', color: CURVE_COLORS[prev.length % CURVE_COLORS.length] }])

  const removeSeries = (i: number) => setSeries(prev => prev.filter((_, idx) => idx !== i))

  const resetView = () => {
    setXMin('-10'); setXMax('10'); setAutoY(true)
  }

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
          <span className="font-bold text-sm text-[#1b2b4b]">Graph a function</span>
          <span className="text-[11px] text-[#6b7280] hidden sm:inline">
            Type in terms of x, for example 3x^2 + 2x - 1, sin(x), 1/x
          </span>
          <button onClick={onClose} className="ml-auto p-1 text-[#9ca3af] hover:text-[#1b2b4b] transition-colors rounded">
            <X size={16} />
          </button>
        </div>

        {/* Reversed when stacked so the graph stays on screen on shorter windows */}
        <div className="flex flex-1 min-h-0 flex-col-reverse lg:flex-row">
          {/* Controls */}
          <div className="w-full lg:w-80 shrink-0 border-t lg:border-t-0 lg:border-r border-green-100 overflow-y-auto p-4 flex flex-col gap-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider">Functions</label>
                <button onClick={addSeries} className="flex items-center gap-1 text-xs text-[#5ab82e] hover:text-[#489f22] font-medium">
                  <Plus size={12} /> Add
                </button>
              </div>
              <div className="space-y-1.5">
                {series.map((s, i) => {
                  const problem = s.expression.trim() ? checkExpression(s.expression) : null
                  return (
                    <div key={i}>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                        <span className="text-xs text-[#6b7280] font-mono shrink-0">y =</span>
                        <input
                          value={s.expression}
                          onChange={e => updateSeries(i, e.target.value)}
                          spellCheck={false}
                          placeholder="x^2"
                          className={`flex-1 min-w-0 bg-[#f9fef6] border rounded-lg px-2 py-1.5 font-mono text-sm text-[#1b2b4b] outline-none focus:bg-white ${problem ? 'border-red-300 focus:border-red-400' : 'border-green-200 focus:border-[#5ab82e]'}`}
                        />
                        <button onClick={() => removeSeries(i)} disabled={series.length <= 1}
                          className="text-red-400 hover:text-red-600 disabled:opacity-25 disabled:cursor-not-allowed shrink-0">
                          <Trash2 size={13} />
                        </button>
                      </div>
                      {problem && <div className="text-[10px] text-red-500 ml-[4.2rem] mt-0.5">{problem}</div>}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Range */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider">Range</label>
                <button onClick={resetView} className="flex items-center gap-1 text-[10px] text-[#6b7280] hover:text-[#1b2b4b] font-medium">
                  <RotateCcw size={10} /> Reset
                </button>
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
                    onClick={() => setSeries([{ expression: ex.expression, color: CURVE_COLORS[0] }])}
                    className="px-2 py-1 rounded-lg border border-green-200 bg-white text-[11px] font-mono text-[#1b2b4b] hover:bg-[#f3fcf0] hover:border-[#5ab82e] transition-colors">
                    {ex.expression}
                  </button>
                ))}
              </div>
            </div>
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
            Supports + - * / ^, brackets, sin cos tan, ln log sqrt abs exp, pi and e
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
