import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BadgeCheck, ShieldAlert, Search, XCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'
import type { VerifiedCertificate } from '../lib/attendance'

type Result =
  | { state: 'idle' }
  | { state: 'loading' }
  | { state: 'found'; cert: VerifiedCertificate }
  | { state: 'none' }
  | { state: 'error' }

const longDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

/**
 * Public certificate check: /verify/NXC-YE-0001.
 * Answers for one exact code only, and shows only what is printed on the
 * certificate itself (never an email or phone number).
 */
export default function Verify() {
  const { code } = useParams<{ code?: string }>()
  const navigate = useNavigate()
  const [typed, setTyped] = useState(code ?? '')
  const [result, setResult] = useState<Result>(code ? { state: 'loading' } : { state: 'idle' })

  useEffect(() => {
    if (!code) return
    let alive = true
    supabase.rpc('nb_verify_certificate', { p_code: code }).then(({ data, error }) => {
      if (!alive) return
      if (error) { setResult({ state: 'error' }); return }
      const row = (Array.isArray(data) ? data[0] : data) as VerifiedCertificate | undefined
      setResult(row ? { state: 'found', cert: row } : { state: 'none' })
    })
    return () => { alive = false }
  }, [code])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const c = typed.trim().toUpperCase()
    if (!c || c === code) return
    setResult({ state: 'loading' })
    navigate(`/verify/${encodeURIComponent(c)}`)
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-white via-[#eefafc] to-[#f7f7d9] px-4 py-10">
      <img src="/brand/nexacore-logo-hd.jpg" alt="NexaCore Innovations" className="mb-6 h-16 rounded object-contain" />
      <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-[#008FA6]/20 bg-white shadow-xl">
        <div className="h-2 bg-gradient-to-r from-[#008FA6] via-[#008FA6] to-[#C7C704]" />
        <div className="p-7">
          <h1 className="text-xl font-bold text-[#1b2b4b]">Verify a Certificate of Completion</h1>
          <p className="mb-5 mt-1 text-sm text-[#6b7280]">Enter the code printed on the certificate, for example NXC-YE-0001.</p>

          <form onSubmit={submit} className="mb-6 flex gap-2">
            <input value={typed} onChange={e => setTyped(e.target.value.toUpperCase())} placeholder="NXC-YE-0001"
              className="flex-1 rounded-lg border border-[#008FA6]/30 bg-[#f4fbfc] px-4 py-2.5 font-mono text-sm uppercase tracking-wider text-[#1b2b4b] focus:outline-none focus:ring-2 focus:ring-[#008FA6]" />
            <button type="submit" className="flex items-center gap-1.5 rounded-lg bg-[#008FA6] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#007588]">
              <Search size={14} /> Check
            </button>
          </form>

          {result.state === 'loading' && <p className="text-sm text-[#9ca3af]">Checking…</p>}

          {result.state === 'found' && !result.cert.revoked && (
            <div className="rounded-xl border border-[#008FA6]/30 bg-[#008FA6]/5 p-5">
              <div className="mb-3 flex items-center gap-2 text-[#008FA6]">
                <BadgeCheck size={22} />
                <span className="font-bold">Valid Certificate of Completion</span>
              </div>
              <dl className="grid grid-cols-[110px_1fr] gap-y-2 text-sm">
                <dt className="text-[#6b7280]">Awarded to</dt><dd className="font-semibold text-[#1b2b4b]">{result.cert.learner_name}</dd>
                <dt className="text-[#6b7280]">Course</dt><dd className="font-semibold text-[#1b2b4b]">{result.cert.course_name}</dd>
                {Number(result.cert.hours) > 0 && <><dt className="text-[#6b7280]">Duration</dt><dd className="text-[#1b2b4b]">{Number(result.cert.hours)} hours</dd></>}
                <dt className="text-[#6b7280]">Issued by</dt>
                <dd className="text-[#1b2b4b]">NexaCore Innovations{result.cert.partner_name ? ` with ${result.cert.partner_name}` : ''}</dd>
                <dt className="text-[#6b7280]">Date issued</dt><dd className="text-[#1b2b4b]">{longDate(result.cert.issued_at)}</dd>
                <dt className="text-[#6b7280]">Code</dt><dd className="font-mono text-[#1b2b4b]">{result.cert.code}</dd>
              </dl>
            </div>
          )}

          {result.state === 'found' && result.cert.revoked && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
              <div className="mb-1 flex items-center gap-2 font-bold"><ShieldAlert size={18} /> This certificate has been revoked</div>
              Code {result.cert.code} was issued to {result.cert.learner_name} for {result.cert.course_name} but is no longer valid.
            </div>
          )}

          {result.state === 'none' && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
              <div className="mb-1 flex items-center gap-2 font-bold"><XCircle size={18} /> No certificate found</div>
              Check the code for typing mistakes. Codes look like NXC-YE-0001.
            </div>
          )}

          {result.state === 'error' && (
            <p className="text-sm text-red-600">The check could not be completed right now. Please try again later.</p>
          )}
        </div>
      </div>
      <p className="mt-6 max-w-lg text-center text-xs text-[#9ca3af]">
        Certificates of Completion confirm that a learner completed a training course delivered by NexaCore Innovations.
        They are not software vendor certifications.
      </p>
    </div>
  )
}
