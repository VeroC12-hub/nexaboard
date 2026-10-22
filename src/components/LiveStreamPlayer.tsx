import { useState } from 'react'
import { Maximize2, Minimize2, Radio, X } from 'lucide-react'
import { youTubeEmbedUrl } from '../lib/live'

interface Props {
  videoId: string
  /**
   * 'full' fills the positioned parent (the Live tab); 'mini' floats in a
   * corner so the stream keeps playing while the student looks at the board,
   * notes or a drawing.
   */
  mode: 'full' | 'mini'
  onExpand?: () => void
  onShrink?: () => void
}

/**
 * The class's live stream, embedded so learners never leave NexaBoard.
 *
 * Always ONE iframe. The parent keeps this component mounted in the same
 * place in the tree and only the mode changes, so switching between the Live
 * tab and the corner player restyles the frame instead of reloading it, and
 * the stream does not restart or play twice.
 */
export default function LiveStreamPlayer({ videoId, mode, onExpand, onShrink }: Props) {
  const [hidden, setHidden] = useState(false)
  const mini = mode === 'mini'

  const tucked = mini && hidden

  return (
    <>
    {tucked && (
      <button onClick={() => setHidden(false)}
        className="fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-full bg-[#1b2b4b] px-4 py-2.5 text-sm font-semibold text-white shadow-2xl hover:bg-[#243660]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /> Show live stream
      </button>
    )}
    <div
      // Tucked away rather than unmounted, so the sound carries on and the
      // stream does not restart when it is brought back.
      style={tucked ? { position: 'fixed', left: -9999, width: 320, height: 180, opacity: 0, pointerEvents: 'none' } : undefined}
      className={mini
        ? 'fixed bottom-4 left-4 z-40 w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl'
        : 'absolute inset-0 z-10 flex flex-col bg-black'}
    >
      <div className="flex items-center gap-2 bg-[#1b2b4b] px-3 py-1.5 text-white">
        <Radio size={13} className="text-red-400" />
        <span className="text-xs font-semibold">Live stream</span>
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
        <div className="ml-auto flex items-center gap-1">
          {mini ? (
            <>
              {onExpand && (
                <button onClick={onExpand} title="Watch large" className="rounded p-1 text-white/70 hover:bg-white/10 hover:text-white">
                  <Maximize2 size={13} />
                </button>
              )}
              <button onClick={() => setHidden(true)} title="Hide the picture (sound keeps playing)" className="rounded p-1 text-white/70 hover:bg-white/10 hover:text-white">
                <X size={13} />
              </button>
            </>
          ) : onShrink && (
            <button onClick={onShrink} title="Shrink to a corner and go back to the board"
              className="flex items-center gap-1 rounded px-2 py-1 text-xs text-white/80 hover:bg-white/10 hover:text-white">
              <Minimize2 size={13} /> Watch small
            </button>
          )}
        </div>
      </div>
      <div className={mini ? 'aspect-video w-full' : 'min-h-0 flex-1'}>
        <iframe
          key={videoId}
          src={youTubeEmbedUrl(videoId)}
          title="Live class stream"
          className="h-full w-full"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
    </>
  )
}
