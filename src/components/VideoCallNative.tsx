import { useState, useEffect, useRef } from 'react'
import {
  X, Maximize2, Minimize2, Mic, MicOff, Video, VideoOff,
  PhoneOff, LayoutGrid, Users, Minus, VolumeX, Volume2, Circle, Square, AlignLeft, Download, Monitor, MonitorOff,
} from 'lucide-react'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'

const ICE: RTCIceServer[] = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  { urls: 'turn:openrelay.metered.ca:80', username: 'openrelayproject', credential: 'openrelayproject' },
  { urls: 'turn:openrelay.metered.ca:443', username: 'openrelayproject', credential: 'openrelayproject' },
  { urls: 'turn:openrelay.metered.ca:80?transport=tcp', username: 'openrelayproject', credential: 'openrelayproject' },
  { urls: 'turns:openrelay.metered.ca:443', username: 'openrelayproject', credential: 'openrelayproject' },
]

interface Props {
  sessionId: string
  isTeacher: boolean
  userId: string
  displayName: string
  onClose: () => void
}

type PeerState = { name: string; stream: MediaStream | null; state: string }
type CtrlAction = 'mute' | 'unmute' | 'video_off' | 'video_on' | 'record_on' | 'record_off' | 'captions_on' | 'captions_off'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SRCtor = new () => any
const getSR = (): SRCtor | undefined => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any
  return w.SpeechRecognition ?? w.webkitSpeechRecognition
}

// ── Video tile ────────────────────────────────────────────────────────────────
function VideoTile({ stream, muted = false, name, noVideo = false, state = '',
  className = '', onMute, onUnmute, showMuteBtn = false, peerMuted = false }: {
  stream: MediaStream | null; muted?: boolean; name: string
  noVideo?: boolean; state?: string; className?: string
  onMute?: () => void; onUnmute?: () => void; showMuteBtn?: boolean; peerMuted?: boolean
}) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.srcObject = stream
    if (!stream) return
    v.play().catch(() => {})
    // Audio tracks often arrive after the video track. The stream reference never changes
    // (same MediaStream mutated in place), so this useEffect won't re-run for new tracks.
    // Re-calling play() on addtrack ensures audio starts even when it lands late.
    const replay = () => v.play().catch(() => {})
    stream.addEventListener('addtrack', replay)
    return () => stream.removeEventListener('addtrack', replay)
  }, [stream])
  const showAvatar = noVideo || !stream || stream.getVideoTracks().length === 0

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
        <div className="flex items-center gap-1">
          {state && state !== 'connected' && (
            <span className="text-yellow-400 text-[10px] bg-black/60 px-1.5 py-0.5 rounded-full">{state}</span>
          )}
          {showMuteBtn && (peerMuted ? (
            <button onClick={onUnmute} title="Unmute participant"
              className="w-6 h-6 rounded-full bg-green-600/80 hover:bg-green-500 flex items-center justify-center transition-colors">
              <Volume2 size={11} className="text-white" />
            </button>
          ) : (
            <button onClick={onMute} title="Mute participant"
              className="w-6 h-6 rounded-full bg-black/60 hover:bg-red-500/80 flex items-center justify-center transition-colors">
              <VolumeX size={11} className="text-white" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Format seconds as MM:SS ───────────────────────────────────────────────────
const fmtTime = (s: number) =>
  `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`

// ── Main component ────────────────────────────────────────────────────────────
export default function VideoCallNative({ sessionId, isTeacher, userId, displayName, onClose }: Props) {
  // Per-tab/device unique call ID — lets the same teacher log in on 2 devices simultaneously
  const [callId] = useState(() => {
    const key = `nexaboard_callid_${sessionId}_${userId}`
    let id = sessionStorage.getItem(key)
    if (!id) {
      id = `${userId.slice(-8)}_${Math.random().toString(36).slice(2, 8)}`
      sessionStorage.setItem(key, id)
    }
    return id
  })

  const [localStream, setLocalStream] = useState<MediaStream | null>(null)
  const [peers, setPeers] = useState<Map<string, PeerState>>(new Map())
  const [audioMuted, setAudioMuted] = useState(false)
  const [videoOff, setVideoOff] = useState(false)
  const [hasCamera, setHasCamera] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'speaker'>('grid')
  const [error, setError] = useState('')

  // Screen share — local
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null)
  const screenStreamRef = useRef<MediaStream | null>(null)
  const screenSendersRef = useRef<Map<string, RTCRtpSender>>(new Map())

  // Screen share — who's currently sharing (globally)
  const [screenSharerCallId, setScreenSharerCallId] = useState<string | null>(null)
  const [screenSharerName, setScreenSharerName] = useState<string | null>(null)
  const screenSharerCallIdRef = useRef<string | null>(null)

  // Peer screen share streams (second video track from remote peers)
  const [peerScreenStreams, setPeerScreenStreams] = useState(new Map<string, MediaStream>())

  // Teacher peer devices (callIds with isTeacher=true, for ctrl_sync filtering)
  const teacherCallIdsRef = useRef(new Set<string>())

  // Teacher-muted peers (tracked on teacher side so button shows correct state)
  const [mutedPeers, setMutedPeers] = useState(new Set<string>())

  // Call duration clock — starts when local stream is obtained
  const [callSeconds, setCallSeconds] = useState(0)
  const callTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Recording
  const [recording, setRecording] = useState(false)
  const [recSeconds, setRecSeconds] = useState(0)

  // Transcription
  const [transcribing, setTranscribing] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [interimText, setInterimText] = useState('')
  const [showTranscript, setShowTranscript] = useState(false)

  const localStreamRef = useRef<MediaStream | null>(null)
  const pcsRef = useRef(new Map<string, RTCPeerConnection>())
  const chRef = useRef<ReturnType<typeof supabase.channel> | null>(null)

  // Recording refs
  const audioCtxRef = useRef<AudioContext | null>(null)
  const mixDestRef = useRef<MediaStreamAudioDestinationNode | null>(null)
  const connectedStreamsRef = useRef(new Set<string>())
  const recorderRef = useRef<MediaRecorder | null>(null)
  const recTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Transcription refs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null)
  const transcribingRef = useRef(false)

  // ── WebRTC setup ─────────────────────────────────────────────────────────────
  useEffect(() => {
    let mounted = true
    const pcs = pcsRef.current
    const iceBuf = new Map<string, RTCIceCandidateInit[]>()
    let availCh: ReturnType<typeof supabase.channel> | null = null

    const setPeerState = (id: string, update: Partial<PeerState>) =>
      setPeers(prev => {
        const n = new Map(prev)
        const cur = n.get(id) ?? { name: id, stream: null, state: 'connecting' }
        n.set(id, { ...cur, ...update })
        return n
      })

    const removePeer = (id: string) => {
      pcs.get(id)?.close(); pcs.delete(id); iceBuf.delete(id)
      setPeers(prev => { const n = new Map(prev); n.delete(id); return n })
      setPeerScreenStreams(prev => { const n = new Map(prev); n.delete(id); return n })
      setMutedPeers(prev => { const n = new Set(prev); n.delete(id); return n })
    }

    const flushIce = (id: string) => {
      const pc = pcs.get(id); if (!pc) return
      ;(iceBuf.get(id) ?? []).forEach(c => pc.addIceCandidate(new RTCIceCandidate(c)).catch(() => {}))
      iceBuf.delete(id)
    }

    const buildPC = (peerCallId: string, peerName: string) => {
      pcs.get(peerCallId)?.close()
      const pc = new RTCPeerConnection({ iceServers: ICE })
      const remoteStream = new MediaStream()

      localStreamRef.current?.getTracks().forEach(t => pc.addTrack(t, localStreamRef.current!))

      pc.ontrack = e => {
        if (!mounted) return

        // If this peer's stream already has a video track and this new track is also video,
        // it's a screen share track — put it in a separate stream
        if (e.track.kind === 'video' && remoteStream.getVideoTracks().length > 0) {
          const ss = new MediaStream([e.track])
          setPeerScreenStreams(prev => { const n = new Map(prev); n.set(peerCallId, ss); return n })
          e.track.onended = () => {
            setPeerScreenStreams(prev => { const n = new Map(prev); n.delete(peerCallId); return n })
          }
        } else {
          remoteStream.addTrack(e.track)
          setPeerState(peerCallId, { stream: remoteStream })
        }

        // Auto-connect audio to active recording mix
        if (audioCtxRef.current && mixDestRef.current && !connectedStreamsRef.current.has(peerCallId)) {
          try {
            audioCtxRef.current.createMediaStreamSource(remoteStream).connect(mixDestRef.current)
            connectedStreamsRef.current.add(peerCallId)
          } catch { }
        }
      }

      pc.onicecandidate = e => {
        if (!e.candidate) return
        chRef.current?.send({
          type: 'broadcast', event: 'call_ice',
          payload: { from: callId, to: peerCallId, candidate: e.candidate.toJSON() },
        })
      }

      pc.onconnectionstatechange = () => {
        if (!mounted) return
        const s = pc.connectionState
        setPeerState(peerCallId, { state: s })
        if (s === 'failed' || s === 'closed') {
          removePeer(peerCallId)
          // Teacher re-offers to students that drop — check they're still in the channel first
          if (isTeacher && !teacherCallIdsRef.current.has(peerCallId)) {
            setTimeout(() => {
              if (!mounted) return
              const presenceState = chRef.current?.presenceState<{ callId: string }>() ?? {}
              const stillPresent = Object.values(presenceState).some(list =>
                list.some((p: { callId: string }) => p.callId === peerCallId)
              )
              if (stillPresent) makeOffer(peerCallId, peerName)
            }, 3000)
          }
        }
      }

      // Renegotiation: fires when a track is added to an established connection
      // (e.g. student starts screen share). Guard prevents firing during initial setup.
      pc.onnegotiationneeded = async () => {
        if (pc.signalingState !== 'stable' || pc.connectionState === 'new' || pc.connectionState === 'connecting') return
        try {
          const offer = await pc.createOffer()
          await pc.setLocalDescription(offer)
          chRef.current?.send({
            type: 'broadcast', event: 'call_offer',
            payload: { from: callId, to: peerCallId, sdp: pc.localDescription, name: displayName },
          })
        } catch { /* connection may have closed */ }
      }

      pcs.set(peerCallId, pc)
      setPeerState(peerCallId, { name: peerName, stream: remoteStream, state: 'connecting' })
      return pc
    }

    const makeOffer = async (peerCallId: string, peerName: string) => {
      if (pcs.has(peerCallId)) return
      const pc = buildPC(peerCallId, peerName)
      try {
        const offer = await pc.createOffer()
        await pc.setLocalDescription(offer)
        chRef.current?.send({
          type: 'broadcast', event: 'call_offer',
          payload: { from: callId, to: peerCallId, sdp: pc.localDescription, name: displayName },
        })
      } catch { removePeer(peerCallId) }
    }

    const start = async () => {
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

      // Teacher signals call is active so students see the Join Call button
      if (isTeacher) {
        availCh = supabase.channel(`call_available:${sessionId}`)
        availCh.subscribe(async status => {
          if (status === 'SUBSCRIBED') await availCh!.track({ isTeacher: true })
        })
      }

      const ch = supabase.channel(`call:${sessionId}`)
      chRef.current = ch

      ch
        // ── Peer joined ─────────────────────────────────────────────────────
        .on('presence', { event: 'join' }, ({ newPresences }) => {
          const p = (newPresences as unknown as Array<{ name: string; isTeacher: boolean; callId: string }>)[0]
          if (!p || p.callId === callId) return
          if (p.isTeacher) teacherCallIdsRef.current.add(p.callId)
          // Teacher offers to students only. Teacher devices do NOT make WebRTC connections
          // to each other — they sync via ctrl_sync broadcasts instead. Students never offer.
          const shouldOffer = isTeacher && !p.isTeacher
          if (shouldOffer) makeOffer(p.callId, p.name)
        })
        // ── Peer left ───────────────────────────────────────────────────────
        .on('presence', { event: 'leave' }, ({ leftPresences }) => {
          const p = (leftPresences as unknown as Array<{ callId: string }>)[0]
          if (!p) return
          teacherCallIdsRef.current.delete(p.callId)
          // If the sharer leaves, clear screen share state
          if (screenSharerCallIdRef.current === p.callId) {
            screenSharerCallIdRef.current = null
            setScreenSharerCallId(null)
            setScreenSharerName(null)
          }
          removePeer(p.callId)
        })
        // ── Student/Teacher receives offer → sends answer ────────────────
        .on('broadcast', { event: 'call_offer' }, async ({ payload }) => {
          if (payload.to !== callId) return
          // Reuse existing PC for renegotiation (e.g. remote peer added screen share track)
          const pc = pcs.get(payload.from) ?? buildPC(payload.from, payload.name ?? (isTeacher ? 'Student' : 'Teacher'))
          await pc.setRemoteDescription(new RTCSessionDescription(payload.sdp))
          flushIce(payload.from)
          const answer = await pc.createAnswer()
          await pc.setLocalDescription(answer)
          ch.send({ type: 'broadcast', event: 'call_answer', payload: { from: callId, to: payload.from, sdp: pc.localDescription } })
        })
        // ── Caller receives answer ───────────────────────────────────────
        .on('broadcast', { event: 'call_answer' }, async ({ payload }) => {
          if (payload.to !== callId) return
          const pc = pcs.get(payload.from)
          if (pc) {
            await pc.setRemoteDescription(new RTCSessionDescription(payload.sdp))
            flushIce(payload.from)
          }
        })
        // ── ICE relay ────────────────────────────────────────────────────
        .on('broadcast', { event: 'call_ice' }, ({ payload }) => {
          if (payload.to !== callId) return
          const pc = pcs.get(payload.from)
          if (pc?.remoteDescription) {
            pc.addIceCandidate(new RTCIceCandidate(payload.candidate)).catch(() => {})
          } else {
            const buf = iceBuf.get(payload.from) ?? []; buf.push(payload.candidate); iceBuf.set(payload.from, buf)
          }
        })
        // ── Remote mute / unmute (teacher → student) ─────────────────────
        .on('broadcast', { event: 'call_remote_mute' }, ({ payload }) => {
          if (payload.to !== callId) return
          localStreamRef.current?.getAudioTracks().forEach(t => { t.enabled = false })
          setAudioMuted(true)
          toast('Teacher muted your microphone', { icon: '🔇' })
        })
        .on('broadcast', { event: 'call_remote_unmute' }, ({ payload }) => {
          if (payload.to !== callId) return
          localStreamRef.current?.getAudioTracks().forEach(t => { t.enabled = true })
          setAudioMuted(false)
          toast('Teacher unmuted your microphone', { icon: '🔊' })
        })
        // ── Screen share started (one at a time enforcement) ─────────────
        .on('broadcast', { event: 'screen_share_started' }, ({ payload }) => {
          if (payload.from === callId) return
          screenSharerCallIdRef.current = payload.from
          setScreenSharerCallId(payload.from)
          setScreenSharerName(payload.name)
        })
        // ── Screen share stopped ─────────────────────────────────────────
        .on('broadcast', { event: 'screen_share_stopped' }, ({ payload }) => {
          if (screenSharerCallIdRef.current !== payload.from) return
          screenSharerCallIdRef.current = null
          setScreenSharerCallId(null)
          setScreenSharerName(null)
        })
        // ── Teacher device sync (mute/video/record/captions state) ────────
        .on('broadcast', { event: 'ctrl_sync' }, ({ payload }) => {
          if (!isTeacher || payload.from === callId) return
          if (!teacherCallIdsRef.current.has(payload.from)) return
          const action = payload.action as CtrlAction
          if (action === 'mute') {
            localStreamRef.current?.getAudioTracks().forEach(t => { t.enabled = false })
            setAudioMuted(true)
          } else if (action === 'unmute') {
            localStreamRef.current?.getAudioTracks().forEach(t => { t.enabled = true })
            setAudioMuted(false)
          } else if (action === 'video_off') {
            localStreamRef.current?.getVideoTracks().forEach(t => { t.enabled = false })
            setVideoOff(true)
          } else if (action === 'video_on') {
            localStreamRef.current?.getVideoTracks().forEach(t => { t.enabled = true })
            setVideoOff(false)
          } else if (action === 'record_on') {
            setRecording(true)  // indicator only — avoid duplicate recording files
          } else if (action === 'record_off') {
            setRecording(false)
          } else if (action === 'captions_on') {
            setTranscribing(true); setShowTranscript(true)
          } else if (action === 'captions_off') {
            setTranscribing(false)
          }
        })

        .subscribe(async status => {
          if (status !== 'SUBSCRIBED') return
          await ch.track({ name: displayName, isTeacher, callId })
          const state = ch.presenceState<{ name: string; isTeacher: boolean; callId: string }>()
          for (const presences of Object.values(state)) {
            const p = presences[0]
            if (!p || p.callId === callId) continue
            if (p.isTeacher) teacherCallIdsRef.current.add(p.callId)
            // Teacher offers to students only. Teacher devices do NOT make WebRTC connections
          // to each other — they sync via ctrl_sync broadcasts instead. Students never offer.
          const shouldOffer = isTeacher && !p.isTeacher
            if (shouldOffer) makeOffer(p.callId, p.name)
          }
        })
    }

    start()

    return () => {
      mounted = false
      if (availCh) { availCh.untrack(); supabase.removeChannel(availCh) }
      const ch = chRef.current
      if (ch) { ch.untrack(); supabase.removeChannel(ch) }
      chRef.current = null
      pcs.forEach(pc => pc.close()); pcs.clear()
      localStreamRef.current?.getTracks().forEach(t => t.stop())
      localStreamRef.current = null
    }
  }, [sessionId, isTeacher, userId, callId, displayName])

  // ── Call duration clock ───────────────────────────────────────────────────
  useEffect(() => {
    if (!localStream) return
    callTimerRef.current = setInterval(() => setCallSeconds(s => s + 1), 1000)
    return () => { if (callTimerRef.current) clearInterval(callTimerRef.current) }
  }, [!!localStream])

  // ── Cleanup recording / transcription on unmount ─────────────────────────
  useEffect(() => {
    return () => {
      if (callTimerRef.current) clearInterval(callTimerRef.current)
      if (recTimerRef.current) clearInterval(recTimerRef.current)
      if (recorderRef.current?.state === 'recording') recorderRef.current.stop()
      audioCtxRef.current?.close()
      transcribingRef.current = false
      recognitionRef.current?.abort()
      screenStreamRef.current?.getTracks().forEach(t => t.stop())
    }
  }, [])

  // ── Broadcast helper (teacher device sync) ────────────────────────────────
  const broadcastCtrl = (action: CtrlAction) => {
    if (!isTeacher) return
    chRef.current?.send({
      type: 'broadcast', event: 'ctrl_sync',
      payload: { from: callId, isTeacher: true, action },
    })
  }

  // ── Media controls ────────────────────────────────────────────────────────
  const toggleAudio = () => {
    const nextMuted = !audioMuted
    localStreamRef.current?.getAudioTracks().forEach(t => { t.enabled = !nextMuted })
    setAudioMuted(nextMuted)
    broadcastCtrl(nextMuted ? 'mute' : 'unmute')
  }
  const toggleVideo = () => {
    if (!hasCamera) return
    const nextOff = !videoOff
    localStreamRef.current?.getVideoTracks().forEach(t => { t.enabled = !nextOff })
    setVideoOff(nextOff)
    broadcastCtrl(nextOff ? 'video_off' : 'video_on')
  }
  const mutePeer = (peerCallId: string) => {
    chRef.current?.send({ type: 'broadcast', event: 'call_remote_mute', payload: { to: peerCallId } })
    setMutedPeers(prev => new Set([...prev, peerCallId]))
    toast.success('Student muted')
  }
  const unmutePeer = (peerCallId: string) => {
    chRef.current?.send({ type: 'broadcast', event: 'call_remote_unmute', payload: { to: peerCallId } })
    setMutedPeers(prev => { const n = new Set(prev); n.delete(peerCallId); return n })
    toast.success('Student unmuted')
  }

  // ── Screen share ─────────────────────────────────────────────────────────
  const startScreenShare = async () => {
    // One-at-a-time: block if someone else is sharing
    if (screenSharerCallIdRef.current && screenSharerCallIdRef.current !== callId) {
      toast.error(`${screenSharerName ?? 'Someone'} is already sharing their screen`)
      return
    }
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false })
      const track = stream.getVideoTracks()[0]
      if (!track) return

      pcsRef.current.forEach((pc, peerId) => {
        const sender = pc.addTrack(track, stream)
        screenSendersRef.current.set(peerId, sender)
      })

      screenStreamRef.current = stream
      setScreenStream(stream)
      screenSharerCallIdRef.current = callId
      setScreenSharerCallId(callId)

      // Announce to everyone
      chRef.current?.send({
        type: 'broadcast', event: 'screen_share_started',
        payload: { from: callId, name: displayName },
      })

      track.onended = () => stopScreenShare()
      toast.success('Screen sharing started')
    } catch {
      toast.error('Could not start screen share')
    }
  }

  const stopScreenShare = () => {
    screenStreamRef.current?.getTracks().forEach(t => t.stop())
    screenStreamRef.current = null
    setScreenStream(null)
    screenSharerCallIdRef.current = null
    setScreenSharerCallId(null)

    screenSendersRef.current.forEach((sender, peerId) => {
      try { pcsRef.current.get(peerId)?.removeTrack(sender) } catch { }
    })
    screenSendersRef.current.clear()

    chRef.current?.send({
      type: 'broadcast', event: 'screen_share_stopped',
      payload: { from: callId },
    })
    toast('Screen sharing stopped', { icon: '🖥️' })
  }

  // ── Recording ─────────────────────────────────────────────────────────────
  const startRecording = () => {
    const ctx = new AudioContext()
    const dest = ctx.createMediaStreamDestination()
    audioCtxRef.current = ctx
    mixDestRef.current = dest
    connectedStreamsRef.current = new Set()

    const connectStream = (id: string, stream: MediaStream) => {
      if (connectedStreamsRef.current.has(id)) return
      try { ctx.createMediaStreamSource(stream).connect(dest); connectedStreamsRef.current.add(id) } catch { }
    }

    if (localStreamRef.current) connectStream('local', localStreamRef.current)
    peers.forEach((info, id) => { if (info.stream) connectStream(id, info.stream) })

    const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
      ? 'audio/webm;codecs=opus' : 'audio/webm'
    const chunks: BlobPart[] = []
    const recorder = new MediaRecorder(dest.stream, { mimeType })
    recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data) }
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: mimeType })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `recording-${new Date().toISOString().slice(0, 16).replace('T', '-')}.webm`
      document.body.appendChild(a); a.click(); document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
    recorder.start(500)
    recorderRef.current = recorder
    setRecording(true); setRecSeconds(0)
    recTimerRef.current = setInterval(() => setRecSeconds(s => s + 1), 1000)
    broadcastCtrl('record_on')
    toast.success('Recording started')
  }

  const stopRecording = () => {
    if (recTimerRef.current) { clearInterval(recTimerRef.current); recTimerRef.current = null }
    recorderRef.current?.stop(); recorderRef.current = null
    audioCtxRef.current?.close().catch(() => {}); audioCtxRef.current = null
    mixDestRef.current = null; connectedStreamsRef.current.clear()
    setRecording(false); setRecSeconds(0)
    broadcastCtrl('record_off')
    toast('Recording saved — check your downloads', { icon: '💾' })
  }

  // ── Transcription ─────────────────────────────────────────────────────────
  const startTranscription = () => {
    const SR = getSR()
    if (!SR) { toast.error('Live captions require Chrome or Edge'); return }
    const rec = new SR()
    rec.continuous = true; rec.interimResults = true; rec.lang = 'en-US'
    rec.onresult = (e: SpeechRecognitionEvent) => {
      let fin = '', interim = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) fin += e.results[i][0].transcript
        else interim += e.results[i][0].transcript
      }
      if (fin) setTranscript(prev => prev + fin + ' ')
      setInterimText(interim)
    }
    rec.onerror = () => { /* silently ignore no-speech / network errors */ }
    rec.onend = () => { if (transcribingRef.current) rec.start() }
    rec.start()
    recognitionRef.current = rec
    transcribingRef.current = true
    setTranscribing(true); setShowTranscript(true)
    broadcastCtrl('captions_on')
    toast.success('Live captions on')
  }

  const stopTranscription = () => {
    transcribingRef.current = false
    recognitionRef.current?.abort(); recognitionRef.current = null
    setTranscribing(false); setInterimText('')
    broadcastCtrl('captions_off')
  }

  const downloadTranscript = () => {
    const blob = new Blob([transcript], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `transcript-${new Date().toISOString().slice(0, 16).replace('T', '-')}.txt`
    document.body.appendChild(a); a.click(); document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // ── Layout ────────────────────────────────────────────────────────────────
  const peersArr = Array.from(peers.entries())
  const total = peersArr.length + 1
  const gridCols = total <= 2 ? 'grid-cols-1' : total <= 4 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'
  const someoneElseSharing = !!(screenSharerCallId && screenSharerCallId !== callId)

  // ── Minimised pill ────────────────────────────────────────────────────────
  if (minimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-1.5">
        <button onClick={() => setMinimized(false)}
          className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 rounded-full px-4 py-2.5 shadow-2xl border border-white/10 transition-colors w-full">
          {recording
            ? <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
            : <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shrink-0" />}
          <span className="text-white text-sm font-semibold">Live Class</span>
          <span className="text-green-400 text-xs font-mono shrink-0">{fmtTime(callSeconds)}</span>
          <span className="text-white/50 text-xs flex items-center gap-1 shrink-0"><Users size={11} /> {total}</span>
          {recording && <span className="text-red-400 text-xs font-mono">{fmtTime(recSeconds)}</span>}
          <Maximize2 size={12} className="text-white/40 ml-auto shrink-0" />
        </button>
        <div className="flex items-center gap-2">
          <button onClick={toggleAudio}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-colors ${audioMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-800 hover:bg-gray-700'}`}>
            {audioMuted ? <MicOff size={15} className="text-white" /> : <Mic size={15} className="text-white" />}
          </button>
          <button onClick={toggleVideo} disabled={!hasCamera}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-colors ${!hasCamera ? 'opacity-30 cursor-not-allowed bg-gray-800' : videoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-800 hover:bg-gray-700'}`}>
            {videoOff ? <VideoOff size={15} className="text-white" /> : <Video size={15} className="text-white" />}
          </button>
          <button onClick={onClose}
            className="w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center shadow-lg transition-colors">
            <PhoneOff size={15} className="text-white" />
          </button>
        </div>
      </div>
    )
  }

  // ── Full panel ────────────────────────────────────────────────────────────
  const panelClass = expanded
    ? 'fixed inset-0 z-50 flex flex-col bg-gray-950'
    : 'fixed bottom-0 right-0 z-40 flex flex-col bg-gray-950 shadow-2xl rounded-tl-2xl overflow-hidden'
  const panelStyle = expanded ? {} : { width: 'min(460px, 100vw)', height: 'min(640px, 80vh)' }

  return (
    <div className={panelClass} style={panelStyle}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 shrink-0 bg-gray-900 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Video size={14} className="text-white/70" />
          <span className="text-white text-sm font-semibold">Live Class</span>
          <span className="text-green-400 text-xs font-mono">{fmtTime(callSeconds)}</span>
          {recording && <><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /><span className="text-red-400 text-xs font-mono">{fmtTime(recSeconds)}</span></>}
          <span className="flex items-center gap-1 text-white/40 text-xs"><Users size={11} /> {total}</span>
        </div>
        <div className="flex gap-1">
          <button onClick={() => setViewMode(v => v === 'grid' ? 'speaker' : 'grid')} title="Toggle layout"
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <LayoutGrid size={14} />
          </button>
          <button onClick={() => setMinimized(true)} title="Minimise — call stays live"
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <Minus size={15} />
          </button>
          <button onClick={() => setExpanded(v => !v)} title={expanded ? 'Exit full screen' : 'Full screen'}
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            {expanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
          <button onClick={onClose} title="Leave call"
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <X size={15} />
          </button>
        </div>
      </div>

      {error ? (
        <div className="flex-1 flex items-center justify-center p-6 text-center">
          <div>
            <p className="text-red-400 text-sm mb-4 whitespace-pre-line leading-relaxed">{error}</p>
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

          {/* Someone else is sharing their screen */}
          {someoneElseSharing && (
            <div className="bg-blue-900/40 border-b border-blue-500/30 px-3 py-1 text-blue-300 text-xs text-center shrink-0 flex items-center justify-center gap-1.5">
              <Monitor size={11} />
              <span>{screenSharerName ?? 'Someone'} is sharing their screen</span>
            </div>
          )}

          {/* Video grid */}
          {viewMode === 'grid' && (
            <div className={`flex-1 min-h-0 p-2 grid gap-2 ${gridCols} content-start overflow-auto`}>
              <VideoTile stream={localStream} muted name={`${displayName} (you)`} noVideo={videoOff} className="aspect-video" />
              {/* Local screen share */}
              {screenStream && (
                <VideoTile stream={screenStream} muted name="Your screen" className="aspect-video col-span-full border border-blue-500/40" />
              )}
              {peersArr.map(([id, info]) => (
                <>
                  <VideoTile key={id} stream={info.stream} name={info.name} state={info.state}
                    className="aspect-video" showMuteBtn={isTeacher} onMute={() => mutePeer(id)}
                    onUnmute={() => unmutePeer(id)} peerMuted={mutedPeers.has(id)} />
                  {/* Remote screen share tile */}
                  {peerScreenStreams.has(id) && (
                    <VideoTile key={`${id}-screen`} stream={peerScreenStreams.get(id)!}
                      name={`${info.name}'s screen`}
                      className="aspect-video col-span-full border border-blue-500/40" />
                  )}
                </>
              ))}
            </div>
          )}

          {/* Speaker view */}
          {viewMode === 'speaker' && (
            <div className="flex-1 min-h-0 flex flex-col gap-1.5 p-2 overflow-hidden">
              <div className="flex-1 min-h-0">
                {peersArr[0]
                  ? <VideoTile stream={peersArr[0][1].stream} name={peersArr[0][1].name} state={peersArr[0][1].state}
                      className="h-full" showMuteBtn={isTeacher} onMute={() => mutePeer(peersArr[0][0])}
                      onUnmute={() => unmutePeer(peersArr[0][0])} peerMuted={mutedPeers.has(peersArr[0][0])} />
                  : <VideoTile stream={localStream} muted name={`${displayName} (you)`} noVideo={videoOff} className="h-full" />}
              </div>
              <div className="flex gap-1.5 shrink-0 overflow-x-auto pb-1">
                {peersArr[0] && <VideoTile stream={localStream} muted name={`${displayName} (you)`} noVideo={videoOff} className="h-20 w-28 shrink-0" />}
                {peersArr.slice(1).map(([id, info]) => (
                  <VideoTile key={id} stream={info.stream} name={info.name} state={info.state}
                    className="h-20 w-28 shrink-0" showMuteBtn={isTeacher} onMute={() => mutePeer(id)}
                    onUnmute={() => unmutePeer(id)} peerMuted={mutedPeers.has(id)} />
                ))}
              </div>
            </div>
          )}

          {peersArr.length === 0 && (
            <div className="text-white/30 text-xs text-center py-1.5 shrink-0">
              {isTeacher ? 'Waiting for students to join the call…' : 'Connecting to teacher…'}
            </div>
          )}

          {/* Live transcript panel */}
          {showTranscript && (
            <div className="bg-black/50 border-t border-white/10 shrink-0 max-h-28 flex flex-col">
              <div className="flex items-center justify-between px-3 py-1 border-b border-white/10">
                <span className="text-white/50 text-[10px] uppercase tracking-wider">
                  {transcribing ? <><span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse mr-1" />Live captions</> : 'Captions (paused)'}
                </span>
                <div className="flex gap-1">
                  {transcript && (
                    <button onClick={downloadTranscript} title="Download transcript"
                      className="text-white/40 hover:text-white p-1 transition-colors">
                      <Download size={11} />
                    </button>
                  )}
                  <button onClick={() => setShowTranscript(false)} className="text-white/40 hover:text-white p-1">
                    <X size={11} />
                  </button>
                </div>
              </div>
              <div className="overflow-y-auto px-3 py-1.5 flex-1 text-xs leading-relaxed">
                <span className="text-white/80">{transcript}</span>
                {interimText && <span className="text-white/40 italic">{interimText}</span>}
                {!transcript && !interimText && <span className="text-white/30">Speak to see captions…</span>}
              </div>
            </div>
          )}

          {/* Controls — primary row */}
          <div className="shrink-0 bg-gray-900 border-t border-white/10 px-3 pt-2.5 pb-1">
            <div className="flex items-center justify-center gap-3">
              {/* Mute */}
              <CtrlBtn onClick={toggleAudio} active={audioMuted} label={audioMuted ? 'Unmute' : 'Mute'}>
                {audioMuted ? <MicOff size={18} className="text-white" /> : <Mic size={18} className="text-white" />}
              </CtrlBtn>
              {/* Video */}
              <CtrlBtn onClick={toggleVideo} active={videoOff} disabled={!hasCamera} label={videoOff ? 'Start Video' : 'Stop Video'}>
                {videoOff ? <VideoOff size={18} className="text-white" /> : <Video size={18} className="text-white" />}
              </CtrlBtn>
              {/* Record */}
              <CtrlBtn onClick={recording ? stopRecording : startRecording} active={recording}
                label={recording ? fmtTime(recSeconds) : 'Record'}>
                {recording ? <Square size={16} className="text-white" /> : <Circle size={16} className="text-white" />}
              </CtrlBtn>
              {/* Captions */}
              <CtrlBtn
                onClick={() => {
                  if (transcribing) { stopTranscription(); setShowTranscript(s => !s) }
                  else if (showTranscript) startTranscription()
                  else { startTranscription(); setShowTranscript(true) }
                }}
                active={transcribing}
                label="Captions"
              >
                <AlignLeft size={16} className="text-white" />
              </CtrlBtn>
              {/* Screen share — disabled while someone else is sharing */}
              <CtrlBtn
                onClick={screenStream ? stopScreenShare : startScreenShare}
                active={!!screenStream}
                disabled={someoneElseSharing}
                label={screenStream ? 'Stop Share' : someoneElseSharing ? 'Sharing...' : 'Share'}
              >
                {screenStream ? <MonitorOff size={16} className="text-white" /> : <Monitor size={16} className="text-white" />}
              </CtrlBtn>
              {/* Leave */}
              <CtrlBtn onClick={onClose} active label="Leave" alwaysRed>
                <PhoneOff size={18} className="text-white" />
              </CtrlBtn>
            </div>
          </div>
          <div className="h-2 shrink-0 bg-gray-900" />
        </>
      )}
    </div>
  )
}

// ── Small control button helper ────────────────────────────────────────────
function CtrlBtn({ onClick, active = false, disabled = false, alwaysRed = false, label, children }: {
  onClick: () => void; active?: boolean; disabled?: boolean; alwaysRed?: boolean; label: string; children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <button onClick={onClick} disabled={disabled}
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors
          ${disabled ? 'opacity-30 cursor-not-allowed bg-white/5'
            : alwaysRed ? 'bg-red-500 hover:bg-red-600'
            : active ? 'bg-red-500 hover:bg-red-600'
            : 'bg-white/10 hover:bg-white/20'}`}>
        {children}
      </button>
      <span className="text-white/40 text-[9px] leading-none">{label}</span>
    </div>
  )
}
