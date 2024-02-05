<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'
import type { APIResponse } from '~/types/APIResponse'
import type { Movie } from '~/types/Movie'

const { data: upcoming } = await useFetch<APIResponse>('/api/movie/upcoming')
const { data: featured } = await useFetch<Movie>(`/api/movie/${upcoming.value?.results[0].id}`)
const { data: popular } = await useFetch<APIResponse>('/api/movie/popular')
const { data: nowPlaying } = await useFetch<APIResponse>('/api/movie/now_playing')
const { data: topRated } = await useFetch<APIResponse>('/api/movie/top_rated')

const popularTitle = computed(() => getListItem('movie', 'popular').title)
const popularUrl = computed((): RouteLocationRaw => {
  return { name: 'movie-category-name', params: { name: 'popular' } }
})
const topRatedTitle = computed(() => getListItem('movie', 'top_rated').title)
const topRatedUrl = computed((): RouteLocationRaw => {
  return { name: 'movie-category-name', params: { name: 'top_rated' } }
})
const upcomingTitle = computed(() => getListItem('movie', 'upcoming').title)
const upcomingUrl = computed((): RouteLocationRaw => {
  return { name: 'movie-category-name', params: { name: 'upcoming' } }
})
const nowPlayingTitle = computed(() => getListItem('movie', 'now_playing').title)
const nowPlayingUrl = computed((): RouteLocationRaw => {
  return { name: 'movie-category-name', params: { name: 'now_playing' } }
})

useHead({
  title: 'Movies',
})
</script>

<template>
  <div relative my-8 xl:ml-25>
    <Hero v-if="featured" :item="featured" />

    <ListingCarousel
      v-if="popular && popular.results.length" :title="popularTitle" :view-all-url="popularUrl"
      :items="popular"
    />

    <ListingCarousel
      v-if="topRated && topRated.results.length" :title="topRatedTitle" :view-all-url="topRatedUrl"
      :items="topRated"
    />

    <ListingCarousel
      v-if="upcoming && upcoming.results.length" :title="upcomingTitle" :view-all-url="upcomingUrl"
      :items="upcoming"
    />

    <ListingCarousel
      v-if="nowPlaying && nowPlaying.results.length" :title="nowPlayingTitle" :view-all-url="nowPlayingUrl"
      :items="nowPlaying"
    />
  </div>
</template>
