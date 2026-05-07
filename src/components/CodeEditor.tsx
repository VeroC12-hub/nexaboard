import { useState, useRef, useEffect, useCallback } from 'react'
import Editor from '@monaco-editor/react'
import { Play, Square, Trash2, ChevronDown, Lock, Code2, Users, Radio } from 'lucide-react'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'

declare global {
  interface Window {
    loadPyodide: (cfg: { indexURL: string }) => Promise<{
      runPythonAsync: (code: string) => Promise<unknown>
      runPython: (code: string) => unknown
    }>
    _pyodide: {
      runPythonAsync: (code: string) => Promise<unknown>
      runPython: (code: string) => unknown
    } | null
  }
}

const LANGS = ['python', 'javascript', 'typescript', 'sql', 'json']

const STARTERS: Record<string, string> = {
  python: `# Python runs right here — no installs needed!\nimport math\n\nnumbers = [1, 4, 9, 16, 25]\nroots = [math.sqrt(n) for n in numbers]\nfor n, r in zip(numbers, roots):\n    print(f"√{n} = {r:.2f}")\n`,
  javascript: `// JavaScript\nconst greet = name => \`Hello, \${name}!\`\nconsole.log(greet("NexaBoard"))\n\nconst fib = n => n <= 1 ? n : fib(n-1) + fib(n-2)\nconsole.log("Fibonacci 10:", fib(10))\n`,
  typescript: `// TypeScript\ninterface Student { name: string; score: number }\n\nconst students: Student[] = [\n  { name: "Alice", score: 92 },\n  { name: "Bob", score: 85 },\n]\n\nconst avg = students.reduce((s, st) => s + st.score, 0) / students.length\nconsole.log("Average:", avg)\n`,
  sql: `-- SQL Example\nSELECT\n  subject,\n  COUNT(*) as sessions,\n  AVG(duration_minutes) as avg_duration\nFROM sessions\nGROUP BY subject\nORDER BY sessions DESC;\n`,
  json: `{\n  "lesson": "Python Basics",\n  "topics": ["variables", "loops", "functions"],\n  "difficulty": "beginner",\n  "students": 12\n}`,
}

interface StudentSnapshot {
  name: string
  code: string
  lang: string
}

interface Props {
  sessionId: string
  isTeacher: boolean
  canEdit: boolean
  participantId?: string | null
  participantName?: string
}

export default function CodeEditor({ sessionId, isTeacher, canEdit, participantId, participantName }: Props) {
  const storageKey = `nexaboard_code_${sessionId}`

  const loadSaved = () => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) return JSON.parse(raw) as { lang: string; code: string }
    } catch { /* ignore */ }
    return null
  }

  const saved = loadSaved()
  const [lang, setLang] = useState(saved?.lang ?? 'python')
  const [code, setCode] = useState(saved?.code ?? STARTERS['python'])
  const [output, setOutput] = useState('')
  const [running, setRunning] = useState(false)
  const [pyStatus, setPyStatus] = useState<'idle' | 'loading' | 'ready'>('idle')
  const [requesting, setRequesting] = useState(false)
  // Teacher: snapshots of each student's latest code, keyed by senderId
  const [studentSnapshots, setStudentSnapshots] = useState<Map<string, StudentSnapshot>>(new Map())
  // Teacher: which student is currently selected ('own' = teacher's own editor)
  const [viewingId, setViewingId] = useState<string>('own')
  const viewingIdRef = useRef<string>('own')
  // Teacher's own code saved before switching to a student view
  const teacherOwnRef = useRef<{ code: string; lang: string } | null>(null)

  const outputRef = useRef<HTMLDivElement>(null)
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null)
  const lastBroadcast = useRef(0)
  const isRemoteUpdate = useRef(false)
  const myId = isTeacher ? 'teacher' : (participantId || 'anon')

  const canWrite = isTeacher || canEdit
  const locked = !canWrite
  // Teacher is read-only while viewing a student
  const viewingStudent = isTeacher && viewingId !== 'own'

  const broadcast = useCallback((newCode: string, newLang: string) => {
    const now = Date.now()
    if (now - lastBroadcast.current < 150) return
    lastBroadcast.current = now
    channelRef.current?.send({
      type: 'broadcast', event: 'code_update',
      payload: { code: newCode, lang: newLang, senderId: myId, senderName: participantName || (isTeacher ? 'Teacher' : 'Student') },
    })
  }, [myId, participantName, isTeacher])

  useEffect(() => {
    const channel = supabase
      .channel(`code:${sessionId}`)
      .on('broadcast', { event: 'code_update' }, ({ payload }) => {
        if (payload.senderId === myId) return

        if (isTeacher) {
          // Always keep the snapshot up to date
          setStudentSnapshots(prev => {
            const next = new Map(prev)
            next.set(payload.senderId, { name: payload.senderName || 'Student', code: payload.code, lang: payload.lang })
            return next
          })
          // Only update the editor if we're actively watching this student
          if (viewingIdRef.current === payload.senderId) {
            isRemoteUpdate.current = true
            setCode(payload.code)
            setLang(payload.lang)
            isRemoteUpdate.current = false
          }
        } else {
          // Student: receive teacher's broadcast
          isRemoteUpdate.current = true
          setCode(payload.code)
          setLang(payload.lang)
          localStorage.setItem(storageKey, JSON.stringify({ code: payload.code, lang: payload.lang }))
          isRemoteUpdate.current = false
        }
      })
      .on('broadcast', { event: 'code_output' }, ({ payload }) => {
        if (!isTeacher) setOutput(payload.output)
      })
      .on('broadcast', { event: 'code_sync_req' }, () => {
        if (!isTeacher) return
        channel.send({
          type: 'broadcast', event: 'code_update',
          payload: { code, lang, senderId: myId, senderName: 'Teacher' },
        })
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          channel.send({ type: 'broadcast', event: 'code_sync_req', payload: {} })
        }
      })
    channelRef.current = channel
    return () => { supabase.removeChannel(channel) }
  }, [sessionId, isTeacher, myId])

  // Copy the currently-viewed student's code into the teacher's own editor and broadcast to all
  const showToClass = () => {
    const snap = studentSnapshots.get(viewingId)
    if (!snap) return
    // Switch back to own mode with the student's code loaded
    viewingIdRef.current = 'own'
    setViewingId('own')
    setCode(snap.code)
    setLang(snap.lang)
    setOutput('')
    localStorage.setItem(storageKey, JSON.stringify({ code: snap.code, lang: snap.lang }))
    // Broadcast to all students immediately
    lastBroadcast.current = 0 // bypass throttle for this intentional action
    channelRef.current?.send({
      type: 'broadcast', event: 'code_update',
      payload: { code: snap.code, lang: snap.lang, senderId: myId, senderName: 'Teacher' },
    })
    toast.success(`${snap.name}'s code shown to the class`)
  }

  const switchView = (id: string) => {
    if (id === viewingIdRef.current) return
    viewingIdRef.current = id
    setViewingId(id)

    if (id === 'own') {
      // Restore teacher's own code
      if (teacherOwnRef.current) {
        isRemoteUpdate.current = true
        setCode(teacherOwnRef.current.code)
        setLang(teacherOwnRef.current.lang)
        isRemoteUpdate.current = false
      }
    } else {
      // Save teacher's current code before switching
      if (viewingIdRef.current !== id) teacherOwnRef.current = { code, lang }
      teacherOwnRef.current = { code, lang }
      const snap = studentSnapshots.get(id)
      if (snap) {
        isRemoteUpdate.current = true
        setCode(snap.code)
        setLang(snap.lang)
        isRemoteUpdate.current = false
      }
    }
  }

  const handleCodeChange = (v: string | undefined) => {
    if (isRemoteUpdate.current) return
    const val = v || ''
    setCode(val)
    if (canWrite && !viewingStudent) {
      localStorage.setItem(storageKey, JSON.stringify({ code: val, lang }))
      broadcast(val, lang)
    }
  }

  const loadPyodide = async () => {
    if (window._pyodide) return window._pyodide
    setPyStatus('loading')
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js'
    document.head.appendChild(script)
    await new Promise<void>(res => { script.onload = () => res() })
    window._pyodide = await window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/' })
    setPyStatus('ready')
    return window._pyodide
  }

  const runCode = async () => {
    if (lang !== 'python') {
      setOutput('// Only Python execution is supported in the browser.')
      return
    }
    setRunning(true)
    setOutput('Running...\n')
    let result = ''
    try {
      const py = await loadPyodide()
      py.runPython(`import sys, io\nsys.stdout = io.StringIO()\nsys.stderr = io.StringIO()`)
      try {
        await py.runPythonAsync(code)
        const out = py.runPython('sys.stdout.getvalue()') as string
        const err = py.runPython('sys.stderr.getvalue()') as string
        result = (out || '') + (err ? `\n[stderr]\n${err}` : '') || '(No output)'
      } catch (err) { result = `Error:\n${String(err)}` }
    } catch (err) { result = `Failed to load Python runtime:\n${String(err)}` }
    setOutput(result)
    setRunning(false)
    channelRef.current?.send({ type: 'broadcast', event: 'code_output', payload: { output: result } })
    setTimeout(() => outputRef.current?.scrollTo(0, outputRef.current.scrollHeight), 50)
  }

  const changeLang = (l: string) => {
    setLang(l)
    const newCode = STARTERS[l] || ''
    setCode(newCode)
    setOutput('')
    if (isTeacher) {
      localStorage.setItem(storageKey, JSON.stringify({ code: newCode, lang: l }))
      broadcast(newCode, l)
    }
  }

  const requestCodeAccess = async () => {
    if (requesting || !participantId) return
    setRequesting(true)
    const { data: existing } = await supabase.from('board_requests').select('id')
      .eq('session_id', sessionId).eq('participant_id', participantId)
      .eq('request_type', 'code').eq('status', 'pending').single()
    if (existing) {
      toast('Request already sent. Wait for teacher.', { icon: '⏳' })
      setRequesting(false)
      return
    }
    await supabase.from('board_requests').insert({
      session_id: sessionId,
      participant_id: participantId,
      participant_name: participantName || 'Student',
      request_type: 'code',
      status: 'pending',
    })
    toast.success('Code access request sent!')
    setRequesting(false)
  }

  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-slate-800 bg-slate-900 shrink-0">
        <div className="relative">
          <select value={lang} onChange={e => changeLang(e.target.value)} disabled={locked || viewingStudent}
            className="appearance-none bg-slate-800 border border-slate-700 rounded-lg pl-3 pr-8 py-1.5 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50">
            {LANGS.map(l => <option key={l} value={l}>{l.charAt(0).toUpperCase() + l.slice(1)}</option>)}
          </select>
          <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

        {lang === 'python' && pyStatus === 'loading' && (
          <span className="text-xs text-amber-400 flex items-center gap-1.5">
            <div className="w-3 h-3 border border-amber-400 border-t-transparent rounded-full animate-spin" /> Loading Python...
          </span>
        )}
        {lang === 'python' && pyStatus === 'ready' && <span className="text-xs text-emerald-400">Python ready</span>}

        {/* Student view-only controls */}
        {locked && (
          <div className="flex items-center gap-2 ml-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Lock size={11} /> View only
            </div>
            <button onClick={requestCodeAccess} disabled={requesting}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-600/30 rounded-lg transition-colors disabled:opacity-50">
              <Code2 size={11} /> {requesting ? 'Requested...' : 'Request Code Access'}
            </button>
          </div>
        )}

        {/* Teacher: student selector */}
        {isTeacher && studentSnapshots.size > 0 && (
          <div className="relative">
            <select
              value={viewingId}
              onChange={e => switchView(e.target.value)}
              className="appearance-none bg-slate-800 border border-blue-500/40 rounded-lg pl-7 pr-8 py-1.5 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="own">My Code</option>
              {Array.from(studentSnapshots.entries()).map(([id, snap]) => (
                <option key={id} value={id}>{snap.name}</option>
              ))}
            </select>
            <Users size={11} className="absolute left-2 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none" />
            <ChevronDown size={11} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        )}

        {/* Show to Class button — visible when teacher is viewing a student */}
        {viewingStudent && (
          <button onClick={showToClass}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-600/30 rounded-lg text-xs font-semibold transition-colors">
            <Radio size={11} /> Show to Class
          </button>
        )}

        <div className="ml-auto flex items-center gap-2">
          <button onClick={() => setOutput('')} className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors" title="Clear output">
            <Trash2 size={14} />
          </button>
          {(canWrite || viewingStudent) && (
            <button onClick={running ? undefined : runCode} disabled={running}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition-colors">
              {running ? <><Square size={12} /> Running...</> : <><Play size={12} /> Run</>}
            </button>
          )}
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          language={lang}
          value={code}
          onChange={handleCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 14,
            fontFamily: '"Cascadia Code", "Fira Code", "JetBrains Mono", monospace',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            padding: { top: 12, bottom: 12 },
            lineNumbers: 'on',
            renderLineHighlight: 'line',
            suggestOnTriggerCharacters: true,
            wordWrap: 'on',
            automaticLayout: true,
            readOnly: locked || viewingStudent,
            readOnlyMessage: { value: viewingStudent ? 'Viewing student code — switch to My Code to edit' : 'Request code access from your teacher to edit' },
          }}
        />
      </div>

      {/* Output */}
      <div className="border-t border-slate-800 shrink-0">
        <div className="flex items-center px-4 py-1.5 bg-slate-900 border-b border-slate-800">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Output</span>
        </div>
        <div ref={outputRef} className="h-32 overflow-y-auto bg-slate-950 p-4 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
          {output || <span className="text-slate-600">Click Run to execute your code...</span>}
        </div>
      </div>
    </div>
  )
}
