<template>
  <nav class="max-w-md">
    <ul class="flex flex-row w-full lg:justify-end justify-between">
      <li v-for="page in navigation" :key="page.slug">
        <nuxt-link
          :to="page.slug"
          class="px-2 mx-2 py-2 border-transparent border-b-2"
          exact-active-class="text-red-400 border-pink-600"
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
