<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'
import type { APIResponse } from '~/types/APIResponse'
import type { TV } from '~/types/TV'

const { data: popular } = await useFetch<APIResponse>('/api/tv/popular')
const { data: featured } = await useFetch<TV>(`/api/tv/${popular.value?.results[0].id}`)
const { data: topRated } = await useFetch<APIResponse>('/api/tv/top_rated')
const { data: onAir } = await useFetch<APIResponse>('/api/tv/on_the_air')
const { data: airingToday } = await useFetch<APIResponse>('/api/tv/airing_today')

const popularTitle = computed(() => getListItem('tv', 'popular').title)
const popularUrl = computed((): RouteLocationRaw => {
  return { name: 'tv-category-name', params: { name: 'popular' } }
})
const topRatedTitle = computed(() => getListItem('tv', 'top_rated').title)
const topRatedUrl = computed((): RouteLocationRaw => {
  return { name: 'tv-category-name', params: { name: 'top_rated' } }
})
const onAirTitle = computed(() => getListItem('tv', 'on_the_air').title)
const onAirUrl = computed((): RouteLocationRaw => {
  return { name: 'tv-category-name', params: { name: 'on_the_air' } }
})
const airingTodayTitle = computed(() => getListItem('tv', 'airing_today').title)
const airingTodayUrl = computed((): RouteLocationRaw => {
  return { name: 'tv-category-name', params: { name: 'airing_today' } }
})

useHead({
  title: 'TV Shows',
})
</script>

<template>
  <div relative my-8 xl:ml-25>
    <Hero
      v-if="featured"
      :item="featured"
    />

    <ListingCarousel
      v-if="popular && popular.results.length"
      :title="popularTitle"
      :view-all-url="popularUrl"
      :items="popular"
    />

    <ListingCarousel
      v-if="topRated && topRated.results.length"
      :title="topRatedTitle"
      :view-all-url="topRatedUrl"
      :items="topRated"
    />

    <ListingCarousel
      v-if="onAir && onAir.results.length"
      :title="onAirTitle"
      :view-all-url="onAirUrl"
      :items="onAir"
    />

    <ListingCarousel
      v-if="airingToday && airingToday.results.length"
      :title="airingTodayTitle"
      :view-all-url="airingTodayUrl"
      :items="airingToday"
    />
  </div>
</template>
