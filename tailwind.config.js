
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
    },

    screens: {
      'web': {'min' : '1000px'},
      'mobile': {'min': '0px', 'max': '1000px'}
    },
    fontFamily: {
      'footer-font' : 'Raleway',

    }
  },
  plugins: [],
}