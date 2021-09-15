import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    target: 'es2015',
    outDir: '../build',
    emptyOutDir: true,
  },
})
