<template>
  <nav class="text-white text-center mt-8">
    <small>Links to Amazon are affiliate links.</small>
    <ul class="flex flex-row justify-center w-full mt-4 text-sm">
      <li>
        <nuxt-link
          to="/imprint"
          class="px-4 py-2 text-white opacity-90 hover:opacity-100"
        >
          Imprint
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/privacy"
          class="px-4 py-2 text-white opacity-90 hover:opacity-100"
        >
          Privacy
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SiteFooter',
}
</script>
