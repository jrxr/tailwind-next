/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '700px'
      },
      
      colors: {
        rocket: '#8257e6'
      }
    },
  },
  plugins: [],
}
