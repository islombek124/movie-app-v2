<script setup lang="ts">
import type { APIResponse } from '~/types/APIResponse'
import type { Movie } from '~/types/Movie'

const id = useRoute().params.id

const { data: item } = await useFetch<Movie>(`/api/movie/${id}`)
const { data: recommend } = await useFetch<APIResponse>(`/api/movie/${id}/recommend`)

const showCredits = computed(() => {
  const credits = item.value?.credits
  return credits && credits.cast && credits.cast.length
})

useHead({
  title: item.value?.title,
  meta: [
    { name: 'description', content: item.value?.overview },
  ],
})

useSeoMeta({
  title: item.value?.title,
  ogImage:  item.value?.poster_path
})
</script>

<template>
  <div relative my-8 xl:ml-25>
    <Hero :item="item" />

    <Credits v-if="showCredits" :people="item?.credits.cast" />

    <ListingCarousel v-if="recommend && recommend.results.length" title="More Like This" :items="recommend" />
  </div>
</template>
