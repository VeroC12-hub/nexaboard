import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { Participant, BoardRequest } from '../types'
import { Hand, Pencil, X, CheckCircle, UserCircle2 } from 'lucide-react'
import toast from 'react-hot-toast'

interface Props {
  sessionId: string
  isTeacher: boolean
}

export default function StudentList({ sessionId, isTeacher }: Props) {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [requests, setRequests] = useState<BoardRequest[]>([])

  useEffect(() => {
    fetchParticipants()
    fetchRequests()

    const partChannel = supabase
      .channel(`participants:${sessionId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'session_participants', filter: `session_id=eq.${sessionId}` },
        () => fetchParticipants()
      )
      .subscribe()

    const reqChannel = supabase
      .channel(`requests:${sessionId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'board_requests', filter: `session_id=eq.${sessionId}` },
        () => fetchRequests()
      )
      .subscribe()

    return () => {
      supabase.removeChannel(partChannel)
      supabase.removeChannel(reqChannel)
    }
  }, [sessionId])

  const fetchParticipants = async () => {
    const { data } = await supabase
      .from('session_participants')
      .select('*')
      .eq('session_id', sessionId)
      .eq('is_active', true)
      .order('joined_at', { ascending: true })
    if (data) setParticipants(data)
  }

  const fetchRequests = async () => {
    const { data } = await supabase
      .from('board_requests')
      .select('*')
      .eq('session_id', sessionId)
      .eq('status', 'pending')
    if (data) setRequests(data)
  }

  const grantBoardAccess = async (participantId: string, participantName: string) => {
    // Revoke all existing access first
    await supabase
      .from('session_participants')
      .update({ has_board_access: false })
      .eq('session_id', sessionId)

    // Grant to selected student
    await supabase
      .from('session_participants')
      .update({ has_board_access: true })
      .eq('id', participantId)

    // Mark any pending request as granted
    await supabase
      .from('board_requests')
      .update({ status: 'granted' })
      .eq('session_id', sessionId)
      .eq('participant_id', participantId)
      .eq('status', 'pending')

    toast.success(`Board access given to ${participantName}`)
    fetchParticipants()
    fetchRequests()
  }

  const revokeBoardAccess = async (participantId: string) => {
    await supabase
      .from('session_participants')
      .update({ has_board_access: false })
      .eq('id', participantId)
    toast.success('Board access revoked')
    fetchParticipants()
  }

  const denyRequest = async (requestId: string) => {
    await supabase.from('board_requests').update({ status: 'denied' }).eq('id', requestId)
    fetchRequests()
  }

  const pendingRequests = requests.filter(r => r.status === 'pending')

  return (
    <div className="h-full overflow-y-auto p-3">
      {/* Board requests */}
      {isTeacher && pendingRequests.length > 0 && (
        <div className="mb-4">
          <div className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Hand size={12} /> Board Requests ({pendingRequests.length})
          </div>
          <div className="space-y-2">
            {pendingRequests.map(req => (
              <div key={req.id} className="flex items-center justify-between bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">
                <span className="text-sm text-amber-300 font-medium">{req.participant_name}</span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => grantBoardAccess(req.participant_id, req.participant_name)}
                    className="p-1 text-emerald-400 hover:text-emerald-300 transition-colors" title="Grant access"
                  >
                    <CheckCircle size={16} />
                  </button>
                  <button
                    onClick={() => denyRequest(req.id)}
                    className="p-1 text-red-400 hover:text-red-300 transition-colors" title="Deny"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Students */}
      <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
        Students ({participants.length})
      </div>
      <div className="space-y-1.5">
        {participants.length === 0 && (
          <div className="text-xs text-slate-600 py-4 text-center">Waiting for students to join...</div>
        )}
        {participants.map(p => (
          <div key={p.id} className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-slate-800 transition-colors group">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <UserCircle2 size={20} className={p.has_board_access ? 'text-violet-400' : 'text-slate-500'} />
                <div className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-slate-900 ${p.hand_raised ? 'bg-amber-400' : 'bg-emerald-400'}`} />
              </div>
              <div>
                <div className="text-sm text-slate-200 font-medium">{p.name}</div>
                {p.has_board_access && (
                  <div className="text-[10px] text-violet-400 flex items-center gap-1">
                    <Pencil size={9} /> Drawing
                  </div>
                )}
                {p.hand_raised && !p.has_board_access && (
                  <div className="text-[10px] text-amber-400 flex items-center gap-1">
                    <Hand size={9} /> Hand raised
                  </div>
                )}
              </div>
            </div>

            {isTeacher && (
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {p.has_board_access ? (
                  <button
                    onClick={() => revokeBoardAccess(p.id)}
                    className="px-2 py-1 text-[10px] text-red-400 border border-red-500/30 rounded hover:bg-red-500/10 transition-colors"
                  >
                    Revoke
                  </button>
                ) : (
                  <button
                    onClick={() => grantBoardAccess(p.id, p.name)}
                    className="px-2 py-1 text-[10px] text-violet-400 border border-violet-500/30 rounded hover:bg-violet-500/10 transition-colors flex items-center gap-1"
                  >
                    <Pencil size={9} /> Board
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
