<script setup lang="ts">
import type { APIResponse } from '~/types/APIResponse'

const fromPage = ref<string>('/')
const route = useRoute()
const router = useRouter()
const searchStore = useSearchStore()
const query = computed(() => route.query.q ? route.query.q : '')
const page = ref<number>(1)
const title = computed(() => query.value ? `Results For: ${query.value}` : '')
const loading = ref<boolean>(false)
const items = ref<APIResponse | any>()

async function loadMore() {
  loading.value = true

  const { data } = await useFetch<APIResponse>(`/api/search`, {
    params: {
      q: query.value,
      page: ++page.value,
    },
  })

  items.value.results = items.value.results.concat(data.value?.results)
  items.value.page = data.value?.page

  loading.value = false
}

watchEffect(async () => {
  if (query.value) {
    loading.value = true
    const { data } = await useFetch<APIResponse>('/api/search', {
      params: {
        q: query.value,
        page: page.value,
      },
    })
    items.value = data.value
    loading.value = false
  }
  else {
    router.push({ name: 'index' })
  }
})

onMounted(() => {
  searchStore.openSearch()
  searchStore.setFromPage(fromPage)
})

onBeforeRouteLeave((to, from, next) => {
  const search = document.getElementById('search') as HTMLInputElement

  if (search && search.value)
    searchStore.closeSearch()
  next()
})

useHead({
  title: 'Search',
  bodyAttrs: {
    class: 'page page-search',
  },
})
</script>

<template>
  <main relative my-15 xl:ml-25>
    <Listing
      v-if="items && items.results.length" sm:mt-25 :items="items" :title="title" :loading="loading"
      @load-more="loadMore"
    />
  </main>
</template>
