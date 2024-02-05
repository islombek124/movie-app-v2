<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'
import type { APIResponse } from '~/types/APIResponse'
import type { Movie } from '~/types/Movie'
import type { TV } from '~/types/TV'

const { data: trendingMovies } = await useFetch<APIResponse>('/api/trending/movie')
const { data: trendingTVs } = await useFetch<APIResponse>('/api/trending/tv')
const featured = ref<any>()

const items = ref([...trendingMovies.value.results, ...trendingTVs.value.results])
const randomItem = items.value[Math.floor(Math.random() * items.value.length)]
const media = randomItem.title ? 'movie' : 'tv'

if (media === 'tv')
  featured.value = useFetch<TV>(`/api/tv/${randomItem.id}`).data
else
  featured.value = useFetch<Movie>(`/api/movie/${randomItem.id}`).data

const trendingMoviesTitle = computed(() => getListItem('movie', 'trending').title)
const trendingMoviesUrl = computed((): RouteLocationRaw => ({
  name: 'movie-category-name',
  params: { name: 'trending' },
}))
const trendingTvTitle = computed(() => getListItem('tv', 'trending').title)
const trendingTvUrl = computed((): RouteLocationRaw => ({
  name: 'tv-category-name',
  params: { name: 'trending' },
}))

useHead({
  title: 'Browse Movies, TV Shows and People',
})
</script>

<template>
  <div relative my-8 xl:ml-25>
    <Hero v-if="featured.value" :item="featured.value" />
    <ListingCarousel
      v-if="trendingMovies && trendingMovies.results.length" :view-all-url="trendingMoviesUrl"
      :title="trendingMoviesTitle" :items="trendingMovies"
    />

    <ListingCarousel
      v-if="trendingTVs && trendingTVs.results.length" :view-all-url="trendingTvUrl"
      :title="trendingTvTitle" :items="trendingTVs"
    />
  </div>
</template>
