import { useState, useRef, useEffect, useCallback } from 'react'
import Editor from '@monaco-editor/react'
import { Play, Square, Trash2, ChevronDown, Lock, Code2 } from 'lucide-react'
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
  const [activeEditor, setActiveEditor] = useState<string | null>(null)
  const outputRef = useRef<HTMLDivElement>(null)
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null)
  const lastBroadcast = useRef(0)
  const isRemoteUpdate = useRef(false)
  // Unique sender ID — used to filter own echo (Supabase sends broadcasts to the sender too)
  const myId = isTeacher ? 'teacher' : (participantId || 'anon')

  const canWrite = isTeacher || canEdit
  const locked = !canWrite

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
        // Ignore own echo
        if (payload.senderId === myId) return
        isRemoteUpdate.current = true
        setCode(payload.code)
        setLang(payload.lang)
        localStorage.setItem(storageKey, JSON.stringify({ code: payload.code, lang: payload.lang }))
        isRemoteUpdate.current = false
        // Teacher: show whose code they're viewing
        if (isTeacher && payload.senderName) setActiveEditor(payload.senderName)
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

  const handleCodeChange = (v: string | undefined) => {
    if (isRemoteUpdate.current) return
    const val = v || ''
    setCode(val)
    if (canWrite) {
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
    // broadcast output to students
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
          <select value={lang} onChange={e => changeLang(e.target.value)} disabled={locked}
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

        {isTeacher && activeEditor && (
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded-lg text-xs text-blue-400 font-medium">
            <Code2 size={10} /> Viewing: {activeEditor}
          </div>
        )}

        <div className="ml-auto flex items-center gap-2">
          <button onClick={() => setOutput('')} className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors" title="Clear output">
            <Trash2 size={14} />
          </button>
          {canWrite && (
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
            readOnly: locked,
            readOnlyMessage: { value: 'Request code access from your teacher to edit' },
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
