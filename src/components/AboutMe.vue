<template>
  <aside class="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
    <div class="prose-sm md:col-span-3">
      <hr />
      <h3>Hi! I'm Markus 👋</h3>
      <h4>I help companies design and deliver digital products faster.</h4>
      <p>
        Doing so, I like well written CSS. Working with designers and frontend
        developers. Creating design systems. Caring for a smooth workflow for my
        team.
      </p>

      <p>
        Apart from that, I like my family. Ice cream. Netflix. Kettlebells.
        Yoga.
      </p>
    </div>
    <picture class="max-h-48 dark:hue-rotate-90 md:(col-span-1 self-end) ">
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
        class="h-full object-contain mx-auto max-h-36"
        height="144"
        width="110"
        src="@/assets/images/markus-siering.png"
        alt="An image of me, Markus Siering"
      />
    </picture>
  </aside>
</template>

<script>
import { computed } from "vue"
import png1x from '@/assets/images/markus-siering.png'
import png2x from '@/assets/images/markus-siering_2x.png'
import webp1x from '@/assets/images/markus-siering.webp'
import webp2x from '@/assets/images/markus-siering_2x.webp'

export default {
  name: 'AboutMe',

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
