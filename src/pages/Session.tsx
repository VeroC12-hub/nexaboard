import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'
import type { Session as SessionType } from '../types'
import Whiteboard from '../components/Whiteboard'
import CodeEditor from '../components/CodeEditor'
import ChatSidebar from '../components/ChatSidebar'
import StudentList from '../components/StudentList'
import RichTextEditor from '../components/RichTextEditor'
import toast from 'react-hot-toast'
import { Monitor, Code2, FileText, Users, MessageSquare, Copy, Square, ChevronRight, ChevronLeft, Home, Video, VideoOff } from 'lucide-react'
import VideoCall from '../components/VideoCall'

type Tab = 'whiteboard' | 'code' | 'notes'
type SideTab = 'students' | 'chat'

export default function Session({ user }: { user: User }) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [session, setSession] = useState<SessionType | null>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<Tab>('whiteboard')
  const [sideTab, setSideTab] = useState<SideTab>('students')
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768)
  const [ending, setEnding] = useState(false)
  const [callOpen, setCallOpen] = useState(false)

  const teacherName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Teacher'

  useEffect(() => { if (id) fetchSession() }, [id])

  const fetchSession = async () => {
    const { data, error } = await supabase.from('sessions').select('*').eq('id', id).single()
    if (error || !data) { navigate('/dashboard'); return }
    if (data.teacher_id !== user.id) { navigate('/dashboard'); return }
    setSession(data); setLoading(false)
  }

  const copyJoinLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/join/${session?.join_code}`)
    toast.success('Join link copied!')
  }

  const copyCode = () => { navigator.clipboard.writeText(session?.join_code || ''); toast.success('Code copied!') }

  const endSession = async () => {
    if (!window.confirm('End this session? Students will be disconnected.')) return
    setEnding(true)
    await supabase.from('sessions').update({ status: 'ended', ended_at: new Date().toISOString() }).eq('id', id)
    await supabase.from('session_participants').update({ is_active: false }).eq('session_id', id)
    toast.success('Session ended')
    navigate('/dashboard')
  }

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-[#f3fcf0]">
      <div className="w-8 h-8 border-2 border-[#5ab82e] border-t-transparent rounded-full animate-spin" />
    </div>
  )

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      {/* Top bar */}
      <header className="flex flex-col sm:flex-row sm:items-center gap-2 px-3 py-2 border-b border-green-100 bg-white shrink-0 shadow-sm">
        {/* Row 1: logo + title */}
        <div className="flex items-center gap-2 min-w-0">
          <button onClick={() => navigate('/dashboard')} className="text-[#9ca3af] hover:text-[#1b2b4b] transition-colors shrink-0">
            <Home size={16} />
          </button>
          <div className="w-px h-4 bg-green-100 shrink-0" />
          <img src="/nexacore-logo.jpg" alt="NexaCore" className="h-6 object-contain shrink-0" />
          <div className="w-px h-4 bg-green-100 shrink-0" />
          <div className="min-w-0">
            <span className="font-bold text-sm text-[#1b2b4b] truncate block">{session?.title}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5ab82e] animate-pulse" />
            <span className="text-xs text-[#5ab82e] font-semibold">Live</span>
          </div>
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

          <button onClick={copyCode}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-[#f3fcf0] hover:bg-green-100 text-[#5ab82e] font-mono font-bold rounded-lg text-xs border border-green-200 transition-colors">
            <Copy size={11} /> {session?.join_code}
          </button>
          <button onClick={copyJoinLink}
            className="px-2.5 py-1.5 bg-[#f3fcf0] hover:bg-green-100 text-[#6b7280] hover:text-[#1b2b4b] rounded-lg text-xs border border-green-200 transition-colors hidden sm:block">
            Share
          </button>
          <button
            onClick={() => setCallOpen(v => !v)}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${callOpen ? 'bg-[#1b2b4b] text-white border-[#1b2b4b]' : 'bg-[#f3fcf0] hover:bg-green-100 text-[#1b2b4b] border-green-200'}`}
          >
            {callOpen ? <VideoOff size={12} /> : <Video size={12} />} {callOpen ? 'End Call' : 'Start Call'}
          </button>
          <button onClick={endSession} disabled={ending}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg text-xs font-semibold border border-red-100 transition-colors">
            <Square size={11} /> End
          </button>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex-1 flex min-h-0">
        <div className="flex-1 min-w-0 flex flex-col">
          <div className={tab === 'whiteboard' ? 'flex-1 min-h-0' : 'hidden'}><Whiteboard sessionId={id!} isTeacher canDraw /></div>
          <div className={tab === 'code' ? 'flex-1 min-h-0' : 'hidden'}><CodeEditor sessionId={id!} isTeacher canEdit /></div>
          <div className={tab === 'notes' ? 'flex-1 min-h-0' : 'hidden'}><RichTextEditor sessionId={id!} isTeacher /></div>
        </div>

        {/* Sidebar */}
        <div className={`flex flex-col border-l border-green-100 bg-white transition-all duration-200 shrink-0 ${sidebarOpen ? 'w-72' : 'w-10'}`}>
          {sidebarOpen ? (
            <>
              <div className="flex items-center border-b border-green-100">
                <button onClick={() => setSideTab('students')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold transition-colors border-b-2 ${sideTab === 'students' ? 'border-[#5ab82e] text-[#5ab82e]' : 'border-transparent text-[#9ca3af] hover:text-[#1b2b4b]'}`}>
                  <Users size={13} /> Students
                </button>
                <button onClick={() => setSideTab('chat')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold transition-colors border-b-2 ${sideTab === 'chat' ? 'border-[#5ab82e] text-[#5ab82e]' : 'border-transparent text-[#9ca3af] hover:text-[#1b2b4b]'}`}>
                  <MessageSquare size={13} /> Chat
                </button>
                <button onClick={() => setSidebarOpen(false)} className="p-2 text-[#9ca3af] hover:text-[#6b7280]">
                  <ChevronRight size={14} />
                </button>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                {sideTab === 'students'
                  ? <StudentList sessionId={id!} isTeacher />
                  : <ChatSidebar sessionId={id!} participantId={null} senderName={teacherName} isTeacher />}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 py-3">
              <button onClick={() => setSidebarOpen(true)} className="text-[#9ca3af] hover:text-[#1b2b4b]"><ChevronLeft size={14} /></button>
              <button onClick={() => { setSidebarOpen(true); setSideTab('students') }} className="text-[#9ca3af] hover:text-[#5ab82e] p-1"><Users size={16} /></button>
              <button onClick={() => { setSidebarOpen(true); setSideTab('chat') }} className="text-[#9ca3af] hover:text-[#5ab82e] p-1"><MessageSquare size={16} /></button>
            </div>
          )}
        </div>
      </div>

      {callOpen && session && (
        <VideoCall
          roomName={session.join_code}
          displayName={teacherName}
          onClose={() => setCallOpen(false)}
        />
      )}
    </div>
  )
}
