import { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'
import type { Participant, BoardRequest } from '../types'
import { Hand, Pencil, Code2, X, CheckCircle, UserCircle2, UserMinus, FileText } from 'lucide-react'
import toast from 'react-hot-toast'

interface Props { sessionId: string; isTeacher: boolean }

// Short two-tone beep using Web Audio API — no sound file needed
function playHandRaisedSound() {
  try {
    const ctx = new AudioContext()
    const play = (freq: number, start: number, dur: number) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain); gain.connect(ctx.destination)
      osc.frequency.value = freq
      gain.gain.setValueAtTime(0.25, ctx.currentTime + start)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + dur)
      osc.start(ctx.currentTime + start)
      osc.stop(ctx.currentTime + start + dur)
    }
    play(660, 0, 0.15)
    play(880, 0.18, 0.15)
    setTimeout(() => ctx.close(), 600)
  } catch { /* AudioContext blocked (e.g. no user gesture) — silent fallback */ }
}

export default function StudentList({ sessionId, isTeacher }: Props) {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [requests, setRequests] = useState<BoardRequest[]>([])
  const participantsRef = useRef<Participant[]>([])

  // Keep ref in sync so realtime callbacks can read latest state without stale closures
  useEffect(() => { participantsRef.current = participants }, [participants])

  useEffect(() => {
    fetchParticipants(); fetchRequests()

    const partChannel = supabase.channel(`participants:${sessionId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'session_participants', filter: `session_id=eq.${sessionId}` },
        (payload) => {
          // Detect hand-raise transitions for the teacher
          if (isTeacher && payload.eventType === 'UPDATE') {
            const updated = payload.new as Participant
            const prev = participantsRef.current.find(p => p.id === updated.id)
            if (prev && !prev.hand_raised && updated.hand_raised) {
              playHandRaisedSound()
              toast(`${updated.name} raised their hand`, {
                icon: '✋',
                duration: 8000,
                style: { background: '#fffbeb', color: '#92400e', border: '1px solid #fcd34d' },
              })
            }
          }
          fetchParticipants()
        })
      .subscribe()

    const reqChannel = supabase.channel(`requests:${sessionId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'board_requests', filter: `session_id=eq.${sessionId}` },
        () => fetchRequests())
      .subscribe()

    return () => { supabase.removeChannel(partChannel); supabase.removeChannel(reqChannel) }
  }, [sessionId, isTeacher])

  const fetchParticipants = async () => {
    const { data } = await supabase.from('session_participants').select('*')
      .eq('session_id', sessionId).eq('is_active', true).order('joined_at', { ascending: true })
    if (data) setParticipants(data)
  }

  const fetchRequests = async () => {
    const { data } = await supabase.from('board_requests').select('*')
      .eq('session_id', sessionId).eq('status', 'pending')
    if (data) setRequests(data)
  }

  const boardRequests = requests.filter(r => r.request_type === 'board' || !r.request_type)
  const codeRequests = requests.filter(r => r.request_type === 'code')
  const notesRequests = requests.filter(r => r.request_type === 'notes')
  const raisedHands = participants.filter(p => p.hand_raised)

  const lowerHand = async (participantId: string, name: string) => {
    await supabase.from('session_participants').update({ hand_raised: false }).eq('id', participantId)
    toast(`${name}'s hand lowered`, { icon: '👇' })
  }

  const grantBoardAccess = async (participantId: string, participantName: string) => {
    await supabase.from('session_participants').update({ has_board_access: false }).eq('session_id', sessionId)
    await supabase.from('session_participants').update({ has_board_access: true }).eq('id', participantId)
    await supabase.from('board_requests').update({ status: 'granted' })
      .eq('session_id', sessionId).eq('participant_id', participantId).eq('status', 'pending')
    toast.success(`Board access given to ${participantName}`)
    fetchParticipants(); fetchRequests()
  }

  const grantCodeAccess = async (participantId: string, participantName: string) => {
    await supabase.from('session_participants').update({ has_code_access: false }).eq('session_id', sessionId)
    await supabase.from('session_participants').update({ has_code_access: true }).eq('id', participantId)
    await supabase.from('board_requests').update({ status: 'granted' })
      .eq('session_id', sessionId).eq('participant_id', participantId).eq('request_type', 'code').eq('status', 'pending')
    toast.success(`Code access given to ${participantName}`)
    fetchParticipants(); fetchRequests()
  }

  const revokeBoardAccess = async (participantId: string) => {
    await supabase.from('session_participants').update({ has_board_access: false }).eq('id', participantId)
    toast.success('Board access revoked'); fetchParticipants()
  }

  const revokeCodeAccess = async (participantId: string) => {
    await supabase.from('session_participants').update({ has_code_access: false }).eq('id', participantId)
    toast.success('Code access revoked'); fetchParticipants()
  }

  const grantNotesAccess = async (participantId: string, participantName: string) => {
    await supabase.from('session_participants').update({ has_notes_access: true }).eq('id', participantId)
    await supabase.from('board_requests').update({ status: 'granted' })
      .eq('session_id', sessionId).eq('participant_id', participantId).eq('request_type', 'notes').eq('status', 'pending')
    toast.success(`Notes access given to ${participantName}`)
    fetchParticipants(); fetchRequests()
  }

  const revokeNotesAccess = async (participantId: string) => {
    await supabase.from('session_participants').update({ has_notes_access: false }).eq('id', participantId)
    toast.success('Notes access revoked'); fetchParticipants()
  }

  const denyRequest = async (requestId: string) => {
    await supabase.from('board_requests').update({ status: 'denied' }).eq('id', requestId)
    fetchRequests()
  }

  const removeStudent = async (participantId: string, name: string) => {
    if (!window.confirm(`Remove ${name} from this session?`)) return
    await supabase.from('session_participants').update({ is_active: false }).eq('id', participantId)
    toast.success(`${name} removed`)
  }

  const RequestRow = ({ req, icon, onGrant }: { req: BoardRequest; icon: React.ReactNode; onGrant: () => void }) => (
    <div className="flex items-center justify-between bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-sm text-amber-700 font-semibold">{req.participant_name}</span>
      </div>
      <div className="flex gap-1.5">
        <button onClick={onGrant} className="p-1 text-[#5ab82e] hover:text-[#489f22] transition-colors" title="Grant">
          <CheckCircle size={16} />
        </button>
        <button onClick={() => denyRequest(req.id)} className="p-1 text-red-400 hover:text-red-600 transition-colors" title="Deny">
          <X size={16} />
        </button>
      </div>
    </div>
  )

  return (
    <div className="h-full overflow-y-auto p-3 bg-white">

      {/* ── Raised hands ────────────────────────────────────────────────── */}
      {isTeacher && raisedHands.length > 0 && (
        <div className="mb-4">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Hand size={12} className="animate-bounce" /> Raised Hands ({raisedHands.length})
          </div>
          <div className="space-y-1.5">
            {raisedHands.map(p => (
              <div key={p.id} className="flex items-center justify-between bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✋</span>
                  <span className="text-sm text-amber-800 font-semibold">{p.name}</span>
                </div>
                <button onClick={() => lowerHand(p.id, p.name)}
                  className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-amber-700 bg-white border border-amber-300 rounded-lg hover:bg-amber-100 transition-colors">
                  <Hand size={10} /> Lower
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Board requests ───────────────────────────────────────────────── */}
      {isTeacher && boardRequests.length > 0 && (
        <div className="mb-4">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Hand size={12} /> Board Requests ({boardRequests.length})
          </div>
          <div className="space-y-2">
            {boardRequests.map(req => (
              <RequestRow key={req.id} req={req} icon={<Pencil size={12} className="text-amber-500" />}
                onGrant={() => grantBoardAccess(req.participant_id, req.participant_name)} />
            ))}
          </div>
        </div>
      )}

      {/* ── Code requests ────────────────────────────────────────────────── */}
      {isTeacher && codeRequests.length > 0 && (
        <div className="mb-4">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Code2 size={12} /> Code Requests ({codeRequests.length})
          </div>
          <div className="space-y-2">
            {codeRequests.map(req => (
              <RequestRow key={req.id} req={req} icon={<Code2 size={12} className="text-blue-500" />}
                onGrant={() => grantCodeAccess(req.participant_id, req.participant_name)} />
            ))}
          </div>
        </div>
      )}

      {/* ── Notes requests ───────────────────────────────────────────────── */}
      {isTeacher && notesRequests.length > 0 && (
        <div className="mb-4">
          <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <FileText size={12} /> Notes Requests ({notesRequests.length})
          </div>
          <div className="space-y-2">
            {notesRequests.map(req => (
              <RequestRow key={req.id} req={req} icon={<FileText size={12} className="text-purple-500" />}
                onGrant={() => grantNotesAccess(req.participant_id, req.participant_name)} />
            ))}
          </div>
        </div>
      )}

      {/* ── Student list ─────────────────────────────────────────────────── */}
      <div className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">
        Students ({participants.length})
      </div>
      <div className="space-y-1">
        {participants.length === 0 && (
          <div className="text-xs text-[#9ca3af] py-6 text-center">Waiting for students to join...</div>
        )}
        {participants.map(p => (
          <div key={p.id} className={`flex items-center justify-between py-2 px-2 rounded-lg transition-colors group
            ${p.hand_raised ? 'bg-amber-50 hover:bg-amber-100' : 'hover:bg-[#f3fcf0]'}`}>
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <UserCircle2 size={20} className={p.has_board_access ? 'text-[#5ab82e]' : 'text-[#9ca3af]'} />
                <div className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-white
                  ${p.hand_raised ? 'bg-amber-400 animate-pulse' : 'bg-[#5ab82e]'}`} />
              </div>
              <div>
                <div className="text-sm text-[#1b2b4b] font-semibold flex items-center gap-1">
                  {p.name}
                  {p.hand_raised && <span className="text-base leading-none">✋</span>}
                </div>
                <div className="flex items-center gap-2">
                  {p.has_board_access && (
                    <span className="text-[10px] text-[#5ab82e] flex items-center gap-1 font-medium">
                      <Pencil size={9} /> Board
                    </span>
                  )}
                  {p.has_code_access && (
                    <span className="text-[10px] text-blue-500 flex items-center gap-1 font-medium">
                      <Code2 size={9} /> Code
                    </span>
                  )}
                  {p.has_notes_access && (
                    <span className="text-[10px] text-purple-500 flex items-center gap-1 font-medium">
                      <FileText size={9} /> Notes
                    </span>
                  )}
                </div>
              </div>
            </div>

            {isTeacher && (
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Lower hand — always show if hand raised */}
                {p.hand_raised && (
                  <button onClick={() => lowerHand(p.id, p.name)}
                    className="px-2 py-1 text-[10px] font-semibold text-amber-700 border border-amber-300 bg-amber-100 rounded hover:bg-amber-200 transition-colors flex items-center gap-1"
                    style={{ opacity: 1 }}>
                    <Hand size={9} /> Lower
                  </button>
                )}
                {p.has_board_access ? (
                  <button onClick={() => revokeBoardAccess(p.id)}
                    className="px-2 py-1 text-[10px] text-red-500 border border-red-200 bg-red-50 rounded hover:bg-red-100 transition-colors">
                    -Board
                  </button>
                ) : (
                  <button onClick={() => grantBoardAccess(p.id, p.name)}
                    className="px-2 py-1 text-[10px] text-[#5ab82e] border border-[#5ab82e]/30 bg-[#5ab82e]/10 rounded hover:bg-[#5ab82e]/20 transition-colors flex items-center gap-1">
                    <Pencil size={9} /> Board
                  </button>
                )}
                {p.has_code_access ? (
                  <button onClick={() => revokeCodeAccess(p.id)}
                    className="px-2 py-1 text-[10px] text-red-500 border border-red-200 bg-red-50 rounded hover:bg-red-100 transition-colors">
                    -Code
                  </button>
                ) : (
                  <button onClick={() => grantCodeAccess(p.id, p.name)}
                    className="px-2 py-1 text-[10px] text-blue-500 border border-blue-200 bg-blue-50 rounded hover:bg-blue-100 transition-colors flex items-center gap-1">
                    <Code2 size={9} /> Code
                  </button>
                )}
                {p.has_notes_access ? (
                  <button onClick={() => revokeNotesAccess(p.id)}
                    className="px-2 py-1 text-[10px] text-red-500 border border-red-200 bg-red-50 rounded hover:bg-red-100 transition-colors">
                    -Notes
                  </button>
                ) : (
                  <button onClick={() => grantNotesAccess(p.id, p.name)}
                    className="px-2 py-1 text-[10px] text-purple-500 border border-purple-200 bg-purple-50 rounded hover:bg-purple-100 transition-colors flex items-center gap-1">
                    <FileText size={9} /> Notes
                  </button>
                )}
                <button onClick={() => removeStudent(p.id, p.name)} title="Remove from session"
                  className="px-1.5 py-1 text-[10px] text-red-400 border border-red-100 bg-red-50 rounded hover:bg-red-100 hover:text-red-600 transition-colors">
                  <UserMinus size={11} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
