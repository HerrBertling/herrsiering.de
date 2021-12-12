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
      dark:from-violet-900
      dark:via-indigo-900
      dark:to-blue-gray-900
    "
  >
    <div
      class="
        bg-white
        dark:bg-gray-800
        max-w-6xl
        mb-4
        lg:mx-auto
        lg:shadow-2xl
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
        <slot />
      </main>
    </div>
    <footer class="max-w-6xl mx-auto">
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PageSkeleton',
}
</script>

<style>
@font-face {
  font-family: 'Rubik';
  font-weight: 400;
  src: local('Rubik'),
    url(@/static/fonts/Rubik/Rubik-Regular.ttf) format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Rubik';
  font-weight: 700;
  src: local('Rubik'),
    url(@/static/fonts/Rubik/Rubik-Bold.ttf) format('truetype');
  font-display: swap;
}

html {
  font-family: 'Rubik';
}
</style>
