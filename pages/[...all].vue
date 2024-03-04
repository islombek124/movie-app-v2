<script setup lang="ts">
const router = useRouter()

definePageMeta({
  layout: 'error',
})

useHead({
  title: 'This page could not be found',
  meta: [
    { name: 'description', content: 'Looks like you\'ve followed a broken link or entered a URL that doesn\'t exist on this site' },
  ],
})
</script>

<template>
  <main p="x4 y25" text="center gray-200">
    <div text-5xl>
      <div i-carbon-warning inline-block />
    </div>
    <div mt-1 text-xl>
      Not found
    </div>
    <p mt-1 text-lg opacity-70>
      Looks like you've followed a broken link or entered a<br hidden sm:block> URL that doesn't exist on this site.
    </p>
    <div>
      <button text-white btn m="3 t8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
