import { useState } from 'react'
import toast from 'react-hot-toast'
import { Radio, X, Video, Users, CheckCircle2, AlertTriangle } from 'lucide-react'
import { parseYouTubeId, resolveVideoEngine, type LiveState, type VideoMode } from '../lib/live'
import LiveStreamPlayer from './LiveStreamPlayer'

interface Props {
  state: LiveState
  sfuConfigured: boolean
  publish: (next: LiveState) => Promise<void>
  onClose: () => void
}

/**
 * Teacher controls for a large class: attach a YouTube Live stream that plays
 * inside NexaBoard for every student, and choose the video engine.
 */
export default function LargeClassPanel({ state, sfuConfigured, publish, onClose }: Props) {
  const [url, setUrl] = useState(state.stream?.url ?? '')
  const [busy, setBusy] = useState(false)
  const [preview, setPreview] = useState(false)
  const parsedId = parseYouTubeId(url)
  const on = !!state.stream?.on
  const mode: VideoMode = state.videoMode ?? 'auto'
  const engine = resolveVideoEngine(mode, sfuConfigured)

  const save = async (next: LiveState, ok: string) => {
    setBusy(true)
    try {
      await publish(next)
      toast.success(ok)
    } catch (e) {
      toast.error(`Could not save: ${(e as Error).message}`)
    } finally {
      setBusy(false)
    }
  }

  const startBroadcast = () => {
    if (!parsedId) { toast.error('That does not look like a YouTube video or live link.'); return }
    save({
      ...state,
      stream: { url: url.trim(), videoId: parsedId, on: true, updatedAt: new Date().toISOString() },
    }, 'Broadcast is on. Students now see the stream inside NexaBoard.')
  }

  const stopBroadcast = () => {
    if (!state.stream) return
    save({ ...state, stream: { ...state.stream, on: false, updatedAt: new Date().toISOString() } },
      'Broadcast is off. Students are back to the normal class view.')
  }

  const removeStream = () => {
    save({ ...state, stream: null }, 'Stream link removed.')
    setUrl('')
  }

  const setMode = (m: VideoMode) => save({ ...state, videoMode: m }, 'Video setting saved.')

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4" onClick={onClose}>
      <div className="mt-10 w-full max-w-xl rounded-2xl border border-green-100 bg-white shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-2 border-b border-green-100 px-5 py-3">
          <Users size={16} className="text-[#008FA6]" />
          <h2 className="font-bold text-[#1b2b4b]">Large class</h2>
          <button onClick={onClose} className="ml-auto rounded p-1 text-[#9ca3af] hover:bg-gray-100 hover:text-[#1b2b4b]"><X size={16} /></button>
        </div>

        {/* ── Broadcast ─────────────────────────────────────────────── */}
        <section className="space-y-3 px-5 py-4">
          <div className="flex items-center gap-2">
            <Radio size={15} className={on ? 'text-red-500' : 'text-[#6b7280]'} />
            <h3 className="text-sm font-bold text-[#1b2b4b]">Broadcast mode</h3>
            {on && <span className="rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-600">ON AIR</span>}
          </div>
          <p className="text-xs leading-relaxed text-[#6b7280]">
            For big classes. Go live on YouTube (set it to <b>Unlisted</b>), paste the link here and switch it on.
            Every student watches it inside this session, so they keep the board, notes, chat, questions and
            drawings in the same window. Student video calling is switched off while broadcasting, which is what
            lets 100+ people join without overloading your laptop.
          </p>
          <input
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://youtube.com/live/... or https://youtu.be/..."
            className="w-full rounded-lg border border-green-200 bg-[#f3fcf0] px-3 py-2.5 text-sm text-[#1b2b4b] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#008FA6]"
          />
          <div className="text-xs">
            {url.trim() === '' ? (
              <span className="text-[#9ca3af]">Accepts watch?v=, youtu.be, /live/ and /embed/ links.</span>
            ) : parsedId ? (
              <span className="flex items-center gap-1 text-[#008FA6]"><CheckCircle2 size={12} /> Video found: {parsedId}</span>
            ) : (
              <span className="flex items-center gap-1 text-amber-600"><AlertTriangle size={12} /> Not a YouTube video link. Channel and playlist links will not work.</span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {on ? (
              <button onClick={stopBroadcast} disabled={busy}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-50">
                Stop broadcast
              </button>
            ) : (
              <button onClick={startBroadcast} disabled={busy || !parsedId}
                className="rounded-lg bg-[#008FA6] px-4 py-2 text-sm font-semibold text-white hover:bg-[#007588] disabled:opacity-40">
                Start broadcast
              </button>
            )}
            {on && parsedId && parsedId !== state.stream?.videoId && (
              <button onClick={startBroadcast} disabled={busy}
                className="rounded-lg border border-[#008FA6] px-4 py-2 text-sm font-semibold text-[#008FA6] hover:bg-[#008FA6]/5">
                Switch to this link
              </button>
            )}
            {parsedId && (
              <button onClick={() => setPreview(p => !p)}
                className="rounded-lg border border-green-200 bg-[#f3fcf0] px-3 py-2 text-sm text-[#1b2b4b] hover:bg-green-100">
                {preview ? 'Hide preview' : 'Preview'}
              </button>
            )}
            {state.stream && !on && (
              <button onClick={removeStream} disabled={busy}
                className="rounded-lg px-3 py-2 text-sm text-[#6b7280] hover:text-red-500">
                Remove link
              </button>
            )}
          </div>
          {preview && parsedId && (
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <LiveStreamPlayer videoId={parsedId} mode="full" />
            </div>
          )}
          <p className="text-[11px] text-[#9ca3af]">
            Tip: mute the preview, or your microphone will hear the stream. YouTube adds a delay of a few seconds;
            choose "Ultra low latency" in YouTube Studio to keep questions in step.
          </p>
        </section>

        {/* ── Video engine ──────────────────────────────────────────── */}
        <section className="space-y-3 border-t border-green-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <Video size={15} className="text-[#6b7280]" />
            <h3 className="text-sm font-bold text-[#1b2b4b]">Class video call</h3>
          </div>
          <div className="grid gap-2">
            {([
              ['auto', 'Automatic', 'Large class video when it is set up, otherwise direct.'],
              ['mesh', 'Direct (small class)', 'Your laptop sends to each student. Good up to about 6 to 8 people.'],
              ['sfu', 'Large class video (LiveKit)', 'A media server relays your camera and screen. Scales to 100+; students can be invited to speak.'],
            ] as const).map(([value, label, help]) => (
              <label key={value}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2 ${mode === value ? 'border-[#008FA6] bg-[#008FA6]/5' : 'border-green-100 hover:bg-[#f3fcf0]'}`}>
                <input type="radio" name="videoMode" className="mt-1 accent-[#008FA6]" checked={mode === value}
                  disabled={busy} onChange={() => setMode(value)} />
                <span>
                  <span className="block text-sm font-semibold text-[#1b2b4b]">{label}</span>
                  <span className="block text-xs text-[#6b7280]">{help}</span>
                </span>
              </label>
            ))}
          </div>
          <div className={`rounded-lg px-3 py-2 text-xs ${sfuConfigured ? 'bg-[#008FA6]/10 text-[#00687a]' : 'bg-amber-50 text-amber-700'}`}>
            {sfuConfigured
              ? <>LiveKit is set up. This class will use <b>{engine === 'sfu' ? 'large class video' : 'direct video'}</b>.</>
              : <>Large class video is not configured on this deployment yet (LiveKit keys missing), so calls use direct video.
                  For more than about 8 people, use broadcast mode above.</>}
          </div>
        </section>
      </div>
    </div>
  )
}
