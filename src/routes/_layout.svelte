<script>
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
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

@media (min-width: 840px) {
  .wrapper {
    grid-template-columns: 120px 620px;
    grid-template-rows: var(--spacingL) 1fr var(--spacingM);
    padding: var(--spacingS);
  }
}

@media (min-width: 1130px) {
  .wrapper {
    grid-template-columns: 200px 640px auto;
  }
}

</style>
<div class="wrapper">
  <header>
    <Nav {segment} />
  </header>
  <main>
    <section>
      <slot />
    </section>
    <!-- <section v-if="isHome && postList.length > 1">
      <PostList :posts="postList" />
    </section> -->
  </main>
  <picture>
    <img
      srcset="
      /images/markus-siering_xvfke1_c_scale_w_200.jpg 200w,
      /images/markus-siering_xvfke1_c_scale_w_489.jpg 489w"
      src="/images/markus-siering_xvfke1_c_scale_w_489.jpg"
      alt="An image of me, Markus Siering">
  </picture>
  <footer>
    <Footer />
  </footer>
</div>