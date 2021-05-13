const colors = require('windicss/colors')
module.exports = {
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: 'transparent',
              backgroundClip: 'text',
              backgroundImage:
                'linear-gradient(to bottom right, #eab308, #fb7185, #db2777)',
            },
            h2: {
              color: 'transparent',
              backgroundClip: 'text',
              backgroundImage:
                'linear-gradient(to bottom right, #eab308, #fb7185, #db2777)',
            },
            h3: {
              color: '#52525b',
            },
            h4: {
              color: '#52525b',
            },
            h5: {
              color: '#52525b',
            },
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#2563eb',
              },
            },
          },
        },
        lg: {
          css: {
            h1: {
              lineHeight: 1.15,
            },
            h2: {
              lineHeight: 1.15,
            },
          },
        },
        xl: {
          css: {
            h1: {
              lineHeight: 1.15,
            },
            h2: {
              lineHeight: 1.15,
            },
          },
        },
      },
    },
  },
  extract: {
    include: ['./**/*.html', './**/*.vue'],
  },
  safelist: ['prose', 'prose-sm', 'm-auto'],
  plugins: [require('windicss/plugin/typography')],
}
