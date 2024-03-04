<script setup lang="ts">
const props = defineProps<{
  item: any
}>()
const route = useRoute()
const type = computed(() => {
  if (props.item.name)
    return 'tv'
  else
    return 'movie'
})

const itemObj = {
  id: props.item.id as number,
  backdrop_path: props.item.backdrop_path as string,
  name: props.item.name as string,
  title: props.item.title as string,
  overview: props.item.overview as string,
  vote_average: props.item.vote_average as number,
  vote_count: props.item.vote_count as number,
  runtime: props.item.runtime as number,
  release_date: props.item.release_date as string,
  number_of_seasons: props.item.number_of_seasons as number,
}
const isSingle = itemObj.id === route.params.id

const backdrop = computed(() => {
  if (props.item.backdrop_path)
    return `https://image.tmdb.org/t/p/original${itemObj.backdrop_path}`
})
</script>

<template>
  <div
    relative top--8 block w-full flex flex-col justify-between overflow-hidden bg-black lg:h-md sm:h-lg xl:h-xl
  >
    <div class="backdrop lg:w-8/11" relative right-0 top-0 w-full lg:ml-auto lg:h-md md:h-xs sm:h-lg xl:h-xl :class="{ 'h-60': !backdrop }">
      <Transition name="fade">
        <NuxtImg
          v-if="backdrop" inline-block
          h-full w-full object-cover :src="backdrop" :alt="itemObj.name || itemObj.title"
        />
      </Transition>
    </div>
    <div class="lg:w-11/20" lg:absolute lg:bottom-0 lg:left-0 lg:top-0 lg:z-1 lg:h-full lg:flex lg:items-center>
      <div class="md:w-4/6" ml-0 w-full flex flex-col gap-y-6 p-4 md:ml-12 md:p-0>
        <h1 text-xl capitalize lg:text-3xl sm:text-2xl xl:text-4xl>
          <template v-if="isSingle">
            {{ itemObj.name || itemObj.title }}
          </template>
          <template v-else>
            <NuxtLink w-max :to="{ name: `${type}-id`, params: { id: itemObj.id } }">
              {{ itemObj.name || itemObj.title }}
            </NuxtLink>
          </template>
        </h1>
        <div w-full flex flex-col gap-3 text-zinc-400 sm:flex-row sm:items-center>
          <!--  -->
          <div flex items-center gap-3>
            <div v-if="itemObj.vote_average" w-25 flex items-center>
              <div h-5 w-full bg-no-repeat class="card_stars">
                <div h-5 bg-no-repeat class="card_vote" :style="{ width: `${itemObj.vote_average * 10}%` }" />
              </div>
            </div>
            <!--  -->
            <div text-nowrap>
              <div v-if="itemObj.vote_count > 0">
                {{ itemObj.vote_count ? itemObj.vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0 }}
                Reviews
              </div>
            </div>
          </div>
          <!--  -->
          <div flex items-center gap-3>
            <span v-if="itemObj.number_of_seasons">Season {{ itemObj.number_of_seasons }}</span>
            <span v-if="itemObj.release_date">{{ new Date(itemObj.release_date).getFullYear() }}</span>
            <span v-if="itemObj.runtime">
              {{ Math.floor(itemObj.runtime / 60) }}h
              {{ itemObj.runtime % 60 }}min
            </span>
          </div>
          <!--  -->
        </div>
        <div v-if="itemObj.overview" mb-10 hidden md:block>
          {{ itemObj.overview.length > 200 ? `${itemObj.overview.substring(0, 200)}...` : itemObj.overview }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  content: '';
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
}

.backdrop::after {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

@media (min-width: 1025px) {
  .backdrop::after {
    background-image: linear-gradient(
      to right,
      #000 0,
      transparent 50%,
      transparent 100%
    );
  }
}
</style>
