module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui'],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: 'transparent',
              backgroundClip: 'text',
              backgroundImage: `linear-gradient(to bottom right, ${theme(
                'colors.yellow.500'
              )}, ${theme('colors.red.400')}, ${theme('colors.pink.600')})`,
              lineHeight: 1.15,
            },
            h2: {
              color: 'transparent',
              backgroundClip: 'text',
              backgroundImage: `linear-gradient(to bottom right, ${theme(
                'colors.yellow.500'
              )}, ${theme('colors.red.400')}, ${theme('colors.pink.600')})`,
              lineHeight: 1.15,
            },
            h3: {
              color: theme('colors.gray.600'),
            },
            h4: {
              color: theme('colors.gray.600'),
            },
            h5: {
              color: theme('colors.gray.600'),
            },
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
