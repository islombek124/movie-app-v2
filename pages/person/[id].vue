<script setup lang="ts">
import type { Person } from '~/types/Person'

const id = useRoute().params.id

const { data: person } = await useFetch<Person>(`/api/person/${id}`)

useHead({
  title: person.value?.name,
  meta: [
    { name: 'description', content: person.value?.biography },
  ],
})
</script>

<template>
  <div relative mx-3 my-8 sm:mx-6 xl:mx-38>
    <h1 text-4xl font-semibold>
      Soon ⏳
    </h1>
    <!-- <PersonInfo :person="person" /> -->
    <!-- <Images v-if="person?.images.profiles" title="Photos" type="poster" :images="person?.images.profiles" /> -->
  </div>
</template>
