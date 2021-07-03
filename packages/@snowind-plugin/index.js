/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

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
      borderColor: theme('colors.neutral.DEFAULT'),
      '&:hover': {
        opacity: '0.9',
      },
      '&:disabled': {
        opacity: '0.75',
        cursor: 'not-allowed'
      },
      '&.primary': {
        backgroundColor: theme('colors.primary.DEFAULT'),
        color: theme('colors.primary-r.DEFAULT'),
        borderColor: theme('colors.primary.DEFAULT'),
      },
      '&.secondary': {
        backgroundColor: theme('colors.secondary.DEFAULT'),
        color: theme('colors.secondary-r.DEFAULT'),
        borderColor: theme('colors.secondary.DEFAULT'),
      },
      '&.neutral': {
        backgroundColor: theme('colors.neutral.DEFAULT'),
        color: theme('colors.neutral-r.DEFAULT'),
        borderColor: theme('colors.neutral.DEFAULT'),
      },
      '&.light': {
        backgroundColor: theme('colors.light.DEFAULT'),
        color: theme('colors.light-r.DEFAULT'),
        borderColor: theme('colors.light.DEFAULT'),
      },
      '&.danger': {
        backgroundColor: theme('colors.danger.DEFAULT'),
        color: theme('colors.danger-r.DEFAULT'),
        borderColor: theme('colors.danger.DEFAULT'),
      },
      '&.warning': {
        backgroundColor: theme('colors.warning.DEFAULT'),
        color: theme('colors.warning-r.DEFAULT'),
        borderColor: theme('colors.warning.DEFAULT'),
      },
      '&.success': {
        backgroundColor: theme('colors.success.DEFAULT'),
        color: theme('colors.success-r.DEFAULT'),
        borderColor: theme('colors.success.DEFAULT'),
      }
    },
    '.sw-slide-x': {
      overflowX: 'hidden',
      transitionProperty: 'width',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '300ms',
    },
    '.sw-slide-y': {
      overflowY: 'hidden',
      transitionProperty: 'max-height',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '300ms',
    },
    '.sw-sidebar': {
      width: '80px', // w-20
      '&.opened': {
        width: '208px' // w-52
      }
    },
    '.sw-slidedown': {
      maxHeight: '1000px'
    },
    '.sw-slideup': {
      maxHeight: '0'
    },
    '.sw-input': {
      '@apply rounded-sm': {},
      '& label': {
        backgroundColor: theme('colors.background.DEFAULT'),
        top: '0%',
        transform: 'translateY(-50%)',
        'font-size': '0.8em',
        '&.neutral': {
          color: theme('colors.foreground.DEFAULT'),
        },
        '&.valid': {
          color: theme('colors.success.DEFAULT'),
        },
        '&.invalid': {
          color: theme('colors.danger.DEFAULT'),
        },
      },
      '& .neutral': {
        borderColor: theme('colors.neutral.DEFAULT'),
      },
      '& .valid': {
        borderColor: theme('colors.success.DEFAULT'),
      },
      '& .invalid': {
        borderColor: theme('colors.danger.DEFAULT'),
      },
      '& :focus': {
        '@apply outline-none shadow-none ring': {},
        '&.neutral': {
          '@apply ring-neutral': {}
        },
        '&.valid': {
          '@apply ring-success': {}
        },
        '&.invalid': {
          '@apply ring-danger': {}
        },
      }
    },
    '.sw-switch': {
      'max-width': '2.5rem', // w-10,
      '&.big': {
        'max-width': '3.5rem', /// w-14
      },
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
      '& .btn': {
        borderColor: theme('colors.neutral.dark'),
        color: theme('colors.foreground.dark'),
        '&.primary': {
          backgroundColor: theme('colors.primary.dark'),
          color: theme('colors.primary-r.dark'),
          borderColor: theme('colors.primary.dark'),
        },
        '&.secondary': {
          backgroundColor: theme('colors.secondary.dark'),
          color: theme('colors.secondary-r.dark'),
          borderColor: theme('colors.secondary.dark'),
        },
        '&.neutral': {
          backgroundColor: theme('colors.neutral.dark'),
          color: theme('colors.neutral-r.dark'),
          borderColor: theme('colors.neutral.dark'),
        },
        '&.light': {
          backgroundColor: theme('colors.light.dark'),
          color: theme('colors.light-r.dark'),
          borderColor: theme('colors.light.dark'),
        },
        '&.danger': {
          backgroundColor: theme('colors.danger.dark'),
          color: theme('colors.danger-r.dark'),
          borderColor: theme('colors.danger.dark'),
        },
        '&.warning': {
          backgroundColor: theme('colors.warning.dark'),
          color: theme('colors.warning-r.dark'),
          borderColor: theme('colors.warning.dark'),
        },
        '&.success': {
          backgroundColor: theme('colors.success.dark'),
          color: theme('colors.success-r.dark'),
          borderColor: theme('colors.success.dark'),
        }
      },
      '& .sw-input': {
        '& input': {
          backgroundColor: theme('colors.background.dark'),
        },
        '& label': {
          backgroundColor: theme('colors.background.dark'),
          '&.neutral': {
            color: theme('colors.foreground.dark'),
          },
          '&.valid': {
            color: theme('colors.success.dark'),
          },
          '&.invalid': {
            color: theme('colors.danger.dark'),
          }
        },
        '& .neutral': {
          borderColor: theme('colors.neutral.dark'),
        },
        '& .valid': {
          borderColor: theme('colors.success.dark'),
        },
        '& .invalid': {
          borderColor: theme('colors.danger.dark'),
        },
        '& :focus': {
          '&.neutral': {
            '@apply ring-neutral-dark': {}
          },
          '&.valid': {
            '@apply ring-success-dark': {}
          },
          '&.invalid': {
            '@apply ring-danger-dark': {}
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
        'primary': {
          DEFAULT: colors.cyan[700],
          dark: colors.cyan[700],
        },
        'primary-r': {
          DEFAULT: colors.white,
          dark: colors.white
        },
        'secondary': {
          DEFAULT: colors.cyan[500],
          dark: colors.cyan[500],
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
          dark: colors.coolGray[300]
        },
        'neutral-r': {
          DEFAULT: colors.white,
          dark: colors.gray[800]
        },
        'light': {
          DEFAULT: colors.warmGray[200],
          dark: colors.gray[500]
        },
        'light-r': {
          DEFAULT: colors.gray[800],
          dark: colors.white
        },
        'background': {
          DEFAULT: colors.white,
          dark: colors.coolGray[600]
        },
        'foreground': {
          DEFAULT: colors.gray[800],
          dark: colors.white
        }
      }
    }
  }
});