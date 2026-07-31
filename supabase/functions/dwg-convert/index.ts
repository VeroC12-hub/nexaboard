// No-account DWG support for NexaBoard: converts DWG -> DXF via CloudConvert, then the
// browser renders the DXF with the existing client-side viewer. The CloudConvert API key
// stays server-side; the browser only ever sees the resulting DXF in our own storage.
//
// POST JSON { action }:
//   "start"  { url, name } -> { jobId }            (teacher-only; kicks off DWG->DXF)
//   "status" { jobId, name } -> { status, dxfUrl } (teacher-only; on finish, stores DXF + returns its URL)
//
// Secret required: CLOUDCONVERT_API_KEY  (free tier, no credit card)
// Auto-injected: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
//
// Deployed with verify_jwt = false; the function validates the teacher's Supabase session itself.

const CC = 'https://api.cloudconvert.com/v2'
const CC_KEY = Deno.env.get('CLOUDCONVERT_API_KEY') ?? ''
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? ''
const SUPABASE_ANON = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } })

async function isAuthenticated(req: Request): Promise<boolean> {
  const auth = req.headers.get('Authorization') ?? ''
  if (!auth.startsWith('Bearer ')) return false
  const token = auth.slice(7)
  if (!token || token === SUPABASE_ANON) return false
  const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { Authorization: `Bearer ${token}`, apikey: SUPABASE_ANON },
  })
  return res.ok
}

const ccHeaders = { Authorization: `Bearer ${CC_KEY}`, 'Content-Type': 'application/json' }

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
  if (!CC_KEY) return json({ error: 'not_configured' }, 503)

  try {
    const body = await req.json().catch(() => ({}))
    const action = body.action

    if (!(await isAuthenticated(req))) return json({ error: 'unauthorized' }, 401)

    if (action === 'start') {
      const url = String(body.url ?? '')
      const name = String(body.name ?? 'drawing.dwg')
      if (!url) return json({ error: 'missing url' }, 400)

      const res = await fetch(`${CC}/jobs`, {
        method: 'POST',
        headers: ccHeaders,
        body: JSON.stringify({
          tasks: {
            'import-dwg': { operation: 'import/url', url, filename: name },
            'convert-dxf': {
              operation: 'convert',
              input: 'import-dwg',
              input_format: 'dwg',
              output_format: 'dxf',
            },
            'export-dxf': { operation: 'export/url', input: 'convert-dxf', inline: false, archive_multiple_files: false },
          },
        }),
      })
      if (!res.ok) return json({ error: `cloudconvert ${res.status}: ${await res.text()}` }, 500)
      const data = await res.json()
      return json({ jobId: data.data.id })
    }

    if (action === 'status') {
      const jobId = String(body.jobId ?? '')
      const name = String(body.name ?? 'drawing.dwg')
      if (!jobId) return json({ error: 'missing jobId' }, 400)

      const res = await fetch(`${CC}/jobs/${jobId}`, { headers: ccHeaders })
      if (!res.ok) return json({ error: `cloudconvert ${res.status}` }, 500)
      const data = await res.json()
      const job = data.data
      const jobStatus = job.status as string // 'waiting' | 'processing' | 'finished' | 'error'

      if (jobStatus === 'error') {
        const failed = (job.tasks ?? []).find((t: { status: string; message?: string }) => t.status === 'error')
        return json({ status: 'error', message: failed?.message ?? 'conversion failed' })
      }
      if (jobStatus !== 'finished') return json({ status: 'processing' })

      // Find the export task's resulting DXF file URL
      const exportTask = (job.tasks ?? []).find((t: { name: string; operation: string }) => t.operation === 'export/url')
      const fileUrl = exportTask?.result?.files?.[0]?.url
      if (!fileUrl) return json({ status: 'error', message: 'no output file' })

      // Download the DXF and store it in our own bucket so the browser can fetch it (CORS-safe)
      const dxfRes = await fetch(fileUrl)
      if (!dxfRes.ok) return json({ status: 'error', message: 'could not download converted file' })
      const dxfBytes = new Uint8Array(await dxfRes.arrayBuffer())

      const safeName = name.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9._-]/g, '_')
      const path = `converted/${Date.now()}-${safeName}.dxf`
      const upRes = await fetch(`${SUPABASE_URL}/storage/v1/object/session-files/${path}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${SERVICE_KEY}`,
          apikey: SERVICE_KEY,
          'Content-Type': 'application/dxf',
          'x-upsert': 'true',
        },
        body: dxfBytes,
      })
      if (!upRes.ok) return json({ status: 'error', message: `store failed ${upRes.status}` })

      const dxfUrl = `${SUPABASE_URL}/storage/v1/object/public/session-files/${path}`
      return json({ status: 'finished', dxfUrl })
    }

    return json({ error: 'unknown action' }, 400)
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : String(e) }, 500)
  }
})
