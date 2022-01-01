import { defineApp } from 'iles'
import { computed } from 'vue'
import 'virtual:windi.css'

import BasicImage from '~/components/BasicImage.vue'

export default defineApp({
  head({ frontmatter, site }) {
    return {
      meta: [
        { property: 'author', content: site.author },
        { property: 'keywords', content: computed(() => frontmatter.tags) },
      ],
    }
  },
  enhanceApp({ app, head, router }) {
    // Configure the app to add plugins.
  },
  mdxComponents: {
    img: BasicImage,
  },
  router: {
    scrollBehavior(current, previous, savedPosition) {
      // Configure the scroll behavior
    },
  },
})
