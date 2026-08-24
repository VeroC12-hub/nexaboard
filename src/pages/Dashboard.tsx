import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { generateJoinCode, formatDate, timeAgo } from '../lib/utils'
import toast from 'react-hot-toast'
import type { User } from '@supabase/supabase-js'
import type { Session } from '../types'
import { Plus, BookOpen, Clock, Monitor, ChevronRight, LogOut, Copy, Play, Square, RotateCcw } from 'lucide-react'

const SUBJECTS = ['Python', 'Machine Learning', 'Data Analysis', 'Autodesk', 'Mathematics', 'Coding', 'Other']

export default function Dashboard({ user }: { user: User }) {
  const navigate = useNavigate()
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [creating, setCreating] = useState(false)
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('Python')

  const teacherName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Teacher'

  useEffect(() => { fetchSessions() }, [])

  const fetchSessions = async () => {
    const { data, error } = await supabase
      .from('sessions').select('*').eq('teacher_id', user.id).order('created_at', { ascending: false })
    if (!error) setSessions(data || [])
    setLoading(false)
  }

  const createSession = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    setCreating(true)
    try {
      // Retry on duplicate join_code (unique violation); surface any other error.
      let lastError: { message?: string; code?: string } | null = null
      for (let attempt = 0; attempt < 4; attempt++) {
        const joinCode = generateJoinCode()
        const { data, error } = await supabase
          .from('sessions')
          .insert({ teacher_id: user.id, title: title.trim(), subject, join_code: joinCode, status: 'active' })
          .select().single()
        if (!error && data) {
          toast.success('Session created!')
          navigate(`/session/${data.id}`)
          return
        }
        lastError = error
        if (error?.code !== '23505') break // not a code collision — don't retry
      }
      console.error('Create session failed:', lastError)
      toast.error(lastError?.message ? `Couldn’t create session: ${lastError.message}` : 'Failed to create session')
    } finally {
      setCreating(false)
    }
  }

  const endSession = async (id: string, e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation()
    await supabase.from('sessions').update({ status: 'ended', ended_at: new Date().toISOString() }).eq('id', id)
    setSessions(prev => prev.map(s => s.id === id ? { ...s, status: 'ended' } : s))
    toast.success('Session ended')
  }

  /**
   * Reopen a past class. Everything taught in it is already saved in
   * whiteboard_state, so this restores nothing. It reopens the row to students
   * under RLS and puts the same join code back in service.
   */
  const resumeSession = async (id: string, e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation()
    const { error } = await supabase
      .from('sessions').update({ status: 'active', ended_at: null }).eq('id', id)
    if (error) { toast.error(`Couldn’t resume: ${error.message}`); return }
    toast.success('Class resumed on the same join code')
    navigate(`/session/${id}`)
  }

  const copyCode = (code: string, e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation()
    navigator.clipboard.writeText(code)
    toast.success('Join code copied!')
  }

  const signOut = async () => { await supabase.auth.signOut(); navigate('/') }

  const activeSessions = sessions.filter(s => s.status === 'active')
  const pastSessions = sessions.filter(s => s.status === 'ended')

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f3fcf0] to-[#dcfce7]">
      {/* Header */}
      <header className="border-b border-green-100 bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <img src="/nexacore-logo.jpg" alt="NexaCore" className="h-9 object-contain" />
          <div className="flex items-center gap-4">
            <span className="text-[#6b7280] text-sm">Welcome, <span className="font-semibold text-[#1b2b4b]">{teacherName}</span></span>
            <button onClick={signOut} className="flex items-center gap-1.5 text-[#6b7280] hover:text-[#1b2b4b] text-sm transition-colors">
              <LogOut size={15} /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Total Sessions', value: sessions.length, icon: BookOpen, color: 'from-[#5ab82e]/20 to-[#22c55e]/10', iconColor: 'text-[#5ab82e]' },
            { label: 'Active Now', value: activeSessions.length, icon: Monitor, color: 'from-[#1b2b4b]/10 to-[#1b2b4b]/5', iconColor: 'text-[#1b2b4b]' },
            { label: 'Past Sessions', value: pastSessions.length, icon: Clock, color: 'from-amber-100 to-amber-50', iconColor: 'text-amber-600' },
          ].map(({ label, value, icon: Icon, color, iconColor }) => (
            <div key={label} className="bg-white border border-green-100 rounded-xl p-5 flex items-center gap-4 shadow-sm">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                <Icon size={20} className={iconColor} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1b2b4b]">{value}</p>
                <p className="text-xs text-[#6b7280]">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#1b2b4b]">Sessions</h2>
          <button onClick={() => setShowCreate(!showCreate)}
            className="flex items-center gap-2 px-4 py-2 bg-[#5ab82e] hover:bg-[#489f22] text-white rounded-lg text-sm font-semibold transition-colors shadow-md shadow-[#5ab82e]/20">
            <Plus size={16} /> New Session
          </button>
        </div>

        {/* Create form */}
        {showCreate && (
          <form onSubmit={createSession} className="bg-white border border-green-200 rounded-xl p-6 mb-6 shadow-sm">
            <h3 className="font-bold text-[#1b2b4b] mb-4">Create New Session</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-[#1b2b4b] mb-1.5">Session Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Python Basics — Functions" required
                  className="w-full bg-[#f3fcf0] border border-green-200 rounded-lg px-4 py-2.5 text-sm text-[#1b2b4b] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#5ab82e]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1b2b4b] mb-1.5">Subject</label>
                <select value={subject} onChange={e => setSubject(e.target.value)}
                  className="w-full bg-[#f3fcf0] border border-green-200 rounded-lg px-4 py-2.5 text-sm text-[#1b2b4b] focus:outline-none focus:ring-2 focus:ring-[#5ab82e]">
                  {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" disabled={creating}
                className="px-5 py-2 bg-[#5ab82e] hover:bg-[#489f22] disabled:opacity-50 text-white rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm">
                <Play size={14} /> {creating ? 'Creating...' : 'Start Session'}
              </button>
              <button type="button" onClick={() => setShowCreate(false)}
                className="px-5 py-2 bg-[#f3fcf0] hover:bg-green-100 text-[#6b7280] rounded-lg text-sm transition-colors border border-green-200">
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Active sessions */}
        {activeSessions.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-3">Active Sessions</h3>
            <div className="space-y-3">
              {activeSessions.map(session => (
                <Link key={session.id} to={`/session/${session.id}`}
                  className="flex items-center justify-between bg-white border border-[#5ab82e]/30 rounded-xl p-5 hover:border-[#5ab82e] hover:shadow-md hover:shadow-green-50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#5ab82e] animate-pulse" />
                    <div>
                      <p className="font-bold text-[#1b2b4b]">{session.title}</p>
                      <p className="text-xs text-[#6b7280] mt-0.5">{session.subject} · Started {timeAgo(session.created_at)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={e => copyCode(session.join_code, e)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3fcf0] hover:bg-green-100 text-[#5ab82e] rounded-lg text-xs font-mono font-bold border border-green-200 transition-colors">
                      <Copy size={11} /> {session.join_code}
                    </button>
                    <button onClick={e => endSession(session.id, e)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg text-xs font-medium border border-red-100 transition-colors">
                      <Square size={11} /> End
                    </button>
                    <ChevronRight size={16} className="text-[#9ca3af] group-hover:text-[#5ab82e] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Past sessions */}
        {pastSessions.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-1">Past Sessions</h3>
            <p className="text-xs text-[#9ca3af] mb-3">Open one to look back over the board and notes, or resume it to teach again on the same code.</p>
            <div className="space-y-2">
              {pastSessions.map(session => (
                <Link key={session.id} to={`/session/${session.id}`}
                  className="flex items-center justify-between bg-white border border-green-100 rounded-xl p-4 hover:border-[#5ab82e]/40 hover:shadow-sm transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div>
                      <p className="font-medium text-[#1b2b4b]">{session.title}</p>
                      <p className="text-xs text-[#9ca3af] mt-0.5">{session.subject} · {formatDate(session.created_at)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={e => resumeSession(session.id, e)}
                      title="Reopen this class so students can rejoin on the same code"
                      className="flex items-center gap-1 px-3 py-1.5 bg-[#f3fcf0] hover:bg-[#5ab82e] hover:text-white text-[#5ab82e] rounded-lg text-xs font-semibold border border-green-200 hover:border-[#5ab82e] transition-colors">
                      <RotateCcw size={11} /> Resume
                    </button>
                    <ChevronRight size={16} className="text-[#9ca3af] group-hover:text-[#5ab82e] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {!loading && sessions.length === 0 && (
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5ab82e]/20 to-[#22c55e]/10 flex items-center justify-center mx-auto mb-4">
              <Monitor size={28} className="text-[#5ab82e]" />
            </div>
            <h3 className="text-[#1b2b4b] font-semibold mb-2">No sessions yet</h3>
            <p className="text-[#9ca3af] text-sm">Create your first session to start teaching</p>
          </div>
        )}
      </main>
    </div>
  )
}
