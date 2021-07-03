const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
