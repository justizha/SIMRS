/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./*.html"],
  theme: {
    extend: {
      fontFamily : {
        'font-inter': ['Inter','sans-serif'],
        'font-comfortaa' : ['Comfortaa', 'sans-serif']
      },
      colors : {
        'main-gray' : ['#2a2d33']
      }
    },
  },
  plugins: [],
}