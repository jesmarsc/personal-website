const colors = require('tailwindcss/colors');
const Color = require('color');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      gray: colors.trueGray,
      green: colors.emerald,
      purple: colors.purple,
      red: colors.red,
      white: colors.white,
      yellow: colors.amber,
      primary: {
        DEFAULT: '#272262',
        dark: Color('#272262').darken(0.5).hex(),
        light: Color('#272262').lighten(0.5).hex()
      },
      secondary: '#f8a9a1',
      highlight: '#f26c9d'
    },
    extend: {
      boxShadow: (theme) => ({
        highlight: `0px 0px 1rem ${theme('colors.highlight')}`
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
