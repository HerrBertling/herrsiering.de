<template>
  <nav class="relative">
    <NavButton @click="toggleNav" />
    <ul
      :class="[
        'flex flex-col rounded-md overflow-hidden shadow-2xl absolute top-16 right-0 w-xs transform transition-transform duration-300 bg-white py-4 dark:(bg-gray-700) lg:(flex-row static w-auto shadow-none rounded-none bg-transparent justify-end items-center h-auto transform-none top-auto left-auto z-30) dark:lg:bg-transparent',
        navExpanded && 'translate-x-0',
        !navExpanded && 'translate-x-100vw',
      ]"
    >
      <NavItem
        v-for="{ title, slug } in navigation"
        :key="slug"
        :title="title"
        :slug="slug"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = 'SiteNav'

const navExpanded = ref(false)
const navigation = [
  {
    title: 'Home',
    slug: '/',
  },
  {
    title: 'About',
    slug: '/about',
  },
  {
    title: 'Books',
    slug: '/books',
  },
  {
    title: 'Principles',
    slug: '/principles',
  },
  {
    title: 'Thoughts',
    slug: '/thoughts',
  },
]

const toggleNav = () => {
  navExpanded.value = !navExpanded.value
}
</script>
