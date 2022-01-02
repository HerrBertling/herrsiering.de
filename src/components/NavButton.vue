<template>
  <button
    :class="[
      'rounded-full px-4 py-2 flex items-center justify-center text-gray-700 dark:(text-white opacity-70) lg:hidden border border-transparent',
      open && 'border-white',
    ]"
    :aria-expanded="open"
    aria-controls="navigation"
    type="button"
    @click="toggleNav"
  >
    <span class="inline-block w-6 h-6 mr-2">
      <svg
        v-if="!open"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span>
    <span>{{ open ? 'Close' : 'Menu' }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const emit = defineEmits(['click'])

const toggleNav = () => {
  open.value = !open.value
  emit('click')
}
</script>
