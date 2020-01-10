<template>
<div class="wrapper">
  <header>
    <Navigation :navList="navList" />
  </header>
  <main>
    <section>
      <Content />
    </section>
    <section v-if="isHome && postList.length > 1">
      <PostList :posts="postList" />
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
import PostList from "./components/PostList.vue";

export default {
  components: { Navigation, Footer, PostList },
  computed: {
    postList() {
      const postDirectory = this.$site.themeConfig.postDir;
      return this.$site.pages
        .filter(page => page.path.startsWith(postDirectory))
        .reverse();
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

<style>
@import "~prismjs/themes/prism-tomorrow.css";
:root {
  --spacingXS: 8px;
  --spacingS: 20px;
  --spacingM: 40px;
  --spacingL: 100px;
  --spacingXL: 200px;
  --fontSizeXS: 0.8rem;
  --fontSizeS: 1rem;
  --fontSizeM: 1.2rem;
  --fontSizeL: 1.728rem;
  --fontSizeXL: 2.074rem;
  --fontSizeXXL: 2.488rem;
  --mainColor: #1c71b1;
  --textColor: #192c42;
  --textColorLight: #4a5669;
  --textColorLightest: #616b7d;
  --accentColor: #ba1727;
  --backgroundColorLight: #eef0f1;
  --backgroundBasic: white;
  --headlineFont: Rockwell, Courier Bold, Courier, Georgia, Times,
    Times New Roman, serif;
  --bodyFont: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  --animationDuration: 200ms;
}

@media (prefers-reduced-motion: reduce) {
  nav {
    --animationDuration: 0ms;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --mainColor: #7399c8;
    --textColor: #f2f5fa;
    --textColorLight: #d6e0ef;
    --textColorLightest: #adc0de;
    --accentColor: #ee7068;
    --backgroundBasic: #192c42;
    --backgroundColorLight: #192c42;
    font-weight: 300;
    line-height: 1.7;
    word-spacing: 0.05em;
  }
}

* {
  box-sizing: border-box;
}

html {
  font-size: 24px;
}
body {
  margin: 0;
  padding: 0;
  background-color: var(--backgroundBasic);
}
body,
#app,
.wrapper {
  min-height: 100vh;
}

.wrapper {
  color: var(--textColor);
  display: grid;
  grid-gap: var(--spacingM);
  grid-template-columns: 1fr;
  grid-template-rows: 240px var(--spacingM) 1fr var(--spacingM);
  font-family: var(--bodyFont);
  font-size: var(--fontSizeS);
  line-height: 1.5;
  max-width: 100vw;
  padding: var(--spacingS);
}

/* Typography styles */

.standout {
  color: var(--textColorLightest);
  font-family: var(--headlineFont);
  font-size: var(--fontSizeXXL);
  font-weight: bold;
  margin: 0 0 0.5em;
}

h1 {
  color: var(--mainColor);
  font-size: var(--fontSizeXL);
  font-family: var(--headlineFont);
  line-height: 1.15;
  margin: 0 0 1em;
}

h2 {
  color: var(--accentColor);
  font-size: var(--fontSizeL);
  font-family: var(--headlineFont);
  line-height: 1.15;
  margin: 2em 0 0.5em;
}

h3 {
  color: var(--textColorLight);
  font-size: var(--fontSizeM);
  margin: 2em 0 0.5em;
}
h4 {
  font-size: var(--fontSizeS);
  margin: 1.5em 0 0.5em;
}

p,
ul {
  margin: 0 0 1.5em;
}

li {
  margin-bottom: 0.5em;
}

p code {
  background-color: var(--backgroundColorLight);
  color: var(--textColor);
  font-size: var(--fontSizeXS);
  padding: 4px;
}

blockquote {
  border-left: 4px solid var(--mainColor);
  margin: 1em;
  padding: 0 1em;
  color: var(--textColorLight);
}

hr {
  border: 0;
  background: var(--mainColor);
  height: 4px;
  border-radius: 1px;
  margin: 3em 0;
}

a:link,
a:visited {
  color: var(--mainColor);
}

a:hover,
a:focus,
a:active {
  color: var(--accentColor);
}

a[href^="https://amzn.to"] .outbound {
  display: none;
}

a[href^="https://amzn.to"]::after {
  content: " *";
  display: inline;
  color: var(--accentColor);
}

.header-anchor {
  display: none;
}
div[class^="language-"] {
  max-width: 90vw;
  overflow: hidden;
}
div[class^="language-"] pre {
  font-size: var(--fontSizeXS);
  margin-bottom: 1.5em;
}

/* Placement */
header {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

main {
  grid-column: 1;
  grid-row: 3;
  word-break: break-word;
}

picture {
  grid-column: 1;
  grid-row: 1;
  width: 240px;
  height: 240px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  z-index: 1;
  border-radius: 50%;
}

footer {
  align-items: flex-end;
  color: var(--textColorLight);
  display: flex;
  font-size: var(--fontSizeXS);
  grid-column: 1;
  grid-row: 4;
  justify-content: flex-end;
  text-align: right;
}

picture img {
  filter: grayscale(1);
  height: auto;
  width: 100%;
}

article,
section {
  margin-bottom: var(--spacingL);
}
article:last-of-type {
  margin-bottom: 0;
}

@media (min-width: 840px) {
  .wrapper {
    grid-template-columns: minmax(100px, 1fr) minmax(640px, 3fr);
    grid-template-rows: var(--spacingL) 1fr var(--spacingM);
    padding: var(--spacingS);
  }
  header {
    grid-column: 2;
    grid-row: 1;
    z-index: 2;
  }
  main {
    grid-column: 2;
    grid-row: 2;
  }
  picture {
    grid-column: 1;
    border-radius: 50%;
    height: var(--spacingL);
    width: var(--spacingL);
  }
  picture img {
    height: auto;
    width: 100%;
  }
  picture:before,
  picture:after {
    display: none;
  }
  footer {
    grid-column: 2;
    grid-row: 3;
    z-index: 2;
  }
}

@media (min-width: 1130px) {
  .wrapper {
    grid-template-columns: 200px 640px auto;
  }
}
</style>
