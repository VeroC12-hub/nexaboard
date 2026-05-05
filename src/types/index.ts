export interface Session {
  id: string
  teacher_id: string
  title: string
  subject: string
  join_code: string
  status: 'active' | 'ended'
  whiteboard_state: unknown
  created_at: string
  ended_at: string | null
}

export interface Participant {
  id: string
  session_id: string
  name: string
  is_active: boolean
  has_board_access: boolean
  hand_raised: boolean
  joined_at: string
}

export interface ChatMessage {
  id: string
  session_id: string
  participant_id: string | null
  sender_name: string
  is_teacher: boolean
  content: string
  created_at: string
}

export interface BoardRequest {
  id: string
  session_id: string
  participant_id: string
  participant_name: string
  status: 'pending' | 'granted' | 'denied'
  created_at: string
}
