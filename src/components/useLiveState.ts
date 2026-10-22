import { useCallback, useEffect, useRef, useState } from 'react'
import type { RealtimeChannel } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import {
  LIVE_EVENT, liveChannelName, loadLiveState, parseLiveState, saveLiveState,
  sfuConfigured, type LiveState,
} from '../lib/live'

/**
 * The session's live settings (broadcast stream, video engine), kept in sync.
 *
 * A change reaches a student as a realtime broadcast the moment the teacher
 * saves; anybody who joins late reads the stored value. The teacher's
 * `publish` writes the database first, then broadcasts.
 */
export function useLiveState(sessionId: string | undefined) {
  const [state, setState] = useState<LiveState>({})
  const [loaded, setLoaded] = useState(false)
  const [sfu, setSfu] = useState(false)
  const chRef = useRef<RealtimeChannel | null>(null)

  useEffect(() => {
    let alive = true
    sfuConfigured().then(ok => { if (alive) setSfu(ok) })
    return () => { alive = false }
  }, [])

  useEffect(() => {
    if (!sessionId) return
    let alive = true
    const load = () => loadLiveState(sessionId)
      .then(s => { if (alive) setState(s) })
      .catch(() => {})
      .finally(() => { if (alive) setLoaded(true) })

    // Deliberately no "ask the teacher" request on join and no second
    // postgres_changes listener: with 100 learners each would fan out to the
    // whole room and eat the realtime message budget. The stored value is
    // authoritative because publish() writes it before broadcasting, so a
    // late joiner simply reads it, once more after subscribing to close the
    // gap between the first read and the subscription.
    const ch = supabase.channel(liveChannelName(sessionId))
      .on('broadcast', { event: LIVE_EVENT }, ({ payload }) => setState(parseLiveState(payload)))
      .subscribe(status => { if (status === 'SUBSCRIBED') load() })
    chRef.current = ch

    return () => {
      alive = false
      chRef.current = null
      supabase.removeChannel(ch)
    }
  }, [sessionId])

  const publish = useCallback(async (next: LiveState) => {
    if (!sessionId) return
    await saveLiveState(sessionId, next)
    setState(next)
    chRef.current?.send({ type: 'broadcast', event: LIVE_EVENT, payload: next })
  }, [sessionId])

  return { state, loaded, sfuConfigured: sfu, publish }
}
