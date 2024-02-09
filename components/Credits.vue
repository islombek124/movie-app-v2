<script setup lang="ts">
import type { CreditsCast } from '~/types/CreditsCast'

defineProps<{
  people: CreditsCast[]
}>()
</script>

<template>
  <div relative mx-3 my-8 sm:mx-6 xl:ml-10>
    <div my-4 flex items-baseline gap-3>
      <h2 text-xl xl:text-2xl>
        Cast
      </h2>
    </div>
    <Swiper
      space-between="8" :style="{
        '--swiper-navigation-color': '#fff',
      }" :css-mode="true" slides-per-view="auto" :pagination="{
        clickable: true,
      }" :navigation="true" :modules="[SwiperNavigation]"
    >
      <SwiperSlide v-for="person in people" :key="`credit-${person.id}`" h-auto max-h-90 w-35 overflow-hidden sm:w-46 xl:h-full>
        <CreditsItem :person="person" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
