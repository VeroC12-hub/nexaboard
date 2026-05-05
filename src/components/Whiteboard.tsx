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

  useEffect(() => {
    // Subscribe to whiteboard state updates from others
    const channel = supabase
      .channel(`whiteboard:${sessionId}`)
      .on('broadcast', { event: 'wb_update' }, ({ payload }) => {
        if (!apiRef.current) return
        // Don't apply if we're the broadcaster
        if (isBroadcasting.current) return
        apiRef.current.updateScene({
          elements: payload.elements,
        })
      })
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [sessionId])

  const broadcastChange = useCallback(async (elements: readonly unknown[]) => {
    const now = Date.now()
    if (now - lastBroadcast.current < 80) return // throttle to ~12fps
    lastBroadcast.current = now

    isBroadcasting.current = true
    await supabase.channel(`whiteboard:${sessionId}`).send({
      type: 'broadcast',
      event: 'wb_update',
      payload: { elements },
    })
    setTimeout(() => { isBroadcasting.current = false }, 100)
  }, [sessionId])

  const viewModeEnabled = !canDraw

  return (
    <div className="h-full w-full relative">
      {!canDraw && !isTeacher && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-400 pointer-events-none">
          View only — request board access to draw
        </div>
      )}
      <Excalidraw
        excalidrawAPI={api => { apiRef.current = api }}
        viewModeEnabled={viewModeEnabled}
        onChange={(elements) => {
          if (canDraw || isTeacher) {
            broadcastChange(elements)
          }
        }}
        theme="dark"
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
