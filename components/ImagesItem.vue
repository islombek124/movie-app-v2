<script setup lang="ts">
import type { Image } from '~/types/Image'

defineProps<{
  image: Image
  index: number
  type: string
}>()

const emit = defineEmits<{
  (e: 'openModal', index: number): void
}>()

function handleGallery(index: number) {
  emit('openModal', index)
}
</script>

<template>
  <div v-if="image.thumb">
    <a :href="image.thumb" @click.prevent="handleGallery(index)">
      <div relative overflow-hidden>
        <NuxtImg absolute left-0 top-0 h-full w-full :src="image.thumb" />
      </div>
    </a>
  </div>
</template>
