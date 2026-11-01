/**
 * Every stored lesson, loaded for its side effect.
 *
 * This is the whole library in one import, and the application no longer
 * uses it. It is here for the coverage scripts and for anything else that
 * genuinely needs every stage at once, because those run in node with no
 * download to pay for.
 *
 * The app loads one stage at a time through `load.ts`. Importing this file
 * from a screen would pull all four stages back into that screen’s chunk and
 * undo the split, so do not.
 *
 * The per stage lists live in `by-stage/`. A new content file is one line in
 * the file for its stage, and nothing else changes.
 */

import './by-stage/creche'
import './by-stage/primary'
import './by-stage/jhs'
import './by-stage/shs'
