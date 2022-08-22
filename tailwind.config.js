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
        'cowry-light': '#f4f7fa',
        'cowry-main': '#056dff',
        'cowry-gray': '#adbacd',
        'cowry-dark': '#0a2e65',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
    container: {
      center: true,
      padding: '1rem 0',
      screens: {
        lg: '1124px',
        xl: '1200px',
        '2xl': '1560px',
      },
    },
  },
  plugins: [],
}
