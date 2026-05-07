import { useState, useEffect, useRef } from 'react'
import {
  X, Maximize2, Minimize2, Mic, MicOff, Video, VideoOff,
  PhoneOff, LayoutGrid, Users,
} from 'lucide-react'
import { supabase } from '../lib/supabase'

// Google STUN + Open Relay Project free TURN (metered.ca public servers)
const ICE_SERVERS: RTCIceServer[] = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  { urls: 'stun:stun2.l.google.com:19302' },
  {
    urls: [
      'turn:a.relay.metered.ca:80',
      'turn:a.relay.metered.ca:80?transport=tcp',
      'turn:a.relay.metered.ca:443',
      'turn:a.relay.metered.ca:443?transport=tcp',
      'turns:a.relay.metered.ca:443',
    ],
    username: 'openrelayproject',
    credential: 'openrelayproject',
  },
]

interface Props {
  sessionId: string
  isTeacher: boolean
  userId: string
  displayName: string
  onClose: () => void
}

type PeerInfo = { name: string; stream: MediaStream | null }

// ── Video tile ───────────────────────────────────────────────────────────────
function VideoTile({ stream, muted = false, name, noVideo = false, className = '' }: {
  stream: MediaStream | null
  muted?: boolean
  name: string
  noVideo?: boolean
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => { if (ref.current) ref.current.srcObject = stream }, [stream])

  return (
    <div className={`relative bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center ${className}`}>
      <video ref={ref} autoPlay playsInline muted={muted}
        className={`w-full h-full object-cover ${noVideo || !stream ? 'invisible' : ''}`} />
      {(noVideo || !stream) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="w-14 h-14 rounded-full bg-[#1b2b4b] flex items-center justify-center">
            <span className="text-white text-2xl font-bold">{name.charAt(0).toUpperCase()}</span>
          </div>
        </div>
      )}
      <div className="absolute bottom-2 left-2 text-white text-xs bg-black/60 px-2 py-0.5 rounded-full truncate max-w-[85%]">
        {name}
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function VideoCallNative({ sessionId, isTeacher, userId, displayName, onClose }: Props) {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null)
  const [peers, setPeers] = useState<Map<string, PeerInfo>>(new Map())
  const [audioMuted, setAudioMuted] = useState(false)
  const [videoOff, setVideoOff] = useState(false)
  const [hasCamera, setHasCamera] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'speaker'>('grid')
  const [status, setStatus] = useState('Connecting…')
  const [error, setError] = useState('')

  const localStreamRef = useRef<MediaStream | null>(null)
  // Keep pcs accessible outside the effect (for mute/camera toggles)
  const pcsRef = useRef<Map<string, RTCPeerConnection>>(new Map())

  useEffect(() => {
    let mounted = true
    let channel: ReturnType<typeof supabase.channel>
    let announceTimer: ReturnType<typeof setInterval>

    // Local copies so closures inside this effect always see fresh maps
    const pcs = pcsRef.current
    const iceBuf = new Map<string, RTCIceCandidateInit[]>()

    // ── helpers ────────────────────────────────────────────────────────────
    const removePeer = (peerId: string) => {
      pcs.get(peerId)?.close()
      pcs.delete(peerId)
      iceBuf.delete(peerId)
      setPeers(prev => { const n = new Map(prev); n.delete(peerId); return n })
    }

    const flushIce = (peerId: string) => {
      const pc = pcs.get(peerId)
      if (!pc) return
      ;(iceBuf.get(peerId) ?? []).forEach(c => pc.addIceCandidate(c).catch(() => {}))
      iceBuf.delete(peerId)
    }

    const createPC = (peerId: string, peerName: string): RTCPeerConnection => {
      if (pcs.has(peerId)) { pcs.get(peerId)!.close(); pcs.delete(peerId) }
      const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS })

      // Add our local tracks to the peer connection
      localStreamRef.current?.getTracks().forEach(t => {
        pc.addTrack(t, localStreamRef.current!)
      })

      // When remote audio/video arrives
      pc.ontrack = e => {
        if (!mounted) return
        setPeers(prev => {
          const n = new Map(prev)
          n.set(peerId, { name: peerName, stream: e.streams[0] ?? null })
          return n
        })
      }

      // Relay ICE candidates through Supabase
      pc.onicecandidate = e => {
        if (!e.candidate) return
        channel?.send({
          type: 'broadcast', event: 'call_ice',
          payload: { from: userId, to: peerId, candidate: e.candidate.toJSON() },
        })
      }

      pc.onconnectionstatechange = () => {
        if (pc.connectionState === 'connected') setStatus('Connected')
        if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') removePeer(peerId)
      }

      pcs.set(peerId, pc)
      // Show peer immediately (stream arrives later via ontrack)
      setPeers(prev => { const n = new Map(prev); if (!n.has(peerId)) n.set(peerId, { name: peerName, stream: null }); return n })
      return pc
    }

    const announce = () => {
      channel?.send({
        type: 'broadcast', event: 'call_hello',
        payload: { from: userId, name: displayName, isTeacher },
      })
    }

    // ── start ──────────────────────────────────────────────────────────────
    const start = async () => {
      // 1. Get camera + mic, fall back to mic-only
      let stream: MediaStream | null = null
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      } catch {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true })
          setHasCamera(false)
          setVideoOff(true)
        } catch {
          setError('Microphone access denied.\n\nClick the 🔒 in your address bar → Site settings → allow Microphone, then refresh.')
          return
        }
      }
      if (!mounted) { stream.getTracks().forEach(t => t.stop()); return }
      localStreamRef.current = stream
      setLocalStream(stream)
      setStatus('Waiting for others…')

      // 2. Supabase signaling channel
      channel = supabase.channel(`call:${sessionId}`)

      channel
        // ── Someone announces they joined the call ──
        .on('broadcast', { event: 'call_hello' }, async ({ payload }) => {
          if (payload.from === userId) return

          if (isTeacher && !payload.isTeacher) {
            // New student → teacher makes the offer
            const pc = createPC(payload.from, payload.name)
            const offer = await pc.createOffer()
            await pc.setLocalDescription(offer)
            channel.send({
              type: 'broadcast', event: 'call_offer',
              payload: { from: userId, to: payload.from, sdp: pc.localDescription },
            })
          }

          if (!isTeacher && payload.isTeacher) {
            // Teacher (re-)appeared — re-announce so teacher sends us an offer
            announce()
          }
        })

        // ── Student receives offer from teacher ──
        .on('broadcast', { event: 'call_offer' }, async ({ payload }) => {
          if (payload.to !== userId) return
          const pc = createPC(payload.from, 'Teacher')
          await pc.setRemoteDescription(new RTCSessionDescription(payload.sdp))
          flushIce(payload.from)
          const answer = await pc.createAnswer()
          await pc.setLocalDescription(answer)
          channel.send({
            type: 'broadcast', event: 'call_answer',
            payload: { from: userId, to: payload.from, sdp: pc.localDescription },
          })
        })

        // ── Teacher receives answer from student ──
        .on('broadcast', { event: 'call_answer' }, async ({ payload }) => {
          if (payload.to !== userId) return
          const pc = pcs.get(payload.from)
          if (pc && !pc.remoteDescription) {
            await pc.setRemoteDescription(new RTCSessionDescription(payload.sdp))
            flushIce(payload.from)
          }
        })

        // ── ICE candidate relay ──
        .on('broadcast', { event: 'call_ice' }, ({ payload }) => {
          if (payload.to !== userId) return
          const pc = pcs.get(payload.from)
          if (pc?.remoteDescription) {
            pc.addIceCandidate(new RTCIceCandidate(payload.candidate)).catch(() => {})
          } else {
            const buf = iceBuf.get(payload.from) ?? []
            buf.push(payload.candidate)
            iceBuf.set(payload.from, buf)
          }
        })

        // ── Someone left ──
        .on('broadcast', { event: 'call_bye' }, ({ payload }) => {
          removePeer(payload.from)
        })

        .subscribe(s => {
          if (s === 'SUBSCRIBED') {
            announce()
            // Re-announce every 4 s until we have at least one peer (handles
            // missed messages from subscription timing race conditions)
            announceTimer = setInterval(() => {
              if (pcs.size > 0) { clearInterval(announceTimer); return }
              announce()
            }, 4000)
          }
        })
    }

    start()

    return () => {
      mounted = false
      clearInterval(announceTimer)
      channel?.send({ type: 'broadcast', event: 'call_bye', payload: { from: userId } })
      pcs.forEach(pc => pc.close())
      pcs.clear()
      localStreamRef.current?.getTracks().forEach(t => t.stop())
      localStreamRef.current = null
      if (channel) supabase.removeChannel(channel)
    }
  }, [sessionId, isTeacher, userId, displayName]) // stable values only

  // ── Controls ──────────────────────────────────────────────────────────────
  const toggleAudio = () => {
    localStreamRef.current?.getAudioTracks().forEach(t => { t.enabled = audioMuted })
    setAudioMuted(v => !v)
  }

  const toggleVideo = () => {
    if (!hasCamera) return
    localStreamRef.current?.getVideoTracks().forEach(t => { t.enabled = videoOff })
    setVideoOff(v => !v)
  }

  // ── Layout ────────────────────────────────────────────────────────────────
  const peersArr = Array.from(peers.entries())
  const total = peersArr.length + 1

  const panelClass = expanded
    ? 'fixed inset-0 z-50 flex flex-col bg-gray-950'
    : 'fixed bottom-0 right-0 z-40 flex flex-col bg-gray-950 shadow-2xl rounded-tl-2xl overflow-hidden'
  const panelStyle = expanded ? {} : { width: 'min(460px, 100vw)', height: 'min(620px, 75vh)' }

  const gridCols = total <= 2 ? 'grid-cols-1' : total <= 4 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'
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
            title={viewMode === 'grid' ? 'Speaker view' : 'Grid view'}
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <LayoutGrid size={14} />
          </button>
          <button onClick={() => setExpanded(v => !v)}
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            {expanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
          <button onClick={onClose}
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
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
          {!hasCamera && (
            <div className="bg-amber-600/20 border-b border-amber-500/30 px-3 py-1 text-amber-400 text-xs text-center shrink-0">
              No camera detected — audio only
            </div>
          )}

          {/* ── Grid view ── */}
          {viewMode === 'grid' && (
            <div className={`flex-1 min-h-0 p-2 grid gap-2 ${gridCols} content-start overflow-auto`}>
              <VideoTile stream={localStream} muted name={`${displayName} (you)`} noVideo={videoOff} className="aspect-video" />
              {peersArr.map(([id, info]) => (
                <VideoTile key={id} stream={info.stream} name={info.name} className="aspect-video" />
              ))}
            </div>
          )}

          {/* ── Speaker view ── */}
          {viewMode === 'speaker' && (
            <div className="flex-1 min-h-0 flex flex-col gap-1.5 p-2 overflow-hidden">
              <div className="flex-1 min-h-0">
                {speakerMain
                  ? <VideoTile stream={speakerMain[1].stream} name={speakerMain[1].name} className="h-full" />
                  : <VideoTile stream={localStream} muted name={`${displayName} (you)`} noVideo={videoOff} className="h-full" />}
              </div>
              <div className="flex gap-1.5 shrink-0 overflow-x-auto">
                {speakerMain && (
                  <VideoTile stream={localStream} muted name={`${displayName} (you)`} noVideo={videoOff} className="h-20 w-28 shrink-0" />
                )}
                {speakerThumbs.map(([id, info]) => (
                  <VideoTile key={id} stream={info.stream} name={info.name} className="h-20 w-28 shrink-0" />
                ))}
              </div>
            </div>
          )}

          {peersArr.length === 0 && (
            <div className="text-white/30 text-xs text-center py-1.5 shrink-0">
              {isTeacher ? 'Waiting for students to join the call…' : `${status}`}
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 py-3 bg-gray-900 border-t border-white/10 shrink-0">
            <div className="flex flex-col items-center gap-1">
              <button onClick={toggleAudio} title={audioMuted ? 'Unmute' : 'Mute'}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${audioMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'}`}>
                {audioMuted ? <MicOff size={20} className="text-white" /> : <Mic size={20} className="text-white" />}
              </button>
              <span className="text-white/40 text-[10px]">{audioMuted ? 'Unmute' : 'Mute'}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <button onClick={toggleVideo} disabled={!hasCamera} title={videoOff ? 'Camera on' : 'Camera off'}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${!hasCamera ? 'bg-white/5 opacity-40 cursor-not-allowed' : videoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'}`}>
                {videoOff ? <VideoOff size={20} className="text-white" /> : <Video size={20} className="text-white" />}
              </button>
              <span className="text-white/40 text-[10px]">{videoOff ? 'Start Video' : 'Stop Video'}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <button onClick={onClose} title="Leave call"
                className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors">
                <PhoneOff size={20} className="text-white" />
              </button>
              <span className="text-white/40 text-[10px]">Leave</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
