module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        azul: '#1B9CFC',
        verde: '#43cba1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
