<template>
<div class="wrapper">
  <header>
    <Navigation :navList="navList" />
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
      sizes="(max-width: 1000px) 100vw, 1000px"
      srcset="
      ./images/markus-siering_xvfke1_c_scale_w_200.jpg 200w,
      ./images/markus-siering_xvfke1_c_scale_w_291.jpg 291w,
      ./images/markus-siering_xvfke1_c_scale_w_365.jpg 365w,
      ./images/markus-siering_xvfke1_c_scale_w_432.jpg 432w,
      ./images/markus-siering_xvfke1_c_scale_w_489.jpg 489w,
      ./images/markus-siering_xvfke1_c_scale_w_540.jpg 540w,
      ./images/markus-siering_xvfke1_c_scale_w_589.jpg 589w,
      ./images/markus-siering_xvfke1_c_scale_w_633.jpg 633w,
      ./images/markus-siering_xvfke1_c_scale_w_679.jpg 679w,
      ./images/markus-siering_xvfke1_c_scale_w_716.jpg 716w,
      ./images/markus-siering_xvfke1_c_scale_w_756.jpg 756w,
      ./images/markus-siering_xvfke1_c_scale_w_829.jpg 829w,
      ./images/markus-siering_xvfke1_c_scale_w_1000.jpg 1000w"
      src="./images/markus-siering_xvfke1_c_scale_w_1000.jpg"
      alt="">
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
import PostList from "./components/PostList.vue";

export default {
  components: { Navigation, Footer, PostList },
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
