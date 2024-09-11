/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        customYellow: 'hsl(47, 88%, 63%)',
        customWhite: 'hsl(0, 0%, 100%)',
        customGray500: 'hsl(0, 0%, 42%)',
        customGray950: 'hsl(0, 0%, 7%)',
      },
      fontFamily:{
        figtree:['Figtree','sans-serif']
      },
      boxShadow: {
        'custom': '10px 10px 0px 0px black', // Custom shadow
      },
    },
  },
  plugins: [],
}