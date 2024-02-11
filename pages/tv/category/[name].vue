<script setup lang="ts">
import type { APIResponse } from '~/types/APIResponse'

const { name } = useRoute().params

const page = ref<number>(1)
const items = ref<APIResponse | any>()
const loading = ref<boolean>(false)

const { data, pending: isLoaded } = await useFetch<APIResponse>(`/api${name === 'trending' ? '/trending' : ''}/tv`, {
  params: {
    type: name !== 'trending' ? name : '',
    page: page.value,
  },
})

if (isLoaded)
  items.value = data.value

async function loadMore() {
  loading.value = true

  const { data, pending: isLoaded } = await useFetch<APIResponse>(`/api${name === 'trending' ? '/trending' : ''}/tv`, {
    params: {
      type: name !== 'trending' ? name : '',
      page: ++page.value,
    },
  })

  if (isLoaded) {
    items.value.results = items.value.results.concat(data.value?.results)
    items.value.page = data.value?.page
    loading.value = !isLoaded
  }
}
</script>

<template>
  <main relative my-8 sm:mx-6 xl:ml-25>
    <Listing title="Trending Movies" :loading="loading" :items="items" @load-more="loadMore" />
  </main>
</template>
