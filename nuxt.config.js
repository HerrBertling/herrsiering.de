import getSiteMeta from './utils/getSiteMeta'

const meta = getSiteMeta()

export default {
  target: 'static',
  modern: true,
  head: {
    titleTemplate: '%s - Markus Siering',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  css: ['~assets/global.css'],
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
