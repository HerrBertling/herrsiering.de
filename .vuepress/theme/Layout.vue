<template>
<div class="wrapper">
  <header>
    <Navigation />
  </header>
  <main>
    <Content />
  </main>
  <picture>
    <img src='./markus-siering.jpg' alt="Image of Markus Siering" />
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

export default {
  components: { Navigation, Footer },
  created() {
    console.log(this.$site);
    console.log(this.$page);
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
  --fontSizeXS: 0.7rem;
  --fontSizeS: 1rem;
  --fontSizeM: 1.618rem;
  --fontSizeL: 2.618rem;
  --fontSizeXL: 4.236rem;
  --fontSizeXXL: 6.854rem;
  --mainColor: #00a4a6;
  --textColor: #323d3e;
  --textColorLight: #576061;
  --textColorLightest: #7e8686;
  --accentColor: #e73c4e;
  --backgroundColorLight: #eff8f7;
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

h1 {
  color: var(--textColorLightest);
  font-family: var(--headlineFont);
  font-size: var(--fontSizeL);
  margin: 0 0 1.5em;
}

h2 {
  color: var(--mainColor);
  font-size: var(--fontSizeM);
}

h3 {
  color: var(--accentColor);
  font-size: var(--fontSizeS);
}

h2,
h3 {
  font-family: var(--bodyFont);
  margin: 0 0 1.5em;
}

h4 {
  color: var(--textColorLight);
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

article {
  margin-bottom: var(--spacingL);
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
