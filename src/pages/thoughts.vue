<template>
  <h1>Thoughts.</h1>
  <div class="grid grid-cols-1 gap-16 mb-32">
    <article v-for="post of posts">
      <a
        :href="post.href"
        class="!no-underline opacity-80 hover:opacity-100 focus:opacity-100 active:opacity-100 transform-opacity"
      >
        <h2 class="!mb-1 !mt-0">{{ post.title }}</h2>
        <div v-if="post.excerpt">{{ post.description }}</div>
        <aside class="flex opacity-80 gap-4 text-sm mt-4 mb-3">
          <time :datetime="post.lastUpdated.toISOString()">
            {{ getDateTime(post.lastUpdated) }}
          </time>
          <p v-if="post.readingtime" class="!m-0">
            Time to read: {{ post.readingtime }}
          </p>
        </aside>
      </a>
    </article>
  </div>
</template>

<script setup lang="ts">
import { usePosts } from '../composables/usePosts'

const posts = usePosts()

const getDateTime = (date: Date) => {
  const usedDate = new Date(date)
  return usedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'CET',
  })
}
</script>
