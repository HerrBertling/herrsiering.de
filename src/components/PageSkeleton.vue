<template>
  <div
    class="overflow-hidden min-h-screen bg-gradient-to-br from-yellow-500 via-red-400 to-pink-600 pt-2 md:(px-4 py-16) dark:from-violet-900 dark:via-indigo-900 dark:to-blue-gray-900"
  >
    <div
      class="bg-white dark:bg-gray-800 max-w-6xl mb-4 py-2 px-4 md:(mx-auto shadow-2xl px-16 py-12 rounded-3xl)"
    >
      <header class="mb-4 flex justify-end">
        <Nav />
      </header>
      <main class="mb-8">
        <slot />
      </main>
    </div>
    <footer class="max-w-6xl mx-auto">
      <Footer />
    </footer>
  </div>
</template>

<script setup lang="ts">
const name = 'PageSkeleton'

const { frontmatter } = usePage()

const usedMeta = []

if (frontmatter.title) {
  usedMeta.push({ property: 'twitter:title', content: frontmatter.title })
  usedMeta.push({ property: 'og:title', content: frontmatter.title })
}
if (frontmatter.description) {
  usedMeta.push({
    property: 'twitter:description',
    content: frontmatter.description,
  })
  usedMeta.push({
    property: 'og:description',
    content: frontmatter.description,
  })
  usedMeta.push({
    property: 'description',
    content: frontmatter.description,
  })
}

if (frontmatter.href) {
  usedMeta.push({ property: 'og:url', content: frontmatter.href })
}

let usedPath = frontmatter.href

if (usedPath === '/') {
  usedPath = '/index'
}

const image = `${process.env.DEPLOY_URL}/og-images/${usedPath}.jpeg`

usedMeta.push({ property: 'og:image', content: image })
usedMeta.push({ property: 'twitter:image', content: image })
usedMeta.push({ property: 'twitter:card', content: 'summary_large_image' })

useHead({
  meta: [{ property: 'og:type', content: 'website' }, ...usedMeta],
})
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
