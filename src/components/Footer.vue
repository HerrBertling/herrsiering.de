<template>
  <nav class="text-white dark:text-gray-200 text-right py-3">
    <small class="px-4">Links to Amazon are affiliate links.</small>
    <ul class="flex flex-row justify-end w-full mt-4 text-sm">
      <li>
        <router-link
          to="/imprint"
          class="
            px-4
            py-2
            text-white
            dark:text-gray-200
            opacity-90
            hover:opacity-100
          "
        >
          Imprint
        </router-link>
      </li>
      <li>
        <router-link
          to="/privacy"
          class="
            px-4
            py-2
            text-white
            dark:text-gray-200
            opacity-90
            hover:opacity-100
          "
        >
          Privacy
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SiteFooter',
}
</script>
