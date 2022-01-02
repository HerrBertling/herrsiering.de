<template>
  <nav class="relative">
    <button
      :class="[
        'rounded-full px-4 py-2 flex items-center justify-center text-gray-700 dark:(text-white opacity-70) lg:hidden border border-transparent',
        navExpanded && 'border-white',
      ]"
      :aria-expanded="navExpanded"
      aria-controls="navigation"
      type="button"
      @click="toggleNav"
    >
      <span class="inline-block w-6 h-6 mr-2">
        <svg
          v-if="!navExpanded"
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
      <span>{{ navExpanded ? 'Close' : 'Menu' }}</span>
    </button>
    <ul
      :class="[
        'flex flex-col rounded-md overflow-hidden shadow-2xl absolute top-16 right-0 w-xs transform transition-transform duration-300 bg-white py-4 dark:(bg-gray-700) lg:(flex-row static w-auto shadow-none rounded-none bg-transparent justify-end items-center h-auto transform-none top-auto left-auto z-30) dark:lg:bg-transparent',
        navExpanded && 'translate-x-0',
        !navExpanded && 'translate-x-100vw',
      ]"
    >
      <li v-for="page in navigation" :key="page.slug">
        <router-link
          :to="page.slug"
          class="inline-block text-gray-600 dark:text-gray-200 px-2 mx-2 py-2 border-transparent border-b-2"
          exact-active-class="text-red-400 !dark:text-violet-700 border-pink-600 dark:border-purple-800"
        >
          {{ page.title }}
        </router-link>
      </li>
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
