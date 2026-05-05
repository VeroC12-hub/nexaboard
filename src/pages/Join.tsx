import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'
import { ArrowRight, Users } from 'lucide-react'

export default function Join() {
  const { code } = useParams<{ code: string }>()
  const navigate = useNavigate()
  const [joinCode, setJoinCode] = useState(code === 'enter' ? '' : (code || '').toUpperCase())
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<'code' | 'name'>(code && code !== 'enter' ? 'name' : 'code')
  const [sessionInfo, setSessionInfo] = useState<{ id: string; title: string; subject: string } | null>(null)

  useEffect(() => {
    if (joinCode.length === 6 && step === 'code') verifyCode()
  }, [joinCode])

  const verifyCode = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('sessions')
      .select('id, title, subject, status')
      .eq('join_code', joinCode.toUpperCase())
      .single()
    setLoading(false)
    if (error || !data) { toast.error('Session not found'); return }
    if (data.status === 'ended') { toast.error('This session has ended'); return }
    setSessionInfo(data)
    setStep('name')
  }

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !sessionInfo) return
    setLoading(true)
    const { data, error } = await supabase
      .from('session_participants')
      .insert({ session_id: sessionInfo.id, name: name.trim(), is_active: true })
      .select()
      .single()
    if (error) {
      toast.error('Failed to join session')
      setLoading(false)
      return
    }
    sessionStorage.setItem('nexaboard_participant_id', data.id)
    sessionStorage.setItem('nexaboard_participant_name', name.trim())
    navigate(`/student/${sessionInfo.id}`)
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">N</div>
          <span className="font-bold text-lg tracking-tight">NexaBoard</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          {step === 'code' ? (
            <>
              <div className="flex items-center gap-3 mb-2">
                <Users size={20} className="text-violet-400" />
                <h1 className="text-2xl font-bold">Join a Session</h1>
              </div>
              <p className="text-slate-400 text-sm mb-6">Enter the 6-letter code your teacher shared</p>
              <input
                type="text"
                value={joinCode}
                onChange={e => setJoinCode(e.target.value.toUpperCase().slice(0, 6))}
                placeholder="ABCDEF"
                maxLength={6}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-6 py-5 text-4xl font-mono text-center tracking-[0.3em] text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent uppercase"
                autoFocus
              />
              <button
                onClick={verifyCode}
                disabled={joinCode.length !== 6 || loading}
                className="w-full mt-4 py-3 bg-violet-600 hover:bg-violet-500 disabled:opacity-40 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {loading ? 'Checking...' : 'Continue'} <ArrowRight size={16} />
              </button>
            </>
          ) : (
            <form onSubmit={handleJoin}>
              <div className="mb-6">
                <div className="text-xs text-emerald-400 font-medium mb-1">Joining</div>
                <div className="font-semibold text-slate-100">{sessionInfo?.title}</div>
                <div className="text-xs text-slate-400">{sessionInfo?.subject}</div>
              </div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="e.g. John Mensah"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent mb-4"
                autoFocus
              />
              <button
                type="submit"
                disabled={loading || !name.trim()}
                className="w-full py-3 bg-violet-600 hover:bg-violet-500 disabled:opacity-40 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {loading ? 'Joining...' : 'Join Session'} <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
