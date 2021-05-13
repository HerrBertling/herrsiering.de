<template>
  <nav>
    <ul class="flex flex-row w-full lg:justify-end justify-between">
      <li v-for="page in navigation" :key="page.slug">
        <nuxt-link
          :to="page.slug"
          class="
            px-2
            lg:px-4
            py-2
            hover:bg-clip-text hover:bg-gradient-to-br
            hover:from-yellow-500
            hover:via-red-400
            hover:to-pink-600
          "
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
