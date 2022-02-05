/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

module.exports = plugin(function ({ addUtilities, addComponents, theme }) {
  const utilities = {
    '.txt-background': { color: theme('colors.background.DEFAULT') },
    '.txt-primary': { color: theme('colors.primary.DEFAULT') },
    '.txt-secondary': { color: theme('colors.secondary.DEFAULT') },
    '.txt-neutral': { color: theme('colors.neutral.DEFAULT') },
    '.txt-light': { color: theme('colors.light.DEFAULT') },
    '.txt-danger': { color: theme('colors.danger.DEFAULT') },
    '.txt-warning': { color: theme('colors.warning.DEFAULT') },
    '.txt-success': { color: theme('colors.success.DEFAULT') },
    '.block-background': { backgroundColor: theme('colors.background.DEFAULT') },
    '.block-primary': { backgroundColor: theme('colors.primary.DEFAULT') },
    '.block-secondary': { backgroundColor: theme('colors.secondary.DEFAULT') },
    '.block-neutral': { backgroundColor: theme('colors.neutral.DEFAULT') },
    '.block-light': { backgroundColor: theme('colors.light.DEFAULT') },
    '.block-danger': { backgroundColor: theme('colors.danger.DEFAULT') },
    '.block-warning': { backgroundColor: theme('colors.warning.DEFAULT') },
    '.block-success': { backgroundColor: theme('colors.success.DEFAULT') },
    '.background': {
      backgroundColor: theme('colors.background.DEFAULT'),
      color: theme('colors.foreground.DEFAULT'),
    },
    '.primary': {
      backgroundColor: theme('colors.primary.DEFAULT'),
      color: theme('colors.primary-r.DEFAULT'),
    },
    '.secondary': {
      backgroundColor: theme('colors.secondary.DEFAULT'),
      color: theme('colors.secondary-r.DEFAULT'),
    },
    '.neutral': {
      backgroundColor: theme('colors.neutral.DEFAULT'),
      color: theme('colors.neutral-r.DEFAULT'),
    },
    '.light': {
      backgroundColor: theme('colors.light.DEFAULT'),
      color: theme('colors.light-r.DEFAULT'),
    },
    '.danger': {
      backgroundColor: theme('colors.danger.DEFAULT'),
      color: theme('colors.danger-r.DEFAULT'),
    },
    '.warning': {
      backgroundColor: theme('colors.warning.DEFAULT'),
      color: theme('colors.warning-r.DEFAULT'),
    },
    '.success': {
      backgroundColor: theme('colors.success.DEFAULT'),
      color: theme('colors.success-r.DEFAULT'),
    },
    '.background-dark': {
      backgroundColor: theme('colors.background.dark'),
      color: theme('colors.foreground.dark'),
    },
    '.primary-dark': {
      backgroundColor: theme('colors.primary.dark'),
      color: theme('colors.primary-r.dark'),
    },
    '.secondary-dark': {
      backgroundColor: theme('colors.secondary.dark'),
      color: theme('colors.secondary-r.dark'),
    },
    '.neutral-dark': {
      backgroundColor: theme('colors.neutral.dark'),
      color: theme('colors.neutral-r.dark'),
    },
    '.light-dark': {
      backgroundColor: theme('colors.light.dark'),
      color: theme('colors.light-r.dark'),
    },
    '.danger-dark': {
      backgroundColor: theme('colors.danger.dark'),
      color: theme('colors.danger-r.dark'),
    },
    '.warning-dark': {
      backgroundColor: theme('colors.warning.dark'),
      color: theme('colors.warning-r.dark'),
    },
    '.success-dark': {
      backgroundColor: theme('colors.success.dark'),
      color: theme('colors.success-r.dark'),
    },

  };
  addUtilities(utilities, {
    variants: ['hover', 'dark', 'responsive'],
  });
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
      '&:hover': { opacity: '0.9', },
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
        backgroundColor: theme('colors.background.DEFAULT'),
        top: '0%',
        transform: 'translateY(-50%)',
        'font-size': '0.8em',
        '&.unset': { color: theme('colors.foreground.DEFAULT') },
        '&.valid': { color: theme('colors.success.DEFAULT') },
        '&.invalid': { color: theme('colors.danger.DEFAULT') },
      },
      '& .unset': { borderColor: theme('colors.neutral.DEFAULT') },
      '& .valid': { borderColor: theme('colors.success.DEFAULT') },
      '& .invalid': { borderColor: theme('colors.danger.DEFAULT') },
      '& :focus': {
        '@apply outline-none shadow-none ring': {},
        '&.unset': {
          '@apply ring-neutral ring-opacity-10': {}
        },
        '&.valid': {
          '@apply ring-success ring-opacity-10': {}
        },
        '&.invalid': {
          '@apply ring-danger ring-opacity-10': {}
        },
      }
    },
    '.sw-switch': {
      '& .dot': {
        backgroundColor: theme('colors.light.DEFAULT'),
        'width': '1rem', // w-4
        'height': '1rem', // h-4
        '&.big': {
          'width': '1.5rem', // w-6
          'height': '1.5rem', // h-6
        }
      },
      '& .bg': {
        backgroundColor: theme('colors.neutral.DEFAULT'),
        'width': '2.5rem', // w-10
        'height': '1.5rem', // h-6
        '&.big': {
          'width': '3.5rem', // w-10
          'height': '2rem', // h-8
        },
      },
      '& input:checked ~ .dot': {
        'transform': 'translateX(100%)',
        backgroundColor: theme('colors.success-r.DEFAULT'),
      },
      '& input:checked ~ .bg': {
        backgroundColor: theme('colors.success.DEFAULT'),
      },
      '&.primary': {
        '& input:checked ~ .dot': {
          'transform': 'translateX(100%)',
          backgroundColor: theme('colors.primary-r.DEFAULT'),
        },
        '& input:checked ~ .bg': {
          backgroundColor: theme('colors.primary.DEFAULT'),
        }
      },
      '&.secondary': {
        '& input:checked ~ .dot': {
          'transform': 'translateX(100%)',
          backgroundColor: theme('colors.secondary-r.DEFAULT'),
        },
        '& input:checked ~ .bg': {
          backgroundColor: theme('colors.secondary.DEFAULT'),
        }
      },
      '&.danger': {
        '& input:checked ~ .dot': {
          'transform': 'translateX(100%)',
          backgroundColor: theme('colors.danger-r.DEFAULT'),
        },
        '& input:checked ~ .bg': {
          backgroundColor: theme('colors.danger.DEFAULT'),
        }
      },
      '&.warning': {
        '& input:checked ~ .dot': {
          'transform': 'translateX(100%)',
          backgroundColor: theme('colors.warning-r.DEFAULT'),
        },
        '& input:checked ~ .bg': {
          backgroundColor: theme('colors.warning.DEFAULT'),
        }
      },
    },
    '.dark': {
      '& .txt-background': { color: theme('colors.background.dark') },
      '& .txt-primary': { color: theme('colors.primary.dark') },
      '& .txt-secondary': { color: theme('colors.secondary.dark') },
      '& .txt-neutral': { color: theme('colors.neutral.dark') },
      '& .txt-light': { color: theme('colors.light.dark') },
      '& .txt-danger': { color: theme('colors.danger.dark') },
      '& .txt-warning': { color: theme('colors.warning.dark') },
      '& .txt-success': { color: theme('colors.success.dark') },
      '& .block-background': { backgroundColor: theme('colors.background.dark') },
      '& .block-primary': { backgroundColor: theme('colors.primary.dark') },
      '& .block-secondary': { backgroundColor: theme('colors.secondary.dark') },
      '& .block-neutral': { backgroundColor: theme('colors.neutral.dark') },
      '& .block-light': { backgroundColor: theme('colors.light.dark') },
      '& .block-danger': { backgroundColor: theme('colors.danger.dark') },
      '& .block-warning': { backgroundColor: theme('colors.warning.dark') },
      '& .block-success': { backgroundColor: theme('colors.success.dark') },
      '& .background': {
        backgroundColor: theme('colors.background.dark'),
        color: theme('colors.foreground.dark'),
      },
      '& .primary': {
        backgroundColor: theme('colors.primary.dark'),
        color: theme('colors.primary-r.dark'),
      },
      '& .secondary': {
        backgroundColor: theme('colors.secondary.dark'),
        color: theme('colors.secondary-r.dark'),
      },
      '& .neutral': {
        backgroundColor: theme('colors.neutral.dark'),
        color: theme('colors.neutral-r.dark'),
      },
      '& .light': {
        backgroundColor: theme('colors.light.dark'),
        color: theme('colors.light-r.dark'),
      },
      '& .danger': {
        backgroundColor: theme('colors.danger.dark'),
        color: theme('colors.danger-r.dark'),
      },
      '& .warning': {
        backgroundColor: theme('colors.warning.dark'),
        color: theme('colors.warning-r.dark'),
      },
      '& .success': {
        backgroundColor: theme('colors.success.dark'),
        color: theme('colors.success-r.dark'),
      },
      '& .sw-input': {
        '& input': {
          backgroundColor: theme('colors.background.dark'),
        },
        '& label': {
          backgroundColor: theme('colors.background.dark'),
          '&.unset': { color: theme('colors.foreground.dark') },
          '&.valid': { color: theme('colors.success.dark') },
          '&.invalid': { color: theme('colors.danger.dark') }
        },
        '& .unset': { borderColor: theme('colors.neutral.dark') },
        '& .valid': { borderColor: theme('colors.success.dark') },
        '& .invalid': { borderColor: theme('colors.danger.dark') },
        '& :focus': {
          '&.unset': {
            '@apply ring-neutral-dark ring-opacity-10': {}
          },
          '&.valid': {
            '@apply ring-success-dark ring-opacity-10': {}
          },
          '&.invalid': {
            '@apply ring-danger-dark ring-opacity-10': {}
          },
        }
      },
      '& .sw-switch': {
        '& .dot': {
          backgroundColor: theme('colors.light-r.dark'),
        },
        '&.bg': {
          backgroundColor: theme('colors.neutral.dark'),
        },
        '& input:checked ~ .dot': {
          backgroundColor: theme('colors.success-r.dark'),
        },
        'input:checked ~ .bg': {
          backgroundColor: theme('colors.success.dark'),
        },
        '&.primary': {
          '& input:checked ~ .dot': {
            'transform': 'translateX(100%)',
            backgroundColor: theme('colors.primary-r.dark'),
          },
          '& input:checked ~ .bg': {
            backgroundColor: theme('colors.primary.dark'),
          }
        },
        '&.secondary': {
          '& input:checked ~ .dot': {
            'transform': 'translateX(100%)',
            backgroundColor: theme('colors.secondary-r.dark'),
          },
          '& input:checked ~ .bg': {
            backgroundColor: theme('colors.secondary.dark'),
          }
        },
        '&.danger': {
          '& input:checked ~ .dot': {
            'transform': 'translateX(100%)',
            backgroundColor: theme('colors.danger-r.dark'),
          },
          '& input:checked ~ .bg': {
            backgroundColor: theme('colors.danger.dark'),
          }
        },
        '&.warning': {
          '& input:checked ~ .dot': {
            'transform': 'translateX(100%)',
            backgroundColor: theme('colors.warning-r.dark'),
          },
          '& input:checked ~ .bg': {
            backgroundColor: theme('colors.warning.dark'),
          }
        }
      }
    },
  }
  addComponents(components);
}, {
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        green: colors.emerald,
        'primary': {
          DEFAULT: colors.cyan[700],
          dark: colors.cyan[800],
        },
        'primary-r': {
          DEFAULT: colors.white,
          dark: colors.white,
        },
        'secondary': {
          DEFAULT: colors.cyan[500],
          dark: colors.slate[600],
        },
        'secondary-r': {
          DEFAULT: colors.white,
          dark: colors.white
        },
        'success': {
          DEFAULT: colors.green[600],
          dark: colors.green[600]
        },
        'success-r': {
          DEFAULT: colors.white,
          dark: colors.white
        },
        'warning': {
          DEFAULT: colors.amber[500],
          dark: colors.amber[500]
        },
        'warning-r': {
          DEFAULT: colors.white,
          dark: colors.white
        },
        'danger': {
          DEFAULT: colors.red[500],
          dark: colors.red[400]
        },
        'danger-r': {
          DEFAULT: colors.white,
          dark: colors.white
        },
        'neutral': {
          DEFAULT: colors.gray[500],
          dark: colors.gray[300]
        },
        'neutral-r': {
          DEFAULT: colors.white,
          dark: colors.gray[800]
        },
        'light': {
          DEFAULT: colors.slate[200],
          dark: colors.neutral[700]
        },
        'light-r': {
          DEFAULT: colors.gray[800],
          dark: colors.white
        },
        'background': {
          DEFAULT: colors.white,
          dark: colors.neutral[900]
        },
        'foreground': {
          DEFAULT: colors.gray[800],
          dark: colors.white
        }
      }
    }
  }
})