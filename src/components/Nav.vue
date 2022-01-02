<template>
  <nav class="relative">
    <button
      id="nav-toggle"
      class="rounded-full px-4 py-2 flex items-center justify-center text-gray-700 dark:(text-white opacity-70) sm:hidden border border-transparent"
      type="button"
    >
      <span class="inline-block w-6 h-6 mr-2">
        <svg
          data-nav-visibility="open"
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
          data-nav-visibility="closed"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 !hidden"
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
      <span data-nav-visibility="open">Menu</span>
      <span data-nav-visibility="closed" class="!hidden">Close</span>
    </button>
    <ul
      id="navigation"
      class="flex flex-col rounded-md overflow-hidden shadow-2xl absolute top-16 right-0 w-64 transform transition-transform translate-x-100vw z-50 duration-300 bg-white py-4 dark:(bg-gray-700) sm:(flex-row static w-auto shadow-none rounded-none bg-transparent justify-end items-center h-auto transform-none top-auto left-auto z-30) dark:sm:bg-transparent"
    >
      <li v-for="{ title, slug } in navigation" :key="slug">
        <a
          :href="slug"
          class="inline-block text-gray-600 dark:text-gray-200 px-2 mx-2 py-2 border-transparent border-b-2"
          exact-active-class="text-red-400 !dark:text-violet-700 border-pink-600 dark:border-purple-800"
        >
          {{ title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const name = 'SiteNav'

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
</script>

<script client:load lang="ts">
import { ref, watch } from 'vue'

export function onLoad() {
  const openNav = ref(false)
  watch(openNav, (v) => {
    document
      .getElementById('navigation')
      ?.classList.toggle('!-translate-x-0', v)
    document
      .querySelectorAll<HTMLElement>('[data-nav-visibility]')
      .forEach((el) => {
        if (el.dataset.navVisibility === 'open') {
          el.classList.toggle('!hidden', v)
        }
        if (el.dataset.navVisibility === 'closed') {
          el.classList.toggle('!hidden', !v)
        }
      })
  })
  document.getElementById('nav-toggle').addEventListener('click', () => {
    openNav.value = !openNav.value
  })
  document.querySelectorAll('#navigation > li > a').forEach((el) => {
    el.addEventListener('click', () => {
      openNav.value = !openNav.value
    })
  })

  const path = window.location.pathname
  const isHome = path === '/'

  const addActiveClasses = (el) => {
    el.classList.add(
      'text-red-400',
      'border-pink-600',
      '!dark:text-violet-700',
      'dark:border-purple-800'
    )
  }

  document
    .querySelectorAll<HTMLElement>('#navigation > li > a ')
    .forEach((el) => {
      if (isHome) {
        if (el.getAttribute('href') === '/') {
          addActiveClasses(el)
        }
      } else {
        if (el.getAttribute('href').startsWith(path)) {
          addActiveClasses(el)
        }
      }
    })
}
</script>
