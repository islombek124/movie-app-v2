import type { CreditsCast } from './CreditsCast'

export interface Movie {
  adult: boolean
  backdrop_path: string
  genres: { id: number, name: string }[] | []
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  status: string
  video: boolean
  vote_average: number
  vote_count: number
  credits: {
    cast: CreditsCast[]
  }
  homepage: string
  imdb_id: string
}
