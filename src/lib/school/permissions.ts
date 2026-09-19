import type { Role } from './api'

/**
 * The permission system.
 *
 * Built before dashboards, deliberately. A dashboard that decides its own
 * permissions inline is a dashboard that will eventually disagree with the
 * database, and the disagreement will be discovered by a user seeing something
 * they should not.
 *
 * Two layers, and only one of them is security:
 *
 *   can(role, capability)  decides what the interface SHOWS
 *   RLS in Postgres        decides what the caller is ALLOWED
 *
 * Hiding a button stops nobody who opens dev tools. This module exists so the
 * UI agrees with the database, not so it enforces anything on its own.
 */

export type Capability =
  // learning
  | 'learning.view' | 'learning.complete' | 'assessment.take' | 'assignment.submit'
  | 'tutor.ask' | 'results.view.own' | 'portfolio.build' | 'skills.track'
  | 'career.set' | 'opportunity.apply' | 'certificate.view'
  // teaching
  | 'class.manage' | 'lesson.create' | 'assignment.create' | 'work.mark'
  | 'attendance.record' | 'performance.view.class' | 'ai.teaching'
  | 'communicate.class' | 'cpd.complete' | 'profile.professional'
  // institution
  | 'school.manage' | 'staff.manage' | 'roll.manage' | 'notes.approve'
  | 'reports.release' | 'attendance.view.school' | 'billing.manage'
  // government
  | 'analytics.national' | 'analytics.region' | 'analytics.district'
  | 'analytics.school' | 'curriculum.manage' | 'programme.manage'
  | 'intervention.manage' | 'ai.analysis'
  // parent
  | 'child.view' | 'child.progress' | 'child.attendance' | 'communicate.school'

const LEARNER: Capability[] = [
  'learning.view', 'learning.complete', 'assessment.take', 'assignment.submit',
  'tutor.ask', 'results.view.own', 'portfolio.build', 'skills.track',
  'career.set', 'opportunity.apply', 'certificate.view',
]

const TEACHER: Capability[] = [
  'class.manage', 'lesson.create', 'assignment.create', 'work.mark',
  'attendance.record', 'performance.view.class', 'ai.teaching',
  'communicate.class', 'cpd.complete', 'profile.professional', 'learning.view',
]

const SCHOOL: Capability[] = [
  ...TEACHER,
  'school.manage', 'staff.manage', 'roll.manage', 'notes.approve',
  'reports.release', 'attendance.view.school', 'analytics.school',
]

export const CAPABILITIES: Record<Role, Capability[]> = {
  student: LEARNER,

  parent: ['child.view', 'child.progress', 'child.attendance',
           'communicate.school', 'certificate.view'],

  teacher: TEACHER,

  head_teacher: SCHOOL,

  school_admin: [...SCHOOL, 'billing.manage'],

  circuit_supervisor: ['analytics.school', 'analytics.district', 'ai.analysis'],

  district_officer: ['analytics.school', 'analytics.district', 'ai.analysis',
                     'programme.manage', 'intervention.manage'],

  regional_officer: ['analytics.school', 'analytics.district', 'analytics.region',
                     'ai.analysis', 'programme.manage', 'intervention.manage'],

  national: ['analytics.school', 'analytics.district', 'analytics.region',
             'analytics.national', 'ai.analysis', 'curriculum.manage',
             'programme.manage', 'intervention.manage'],
}

/**
 * What each role explicitly may NOT do.
 *
 * Written out rather than left implied by absence. A denial that exists only
 * as a missing array entry is a denial nobody reviews, and these four are the
 * ones a ministry will ask about directly.
 */
export const DENIALS: Partial<Record<Role, string[]>> = {
  student: [
    'Modify official grades',
    'Modify official attendance',
    'Modify institutional records',
  ],
  teacher: [
    'Alter government-level statistics',
    'Access learners outside their authorised institution',
    'Change official records without appropriate permission',
  ],
  head_teacher: [
    'See another institution’s data',
    'Alter national statistics',
  ],
  national: [
    'Read an individual learner’s private tutor conversations',
    'Alter a learner’s academic record',
  ],
}

export function can(role: Role, capability: Capability): boolean {
  return CAPABILITIES[role]?.includes(capability) ?? false
}

export function cannot(role: Role): string[] {
  return DENIALS[role] ?? []
}

/** Every capability a role holds, for the permissions screen and for audit. */
export function capabilitiesOf(role: Role): Capability[] {
  return CAPABILITIES[role] ?? []
}
