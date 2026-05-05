import { Link } from 'react-router-dom'
import { Monitor, Code2, Users, Zap, BookOpen, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react'
import type { User } from '@supabase/supabase-js'

interface Props { user: User | null }

const features = [
  { icon: Monitor, title: 'Live Whiteboard', desc: 'Draw, annotate and write equations in real-time. Students see every stroke as you make it.' },
  { icon: Code2, title: 'Python Runs In Browser', desc: 'Write and execute Python code without installing anything. NumPy, Pandas — all built in.' },
  { icon: Users, title: 'Controlled Board Access', desc: 'Students request to draw. You approve with one click — full classroom control maintained.' },
  { icon: Zap, title: 'Instant Sessions', desc: 'Create a session in one click. Share the 6-letter code — students join from any browser.' },
  { icon: BookOpen, title: 'LaTeX Math', desc: 'Type equations using LaTeX syntax and they render beautifully. Perfect for ML and calculus.' },
  { icon: BarChart3, title: 'Session History', desc: 'Every session is logged. View past sessions, attendance, and saved whiteboard states.' },
]

const subjects = ['Python', 'Machine Learning', 'Data Analysis', 'Autodesk', 'Mathematics', 'Coding']

export default function Landing({ user }: Props) {
  return (
    <div className="min-h-screen bg-white text-[#1b2b4b]">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-green-100 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <img src="/nexacore-logo.jpg" alt="NexaCore" className="h-9 object-contain" />
          <div className="flex items-center gap-3">
            {user ? (
              <Link to="/dashboard" className="px-4 py-2 bg-[#5ab82e] hover:bg-[#489f22] text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/auth" className="text-[#6b7280] hover:text-[#1b2b4b] text-sm transition-colors">Sign in</Link>
                <Link to="/auth" className="px-4 py-2 bg-[#5ab82e] hover:bg-[#489f22] text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                  Start Teaching Free
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center relative overflow-hidden">
        {/* Gradient blend background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f3fcf0] to-[#dcfce7] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#5ab82e]/10 via-transparent to-transparent pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#1b2b4b]/5 via-transparent to-transparent pointer-events-none rounded-full" />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#5ab82e]/30 bg-[#5ab82e]/10 text-[#489f22] text-xs font-semibold mb-6 uppercase tracking-wide">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5ab82e] animate-pulse" />
            Built for teachers who code
          </div>
          <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6 text-[#1b2b4b]">
            Teach Python, Maths &
            <span className="bg-gradient-to-r from-[#5ab82e] to-[#22c55e] bg-clip-text text-transparent"> Everything</span>
            <br />from your browser
          </h1>
          <p className="text-xl text-[#6b7280] max-w-2xl mx-auto mb-10 leading-relaxed">
            NexaBoard gives you a live whiteboard, a Python code runner, real-time student collaboration — all in one beautiful platform. No installs. Just teach.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to={user ? '/dashboard' : '/auth'}
              className="px-8 py-4 bg-[#5ab82e] hover:bg-[#489f22] text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-[#5ab82e]/30 flex items-center gap-2 group">
              Start Teaching Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#features"
              className="px-8 py-4 bg-white hover:bg-[#f3fcf0] text-[#1b2b4b] rounded-xl font-semibold text-base transition-colors border border-green-200">
              See Features
            </a>
          </div>
        </div>

        {/* Subject tags */}
        <div className="relative mt-14 flex flex-wrap justify-center gap-3">
          {subjects.map(s => (
            <span key={s} className="px-4 py-2 rounded-full bg-white border border-green-200 text-[#1b2b4b] text-sm font-medium shadow-sm">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Demo preview */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-green-200 bg-white overflow-hidden shadow-xl shadow-green-100">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-green-100 bg-[#f3fcf0]">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <div className="w-3 h-3 rounded-full bg-[#5ab82e]/70" />
            <span className="ml-3 text-[#6b7280] text-xs font-mono">nexaboard-ten.vercel.app/session/python-101</span>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs text-[#5ab82e] flex items-center gap-1 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5ab82e] animate-pulse" /> 4 students live
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 h-80">
            <div className="col-span-3 bg-[#fafafa] flex items-center justify-center border-r border-green-100">
              <div className="text-[#6b7280] flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5ab82e]/20 to-[#22c55e]/20 flex items-center justify-center">
                  <Monitor size={32} className="text-[#5ab82e]" />
                </div>
                <span className="text-sm font-medium text-[#1b2b4b]">Excalidraw Whiteboard</span>
                <span className="text-xs text-[#6b7280]">Draw • Write • Annotate</span>
              </div>
            </div>
            <div className="bg-white p-4 flex flex-col gap-3">
              <div className="text-xs text-[#6b7280] font-semibold uppercase tracking-wider">Students</div>
              {['John A.', 'Sarah K.', 'Mike O.', 'Ama B.'].map((name, i) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#5ab82e]' : 'bg-emerald-400'}`} />
                    <span className="text-xs text-[#1b2b4b] font-medium">{name}</span>
                  </div>
                  {i === 0 && <span className="text-xs text-[#5ab82e] border border-[#5ab82e]/30 bg-[#5ab82e]/10 px-1.5 py-0.5 rounded font-medium">drawing</span>}
                  {i === 2 && <span className="text-xs text-amber-600 border border-amber-300 bg-amber-50 px-1.5 py-0.5 rounded">✋</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#1b2b4b]">Everything you need to teach</h2>
          <p className="text-[#6b7280] text-lg">Built specifically for teaching technical subjects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white border border-green-100 hover:border-[#5ab82e]/40 hover:shadow-lg hover:shadow-green-50 transition-all group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#5ab82e]/20 to-[#22c55e]/10 flex items-center justify-center mb-4 group-hover:from-[#5ab82e]/30 transition-all">
                <Icon size={20} className="text-[#5ab82e]" />
              </div>
              <h3 className="font-bold text-[#1b2b4b] mb-2">{title}</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join section for students */}
      <section className="px-6 pb-24 max-w-2xl mx-auto text-center">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#f3fcf0] to-[#dcfce7] border border-green-200">
          <h2 className="text-3xl font-bold mb-3 text-[#1b2b4b]">Joining a session?</h2>
          <p className="text-[#6b7280] mb-6">Ask your teacher for the 6-letter session code</p>
          <Link to="/join/enter" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b2b4b] hover:bg-[#243660] text-white rounded-xl font-semibold transition-colors shadow-md">
            Enter Session Code
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#1b2b4b]">Ready to teach smarter?</h2>
        <p className="text-[#6b7280] mb-8 text-lg">Free to use. No credit card. No downloads.</p>
        <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-[#6b7280] mb-8">
          {['No installs required', 'Works on any laptop', 'Students join via link', 'Python runs in browser'].map(item => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#5ab82e]" />
              {item}
            </div>
          ))}
        </div>
        <Link to={user ? '/dashboard' : '/auth'}
          className="px-10 py-4 bg-[#5ab82e] hover:bg-[#489f22] text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-[#5ab82e]/30 inline-flex items-center gap-2 group">
          Get Started Free
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      <footer className="border-t border-green-100 py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src="/nexacore-logo.jpg" alt="NexaCore" className="h-8 object-contain" />
          <span className="text-[#6b7280] text-sm">NexaBoard — Powered by NexaCore Innovations</span>
        </div>
      </footer>
    </div>
  )
}
