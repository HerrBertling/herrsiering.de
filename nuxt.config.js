export default {
  target: 'static',
  modern: true,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal website of Markus Siering',
      },
    ],
  },
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    'nuxt-vite',
    'nuxt-windicss',
  ],
  vite: { ssr: true },
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
  content: {},
  build: {},
}
