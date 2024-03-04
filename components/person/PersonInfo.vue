<script setup lang="ts">
import type { Person } from '~/types/Person.ts'

const props = defineProps<{
  person: Person
}>()

const avatar = computed(() => {
  if (props.person.profile_path)
    return `https://image.tmdb.org/t/p/w370_and_h556_bestv2${props.person.profile_path}`
  else
    return null
})

const age = computed(() => {
  const born = props.person.birthday
  const died = props.person.deathday

  if (born && !died)
    return getAge(born)
  else if (born && died)
    return getAge(born, died)
  else
    return false
})

function getAge(born: string, died?: string | null) {
  const startDate = new Date(born)
  let endDate
  let age

  if (!died)
    endDate = new Date()
  else
    endDate = new Date(died)

  const month = endDate.getMonth() - startDate.getMonth()
  age = endDate.getFullYear() - startDate.getFullYear()

  if (month < 0 || (month === 0 && endDate.getDate() < startDate.getDate()))
    age--

  return age
}

function formatContent(string: string) {
  return string.split('\n').filter(section => section !== '').map(section => `<p>${section}</p>`).join('')
}
</script>

<template>
  <div md:flex>
    <div hidden md:block>
      <div relative>
        <NuxtImg v-if="avatar" :src="avatar" :alt="person.name" />
        <span v-else>
          <Icon name="tabler:photo" text-white size="40" />
        </span>
      </div>
    </div>
    <!-- right -->
    <div md:flex-1>
      {{ age }}
      <div>
        <h2>{{ person.name }}</h2>

        <div v-if="person.biography" overflow-hidden>
          <NuxtImg v-if="avatar" float-left md:hidden :src="avatar" :alt="person.name" />
          <div v-html="formatContent(person.biography)" />
        </div>
      </div>
    </div>
  </div>
</template>
