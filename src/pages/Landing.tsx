import { Link } from 'react-router-dom'
import { Monitor, Code2, Users, Zap, BookOpen, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react'
import type { User } from '@supabase/supabase-js'

interface Props { user: User | null }

const features = [
  { icon: Monitor, title: 'Live Whiteboard', desc: 'Draw, annotate and write equations in real-time. Students see every stroke as you make it.' },
  { icon: Code2, title: 'Python Runs In Browser', desc: 'Write and execute Python code without installing anything. NumPy, Pandas, Matplotlib — all built in.' },
  { icon: Users, title: 'Controlled Board Access', desc: 'Students can request to draw on the board. You approve, they draw, then control returns to you.' },
  { icon: Zap, title: 'Instant Sessions', desc: 'Create a session in one click. Share the 6-letter code — students join from any browser.' },
  { icon: BookOpen, title: 'LaTeX Math', desc: 'Type equations using LaTeX syntax and they render beautifully in the browser. Perfect for ML.' },
  { icon: BarChart3, title: 'Session History', desc: 'Every session is logged. View past sessions, attendance, and saved whiteboard states.' },
]

const subjects = ['Python', 'Machine Learning', 'Data Analysis', 'Autodesk', 'Mathematics', 'Coding']

export default function Landing({ user }: Props) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">N</div>
            <span className="font-bold text-lg tracking-tight">NexaBoard</span>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <Link to="/dashboard" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/auth" className="text-slate-400 hover:text-white text-sm transition-colors">Sign in</Link>
                <Link to="/auth" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
                  Start Teaching Free
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-violet-600/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Built for teachers who code
          </div>
          <h1 className="text-6xl font-bold tracking-tight leading-tight mb-6">
            Teach Python, Maths &
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"> Everything</span>
            <br />from your browser
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            NexaBoard gives you a live whiteboard, a Python code runner, real-time student collaboration — all in one beautiful platform. No installs. Just teach.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to={user ? '/dashboard' : '/auth'} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-base transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 group">
              Start Teaching Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#features" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold text-base transition-colors border border-slate-700">
              See Features
            </a>
          </div>
        </div>

        {/* Subject tags */}
        <div className="relative mt-16 flex flex-wrap justify-center gap-3">
          {subjects.map(s => (
            <span key={s} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Demo preview */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-slate-500 text-xs font-mono">nexaboard.vercel.app/session/python-101</span>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 4 students live
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 h-80">
            <div className="col-span-3 bg-white flex items-center justify-center border-r border-slate-700">
              <div className="text-slate-400 flex flex-col items-center gap-3">
                <Monitor size={48} className="text-slate-300" />
                <span className="text-sm">Excalidraw Whiteboard</span>
                <span className="text-xs text-slate-500">Draw • Write • Annotate</span>
              </div>
            </div>
            <div className="bg-slate-900 p-4 flex flex-col gap-3">
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Students</div>
              {['John A.', 'Sarah K.', 'Mike O.', 'Ama B.'].map((name, i) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-violet-400' : 'bg-emerald-400'}`} />
                    <span className="text-xs text-slate-300">{name}</span>
                  </div>
                  {i === 0 && <span className="text-xs text-violet-400 border border-violet-500/30 px-1.5 py-0.5 rounded">drawing</span>}
                  {i === 2 && <span className="text-xs text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded">✋</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything you need to teach</h2>
          <p className="text-slate-400 text-lg">Built specifically for teaching technical subjects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                <Icon size={20} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-slate-100 mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join section for students */}
      <section className="px-6 pb-24 max-w-2xl mx-auto text-center">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
          <h2 className="text-3xl font-bold mb-3">Joining a session?</h2>
          <p className="text-slate-400 mb-6">Ask your teacher for the 6-letter session code</p>
          <Link to="/join/enter" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-medium transition-colors">
            Enter Session Code
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to teach smarter?</h2>
        <p className="text-slate-400 mb-8">Free to use. No credit card. No downloads.</p>
        <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-slate-400 mb-8">
          {['No installs required', 'Works on any laptop', 'Students join via link', 'Python runs in browser'].map(item => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400" />
              {item}
            </div>
          ))}
        </div>
        <Link to={user ? '/dashboard' : '/auth'} className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-base transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group">
          Get Started Free
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-sm">
        NexaBoard — Built for teachers, by NexaCore
      </footer>
    </div>
  )
}
