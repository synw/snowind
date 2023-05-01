import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: '@snowind/state'
    },
    rollupOptions: {
      external: ['vue'],
      //input: "main.ts",
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})