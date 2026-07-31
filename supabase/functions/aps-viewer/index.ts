// Autodesk Platform Services (APS) support for NexaBoard CAD embeds.
//
// POST JSON { action }:
//   "token"     -> { access_token, expires_in }  (viewables:read; safe for browser; public)
//   "status"    -> { status, progress }           (public; reads Model Derivative manifest)
//   "translate" -> { urn }                         (teacher-only; uploads file + starts SVF2 job)
//
// Secrets required (Supabase project secrets):
//   APS_CLIENT_ID, APS_CLIENT_SECRET   — from a free Autodesk Platform Services app
// Auto-injected by Supabase: SUPABASE_URL, SUPABASE_ANON_KEY
//
// Deploy with verify_jwt = false so anonymous students can fetch a read-only viewer token.
// The sensitive "translate" action validates the caller's Supabase session itself.

const APS = 'https://developer.api.autodesk.com'
const CLIENT_ID = Deno.env.get('APS_CLIENT_ID') ?? ''
const CLIENT_SECRET = Deno.env.get('APS_CLIENT_SECRET') ?? ''
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? ''
const SUPABASE_ANON = Deno.env.get('SUPABASE_ANON_KEY') ?? ''

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } })

// objectId -> URL-safe base64 (no padding) URN
const toUrn = (objectId: string) =>
  btoa(objectId).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

// Bucket key derived from the client id, so it's unique to this APS account and stable.
const bucketKey = () => `nexaboard-${CLIENT_ID.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 20)}`

async function getToken(scope: string) {
  const res = await fetch(`${APS}/authentication/v2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    },
    body: new URLSearchParams({ grant_type: 'client_credentials', scope }),
  })
  if (!res.ok) throw new Error(`auth ${res.status}: ${await res.text()}`)
  return await res.json() as { access_token: string; expires_in: number }
}

async function ensureBucket(token: string) {
  const res = await fetch(`${APS}/oss/v2/buckets`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ bucketKey: bucketKey(), policyKey: 'persistent' }),
  })
  if (!res.ok && res.status !== 409) throw new Error(`bucket ${res.status}: ${await res.text()}`)
}

async function uploadToOss(token: string, objectKey: string, bytes: Uint8Array): Promise<string> {
  const bk = bucketKey()
  const objPath = `${APS}/oss/v2/buckets/${bk}/objects/${encodeURIComponent(objectKey)}/signeds3upload`
  // 1. request a signed S3 upload URL
  const signRes = await fetch(objPath, { headers: { Authorization: `Bearer ${token}` } })
  if (!signRes.ok) throw new Error(`sign ${signRes.status}: ${await signRes.text()}`)
  const { uploadKey, urls } = await signRes.json() as { uploadKey: string; urls: string[] }
  // 2. upload the bytes straight to S3
  const putRes = await fetch(urls[0], { method: 'PUT', body: bytes })
  if (!putRes.ok) throw new Error(`s3 put ${putRes.status}`)
  // 3. finalize the upload
  const finRes = await fetch(objPath, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ uploadKey }),
  })
  if (!finRes.ok) throw new Error(`finalize ${finRes.status}: ${await finRes.text()}`)
  const obj = await finRes.json() as { objectId: string }
  return obj.objectId
}

async function startJob(token: string, urn: string) {
  const res = await fetch(`${APS}/modelderivative/v2/designdata/job`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'x-ads-force': 'true',
    },
    body: JSON.stringify({
      input: { urn },
      output: { formats: [{ type: 'svf2', views: ['2d', '3d'] }] },
    }),
  })
  if (!res.ok && res.status !== 409) throw new Error(`job ${res.status}: ${await res.text()}`)
}

// Verify the caller is a logged-in Supabase user (teacher) by checking their access token.
async function isAuthenticated(req: Request): Promise<boolean> {
  const auth = req.headers.get('Authorization') ?? ''
  if (!auth.startsWith('Bearer ')) return false
  const token = auth.slice(7)
  if (!token || token === SUPABASE_ANON) return false // anon key is not a user session
  const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { Authorization: `Bearer ${token}`, apikey: SUPABASE_ANON },
  })
  return res.ok
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
  if (!CLIENT_ID || !CLIENT_SECRET) return json({ error: 'not_configured' }, 503)

  try {
    const body = await req.json().catch(() => ({}))
    const action = body.action

    if (action === 'token') {
      const t = await getToken('viewables:read')
      return json({ access_token: t.access_token, expires_in: t.expires_in })
    }

    if (action === 'status') {
      const urn = String(body.urn ?? '')
      if (!urn) return json({ error: 'missing urn' }, 400)
      const t = await getToken('viewables:read')
      const res = await fetch(`${APS}/modelderivative/v2/designdata/${urn}/manifest`, {
        headers: { Authorization: `Bearer ${t.access_token}` },
      })
      if (res.status === 404) return json({ status: 'pending', progress: '0% complete' })
      if (!res.ok) throw new Error(`manifest ${res.status}`)
      const m = await res.json() as { status: string; progress: string }
      return json({ status: m.status, progress: m.progress })
    }

    if (action === 'translate') {
      if (!(await isAuthenticated(req))) return json({ error: 'unauthorized' }, 401)
      const url = String(body.url ?? '')
      const name = String(body.name ?? '')
      if (!url || !name) return json({ error: 'missing url/name' }, 400)

      const fileRes = await fetch(url)
      if (!fileRes.ok) return json({ error: 'cannot fetch file' }, 400)
      const bytes = new Uint8Array(await fileRes.arrayBuffer())

      const t = await getToken('data:read data:write data:create bucket:create bucket:read')
      await ensureBucket(t.access_token)
      const objectKey = `${Date.now()}-${name.replace(/[^a-zA-Z0-9._-]/g, '_')}`
      const objectId = await uploadToOss(t.access_token, objectKey, bytes)
      const urn = toUrn(objectId)
      await startJob(t.access_token, urn)
      return json({ urn })
    }

    return json({ error: 'unknown action' }, 400)
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : String(e) }, 500)
  }
})
