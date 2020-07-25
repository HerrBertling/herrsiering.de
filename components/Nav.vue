<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li v-for="page in navigation" :key="page.slug">
        <nuxt-link :to="page.slug">
          {{ page.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navigation: [
        {
          title: 'About',
          slug: '/about',
        },
        {
          title: 'Books',
          slug: '/books',
        },
        {
          title: 'Principles',
          slug: '/principles',
        },
      ],
    }
  },
}
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
a[aria-current] {
  color: var(--accentColor);
}

a::before {
  content: '';
  width: 80%;
  position: absolute;
  bottom: 2px;
  height: 4px;
  background-color: var(--accentColor);
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform var(--animationDuration) ease-in-out;
}
[aria-current]::before {
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
