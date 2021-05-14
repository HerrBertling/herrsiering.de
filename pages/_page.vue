<template>
  <section class="prose lg:prose-xl dark:prose-dark pt-12">
    <nuxt-content :document="page" />
    <about-me />
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.page).fetch()

    return {
      page,
    }
  },
}
</script>
