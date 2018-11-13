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
      ).reverse();
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
  @import '~prismjs/themes/prism-tomorrow.css';
  :root {
    --spacingXS: 8px;
    --spacingS: 20px;
    --spacingM: 40px;
    --spacingL: 100px;
    --spacingXL: 200px;
    --fontSizeXS: 0.8rem;
    --fontSizeS: 1rem;
    --fontSizeM: 1.414rem;
    --fontSizeL: 1.999rem;
    --fontSizeXL: 2.827rem;
    --fontSizeXXL: 3.998rem;
    --mainColor: #1c71b1;
    --textColor: #192c42;
    --textColorLight: #4a5669;
    --textColorLightest: #616b7d;
    --accentColor: #d71c2f;
    --backgroundColorLight: #eef0f1;
    --backgroundBasic: white;
    --headlineFont: Rockwell, Courier Bold, Courier, Georgia, Times,
      Times New Roman, serif;
    --bodyFont: Avenir, Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans,
      Helvetica Neue, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 20px;
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
    grid-row-gap: var(--spacingS);
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
    line-height: 1.15;
    margin: 0 0 1em;
  }

  h2 {
    color: var(--accentColor);
    font-size: var(--fontSizeL);
    line-height: 1.15;
    margin: 1.5em 0 0.5em;
  }

  h1,
  h2 {
    font-family: var(--bodyFont);
  }

  h3 {
    color: var(--textColorLight);
    font-size: var(--fontSizeM);

    margin: 0.5em 0;
  }
  h4 {
    font-size: var(--fontSizeS);
    margin: 1.5em 0 0.5em;
  }

  p {
    margin: 0 0 1.5em;
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
  }

  main {
    grid-column: 1;
    grid-row: 3;
    max-width: 90vw;
    word-break: break-word;
    padding: 0 var(--spacingXS);
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
    padding: 0 var(--spacingXS) var(--spacingS);
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
      grid-gap: var(--spacingS);
      grid-template-columns: minmax(100px, 1fr) minmax(700px, 3fr);
      grid-template-rows: var(--spacingL) 1fr var(--spacingM);
      padding: var(--spacingS);
    }
    header,
    main,
    footer {
      max-width: 700px;
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
      grid-template-columns: 200px 1fr 24px;
    }
  }

  @media (prefers-color-scheme: dark) {
    body {
      --mainColor: #7399c8;
      --textColor: #f2f5fa;
      --textColorLight: #d6e0ef;
      --textColorLightest: #adc0de;
      --accentColor: #ee7068;
      --backgroundBasic: #192c42;
      --backgroundColorLight: #192c42;
      font-weight: 300;
      line-height: 1.7;
      word-spacing: .05em;
    }
  }
</style>
