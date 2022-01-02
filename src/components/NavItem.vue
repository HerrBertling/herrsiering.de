<template>
  <li>
    <RouterLink
      :to="slug"
      class="inline-block text-gray-600 dark:text-gray-200 px-2 mx-2 py-2 border-transparent border-b-2"
      exact-active-class="text-red-400 !dark:text-violet-700 border-pink-600 dark:border-purple-800"
    >
      {{ title }}
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const name = 'NavItem'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
})
</script>
