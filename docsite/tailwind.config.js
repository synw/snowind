const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', '../docs/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      safelist: ['sm:block', 'sm:hidden'],
    }
  },
  darkMode: 'class',
  theme: {
    extend: {
      /*colors: {
        'success': {
          DEFAULT: colors.yellow[500],
          dark: colors.yellow[700],
        },
        'success-r': {
          DEFAULT: colors.black,
          dark: colors.black
        }
      }*/
    },
  },
  jit: true,
  plugins: [
    require('@tailwindcss/forms'),
    require('@snowind/plugin')
  ],
}
