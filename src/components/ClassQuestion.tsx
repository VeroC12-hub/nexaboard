import { useState, useEffect, useRef, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { saveLessonSlice, loadLesson } from '../lib/board'
import { renderMath } from '../lib/math'
import { HelpCircle, X, Send, BarChart2, Check, Plus, Trash2, Eye, EyeOff } from 'lucide-react'
import toast from 'react-hot-toast'

// Ask the class a question and see who answered what. Questions and answers ride
// the realtime channel and are saved with the lesson, so no new tables are needed.

export interface Answer {
  participantId: string
  name: string
  value: string
}

export interface Question {
  id: string
  prompt: string
  /** Empty for a short-answer question. */
  options: string[]
  /** Index into options, or null when there is no single right answer. */
  correct: number | null
  open: boolean
  answers: Answer[]
}

interface Props {
  sessionId: string
  isTeacher: boolean
  participantId: string | null
  participantName: string
  onClose: () => void
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

/** Renders $…$ inside a prompt so questions can carry maths. */
function PromptText({ text }: { text: string }) {
  const parts = text.split(/(\$[^$\n]+\$)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          const { html, error } = renderMath(part.slice(1, -1), false)
          if (!error) return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

export default function ClassQuestion({
  sessionId, isTeacher, participantId, participantName, onClose,
}: Props) {
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null)
  const [question, setQuestion] = useState<Question | null>(null)
  const [history, setHistory] = useState<Question[]>([])
  const [myAnswer, setMyAnswer] = useState<string | null>(null)
  const [shortAnswer, setShortAnswer] = useState('')
  const [showNames, setShowNames] = useState(true)

  // Teacher's draft
  const [prompt, setPrompt] = useState('')
  const [options, setOptions] = useState<string[]>(['', ''])
  const [correct, setCorrect] = useState<number | null>(null)

  const questionRef = useRef<Question | null>(null)
  useEffect(() => { questionRef.current = question }, [question])

  const persist = useCallback((current: Question | null, past: Question[]) => {
    if (!isTeacher) return
    const all = current ? [...past, current] : past
    saveLessonSlice(sessionId, { questions: all }).catch(err => {
      console.error('Could not save the question:', err)
    })
  }, [isTeacher, sessionId])

  useEffect(() => {
    loadLesson(sessionId).then(lesson => {
      const saved = (lesson?.questions as Question[] | undefined) ?? []
      if (!saved.length) return
      const live = saved[saved.length - 1]
      if (live?.open) { setQuestion(live); setHistory(saved.slice(0, -1)) }
      else setHistory(saved)
    }).catch(() => {})
  }, [sessionId])

  useEffect(() => {
    const channel = supabase
      .channel(`questions:${sessionId}`)
      .on('broadcast', { event: 'q_ask' }, ({ payload }) => {
        setQuestion(payload.question as Question)
        setMyAnswer(null)
        setShortAnswer('')
      })
      .on('broadcast', { event: 'q_answer' }, ({ payload }) => {
        if (!isTeacher) return
        setQuestion(prev => {
          if (!prev || prev.id !== payload.questionId) return prev
          // One answer per person: a change of mind replaces the earlier one.
          const answers = [
            ...prev.answers.filter(a => a.participantId !== payload.answer.participantId),
            payload.answer as Answer,
          ]
          const next = { ...prev, answers }
          questionRef.current = next
          return next
        })
      })
      .on('broadcast', { event: 'q_close' }, ({ payload }) => {
        setQuestion(payload.question as Question)
      })
      .on('broadcast', { event: 'q_clear' }, () => {
        setQuestion(null)
        setMyAnswer(null)
      })
      .on('broadcast', { event: 'q_sync_req' }, () => {
        if (!isTeacher || !questionRef.current) return
        channel.send({ type: 'broadcast', event: 'q_ask', payload: { question: questionRef.current } })
      })
      .subscribe(status => {
        if (status === 'SUBSCRIBED' && !isTeacher) {
          channel.send({ type: 'broadcast', event: 'q_sync_req', payload: {} })
        }
      })
    channelRef.current = channel
    return () => { supabase.removeChannel(channel) }
  }, [sessionId, isTeacher])

  // Teacher: persist answers as they arrive, without hammering the database.
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    if (!isTeacher || !question) return
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => persist(question, history), 2000)
    return () => { if (saveTimer.current) clearTimeout(saveTimer.current) }
  }, [question, history, isTeacher, persist])

  const ask = () => {
    const trimmed = prompt.trim()
    if (!trimmed) { toast.error('Type the question first'); return }
    const cleaned = options.map(o => o.trim()).filter(Boolean)
    const next: Question = {
      id: crypto.randomUUID(),
      prompt: trimmed,
      options: cleaned.length >= 2 ? cleaned : [],
      correct: cleaned.length >= 2 ? correct : null,
      open: true,
      answers: [],
    }
    const past = question ? [...history, question] : history
    setHistory(past)
    setQuestion(next)
    questionRef.current = next
    channelRef.current?.send({ type: 'broadcast', event: 'q_ask', payload: { question: next } })
    persist(next, past)
    setPrompt('')
    setOptions(['', ''])
    setCorrect(null)
    toast.success('Question sent to the class')
  }

  const answer = (value: string) => {
    if (!question || !question.open) return
    setMyAnswer(value)
    const payload: Answer = {
      participantId: participantId || 'anon',
      name: participantName || 'Student',
      value,
    }
    channelRef.current?.send({
      type: 'broadcast', event: 'q_answer',
      payload: { questionId: question.id, answer: payload },
    })
    toast.success('Answer sent')
  }

  const closeQuestion = () => {
    if (!question) return
    const next = { ...question, open: false }
    setQuestion(next)
    questionRef.current = next
    channelRef.current?.send({ type: 'broadcast', event: 'q_close', payload: { question: next } })
    persist(next, history)
  }

  const clearQuestion = () => {
    if (question) persist(null, [...history, question])
    setHistory(prev => (question ? [...prev, question] : prev))
    setQuestion(null)
    channelRef.current?.send({ type: 'broadcast', event: 'q_clear', payload: {} })
  }

  // ── Results ─────────────────────────────────────────────────────────────────
  const tally = () => {
    if (!question) return []
    if (!question.options.length) return []
    return question.options.map((option, i) => ({
      option,
      index: i,
      count: question.answers.filter(a => a.value === option).length,
    }))
  }

  const counts = tally()
  const total = question?.answers.length ?? 0
  const mostVotes = Math.max(1, ...counts.map(c => c.count))

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onMouseDown={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border border-green-200"
        onMouseDown={e => e.stopPropagation()}>

        <div className="flex items-center gap-2 px-4 py-3 border-b border-green-100 bg-[#f3fcf0] shrink-0">
          <HelpCircle size={16} className="text-[#5ab82e]" />
          <span className="font-bold text-sm text-[#1b2b4b]">
            {isTeacher ? 'Ask the class' : 'Question from your teacher'}
          </span>
          <button onClick={onClose} className="ml-auto p-1 text-[#9ca3af] hover:text-[#1b2b4b] transition-colors rounded">
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-4">
          {/* ── Student view ── */}
          {!isTeacher && (
            !question ? (
              <div className="text-sm text-[#9ca3af] text-center py-10">
                Nothing to answer yet. This opens when your teacher asks something.
              </div>
            ) : (
              <div>
                <div className="text-base font-semibold text-[#1b2b4b] mb-4">
                  <PromptText text={question.prompt} />
                </div>
                {!question.open && (
                  <div className="mb-3 px-3 py-2 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-700">
                    This question is closed.
                  </div>
                )}
                {question.options.length > 0 ? (
                  <div className="space-y-2">
                    {question.options.map((option, i) => (
                      <button key={i} disabled={!question.open}
                        onClick={() => answer(option)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left text-sm transition-colors disabled:opacity-60 ${
                          myAnswer === option
                            ? 'bg-[#5ab82e] text-white border-[#5ab82e] font-semibold'
                            : 'bg-white border-green-200 text-[#1b2b4b] hover:bg-[#f3fcf0] hover:border-[#5ab82e]'
                        }`}>
                        <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 ${myAnswer === option ? 'bg-white/25' : 'bg-[#f3fcf0] text-[#5ab82e]'}`}>
                          {LETTERS[i]}
                        </span>
                        <PromptText text={option} />
                        {myAnswer === option && <Check size={15} className="ml-auto shrink-0" />}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input value={shortAnswer} onChange={e => setShortAnswer(e.target.value)}
                      disabled={!question.open}
                      onKeyDown={e => { if (e.key === 'Enter' && shortAnswer.trim()) answer(shortAnswer.trim()) }}
                      placeholder="Type your answer"
                      className="flex-1 px-3 py-2 rounded-lg border border-green-200 bg-[#f9fef6] text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e] focus:bg-white disabled:opacity-60" />
                    <button onClick={() => shortAnswer.trim() && answer(shortAnswer.trim())}
                      disabled={!question.open || !shortAnswer.trim()}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#5ab82e] text-white text-sm font-semibold hover:bg-[#489f22] disabled:opacity-40 transition-colors">
                      <Send size={14} /> Send
                    </button>
                  </div>
                )}
                {myAnswer && (
                  <div className="mt-3 text-xs text-[#5ab82e] font-medium flex items-center gap-1.5">
                    <Check size={12} /> Your answer is in. You can change it while the question is open.
                  </div>
                )}
              </div>
            )
          )}

          {/* ── Teacher view ── */}
          {isTeacher && (
            <div className="space-y-5">
              {question && (
                <div className="rounded-xl border border-green-200 overflow-hidden">
                  <div className="px-3 py-2 bg-[#f3fcf0] flex items-center gap-2">
                    <BarChart2 size={14} className="text-[#5ab82e]" />
                    <span className="text-sm font-semibold text-[#1b2b4b] flex-1">
                      <PromptText text={question.prompt} />
                    </span>
                    <span className="text-xs text-[#6b7280] shrink-0">{total} answered</span>
                  </div>

                  <div className="p-3 space-y-2">
                    {counts.length > 0 ? counts.map(({ option, index, count }) => (
                      <div key={index}>
                        <div className="flex items-center gap-2 text-xs mb-1">
                          <span className="font-bold text-[#5ab82e] w-4">{LETTERS[index]}</span>
                          <span className="text-[#1b2b4b] flex-1"><PromptText text={option} /></span>
                          {question.correct === index && (
                            <span className="text-[10px] font-bold text-[#5ab82e] uppercase">Correct</span>
                          )}
                          <span className="text-[#6b7280] font-mono">{count}</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-[#f3fcf0] overflow-hidden">
                          <div className={`h-full rounded-full transition-all ${question.correct === index ? 'bg-[#5ab82e]' : 'bg-[#1b2b4b]'}`}
                            style={{ width: `${(count / mostVotes) * 100}%` }} />
                        </div>
                      </div>
                    )) : (
                      <div className="space-y-1.5">
                        {question.answers.length === 0 && (
                          <div className="text-xs text-[#9ca3af]">No answers yet.</div>
                        )}
                        {question.answers.map(a => (
                          <div key={a.participantId} className="flex items-center gap-2 text-sm">
                            {showNames && <span className="text-xs font-semibold text-[#6b7280] w-24 truncate shrink-0">{a.name}</span>}
                            <span className="text-[#1b2b4b]"><PromptText text={a.value} /></span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {counts.length > 0 && showNames && question.answers.length > 0 && (
                    <div className="px-3 pb-3 flex flex-wrap gap-1">
                      {question.answers.map(a => (
                        <span key={a.participantId}
                          className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                            question.correct !== null && a.value === question.options[question.correct]
                              ? 'bg-[#f3fcf0] text-[#5ab82e] border-green-200'
                              : 'bg-gray-50 text-[#6b7280] border-gray-200'
                          }`}>
                          {a.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-2 px-3 py-2 border-t border-green-100 bg-[#f9fef6]">
                    <button onClick={() => setShowNames(v => !v)}
                      className="flex items-center gap-1 text-[11px] text-[#6b7280] hover:text-[#1b2b4b] font-medium">
                      {showNames ? <EyeOff size={11} /> : <Eye size={11} />} {showNames ? 'Hide names' : 'Show names'}
                    </button>
                    {question.open ? (
                      <button onClick={closeQuestion}
                        className="ml-auto px-3 py-1 rounded-lg text-xs font-semibold text-[#1b2b4b] bg-white border border-green-200 hover:bg-[#f3fcf0] transition-colors">
                        Stop accepting answers
                      </button>
                    ) : (
                      <span className="ml-auto text-[11px] text-[#9ca3af]">Closed</span>
                    )}
                    <button onClick={clearQuestion}
                      className="px-3 py-1 rounded-lg text-xs font-semibold text-red-500 bg-white border border-red-100 hover:bg-red-50 transition-colors">
                      Clear
                    </button>
                  </div>
                </div>
              )}

              {/* Compose */}
              <div>
                <div className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5">
                  {question ? 'Ask another' : 'Your question'}
                </div>
                <textarea value={prompt} onChange={e => setPrompt(e.target.value)} rows={2}
                  placeholder="e.g. What is the derivative of $x^2$ ?"
                  className="w-full px-3 py-2 rounded-lg border border-green-200 bg-[#f9fef6] text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e] focus:bg-white resize-none" />
                <div className="text-[10px] text-[#9ca3af] mt-1">
                  Wrap maths in dollar signs to have it typeset, for example $x^2$.
                </div>

                <div className="flex items-center justify-between mt-3 mb-1.5">
                  <span className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider">
                    Choices (leave blank for a written answer)
                  </span>
                  {options.length < 6 && (
                    <button onClick={() => setOptions(prev => [...prev, ''])}
                      className="flex items-center gap-1 text-xs text-[#5ab82e] hover:text-[#489f22] font-medium">
                      <Plus size={12} /> Add
                    </button>
                  )}
                </div>
                <div className="space-y-1.5">
                  {options.map((option, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <button onClick={() => setCorrect(correct === i ? null : i)}
                        title="Mark this as the correct answer"
                        className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 border transition-colors ${
                          correct === i ? 'bg-[#5ab82e] text-white border-[#5ab82e]' : 'bg-[#f3fcf0] text-[#5ab82e] border-green-200 hover:border-[#5ab82e]'
                        }`}>
                        {LETTERS[i]}
                      </button>
                      <input value={option}
                        onChange={e => setOptions(prev => prev.map((o, idx) => (idx === i ? e.target.value : o)))}
                        placeholder={`Choice ${LETTERS[i]}`}
                        className="flex-1 px-3 py-1.5 rounded-lg border border-green-200 bg-[#f9fef6] text-sm text-[#1b2b4b] outline-none focus:border-[#5ab82e] focus:bg-white" />
                      {options.length > 2 && (
                        <button onClick={() => setOptions(prev => prev.filter((_, idx) => idx !== i))}
                          className="text-red-400 hover:text-red-600 shrink-0"><Trash2 size={13} /></button>
                      )}
                    </div>
                  ))}
                </div>

                <button onClick={ask}
                  className="mt-3 w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#5ab82e] text-white text-sm font-semibold hover:bg-[#489f22] transition-colors">
                  <Send size={14} /> Ask the class
                </button>
              </div>

              {history.length > 0 && (
                <div>
                  <div className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5">
                    Earlier questions
                  </div>
                  <div className="space-y-1">
                    {history.slice().reverse().map(q => (
                      <div key={q.id} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#f9fef6] border border-green-100 text-xs">
                        <span className="text-[#1b2b4b] flex-1 truncate"><PromptText text={q.prompt} /></span>
                        <span className="text-[#6b7280] shrink-0">{q.answers.length} answered</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
