const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

function createSwitch(theme, colorname) {
  const light = {
    '& .dot': {
      backgroundColor: theme(`semanticColors.light.light.txt`),
      'width': '1rem', // w-4
      'height': '1rem', // h-4
      '&.big': {
        'width': '1.5rem', // w-6
        'height': '1.5rem', // h-6
      }
    },
    '& .bg': {
      backgroundColor: theme(`semanticColors.light.light.bg`),
      'width': '2.5rem', // w-10
      'height': '1.5rem', // h-6
      '&.big': {
        'width': '3.5rem', // w-10
        'height': '2rem', // h-8
      },
    },
    '& input:checked ~ .dot': {
      'transform': 'translateX(100%)',
      backgroundColor: theme(`semanticColors.${colorname}.light.txt`),
    },
    '& input:checked ~ .bg': {
      backgroundColor: theme(`semanticColors.${colorname}.light.bg`),
    },
  }
  const dark = {
    '& .dot': {
      backgroundColor: theme(`semanticColors.light.dark.txt`),
    },
    '& .bg': {
      backgroundColor: theme(`semanticColors.light.dark.bg`),
    },
    '& input:checked ~ .dot': {
      backgroundColor: theme(`semanticColors.${colorname}.dark.txt`),
    },
    '& input:checked ~ .bg': {
      backgroundColor: theme(`semanticColors.${colorname}.dark.bg`),
    },
  }
  return {
    light: light,
    dark: dark,
  }
}

module.exports = plugin(function ({ addComponents, theme }) {
  const components = {
    '.btn': {
      borderWidth: '1px',
      borderRadius: '0.25rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem',
      letterSpacing: '0.05em',
      cursor: 'pointer',
      borderColor: 'transparent',
      '&:hover': { opacity: '0.9' },
      '&:disabled': {
        opacity: '0.75',
        cursor: 'not-allowed'
      },
    },
    '.slide-x': {
      overflowX: 'hidden',
      transitionProperty: 'width',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '300ms',
    },
    '.slide-y': {
      overflowY: 'hidden',
      transitionProperty: 'max-height',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '300ms',
    },
    '.slidedown': { maxHeight: '1000px' },
    '.slideup': { maxHeight: '0' },
    '.sw-sidebar': {
      width: '80px', // w-20
      '&.opened': {
        width: '208px' // w-52
      }
    },
    '.sw-input': {
      '@apply rounded-sm': {},
      '& label': {
        backgroundColor: theme('semanticColors.background.light.bg'),
        top: '0%',
        transform: 'translateY(-50%)',
        'font-size': '0.8em',
        '&.unset': { color: theme('semanticColors.background.light.txt') },
        '&.valid': { color: theme('semanticColors.success.light.bg') },
        '&.invalid': { color: theme('semanticColors.danger.light.bg') },
      },
      '& .unset': { borderColor: theme('semanticColors.light.light.bg') },
      '& .valid': { borderColor: theme('semanticColors.success.light.bg') },
      '& .invalid': { borderColor: theme('semanticColors.danger.light.bg') },
      '& :focus': {
        '@apply outline-none shadow-none ring': {},
        '&.unset': {
          [`@apply ring-[${theme('semanticColors.light.light.bg')}] ring-opacity-10`]: {}
        },
        '&.valid': {
          [`@apply ring-[${theme('semanticColors.success.light.bg')}] ring-opacity-10`]: {}
        },
        '&.invalid': {
          [`@apply ring-[${theme('semanticColors.danger.light.bg')}] ring-opacity-10`]: {}
        },
      }
    },
    '.dark': {
      '& .sw-input': {
        '& input': {
          backgroundColor: theme('semanticColors.background.dark.bg'),
        },
        '& label': {
          backgroundColor: theme('semanticColors.background.dark.bg'),
          '&.unset': { color: theme('semanticColors.background.dark.txt') },
          '&.valid': { color: theme('semanticColors.success.dark.bg') },
          '&.invalid': { color: theme('semanticColors.danger.dark.bg') },
        },
        '& .unset': { borderColor: theme('semanticColors.light.dark.bg') },
        '& .valid': { borderColor: theme('semanticColors.success.dark.bg') },
        '& .invalid': { borderColor: theme('semanticColors.danger.dark.bg') },
      },
      '& :focus': {
        '@apply outline-none shadow-none ring': {},
        '&.unset': {
          [`@apply ring-[${theme('semanticColors.light.dark.bg')}] ring-opacity-10`]: {}
        },
        '&.valid': {
          [`@apply ring-[${theme('semanticColors.success.dark.bg')}] ring-opacity-10`]: {}
        },
        '&.invalid': {
          [`@apply ring-[${theme('semanticColors.danger.dark.bg')}] ring-opacity-10`]: {}
        },
      }
    },
  }
  const semColors = theme('semanticColors');
  Object.keys(semColors).forEach((c) => {
    const { light, dark } = createSwitch(theme, c);
    components[`.switch-${c}`] = light;
    components['.dark'][`.switch-${c}`] = dark;
  });
  addComponents(components);
}, {
  theme: {
    extend: {
      colors: ({ theme }) => ({
        'background-dark': theme('semanticColors.background.dark.bg'),
        'foreground-dark': theme('semanticColors.background.dark.txt')
      })
    },
    semanticColors: {
      primary: {
        light: {
          bg: colors.cyan[700],
          txt: colors.white
        },
        dark: {
          bg: colors.cyan[800],
          txt: colors.neutral[100]
        }
      },
      secondary: {
        light: {
          bg: colors.cyan[500],
          txt: colors.white
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.neutral[100]
        }
      },
      success: {
        light: {
          bg: colors.green[600],
          txt: colors.white
        },
        dark: {
          bg: colors.green[600],
          txt: colors.neutral[100]
        }
      },
      warning: {
        light: {
          bg: colors.amber[500],
          txt: colors.white
        },
        dark: {
          bg: colors.amber[500],
          txt: colors.neutral[100]
        }
      },
      danger: {
        light: {
          bg: colors.red[500],
          txt: colors.white
        },
        dark: {
          bg: colors.red[400],
          txt: colors.neutral[100]
        }
      },
      light: {
        light: {
          bg: colors.gray[500],
          txt: colors.white
        },
        dark: {
          bg: colors.gray[300],
          txt: colors.gray[800]
        }
      },
      lighter: {
        light: {
          bg: colors.slate[200],
          txt: colors.gray[800]
        },
        dark: {
          bg: colors.neutral[700],
          txt: colors.white
        }
      },
      background: {
        light: {
          bg: colors.white,
          txt: colors.gray[800]
        },
        dark: {
          bg: "#272822",
          txt: colors.neutral[300]
        }
      },
    }
  }
})