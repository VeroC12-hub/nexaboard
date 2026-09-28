/**
 * The Remotion entry point.
 *
 * Two kinds of composition are registered here.
 *
 * `Lesson` renders whatever storyboard a model wrote, at whatever length that
 * storyboard needs, which is why it has `calculateMetadata`. It is the generic
 * path and it draws text and emoji.
 *
 * The rest are hand built lesson videos, drawn with the games' own art by the
 * shell in `ananse/shell.tsx`. Each one's length comes from how long its
 * narration actually takes, measured, so there is nothing to calculate at
 * render time: `lesson.seconds` is already the truth.
 *
 * 1280x720 rather than 1080p on purpose. This is type and flat drawing, not
 * footage, so the extra pixels buy nothing and cost a learner on a metered
 * connection real money.
 */

import { Composition } from 'remotion'
import { Lesson } from './Lesson'
import {
  FPS, STYLES, sceneSeconds,
  type Storyboard,
} from '../src/lib/education/storyboard'
import { frames, type Lesson as AnanseLesson } from './ananse/shell'

import { CountLesson, COUNT_LESSON } from './ananse/lessons/count-1-to-10/paint'
import { ShapesFourLesson, SHAPES_LESSON } from './ananse/lessons/shapes-four/paint'
import { ShapesAroundLesson, AROUND_LESSON } from './ananse/lessons/shapes-around/paint'
import { SortingLesson, SORTING_LESSON } from './ananse/lessons/sorting-colour-shape/paint'
import { BigSmallLesson, BIG_SMALL_LESSON } from './ananse/lessons/big-and-small/paint'
import { LongAndShortLesson, LONG_SHORT_LESSON } from './ananse/lessons/long-and-short/paint'
import { BeforeAndAfterLesson, BEFORE_AFTER_LESSON } from './ananse/lessons/before-and-after/paint'
import { BondsLesson, BONDS_LESSON } from './ananse/lessons/number-bonds-5/paint'
import { AddLesson, ADD_LESSON } from './ananse/lessons/add-with-objects/paint'
import { TakeAwayLesson, TAKE_AWAY_LESSON } from './ananse/lessons/take-away-objects/paint'

/**
 * Every hand built lesson, and the id it renders under.
 *
 * The id is `Ananse` plus the lesson's slug in pascal case, so a render is
 * `npx remotion render video/index.ts AnanseCount .renders/ananse-count-1-to-10.mp4`
 * and the file name the checker expects is derivable from the lesson id.
 */
const LESSONS: { id: string, lesson: AnanseLesson, component: React.FC }[] = [
  { id: 'AnanseCount', lesson: COUNT_LESSON, component: CountLesson },
  { id: 'AnanseShapesFour', lesson: SHAPES_LESSON, component: ShapesFourLesson },
  { id: 'AnanseShapesAround', lesson: AROUND_LESSON, component: ShapesAroundLesson },
  { id: 'AnanseSorting', lesson: SORTING_LESSON, component: SortingLesson },
  { id: 'AnanseBigSmall', lesson: BIG_SMALL_LESSON, component: BigSmallLesson },
  { id: 'AnanseLongShort', lesson: LONG_SHORT_LESSON, component: LongAndShortLesson },
  { id: 'AnanseBeforeAfter', lesson: BEFORE_AFTER_LESSON, component: BeforeAndAfterLesson },
  { id: 'AnanseBonds', lesson: BONDS_LESSON, component: BondsLesson },
  { id: 'AnanseAdd', lesson: ADD_LESSON, component: AddLesson },
  { id: 'AnanseTakeAway', lesson: TAKE_AWAY_LESSON, component: TakeAwayLesson },
]

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
  <>
    {LESSONS.map(({ id, lesson, component }) => (
      <Composition
        key={id}
        id={id}
        component={component}
        durationInFrames={frames(lesson.seconds)}
        fps={30}
        width={1280}
        height={720}
      />
    ))}
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
  </>
)
