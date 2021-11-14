import { defineConfig } from 'iles'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  siteUrl: 'https://herrsiering.de',
  vite: {
    plugins: [WindiCSS()],
  },
})
