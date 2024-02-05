<script setup lang="ts">
defineProps<{ title: { type: string, required: true } }>()
const router = useRouter()
</script>

<template>
  <nav fixed left-0 right-0 top-0 z-5 flex items-center justify-center bg-black py-3.5 xl:hidden>
    <button absolute left-5 type="button" aria-label="Go Back" @click="router.back()">
      <Icon name="tabler:arrow-narrow-left" size="30" />
    </button>
    <p>{{ title }}</p>
  </nav>
</template>
