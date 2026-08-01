import { useRef, useState } from 'react'
import { RotateCw } from 'lucide-react'

/**
 * A protractor you can drag around the board and turn, the way you would slide a
 * real one over paper. It sits above the canvas but lets clicks through except on
 * its own body, so drawing elsewhere still works.
 */

const RADIUS = 170
const SIZE = RADIUS * 2 + 24

export default function Protractor() {
  const [pos, setPos] = useState({ x: 120, y: 120 })
  const [angle, setAngle] = useState(0)
  const dragOffset = useRef<{ x: number; y: number } | null>(null)
  const rotating = useRef(false)

  const centre = () => ({ x: pos.x + SIZE / 2, y: pos.y + SIZE / 2 })

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    if ((e.target as HTMLElement).closest('[data-rotate]')) {
      rotating.current = true
    } else {
      dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const parent = (e.currentTarget as HTMLElement).offsetParent as HTMLElement | null
    if (!parent) return
    const rect = parent.getBoundingClientRect()

    if (rotating.current) {
      const c = centre()
      const dx = e.clientX - rect.left - c.x
      const dy = e.clientY - rect.top - c.y
      setAngle((Math.atan2(dy, dx) * 180) / Math.PI + 90)
      return
    }
    if (!dragOffset.current) return
    setPos({
      x: e.clientX - rect.left - dragOffset.current.x,
      y: e.clientY - rect.top - dragOffset.current.y,
    })
  }

  const endDrag = (e: React.PointerEvent) => {
    dragOffset.current = null
    rotating.current = false
    ;(e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId)
  }

  // Degree marks every 10, labelled, plus finer ticks every 2.
  const ticks = []
  for (let deg = 0; deg <= 180; deg += 2) {
    const major = deg % 10 === 0
    const length = major ? 14 : 7
    const rad = (Math.PI * deg) / 180
    const x1 = SIZE / 2 - RADIUS * Math.cos(rad)
    const y1 = SIZE / 2 - RADIUS * Math.sin(rad)
    const x2 = SIZE / 2 - (RADIUS - length) * Math.cos(rad)
    const y2 = SIZE / 2 - (RADIUS - length) * Math.sin(rad)
    ticks.push(
      <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={major ? '#1b2b4b' : '#94a3b8'} strokeWidth={major ? 1.4 : 0.8} />,
    )
    if (major && deg % 20 === 0) {
      const lx = SIZE / 2 - (RADIUS - 28) * Math.cos(rad)
      const ly = SIZE / 2 - (RADIUS - 28) * Math.sin(rad)
      ticks.push(
        <text key={`t${deg}`} x={lx} y={ly} fontSize="11" fill="#1b2b4b"
          textAnchor="middle" dominantBaseline="middle">{deg}</text>,
      )
    }
  }

  return (
    <div
      className="absolute z-30 select-none"
      style={{
        left: pos.x, top: pos.y, width: SIZE, height: SIZE,
        transform: `rotate(${angle}deg)`, transformOrigin: '50% 50%', touchAction: 'none',
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <svg width={SIZE} height={SIZE} className="cursor-move">
        <path
          d={`M ${SIZE / 2 - RADIUS} ${SIZE / 2} A ${RADIUS} ${RADIUS} 0 0 1 ${SIZE / 2 + RADIUS} ${SIZE / 2} Z`}
          fill="rgba(90,184,46,0.10)" stroke="#5ab82e" strokeWidth="1.5"
        />
        {ticks}
        {/* Centre mark to line up with a vertex */}
        <line x1={SIZE / 2 - 12} y1={SIZE / 2} x2={SIZE / 2 + 12} y2={SIZE / 2} stroke="#ef4444" strokeWidth="1.5" />
        <line x1={SIZE / 2} y1={SIZE / 2 - 12} x2={SIZE / 2} y2={SIZE / 2} stroke="#ef4444" strokeWidth="1.5" />
        <circle cx={SIZE / 2} cy={SIZE / 2} r="3" fill="#ef4444" />
      </svg>

      <button
        data-rotate
        title="Drag to turn the protractor"
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#1b2b4b] text-white shadow-lg cursor-grab"
        style={{ top: SIZE / 2 + 16 }}
      >
        <RotateCw size={14} />
      </button>
    </div>
  )
}
