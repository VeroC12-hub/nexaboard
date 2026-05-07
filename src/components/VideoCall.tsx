import { useEffect, useRef, useState } from 'react'
import { X, Maximize2, Minimize2, Video } from 'lucide-react'

declare global {
  interface Window {
    JitsiMeetExternalAPI: new (domain: string, options: object) => { dispose(): void }
  }
}

interface Props {
  roomName: string
  displayName: string
  onClose: () => void
}

export default function VideoCall({ roomName, displayName, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const apiRef = useRef<{ dispose(): void } | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const startCall = () => {
      if (!mounted || !containerRef.current || apiRef.current) return
      setLoading(false)
      apiRef.current = new window.JitsiMeetExternalAPI('meet.jit.si', {
        roomName: `nexaboard-${roomName}`,
        parentNode: containerRef.current,
        userInfo: { displayName },
        configOverwrite: {
          startWithAudioMuted: false,
          startWithVideoMuted: false,
          disableDeepLinking: true,
          prejoinConfig: { enabled: false },
          toolbarButtons: [
            'microphone', 'camera', 'hangup',
            'tileview', 'fullscreen', 'settings',
          ],
          disableThirdPartyRequests: true,
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          MOBILE_APP_PROMO: false,
          SHOW_PROMOTIONAL_CLOSE_PAGE: false,
        },
      })
    }

    if (typeof window.JitsiMeetExternalAPI !== 'undefined') {
      startCall()
    } else {
      const existing = document.getElementById('jitsi-api-script') as HTMLScriptElement | null
      if (existing) {
        existing.addEventListener('load', startCall)
        return () => {
          mounted = false
          apiRef.current?.dispose()
          apiRef.current = null
          existing.removeEventListener('load', startCall)
        }
      }
      const script = document.createElement('script')
      script.id = 'jitsi-api-script'
      script.src = 'https://meet.jit.si/external_api.js'
      script.async = true
      script.onload = startCall
      document.head.appendChild(script)
    }

    return () => {
      mounted = false
      apiRef.current?.dispose()
      apiRef.current = null
    }
  }, [roomName, displayName])

  const panelClass = expanded
    ? 'fixed inset-0 z-50 flex flex-col bg-[#1b2b4b]'
    : 'fixed bottom-0 right-0 z-40 flex flex-col bg-[#1b2b4b] shadow-2xl rounded-tl-2xl overflow-hidden'
  const panelStyle = expanded ? {} : { width: 'min(420px, 100vw)', height: 'min(580px, 70vh)' }

  return (
    <div className={panelClass} style={panelStyle}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 shrink-0 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Video size={14} className="text-white/70" />
          <span className="text-white text-sm font-semibold">Live Class</span>
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse ml-1" />
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setExpanded(v => !v)}
            className="text-white/60 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
            title={expanded ? 'Minimize' : 'Expand'}
          >
            {expanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
            title="Leave call"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1b2b4b] z-10 top-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span className="text-white/60 text-sm">Connecting to call...</span>
          </div>
        </div>
      )}

      {/* Jitsi container */}
      <div ref={containerRef} className="flex-1" style={{ minHeight: 0 }} />
    </div>
  )
}
