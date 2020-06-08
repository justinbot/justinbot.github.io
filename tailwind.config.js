const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
  },
  purge: {
    content: [
      './src/**/*.njk',
    ],
  },
  theme: {
    extend: {
      colors: {
        'primary': '#2aa198',
        'secondary': '#ff6565',
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
      borderWidth: {
        '16': '16px',
        '32': '32px',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
