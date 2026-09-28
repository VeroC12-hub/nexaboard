import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import Landing from './pages/Landing'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Session from './pages/Session'
import Join from './pages/Join'
import StudentSession from './pages/StudentSession'
import SchoolApp from './pages/SchoolApp'
import LearnerApp from './pages/LearnerApp'
import Study from './pages/Study'
import NotFound from './pages/NotFound'
import LessonPreview from './pages/LessonPreview'
import type { User } from '@supabase/supabase-js'

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-slate-400 text-sm">Loading NexaBoard...</span>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: '#1e293b', color: '#f8fafc', border: '1px solid #334155' },
          success: { iconTheme: { primary: '#10b981', secondary: '#f8fafc' } },
          error: { iconTheme: { primary: '#ef4444', secondary: '#f8fafc' } },
        }}
      />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/auth" element={user ? <Navigate to="/dashboard" /> : <Auth />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/auth" />} />
        <Route path="/session/:id" element={user ? <Session user={user} /> : <Navigate to="/auth" />} />
        <Route path="/join/:code" element={<Join />} />
        <Route path="/student/:sessionId" element={<StudentSession />} />
        {/* Phase 2, the school platform. Mounts beside Phase 1, never inside it. */}
        <Route path="/school" element={<SchoolApp />} />
        {/* Stage Two: the learner curriculum navigator, on the real education model. */}
        <Route path="/learn/*" element={<LearnerApp />} />
        {/* The learner surface that works with an empty database. */}
        <Route path="/study" element={<Study />} />
        {/* A review surface for generated lessons, development only.
            Reads a finished tutor job by id and renders it whole with the real
            components. Not mounted on a deployment: it is for looking at
            content before a learner does, and a learner has the real screens. */}
        {import.meta.env.DEV && (
          <Route path="/preview" element={<LessonPreview />} />
        )}
        {/* Anything else.
 
            There was no catch-all, and the consequence was the worst failure
            mode a web page has: an address that matched no route rendered a
            silent white screen. It happened for real. A link to /study was
            opened against a deployment that did not have that route yet, and
            the page gave no indication of whether the site was broken, the
            link was wrong, or the browser had failed to load anything.
 
            Blank is unreportable. A visitor cannot tell you what went wrong
            and you cannot tell from a screenshot. So this says which address
            was asked for and offers the way back. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
