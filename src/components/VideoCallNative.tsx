import { useState, useEffect, useRef, useCallback } from 'react'
import { X, Maximize2, Minimize2, Mic, MicOff, Video, VideoOff, PhoneOff } from 'lucide-react'
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

// Renders a single video tile
function VideoTile({ stream, muted = false, name, className = '' }: {
  stream: MediaStream | null
  muted?: boolean
  name: string
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (ref.current) ref.current.srcObject = stream
  }, [stream])

  return (
    <div className={`relative bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center ${className}`}>
      <video ref={ref} autoPlay playsInline muted={muted} className="w-full h-full object-cover" />
      {!stream && (
        <div className="absolute inset-0 flex items-center justify-center">
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
  const [expanded, setExpanded] = useState(false)
  const [error, setError] = useState('')

  const localStreamRef = useRef<MediaStream | null>(null)
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
    // Close any existing connection for this peer
    if (pcsRef.current.has(peerId)) {
      pcsRef.current.get(peerId)!.close()
      pcsRef.current.delete(peerId)
    }

    const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS })

    // Send our local tracks to the peer
    localStreamRef.current?.getTracks().forEach(t => pc.addTrack(t, localStreamRef.current!))

    // Receive the peer's stream
    pc.ontrack = e => {
      setPeers(prev => {
        const n = new Map(prev)
        n.set(peerId, { name: peerName, stream: e.streams[0] ?? null })
        return n
      })
    }

    // Forward ICE candidates through Supabase
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
    // Show peer in list immediately (stream arrives later via ontrack)
    setPeers(prev => { const n = new Map(prev); if (!n.has(peerId)) n.set(peerId, { name: peerName, stream: null }); return n })
    return pc
  }, [userId, removePeer])

  const flushIce = useCallback((peerId: string) => {
    const pc = pcsRef.current.get(peerId)
    if (!pc) return
    const buf = iceBufRef.current.get(peerId) ?? []
    buf.forEach(c => pc.addIceCandidate(c).catch(() => {}))
    iceBufRef.current.delete(peerId)
  }, [])

  useEffect(() => {
    let mounted = true

    const start = async () => {
      // 1. Get camera + mic
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        if (!mounted) { stream.getTracks().forEach(t => t.stop()); return }
        localStreamRef.current = stream
        setLocalStream(stream)
      } catch {
        setError('Could not access camera or microphone.\nPlease allow access and try again.')
        return
      }

      // 2. Set up Supabase signaling channel
      const channel = supabase.channel(`call:${sessionId}`)

      channel
        // Someone joined the call
        .on('broadcast', { event: 'call_hello' }, async ({ payload }) => {
          if (payload.from === userId) return

          if (isTeacher && !payload.isTeacher) {
            // New student → teacher creates the offer
            const pc = createPC(payload.from, payload.name)
            const offer = await pc.createOffer()
            await pc.setLocalDescription(offer)
            channel.send({
              type: 'broadcast', event: 'call_offer',
              payload: { from: userId, to: payload.from, sdp: pc.localDescription },
            })
          }

          if (!isTeacher && payload.isTeacher) {
            // Teacher (re)appeared — re-announce so they make an offer to us
            channel.send({
              type: 'broadcast', event: 'call_hello',
              payload: { from: userId, name: displayName, isTeacher: false },
            })
          }
        })

        // Student receives offer from teacher
        .on('broadcast', { event: 'call_offer' }, async ({ payload }) => {
          if (payload.to !== userId) return
          const pc = createPC(payload.from, 'Teacher')
          await pc.setRemoteDescription(payload.sdp)
          flushIce(payload.from)
          const answer = await pc.createAnswer()
          await pc.setLocalDescription(answer)
          channel.send({
            type: 'broadcast', event: 'call_answer',
            payload: { from: userId, to: payload.from, sdp: pc.localDescription },
          })
        })

        // Teacher receives answer from student
        .on('broadcast', { event: 'call_answer' }, async ({ payload }) => {
          if (payload.to !== userId) return
          const pc = pcsRef.current.get(payload.from)
          if (pc && !pc.remoteDescription) {
            await pc.setRemoteDescription(payload.sdp)
            flushIce(payload.from)
          }
        })

        // ICE candidate exchange
        .on('broadcast', { event: 'call_ice' }, ({ payload }) => {
          if (payload.to !== userId) return
          const pc = pcsRef.current.get(payload.from)
          if (pc?.remoteDescription) {
            pc.addIceCandidate(payload.candidate).catch(() => {})
          } else {
            const buf = iceBufRef.current.get(payload.from) ?? []
            buf.push(payload.candidate)
            iceBufRef.current.set(payload.from, buf)
          }
        })

        // Someone left
        .on('broadcast', { event: 'call_bye' }, ({ payload }) => {
          removePeer(payload.from)
        })

        .subscribe(status => {
          if (status === 'SUBSCRIBED') {
            // Announce presence so peers can initiate connections
            channel.send({
              type: 'broadcast', event: 'call_hello',
              payload: { from: userId, name: displayName, isTeacher },
            })
          }
        })

      channelRef.current = channel
    }

    start()

    return () => {
      mounted = false
      channelRef.current?.send({
        type: 'broadcast', event: 'call_bye',
        payload: { from: userId },
      })
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
    localStreamRef.current?.getVideoTracks().forEach(t => { t.enabled = videoOff })
    setVideoOff(v => !v)
  }

  const peersArr = Array.from(peers.entries())
  const total = peersArr.length + 1

  const panelClass = expanded
    ? 'fixed inset-0 z-50 flex flex-col bg-gray-950'
    : 'fixed bottom-0 right-0 z-40 flex flex-col bg-gray-950 shadow-2xl rounded-tl-2xl overflow-hidden'
  const panelStyle = expanded ? {} : { width: 'min(440px, 100vw)', height: 'min(600px, 72vh)' }

  const gridCols = total === 1 ? 'grid-cols-1'
    : total === 2 ? 'grid-cols-1'
    : total <= 4 ? 'grid-cols-2'
    : 'grid-cols-2 sm:grid-cols-3'

  return (
    <div className={panelClass} style={panelStyle}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 shrink-0 bg-gray-900 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Video size={14} className="text-white/70" />
          <span className="text-white text-sm font-semibold">Live Class</span>
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="text-white/40 text-xs">{total} in call</span>
        </div>
        <div className="flex gap-1">
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
            <div className="text-red-400 text-sm mb-3 whitespace-pre-line">{error}</div>
            <button onClick={onClose} className="text-white/50 text-xs underline">Close</button>
          </div>
        </div>
      ) : (
        <>
          {/* Video grid */}
          <div className={`flex-1 min-h-0 p-2 grid gap-2 content-start ${gridCols}`}>
            {/* Own video — always first, always muted to avoid echo */}
            <VideoTile
              stream={localStream}
              muted
              name={`${displayName} (you)`}
              className={`${total === 2 ? 'aspect-[4/3]' : 'aspect-video'}`}
            />
            {peersArr.map(([id, info]) => (
              <VideoTile
                key={id}
                stream={info.stream}
                name={info.name}
                className={`${total === 2 ? 'aspect-[4/3]' : 'aspect-video'}`}
              />
            ))}
          </div>

          {peersArr.length === 0 && (
            <div className="text-white/30 text-xs text-center pb-2">
              {isTeacher ? 'Waiting for students to join the call…' : 'Waiting for teacher to start…'}
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 py-3 bg-gray-900 border-t border-white/10 shrink-0">
            <button
              onClick={toggleAudio}
              title={audioMuted ? 'Unmute microphone' : 'Mute microphone'}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${audioMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'}`}
            >
              {audioMuted ? <MicOff size={20} className="text-white" /> : <Mic size={20} className="text-white" />}
            </button>
            <button
              onClick={toggleVideo}
              title={videoOff ? 'Turn on camera' : 'Turn off camera'}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${videoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'}`}
            >
              {videoOff ? <VideoOff size={20} className="text-white" /> : <Video size={20} className="text-white" />}
            </button>
            <button
              onClick={onClose}
              title="Leave call"
              className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors"
            >
              <PhoneOff size={20} className="text-white" />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
