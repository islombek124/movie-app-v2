<script setup lang="ts">
import type { CreditsCast } from '~/types/CreditsCast'

defineProps<{
  person: CreditsCast
}>()
</script>

<template>
  <li v-if="person" relative h-auto w-full overflow-hidden xl:h-full>
    <NuxtLink h-auto w-full :to="{ name: 'person-id', params: { id: person.id } }">
      <div relative h-full w-full flex items-center justify-center overflow-hidden rounded-sm bg-zinc-800 sm:h-70>
        <NuxtImg
          v-if="person.profile_path" preload h-full w-full duration-500 hover:scale-105
          :src="`https://image.tmdb.org/t/p/w370_and_h556_bestv2${person.profile_path}`"
        />
        <span v-else>
          <Icon name="tabler:photo" text-black dark:text-white size="40" />
        </span>
      </div>

      <h2 text="black dark:white nowrap lg:base sm left" mt-2 overflow-hidden truncate>
        {{ person.name }}
      </h2>

      <div text="zinc-500 dark:zinc-400 xs lg:sm" py-1>
        {{ person.character }}
      </div>
    </NuxtLink>
  </li>
</template>
