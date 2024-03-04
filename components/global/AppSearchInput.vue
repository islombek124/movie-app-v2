<script setup lang="ts">
import type { LocationQueryValue } from '#vue-router'

const route = useRoute()
const router = useRouter()
const searchStore = computed(() => useSearchStore())

const query = ref<string | LocationQueryValue[]>(route.query.q ? route.query.q : '')
const input = ref<HTMLInputElement | null>(null)
const showButton = computed(() => route.name === 'search')

function goToRoute() {
  if (query.value) {
    router.push({
      name: 'search',
      query: { q: query.value },
    })
  }
  else {
    router.push({
      name: 'index',
    })
  }
}

function goBack() {
  query.value = ''
  searchStore.value.closeSearch()
  router.push({ name: 'index' })
}

function unFocus(e: Event) {
  if (route.name !== 'search') {
    const target = e.relatedTarget

    if (!target || !target.classList.contains('search-toggle')) {
      query.value = ''
      searchStore.value.closeSearch()
    }
  }
}

onMounted(() => {
  input.value?.focus()
})
</script>

<template>
  <div fixed left-0 right-0 top-0 z-50 xl:left-25>
    <form autocomplete="off" @submit.prevent>
      <div relative flex items-center>
        <input
          id="search"
          ref="input" v-model.trim="query" type="text" placeholder="Search for a movie, tv show or person..." p="y4 x6 xl:x8 xl:y6"
          w-full flex-1 border-0 bg-zinc-800 text-white shadow-md outline-0 outline-none @keyup="goToRoute" @blur="unFocus"
        >

        <button v-if="showButton" absolute right-3 xl:right-10 @click="goBack">
          <Icon class="hidden" name="material-symbols:close-rounded" size="30" />
        </button>
      </div>
    </form>
  </div>
</template>
