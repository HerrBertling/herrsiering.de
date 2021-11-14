<template>
  <PageSkeleton>
    <section class="grid grid-cols-1 md:grid-cols-8">
      <ProfileImage />
      <div
        class="
          prose
          lg:prose-xl
          dark:prose-dark
          md:col-span-5 md:col-start-1
          md:row-start-1
        "
      >
        <slot />
      </div>
    </section>
  </PageSkeleton>
</template>

<script>
export default {
  name: "StartpageLayout",
}
</script>
