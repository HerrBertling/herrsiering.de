import { defineApp } from 'iles'
import { computed } from 'vue'
import 'virtual:windi.css'

export default defineApp({
  head({ frontmatter, site }) {
    return {
      meta: [
        { property: 'author', content: site.author },
        { property: 'keywords', content: computed(() => frontmatter.tags) },
      ],
      link: [{ href: '/global.css', ref: 'stylesheet' }],
    }
  },
  enhanceApp({ app, head, router }) {
    // Configure the app to add plugins.
  },
  router: {
    scrollBehavior(current, previous, savedPosition) {
      // Configure the scroll behavior
    },
  },
})
