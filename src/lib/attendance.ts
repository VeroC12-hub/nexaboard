/**
 * Attendance, courses and certificates for large classes.
 *
 * Tables and functions come from
 * supabase/migrations/20261022000001_large_class_attendance_certificates.sql.
 * Until that migration is applied every call here fails with "function/table
 * not found"; callers treat that as "not set up yet" (see isMissingSchema) and
 * the class itself carries on normally.
 */
import { supabase } from './supabase'

export interface Course {
  id: string
  teacher_id: string
  name: string
  description: string | null
  partner_name: string | null
  partner_logo_url: string | null
  hours: number
  required_attendance_pct: number
  code_prefix: string
  start_date: string | null
  end_date: string | null
  signatory_name: string | null
  signatory_title: string | null
  created_at: string
}

export interface AttendanceRow {
  id: string
  session_id: string
  participant_id: string
  joined_at: string
  last_seen_at: string
  left_at: string | null
}

export interface ContactRow {
  participant_id: string
  session_id: string
  email: string | null
  phone: string | null
}

export interface Certificate {
  id: string
  code: string
  course_id: string
  learner_key: string
  learner_name: string
  learner_email: string | null
  learner_phone: string | null
  course_name: string
  partner_name: string | null
  hours: number
  attendance_pct: number | null
  minutes: number | null
  issued_at: string
  revoked_at: string | null
  revoked_reason: string | null
}

export interface VerifiedCertificate {
  code: string
  learner_name: string
  course_name: string
  partner_name: string | null
  hours: number
  issued_at: string
  revoked: boolean
}

/** True when the error means the migration has not been applied yet. */
export function isMissingSchema(error: { code?: string; message?: string } | null | undefined): boolean {
  if (!error) return false
  return error.code === 'PGRST202' || error.code === 'PGRST205' || error.code === '42P01' || error.code === '42883'
    || /could not find the (function|table)|does not exist|schema cache/i.test(error.message ?? '')
}

export const SCHEMA_MISSING_MESSAGE =
  'Attendance and certificates need a one-time database update (migration 20261022000001). Ask the administrator to apply it.'

// ── Student side ─────────────────────────────────────────────────────────────

export async function startAttendance(participantId: string): Promise<string | null> {
  const { data, error } = await supabase.rpc('nb_attendance_start', { p_participant: participantId })
  if (error) return null
  return (data as string | null) ?? null
}

export async function pingAttendance(attendanceId: string): Promise<boolean> {
  const { data, error } = await supabase.rpc('nb_attendance_ping', { p_attendance: attendanceId })
  if (error) return true // network blip or no schema: do not churn new rows
  return data === true
}

/**
 * Close a stay. Uses fetch with keepalive so it still goes out while the tab
 * is closing, which supabase-js cannot promise.
 */
export function leaveAttendance(attendanceId: string) {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
  if (!url || !key) return
  try {
    fetch(`${url.replace(/\/+$/, '')}/rest/v1/rpc/nb_attendance_leave`, {
      method: 'POST',
      keepalive: true,
      headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ p_attendance: attendanceId }),
    }).catch(() => {})
  } catch { /* closing anyway */ }
}

export async function setContact(participantId: string, email: string, phone: string) {
  const { error } = await supabase.rpc('nb_set_contact', {
    p_participant: participantId, p_email: email || null, p_phone: phone || null,
  })
  return error
}

// ── Maths ────────────────────────────────────────────────────────────────────

/** End of a stay: when they left, or their last heartbeat if they vanished. */
export const stayEnd = (r: AttendanceRow) => new Date(r.left_at ?? r.last_seen_at).getTime()

/**
 * Minutes present, merging overlapping stays so two open tabs do not count
 * double. Pass every row for ONE learner (any number of sessions).
 */
export function minutesPresent(rows: AttendanceRow[]): number {
  const spans = rows
    .map(r => [new Date(r.joined_at).getTime(), stayEnd(r)] as const)
    .filter(([a, b]) => b > a)
    .sort((x, y) => x[0] - y[0])
  let total = 0
  let curA = -1, curB = -1
  for (const [a, b] of spans) {
    if (a > curB) {
      if (curB > curA) total += curB - curA
      curA = a; curB = b
    } else if (b > curB) {
      curB = b
    }
  }
  if (curB > curA) total += curB - curA
  return Math.round(total / 60000)
}

/** A stay with a heartbeat in the last two minutes and no leave. */
export const isOnline = (r: AttendanceRow, now = Date.now()) =>
  !r.left_at && now - new Date(r.last_seen_at).getTime() < 2 * 60_000

/**
 * The key that ties one learner together across sessions. Each class makes a
 * fresh anonymous participant, so the only thread is what they typed:
 * email first, then phone, then the name. Must match nb_issue_certificate().
 */
export function learnerKey(name: string, email?: string | null, phone?: string | null): string {
  const e = (email ?? '').trim().toLowerCase()
  if (e) return e
  const p = (phone ?? '').replace(/[^0-9+]/g, '')
  if (p) return p
  return name.trim().replace(/\s+/g, ' ').toLowerCase()
}

// ── Fetching (paged: PostgREST returns at most 1000 rows per request) ───────

export async function fetchAll<T>(
  build: (from: number, to: number) => PromiseLike<{ data: T[] | null; error: { code?: string; message: string } | null }>,
): Promise<{ data: T[]; error: { code?: string; message: string } | null }> {
  const out: T[] = []
  const page = 1000
  for (let from = 0; ; from += page) {
    const { data, error } = await build(from, from + page - 1)
    if (error) return { data: out, error }
    out.push(...(data ?? []))
    if (!data || data.length < page) break
  }
  return { data: out, error: null }
}

// ── CSV ──────────────────────────────────────────────────────────────────────

export function toCsv(rows: (string | number | null | undefined)[][]): string {
  const cell = (v: string | number | null | undefined) => {
    const s = v == null ? '' : String(v)
    // Neutralise spreadsheet formulas in names typed by students.
    const safe = /^[=+\-@\t\r]/.test(s) ? `'${s}` : s
    return /[",\n\r]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe
  }
  return '﻿' + rows.map(r => r.map(cell).join(',')).join('\r\n')
}

export function downloadText(filename: string, text: string, type = 'text/csv;charset=utf-8') {
  const blob = new Blob([text], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export const fmtDateTime = (iso: string) =>
  new Date(iso).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })

export const fmtMinutes = (m: number) => m >= 60 ? `${Math.floor(m / 60)} h ${m % 60} min` : `${m} min`

/** The public page that confirms a certificate. Printed on it as text and a QR code. */
export const verifyUrl = (code: string, origin = window.location.origin) => `${origin}/verify/${encodeURIComponent(code)}`

export const safeFileName = (s: string) => s.replace(/[^\w.-]+/g, '_').replace(/_+/g, '_').slice(0, 80)
