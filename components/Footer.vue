<template>
  <nav>
    <small>Links to Amazon are affiliate links.</small>
    <ul>
      <li>
        <nuxt-link to="/imprint">Imprint</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/privacy">Privacy</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
a:link,
a:visited {
  font-size: var(--fontSizeXS);
  margin-left: var(--spacingS);
}
small {
  font-size: var(--fontSizeXS);
}

small::before {
  content: '* ';
  display: inline;
  color: var(--accentColor);
}
</style>
