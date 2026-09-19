/**
 * The Remotion entry point.
 *
 * Registers one composition. Its dimensions and duration come from the
 * storyboard passed in as props, which is why `calculateMetadata` exists: a
 * four year old's video is four short scenes and a university one is ten long
 * ones, and neither should be padded or cut to a fixed length.
 *
 * 1280x720 rather than 1080p on purpose. This is type and diagrams, not
 * footage, so the extra pixels buy nothing and cost a learner on a metered
 * connection real money.
 */

import { Composition } from 'remotion'
import { Lesson } from './Lesson'
import {
  FPS, STYLES, sceneSeconds,
  type Storyboard,
} from '../src/lib/education/storyboard'

/** Shown in the Remotion studio when no storyboard is passed. */
const SAMPLE: Storyboard = {
  topicId: 'count-to-five',
  topic: 'Counting to five',
  style: 'early',
  scenes: [
    {
      say: 'Let us count the mangoes together.',
      seconds: 5,
      title: 'How many mangoes?',
      items: ['🥭', '🥭', '🥭'],
    },
    {
      say: 'Three mangoes. Now you tap three.',
      seconds: 4,
      title: '3',
      note: 'Then the game asks them to tap three.',
    },
  ],
}

export const RemotionRoot: React.FC = () => (
  <Composition
    id="Lesson"
    component={Lesson}
    durationInFrames={Math.round(9 * FPS)}
    fps={FPS}
    width={1280}
    height={720}
    defaultProps={{ board: SAMPLE }}
    calculateMetadata={({ props }) => {
      const board = (props.board ?? SAMPLE) as Storyboard
      const style = STYLES[board.style] ? board.style : 'school'
      const seconds = board.scenes.reduce((n, s) => n + sceneSeconds(s, style), 0)
      return {
        /* At least a second, so a one scene board still produces a file. */
        durationInFrames: Math.max(FPS, Math.round(seconds * FPS)),
        props: { ...props, board: { ...board, style } },
      }
    }}
  />
)
