import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main-page.ts',
      formats: ['es'],
    },
    rollupOptions: {},
  },
})
