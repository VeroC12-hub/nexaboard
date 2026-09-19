import { supabase } from '../supabase'

/**
 * Learning resources.
 *
 * Reads edu_content_items exactly as Stage One defined it. There is no second
 * library model: a resource is a content item, its link to an objective is
 * edu_content_objectives, and its link to a lesson is edu_lesson_content. §5
 * needed no new table and none was added.
 *
 * Nor is there a resource-progress table. Resource consumption would be a
 * different fact from lesson progress, but no requirement here depends on
 * persisting it: how far into a video a learner scrubbed is playback state, not
 * an educational record, and adding a table so the interface can draw a bar is
 * exactly the duplication Stage One forbids. edu_learner_lesson_progress stays
 * the one authoritative record of what a learner has worked through.
 *
 * Every field below already exists on the row. Nothing about bandwidth, file
 * size or duration is estimated.
 */

/** How a resource is presented. Derived from `kind`, never assumed from the URI. */
export type ViewerKind = 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'TEXT' | 'LINK' | 'UNKNOWN'

export interface Resource {
  id: string
  title: string
  kind: string
  viewer: ViewerKind
  author: string | null
  publisher: string | null
  language: string | null
  /** Null when the item is approved but has no file attached yet. */
  uri: string | null
  sizeBytes: number | null
  durationSeconds: number | null
  pageCount: number | null
  /** A smaller alternative, present only when one was actually authored. */
  lite: { uri: string; sizeBytes: number | null } | null
  difficulty: string | null
  downloadable: boolean
  /** True when there is nothing to open, in either form. */
  unavailable: boolean
}

/**
 * Which viewer a kind maps to.
 *
 * Kinds not listed here are still shown, as a link, rather than hidden. A kind
 * the interface has not been taught about is a gap in this map, not a reason to
 * withhold a resource a teacher approved.
 */
const VIEWER: Record<string, ViewerKind> = {
  VIDEO: 'VIDEO',
  ANIMATION: 'VIDEO',
  AUDIO: 'AUDIO',
  PODCAST: 'AUDIO',
  TEXTBOOK: 'DOCUMENT',
  HANDOUT: 'DOCUMENT',
  SLIDES: 'DOCUMENT',
  WORKSHEET: 'DOCUMENT',
  PAST_PAPER: 'DOCUMENT',
  NOTE: 'TEXT',
  ARTICLE: 'TEXT',
  LINK: 'LINK',
}

const SELECT =
  'id, title, kind, author, publisher, language, uri, size_bytes, duration_seconds, ' +
  'page_count, lite_uri, lite_size_bytes, difficulty, is_downloadable, approval'

type Row = {
  id: string; title: string; kind: string; author: string | null; publisher: string | null
  language: string | null; uri: string | null; size_bytes: number | null
  duration_seconds: number | null; page_count: number | null; lite_uri: string | null
  lite_size_bytes: number | null; difficulty: string | null; is_downloadable: boolean
}

function shape(r: Row): Resource {
  return {
    id: r.id,
    title: r.title,
    kind: r.kind,
    viewer: VIEWER[r.kind] ?? 'UNKNOWN',
    author: r.author,
    publisher: r.publisher,
    language: r.language,
    uri: r.uri,
    sizeBytes: r.size_bytes,
    durationSeconds: r.duration_seconds,
    pageCount: r.page_count,
    lite: r.lite_uri ? { uri: r.lite_uri, sizeBytes: r.lite_size_bytes } : null,
    difficulty: r.difficulty,
    downloadable: r.is_downloadable,
    unavailable: !r.uri && !r.lite_uri,
  }
}

/**
 * Opens one approved resource.
 *
 * The approval filter is stated here as well as enforced by edu_content_read.
 * RLS is the boundary; this makes the intent legible at the call site. Returns
 * null when the resource does not exist or is not approved, which from the
 * learner's side are deliberately the same answer.
 */
export async function openResource(contentId: string): Promise<Resource | null> {
  const { data, error } = await supabase
    .from('edu_content_items')
    .select(SELECT)
    .eq('id', contentId)
    .eq('approval', 'APPROVED')
    .maybeSingle()
  if (error) throw error
  return data ? shape(data as unknown as Row) : null
}

/** Approved resources attached to a lesson, in the order the lesson sets. */
export async function resourcesForLesson(lessonId: string): Promise<Resource[]> {
  const { data, error } = await supabase
    .from('edu_lesson_content')
    .select(`sequence, edu_content_items!inner(${SELECT})`)
    .eq('lesson_id', lessonId)
    .eq('edu_content_items.approval', 'APPROVED')
    .order('sequence')
  if (error) throw error
  return (data ?? []).map(r => shape(r.edu_content_items as unknown as Row))
}

/** Human file size. Returns null rather than inventing a figure when unknown. */
export function fileSize(bytes: number | null): string | null {
  if (bytes === null || bytes < 0) return null
  if (bytes < 1024) return `${bytes} B`
  const units = ['KB', 'MB', 'GB']
  let v = bytes / 1024
  let i = 0
  while (v >= 1024 && i < units.length - 1) { v /= 1024; i++ }
  return `${v < 10 ? v.toFixed(1) : Math.round(v)} ${units[i]}`
}

/** Runtime as minutes and seconds. Null when the row does not carry a duration. */
export function runtime(seconds: number | null): string | null {
  if (seconds === null || seconds <= 0) return null
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return m > 0 ? `${m} min${s ? ` ${s} s` : ''}` : `${s} s`
}
