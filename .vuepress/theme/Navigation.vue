<template>
  <nav>
    <ul>
      <li v-for="page in navList" :key="page.key">
        <router-link :to="page.path">{{ page.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      required: true
    }
  }
};
</script>


<style scoped>
nav {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}
ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

a:link,
a:visited {
  color: var(--textColorLightest);
  display: inline-block;
  font-size: var(--fontSizeXS);
  padding: var(--spacingXS);
  position: relative;
  text-decoration: none;
}

a:hover,
a:focus,
a:active,
a.router-link-exact-active {
  color: var(--accentColor);
}

a::before {
  content: "";
  width: 80%;
  position: absolute;
  bottom: 2px;
  height: 4px;
  background-color: var(--accentColor);
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform var(--animationDuration) ease-in-out;
}
.router-link-exact-active[href="/"]::before,
.router-link-active:not([href="/"])::before {
  transform: scaleX(1);
}

@media (min-width: 840px) {
  nav {
    align-items: center;
  }
  nav ul {
    justify-content: flex-start;
  }
  nav ul li {
    margin-right: var(--spacingS);
  }
  a:link,
  a:visited {
    font-size: var(--fontSizeS);
  }
}
</style>
