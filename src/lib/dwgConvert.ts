// Talks to the `dwg-convert` Edge Function (DWG -> DXF via CloudConvert). The API key stays
// server-side; this only ever receives a job id and, on completion, a DXF URL in our own storage.
import { supabase } from './supabase'

const FN_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/dwg-convert`
const ANON = import.meta.env.VITE_SUPABASE_ANON_KEY as string

async function call(action: string, payload: Record<string, unknown> = {}) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    apikey: ANON,
    Authorization: `Bearer ${ANON}`,
  }
  const { data } = await supabase.auth.getSession()
  if (data.session) headers.Authorization = `Bearer ${data.session.access_token}`
  const res = await fetch(FN_URL, { method: 'POST', headers, body: JSON.stringify({ action, ...payload }) })
  return res.json()
}

export interface DwgStart { jobId?: string; error?: string }
export interface DwgStatus { status?: string; dxfUrl?: string; message?: string; error?: string }

/** Teacher-only: start a DWG->DXF conversion job. Returns a CloudConvert job id. */
export const dwgConvertStart = (url: string, name: string): Promise<DwgStart> =>
  call('start', { url, name })

/** Poll a conversion job. On 'finished' returns dxfUrl (a .dxf in our storage). */
export const dwgConvertStatus = (jobId: string, name: string): Promise<DwgStatus> =>
  call('status', { jobId, name })
