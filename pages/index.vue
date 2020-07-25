<template>
  <nuxt-content :document="page" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('index').fetch()

    return {
      page,
    }
  },
}
</script>
