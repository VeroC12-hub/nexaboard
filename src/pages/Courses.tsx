import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import type { User } from '@supabase/supabase-js'
import {
  ArrowLeft, Plus, GraduationCap, Download, Award, Copy, Ban, Save, Upload, RefreshCw, ExternalLink,
} from 'lucide-react'
import { supabase } from '../lib/supabase'
import type { Session } from '../types'
import {
  fetchAll, isMissingSchema, learnerKey, minutesPresent, toCsv, downloadText, fmtMinutes, safeFileName,
  SCHEMA_MISSING_MESSAGE, verifyUrl,
  type AttendanceRow, type Certificate, type ContactRow, type Course,
} from '../lib/attendance'

// jsPDF and the QR encoder load only when a certificate is actually drawn.
const pdf = () => import('../lib/certificate')
const downloadCertificate = async (c: Certificate, course: Course) => (await pdf()).downloadCertificate(c, course)
const downloadAllCertificates = async (cs: Certificate[], course: Course, name: string) =>
  (await pdf()).downloadAllCertificates(cs, course, name)

type CourseDraft = Omit<Course, 'id' | 'teacher_id' | 'created_at'>

const BLANK: CourseDraft = {
  name: '',
  description: null,
  partner_name: 'Young Engineers, Ghana Institution of Engineers',
  partner_logo_url: null,
  hours: 40,
  required_attendance_pct: 80,
  code_prefix: 'NXC-YE',
  start_date: null,
  end_date: null,
  signatory_name: null,
  signatory_title: null,
}

function toDraft(c: Course): CourseDraft {
  return {
    name: c.name, description: c.description, partner_name: c.partner_name, partner_logo_url: c.partner_logo_url,
    hours: Number(c.hours), required_attendance_pct: c.required_attendance_pct, code_prefix: c.code_prefix,
    start_date: c.start_date, end_date: c.end_date, signatory_name: c.signatory_name, signatory_title: c.signatory_title,
  }
}

type SessionLite = Pick<Session, 'id' | 'title' | 'created_at'>

interface Learner {
  key: string
  name: string
  email: string
  phone: string
  sessions: number
  minutes: number
  pct: number
  cert: Certificate | null
}

const input = 'w-full rounded-lg border border-green-200 bg-[#f3fcf0] px-3 py-2 text-sm text-[#1b2b4b] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#008FA6]'
const label = 'mb-1 block text-xs font-semibold text-[#1b2b4b]'

/**
 * Courses: group class sessions into a course, see each learner's attendance
 * across all of them, mark who passed, and issue verifiable certificates.
 */
export default function Courses({ user }: { user: User }) {
  const [courses, setCourses] = useState<Course[]>([])
  const [missing, setMissing] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [editing, setEditing] = useState<CourseDraft | null>(null)
  const [saving, setSaving] = useState(false)
  const [editingNew, setEditingNew] = useState(false)

  const loadCourses = useCallback(async () => {
    const { data, error } = await supabase.from('nb_courses').select('*').order('created_at', { ascending: false })
    if (isMissingSchema(error)) { setMissing(true); return }
    if (error) { toast.error(error.message); return }
    setCourses((data ?? []) as Course[])
    setSelectedId(prev => prev ?? (data?.[0] as Course | undefined)?.id ?? null)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loading data from the server
    loadCourses()
  }, [loadCourses])

  const selected = courses.find(c => c.id === selectedId) ?? null

  const saveCourse = async () => {
    if (!editing) return
    const draft = { ...editing, name: editing.name.trim(), code_prefix: editing.code_prefix.trim().toUpperCase() }
    if (draft.name.length < 2) { toast.error('Give the course a name'); return }
    if (!/^[A-Z0-9]{2,10}(-[A-Z0-9]{1,10}){0,2}$/.test(draft.code_prefix)) {
      toast.error('Code prefix: capital letters and numbers, e.g. NXC-YE'); return
    }
    setSaving(true)
    const res = editingNew || !selectedId
      ? await supabase.from('nb_courses').insert({ ...draft, teacher_id: user.id }).select().single()
      : await supabase.from('nb_courses').update(draft).eq('id', selectedId!).select().single()
    setSaving(false)
    if (res.error) { toast.error(res.error.message); return }
    toast.success('Course saved')
    setEditing(null)
    setEditingNew(false)
    await loadCourses()
    setSelectedId((res.data as Course).id)
  }

  const uploadLogo = async (file: File) => {
    if (!editing) return
    if (file.size > 2 * 1024 * 1024) { toast.error('Logo must be under 2 MB'); return }
    const ext = (file.name.split('.').pop() || 'png').toLowerCase().replace(/[^a-z0-9]/g, '')
    const path = `course-logos/${crypto.randomUUID()}.${ext}`
    const { error } = await supabase.storage.from('session-files').upload(path, file, { contentType: file.type, upsert: false })
    if (error) { toast.error(`Upload failed: ${error.message}`); return }
    const { data } = supabase.storage.from('session-files').getPublicUrl(path)
    setEditing({ ...editing, partner_logo_url: data.publicUrl })
    toast.success('Logo uploaded')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f3fcf0] to-[#dcfce7]">
      <header className="sticky top-0 z-10 border-b border-green-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-6">
          <Link to="/dashboard" className="flex items-center gap-1 text-sm text-[#6b7280] hover:text-[#1b2b4b]"><ArrowLeft size={15} /> Dashboard</Link>
          <img src="/nexacore-logo.jpg" alt="NexaCore" className="h-8 object-contain" />
          <h1 className="text-lg font-bold text-[#1b2b4b]">Courses and certificates</h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {missing ? (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">{SCHEMA_MISSING_MESSAGE}</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-[260px_1fr]">
            {/* Course list */}
            <aside className="space-y-2">
              <button onClick={() => { setEditing({ ...BLANK }); setEditingNew(true) }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#008FA6] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#007588]">
                <Plus size={15} /> New course
              </button>
              {courses.map(c => (
                <button key={c.id} onClick={() => { setSelectedId(c.id); setEditing(null); setEditingNew(false) }}
                  className={`w-full rounded-xl border p-3 text-left transition-colors ${c.id === selectedId && !editingNew ? 'border-[#008FA6] bg-white shadow-sm' : 'border-green-100 bg-white/70 hover:border-[#008FA6]/40'}`}>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#1b2b4b]"><GraduationCap size={14} className="text-[#008FA6]" /> {c.name}</div>
                  <div className="mt-0.5 text-xs text-[#6b7280]">{c.code_prefix} · {c.hours} h · pass at {c.required_attendance_pct}%</div>
                </button>
              ))}
              {courses.length === 0 && <p className="text-xs text-[#9ca3af]">No courses yet. Create one, then add your class sessions to it from each session's Attendance panel or below.</p>}
            </aside>

            <section className="min-w-0">
              {editing ? (
                <CourseForm
                  draft={editing}
                  setDraft={setEditing}
                  saving={saving}
                  onSave={saveCourse}
                  onCancel={() => { setEditing(null); setEditingNew(false) }}
                  onLogo={uploadLogo}
                  isNew={editingNew}
                />
              ) : selected ? (
                <CourseDetail key={selected.id} course={selected} user={user}
                  onEdit={() => { setEditing(toDraft(selected)); setEditingNew(false) }} />
              ) : (
                <div className="rounded-xl border border-green-100 bg-white p-10 text-center text-sm text-[#9ca3af]">Select or create a course.</div>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  )
}

function CourseForm({ draft, setDraft, saving, onSave, onCancel, onLogo, isNew }: {
  draft: CourseDraft
  setDraft: (d: CourseDraft) => void
  saving: boolean
  onSave: () => void
  onCancel: () => void
  onLogo: (f: File) => void
  isNew: boolean
}) {
  const set = <K extends keyof CourseDraft>(k: K, v: CourseDraft[K]) => setDraft({ ...draft, [k]: v })
  return (
    <div className="rounded-xl border border-green-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 font-bold text-[#1b2b4b]">{isNew ? 'New course' : 'Edit course'}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={label}>Course name (printed on the certificate)</label>
          <input className={input} value={draft.name} onChange={e => set('name', e.target.value)} placeholder="e.g. AutoCAD Essentials for Young Engineers" />
        </div>
        <div className="sm:col-span-2">
          <label className={label}>Partner (printed beside NexaCore Innovations)</label>
          <input className={input} value={draft.partner_name ?? ''} onChange={e => set('partner_name', e.target.value || null)} placeholder="e.g. Young Engineers, Ghana Institution of Engineers" />
        </div>
        <div className="sm:col-span-2">
          <label className={label}>Partner logo (optional; PNG or JPG with permission to use it)</label>
          <div className="flex items-center gap-3">
            {draft.partner_logo_url && <img src={draft.partner_logo_url} alt="" className="h-12 max-w-[140px] rounded border border-green-100 object-contain" />}
            <label className="flex cursor-pointer items-center gap-1 rounded-lg border border-green-200 bg-[#f3fcf0] px-3 py-2 text-xs font-semibold text-[#1b2b4b] hover:bg-green-100">
              <Upload size={13} /> Upload
              <input type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) onLogo(f); e.target.value = '' }} />
            </label>
            <input className={input} value={draft.partner_logo_url ?? ''} onChange={e => set('partner_logo_url', e.target.value || null)} placeholder="or paste an image URL" />
          </div>
        </div>
        <div>
          <label className={label}>Total hours</label>
          <input type="number" min={0} step={0.5} className={input} value={draft.hours} onChange={e => set('hours', Number(e.target.value))} />
        </div>
        <div>
          <label className={label}>Attendance needed to pass (%)</label>
          <input type="number" min={0} max={100} className={input} value={draft.required_attendance_pct} onChange={e => set('required_attendance_pct', Math.max(0, Math.min(100, Number(e.target.value))))} />
        </div>
        <div>
          <label className={label}>Certificate code prefix</label>
          <input className={`${input} font-mono uppercase`} value={draft.code_prefix} onChange={e => set('code_prefix', e.target.value.toUpperCase())} placeholder="NXC-YE" />
          <p className="mt-1 text-[11px] text-[#9ca3af]">Codes run {draft.code_prefix || 'NXC'}-0001, {draft.code_prefix || 'NXC'}-0002, and so on.</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className={label}>Starts</label>
            <input type="date" className={input} value={draft.start_date ?? ''} onChange={e => set('start_date', e.target.value || null)} />
          </div>
          <div>
            <label className={label}>Ends</label>
            <input type="date" className={input} value={draft.end_date ?? ''} onChange={e => set('end_date', e.target.value || null)} />
          </div>
        </div>
        <div>
          <label className={label}>Signed by</label>
          <input className={input} value={draft.signatory_name ?? ''} onChange={e => set('signatory_name', e.target.value || null)} placeholder="e.g. Godwin Ocloo" />
        </div>
        <div>
          <label className={label}>Their title</label>
          <input className={input} value={draft.signatory_title ?? ''} onChange={e => set('signatory_title', e.target.value || null)} placeholder="e.g. Lead Trainer" />
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <button onClick={onSave} disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-[#008FA6] px-5 py-2 text-sm font-semibold text-white hover:bg-[#007588] disabled:opacity-50">
          <Save size={14} /> {saving ? 'Saving…' : 'Save course'}
        </button>
        <button onClick={onCancel} className="rounded-lg border border-green-200 bg-[#f3fcf0] px-5 py-2 text-sm text-[#6b7280] hover:bg-green-100">Cancel</button>
      </div>
    </div>
  )
}

function CourseDetail({ course, user, onEdit }: { course: Course; user: User; onEdit: () => void }) {
  const [sessions, setSessions] = useState<SessionLite[]>([])
  const [links, setLinks] = useState<Map<string, string>>(new Map()) // session -> course
  const [learners, setLearners] = useState<Learner[]>([])
  const [loading, setLoading] = useState(true)
  const [passed, setPassed] = useState<Set<string>>(new Set())
  const [names, setNames] = useState<Record<string, string>>({})
  const [issuing, setIssuing] = useState(false)
  const [filter, setFilter] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    const [sRes, lRes, cRes] = await Promise.all([
      supabase.from('sessions').select('id, title, created_at')
        .eq('teacher_id', user.id).order('created_at', { ascending: false }),
      supabase.from('nb_course_sessions').select('session_id, course_id'),
      fetchAll<Certificate>((a, b) => supabase.from('nb_certificates').select('*').eq('course_id', course.id).order('code').range(a, b)),
    ])
    const allSessions = (sRes.data ?? []) as SessionLite[]
    setSessions(allSessions)
    const linkMap = new Map(((lRes.data ?? []) as { session_id: string; course_id: string }[]).map(l => [l.session_id, l.course_id]))
    setLinks(linkMap)
    const ids = allSessions.filter(s => linkMap.get(s.id) === course.id).map(s => s.id)

    const certs = cRes.data
    const liveCertByKey = new Map(certs.filter(c => !c.revoked_at).map(c => [c.learner_key, c]))

    if (ids.length === 0) {
      setLearners([]); setLoading(false); return
    }
    const [parts, contacts, stays] = await Promise.all([
      fetchAll<{ id: string; name: string; session_id: string; joined_at: string }>((a, b) =>
        supabase.from('session_participants').select('id, name, session_id, joined_at').in('session_id', ids).order('joined_at').range(a, b)),
      fetchAll<ContactRow>((a, b) =>
        supabase.from('nb_participant_contacts').select('participant_id, session_id, email, phone').in('session_id', ids).range(a, b)),
      fetchAll<AttendanceRow>((a, b) =>
        supabase.from('nb_attendance').select('*').in('session_id', ids).range(a, b)),
    ])
    const contactOf = new Map(contacts.data.map(c => [c.participant_id, c]))
    const staysOf = new Map<string, AttendanceRow[]>()
    for (const r of stays.data) {
      const l = staysOf.get(r.participant_id) ?? []
      l.push(r)
      staysOf.set(r.participant_id, l)
    }

    // One learner = everyone who typed the same email, else phone, else name.
    const groups = new Map<string, { name: string; email: string; phone: string; rows: AttendanceRow[]; sessions: Set<string> }>()
    for (const p of parts.data) {
      const c = contactOf.get(p.id)
      const key = learnerKey(p.name, c?.email, c?.phone)
      const g = groups.get(key) ?? { name: p.name, email: '', phone: '', rows: [], sessions: new Set<string>() }
      g.name = p.name // latest spelling wins (ordered by joined_at)
      if (c?.email) g.email = c.email
      if (c?.phone) g.phone = c.phone
      const rows = staysOf.get(p.id) ?? []
      g.rows.push(...rows)
      if (rows.length) g.sessions.add(p.session_id)
      groups.set(key, g)
    }
    const target = Number(course.hours) * 60
    const out: Learner[] = [...groups.entries()].map(([key, g]) => {
      const minutes = minutesPresent(g.rows)
      return {
        key, name: g.name, email: g.email, phone: g.phone,
        sessions: g.sessions.size, minutes,
        pct: target > 0 ? Math.min(100, (minutes / target) * 100) : 0,
        cert: liveCertByKey.get(key) ?? null,
      }
    })
    // Certificates issued to keys nobody matches any more still show.
    for (const c of liveCertByKey.values()) {
      if (!groups.has(c.learner_key)) {
        out.push({ key: c.learner_key, name: c.learner_name, email: c.learner_email ?? '', phone: c.learner_phone ?? '', sessions: 0, minutes: c.minutes ?? 0, pct: Number(c.attendance_pct ?? 0), cert: c })
      }
    }
    out.sort((a, b) => a.name.localeCompare(b.name))
    setLearners(out)
    setPassed(new Set(out.filter(l => !l.cert && l.pct >= course.required_attendance_pct).map(l => l.key)))
    setLoading(false)
  }, [course, user.id])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loading data from the server
    load()
  }, [load])

  const toggleSession = async (sessionId: string, on: boolean) => {
    const { error } = on
      ? await supabase.from('nb_course_sessions').upsert({ session_id: sessionId, course_id: course.id }, { onConflict: 'session_id' })
      : await supabase.from('nb_course_sessions').delete().eq('session_id', sessionId).eq('course_id', course.id)
    if (error) { toast.error(error.message); return }
    load()
  }

  const issue = async (list: Learner[]) => {
    if (!list.length) return
    setIssuing(true)
    let ok = 0
    for (const l of list) {
      const { error } = await supabase.rpc('nb_issue_certificate', {
        p_course: course.id,
        p_learner_name: (names[l.key] ?? l.name).trim(),
        p_email: l.email || null,
        p_phone: l.phone || null,
        p_attendance_pct: Math.round(l.pct * 10) / 10,
        p_minutes: l.minutes,
      })
      if (error) toast.error(`${l.name}: ${error.message}`)
      else ok++
    }
    setIssuing(false)
    if (ok) toast.success(`${ok} certificate${ok === 1 ? '' : 's'} issued`)
    load()
  }

  const revoke = async (cert: Certificate) => {
    const reason = window.prompt(`Revoke ${cert.code} for ${cert.learner_name}? The verify page will show it as revoked.\n\nReason (optional):`)
    if (reason === null) return
    const { error } = await supabase.rpc('nb_revoke_certificate', { p_certificate: cert.id, p_reason: reason })
    if (error) { toast.error(error.message); return }
    toast.success('Certificate revoked')
    load()
  }

  const shown = useMemo(() => {
    const f = filter.trim().toLowerCase()
    return f ? learners.filter(l => `${l.name} ${l.email} ${l.phone}`.toLowerCase().includes(f)) : learners
  }, [learners, filter])

  const linked = sessions.filter(s => links.get(s.id) === course.id)
  const toIssue = learners.filter(l => !l.cert && passed.has(l.key))
  const issued = learners.map(l => l.cert).filter((c): c is Certificate => !!c)

  const exportCsv = () => {
    const rows = [
      ['Name', 'Email', 'Phone', 'Sessions attended', `Sessions in course (${linked.length})`, 'Minutes', 'Attendance %', 'Passed', 'Certificate code', 'Verify link'],
      ...learners.map(l => [
        names[l.key] ?? l.name, l.email, l.phone, l.sessions, linked.length, l.minutes, l.pct.toFixed(1),
        l.cert ? 'yes' : passed.has(l.key) ? 'marked' : 'no', l.cert?.code ?? '', l.cert ? verifyUrl(l.cert.code) : '',
      ]),
    ]
    downloadText(`course_${safeFileName(course.name)}_${new Date().toISOString().slice(0, 10)}.csv`, toCsv(rows))
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-green-100 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start gap-3">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-[#1b2b4b]">{course.name}</h2>
            <p className="text-xs text-[#6b7280]">
              {course.partner_name ? `With ${course.partner_name} · ` : ''}{course.hours} hours · pass at {course.required_attendance_pct}% attendance · codes {course.code_prefix}-0001…
            </p>
          </div>
          <button onClick={onEdit} className="rounded-lg border border-green-200 bg-[#f3fcf0] px-3 py-1.5 text-xs font-semibold text-[#1b2b4b] hover:bg-green-100">Edit</button>
        </div>
      </div>

      {/* Sessions in this course */}
      <div className="rounded-xl border border-green-100 bg-white p-5 shadow-sm">
        <h3 className="mb-1 text-sm font-bold text-[#1b2b4b]">Class sessions in this course ({linked.length})</h3>
        <p className="mb-3 text-xs text-[#6b7280]">Tick each session that belongs to the course. Attendance from ticked sessions counts towards the certificate.</p>
        <div className="max-h-56 space-y-1 overflow-y-auto">
          {sessions.map(s => {
            const other = links.get(s.id) && links.get(s.id) !== course.id
            return (
              <label key={s.id} className={`flex items-center gap-2 rounded px-2 py-1 text-sm ${other ? 'text-[#9ca3af]' : 'text-[#1b2b4b] hover:bg-[#f3fcf0]'}`}>
                <input type="checkbox" className="accent-[#008FA6]" disabled={!!other}
                  checked={links.get(s.id) === course.id} onChange={e => toggleSession(s.id, e.target.checked)} />
                <span className="min-w-0 flex-1 truncate">{s.title}</span>
                <span className="text-xs text-[#9ca3af]">{new Date(s.created_at).toLocaleDateString()}{other ? ' · in another course' : ''}</span>
              </label>
            )
          })}
          {sessions.length === 0 && <p className="text-xs text-[#9ca3af]">You have no sessions yet.</p>}
        </div>
      </div>

      {/* Learners */}
      <div className="rounded-xl border border-green-100 bg-white shadow-sm">
        <div className="flex flex-wrap items-center gap-2 border-b border-green-100 px-5 py-3">
          <h3 className="text-sm font-bold text-[#1b2b4b]">Learners ({learners.length})</h3>
          <button onClick={load} title="Refresh" className="rounded p-1 text-[#6b7280] hover:bg-gray-100"><RefreshCw size={13} /></button>
          <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Search"
            className="ml-auto w-44 rounded-md border border-green-200 bg-[#f3fcf0] px-2.5 py-1 text-xs" />
          <button onClick={exportCsv} disabled={!learners.length}
            className="flex items-center gap-1 rounded-lg border border-green-200 bg-[#f3fcf0] px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] hover:bg-green-100 disabled:opacity-40">
            <Download size={12} /> CSV
          </button>
          <button onClick={() => downloadAllCertificates(issued, course, `certificates_${safeFileName(course.name)}.pdf`)} disabled={!issued.length}
            className="flex items-center gap-1 rounded-lg border border-green-200 bg-[#f3fcf0] px-2.5 py-1.5 text-xs font-semibold text-[#1b2b4b] hover:bg-green-100 disabled:opacity-40">
            <Download size={12} /> All certificates (PDF)
          </button>
          <button onClick={() => issue(toIssue)} disabled={issuing || !toIssue.length}
            className="flex items-center gap-1 rounded-lg bg-[#008FA6] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#007588] disabled:opacity-40">
            <Award size={12} /> {issuing ? 'Issuing…' : `Issue ${toIssue.length} certificate${toIssue.length === 1 ? '' : 's'}`}
          </button>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <p className="p-5 text-sm text-[#9ca3af]">Loading…</p>
          ) : learners.length === 0 ? (
            <p className="p-5 text-sm text-[#9ca3af]">No attendance yet. Tick the course's sessions above; learners appear once they have joined one.</p>
          ) : (
            <table className="w-full text-left text-xs">
              <thead className="text-[#6b7280]">
                <tr className="border-b border-green-100">
                  <th className="px-4 py-2 font-semibold">Passed</th>
                  <th className="px-2 py-2 font-semibold">Name on certificate</th>
                  <th className="px-2 py-2 font-semibold">Contact</th>
                  <th className="px-2 py-2 text-right font-semibold">Sessions</th>
                  <th className="px-2 py-2 text-right font-semibold">Time</th>
                  <th className="px-2 py-2 text-right font-semibold">Attendance</th>
                  <th className="px-4 py-2 font-semibold">Certificate</th>
                </tr>
              </thead>
              <tbody>
                {shown.map(l => {
                  const ok = l.pct >= course.required_attendance_pct
                  return (
                    <tr key={l.key} className="border-b border-green-50 text-[#1b2b4b]">
                      <td className="px-4 py-2">
                        <input type="checkbox" className="accent-[#008FA6]" disabled={!!l.cert}
                          checked={!!l.cert || passed.has(l.key)}
                          onChange={e => setPassed(prev => { const n = new Set(prev); if (e.target.checked) n.add(l.key); else n.delete(l.key); return n })} />
                      </td>
                      <td className="px-2 py-2">
                        {l.cert ? <span className="font-semibold">{l.cert.learner_name}</span> : (
                          <input value={names[l.key] ?? l.name} onChange={e => setNames(p => ({ ...p, [l.key]: e.target.value }))}
                            className="w-full min-w-[140px] rounded border border-transparent bg-transparent px-1 py-0.5 font-semibold hover:border-green-200 focus:border-[#008FA6] focus:outline-none" />
                        )}
                      </td>
                      <td className="px-2 py-2 text-[#6b7280]">{[l.email, l.phone].filter(Boolean).join(' · ') || <span className="text-amber-600">none given</span>}</td>
                      <td className="px-2 py-2 text-right">{l.sessions}/{linked.length}</td>
                      <td className="px-2 py-2 text-right font-mono">{fmtMinutes(l.minutes)}</td>
                      <td className={`px-2 py-2 text-right font-semibold ${ok ? 'text-[#008FA6]' : 'text-amber-600'}`}>{l.pct.toFixed(0)}%</td>
                      <td className="px-4 py-2">
                        {l.cert ? (
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono font-semibold text-[#008FA6]">{l.cert.code}</span>
                            <button title="Download PDF" onClick={() => downloadCertificate(l.cert!, course)} className="rounded p-1 text-[#6b7280] hover:bg-gray-100"><Download size={12} /></button>
                            <button title="Copy verify link" onClick={() => { navigator.clipboard.writeText(verifyUrl(l.cert!.code)); toast.success('Verify link copied') }} className="rounded p-1 text-[#6b7280] hover:bg-gray-100"><Copy size={12} /></button>
                            <a title="Open verify page" href={verifyUrl(l.cert.code)} target="_blank" rel="noreferrer" className="rounded p-1 text-[#6b7280] hover:bg-gray-100"><ExternalLink size={12} /></a>
                            <button title="Revoke" onClick={() => revoke(l.cert!)} className="rounded p-1 text-[#9ca3af] hover:bg-red-50 hover:text-red-500"><Ban size={12} /></button>
                          </div>
                        ) : passed.has(l.key) ? (
                          <button onClick={() => issue([l])} disabled={issuing}
                            className="rounded bg-[#008FA6]/10 px-2 py-1 font-semibold text-[#008FA6] hover:bg-[#008FA6]/20">Issue</button>
                        ) : <span className="text-[#9ca3af]">·</span>}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
        <p className="border-t border-green-50 px-5 py-2 text-[11px] text-[#9ca3af]">
          Attendance % is time present across the ticked sessions divided by the course's {course.hours} hours. Learners are
          matched across sessions by email, then phone, then exact name, so ask them to use the same details every day.
          Ticks above the pass mark are suggestions; you decide who passed.
        </p>
      </div>
    </div>
  )
}
