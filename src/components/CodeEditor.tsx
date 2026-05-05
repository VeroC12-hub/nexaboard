import { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { Play, Square, Trash2, ChevronDown } from 'lucide-react'

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
  python: `# Python runs right here — no installs needed!
import math

# Try some Python
numbers = [1, 4, 9, 16, 25]
roots = [math.sqrt(n) for n in numbers]
for n, r in zip(numbers, roots):
    print(f"√{n} = {r:.2f}")
`,
  javascript: `// JavaScript
const greet = name => \`Hello, \${name}!\`
console.log(greet("NexaBoard"))

const fib = n => n <= 1 ? n : fib(n-1) + fib(n-2)
console.log("Fibonacci 10:", fib(10))
`,
  typescript: `// TypeScript
interface Student { name: string; score: number }

const students: Student[] = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 85 },
]

const avg = students.reduce((s, st) => s + st.score, 0) / students.length
console.log("Average:", avg)
`,
  sql: `-- SQL Example
SELECT
  subject,
  COUNT(*) as sessions,
  AVG(duration_minutes) as avg_duration
FROM sessions
GROUP BY subject
ORDER BY sessions DESC;
`,
  json: `{
  "lesson": "Python Basics",
  "topics": ["variables", "loops", "functions"],
  "difficulty": "beginner",
  "students": 12
}`,
}

export default function CodeEditor() {
  const [lang, setLang] = useState('python')
  const [code, setCode] = useState(STARTERS['python'])
  const [output, setOutput] = useState('')
  const [running, setRunning] = useState(false)
  const [pyStatus, setPyStatus] = useState<'idle' | 'loading' | 'ready'>('idle')
  const outputRef = useRef<HTMLDivElement>(null)

  const loadPyodide = async () => {
    if (window._pyodide) return window._pyodide
    setPyStatus('loading')
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js'
    document.head.appendChild(script)
    await new Promise<void>(res => { script.onload = () => res() })
    window._pyodide = await window.loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',
    })
    setPyStatus('ready')
    return window._pyodide
  }

  const runCode = async () => {
    if (lang !== 'python') {
      setOutput('// Only Python execution is supported in the browser.\n// JavaScript runs natively in your browser DevTools.')
      return
    }
    setRunning(true)
    setOutput('Running...\n')
    try {
      const py = await loadPyodide()
      py.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`)
      try {
        await py.runPythonAsync(code)
        const out = py.runPython('sys.stdout.getvalue()') as string
        const err = py.runPython('sys.stderr.getvalue()') as string
        setOutput((out || '') + (err ? `\n[stderr]\n${err}` : '') || '(No output)')
      } catch (err: unknown) {
        setOutput(`Error:\n${String(err)}`)
      }
    } catch (err: unknown) {
      setOutput(`Failed to load Python runtime:\n${String(err)}`)
    }
    setRunning(false)
    setTimeout(() => outputRef.current?.scrollTo(0, outputRef.current.scrollHeight), 50)
  }

  const changeLang = (l: string) => {
    setLang(l)
    setCode(STARTERS[l] || '')
    setOutput('')
  }

  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-slate-800 bg-slate-900">
        <div className="relative">
          <select
            value={lang}
            onChange={e => changeLang(e.target.value)}
            className="appearance-none bg-slate-800 border border-slate-700 rounded-lg pl-3 pr-8 py-1.5 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {LANGS.map(l => <option key={l} value={l}>{l.charAt(0).toUpperCase() + l.slice(1)}</option>)}
          </select>
          <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

        {lang === 'python' && pyStatus === 'loading' && (
          <span className="text-xs text-amber-400 flex items-center gap-1.5">
            <div className="w-3 h-3 border border-amber-400 border-t-transparent rounded-full animate-spin" />
            Loading Python runtime...
          </span>
        )}
        {lang === 'python' && pyStatus === 'ready' && (
          <span className="text-xs text-emerald-400">Python ready</span>
        )}

        <div className="ml-auto flex items-center gap-2">
          <button onClick={() => setOutput('')} className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors" title="Clear output">
            <Trash2 size={14} />
          </button>
          <button
            onClick={running ? undefined : runCode}
            disabled={running}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition-colors"
          >
            {running ? <><Square size={12} /> Running...</> : <><Play size={12} /> Run</>}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          language={lang}
          value={code}
          onChange={v => setCode(v || '')}
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
          }}
        />
      </div>

      {/* Output */}
      <div className="border-t border-slate-800">
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
