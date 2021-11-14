<template>
  <picture class="md:col-span-3 md:col-start-6 mt-16 max-h-72 md:max-h-96">
    <source
        :srcset="pngSrc"
        type="image/png"
      />
      <source
        :srcset="webpSrc"
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
      width="245"
      src="@/assets/images/markus-siering.png"
      alt="An image of me, Markus Siering"
    />
  </picture>
</template>

<script>
import { computed } from "vue"
import png1x from '@/assets/images/markus-siering.png'
import png2x from '@/assets/images/markus-siering_2x.png'
import webp1x from '@/assets/images/markus-siering.webp'
import webp2x from '@/assets/images/markus-siering_2x.webp'

export default {
  name: "ProfileImage",

  setup() {
    const webpSrc = computed(() => `${webp2x} 2x, ${webp1x}`)
    const pngSrc = computed(() => `${png2x} 2x, ${png1x}`)

    return {
      pngSrc,
      webpSrc,
    }
  },
}
</script>
