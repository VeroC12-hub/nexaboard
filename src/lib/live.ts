/**
 * Large class settings for one session: the live stream (broadcast mode) and
 * which video engine the class call uses.
 *
 * Stored as the `live` slice of sessions.whiteboard_state, beside board, notes
 * and questions, so no new table is needed and a late joiner reads it with the
 * same query that loads the lesson. Changes also go out over a realtime
 * broadcast so students already in the room switch at once.
 */
import { supabase } from './supabase'
import { saveLessonSlice } from './board'

export type VideoMode = 'auto' | 'mesh' | 'sfu'

export interface LiveStream {
  /** What the teacher pasted, kept so the form can show it again. */
  url: string
  /** YouTube video id parsed from it. */
  videoId: string
  on: boolean
  updatedAt: string
}

export interface LiveState {
  stream?: LiveStream | null
  videoMode?: VideoMode
}

/** YouTube ids are 11 characters of [A-Za-z0-9_-]. */
const ID = /^[A-Za-z0-9_-]{11}$/

/**
 * Pull the video id out of anything a teacher is likely to paste:
 *   https://www.youtube.com/watch?v=ID
 *   https://youtu.be/ID
 *   https://www.youtube.com/live/ID
 *   https://www.youtube.com/embed/ID, youtube-nocookie.com/embed/ID
 *   https://m.youtube.com/watch?v=ID, music/shorts links, or the bare id
 * Returns null for anything else, including channel and playlist links.
 */
export function parseYouTubeId(input: string): string | null {
  const raw = input.trim()
  if (!raw) return null
  if (ID.test(raw)) return raw

  let url: URL
  try {
    url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`)
  } catch {
    return null
  }

  const host = url.hostname.toLowerCase().replace(/^(www\.|m\.|music\.)/, '')
  const parts = url.pathname.split('/').filter(Boolean)

  if (host === 'youtu.be') {
    return parts[0] && ID.test(parts[0]) ? parts[0] : null
  }
  if (host !== 'youtube.com' && host !== 'youtube-nocookie.com') return null

  const v = url.searchParams.get('v')
  if (v && ID.test(v)) return v

  if (parts.length >= 2 && ['live', 'embed', 'shorts', 'v', 'e'].includes(parts[0]) && ID.test(parts[1])) {
    return parts[1]
  }
  return null
}

/** The privacy enhanced player, so students are not tracked by YouTube cookies. */
export function youTubeEmbedUrl(videoId: string): string {
  const params = new URLSearchParams({
    autoplay: '1',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  })
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params}`
}

/** Reads only the live slice (a JSON path select), not the whole lesson blob. */
export async function loadLiveState(sessionId: string): Promise<LiveState> {
  const { data, error } = await supabase
    .from('sessions')
    .select('live:whiteboard_state->live')
    .eq('id', sessionId)
    .maybeSingle()
  if (error || !data) return {}
  return parseLiveState((data as { live?: unknown }).live)
}

export function parseLiveState(raw: unknown): LiveState {
  if (!raw || typeof raw !== 'object') return {}
  const r = raw as Record<string, unknown>
  const out: LiveState = {}
  const s = r.stream as Record<string, unknown> | null | undefined
  if (s && typeof s === 'object' && typeof s.videoId === 'string' && ID.test(s.videoId)) {
    out.stream = {
      url: typeof s.url === 'string' ? s.url : s.videoId,
      videoId: s.videoId,
      on: s.on === true,
      updatedAt: typeof s.updatedAt === 'string' ? s.updatedAt : new Date(0).toISOString(),
    }
  }
  if (r.videoMode === 'auto' || r.videoMode === 'mesh' || r.videoMode === 'sfu') out.videoMode = r.videoMode
  return out
}

/** Teacher only: persist, then tell the room. */
export async function saveLiveState(sessionId: string, state: LiveState): Promise<void> {
  await saveLessonSlice(sessionId, { live: state })
}

export const liveChannelName = (sessionId: string) => `live:${sessionId}`
export const LIVE_EVENT = 'live_state'

/** A broadcast mode stream is showing to students right now. */
export const isBroadcasting = (s: LiveState) => !!s.stream?.on

/**
 * Should this class use the SFU (LiveKit)?
 * 'auto' picks the SFU whenever it is configured, otherwise direct (mesh).
 */
export function resolveVideoEngine(mode: VideoMode | undefined, sfuConfigured: boolean): 'mesh' | 'sfu' {
  if (mode === 'mesh') return 'mesh'
  if (mode === 'sfu') return sfuConfigured ? 'sfu' : 'mesh'
  return sfuConfigured ? 'sfu' : 'mesh'
}

// ── Realtime capacity ────────────────────────────────────────────────────────
//
// Supabase counts every broadcast once per RECEIVER. The free tier allows 100
// messages a second for the whole project (Pro: 500), so a teacher's pen
// streaming 16 updates a second to 100 learners is 1,600 a second and gets
// throttled. In a large class the board batches its live updates instead.
// The finished stroke is always sent whole, so nothing is lost, it is only
// drawn in steps rather than as a smooth line.

let largeClass = false
export const LARGE_CLASS_THRESHOLD = 25

export function setLargeClass(on: boolean) { largeClass = on }
export function isLargeClass() { return largeClass }

/** Minimum gap between live pen or pointer updates, in milliseconds. */
export function liveUpdateGap(normalMs: number): number {
  return largeClass ? Math.max(normalMs, 400) : normalMs
}

/** Ask the SFU token endpoint whether LiveKit is set up on this deployment. */
let sfuStatus: Promise<boolean> | null = null
export function sfuConfigured(): Promise<boolean> {
  if (!sfuStatus) {
    sfuStatus = fetch('/api/livekit-token', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'status' }),
    })
      .then(async r => {
        if (!r.ok) return false
        const j = await r.json().catch(() => null) as { configured?: boolean } | null
        return j?.configured === true
      })
      .catch(() => false)
  }
  return sfuStatus
}

