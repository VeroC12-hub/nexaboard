import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { Session, Participant } from '../types'
import Whiteboard from '../components/Whiteboard'
import CodeEditor from '../components/CodeEditor'
import ChatSidebar from '../components/ChatSidebar'
import toast from 'react-hot-toast'
import { Monitor, Code2, MessageSquare, Hand, Pencil, ChevronRight, ChevronLeft } from 'lucide-react'

type Tab = 'whiteboard' | 'code'

export default function StudentSession() {
  const { sessionId } = useParams<{ sessionId: string }>()
  const navigate = useNavigate()
  const [session, setSession] = useState<Session | null>(null)
  const [participant, setParticipant] = useState<Participant | null>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<Tab>('whiteboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [requesting, setRequesting] = useState(false)

  const participantId = sessionStorage.getItem('nexaboard_participant_id')
  const participantName = sessionStorage.getItem('nexaboard_participant_name') || 'Student'

  useEffect(() => {
    if (!participantId) { navigate('/'); return }
    fetchData()
  }, [sessionId, participantId])

  useEffect(() => {
    if (!participantId) return

    const channel = supabase
      .channel(`my_participant:${participantId}`)
      .on('postgres_changes', {
        event: 'UPDATE', schema: 'public', table: 'session_participants',
        filter: `id=eq.${participantId}`,
      }, payload => {
        const updated = payload.new as Participant
        setParticipant(updated)
        if (updated.has_board_access) {
          toast.success('You have board access! Start drawing.')
        }
      })
      .subscribe()

    const sessionChannel = supabase
      .channel(`session_status:${sessionId}`)
      .on('postgres_changes', {
        event: 'UPDATE', schema: 'public', table: 'sessions',
        filter: `id=eq.${sessionId}`,
      }, payload => {
        if (payload.new.status === 'ended') {
          toast('Session has ended', { icon: '📢' })
          navigate('/')
        }
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
      supabase.removeChannel(sessionChannel)
    }
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

    // Check for existing pending request
    const { data: existing } = await supabase
      .from('board_requests')
      .select('id')
      .eq('session_id', sessionId)
      .eq('participant_id', participantId)
      .eq('status', 'pending')
      .single()

    if (existing) {
      toast('Request already sent. Wait for teacher.', { icon: '⏳' })
      setRequesting(false)
      return
    }

    await supabase.from('board_requests').insert({
      session_id: sessionId,
      participant_id: participantId,
      participant_name: participantName,
      status: 'pending',
    })
    toast.success('Board request sent to teacher!')
    setRequesting(false)
  }

  const raiseHand = async () => {
    if (!participant) return
    const newState = !participant.hand_raised
    await supabase.from('session_participants').update({ hand_raised: newState }).eq('id', participantId)
    setParticipant(prev => prev ? { ...prev, hand_raised: newState } : prev)
    toast(newState ? 'Hand raised!' : 'Hand lowered', { icon: newState ? '✋' : '👇' })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const canDraw = participant?.has_board_access ?? false

  return (
    <div className="h-screen flex flex-col bg-slate-950 overflow-hidden">
      {/* Top bar */}
      <header className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-800 bg-slate-900 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">N</div>
          <span className="font-semibold text-sm tracking-tight">NexaBoard</span>
        </div>
        <div className="w-px h-4 bg-slate-700" />
        <div>
          <span className="font-medium text-sm text-slate-100">{session?.title}</span>
          <span className="ml-2 text-xs text-slate-500">{session?.subject}</span>
        </div>
        <div className="flex items-center gap-1.5 ml-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400">Live</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs text-slate-400">
            Joined as <span className="text-slate-200 font-medium">{participantName}</span>
          </span>

          {/* Tab switcher */}
          <div className="flex items-center bg-slate-800 rounded-lg p-0.5 gap-0.5">
            <button
              onClick={() => setTab('whiteboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${tab === 'whiteboard' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <Monitor size={13} /> Board
            </button>
            <button
              onClick={() => setTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${tab === 'code' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <Code2 size={13} /> Code
            </button>
          </div>

          {/* Board access status */}
          {canDraw ? (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/20 text-violet-300 rounded-lg text-xs font-medium">
              <Pencil size={11} /> Drawing
            </div>
          ) : (
            <button
              onClick={requestBoardAccess}
              disabled={requesting}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-violet-600/30 text-slate-300 hover:text-violet-300 rounded-lg text-xs font-medium transition-colors"
            >
              <Pencil size={11} /> {requesting ? 'Requested...' : 'Request Board'}
            </button>
          )}

          <button
            onClick={raiseHand}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${participant?.hand_raised ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}
          >
            <Hand size={11} /> {participant?.hand_raised ? 'Lower Hand' : 'Raise Hand'}
          </button>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex-1 flex min-h-0">
        <div className="flex-1 min-w-0">
          {tab === 'whiteboard' ? (
            <Whiteboard sessionId={sessionId!} isTeacher={false} canDraw={canDraw} />
          ) : (
            <CodeEditor />
          )}
        </div>

        {/* Chat sidebar */}
        <div className={`flex flex-col border-l border-slate-800 bg-slate-900 transition-all duration-200 shrink-0 ${sidebarOpen ? 'w-64' : 'w-10'}`}>
          {sidebarOpen ? (
            <>
              <div className="flex items-center border-b border-slate-800">
                <div className="flex-1 flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-400">
                  <MessageSquare size={13} /> Chat
                </div>
                <button onClick={() => setSidebarOpen(false)} className="p-2 text-slate-600 hover:text-slate-400 transition-colors">
                  <ChevronRight size={14} />
                </button>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <ChatSidebar
                  sessionId={sessionId!}
                  participantId={participantId}
                  senderName={participantName}
                  isTeacher={false}
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 py-3">
              <button onClick={() => setSidebarOpen(true)} className="text-slate-500 hover:text-slate-300 transition-colors">
                <ChevronLeft size={14} />
              </button>
              <button onClick={() => setSidebarOpen(true)} className="text-slate-500 hover:text-slate-300 p-1">
                <MessageSquare size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
