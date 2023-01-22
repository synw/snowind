import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: '@snowind/header',
      formats: ['es', 'umd'],
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
  },
  resolve: {
    alias: {
      'vue': path.resolve(__dirname, 'node_modules/vue')
    }
  }
})