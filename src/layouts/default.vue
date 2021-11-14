<template>
  <PageSkeleton>
    <section class="prose lg:prose-xl dark:prose-dark pt-12">
      <slot />
      <about-me />
    </section>
  </PageSkeleton>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
