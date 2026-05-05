import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'
import type { Session as SessionType } from '../types'
import Whiteboard from '../components/Whiteboard'
import CodeEditor from '../components/CodeEditor'
import ChatSidebar from '../components/ChatSidebar'
import StudentList from '../components/StudentList'
import toast from 'react-hot-toast'
import {
  Monitor, Code2, Users, MessageSquare,
  Copy, Square, ChevronRight, ChevronLeft, Home
} from 'lucide-react'

type Tab = 'whiteboard' | 'code'
type SideTab = 'students' | 'chat'

export default function Session({ user }: { user: User }) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [session, setSession] = useState<SessionType | null>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<Tab>('whiteboard')
  const [sideTab, setSideTab] = useState<SideTab>('students')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [ending, setEnding] = useState(false)

  const teacherName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Teacher'

  useEffect(() => {
    if (!id) return
    fetchSession()
  }, [id])

  const fetchSession = async () => {
    const { data, error } = await supabase.from('sessions').select('*').eq('id', id).single()
    if (error || !data) { navigate('/dashboard'); return }
    if (data.teacher_id !== user.id) { navigate('/dashboard'); return }
    setSession(data)
    setLoading(false)
  }

  const copyJoinLink = () => {
    const link = `${window.location.origin}/join/${session?.join_code}`
    navigator.clipboard.writeText(link)
    toast.success('Join link copied!')
  }

  const copyCode = () => {
    navigator.clipboard.writeText(session?.join_code || '')
    toast.success('Code copied!')
  }

  const endSession = async () => {
    if (!window.confirm('End this session? Students will be disconnected.')) return
    setEnding(true)
    await supabase
      .from('sessions')
      .update({ status: 'ended', ended_at: new Date().toISOString() })
      .eq('id', id)
    await supabase
      .from('session_participants')
      .update({ is_active: false })
      .eq('session_id', id)
    toast.success('Session ended')
    navigate('/dashboard')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col bg-slate-950 overflow-hidden">
      {/* Top bar */}
      <header className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-800 bg-slate-900 shrink-0">
        <button onClick={() => navigate('/dashboard')} className="text-slate-500 hover:text-slate-300 transition-colors">
          <Home size={16} />
        </button>
        <div className="w-px h-4 bg-slate-700" />
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

          <div className="w-px h-5 bg-slate-700" />

          {/* Join info */}
          <button onClick={copyCode} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-mono transition-colors">
            <Copy size={11} /> {session?.join_code}
          </button>
          <button onClick={copyJoinLink} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors">
            Share Link
          </button>

          <button
            onClick={endSession}
            disabled={ending}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-xs font-medium transition-colors"
          >
            <Square size={11} /> End Session
          </button>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex-1 flex min-h-0">
        {/* Content area */}
        <div className="flex-1 min-w-0">
          {tab === 'whiteboard' ? (
            <Whiteboard sessionId={id!} isTeacher canDraw />
          ) : (
            <CodeEditor />
          )}
        </div>

        {/* Sidebar */}
        <div className={`flex flex-col border-l border-slate-800 bg-slate-900 transition-all duration-200 shrink-0 ${sidebarOpen ? 'w-72' : 'w-10'}`}>
          {sidebarOpen ? (
            <>
              {/* Sidebar tabs */}
              <div className="flex items-center border-b border-slate-800">
                <button
                  onClick={() => setSideTab('students')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium transition-colors border-b-2 ${sideTab === 'students' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                >
                  <Users size={13} /> Students
                </button>
                <button
                  onClick={() => setSideTab('chat')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium transition-colors border-b-2 ${sideTab === 'chat' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                >
                  <MessageSquare size={13} /> Chat
                </button>
                <button onClick={() => setSidebarOpen(false)} className="p-2 text-slate-600 hover:text-slate-400 transition-colors">
                  <ChevronRight size={14} />
                </button>
              </div>

              <div className="flex-1 min-h-0 overflow-hidden">
                {sideTab === 'students' ? (
                  <StudentList sessionId={id!} isTeacher />
                ) : (
                  <ChatSidebar
                    sessionId={id!}
                    participantId={null}
                    senderName={teacherName}
                    isTeacher
                  />
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 py-3">
              <button onClick={() => setSidebarOpen(true)} className="text-slate-500 hover:text-slate-300 transition-colors">
                <ChevronLeft size={14} />
              </button>
              <button onClick={() => { setSidebarOpen(true); setSideTab('students') }} className="text-slate-500 hover:text-slate-300 p-1" title="Students">
                <Users size={16} />
              </button>
              <button onClick={() => { setSidebarOpen(true); setSideTab('chat') }} className="text-slate-500 hover:text-slate-300 p-1" title="Chat">
                <MessageSquare size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
