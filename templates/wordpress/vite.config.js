import { defineConfig } from 'vite'

export default defineConfig({
  root: 'theme',
  build: {
    target: 'es2015',
    rollupOptions: {
      input: {
        input: 'theme/assets/scripts/main.js',
      },
    },
    outDir: 'assets/build',
    emptyOutDir: true,
    manifest: true,
  },
})
