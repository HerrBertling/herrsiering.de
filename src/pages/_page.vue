<template>
  <section class="prose lg:prose-xl dark:prose-dark pt-12">
    <nuxt-content :document="page" />
    <about-me />
  </section>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.page).fetch()

    return {
      page,
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.page.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.page.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.page.tags ? this.page.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Markus Siering' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.page.tags ? this.page.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://herrsiering.de/${this.$route.params.page}`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.page.title,
        description: this.page.description,
        url: `https://herrsiering.de/${this.$route.params.page}`,
        mainImage: this.page.image,
      }
      return getSiteMeta(metaData)
    },
  },
}
</script>
