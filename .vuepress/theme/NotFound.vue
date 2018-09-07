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

<style>
:root {
  --spacingXS: 8px;
  --spacingS: 20px;
  --spacingM: 40px;
  --spacingL: 100px;
  --spacingXL: 200px;
  --fontSizeXS: 0.8rem;
  --fontSizeS: 1rem;
  --fontSizeM: 1.618rem;
  --fontSizeL: 2.218rem;
  --fontSizeXL: 2.618rem;
  --fontSizeXXL: 4.236rem;
  --mainColor: #1c71b1;
  --textColor: #192c42;
  --textColorLight: #4a5669;
  --textColorLightest: #616b7d;
  --accentColor: #d71c2f;
  --backgroundColorLight: #eef0f1;
  --headlineFont: Rockwell, Courier Bold, Courier, Georgia, Times,
    Times New Roman, serif;
  --bodyFont: Avenir, Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans,
    Helvetica Neue, Arial, sans-serif;
}

html {
  font-size: 20px;
}
body {
  margin: 0;
  padding: 0;
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
  grid-template-columns: 12px 1fr 12px;
  grid-template-rows: 50vh var(--spacingM) 1fr var(--spacingM);
  font-family: var(--bodyFont);
  font-size: var(--fontSizeS);
  line-height: 1.5;
}

/* Typography styles */

.standout {
  color: var(--textColorLightest);
  font-family: var(--headlineFont);
  font-size: var(--fontSizeXL);
  font-weight: bold;
  margin: 0 0 0.5em;
}

h1 {
  color: var(--mainColor);
  font-size: var(--fontSizeL);
  line-height: 1.15;
  margin: 0 0 1em;
}

h2 {
  color: var(--accentColor);
  font-size: var(--fontSizeM);
  line-height: 1.15;
  margin: 1.5em 0 0.5em;
}

h1,
h2 {
  font-family: var(--bodyFont);
}

h3 {
  color: var(--textColorLight);
  font-size: var(--fontSizeS);
  margin: 0.5em 0;
}
h4 {
  font-size: var(--fontSizeS);
  margin: 1.5em 0 0.5em;
}

p {
  margin: 0 0 1.5em;
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

small {
  font-size: var(--fontSizeXS);
}

small::before {
  content: "* ";
  display: inline;
  color: var(--accentColor);
}

.header-anchor {
  display: none;
}

/* Placement */
header {
  grid-column: 1 / -1;
  grid-row: 2;
}

main {
  grid-column: 2;
  grid-row: 3;
}

picture {
  grid-column: 1 / -1;
  grid-row: 1;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

footer {
  align-items: flex-end;
  color: var(--textColorLight);
  display: flex;
  font-size: var(--fontSizeXS);
  grid-column: 2;
  grid-row: 4;
  justify-content: flex-end;
  padding-bottom: var(--spacingS);
  text-align: right;
}

picture img {
  filter: grayscale(1);
  height: auto;
  width: 100%;
}

picture:before,
picture:after {
  content: "";
  display: block;
  mix-blend-mode: multiply;
  opacity: 0.5;
  position: absolute;
  z-index: 1;
}

picture:before {
  background-color: var(--accentColor);
  border-radius: 50%;
  height: 40vw;
  width: 40vw;
  top: -15%;
  right: -20%;
}

picture:after {
  background-color: var(--mainColor);
  height: 90vh;
  transform: rotate(-45deg);
  width: 100vw;
  top: 10vh;
  left: -70vw;
}

article,
section {
  margin-bottom: var(--spacingL);
}
article:last-of-type {
  margin-bottom: 0;
}

@media (min-width: 750px) {
  .wrapper {
    grid-gap: var(--spacingM);
    grid-template-columns: 49vw 1fr 12px;
    grid-template-rows: var(--spacingL) 1fr var(--spacingM);
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
    height: 100vh;
    width: 48vw;
    position: fixed;
  }
  picture img {
    height: 100%;
    transform: translateX(-2vw);
    width: auto;
  }
  picture:before {
    right: -20vw;
    top: -15vh;
  }
  picture:after {
    bottom: -60%;
    height: 100%;
    top: auto;
  }
  footer {
    grid-row: 3;
    z-index: 2;
  }
}

@media (min-width: 810px) {
  picture img {
    height: 100%;
    transform: translateX(0);
    width: auto;
  }
}

@media (min-width: 1130px) {
  .wrapper {
    grid-template-columns: 560px 1fr 24px;
  }
  header,
  main,
  footer {
    max-width: 700px;
  }
  picture {
    width: 540px;
  }
  picture:before {
    right: -25vw;
    top: -25vh;
  }
  picture:after {
    bottom: -90%;
    height: 130%;
    top: auto;
  }
}
</style>
