import { defineConfig } from 'iles'
import WindiCSS from 'vite-plugin-windicss'

import generateOgImage from './src/scripts/generateOgImage'

export default defineConfig({
  siteUrl: 'https://herrsiering.de',
  vite: {
    plugins: [WindiCSS()],
  },
  ssg: {
    onSiteRendered: (pages) => {
      pages.pages.forEach((page) => generateOgImage(page))
    },
  },
})
