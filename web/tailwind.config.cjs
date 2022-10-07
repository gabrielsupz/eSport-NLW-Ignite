/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('./public/fundo.png')",
        'nlw-gradient':
          'linear-gradient(89.86deg, #9572FC 35.08%, #43E7AD 65.94%, #E1D55D 20.57%);',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);'
      }
    }
  },
  plugins: []
}
