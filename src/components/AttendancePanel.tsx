import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { ClipboardList, Download, RefreshCw, X, GraduationCap } from 'lucide-react'
import { supabase } from '../lib/supabase'
import {
  fetchAll, isMissingSchema, isOnline, minutesPresent, toCsv, downloadText, fmtDateTime, fmtMinutes,
  safeFileName, SCHEMA_MISSING_MESSAGE, stayEnd,
  type AttendanceRow, type ContactRow, type Course,
} from '../lib/attendance'

interface Props {
  sessionId: string
  sessionTitle: string
  onClose: () => void
}

interface Line {
  participantId: string
  name: string
  email: string
  phone: string
  firstJoin: string | null
  lastSeen: string | null
  minutes: number
  online: boolean
  stays: number
}

/** Teacher view: who came to this class, when, and for how long. */
export default function AttendancePanel({ sessionId, sessionTitle, onClose }: Props) {
  const [lines, setLines] = useState<Line[]>([])
  const [loading, setLoading] = useState(true)
  const [missing, setMissing] = useState(false)
  const [courses, setCourses] = useState<Course[]>([])
  const [courseId, setCourseId] = useState<string>('')
  const [filter, setFilter] = useState('')

  const load = useCallback(async () => {
    const [parts, contacts, stays] = await Promise.all([
      fetchAll<{ id: string; name: string; joined_at: string }>((a, b) =>
        supabase.from('session_participants').select('id, name, joined_at').eq('session_id', sessionId).order('joined_at').range(a, b)),
      fetchAll<ContactRow>((a, b) =>
        supabase.from('nb_participant_contacts').select('participant_id, session_id, email, phone').eq('session_id', sessionId).range(a, b)),
      fetchAll<AttendanceRow>((a, b) =>
        supabase.from('nb_attendance').select('*').eq('session_id', sessionId).order('joined_at').range(a, b)),
    ])
    if (isMissingSchema(stays.error) || isMissingSchema(contacts.error)) {
      setMissing(true); setLoading(false); return
    }
    const byPart = new Map<string, AttendanceRow[]>()
    for (const r of stays.data) {
      const list = byPart.get(r.participant_id) ?? []
      list.push(r)
      byPart.set(r.participant_id, list)
    }
    const contactOf = new Map(contacts.data.map(c => [c.participant_id, c]))
    const now = Date.now()
    const out: Line[] = parts.data.map(p => {
      const rows = byPart.get(p.id) ?? []
      const c = contactOf.get(p.id)
      return {
        participantId: p.id,
        name: p.name,
        email: c?.email ?? '',
        phone: c?.phone ?? '',
        firstJoin: rows[0]?.joined_at ?? null,
        lastSeen: rows.length ? new Date(Math.max(...rows.map(stayEnd))).toISOString() : null,
        minutes: minutesPresent(rows),
        online: rows.some(r => isOnline(r, now)),
        stays: rows.length,
      }
    })
    setLines(out)
    setLoading(false)
  }, [sessionId])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loading data from the server
    load()
    const t = setInterval(load, 30_000)
    return () => clearInterval(t)
  }, [load])

  useEffect(() => {
    let alive = true
    Promise.all([
      supabase.from('nb_courses').select('*').order('created_at', { ascending: false }),
      supabase.from('nb_course_sessions').select('course_id').eq('session_id', sessionId).maybeSingle(),
    ]).then(([c, link]) => {
      if (!alive) return
      if (!c.error) setCourses((c.data ?? []) as Course[])
      if (!link.error && link.data) setCourseId((link.data as { course_id: string }).course_id)
    })
    return () => { alive = false }
  }, [sessionId])

  const linkCourse = async (next: string) => {
    const prev = courseId
    setCourseId(next)
    const { error } = next
      ? await supabase.from('nb_course_sessions').upsert({ session_id: sessionId, course_id: next }, { onConflict: 'session_id' })
      : await supabase.from('nb_course_sessions').delete().eq('session_id', sessionId)
    if (error) { setCourseId(prev); toast.error(`Could not save: ${error.message}`); return }
    toast.success(next ? 'Class added to the course' : 'Class removed from the course')
  }

  const shown = useMemo(() => {
    const f = filter.trim().toLowerCase()
    const list = f ? lines.filter(l => `${l.name} ${l.email} ${l.phone}`.toLowerCase().includes(f)) : lines
    return [...list].sort((a, b) => Number(b.online) - Number(a.online) || a.name.localeCompare(b.name))
  }, [lines, filter])

  const onlineCount = lines.filter(l => l.online).length

  const exportCsv = () => {
    const rows = [
      ['Name', 'Email', 'Phone', 'First joined', 'Last seen', 'Minutes present', 'Visits', 'Online now'],
      ...shown.map(l => [
        l.name, l.email, l.phone,
        l.firstJoin ? new Date(l.firstJoin).toISOString() : '',
        l.lastSeen ? new Date(l.lastSeen).toISOString() : '',
        l.minutes, l.stays, l.online ? 'yes' : 'no',
      ]),
    ]
    downloadText(`attendance_${safeFileName(sessionTitle)}_${new Date().toISOString().slice(0, 10)}.csv`, toCsv(rows))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4" onClick={onClose}>
      <div className="mt-6 flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl border border-green-100 bg-white shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex flex-wrap items-center gap-2 border-b border-green-100 px-5 py-3">
          <ClipboardList size={16} className="text-[#008FA6]" />
          <h2 className="font-bold text-[#1b2b4b]">Attendance</h2>
          {!missing && <span className="text-xs text-[#6b7280]">{lines.length} joined · {onlineCount} here now</span>}
          <div className="ml-auto flex items-center gap-1">
            <button onClick={() => load()} title="Refresh" className="rounded p-1.5 text-[#6b7280] hover:bg-gray-100"><RefreshCw size={14} /></button>
            <button onClick={exportCsv} disabled={missing || lines.length === 0}
              className="flex items-center gap-1 rounded-lg border border-green-200 bg-[#f3fcf0] px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] hover:bg-green-100 disabled:opacity-40">
              <Download size={12} /> CSV
            </button>
            <button onClick={onClose} className="rounded p-1.5 text-[#9ca3af] hover:bg-gray-100"><X size={16} /></button>
          </div>
        </div>

        {missing ? (
          <div className="p-6 text-sm text-amber-700">{SCHEMA_MISSING_MESSAGE}</div>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-3 border-b border-green-50 px-5 py-2.5">
              <label className="flex items-center gap-2 text-xs text-[#6b7280]">
                <GraduationCap size={14} /> Course
                <select value={courseId} onChange={e => linkCourse(e.target.value)}
                  className="rounded-md border border-green-200 bg-[#f3fcf0] px-2 py-1 text-xs text-[#1b2b4b]">
                  <option value="">Not part of a course</option>
                  {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </label>
              <Link to="/courses" className="text-xs font-semibold text-[#008FA6] hover:underline">Manage courses and certificates</Link>
              <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Search name, email, phone"
                className="ml-auto w-56 rounded-md border border-green-200 bg-[#f3fcf0] px-2.5 py-1 text-xs text-[#1b2b4b] placeholder-[#9ca3af]" />
            </div>
            <div className="min-h-0 flex-1 overflow-auto">
              {loading ? (
                <div className="p-6 text-sm text-[#9ca3af]">Loading…</div>
              ) : lines.length === 0 ? (
                <div className="p-6 text-sm text-[#9ca3af]">Nobody has joined yet.</div>
              ) : (
                <table className="w-full text-left text-xs">
                  <thead className="sticky top-0 bg-white text-[#6b7280]">
                    <tr className="border-b border-green-100">
                      <th className="px-4 py-2 font-semibold">Name</th>
                      <th className="px-2 py-2 font-semibold">Contact</th>
                      <th className="px-2 py-2 font-semibold">First joined</th>
                      <th className="px-2 py-2 font-semibold">Last seen</th>
                      <th className="px-2 py-2 text-right font-semibold">Time</th>
                      <th className="px-4 py-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shown.map(l => (
                      <tr key={l.participantId} className="border-b border-green-50 text-[#1b2b4b]">
                        <td className="px-4 py-2 font-semibold">{l.name}</td>
                        <td className="px-2 py-2 text-[#6b7280]">{[l.email, l.phone].filter(Boolean).join(' · ') || '·'}</td>
                        <td className="px-2 py-2 text-[#6b7280]">{l.firstJoin ? fmtDateTime(l.firstJoin) : 'not tracked'}</td>
                        <td className="px-2 py-2 text-[#6b7280]">{l.lastSeen ? fmtDateTime(l.lastSeen) : '·'}</td>
                        <td className="px-2 py-2 text-right font-mono">{fmtMinutes(l.minutes)}</td>
                        <td className="px-4 py-2">
                          {l.online
                            ? <span className="rounded-full bg-[#C7C704]/25 px-2 py-0.5 font-semibold text-[#6b6b00]">Here now</span>
                            : <span className="text-[#9ca3af]">Left</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <p className="border-t border-green-50 px-5 py-2 text-[11px] text-[#9ca3af]">
              Time is measured by the server from a heartbeat every minute, so it is accurate to about a minute.
              Students who joined before attendance was switched on show as "not tracked".
            </p>
          </>
        )}
      </div>
    </div>
  )
}
