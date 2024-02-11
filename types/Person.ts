import type { Image } from './Image'

export interface Person {
  id: number
  adult: boolean
  name: string
  profile_path: string
  birthday: string
  gender: number
  biography: string
  deathday: string | null
  imdb_id: string
  known_for_department: string
  place_of_birth: string
  images: {
    profiles: Image[]
  }
  combined_credits: object
}
