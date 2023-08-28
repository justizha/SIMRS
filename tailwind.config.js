/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./*.html"],
  theme: {
    extend: {
      fontFamily : {
        'inter': ['Inter','sans-serif'],
        'comfortaa' : ['Comfortaa', 'sans-serif']
      },
      colors : {
        'main-gray' : ['#2a2d33'],
        'main-blue' : ['#41abf2']
      }
    },
  },
  plugins: [],
}