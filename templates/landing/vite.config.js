import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve, join } from 'path'
import fs from 'fs'

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      if (file !== 'components') {
        arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
      }
    } else {
      arrayOfFiles.push(join(dirPath, '/', file))
    }
  })

  return arrayOfFiles
}

const htmlFiles = getAllFiles(resolve(__dirname, './src/')).filter((file) =>
  /.html$/.test(file)
)

let inputFiles = {}

htmlFiles.forEach((file) => {
  const pathWithoutSrc = file.split('/src')[1]
  let fileName = pathWithoutSrc.slice(0, -5)
  fileName = fileName.replace(/^\//, '')
  inputFiles[fileName] = file
})

export default defineConfig({
  target: 'es2015',
  root: './src',
  build: {
    outDir: '../build',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.')[1]

          if (/png|webp|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return 'assets/images/[name].[ext]'
          }
          if (extType === 'css') {
            return 'assets/css/[name].[ext]'
          }
          return 'assets/[name].[ext]'
        },
      },
      input: inputFiles,
    },
    emptyOutDir: true,
    manifest: false,
  },
  plugins: [
    handlebars({
      partialDirectory: [resolve(__dirname, './src/components')],
    }),
  ],
})
