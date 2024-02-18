import { defineConfig, loadEnv } from 'vite'
import svg from 'vite-plugin-svgo'
const path = require('path')

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src'),
      },
    },
    build: {
      lib: {
        fileName: 'index',
        entry: 'src/index.ts',
        format: ['es'],
        name: 'DuseWebComponent',
      },
      minify: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo?.name?.split('.').at(1) || ''
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img'
            }
            return `assets/${extType}/[name]-[hash][extname]`
          },
          chunkFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').at(1)
            return 'assets/js/[name]-[hash].js'
          },
        },
      },
    },
    plugins: [
      svg({
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                convertColors: {
                  currentColor: true,
                },
              },
            },
          },
        ],
      }),
    ],
  }
})
