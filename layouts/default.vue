<template>
  <div class="wrapper">
    <header class="header">
      <Nav />
    </header>
    <main class="main">
      <section>
        <nuxt />
      </section>
    </main>
    <picture class="picture">
      <img
        class="image"
        srcset="
          ~/assets/images/markus-siering_xvfke1_c_scale_w_200.jpg 200w,
          ~/assets/images/markus-siering_xvfke1_c_scale_w_489.jpg 489w
        "
        src="~/assets/images/markus-siering_xvfke1_c_scale_w_489.jpg"
        alt="An image of me, Markus Siering"
      />
    </picture>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
  color: var(--textColor);
  display: grid;
  grid-gap: var(--spacingM);
  grid-template-columns: 1fr;
  grid-template-rows: 240px var(--spacingM) 1fr var(--spacingM);
  font-family: var(--bodyFont);
  font-size: var(--fontSizeS);
  line-height: 1.5;
  min-height: 100vh;
  max-width: 100vw;
  padding: var(--spacingS);
  border-top: 6px solid var(--mainColor);
}

.header {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main {
  grid-column: 1;
  grid-row: 3;
  word-break: break-word;
}

.picture {
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

.footer {
  align-items: flex-end;
  color: var(--textColorLight);
  display: flex;
  font-size: var(--fontSizeXS);
  grid-column: 1;
  grid-row: 4;
  justify-content: flex-end;
  text-align: right;
}

.image {
  filter: grayscale(1);
  height: auto;
  width: 100%;
}

@media (min-width: 840px) {
  .wrapper {
    grid-template-columns: 120px 620px;
    grid-template-rows: var(--spacingL) 1fr var(--spacingM);
    padding: var(--spacingS);
  }

  .header {
    grid-column: 2;
    grid-row: 1;
    z-index: 2;
  }
  .main {
    grid-column: 2;
    grid-row: 2;
  }
  .picture {
    grid-column: 1;
    border-radius: 50%;
    height: var(--spacingL);
    width: var(--spacingL);
  }
  .image {
    height: auto;
    width: 100%;
  }
  .footer {
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
