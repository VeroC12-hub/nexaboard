/**
 * Creche, nursery and KG lessons.
 *
 * The youngest stage, and the smallest chunk. A parent opening the app for
 * a four year old downloads these and nothing else.
 *
 * Imported for its side effect only: importing a file registers what is in
 * it. Loaded on demand by `load.ts`, never statically from the app, or the
 * split it exists for is undone.
 */

import '../creche-nursery'
import '../kg1-numeracy'
import '../kg1-literacy'
import '../kg1-owop-arts'
import '../kg2-numeracy'
import '../kg2-literacy'
import '../kg2-owop-arts'
