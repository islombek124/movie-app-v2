<script setup lang="ts">

const props = defineProps<{
  data?: array

  type?: {
    type: string
    default: 'image'
  };

  modifier?: {
    type: string;
    default: ''
  };

  nav?: {
    type: boolean;
    default: false;
  };

  ariaLabel?: {
    type: string;
    default: '';
  };
}>();

const emit = defineEmits<{
  (e: 'close'): void
}>()

const selected = ref(null)
const activeItem = ref(null)

const label = computed(() => {
  if (props.ariaLabel)
    return props.ariaLabel

  else if (activeItem.value && activeItem.value?.name)
    return activeItem.value.name

  else
    return null
})

function close() {
  emit('close')
}

function next() {
  selected.value = selected.value + 1 %
}

watch(selected, () => {
  activeItem.value = props.data[selected.value]
})
</script>

<template>
  <transition name="modal" appear>
    <div :aria-label="label" fixed bottom-0 left-0 right-0 top-0 z-999 cursor-pointer overflow-x-hidden overflow-y-auto
      bg-black tabindex="-1" aria-hidden="false" role="dialog">
      <div @click.stop>
        <button aria-label="Close" type="button" @click.stop="close">
          <Icon name="tabler:x" size="15" />
        </button>
      </div>
      <div>
        <iframe src="" allowfullscreen allow="autoplay; encrypt-media" frameborder="0" />
      </div>
    </div>
  </transition>
</template>
