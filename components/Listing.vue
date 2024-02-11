<script setup lang="ts">
defineProps<{
  title?: string
  viewAllUrl?: string
  loading?: boolean
  show?: number
  items: any
}>()

const emit = defineEmits<{
  (e: 'loadMore'): void
}>()

const infinitescrolltrigger = ref()

function scrollTrigger() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0)
        emit('loadMore')
    })
  })
  observer.observe(infinitescrolltrigger.value)
}

onMounted(() => scrollTrigger())
</script>

<template>
  <div relative mx-3 my-8 mt-20 sm:mx-6 xl:mx-10 sm:mt-13>
    <div v-if="title">
      <h1 v-if="title" mb-6 text-lg md:text-2xl>
        {{ title }}
      </h1>
    </div>
    <ul
      v-if="items && items.results.length"
      xs:grid-cols-3 grid grid-cols-3 gap-2 lg:grid-cols-5 sm:grid-cols-4 xl:grid-cols-6 md:gap-y-5 sm:gap-y-6
    >
      <Card v-for="item in items.results" :key="item.id" :item="item" />
    </ul>

    <div v-if="items.page < items.total_pages" mt-5>
      <div id="scroll-trigger" ref="infinitescrolltrigger" flex items-center justify-center>
        <icon name="tabler:loader-2" animate-spin text-teal-500 size="40" />
      </div>
    </div>
  </div>
</template>
