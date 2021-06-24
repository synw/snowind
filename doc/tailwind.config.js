/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
//const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        /*'success': {
          DEFAULT: colors.yellow[500],
          dark: colors.yellow[700],
        },
        'success-r': {
          DEFAULT: colors.black,
          dark: colors.black
        }*/
      }
    },
  },
  //mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  variants: {},
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@snowind/plugin')
  ],
};
