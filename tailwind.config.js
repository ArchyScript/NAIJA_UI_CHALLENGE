module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'naija-ui-light': '1',
        'naija-ui-main': '#eead58',
        'naija-ui-semi-light': '#292b2b',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
    container: {},
  },
  plugins: [],
}
