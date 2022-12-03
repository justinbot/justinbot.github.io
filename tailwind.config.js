const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.njk',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a8e6d2',
          dark: '#098760',
          DEFAULT: '#74c7ad',
        },
        secondary: '#ff6565',
        gray: colors.gray,
        midnight: {
          900: '#0e1526',
          800: '#121b2e',
          700: '#21223b',
          600: '#282842',
          500: '#4a4e68',
          400: '#9a8c98',
          300: '#c9ada7',
          200: '#e3d5d1',
          100: '#f2e9e4',
        },
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
