import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from "rollup-plugin-typescript2"
//import dts from 'vite-plugin-dts'
const path = require('path')

export default defineConfig({
  plugins: [
    typescript2({
      check: false,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      clean: true
    }),
    vue(),
    //dts({ outputDir: path.resolve(__dirname, 'dist') }),
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