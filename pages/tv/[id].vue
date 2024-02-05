<script setup lang="ts">
import type { APIResponse } from '~/types/APIResponse'
import type { TV } from '~/types/TV'

const { id } = useRoute().params

const { data: item } = await useFetch<TV>(`/api/tv/${id}`)
const { data: recommend } = await useFetch<APIResponse>(`/api/tv/${id}/recommend`)

useHead({
  title: item.value?.name,
  meta: [
    { name: 'description', content: item.value?.overview },
  ],
})
</script>

<template>
  <div relative my-8 xl:ml-25>
    <Hero :item="item" />

    <ListingCarousel v-if="recommend && recommend.results.length" title="More Like This" :items="recommend" />
  </div>
</template>
