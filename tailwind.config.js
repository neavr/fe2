/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    
  ],
  plugins: [
    require('flowbite/plugin')
],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'Sans-serif']
    },
      extend: {
        colors: {
            'blue01': '#3593BC',
            'grey01': '#696969',
        },
      },
   
  },
  plugins: [],
}