// ============================================
// KOMIKARA - TypeScript Type Definitions
// Sesuai dengan Backend Laravel Models
// ============================================

// --- User & Auth ---

export type UserRole = 'user' | 'admin' | 'publisher'

export interface User {
  id: number
  name: string
  email: string
  role: UserRole
  email_verified_at: string | null
  created_at: string
  updated_at: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export interface AuthResponse {
  user: User
  token: string
  message: string
}

// --- Komik ---

export type KomikType = 'manga' | 'manhwa' | 'manhua' | 'novel'
export type KomikStatus = 'ongoing' | 'completed' | 'hiatus'

export interface Komik {
  id: number
  title: string
  slug: string
  description: string
  thumbnail: string | null
  type: KomikType
  status: KomikStatus
  publisher_id: number | null
  publisher?: Publisher
  authors?: AuthorPivot[]
  genres?: Genre[]
  chapters?: Chapter[]
  chapters_count?: number
  created_at: string
  updated_at: string
}

export interface KomikListItem {
  id: number
  title: string
  slug: string
  thumbnail: string | null
  type: KomikType
  status: KomikStatus
  genres?: Genre[]
  chapters_count?: number
  latest_chapter?: Chapter
  updated_at: string
}

// --- Chapter ---

export interface Chapter {
  id: number
  komik_id: number
  chapter_number: number
  title: string | null
  slug: string
  created_at: string
  updated_at: string
}

export interface ChapterContent {
  id: number
  chapter_id: number
  content: string | null    // untuk novel (teks)
  image_path: string | null // untuk komik (gambar)
  step: number              // urutan halaman/gambar
}

export interface ChapterDetail extends Chapter {
  contents: ChapterContent[]
  komik?: Komik
  prev_chapter?: Chapter | null
  next_chapter?: Chapter | null
}

// --- Genre ---

export interface Genre {
  id: number
  name: string
  slug: string
}

// --- Author ---

export type AuthorRole = 'story' | 'art' | 'both'

export interface Author {
  id: number
  name: string
  slug: string
  bio: string | null
}

export interface AuthorPivot extends Author {
  pivot: {
    role: AuthorRole
  }
}

// --- Publisher ---

export interface Publisher {
  id: number
  name: string
  slug: string
  country: string | null
}

// --- Bookshelf ---

export interface BookshelfItem {
  id: number
  komik: KomikListItem
  last_read_chapter?: Chapter
  added_at: string
}

export interface ReadingHistory {
  id: number
  komik: KomikListItem
  chapter: Chapter
  read_at: string
}

// --- API Response Wrappers ---

export interface ApiResponse<T> {
  data: T
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  current_page: number
  last_page: number
  per_page: number
  total: number
  from: number | null
  to: number | null
}

export interface ApiError {
  message: string
  errors?: Record<string, string[]>
}
