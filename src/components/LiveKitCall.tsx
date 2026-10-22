import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import '@livekit/components-styles'
import {
  LiveKitRoom, RoomAudioRenderer, GridLayout, ParticipantTile, TrackToggle, StartAudio,
  ConnectionStateToast, useTracks, useLocalParticipantPermissions, useRemoteParticipants,
  useDataChannel,
} from '@livekit/components-react'
import { Track, VideoPresets, type RoomOptions } from 'livekit-client'
import toast from 'react-hot-toast'
import { Hand, Maximize2, Minimize2, Minus, PhoneOff, Users, Video, X, Mic } from 'lucide-react'
import { supabase } from '../lib/supabase'

interface Props {
  sessionId: string
  isTeacher: boolean
  /** The student's participant row; null for the teacher. */
  participantId: string | null
  displayName: string
  onClose: () => void
}

type Ticket = { token: string; url: string; identity: string; role: 'teacher' | 'student' }

const ROOM_OPTIONS: RoomOptions = {
  // Only fetch the resolution each tile is shown at, and stop sending layers
  // nobody is watching. Both matter a lot with 100 viewers.
  adaptiveStream: true,
  dynacast: true,
  publishDefaults: {
    simulcast: true,
    videoSimulcastLayers: [VideoPresets.h180, VideoPresets.h360],
    // CAD screens are mostly still lines and small text: favour sharpness
    // over frame rate, and cap the bitrate so 100 downloads stay affordable.
    screenShareEncoding: { maxBitrate: 1_500_000, maxFramerate: 15 },
  },
}

const HAND_TOPIC = 'hand'
const enc = new TextEncoder()
const dec = new TextDecoder()

/**
 * Group video through LiveKit (an SFU). Everybody uploads at most once to the
 * media server, which forwards to the rest, so the teacher's laptop does the
 * same work for 5 students or 150.
 *
 * Teacher: camera, microphone, screen share; sees raised hands and can invite
 * a student to speak. Students: watch and listen; can raise a hand, and turn
 * on mic or camera only once invited.
 */
export default function LiveKitCall({ sessionId, isTeacher, participantId, displayName, onClose }: Props) {
  const [ticket, setTicket] = useState<Ticket | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [minimized, setMinimized] = useState(false)

  useEffect(() => {
    let alive = true
    ;(async () => {
      const headers: Record<string, string> = { 'content-type': 'application/json' }
      if (isTeacher) {
        const { data } = await supabase.auth.getSession()
        if (data.session) headers.Authorization = `Bearer ${data.session.access_token}`
      }
      let r: Response
      try {
        r = await fetch('/api/livekit-token', {
          method: 'POST',
          headers,
          body: JSON.stringify({ action: 'token', sessionId, participantId, name: displayName }),
        })
      } catch {
        if (alive) setError('Could not reach the video service. Check your connection and try again.')
        return
      }
      const j = await r.json().catch(() => ({})) as Partial<Ticket> & { error?: string }
      if (!alive) return
      if (r.status === 503 || j.error === 'not_configured') {
        setError('Large class video is not configured yet (LiveKit keys are missing on this deployment). '
          + 'Use broadcast mode for big classes, or switch the class to direct video.')
        return
      }
      if (!r.ok || !j.token || !j.url) { setError(j.error || 'Could not join the video.'); return }
      setTicket(j as Ticket)
    })()
    return () => { alive = false }
  }, [sessionId, isTeacher, participantId, displayName])

  // Let students' pages know the teacher is in the call, exactly as the
  // direct call does, so their Join button lights up.
  useEffect(() => {
    if (!isTeacher || !ticket) return
    const ch = supabase.channel(`call_available:${sessionId}`)
    ch.subscribe(async status => { if (status === 'SUBSCRIBED') await ch.track({ isTeacher: true, engine: 'sfu' }) })
    return () => { supabase.removeChannel(ch) }
  }, [isTeacher, ticket, sessionId])

  const panelClass = minimized
    ? 'fixed bottom-4 right-4 z-50'
    : expanded
      ? 'fixed inset-0 z-50 flex flex-col bg-gray-950'
      : 'fixed bottom-0 right-0 z-40 flex flex-col bg-gray-950 shadow-2xl rounded-tl-2xl overflow-hidden'
  const panelStyle = minimized || expanded ? undefined : { width: 'min(520px, 100vw)', height: 'min(680px, 85vh)' }

  if (error || !ticket) {
    return (
      <div className="fixed bottom-0 right-0 z-40 flex w-[min(420px,100vw)] flex-col rounded-tl-2xl bg-gray-950 p-5 text-center shadow-2xl">
        {error ? (
          <>
            <p className="mb-4 whitespace-pre-line text-sm leading-relaxed text-amber-300">{error}</p>
            <button onClick={onClose} className="text-xs text-white/60 underline">Close</button>
          </>
        ) : (
          <p className="text-sm text-white/70">Connecting to class video…</p>
        )}
      </div>
    )
  }

  return (
    <div className={panelClass} style={panelStyle}>
      <LiveKitRoom
        serverUrl={ticket.url}
        token={ticket.token}
        connect
        audio={isTeacher}
        video={isTeacher}
        options={ROOM_OPTIONS}
        onDisconnected={onClose}
        onError={e => toast.error(`Video: ${e.message}`)}
        onMediaDeviceFailure={() => toast.error('Camera or microphone is blocked. Allow it from the padlock in the address bar.')}
        data-lk-theme="default"
        className={minimized ? '' : 'flex min-h-0 flex-1 flex-col'}
        style={{ background: 'transparent' }}
      >
        <RoomAudioRenderer />
        {minimized ? (
          <button onClick={() => setMinimized(false)}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-gray-900 px-4 py-2.5 shadow-2xl hover:bg-gray-800">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
            <span className="text-sm font-semibold text-white">Live Class</span>
            <Maximize2 size={12} className="text-white/40" />
          </button>
        ) : (
          <>
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-gray-900 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <Video size={14} className="text-white/70" />
                <span className="text-sm font-semibold text-white">Live Class</span>
                <span className="rounded bg-[#008FA6]/30 px-1.5 py-0.5 text-[10px] font-semibold text-[#7fe3f2]">LARGE CLASS</span>
                <RoomCount />
              </div>
              <div className="flex gap-1">
                <button onClick={() => setMinimized(true)} title="Minimise" className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white"><Minus size={15} /></button>
                <button onClick={() => setExpanded(v => !v)} title={expanded ? 'Exit full screen' : 'Full screen'}
                  className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white">
                  {expanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                </button>
                <button onClick={onClose} title="Leave call" className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white"><X size={15} /></button>
              </div>
            </div>
            <Stage isTeacher={isTeacher} sessionId={sessionId} onLeave={onClose} />
            <StartAudio label="Click to hear the class" />
            <ConnectionStateToast />
          </>
        )}
      </LiveKitRoom>
    </div>
  )
}

function RoomCount() {
  const remotes = useRemoteParticipants()
  return <span className="flex items-center gap-1 text-xs text-white/40"><Users size={11} /> {remotes.length + 1}</span>
}

function Stage({ isTeacher, sessionId, onLeave }: { isTeacher: boolean; sessionId: string; onLeave: () => void }) {
  // Only tracks that are actually published: 100 empty student tiles would be
  // noise and would cost layout work on every join.
  const tracks = useTracks([Track.Source.ScreenShare, Track.Source.Camera])
  const screens = tracks.filter(t => t.source === Track.Source.ScreenShare)
  const cams = tracks.filter(t => t.source === Track.Source.Camera)
  const perms = useLocalParticipantPermissions()
  const canPublish = isTeacher || perms?.canPublish === true

  // Hands raised, tracked by the teacher from small data messages.
  const [hands, setHands] = useState<Set<string>>(new Set())
  const [myHand, setMyHand] = useState(false)
  const onHand = useCallback((msg: { from?: { identity: string }; payload: Uint8Array }) => {
    const who = msg.from?.identity
    if (!who) return
    let raised = false
    try { raised = (JSON.parse(dec.decode(msg.payload)) as { raised?: boolean }).raised === true } catch { /* ignore */ }
    setHands(prev => {
      const next = new Set(prev)
      if (raised) next.add(who); else next.delete(who)
      return next
    })
  }, [])
  const { send } = useDataChannel(HAND_TOPIC, onHand)

  const toggleHand = async () => {
    const next = !myHand
    setMyHand(next)
    try { await send(enc.encode(JSON.stringify({ raised: next })), { reliable: true, topic: HAND_TOPIC }) } catch { /* reconnecting */ }
  }

  // Tell a student when they have been invited to speak, or stood down.
  const prevCanPublish = useRef(canPublish)
  useEffect(() => {
    if (isTeacher || prevCanPublish.current === canPublish) return
    prevCanPublish.current = canPublish
    if (canPublish) toast.success('Your teacher invited you to speak. Turn on your microphone below.')
    else toast('Your microphone and camera were turned off by the teacher.')
  }, [canPublish, isTeacher])

  const [listOpen, setListOpen] = useState(false)

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="relative flex min-h-0 flex-1 flex-col gap-2 p-2">
        {screens.length > 0 ? (
          <>
            <div className="min-h-0 flex-1">
              <ParticipantTile trackRef={screens[0]} className="h-full" />
            </div>
            {cams.length > 0 && (
              <div className="h-24 shrink-0">
                <GridLayout tracks={cams.slice(0, 6)} className="h-full">
                  <ParticipantTile />
                </GridLayout>
              </div>
            )}
          </>
        ) : cams.length > 0 ? (
          <GridLayout tracks={cams} className="min-h-0 flex-1">
            <ParticipantTile />
          </GridLayout>
        ) : (
          <div className="flex flex-1 items-center justify-center p-6 text-center text-sm text-white/50">
            {isTeacher ? 'Turn on your camera or share your screen below.' : 'Waiting for the teacher’s camera or screen…'}
          </div>
        )}
        {isTeacher && listOpen && (
          <SpeakerList sessionId={sessionId} hands={hands} onClose={() => setListOpen(false)} />
        )}
      </div>

      <div className="flex shrink-0 flex-wrap items-center justify-center gap-2 border-t border-white/10 bg-gray-900 px-3 py-2.5">
        {canPublish && (
          <>
            <TrackToggle source={Track.Source.Microphone} showIcon className="lk-button" />
            <TrackToggle source={Track.Source.Camera} showIcon className="lk-button" />
            {isTeacher && <TrackToggle source={Track.Source.ScreenShare} showIcon className="lk-button"
              captureOptions={{ audio: false, resolution: { width: 1920, height: 1080, frameRate: 15 } }} />}
          </>
        )}
        {!isTeacher && (
          <button onClick={toggleHand}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold ${myHand ? 'bg-amber-400 text-gray-900' : 'bg-white/10 text-white hover:bg-white/20'}`}>
            <Hand size={13} /> {myHand ? 'Lower hand' : 'Raise hand'}
          </button>
        )}
        {!isTeacher && !canPublish && (
          <span className="flex items-center gap-1 text-[11px] text-white/40"><Mic size={11} /> Raise your hand to be invited to speak</span>
        )}
        {isTeacher && (
          <button onClick={() => setListOpen(v => !v)}
            className="relative flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20">
            <Users size={13} /> Students
            {hands.size > 0 && <span className="rounded-full bg-amber-400 px-1.5 text-[10px] font-bold text-gray-900">{hands.size} ✋</span>}
          </button>
        )}
        <button onClick={onLeave} className="flex items-center gap-1.5 rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold text-white hover:bg-red-600">
          <PhoneOff size={13} /> Leave
        </button>
      </div>
    </div>
  )
}

/** Teacher: everybody in the room, raised hands first, with invite to speak. */
function SpeakerList({ sessionId, hands, onClose }: { sessionId: string; hands: Set<string>; onClose: () => void }) {
  const remotes = useRemoteParticipants()
  const [busy, setBusy] = useState<string | null>(null)
  const [filter, setFilter] = useState('')

  const students = useMemo(() => {
    const f = filter.trim().toLowerCase()
    return remotes
      .filter(p => p.identity.startsWith('p:'))
      .filter(p => !f || (p.name || '').toLowerCase().includes(f))
      .sort((a, b) =>
        Number(hands.has(b.identity)) - Number(hands.has(a.identity))
        || Number(b.permissions?.canPublish ?? false) - Number(a.permissions?.canPublish ?? false)
        || (a.name || '').localeCompare(b.name || ''))
  }, [remotes, hands, filter])

  const permit = async (identity: string, allow: boolean) => {
    setBusy(identity)
    try {
      const { data } = await supabase.auth.getSession()
      const r = await fetch('/api/livekit-token', {
        method: 'POST',
        headers: { 'content-type': 'application/json', Authorization: `Bearer ${data.session?.access_token ?? ''}` },
        body: JSON.stringify({ action: 'permit', sessionId, identity, allow }),
      })
      if (!r.ok) {
        const j = await r.json().catch(() => ({})) as { error?: string }
        toast.error(j.error || 'Could not change that.')
      }
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="absolute inset-y-2 right-2 z-10 flex w-64 flex-col overflow-hidden rounded-xl border border-white/10 bg-gray-900/95 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="text-xs font-semibold text-white">Students ({students.length})</span>
        <button onClick={onClose} className="ml-auto text-white/50 hover:text-white"><X size={13} /></button>
      </div>
      <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Search"
        className="mx-2 my-2 rounded-md bg-white/10 px-2 py-1 text-xs text-white placeholder-white/40 outline-none" />
      <div className="min-h-0 flex-1 overflow-y-auto">
        {students.length === 0 && <p className="px-3 py-2 text-xs text-white/40">No students in the call yet.</p>}
        {students.map(p => {
          const speaking = p.permissions?.canPublish === true
          return (
            <div key={p.identity} className="flex items-center gap-2 px-3 py-1.5 text-xs text-white">
              {hands.has(p.identity) && <Hand size={12} className="shrink-0 text-amber-400" />}
              <span className="min-w-0 flex-1 truncate">{p.name || 'Student'}</span>
              <button disabled={busy === p.identity} onClick={() => permit(p.identity, !speaking)}
                className={`shrink-0 rounded px-2 py-0.5 text-[11px] font-semibold disabled:opacity-40 ${speaking ? 'bg-red-500/80 hover:bg-red-500' : 'bg-[#008FA6] hover:bg-[#007588]'}`}>
                {speaking ? 'Stop' : 'Invite to speak'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
