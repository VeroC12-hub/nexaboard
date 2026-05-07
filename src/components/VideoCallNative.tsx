import { useState, useEffect, useRef, useCallback } from 'react'
import {
  X, Maximize2, Minimize2, Mic, MicOff, Video, VideoOff,
  PhoneOff, Monitor, LayoutGrid, Users,
} from 'lucide-react'
import { supabase } from '../lib/supabase'

const ICE_SERVERS = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  { urls: 'stun:stun2.l.google.com:19302' },
  { urls: 'stun:stun4.l.google.com:19302' },
]

interface Props {
  sessionId: string
  isTeacher: boolean
  userId: string
  displayName: string
  onClose: () => void
}

type PeerInfo = { name: string; stream: MediaStream | null }
type ViewMode = 'grid' | 'speaker'

function VideoTile({ stream, muted = false, name, className = '', noCamera = false }: {
  stream: MediaStream | null
  muted?: boolean
  name: string
  className?: string
  noCamera?: boolean
}) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (ref.current) ref.current.srcObject = stream
  }, [stream])

  const showAvatar = !stream || noCamera

  return (
    <div className={`relative bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center ${className}`}>
      <video
        ref={ref}
        autoPlay playsInline muted={muted}
        className={`w-full h-full object-cover ${showAvatar ? 'hidden' : ''}`}
      />
      {showAvatar && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="w-14 h-14 rounded-full bg-[#1b2b4b] flex items-center justify-center">
            <span className="text-white text-2xl font-bold">{name.charAt(0).toUpperCase()}</span>
          </div>
        </div>
      )}
      <div className="absolute bottom-2 left-2 text-white text-xs bg-black/60 px-2 py-0.5 rounded-full truncate max-w-[90%]">
        {name}
      </div>
    </div>
  )
}

export default function VideoCallNative({ sessionId, isTeacher, userId, displayName, onClose }: Props) {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null)
  const [peers, setPeers] = useState<Map<string, PeerInfo>>(new Map())
  const [audioMuted, setAudioMuted] = useState(false)
  const [videoOff, setVideoOff] = useState(false)
  const [screenSharing, setScreenSharing] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [expanded, setExpanded] = useState(false)
  const [error, setError] = useState('')
  const [hasCamera, setHasCamera] = useState(true)

  const localStreamRef = useRef<MediaStream | null>(null)
  const cameraTrackRef = useRef<MediaStreamTrack | null>(null)
  const pcsRef = useRef<Map<string, RTCPeerConnection>>(new Map())
  const iceBufRef = useRef<Map<string, RTCIceCandidateInit[]>>(new Map())
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null)

  const removePeer = useCallback((peerId: string) => {
    pcsRef.current.get(peerId)?.close()
    pcsRef.current.delete(peerId)
    iceBufRef.current.delete(peerId)
    setPeers(prev => { const n = new Map(prev); n.delete(peerId); return n })
  }, [])

  const createPC = useCallback((peerId: string, peerName: string) => {
    if (pcsRef.current.has(peerId)) { pcsRef.current.get(peerId)!.close(); pcsRef.current.delete(peerId) }
    const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS })
    localStreamRef.current?.getTracks().forEach(t => pc.addTrack(t, localStreamRef.current!))
    pc.ontrack = e => {
      setPeers(prev => {
        const n = new Map(prev)
        n.set(peerId, { name: peerName, stream: e.streams[0] ?? null })
        return n
      })
    }
    pc.onicecandidate = e => {
      if (!e.candidate) return
      channelRef.current?.send({
        type: 'broadcast', event: 'call_ice',
        payload: { from: userId, to: peerId, candidate: e.candidate.toJSON() },
      })
    }
    pc.onconnectionstatechange = () => {
      if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') removePeer(peerId)
    }
    pcsRef.current.set(peerId, pc)
    setPeers(prev => { const n = new Map(prev); if (!n.has(peerId)) n.set(peerId, { name: peerName, stream: null }); return n })
    return pc
  }, [userId, removePeer])

  const flushIce = useCallback((peerId: string) => {
    const pc = pcsRef.current.get(peerId)
    if (!pc) return
    ;(iceBufRef.current.get(peerId) ?? []).forEach(c => pc.addIceCandidate(c).catch(() => {}))
    iceBufRef.current.delete(peerId)
  }, [])

  useEffect(() => {
    let mounted = true

    const start = async () => {
      // Try camera + mic, fall back to mic only
      let stream: MediaStream | null = null
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      } catch {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true })
          setHasCamera(false)
          setVideoOff(true)
        } catch {
          setError(
            'Microphone access was denied.\n\nClick the lock icon (🔒) in your browser address bar → Site settings → allow Microphone, then refresh.'
          )
          return
        }
      }

      if (!mounted) { stream.getTracks().forEach(t => t.stop()); return }
      localStreamRef.current = stream
      cameraTrackRef.current = stream.getVideoTracks()[0] ?? null
      setLocalStream(stream)

      const channel = supabase.channel(`call:${sessionId}`)

      channel
        .on('broadcast', { event: 'call_hello' }, async ({ payload }) => {
          if (payload.from === userId) return
          if (isTeacher && !payload.isTeacher) {
            const pc = createPC(payload.from, payload.name)
            const offer = await pc.createOffer()
            await pc.setLocalDescription(offer)
            channel.send({ type: 'broadcast', event: 'call_offer', payload: { from: userId, to: payload.from, sdp: pc.localDescription } })
          }
          if (!isTeacher && payload.isTeacher) {
            channel.send({ type: 'broadcast', event: 'call_hello', payload: { from: userId, name: displayName, isTeacher: false } })
          }
        })
        .on('broadcast', { event: 'call_offer' }, async ({ payload }) => {
          if (payload.to !== userId) return
          const pc = createPC(payload.from, 'Teacher')
          await pc.setRemoteDescription(payload.sdp)
          flushIce(payload.from)
          const answer = await pc.createAnswer()
          await pc.setLocalDescription(answer)
          channel.send({ type: 'broadcast', event: 'call_answer', payload: { from: userId, to: payload.from, sdp: pc.localDescription } })
        })
        .on('broadcast', { event: 'call_answer' }, async ({ payload }) => {
          if (payload.to !== userId) return
          const pc = pcsRef.current.get(payload.from)
          if (pc && !pc.remoteDescription) { await pc.setRemoteDescription(payload.sdp); flushIce(payload.from) }
        })
        .on('broadcast', { event: 'call_ice' }, ({ payload }) => {
          if (payload.to !== userId) return
          const pc = pcsRef.current.get(payload.from)
          if (pc?.remoteDescription) pc.addIceCandidate(payload.candidate).catch(() => {})
          else {
            const buf = iceBufRef.current.get(payload.from) ?? []
            buf.push(payload.candidate)
            iceBufRef.current.set(payload.from, buf)
          }
        })
        .on('broadcast', { event: 'call_bye' }, ({ payload }) => { removePeer(payload.from) })
        .subscribe(status => {
          if (status === 'SUBSCRIBED') {
            channel.send({ type: 'broadcast', event: 'call_hello', payload: { from: userId, name: displayName, isTeacher } })
          }
        })

      channelRef.current = channel
    }

    start()
    return () => {
      mounted = false
      channelRef.current?.send({ type: 'broadcast', event: 'call_bye', payload: { from: userId } })
      pcsRef.current.forEach(pc => pc.close())
      pcsRef.current.clear()
      localStreamRef.current?.getTracks().forEach(t => t.stop())
      if (channelRef.current) supabase.removeChannel(channelRef.current)
    }
  }, [sessionId, isTeacher, userId, displayName, createPC, flushIce, removePeer])

  const toggleAudio = () => {
    localStreamRef.current?.getAudioTracks().forEach(t => { t.enabled = audioMuted })
    setAudioMuted(v => !v)
  }

  const toggleVideo = () => {
    if (!hasCamera) return
    localStreamRef.current?.getVideoTracks().forEach(t => { t.enabled = videoOff })
    setVideoOff(v => !v)
  }

  const toggleScreenShare = async () => {
    if (screenSharing) {
      // Restore camera track
      const camTrack = cameraTrackRef.current
      pcsRef.current.forEach(pc => {
        const sender = pc.getSenders().find(s => s.track?.kind === 'video')
        if (camTrack) sender?.replaceTrack(camTrack).catch(() => {})
        else sender?.replaceTrack(null).catch(() => {})
      })
      // Rebuild local stream preview
      const audio = localStreamRef.current?.getAudioTracks()[0]
      const tracks = [...(camTrack ? [camTrack] : []), ...(audio ? [audio] : [])]
      if (tracks.length) {
        const restored = new MediaStream(tracks)
        localStreamRef.current = restored
        setLocalStream(restored)
      }
      setScreenSharing(false)
    } else {
      try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true })
        const screenTrack = screenStream.getVideoTracks()[0]
        // Replace video in all peer connections
        pcsRef.current.forEach(pc => {
          const sender = pc.getSenders().find(s => s.track?.kind === 'video')
          sender?.replaceTrack(screenTrack).catch(() => {})
        })
        // Update local preview
        const audio = localStreamRef.current?.getAudioTracks()[0]
        const preview = new MediaStream([screenTrack, ...(audio ? [audio] : [])])
        localStreamRef.current = preview
        setLocalStream(preview)
        setScreenSharing(true)
        // When browser's native stop button is clicked
        screenTrack.onended = () => toggleScreenShare()
      } catch { /* user cancelled */ }
    }
  }

  const peersArr = Array.from(peers.entries())
  const total = peersArr.length + 1

  const panelClass = expanded
    ? 'fixed inset-0 z-50 flex flex-col bg-gray-950'
    : 'fixed bottom-0 right-0 z-40 flex flex-col bg-gray-950 shadow-2xl rounded-tl-2xl overflow-hidden'
  const panelStyle = expanded ? {} : { width: 'min(460px, 100vw)', height: 'min(620px, 75vh)' }

  // Speaker view: first remote is large, rest + self are thumbnails
  const speakerMain = peersArr[0]
  const speakerThumbs = peersArr.slice(1)

  return (
    <div className={panelClass} style={panelStyle}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 shrink-0 bg-gray-900 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Video size={14} className="text-white/70" />
          <span className="text-white text-sm font-semibold">Live Class</span>
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="flex items-center gap-1 text-white/40 text-xs">
            <Users size={11} /> {total}
          </span>
        </div>
        <div className="flex gap-1">
          <button onClick={() => setViewMode(v => v === 'grid' ? 'speaker' : 'grid')}
            title={viewMode === 'grid' ? 'Switch to speaker view' : 'Switch to grid view'}
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <LayoutGrid size={14} />
          </button>
          <button onClick={() => setExpanded(v => !v)} className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            {expanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
          <button onClick={onClose} className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <X size={15} />
          </button>
        </div>
      </div>

      {error ? (
        <div className="flex-1 flex items-center justify-center p-6 text-center">
          <div>
            <div className="text-red-400 text-sm mb-4 whitespace-pre-line leading-relaxed">{error}</div>
            <button onClick={onClose} className="text-white/50 text-xs underline">Close</button>
          </div>
        </div>
      ) : (
        <>
          {/* No camera banner */}
          {!hasCamera && (
            <div className="bg-amber-600/20 border-b border-amber-500/30 px-4 py-1.5 text-amber-400 text-xs text-center shrink-0">
              No camera found — audio only
            </div>
          )}
          {screenSharing && (
            <div className="bg-blue-600/20 border-b border-blue-500/30 px-4 py-1.5 text-blue-400 text-xs text-center shrink-0">
              You are sharing your screen
            </div>
          )}

          {/* ── GRID VIEW ── */}
          {viewMode === 'grid' && (
            <div className={`flex-1 min-h-0 p-2 grid gap-2 content-start overflow-auto ${
              total === 1 ? 'grid-cols-1' :
              total === 2 ? 'grid-cols-1' :
              total <= 4 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'
            }`}>
              <VideoTile stream={localStream} muted name={`${displayName} (you)`} noCamera={videoOff && !screenSharing} className="aspect-video" />
              {peersArr.map(([id, info]) => (
                <VideoTile key={id} stream={info.stream} name={info.name} className="aspect-video" />
              ))}
            </div>
          )}

          {/* ── SPEAKER VIEW ── */}
          {viewMode === 'speaker' && (
            <div className="flex-1 min-h-0 flex flex-col gap-1.5 p-2 overflow-hidden">
              {/* Main speaker (first remote, or self if alone) */}
              <div className="flex-1 min-h-0">
                {speakerMain ? (
                  <VideoTile stream={speakerMain[1].stream} name={speakerMain[1].name} className="h-full" />
                ) : (
                  <VideoTile stream={localStream} muted name={`${displayName} (you)`} noCamera={videoOff && !screenSharing} className="h-full" />
                )}
              </div>
              {/* Thumbnails row */}
              {(speakerMain || speakerThumbs.length > 0) && (
                <div className="flex gap-1.5 shrink-0 overflow-x-auto pb-1">
                  {speakerMain && (
                    <VideoTile stream={localStream} muted name={`${displayName} (you)`} noCamera={videoOff && !screenSharing} className="h-20 w-28 shrink-0" />
                  )}
                  {speakerThumbs.map(([id, info]) => (
                    <VideoTile key={id} stream={info.stream} name={info.name} className="h-20 w-28 shrink-0" />
                  ))}
                </div>
              )}
            </div>
          )}

          {peersArr.length === 0 && !error && (
            <div className="text-white/30 text-xs text-center py-1.5 shrink-0">
              {isTeacher ? 'Waiting for students to join the call…' : 'Waiting for teacher to start…'}
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 py-3 px-4 bg-gray-900 border-t border-white/10 shrink-0">
            <button onClick={toggleAudio} title={audioMuted ? 'Unmute' : 'Mute'}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${audioMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'}`}>
              {audioMuted ? <MicOff size={18} className="text-white" /> : <Mic size={18} className="text-white" />}
            </button>
            <button onClick={toggleVideo} title={videoOff ? 'Turn on camera' : 'Turn off camera'}
              disabled={!hasCamera}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${!hasCamera ? 'bg-white/5 opacity-40 cursor-not-allowed' : videoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'}`}>
              {videoOff ? <VideoOff size={18} className="text-white" /> : <Video size={18} className="text-white" />}
            </button>
            <button onClick={toggleScreenShare} title={screenSharing ? 'Stop sharing' : 'Share screen'}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${screenSharing ? 'bg-blue-500 hover:bg-blue-600' : 'bg-white/10 hover:bg-white/20'}`}>
              <Monitor size={18} className="text-white" />
            </button>
            <button onClick={onClose} title="Leave call"
              className="w-11 h-11 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors">
              <PhoneOff size={18} className="text-white" />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
