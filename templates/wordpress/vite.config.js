import { defineConfig } from 'vite'

export default defineConfig({
  root: 'theme',
  build: {
    target: 'es2015',
    rollupOptions: {
      input: {
        input: 'theme/assets/scripts/main.js',
      },
      output: {
        entryFileNames: 'input.js',
        assetFileNames: '[name][extname]',
      },
    },
    outDir: 'assets/build',
    emptyOutDir: true,
    manifest: false,
  },
})
