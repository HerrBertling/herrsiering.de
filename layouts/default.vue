<template>
  <div
    class="
      min-h-screen
      bg-gradient-to-br
      from-yellow-500
      via-red-400
      to-pink-600
      pt-2
      lg:px-4
      lg:py-16
    "
  >
    <div
      class="
        bg-white
        max-w-6xl
        lg:mx-auto
        lg:shadow-xl
        py-2
        px-4
        lg:px-16
        lg:py-12
        lg:rounded-3xl
      "
    >
      <header class="mb-4 flex justify-center md:justify-end">
        <Nav />
      </header>
      <main>
        <nuxt />
      </main>
    </div>
    <footer class="max-w-6xl mx-auto">
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
