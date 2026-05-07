import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { Session, Participant } from '../types'
import Whiteboard from '../components/Whiteboard'
import CodeEditor from '../components/CodeEditor'
import ChatSidebar from '../components/ChatSidebar'
import RichTextEditor from '../components/RichTextEditor'
import toast from 'react-hot-toast'
import { Monitor, Code2, FileText, MessageSquare, Hand, Pencil, ChevronRight, ChevronLeft, Video, VideoOff, LogOut } from 'lucide-react'
import VideoCallNative from '../components/VideoCallNative'

type Tab = 'whiteboard' | 'code' | 'notes'

export default function StudentSession() {
  const { sessionId } = useParams<{ sessionId: string }>()
  const navigate = useNavigate()
  const [session, setSession] = useState<Session | null>(null)
  const [participant, setParticipant] = useState<Participant | null>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<Tab>('whiteboard')
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768)
  const [requesting, setRequesting] = useState(false)
  const [callOpen, setCallOpen] = useState(() => sessionStorage.getItem(`nexaboard_call_${sessionId}`) === 'true')
  const [teacherInCall, setTeacherInCall] = useState(false)

  // Prefer sessionStorage (current tab), fall back to localStorage (new tab from share link)
  const participantId = (() => {
    const fromSession = sessionStorage.getItem('nexaboard_participant_id')
    if (fromSession) return fromSession
    try {
      const raw = localStorage.getItem(`nexaboard_participant_${sessionId}`)
      if (!raw) return null
      const { id, name: savedName } = JSON.parse(raw) as { id: string; name: string }
      sessionStorage.setItem('nexaboard_participant_id', id)
      if (savedName) sessionStorage.setItem('nexaboard_participant_name', savedName)
      return id
    } catch { return null }
  })()
  const participantName = sessionStorage.getItem('nexaboard_participant_name') || 'Student'

  useEffect(() => { if (!participantId) { navigate('/'); return } fetchData() }, [sessionId, participantId])

  // Watch whether the teacher has an active call
  useEffect(() => {
    if (!sessionId) return
    const ch = supabase.channel(`call_available:${sessionId}`)
    const check = () => {
      const state = ch.presenceState()
      const hasTeacher = Object.values(state).some(presences =>
        (presences as Array<{ isTeacher?: boolean }>).some(p => p.isTeacher)
      )
      setTeacherInCall(hasTeacher)
    }
    ch.on('presence', { event: 'join' }, check)
      .on('presence', { event: 'leave' }, check)
      .subscribe(status => { if (status === 'SUBSCRIBED') check() })
    return () => { supabase.removeChannel(ch) }
  }, [sessionId])

  useEffect(() => {
    if (!participantId) return
    const channel = supabase.channel(`my_participant:${participantId}`)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'session_participants', filter: `id=eq.${participantId}` },
        payload => {
          const updated = payload.new as Participant
          if (!updated.is_active) {
            toast('You have been removed from this session.', { icon: '🚫' })
            navigate('/')
            return
          }
          const prev = participant
          setParticipant(updated)
          if (updated.has_board_access && !prev?.has_board_access) toast.success('You have board access! Start drawing.')
          if (updated.has_code_access && !prev?.has_code_access) toast.success('You have code access! Start coding.')
        })
      .subscribe()
    const sessionChannel = supabase.channel(`session_status:${sessionId}`)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'sessions', filter: `id=eq.${sessionId}` },
        payload => { if (payload.new.status === 'ended') { toast('Session has ended', { icon: '📢' }); navigate('/') } })
      .subscribe()
    return () => { supabase.removeChannel(channel); supabase.removeChannel(sessionChannel) }
  }, [participantId, sessionId])

  const fetchData = async () => {
    const [sessionRes, partRes] = await Promise.all([
      supabase.from('sessions').select('*').eq('id', sessionId).single(),
      supabase.from('session_participants').select('*').eq('id', participantId).single(),
    ])
    if (sessionRes.error || !sessionRes.data) { navigate('/'); return }
    if (sessionRes.data.status === 'ended') { toast('Session has ended'); navigate('/'); return }
    setSession(sessionRes.data)
    if (partRes.data) setParticipant(partRes.data)
    setLoading(false)
  }

  const requestBoardAccess = async () => {
    if (requesting || !participant) return
    setRequesting(true)
    const { data: existing } = await supabase.from('board_requests').select('id')
      .eq('session_id', sessionId).eq('participant_id', participantId).eq('status', 'pending').single()
    if (existing) { toast('Request already sent. Wait for teacher.', { icon: '⏳' }); setRequesting(false); return }
    await supabase.from('board_requests').insert({
      session_id: sessionId, participant_id: participantId, participant_name: participantName, status: 'pending',
    })
    toast.success('Board request sent to teacher!')
    setRequesting(false)
  }

  const leaveSession = async () => {
    if (!window.confirm('Leave this session?')) return
    if (participantId) {
      await supabase.from('session_participants').update({ is_active: false }).eq('id', participantId)
    }
    sessionStorage.removeItem('nexaboard_participant_id')
    sessionStorage.removeItem('nexaboard_participant_name')
    sessionStorage.removeItem(`nexaboard_call_${sessionId}`)
    navigate('/')
  }

  const raiseHand = async () => {
    if (!participant) return
    const newState = !participant.hand_raised
    await supabase.from('session_participants').update({ hand_raised: newState }).eq('id', participantId)
    setParticipant(prev => prev ? { ...prev, hand_raised: newState } : prev)
    toast(newState ? 'Hand raised!' : 'Hand lowered', { icon: newState ? '✋' : '👇' })
  }

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-[#f3fcf0]">
      <div className="w-8 h-8 border-2 border-[#5ab82e] border-t-transparent rounded-full animate-spin" />
    </div>
  )

  const canDraw = participant?.has_board_access ?? false

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      {/* Top bar */}
      <header className="flex flex-col sm:flex-row sm:items-center gap-2 px-3 py-2 border-b border-green-100 bg-white shrink-0 shadow-sm">
        {/* Row 1: logo + title + live */}
        <div className="flex items-center gap-2 min-w-0">
          <img src="/nexacore-logo.jpg" alt="NexaCore" className="h-6 object-contain shrink-0" />
          <div className="w-px h-4 bg-green-100 shrink-0" />
          <div className="min-w-0">
            <span className="font-bold text-sm text-[#1b2b4b] truncate block">{session?.title}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5ab82e] animate-pulse" />
            <span className="text-xs text-[#5ab82e] font-semibold">Live</span>
          </div>
          <span className="text-xs text-[#6b7280] ml-1 hidden sm:block">
            as <span className="text-[#1b2b4b] font-semibold">{participantName}</span>
          </span>
        </div>

        {/* Row 2 (mobile) / rest of row (desktop): tabs + actions */}
        <div className="flex items-center gap-2 sm:ml-auto flex-wrap">
          <div className="flex items-center bg-[#f3fcf0] border border-green-200 rounded-lg p-0.5 gap-0.5">
            <button onClick={() => setTab('whiteboard')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors ${tab === 'whiteboard' ? 'bg-white text-[#1b2b4b] shadow-sm' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}>
              <Monitor size={13} /> Board
            </button>
            <button onClick={() => setTab('code')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors ${tab === 'code' ? 'bg-white text-[#1b2b4b] shadow-sm' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}>
              <Code2 size={13} /> Code
            </button>
            <button onClick={() => setTab('notes')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors ${tab === 'notes' ? 'bg-white text-[#1b2b4b] shadow-sm' : 'text-[#6b7280] hover:text-[#1b2b4b]'}`}>
              <FileText size={13} /> Notes
            </button>
          </div>

          {canDraw ? (
            <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#5ab82e]/10 text-[#5ab82e] rounded-lg text-xs font-semibold border border-[#5ab82e]/30">
              <Pencil size={11} /> Drawing
            </div>
          ) : (
            <button onClick={requestBoardAccess} disabled={requesting}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-[#f3fcf0] hover:bg-green-100 text-[#6b7280] hover:text-[#5ab82e] rounded-lg text-xs font-semibold border border-green-200 transition-colors">
              <Pencil size={11} /> {requesting ? 'Sent...' : 'Request Board'}
            </button>
          )}

          <button
            disabled={!teacherInCall && !callOpen}
            onClick={() => {
              const next = !callOpen
              setCallOpen(next)
              if (next) sessionStorage.setItem(`nexaboard_call_${sessionId}`, 'true')
              else sessionStorage.removeItem(`nexaboard_call_${sessionId}`)
            }}
            title={!teacherInCall && !callOpen ? 'Teacher has not started a call yet' : ''}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors
              ${callOpen
                ? 'bg-[#1b2b4b] text-white border-[#1b2b4b]'
                : teacherInCall
                  ? 'bg-[#f3fcf0] text-[#1b2b4b] border-green-200 hover:bg-green-100'
                  : 'bg-[#f3fcf0] text-[#9ca3af] border-green-100 cursor-not-allowed opacity-60'}`}
          >
            {callOpen ? <VideoOff size={12} /> : <Video size={12} />}
            {callOpen ? 'Leave Call' : teacherInCall ? 'Join Call' : 'No Call'}
          </button>
          <button onClick={raiseHand}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${participant?.hand_raised ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-[#f3fcf0] text-[#6b7280] border-green-200 hover:text-[#1b2b4b]'}`}>
            <Hand size={11} /> {participant?.hand_raised ? 'Lower' : 'Raise Hand'}
          </button>
          <button onClick={leaveSession}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg text-xs font-semibold border border-red-100 transition-colors">
            <LogOut size={11} /> Leave
          </button>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex-1 flex min-h-0">
        <div className="flex-1 min-w-0 flex flex-col">
          <div className={tab === 'whiteboard' ? 'flex-1 min-h-0' : 'hidden'}><Whiteboard sessionId={sessionId!} isTeacher={false} canDraw={canDraw} /></div>
          <div className={tab === 'code' ? 'flex-1 min-h-0' : 'hidden'}><CodeEditor sessionId={sessionId!} isTeacher={false} canEdit={participant?.has_code_access ?? false} participantId={participantId} participantName={participantName} /></div>
          <div className={tab === 'notes' ? 'flex-1 min-h-0' : 'hidden'}><RichTextEditor sessionId={sessionId!} isTeacher={false} /></div>
        </div>

        {/* Video call panel */}
        {callOpen && participantId && (
          <VideoCallNative
            sessionId={sessionId!}
            isTeacher={false}
            userId={participantId}
            displayName={participantName}
            onClose={() => { setCallOpen(false); sessionStorage.removeItem(`nexaboard_call_${sessionId}`) }}
          />
        )}

        {/* Chat sidebar */}
        <div className={`flex flex-col border-l border-green-100 bg-white transition-all duration-200 shrink-0 ${sidebarOpen ? 'w-64' : 'w-10'}`}>
          {sidebarOpen ? (
            <>
              <div className="flex items-center border-b border-green-100">
                <div className="flex-1 flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#6b7280]">
                  <MessageSquare size={13} /> Chat
                </div>
                <button onClick={() => setSidebarOpen(false)} className="p-2 text-[#9ca3af] hover:text-[#6b7280]">
                  <ChevronRight size={14} />
                </button>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <ChatSidebar sessionId={sessionId!} participantId={participantId} senderName={participantName} isTeacher={false} />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 py-3">
              <button onClick={() => setSidebarOpen(true)} className="text-[#9ca3af] hover:text-[#1b2b4b]"><ChevronLeft size={14} /></button>
              <button onClick={() => setSidebarOpen(true)} className="text-[#9ca3af] hover:text-[#5ab82e] p-1"><MessageSquare size={16} /></button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
