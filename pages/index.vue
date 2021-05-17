<template>
  <div class="grid grid-cols-1 md:grid-cols-8">
    <picture class="md:col-span-3 md:col-start-6 mt-16 max-h-72 md:max-h-96">
      <source
        srcset="
          ~/assets/images/markus-siering_2x.png 2x,
          ~/assets/images/markus-siering.png
        "
        type="image/png"
      />
      <source
        srcset="
          ~/assets/images/markus-siering_2x.webp 2x,
          ~/assets/images/markus-siering.webp
        "
        type="image/webp"
      />
      <img
        loading="lazy"
        class="
          h-full
          object-contain
          mx-auto
          max-h-60
          lg:max-h-80
          dark:hue-rotate-90
        "
        height="320"
        src="~/assets/images/markus-siering.png"
        alt="An image of me, Markus Siering"
      />
    </picture>
    <div
      class="
        prose
        lg:prose-xl
        dark:prose-dark
        md:col-span-5 md:col-start-1
        md:row-start-1
      "
    >
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
