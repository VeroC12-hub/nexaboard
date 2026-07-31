// Renders a .dxf CAD drawing entirely client-side — no Autodesk account needed.
// Fetches the DXF text, converts it to SVG with the `dxf` library, and adds wheel-zoom / drag-pan.
import { useEffect, useRef, useState } from 'react'
import { Helper } from 'dxf'

export default function DxfViewer({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  // pan/zoom state kept in a ref so handlers don't re-bind on every change
  const view = useRef({ scale: 1, x: 0, y: 0 })

  useEffect(() => {
    let cancelled = false
    setLoading(true); setError('')

    const load = async () => {
      try {
        const res = await fetch(src)
        if (!res.ok) throw new Error(`Could not download the drawing (${res.status})`)
        const text = await res.text()
        if (cancelled) return
        const svg = new Helper(text).toSVG()
        if (cancelled || !innerRef.current) return
        innerRef.current.innerHTML = svg
        const svgEl = innerRef.current.querySelector('svg')
        if (svgEl) {
          svgEl.removeAttribute('width')
          svgEl.removeAttribute('height')
          svgEl.style.width = '100%'
          svgEl.style.height = '100%'
          // DXF Y axis points up; flip so the drawing isn't upside-down
          svgEl.style.transform = 'scaleY(-1)'
          // stroke colors in DXF are often near-black; force a light stroke on dark bg
          svgEl.querySelectorAll('[stroke]').forEach(el => {
            const s = el.getAttribute('stroke')
            if (!s || s.toLowerCase() === '#000000' || s.toLowerCase() === 'black') {
              el.setAttribute('stroke', '#e5e7eb')
            }
          })
        }
        setLoading(false)
      } catch (e) {
        if (!cancelled) { setError(e instanceof Error ? e.message : String(e)); setLoading(false) }
      }
    }
    load()
    return () => { cancelled = true }
  }, [src])

  // pan/zoom handlers
  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const apply = () => {
      const v = view.current
      inner.style.transform = `translate(${v.x}px, ${v.y}px) scale(${v.scale})`
    }

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const v = view.current
      const rect = container.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15
      const newScale = Math.min(Math.max(v.scale * factor, 0.05), 50)
      // zoom toward cursor
      v.x = cx - (cx - v.x) * (newScale / v.scale)
      v.y = cy - (cy - v.y) * (newScale / v.scale)
      v.scale = newScale
      apply()
    }

    let dragging = false
    let lastX = 0, lastY = 0
    const onDown = (e: MouseEvent) => { dragging = true; lastX = e.clientX; lastY = e.clientY }
    const onMove = (e: MouseEvent) => {
      if (!dragging) return
      const v = view.current
      v.x += e.clientX - lastX
      v.y += e.clientY - lastY
      lastX = e.clientX; lastY = e.clientY
      apply()
    }
    const onUp = () => { dragging = false }

    container.addEventListener('wheel', onWheel, { passive: false })
    container.addEventListener('mousedown', onDown)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      container.removeEventListener('wheel', onWheel)
      container.removeEventListener('mousedown', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  const resetView = () => {
    view.current = { scale: 1, x: 0, y: 0 }
    if (innerRef.current) innerRef.current.style.transform = 'translate(0px, 0px) scale(1)'
  }

  return (
    <div className="relative w-full h-full bg-[#1e1e1e] overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 cursor-grab active:cursor-grabbing">
        <div ref={innerRef} className="w-full h-full origin-top-left" style={{ willChange: 'transform' }} />
      </div>

      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm">
          Rendering drawing…
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-red-300 text-sm p-6 text-center">
          {error}
        </div>
      )}
      {!loading && !error && (
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <button onClick={resetView}
            className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors">
            Reset view
          </button>
          <span className="text-white/40 text-[11px]">Scroll to zoom · drag to pan</span>
        </div>
      )}
    </div>
  )
}
