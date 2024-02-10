<script setup lang="ts">
const route = useRoute()
const searchStore = useSearchStore()

function toggleSearch() {
  if (route.name !== 'search')
    searchStore.toggleSearch()
}
</script>

<template>
  <nav
    fixed bottom-0 left-0 z-10 h-15 w-full flex-1 xl:right-auto xl:top-0 xl:h-full xl:w-25 xl:border-r dark:bg-black dark:xl:border-r-zinc-800
  >
    <ul h-full flex items-center justify-around xl:flex-col xl:justify-start xl:gap-y-20 xl:py-10>
      <li h-full w-full sm:h-auto>
        <NuxtLink h-full w-full flex items-center justify-center aria-label="Home" :to="{ name: 'index' }">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
              fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10"
              stroke-linejoin="round"
            >
              <path d="M8.5 23.2H1.3V9L12 .8 22.7 9v14.2h-7.2v-5c0-1.9-1.6-3.4-3.5-3.4s-3.5 1.5-3.5 3.4v5z" />
            </g>
          </svg>
        </NuxtLink>
      </li>
      <li h-full w-full sm:h-auto>
        <NuxtLink h-full w-full flex items-center justify-center aria-label="Movies" :to="{ name: 'movie' }">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
              fill="none" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"
              stroke-linecap="round"
            >
              <path d="M3.2 12.8h19.6v9.5c0 .5-.4.9-1 .9H4.1c-.5 0-1-.4-1-.9v-9.5" />
              <path d="M3.3 13.1l-2-4.4c-.2-.5 0-1 .5-1.2L18 .8c.5-.2 1.1 0 1.3.5l1.8 4-17.5 7.3" />
              <path d="M15 2.1l-.9 6M8 4.7l-1.2 6.6" />
            </g>
          </svg>
        </NuxtLink>
      </li>
      <li h-full w-full sm:h-auto>
        <NuxtLink h-full w-full flex items-center justify-center aria-label="TV Shows" :to="{ name: 'tv' }">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10">
              <path
                d="M21.4 23H2.6c-.9 0-1.6-.7-1.6-1.6V8.9c0-.9.7-1.6 1.6-1.6h18.9c.8 0 1.5.7 1.5 1.6v12.6c0 .8-.7 1.5-1.6 1.5zM6.4 1L12 7M17.6 1L12 7"
              />
            </g>
          </svg>
        </NuxtLink>
      </li>
      <li h-full w-full sm:h-auto>
        <button
          h-full w-full flex items-center justify-center
          class="search-toggle" type="button" aria-haspopup="true" :aria-expanded="`${searchStore.searchOpen}`"
          @click="toggleSearch"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10">
              <path d="M16.4 16.7l6.3 6.5" />
              <ellipse cx="10.5" cy="9.8" rx="9.2" ry="9.1" />
            </g>
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
svg g {
  stroke: black;
}

.dark svg g {
  stroke: white;
}
a.router-link-active {
  @apply text-teal-500;
}

a.router-link-active svg g {
  @apply stroke-teal-500;
}
</style>
