<template>
  <nuxt-content :document="page" />
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
