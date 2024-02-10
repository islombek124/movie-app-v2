<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html {
  background: #141414;
  color: white;
}

.swiper-button-prev,
.swiper-button-next {
  height: 100%;
  width: 40px;
  top: 22px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s;
  display: none;
}

.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  right: 0;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: rgba(0, 0, 0, 0.75);
}

.swiper-button-disabled {
  display: none;
}

@media (min-width: 1280px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: flex;
  }

  .swiper-button-disabled {
    display: none;
  }
}
</style>
