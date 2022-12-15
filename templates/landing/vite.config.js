import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'
import fs from 'fs'

var fileNames = fs.readdirSync(resolve(__dirname, './src/'))
var htmlFiles = fileNames.filter(file => /.html$/.test(file))
var inputFiles = {}
for (var i = 0; i < htmlFiles.length; i++) {
  var file = htmlFiles[i]
  inputFiles[file.slice(0, -5)] = resolve(__dirname, './src/' + file)
}

export default defineConfig({
  target: 'es2015',
  root: 'src',
  build: {
    outDir: '../build',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
        assetFileNames: (into) => {
          var extType = into.name.split('.')[1];

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return 'assets/images/[name].[extname]';
          }
          if (extType === 'css') {
            return 'assets/css/[name].css';
          }
          return 'assets/[name].[extname]';
        },
      },
      input: inputFiles
    },
    emptyOutDir: true,
    manifest: false,
  },
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, './src/components')
      ],
    }),
  ],
})
