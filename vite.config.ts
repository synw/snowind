import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from "rollup-plugin-typescript2"
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    typescript2({
      check: false,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      clean: true
    }),
    vue(),
  ],
  /*build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'snowind'
    },
    rollupOptions: {
      external: ['vue'],
      input: "src/index.ts",
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }*/
})
