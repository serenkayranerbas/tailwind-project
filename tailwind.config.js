/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      screens:{
          lg: '1140px' ,
          xl: '1140px' ,
          '2xl': '1140px',
      }
    },
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", 'serif'],
        open: ["Open Sans", 'serif'],
      },
      colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
        'gega-green':'#b6b56a',
      },
      spacing:{
        128:'32rem',
        96:'24rem',
        56:'14rem',
        48:'12rem',
      }
    },
  },
  plugins: [],
}

