import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../supabase'
import { currentProfile, schemaReady, type Profile } from './api'

export type AuthState =
  | { status: 'loading' }
  /** Tables are missing. Different from "no data", and must not look the same. */
  | { status: 'no-schema'; message: string }
  | { status: 'signed-out' }
  | { status: 'error'; message: string }
  | { status: 'ready'; profile: Profile }

/**
 * Signs the user in and resolves who they are.
 *
 * The role comes from the profiles row, never from anything the client picked.
 * That matters: the rail is built from this value, and the same value is what
 * RLS uses server-side, so the two cannot drift.
 */
export function useSchoolAuth() {
  const [state, setState] = useState<AuthState>({ status: 'loading' })

  const load = useCallback(async () => {
    setState({ status: 'loading' })
    try {
      const schema = await schemaReady()
      if (!schema.ready) {
        setState({ status: 'no-schema', message: schema.missing })
        return
      }
      const profile = await currentProfile()
      setState(profile ? { status: 'ready', profile } : { status: 'signed-out' })
    } catch (e) {
      setState({ status: 'error', message: e instanceof Error ? e.message : 'Could not sign in' })
    }
  }, [])

  useEffect(() => {
    load()
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => { load() })
    return () => subscription.unsubscribe()
  }, [load])

  return { state, reload: load }
}
