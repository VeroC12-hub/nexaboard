import { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'
import { formatTime } from '../lib/utils'
import type { ChatMessage } from '../types'
import { Send } from 'lucide-react'

interface Props {
  sessionId: string
  participantId: string | null
  senderName: string
  isTeacher: boolean
}

export default function ChatSidebar({ sessionId, participantId, senderName, isTeacher }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchMessages()
    const channel = supabase
      .channel(`chat:${sessionId}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'session_messages', filter: `session_id=eq.${sessionId}` },
        payload => setMessages(prev => [...prev, payload.new as ChatMessage])
      )
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [sessionId])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const fetchMessages = async () => {
    const { data } = await supabase
      .from('session_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })
    if (data) setMessages(data)
  }

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    setSending(true)
    await supabase.from('session_messages').insert({
      session_id: sessionId,
      participant_id: participantId,
      sender_name: senderName,
      is_teacher: isTeacher,
      content: input.trim(),
    })
    setInput('')
    setSending(false)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
        {messages.length === 0 && (
          <div className="text-center text-slate-600 text-xs py-8">No messages yet. Say hello!</div>
        )}
        {messages.map(msg => (
          <div key={msg.id} className={`flex flex-col ${msg.is_teacher ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-[85%] rounded-xl px-3 py-2 ${msg.is_teacher ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-100'}`}>
              {!msg.is_teacher && (
                <div className="text-[10px] font-medium text-slate-400 mb-1">{msg.sender_name}</div>
              )}
              <p className="text-sm leading-relaxed break-words">{msg.content}</p>
            </div>
            <span className="text-[10px] text-slate-600 mt-0.5 px-1">{formatTime(msg.created_at)}</span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={sendMessage} className="p-3 border-t border-slate-800">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={sending || !input.trim()}
            className="p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white rounded-lg transition-colors"
          >
            <Send size={14} />
          </button>
        </div>
      </form>
    </div>
  )
}
