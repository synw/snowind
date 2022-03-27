const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/@snowind/**/*.{vue,js,ts}',
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@snowind/plugin'),
    require('tailwindcss-semantic-colors'),
    require('tailwind-scrollbar-hide'),
  ],
  theme: {
    extend: {
      semanticColors: {
        var: {
          light: {
            bg: colors.red[500],
            txt: colors.white
          },
          dark: {
            bg: colors.yellow[300],
            txt: colors.neutral[600]
          }
        },
        accent: {
          light: {
            bg: colors.pink[500],
            txt: colors.white
          },
          dark: {
            bg: colors.purple[600],
            txt: colors.neutral[100]
          }
        },
      }
    },
  }
}