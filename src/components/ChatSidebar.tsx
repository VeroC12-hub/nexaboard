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
    const channel = supabase.channel(`chat:${sessionId}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'session_messages', filter: `session_id=eq.${sessionId}` },
        payload => setMessages(prev => [...prev, payload.new as ChatMessage]))
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [sessionId])

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const fetchMessages = async () => {
    const { data } = await supabase.from('session_messages').select('*')
      .eq('session_id', sessionId).order('created_at', { ascending: true })
    if (data) setMessages(data)
  }

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    setSending(true)
    await supabase.from('session_messages').insert({
      session_id: sessionId, participant_id: participantId,
      sender_name: senderName, is_teacher: isTeacher, content: input.trim(),
    })
    setInput(''); setSending(false)
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
        {messages.length === 0 && (
          <div className="text-center text-[#9ca3af] text-xs py-8">No messages yet. Say hello!</div>
        )}
        {messages.map(msg => (
          <div key={msg.id} className={`flex flex-col ${msg.is_teacher ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-[85%] rounded-xl px-3 py-2 ${msg.is_teacher ? 'bg-[#5ab82e] text-white' : 'bg-[#f3fcf0] text-[#1b2b4b] border border-green-100'}`}>
              {!msg.is_teacher && (
                <div className="text-[10px] font-semibold text-[#5ab82e] mb-1">{msg.sender_name}</div>
              )}
              <p className="text-sm leading-relaxed break-words">{msg.content}</p>
            </div>
            <span className="text-[10px] text-[#9ca3af] mt-0.5 px-1">{formatTime(msg.created_at)}</span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={sendMessage} className="p-3 border-t border-green-100">
        <div className="flex gap-2">
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..."
            className="flex-1 bg-[#f3fcf0] border border-green-200 rounded-lg px-3 py-2 text-sm text-[#1b2b4b] placeholder-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#5ab82e]" />
          <button type="submit" disabled={sending || !input.trim()}
            className="p-2 bg-[#5ab82e] hover:bg-[#489f22] disabled:opacity-40 text-white rounded-lg transition-colors">
            <Send size={14} />
          </button>
        </div>
      </form>
    </div>
  )
}
