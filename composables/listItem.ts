interface List {
  movie: { title: string, query: string }[]
  tv: { title: string, query: string }[]
}

const lists: List = {
  movie: [
    { title: 'Trending Movies', query: 'trending' },
    { title: 'Popular Movies', query: 'popular' },
    { title: 'Top Rated Movies', query: 'top_rated' },
    { title: 'Upcoming Movies', query: 'upcoming' },
    { title: 'Now Playing Movies', query: 'now_playing' },
  ],
  tv: [
    { title: 'Trending TV Shows', query: 'trending' },
    { title: 'Popular TV Shows', query: 'popular' },
    { title: 'Top Rated TV Shows', query: 'top_rated' },
    { title: 'Currently Airing TV Shows', query: 'on_the_air' },
    { title: 'TV Shows Airing Today', query: 'airing_today' },
  ],
}

export function getListItem(type: 'movie' | 'tv', query: string): any {
  if (type === 'movie')
    return lists.movie.find(list => list.query === query)

  else if (type === 'tv')
    return lists.tv.find(list => list.query === query)
}
