<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'
import type { APIResponse } from '~/types/APIResponse'

defineProps<{
  title?: string
  viewAllUrl?: RouteLocationRaw
  items: APIResponse
}>()

const breakpoints = {
  320: {
    slidesPerView: 3.1,
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
    slidesPerView: 6.5,
  },
  1600: {
    slidesPerView: 8.3,
  },
}
</script>

<template>
  <div relative mx-3 my-8 sm:mx-6 xl:ml-10>
    <div my-4 flex items-baseline gap-3>
      <h2 v-if="title" text-xl xl:text-2xl>
        {{ title }}
      </h2>
      <NuxtLink v-if="viewAllUrl" text-sm text-teal-500 font-semibold :to="viewAllUrl">
        Explore All
      </NuxtLink>
    </div>
    <Swiper
      :modules="[SwiperNavigation]" :breakpoints="breakpoints" space-between="8" :style="{
        '--swiper-navigation-color': '#fff',
      }" :css-mode="true" :pagination="{
        clickable: true,
      }" :navigation="true"
    >
      <SwiperSlide
        v-for="item in items.results" :key="`card-${item.id}`" h-auto max-h-100 w-40 overflow-hidden lg:w-53
        xl:h-full sm:hover:cursor-pointer text="6xl black center"
      >
        <Card :item="item" />
      </SwiperSlide>
      <SwiperSlide v-if="viewAllUrl" h-60 w-40 overflow-hidden lg:w-53 xl:h-full sm:hover:cursor-pointer>
        <NuxtLink

          h-full w-auto flex items-center justify-center bg-zinc-200 text-center text-black duration-500 lg:h-80 hover:scale-105 dark:bg-zinc-800 dark:text-white :to="viewAllUrl"
        >
          {{ 'Explore All' }}
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
