import { defineConfig } from 'iles'
import WindiCSS from 'vite-plugin-windicss'

import generateOgImage from './src/scripts/generateOgImage'

export default defineConfig({
  siteUrl: 'https://herrsiering.de',
  vite: {
    plugins: [WindiCSS()],
  },
  ssg: {
    onSiteRendered: async (pages) => {
      pages.pages.forEach(async (page) => await generateOgImage(page))
    },
  },
})
