export interface TV {
  adult: boolean
  backdrop_path: string
  created_by: { id: number, name: string }[] | []
  episode_run_time: number[]
  first_air_date: string
  genres: { id: number, name: string }[] | []
  homepage: string
  last_air_date: string
  networks: { name: string }[] | []
  number_of_episodes: number
  number_of_seasons: number
  id: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  name: string
  vote_average: number
  vote_count: number
  status: string
}
