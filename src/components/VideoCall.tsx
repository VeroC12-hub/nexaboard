import { useState } from 'react'
import { X, Maximize2, Minimize2, Video } from 'lucide-react'

interface Props {
  roomName: string
  displayName: string
  onClose: () => void
}

export default function VideoCall({ roomName, displayName, onClose }: Props) {
  const [expanded, setExpanded] = useState(false)

  // Jitsi accepts config via hash fragments — no script injection needed
  const src =
    `https://meet.jit.si/nexaboard-${roomName}` +
    `#userInfo.displayName=${encodeURIComponent(displayName)}` +
    `&config.startWithAudioMuted=false` +
    `&config.startWithVideoMuted=false` +
    `&config.prejoinConfig.enabled=false` +
    `&config.disableDeepLinking=true` +
    `&config.hideConferenceSubject=true` +
    `&interfaceConfig.SHOW_JITSI_WATERMARK=false` +
    `&interfaceConfig.MOBILE_APP_PROMO=false`

  const panelClass = expanded
    ? 'fixed inset-0 z-50 flex flex-col bg-[#1b2b4b]'
    : 'fixed bottom-0 right-0 z-40 flex flex-col bg-[#1b2b4b] shadow-2xl rounded-tl-2xl overflow-hidden'

  const panelStyle = expanded
    ? {}
    : { width: 'min(440px, 100vw)', height: 'min(600px, 72vh)' }

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
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            title={expanded ? 'Minimize' : 'Expand to full screen'}
          >
            {expanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            title="Leave call"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Jitsi iframe — fills the rest of the panel */}
      <iframe
        src={src}
        allow="camera; microphone; fullscreen; display-capture; autoplay"
        style={{ flex: 1, border: 0, width: '100%', minHeight: 0 }}
        title="Live Class"
      />
    </div>
  )
}
