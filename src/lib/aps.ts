// Autodesk Platform Services (APS) helper — talks to the `aps-viewer` Supabase Edge Function.
// The Edge Function holds the APS client secret; the browser only ever receives a short-lived
// viewables:read token, never the secret.
import { supabase } from './supabase'

const FN_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/aps-viewer`
const ANON = import.meta.env.VITE_SUPABASE_ANON_KEY as string

async function call(action: string, payload: Record<string, unknown> = {}, asTeacher = false) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    apikey: ANON,
    Authorization: `Bearer ${ANON}`,
  }
  // Teacher-only actions (translate) carry the logged-in user's token so the function can verify them.
  if (asTeacher) {
    const { data } = await supabase.auth.getSession()
    if (data.session) headers.Authorization = `Bearer ${data.session.access_token}`
  }
  const res = await fetch(FN_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ action, ...payload }),
  })
  return res.json()
}

export interface ApsToken { access_token: string; expires_in: number; error?: string }
export interface ApsTranslate { urn?: string; error?: string }
export interface ApsStatus { status?: string; progress?: string; error?: string }

/** Short-lived viewer token (viewables:read). Safe to call from any client, including anonymous students. */
export const apsToken = (): Promise<ApsToken> => call('token')

/** Teacher-only: upload a DWG/DXF (by its public URL) to APS and kick off SVF2 translation. Returns the URN. */
export const apsTranslate = (url: string, name: string): Promise<ApsTranslate> =>
  call('translate', { url, name }, true)

/** Poll Model Derivative translation progress for a URN. */
export const apsStatus = (urn: string): Promise<ApsStatus> => call('status', { urn })
