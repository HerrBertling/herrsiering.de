<template>
  <img
    class="rounded-xl max-w-full h-auto object-cover"
    :src="src"
    :alt="alt"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
})
</script>
