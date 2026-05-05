import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react'

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: name } },
        })
        if (error) throw error
        toast.success('Account created! Check your email to confirm.')
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        toast.success('Welcome back!')
      }
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f3fcf0] to-[#dcfce7] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="text-[#6b7280] hover:text-[#1b2b4b] transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <img src="/nexacore-logo.jpg" alt="NexaCore" className="h-8 object-contain" />
        </div>

        <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-xl shadow-green-50">
          <h1 className="text-2xl font-bold mb-1 text-[#1b2b4b]">
            {mode === 'login' ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="text-[#6b7280] text-sm mb-6">
            {mode === 'login' ? 'Sign in to your teacher account' : 'Start teaching for free today'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-semibold text-[#1b2b4b] mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full bg-[#f3fcf0] border border-green-200 rounded-lg px-4 py-3 text-sm text-[#1b2b4b] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#5ab82e] focus:border-transparent transition"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold text-[#1b2b4b] mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-[#f3fcf0] border border-green-200 rounded-lg pl-10 pr-4 py-3 text-sm text-[#1b2b4b] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#5ab82e] focus:border-transparent transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1b2b4b] mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-[#f3fcf0] border border-green-200 rounded-lg pl-10 pr-10 py-3 text-sm text-[#1b2b4b] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#5ab82e] focus:border-transparent transition"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280]">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#5ab82e] hover:bg-[#489f22] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-colors shadow-md shadow-[#5ab82e]/20 mt-2"
            >
              {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-[#6b7280]">
            {mode === 'login' ? (
              <>Don't have an account?{' '}
                <button onClick={() => setMode('signup')} className="text-[#5ab82e] hover:text-[#489f22] font-semibold">Sign up free</button>
              </>
            ) : (
              <>Already have an account?{' '}
                <button onClick={() => setMode('login')} className="text-[#5ab82e] hover:text-[#489f22] font-semibold">Sign in</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
