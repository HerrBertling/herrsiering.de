<template>
<div class="wrapper">
  <header>
    <Navigation :navList="navList" />
    <ThemeSwitch />
  </header>
  <main>
    <section>
      <h1>Sorry, couldn't find what you are looking for…</h1>
      <p>So sorry to let you down, but apparently you're trying to reach a page that is not existing (anymore).</p>
      <p>Check out the content of the pages linked in the navigation right on top, maybe you can find what you're looking for there.</p>
    </section>
  </main>
  <picture>
    <img
      srcset="
      ./images/markus-siering_xvfke1_c_scale_w_200.jpg 200w,
      ./images/markus-siering_xvfke1_c_scale_w_489.jpg 489w"
      src="./images/markus-siering_xvfke1_c_scale_w_489.jpg"
      alt="An image of me, Markus Siering">
  </picture>
  <footer>
    <Footer />
  </footer>
</div>
</template>

<script>
import Vue from "vue";
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";
import ThemeSwitch from "./ThemeSwitch.vue";
import PostList from "./components/PostList.vue";

export default {
  components: { Navigation, Footer, PostList, ThemeSwitch },
  computed: {
    postList() {
      const postDirectory = this.$site.themeConfig.postDir;
      return this.$site.pages.filter(page =>
        page.path.startsWith(postDirectory)
      );
    },
    isHome() {
      return this.$page.path === "/";
    },
    navList() {
      return this.$site.pages
        .filter(page => {
          return page.frontmatter.inNavigation;
        })
        .sort((a, b) => a.frontmatter.navPosition - b.frontmatter.navPosition);
    }
  }
};
</script>
