<script setup lang="ts">
const searchStore = useSearchStore()
</script>

<template>
  <div>
    <transition name="slide-down">
      <AppSearchInput v-if="searchStore.searchOpen" />
    </transition>
    <slot />
    <AppSidebar />
    <AppFooter />
  </div>
</template>
