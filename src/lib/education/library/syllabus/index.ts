/**
 * Loads every syllabus outline into the registry.
 *
 * Importing this file for its side effects is the whole interface. Each stage
 * file calls `register()` as it loads, so anything that imports this and then
 * calls `syllabusFor(stage, subjectId)` sees the full set.
 *
 * Imported once, by `subjects.ts`, because that is the module every screen
 * already goes through to find out what there is to study. Nothing else needs
 * to know these files exist.
 */

import './creche'
import './primary'
import './jhs'
import './shs-core'
import './shs-electives'
import './tvet'
import './uni'
