import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { generateJoinCode, formatDate, timeAgo } from '../lib/utils'
import toast from 'react-hot-toast'
import type { User } from '@supabase/supabase-js'
import type { Session } from '../types'
import {
  Plus, BookOpen, Clock, Users, ChevronRight,
  LogOut, Monitor, Copy, Play, Square
} from 'lucide-react'

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

  useEffect(() => {
    fetchSessions()
  }, [])

  const fetchSessions = async () => {
    const { data, error } = await supabase
      .from('sessions')
      .select('*')
      .eq('teacher_id', user.id)
      .order('created_at', { ascending: false })
    if (!error) setSessions(data || [])
    setLoading(false)
  }

  const createSession = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    setCreating(true)
    const joinCode = generateJoinCode()
    const { data, error } = await supabase
      .from('sessions')
      .insert({ teacher_id: user.id, title: title.trim(), subject, join_code: joinCode, status: 'active' })
      .select()
      .single()
    if (error) {
      toast.error('Failed to create session')
    } else {
      toast.success('Session created!')
      navigate(`/session/${data.id}`)
    }
    setCreating(false)
  }

  const endSession = async (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    await supabase.from('sessions').update({ status: 'ended', ended_at: new Date().toISOString() }).eq('id', id)
    setSessions(prev => prev.map(s => s.id === id ? { ...s, status: 'ended' } : s))
    toast.success('Session ended')
  }

  const copyCode = (code: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(code)
    toast.success('Join code copied!')
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  const activeSessions = sessions.filter(s => s.status === 'active')
  const pastSessions = sessions.filter(s => s.status === 'ended')

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">N</div>
            <span className="font-bold text-lg tracking-tight">NexaBoard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">Welcome, {teacherName}</span>
            <button onClick={signOut} className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors">
              <LogOut size={15} /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Total Sessions', value: sessions.length, icon: BookOpen },
            { label: 'Active Now', value: activeSessions.length, icon: Monitor },
            { label: 'Past Sessions', value: pastSessions.length, icon: Clock },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
                <Icon size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-100">{value}</p>
                <p className="text-xs text-slate-400">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Create session */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Sessions</h2>
          <button
            onClick={() => setShowCreate(!showCreate)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Plus size={16} /> New Session
          </button>
        </div>

        {showCreate && (
          <form onSubmit={createSession} className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-200 mb-4">Create New Session</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Session Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="e.g. Python Basics — Functions"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Subject</label>
                <select
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" disabled={creating} className="px-5 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                <Play size={14} /> {creating ? 'Creating...' : 'Start Session'}
              </button>
              <button type="button" onClick={() => setShowCreate(false)} className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm transition-colors">
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Active sessions */}
        {activeSessions.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">Active Sessions</h3>
            <div className="space-y-3">
              {activeSessions.map(session => (
                <Link key={session.id} to={`/session/${session.id}`}
                  className="flex items-center justify-between bg-slate-900 border border-emerald-500/30 rounded-xl p-5 hover:border-emerald-500/60 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <p className="font-semibold text-slate-100">{session.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{session.subject} · Started {timeAgo(session.created_at)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={e => copyCode(session.join_code, e)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-mono transition-colors">
                      <Copy size={12} /> {session.join_code}
                    </button>
                    <button onClick={e => endSession(session.id, e)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-xs transition-colors">
                      <Square size={12} /> End
                    </button>
                    <ChevronRight size={16} className="text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Past sessions */}
        {pastSessions.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">Past Sessions</h3>
            <div className="space-y-2">
              {pastSessions.map(session => (
                <div key={session.id} className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                    <div>
                      <p className="font-medium text-slate-300">{session.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{session.subject} · {formatDate(session.created_at)}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 px-2 py-1 bg-slate-800 rounded-lg">
                    <Users size={12} /> Ended
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && sessions.length === 0 && (
          <div className="text-center py-20">
            <Monitor size={48} className="text-slate-700 mx-auto mb-4" />
            <h3 className="text-slate-400 font-medium mb-2">No sessions yet</h3>
            <p className="text-slate-600 text-sm">Create your first session to start teaching</p>
          </div>
        )}
      </main>
    </div>
  )
}
