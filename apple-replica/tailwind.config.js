/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
    theme: {
    extend: {
      colors: {
        'lightgray': '#f5f5f7',
        'darkgray': '#1d1d1f',
        'lightblue': '#0066cc',  
        'darkgray': '#1d1d1f',   

       
      },
    },
    fontFamily: {
      sans: ['SF Pro Text', 'SF Pro Icons' , 'Helvetica Neue' , 'Helvetica,Arial' ,' sans-serif'],
    },
  }, 
  colors: {
    'darkgray': '#1d1d1f',   
  },
  plugins: [],
}

