const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      './src/**/*.njk',
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: '#2aa198',
        secondary: '#ff6565',
      },
      fontFamily: {
        sans: [
          "'Rubik'",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          "'Lemonada'",
          ...defaultTheme.fontFamily.serif,
        ],
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
};
