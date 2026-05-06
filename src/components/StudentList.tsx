import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { Participant, BoardRequest } from '../types'
import { Hand, Pencil, Code2, X, CheckCircle, UserCircle2 } from 'lucide-react'
import toast from 'react-hot-toast'

interface Props { sessionId: string; isTeacher: boolean }

export default function StudentList({ sessionId, isTeacher }: Props) {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [requests, setRequests] = useState<BoardRequest[]>([])

  useEffect(() => {
    fetchParticipants(); fetchRequests()
    const partChannel = supabase.channel(`participants:${sessionId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'session_participants', filter: `session_id=eq.${sessionId}` },
        () => fetchParticipants()).subscribe()
    const reqChannel = supabase.channel(`requests:${sessionId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'board_requests', filter: `session_id=eq.${sessionId}` },
        () => fetchRequests()).subscribe()
    return () => { supabase.removeChannel(partChannel); supabase.removeChannel(reqChannel) }
  }, [sessionId])

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
    toast.success('Board access revoked')
    fetchParticipants()
  }

  const revokeCodeAccess = async (participantId: string) => {
    await supabase.from('session_participants').update({ has_code_access: false }).eq('id', participantId)
    toast.success('Code access revoked')
    fetchParticipants()
  }

  const denyRequest = async (requestId: string) => {
    await supabase.from('board_requests').update({ status: 'denied' }).eq('id', requestId)
    fetchRequests()
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
      {/* Board requests */}
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

      {/* Code requests */}
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

      <div className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">
        Students ({participants.length})
      </div>
      <div className="space-y-1">
        {participants.length === 0 && (
          <div className="text-xs text-[#9ca3af] py-6 text-center">Waiting for students to join...</div>
        )}
        {participants.map(p => (
          <div key={p.id} className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-[#f3fcf0] transition-colors group">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <UserCircle2 size={20} className={p.has_board_access ? 'text-[#5ab82e]' : 'text-[#9ca3af]'} />
                <div className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-white ${p.hand_raised ? 'bg-amber-400' : 'bg-[#5ab82e]'}`} />
              </div>
              <div>
                <div className="text-sm text-[#1b2b4b] font-semibold">{p.name}</div>
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
                  {p.hand_raised && (
                    <span className="text-[10px] text-amber-500 flex items-center gap-1 font-medium">
                      <Hand size={9} /> Hand raised
                    </span>
                  )}
                </div>
              </div>
            </div>
            {isTeacher && (
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
