<template>
<div>
  <h3>Current posts</h3>
  <ul>
    <li v-for="post in posts" :key="post.key">
      <a :href="post.path"><h4>{{ post.title }}</h4></a>
      <p v-if="post.frontmatter.summary">{{ post.frontmatter.summary }}</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: [],
      required: true
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
