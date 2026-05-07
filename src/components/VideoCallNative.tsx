import { useState, useEffect, useRef } from 'react'
import {
  X, Maximize2, Minimize2, Mic, MicOff, Video, VideoOff,
  PhoneOff, LayoutGrid, Users,
} from 'lucide-react'
import { supabase } from '../lib/supabase'

// Google STUN + Open Relay Project free TURN servers
const ICE: RTCIceServer[] = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  {
    urls: 'turn:openrelay.metered.ca:80',
    username: 'openrelayproject',
    credential: 'openrelayproject',
  },
  {
    urls: 'turn:openrelay.metered.ca:443',
    username: 'openrelayproject',
    credential: 'openrelayproject',
  },
  {
    urls: 'turn:openrelay.metered.ca:80?transport=tcp',
    username: 'openrelayproject',
    credential: 'openrelayproject',
  },
  {
    urls: 'turns:openrelay.metered.ca:443',
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

type PeerState = { name: string; stream: MediaStream | null; state: string }

// ── Video tile ────────────────────────────────────────────────────────────────
function VideoTile({ stream, muted = false, name, noVideo = false, state = '', className = '' }: {
  stream: MediaStream | null; muted?: boolean; name: string
  noVideo?: boolean; state?: string; className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => { if (ref.current) ref.current.srcObject = stream }, [stream])
  const showAvatar = noVideo || !stream

  return (
    <div className={`relative bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center ${className}`}>
      <video ref={ref} autoPlay playsInline muted={muted}
        className={`w-full h-full object-cover ${showAvatar ? 'invisible absolute' : ''}`} />
      {showAvatar && (
        <div className="w-14 h-14 rounded-full bg-[#1b2b4b] flex items-center justify-center">
          <span className="text-white text-2xl font-bold">{name.charAt(0).toUpperCase()}</span>
        </div>
      )}
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
        <span className="text-white text-xs bg-black/60 px-2 py-0.5 rounded-full truncate max-w-[70%]">{name}</span>
        {state && state !== 'connected' && (
          <span className="text-yellow-400 text-[10px] bg-black/60 px-1.5 py-0.5 rounded-full">{state}</span>
        )}
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function VideoCallNative({ sessionId, isTeacher, userId, displayName, onClose }: Props) {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null)
  const [peers, setPeers] = useState<Map<string, PeerState>>(new Map())
  const [audioMuted, setAudioMuted] = useState(false)
  const [videoOff, setVideoOff] = useState(false)
  const [hasCamera, setHasCamera] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'speaker'>('grid')
  const [error, setError] = useState('')

  const localStreamRef = useRef<MediaStream | null>(null)
  const pcsRef = useRef(new Map<string, RTCPeerConnection>())

  useEffect(() => {
    let mounted = true
    const pcs = pcsRef.current
    const iceBuf = new Map<string, RTCIceCandidateInit[]>()
    let ch: ReturnType<typeof supabase.channel>

    // ── helpers ───────────────────────────────────────────────────────────────
    const setPeerState = (id: string, update: Partial<PeerState>) =>
      setPeers(prev => {
        const n = new Map(prev)
        const cur = n.get(id) ?? { name: id, stream: null, state: 'connecting' }
        n.set(id, { ...cur, ...update })
        return n
      })

    const removePeer = (id: string) => {
      pcs.get(id)?.close()
      pcs.delete(id)
      iceBuf.delete(id)
      setPeers(prev => { const n = new Map(prev); n.delete(id); return n })
    }

    const flushIce = (id: string) => {
      const pc = pcs.get(id)
      if (!pc) return
      ;(iceBuf.get(id) ?? []).forEach(c => pc.addIceCandidate(new RTCIceCandidate(c)).catch(() => {}))
      iceBuf.delete(id)
    }

    const buildPC = (peerId: string, peerName: string) => {
      pcs.get(peerId)?.close()
      const pc = new RTCPeerConnection({ iceServers: ICE })

      // Send our local tracks
      localStreamRef.current?.getTracks().forEach(t => pc.addTrack(t, localStreamRef.current!))

      // Incoming remote stream
      pc.ontrack = e => {
        if (!mounted) return
        setPeerState(peerId, { stream: e.streams[0] ?? null })
      }

      // Relay ICE candidates
      pc.onicecandidate = e => {
        if (!e.candidate) return
        ch?.send({ type: 'broadcast', event: 'call_ice', payload: { from: userId, to: peerId, candidate: e.candidate.toJSON() } })
      }

      pc.onconnectionstatechange = () => {
        const s = pc.connectionState
        if (!mounted) return
        setPeerState(peerId, { state: s })
        if (s === 'failed' || s === 'closed') removePeer(peerId)
      }

      pcs.set(peerId, pc)
      setPeerState(peerId, { name: peerName, state: 'connecting' })
      return pc
    }

    // Teacher creates and sends an offer to a specific student
    const makeOffer = async (peerId: string, peerName: string) => {
      if (pcs.has(peerId)) return // already connecting / connected
      const pc = buildPC(peerId, peerName)
      try {
        const offer = await pc.createOffer()
        await pc.setLocalDescription(offer)
        ch.send({ type: 'broadcast', event: 'call_offer', payload: { from: userId, to: peerId, sdp: pc.localDescription } })
      } catch { removePeer(peerId) }
    }

    // ── main start ────────────────────────────────────────────────────────────
    const start = async () => {
      // 1. Acquire camera + mic; fall back to audio-only
      let stream: MediaStream | null = null
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      } catch {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true })
          setHasCamera(false); setVideoOff(true)
        } catch {
          setError('Microphone access denied.\n\nClick the 🔒 in your address bar → Site settings → allow Microphone, then refresh.')
          return
        }
      }
      if (!mounted) { stream!.getTracks().forEach(t => t.stop()); return }
      localStreamRef.current = stream
      setLocalStream(stream)

      // 2. Set up Supabase channel
      //    • Presence — guarantees peer discovery (no missed messages)
      //    • Broadcast — carries SDP offer/answer and ICE candidates
      ch = supabase.channel(`call:${sessionId}`)

      ch
        // ── Presence: someone joined ──────────────────────────────────────────
        .on('presence', { event: 'join' }, ({ key, newPresences }) => {
          if (key === userId) return
          const p = (newPresences as Array<{ name: string; isTeacher: boolean }>)[0]
          if (!p) return
          // Only teacher creates offers
          if (isTeacher && !p.isTeacher) makeOffer(key, p.name)
        })

        // ── Presence: someone left ────────────────────────────────────────────
        .on('presence', { event: 'leave' }, ({ key }) => removePeer(key as string))

        // ── Student receives offer → sends answer ─────────────────────────────
        .on('broadcast', { event: 'call_offer' }, async ({ payload }) => {
          if (payload.to !== userId) return
          const pc = buildPC(payload.from, 'Teacher')
          await pc.setRemoteDescription(new RTCSessionDescription(payload.sdp))
          flushIce(payload.from)
          const answer = await pc.createAnswer()
          await pc.setLocalDescription(answer)
          ch.send({ type: 'broadcast', event: 'call_answer', payload: { from: userId, to: payload.from, sdp: pc.localDescription } })
        })

        // ── Teacher receives answer ───────────────────────────────────────────
        .on('broadcast', { event: 'call_answer' }, async ({ payload }) => {
          if (payload.to !== userId) return
          const pc = pcs.get(payload.from)
          if (pc && !pc.remoteDescription) {
            await pc.setRemoteDescription(new RTCSessionDescription(payload.sdp))
            flushIce(payload.from)
          }
        })

        // ── ICE relay ─────────────────────────────────────────────────────────
        .on('broadcast', { event: 'call_ice' }, ({ payload }) => {
          if (payload.to !== userId) return
          const pc = pcs.get(payload.from)
          if (pc?.remoteDescription) {
            pc.addIceCandidate(new RTCIceCandidate(payload.candidate)).catch(() => {})
          } else {
            const buf = iceBuf.get(payload.from) ?? []; buf.push(payload.candidate); iceBuf.set(payload.from, buf)
          }
        })

        .subscribe(async (status) => {
          if (status !== 'SUBSCRIBED') return

          // Track presence so everyone knows we're here
          await ch.track({ name: displayName, isTeacher })

          // If teacher, make offers to anyone already present
          if (isTeacher) {
            const state = ch.presenceState<{ name: string; isTeacher: boolean }>()
            for (const [key, presences] of Object.entries(state)) {
              if (key === userId) continue
              const p = presences[0]
              if (p && !p.isTeacher) makeOffer(key, p.name)
            }
          }
        })
    }

    start()

    return () => {
      mounted = false
      ch?.untrack()
      pcs.forEach(pc => pc.close())
      pcs.clear()
      localStreamRef.current?.getTracks().forEach(t => t.stop())
      localStreamRef.current = null
      if (ch) supabase.removeChannel(ch)
    }
  }, [sessionId, isTeacher, userId, displayName])

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
  const gridCols = total <= 2 ? 'grid-cols-1' : total <= 4 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'

  const panelClass = expanded
    ? 'fixed inset-0 z-50 flex flex-col bg-gray-950'
    : 'fixed bottom-0 right-0 z-40 flex flex-col bg-gray-950 shadow-2xl rounded-tl-2xl overflow-hidden'
  const panelStyle = expanded ? {} : { width: 'min(460px, 100vw)', height: 'min(620px, 75vh)' }

  return (
    <div className={panelClass} style={panelStyle}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 shrink-0 bg-gray-900 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Video size={14} className="text-white/70" />
          <span className="text-white text-sm font-semibold">Live Class</span>
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="flex items-center gap-1 text-white/40 text-xs"><Users size={11} /> {total}</span>
        </div>
        <div className="flex gap-1">
          <button onClick={() => setViewMode(v => v === 'grid' ? 'speaker' : 'grid')} title="Toggle view"
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <LayoutGrid size={14} />
          </button>
          <button onClick={() => setExpanded(v => !v)}
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
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
          {!hasCamera && (
            <div className="bg-amber-600/20 border-b border-amber-500/30 px-3 py-1 text-amber-400 text-xs text-center shrink-0">
              No camera — audio only
            </div>
          )}

          {/* Grid view */}
          {viewMode === 'grid' && (
            <div className={`flex-1 min-h-0 p-2 grid gap-2 ${gridCols} content-start overflow-auto`}>
              <VideoTile stream={localStream} muted name={`${displayName} (you)`} noVideo={videoOff} className="aspect-video" />
              {peersArr.map(([id, info]) => (
                <VideoTile key={id} stream={info.stream} name={info.name} state={info.state} className="aspect-video" />
              ))}
            </div>
          )}

          {/* Speaker view */}
          {viewMode === 'speaker' && (
            <div className="flex-1 min-h-0 flex flex-col gap-1.5 p-2 overflow-hidden">
              <div className="flex-1 min-h-0">
                {peersArr[0]
                  ? <VideoTile stream={peersArr[0][1].stream} name={peersArr[0][1].name} state={peersArr[0][1].state} className="h-full" />
                  : <VideoTile stream={localStream} muted name={`${displayName} (you)`} noVideo={videoOff} className="h-full" />}
              </div>
              <div className="flex gap-1.5 shrink-0 overflow-x-auto pb-1">
                {peersArr[0] && <VideoTile stream={localStream} muted name={`${displayName} (you)`} noVideo={videoOff} className="h-20 w-28 shrink-0" />}
                {peersArr.slice(1).map(([id, info]) => (
                  <VideoTile key={id} stream={info.stream} name={info.name} state={info.state} className="h-20 w-28 shrink-0" />
                ))}
              </div>
            </div>
          )}

          {peersArr.length === 0 && (
            <div className="text-white/30 text-xs text-center py-1.5 shrink-0">
              {isTeacher ? 'Waiting for students to join the call…' : 'Waiting for teacher…'}
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 py-3 bg-gray-900 border-t border-white/10 shrink-0">
            {[
              {
                onClick: toggleAudio, active: audioMuted,
                icon: audioMuted ? <MicOff size={20} className="text-white" /> : <Mic size={20} className="text-white" />,
                label: audioMuted ? 'Unmute' : 'Mute',
              },
              {
                onClick: toggleVideo, active: videoOff, disabled: !hasCamera,
                icon: videoOff ? <VideoOff size={20} className="text-white" /> : <Video size={20} className="text-white" />,
                label: videoOff ? 'Start Video' : 'Stop Video',
              },
            ].map(({ onClick, active, disabled, icon, label }, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <button onClick={onClick} disabled={disabled}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors
                    ${disabled ? 'opacity-30 cursor-not-allowed bg-white/5' : active ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'}`}>
                  {icon}
                </button>
                <span className="text-white/40 text-[10px]">{label}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-1">
              <button onClick={onClose}
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
