<script setup lang="ts">
import type { CreditsCast } from '~/types/CreditsCast'

defineProps<{
  people: CreditsCast[]
}>()

const breakpoints = {
  320: {
    slidesPerView: 2.3,
  },
  600: {
    slidesPerView: 3.3,
  },
  700: {
    slidesPerView: 4.3,
  },
  991: {
    slidesPerView: 5.3,
  },
  1110: {
    slidesPerView: 6.3,
  },
  1240: {
    slidesPerView: 7.2,
  },
  1600: {
    slidesPerView: 8.3,
  },
}
</script>

<template>
  <div relative mx-3 my-8 sm:mx-6 xl:ml-10>
    <div my-4 flex items-baseline gap-3>
      <h2 text-xl xl:text-2xl>
        Cast
      </h2>
    </div>
    <Swiper
      :modules="[SwiperNavigation]" :breakpoints="breakpoints" space-between="8" :style="{
        '--swiper-navigation-color': '#fff',
      }" :css-mode="true" :pagination="{
        clickable: true,
      }" :navigation="true"
    >
      <SwiperSlide v-for="person in people" :key="`credit-${person.id}`" h-auto max-h-90 w-35 overflow-hidden sm:w-46 xl:h-full>
        <CreditsItem :person="person" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
