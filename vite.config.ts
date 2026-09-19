import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @ts-expect-error plain .mjs, no types, and it only runs in dev
import viteApi from './tools/vite-api.mjs'

export default defineConfig({
  /* viteApi serves the api/ folder in dev, which Vercel does in production.
     Without it the tutor could only be tried on a deployment. */
  plugins: [react(), tailwindcss(), viteApi()],
  optimizeDeps: {
    exclude: ['@excalidraw/excalidraw'],
  },
})
