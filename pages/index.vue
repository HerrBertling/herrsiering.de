<template>
  <div class="grid grid-cols-1 lg:grid-cols-8">
    <picture class="lg:col-span-3 lg:col-start-6 mt-16 max-h-72">
      <source
        srcset="
          ~/assets/images/markus-siering_2x.jpg 2x,
          ~/assets/images/markus-siering.jpg    1x
        "
        type="image/jpeg"
      />
      <source
        srcset="
          ~/assets/images/markus-siering_2x.webp 2x,
          ~/assets/images/markus-siering.webp    1x
        "
        type="image/webp"
      />
      <img
        class="h-full object-contain mx-auto max-h-60"
        src="~/assets/images/markus-siering.jpg"
        alt="An image of me, Markus Siering"
      />
    </picture>
    <div class="prose lg:prose-lg lg:col-span-5 lg:col-start-1 lg:row-start-1">
      <nuxt-content :document="page" />
    </div>
  </div>
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
