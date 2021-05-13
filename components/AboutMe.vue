<template>
  <aside class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
    <div class="prose-sm lg:col-span-3">
      <hr />
      <h3>Hi! I'm Markus.</h3>
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
    <picture class="lg:col-span-1 mt-4 max-h-48">
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
        class="h-full object-contain mx-auto"
        src="~/assets/images/markus-siering.jpg"
        alt="An image of me, Markus Siering"
      />
    </picture>
  </aside>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>
