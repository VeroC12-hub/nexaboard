import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Whiteboard from './Whiteboard'
import type { Participant } from '../types'
import { PenSquare, X, Eye } from 'lucide-react'

/**
 * Walking the room. Every student has their own working board; this lets the
 * teacher pick one and watch it live, read only, without interrupting them.
 */

interface Props {
  sessionId: string
  onClose: () => void
}

export default function StudentWorkPanel({ sessionId, onClose }: Props) {
  const [students, setStudents] = useState<Participant[]>([])
  const [watching, setWatching] = useState<Participant | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      const { data } = await supabase
        .from('session_participants')
        .select('*')
        .eq('session_id', sessionId)
        .eq('is_active', true)
        .order('name')
      if (cancelled) return
      setStudents(data ?? [])
      setLoading(false)
    }
    load()
    // Keep the list current as people come and go.
    const channel = supabase
      .channel(`work_roster:${sessionId}`)
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'session_participants', filter: `session_id=eq.${sessionId}` },
        load)
      .subscribe()
    return () => { cancelled = true; supabase.removeChannel(channel) }
  }, [sessionId])

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/60" onMouseDown={onClose}>
      <div className="m-4 flex-1 min-h-0 flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-200"
        onMouseDown={e => e.stopPropagation()}>

        <div className="flex items-center gap-2 px-4 py-3 border-b border-green-100 bg-[#f3fcf0] shrink-0">
          <PenSquare size={16} className="text-[#5ab82e]" />
          <span className="font-bold text-sm text-[#1b2b4b]">
            {watching ? `${watching.name}'s work` : 'Student work'}
          </span>
          {watching && (
            <>
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white border border-green-200 text-[10px] font-semibold text-[#6b7280]">
                <Eye size={10} /> Watching live, read only
              </span>
              <button onClick={() => setWatching(null)}
                className="px-3 py-1 rounded-lg text-xs font-semibold text-[#1b2b4b] bg-white border border-green-200 hover:bg-[#f3fcf0] transition-colors">
                Back to class
              </button>
            </>
          )}
          <button onClick={onClose} className="ml-auto p-1 text-[#9ca3af] hover:text-[#1b2b4b] transition-colors rounded">
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 min-h-0">
          {watching ? (
            <Whiteboard
              key={watching.id}
              sessionId={sessionId}
              isTeacher={false}
              canDraw={false}
              boardKey={watching.id}
            />
          ) : (
            <div className="h-full overflow-y-auto p-4">
              {loading ? (
                <div className="text-sm text-[#9ca3af] text-center py-10">Loading the class…</div>
              ) : students.length === 0 ? (
                <div className="text-sm text-[#9ca3af] text-center py-10">
                  Nobody has joined yet. Each student gets their own working board under "My Work".
                </div>
              ) : (
                <>
                  <div className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">
                    Pick a student to watch their working board
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {students.map(student => (
                      <button key={student.id} onClick={() => setWatching(student)}
                        className="flex items-center gap-2 px-3 py-3 rounded-xl border border-green-200 bg-white hover:bg-[#f3fcf0] hover:border-[#5ab82e] transition-colors text-left">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f3fcf0] text-[#5ab82e] text-xs font-bold shrink-0">
                          {student.name.slice(0, 2).toUpperCase()}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-[#1b2b4b] truncate">{student.name}</span>
                          <span className="block text-[10px] text-[#9ca3af]">Open their board</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
