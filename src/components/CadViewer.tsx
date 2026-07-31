// Renders a translated CAD model (DWG/DXF → SVF2) using the Autodesk Platform Services Viewer.
// The viewer SDK is loaded from Autodesk's CDN on first use; tokens come from our Edge Function.
import { useEffect, useRef, useState } from 'react'
import { apsToken } from '../lib/aps'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global { interface Window { Autodesk: any } }

const VERSION = '7.*'
const CSS_URL = `https://developer.api.autodesk.com/modelderivative/v2/viewers/${VERSION}/style.min.css`
const JS_URL = `https://developer.api.autodesk.com/modelderivative/v2/viewers/${VERSION}/viewer3D.min.js`

let sdkPromise: Promise<void> | null = null
function loadSdk(): Promise<void> {
  if (sdkPromise) return sdkPromise
  sdkPromise = new Promise<void>((resolve, reject) => {
    if (!document.querySelector(`link[data-aps-css]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'; link.href = CSS_URL; link.setAttribute('data-aps-css', '')
      document.head.appendChild(link)
    }
    if (window.Autodesk?.Viewing) { resolve(); return }
    const s = document.createElement('script')
    s.src = JS_URL
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Failed to load the Autodesk Viewer'))
    document.head.appendChild(s)
  })
  return sdkPromise
}

export default function CadViewer({ urn }: { urn: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let viewer: any = null

    const init = async () => {
      try {
        await loadSdk()
        if (cancelled || !ref.current) return
        const Autodesk = window.Autodesk

        await new Promise<void>((resolve) => {
          Autodesk.Viewing.Initializer(
            {
              env: 'AutodeskProduction',
              api: 'streamingV2',
              getAccessToken: async (cb: (token: string, expires: number) => void) => {
                const t = await apsToken()
                cb(t.access_token, t.expires_in)
              },
            },
            () => resolve(),
          )
        })
        if (cancelled || !ref.current) return

        viewer = new Autodesk.Viewing.GuiViewer3D(ref.current)
        viewer.start()

        Autodesk.Viewing.Document.load(
          'urn:' + urn,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (doc: any) => {
            if (cancelled) return
            const node = doc.getRoot().getDefaultGeometry()
            viewer.loadDocumentNode(doc, node)
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (code: any) => { if (!cancelled) setError(`Could not load the drawing (error ${code}).`) },
        )
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e))
      }
    }
    init()

    return () => {
      cancelled = true
      try { viewer?.finish() } catch { /* ignore */ }
    }
  }, [urn])

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-red-300 text-sm p-6 text-center">
        {error}
      </div>
    )
  }
  return <div ref={ref} className="relative w-full h-full bg-[#2b2b2b]" />
}
