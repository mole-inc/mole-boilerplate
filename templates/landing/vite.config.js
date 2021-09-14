import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  root: 'src',
  build: {
    target: 'es2015',
  },
  plugins: [viteCompression()],
})
