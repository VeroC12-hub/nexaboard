import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'
import { ArrowRight } from 'lucide-react'

export default function Join() {
  const { code } = useParams<{ code: string }>()
  const navigate = useNavigate()
  const [joinCode, setJoinCode] = useState(code === 'enter' ? '' : (code || '').toUpperCase())
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<'code' | 'name'>(code && code !== 'enter' ? 'name' : 'code')
  const [sessionInfo, setSessionInfo] = useState<{ id: string; title: string; subject: string } | null>(null)

  useEffect(() => { if (joinCode.length === 6 && step === 'code') verifyCode() }, [joinCode])

  const verifyCode = async () => {
    setLoading(true)
    const { data, error } = await supabase.from('sessions').select('id, title, subject, status')
      .eq('join_code', joinCode.toUpperCase()).single()
    setLoading(false)
    if (error || !data) { toast.error('Session not found'); return }
    if (data.status === 'ended') { toast.error('This session has ended'); return }
    setSessionInfo(data); setStep('name')
  }

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !sessionInfo) return
    setLoading(true)
    const { data, error } = await supabase.from('session_participants')
      .insert({ session_id: sessionInfo.id, name: name.trim(), is_active: true }).select().single()
    if (error) { toast.error('Failed to join session'); setLoading(false); return }
    sessionStorage.setItem('nexaboard_participant_id', data.id)
    sessionStorage.setItem('nexaboard_participant_name', name.trim())
    navigate(`/student/${sessionInfo.id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f3fcf0] to-[#dcfce7] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <img src="/nexacore-logo.jpg" alt="NexaCore" className="h-10 object-contain" />
        </div>

        <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-xl shadow-green-50">
          {step === 'code' ? (
            <>
              <h1 className="text-2xl font-bold mb-1 text-[#1b2b4b]">Join a Session</h1>
              <p className="text-[#6b7280] text-sm mb-6">Enter the 6-letter code your teacher shared</p>
              <input
                type="text"
                value={joinCode}
                onChange={e => setJoinCode(e.target.value.toUpperCase().slice(0, 6))}
                placeholder="ABCDEF"
                maxLength={6}
                className="w-full bg-[#f3fcf0] border border-green-200 rounded-xl px-6 py-5 text-4xl font-mono text-center tracking-[0.3em] text-[#1b2b4b] placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-[#5ab82e] uppercase"
                autoFocus
              />
              <button onClick={verifyCode} disabled={joinCode.length !== 6 || loading}
                className="w-full mt-4 py-3 bg-[#5ab82e] hover:bg-[#489f22] disabled:opacity-40 text-white rounded-lg font-bold transition-colors shadow-md flex items-center justify-center gap-2">
                {loading ? 'Checking...' : 'Continue'} <ArrowRight size={16} />
              </button>
            </>
          ) : (
            <form onSubmit={handleJoin}>
              <div className="mb-5 p-3 rounded-xl bg-[#f3fcf0] border border-green-200">
                <div className="text-xs text-[#5ab82e] font-semibold mb-0.5">Joining</div>
                <div className="font-bold text-[#1b2b4b]">{sessionInfo?.title}</div>
                <div className="text-xs text-[#6b7280]">{sessionInfo?.subject}</div>
              </div>
              <label className="block text-sm font-semibold text-[#1b2b4b] mb-1.5">Your Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="e.g. John Mensah"
                className="w-full bg-[#f3fcf0] border border-green-200 rounded-lg px-4 py-3 text-sm text-[#1b2b4b] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#5ab82e] mb-4"
                autoFocus />
              <button type="submit" disabled={loading || !name.trim()}
                className="w-full py-3 bg-[#1b2b4b] hover:bg-[#243660] disabled:opacity-40 text-white rounded-lg font-bold transition-colors shadow-md flex items-center justify-center gap-2">
                {loading ? 'Joining...' : 'Join Session'} <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
