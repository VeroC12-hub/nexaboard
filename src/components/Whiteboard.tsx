import { useEffect, useRef, useCallback } from 'react'
import { Excalidraw } from '@excalidraw/excalidraw'
import type { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types'
import { supabase } from '../lib/supabase'

interface Props {
  sessionId: string
  isTeacher: boolean
  canDraw: boolean
}

export default function Whiteboard({ sessionId, isTeacher, canDraw }: Props) {
  const apiRef = useRef<ExcalidrawImperativeAPI | null>(null)
  const isBroadcasting = useRef(false)
  const lastBroadcast = useRef(0)

  // Teacher is ALWAYS editable — only lock students without access
  const locked = !isTeacher && !canDraw

  useEffect(() => {
    const channel = supabase
      .channel(`whiteboard:${sessionId}`)
      .on('broadcast', { event: 'wb_update' }, ({ payload }) => {
        if (!apiRef.current) return
        if (isBroadcasting.current) return
        apiRef.current.updateScene({ elements: payload.elements })
      })
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [sessionId])

  const broadcastChange = useCallback(async (elements: readonly unknown[]) => {
    const now = Date.now()
    if (now - lastBroadcast.current < 80) return
    lastBroadcast.current = now
    isBroadcasting.current = true
    await supabase.channel(`whiteboard:${sessionId}`).send({
      type: 'broadcast',
      event: 'wb_update',
      payload: { elements },
    })
    setTimeout(() => { isBroadcasting.current = false }, 100)
  }, [sessionId])

  return (
    <div className="h-full w-full relative">
      {locked && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur border border-green-200 rounded-full px-4 py-1.5 text-xs text-[#6b7280] pointer-events-none shadow-sm">
          View only — click "Request Board" to draw
        </div>
      )}
      {!locked && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-[#1b2b4b]/80 backdrop-blur text-white rounded-full px-4 py-1.5 text-xs pointer-events-none shadow-md animate-pulse">
          ✏️ Click anywhere on the board to start drawing
        </div>
      )}
      <Excalidraw
        excalidrawAPI={api => { apiRef.current = api }}
        viewModeEnabled={locked}
        initialData={{ appState: { viewModeEnabled: locked } }}
        onChange={elements => { if (!locked) broadcastChange(elements) }}
        theme="light"
        UIOptions={{
          canvasActions: {
            export: false,
            loadScene: false,
            saveToActiveFile: false,
            saveAsImage: isTeacher,
          },
        }}
      />
    </div>
  )
}
