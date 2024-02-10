<script setup lang="ts">
const props = defineProps<{
  item: any
}>()

const media = computed(() => {
  if (props.item.media_type)
    return props.item.media_type
  else if (props.item.name)
    return 'tv'
  else
    return 'movie'
})
</script>

<template>
  <li v-if="item" relative h-auto w-full overflow-hidden xl:h-full>
    <NuxtLink h-auto w-full lg:h-70 xl:h-full :to="{ name: `${media}-id` as any, params: { id: item.id as any } }">
      <div h-full w-full flex items-center justify-center overflow-hidden bg-zinc-800 md:h-70 sm:h-60 xl:h-80>
        <NuxtImg
          v-if="item.poster_path"
          :alt="item.name || item.title" h-full w-full duration-500 hover:scale-105
          :src="`https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}`"
        />
        <span v-else>
          <Icon name="tabler:photo" text-white size="40" />
        </span>
      </div>

      <h2
        v-if="item.title || item.name" text="white nowrap lg:base sm left" hidden overflow-hidden truncate py-2
        sm:block
      >
        {{ item.title || item.name }}
      </h2>
      <div v-if="item.vote_average" hidden w-full items-center gap-3 text-sm sm:flex>
        <div w-25 flex items-center>
          <div h-5 w-full bg-no-repeat class="card_stars">
            <div h-5 bg-no-repeat class="card_vote" :style="{ width: `${item.vote_average * 10}%` }" />
          </div>
        </div>
        <div text-zinc-400>
          {{ item.vote_average }}
        </div>
      </div>
    </NuxtLink>
  </li>
</template>
