/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        Roboto:["RobotoCondensed", "sans"],        
        Slab:["Robotoslab","sans"]
      },
      backgroundImage:{
        Background01:"url('/src/components/Img/jodi01.jpg')",   
        Background02:"url('/src/components/Img/jodi02.jpg')",
        Background03:"url('/src/components/Img/jodi03.jpg')", 
        Background04:"url('/src/components/Img/jodi04.jpg')", 
        Background05:"url('/src/components/Img/jodi05.jpg')" 
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}