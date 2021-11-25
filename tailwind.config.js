module.exports = {
  purge: {
    content: [
      './index.html',
      './src/**/*.html',
    ],
    options: {
      safelist: ['dark'],
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
