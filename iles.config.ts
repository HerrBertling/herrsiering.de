import { defineConfig } from 'iles'
import WindiCSS from 'vite-plugin-windicss'

import generateOgImages from './src/scripts/generateOgImage'

export default defineConfig({
  siteUrl: 'https://herrsiering.de',
  vite: {
    plugins: [WindiCSS()],
  },
  ssg: {
    onSiteRendered: async (pages) => {
      await generateOgImages(pages.pages)
    },
  },
})
