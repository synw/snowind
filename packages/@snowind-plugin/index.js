const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

function createStepper(theme, colorname) {
  const light = {
    '& .active': {
      '& .stepper-step': {
        color: theme(`semanticColors.${colorname}.light.txt`),
        backgroundColor: theme(`semanticColors.${colorname}.light.bg`),
        borderColor: theme(`semanticColors.${colorname}.light.bg`),
      },
      '& .stepper-label': {
        color: theme(`semanticColors.${colorname}.light.bg`),
      },
    },
    '& .done': {
      '& .stepper-step': {
        color: theme(`semanticColors.${colorname}.light.bg`),
        borderColor: theme(`semanticColors.${colorname}.light.bg`),
      },
      '& .stepper-label': {
        color: theme(`semanticColors.${colorname}.light.bg`),
      },
    },
    '& .stepper-line.done': {
      borderColor: theme(`semanticColors.${colorname}.light.bg`),
    }
  }
  const dark = {
    '& .active': {
      '& .stepper-step': {
        color: theme(`semanticColors.${colorname}.dark.txt`),
        backgroundColor: theme(`semanticColors.${colorname}.dark.bg`),
        borderColor: theme(`semanticColors.${colorname}.dark.bg`),
      },
      '& .stepper-label': {
        color: theme(`semanticColors.${colorname}.dark.bg`),
      },
    },
    '& .done': {
      '& .stepper-step': {
        color: theme(`semanticColors.${colorname}.dark.bg`),
        borderColor: theme(`semanticColors.${colorname}.dark.bg`),
      },
      '& .stepper-label': {
        color: theme(`semanticColors.${colorname}.dark.bg`),
      },
    },
    '& .stepper-line.done': {
      borderColor: theme(`semanticColors.${colorname}.dark.bg`),
    }
  }
  return {
    lights: light,
    darks: dark,
  }
}

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
    '.sw-stepper': {
      '& .stepper-step': {
        width: '3rem', // w-12
        height: '3rem', // h-12
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transitionProperty: 'color',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '500ms',
        borderWidth: '2px',
        borderRadius: '9999px',
      },
      '& .stepper-label': {
        position: 'absolute',
        top: '0px',
        width: '8rem',
        marginTop: '4rem',
        marginLeft: '-2.5rem',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        fontWeight: '500',
        textAlign: 'center',
      },
      '& .stepper-line': {
        flex: '1 1 auto',
        transitionProperty: 'border-color',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '500ms',
        borderTopWidth: '2px',
      }
    },
    '.dark': {},
  }
  const semColors = theme('semanticColors');
  Object.keys(semColors).forEach((c) => {
    const { light, dark } = createSwitch(theme, c);
    components[`.switch-${c}`] = light;
    components['.dark'][`.switch-${c}`] = dark;
    const { lights, darks } = createStepper(theme, c);
    components[`.stepper-${c}`] = lights;
    components['.dark'][`.stepper-${c}`] = darks;
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
          bg: colors.neutral[950],
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
          bg: colors.gray[400],
          txt: colors.gray[800]
        }
      },
      lighter: {
        light: {
          bg: colors.slate[200],
          txt: colors.gray[800]
        },
        dark: {
          bg: colors.neutral[600],
          txt: colors.white
        }
      },
      semilight: {
        light: {
          bg: colors.slate[400],
          txt: colors.gray[800]
        },
        dark: {
          bg: colors.neutral[500],
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