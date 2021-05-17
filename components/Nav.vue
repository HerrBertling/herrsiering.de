<template>
  <nav class="max-w-md">
    <ul class="flex flex-row w-full lg:justify-end justify-between">
      <li v-for="page in navigation" :key="page.slug">
        <nuxt-link
          :to="page.slug"
          class="
            text-gray-600
            dark:text-gray-200
            px-2
            mx-2
            py-2
            border-transparent border-b-2
          "
          exact-active-class="text-red-400 !dark:text-violet-700 border-pink-600 dark:border-purple-800"
        >
          {{ page.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SiteNav',
  data() {
    return {
      navigation: [
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
      ],
    }
  },
}
</script>
