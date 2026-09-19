import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    /**
     * The Remotion bundle, which is a different kind of React.
     *
     * `video/` is never served to anybody: a headless browser renders each
     * frame of it and ffmpeg encodes the result. So the rules that keep a live
     * app from re-rendering badly, and the Fast Refresh rules that assume a dev
     * server, describe a situation that does not exist here. Excluded rather
     * than worked around, because bending the video code to satisfy rules about
     * a page it will never be would make it worse.
     */
    files: ['video/**/*.{ts,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['video/**'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])
