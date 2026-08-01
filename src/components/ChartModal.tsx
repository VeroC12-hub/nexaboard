import { useState, useRef, useEffect } from 'react'
import {
  Chart, CategoryScale, LinearScale, BarElement, LineElement,
  PointElement, ArcElement, Title, Tooltip, Legend,
  BarController, LineController, PieController,
} from 'chart.js'
import { Plus, Trash2, X, BarChart2, LineChart, PieChart } from 'lucide-react'

// The controllers matter as much as the elements: without them Chart.js throws
// "bar is not a registered controller" the moment a chart is built.
Chart.register(
  CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement,
  BarController, LineController, PieController, Title, Tooltip, Legend,
)

interface Props {
  onInsert: (dataUrl: string) => void
  onClose: () => void
}

type ChartType = 'bar' | 'line' | 'pie'

const PALETTE = ['#5ab82e', '#1b2b4b', '#ef4444', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6']

export default function ChartModal({ onInsert, onClose }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<Chart | null>(null)
  const [type, setType] = useState<ChartType>('bar')
  const [title, setTitle] = useState('')
  const [rows, setRows] = useState([
    { label: 'Category A', value: '40' },
    { label: 'Category B', value: '65' },
    { label: 'Category C', value: '30' },
    { label: 'Category D', value: '80' },
  ])

  const buildChart = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (chartRef.current) { chartRef.current.destroy(); chartRef.current = null }
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const labels = rows.map(r => r.label || '—')
    const data = rows.map(r => parseFloat(r.value) || 0)
    const colors = PALETTE.slice(0, rows.length)
    chartRef.current = new Chart(ctx, {
      type,
      data: {
        labels,
        datasets: [{
          label: title || 'Data',
          data,
          backgroundColor: type === 'pie' ? colors.map(c => c + 'cc') : colors[0] + 'cc',
          borderColor: type === 'pie' ? colors : colors[0],
          borderWidth: 2,
          tension: 0.3,
          fill: false,
          pointRadius: 4,
        }],
      },
      options: {
        responsive: false,
        animation: false,
        plugins: {
          title: { display: !!title, text: title, font: { size: 14, weight: 'bold' } },
          legend: { display: type === 'pie' },
        },
        scales: type === 'pie' ? {} : {
          y: { beginAtZero: true, grid: { color: '#f0f0f0' } },
          x: { grid: { display: false } },
        },
      },
    })
  }

  useEffect(() => { buildChart() }, [type, title, rows])

  const updateRow = (i: number, field: 'label' | 'value', val: string) => {
    setRows(prev => prev.map((r, idx) => idx === i ? { ...r, [field]: val } : r))
  }

  const addRow = () => setRows(prev => [...prev, { label: `Category ${String.fromCharCode(65 + prev.length)}`, value: '0' }])
  const removeRow = (i: number) => setRows(prev => prev.filter((_, idx) => idx !== i))

  const insert = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    onInsert(canvas.toDataURL('image/png'))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-green-100">
          <h2 className="text-base font-bold text-[#1b2b4b]">Insert Chart</h2>
          <button onClick={onClose} className="text-[#9ca3af] hover:text-[#1b2b4b] transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-1 min-h-0 overflow-hidden">
          {/* Left: controls */}
          <div className="w-72 shrink-0 flex flex-col border-r border-green-100 overflow-y-auto p-4 gap-4">
            {/* Chart type */}
            <div>
              <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block">Chart Type</label>
              <div className="flex gap-2">
                {([['bar', BarChart2], ['line', LineChart], ['pie', PieChart]] as [ChartType, React.ElementType][]).map(([t, Icon]) => (
                  <button key={t} onClick={() => setType(t)}
                    className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl border text-xs font-semibold transition-colors ${type === t ? 'bg-[#5ab82e] text-white border-[#5ab82e]' : 'border-green-200 text-[#6b7280] hover:border-[#5ab82e]'}`}>
                    <Icon size={18} />
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-1.5 block">Title (optional)</label>
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Sales by Quarter"
                className="w-full bg-[#f3fcf0] border border-green-200 rounded-lg px-3 py-2 text-sm text-[#1b2b4b] placeholder-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#5ab82e]" />
            </div>

            {/* Data rows */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Data</label>
                <button onClick={addRow} className="flex items-center gap-1 text-xs text-[#5ab82e] hover:text-[#489f22]">
                  <Plus size={12} /> Add row
                </button>
              </div>
              <div className="space-y-1.5">
                <div className="grid grid-cols-5 gap-1 mb-1 px-1">
                  <span className="col-span-3 text-[10px] text-[#9ca3af] font-semibold uppercase">Label</span>
                  <span className="col-span-2 text-[10px] text-[#9ca3af] font-semibold uppercase">Value</span>
                </div>
                {rows.map((row, i) => (
                  <div key={i} className="grid grid-cols-5 gap-1 items-center">
                    <input value={row.label} onChange={e => updateRow(i, 'label', e.target.value)}
                      className="col-span-3 bg-[#f3fcf0] border border-green-200 rounded px-2 py-1.5 text-xs text-[#1b2b4b] focus:outline-none focus:ring-1 focus:ring-[#5ab82e]" />
                    <input value={row.value} onChange={e => updateRow(i, 'value', e.target.value)} type="number"
                      className="col-span-1 bg-[#f3fcf0] border border-green-200 rounded px-2 py-1.5 text-xs text-[#1b2b4b] focus:outline-none focus:ring-1 focus:ring-[#5ab82e]" />
                    <button onClick={() => removeRow(i)} disabled={rows.length <= 2}
                      className="flex items-center justify-center text-red-400 hover:text-red-600 disabled:opacity-30 disabled:cursor-not-allowed">
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: chart preview */}
          <div className="flex-1 flex items-center justify-center p-6 bg-[#fafffe]">
            <canvas ref={canvasRef} width={420} height={300} className="rounded-xl shadow-sm border border-green-100" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-6 py-4 border-t border-green-100">
          <button onClick={onClose}
            className="px-4 py-2 text-sm text-[#6b7280] hover:text-[#1b2b4b] border border-green-200 rounded-lg transition-colors">
            Cancel
          </button>
          <button onClick={insert}
            className="px-5 py-2 text-sm font-semibold bg-[#5ab82e] hover:bg-[#489f22] text-white rounded-lg transition-colors shadow-sm">
            Insert Chart
          </button>
        </div>
      </div>
    </div>
  )
}
