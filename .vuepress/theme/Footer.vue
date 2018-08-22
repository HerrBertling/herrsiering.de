<template>
  <nav>
    <ul>
      <li>
        <router-link to="/imprint.html">Impressum</router-link>
      </li>
      <li>
        <router-link to="/privacy.html">Datenschutz</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
nav a:link,
nav a:visited {
  font-size: var(--fontSizeXS);
  margin-left: var(--spacingS);
}
</style>
