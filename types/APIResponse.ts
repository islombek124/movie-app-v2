import type { ResultMedia } from './ResultMedia'

export interface APIResponse {
  page: number
  results: ResultMedia[]
  total_pages: number
  total_results: number
}
