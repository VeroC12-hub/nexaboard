/**
 * Remotion's own entry. Kept separate from the app's `src/main.tsx`: the video
 * is rendered by a headless browser in a worker, not served to anybody.
 */
import { registerRoot } from 'remotion'
import { RemotionRoot } from './Root'

registerRoot(RemotionRoot)
