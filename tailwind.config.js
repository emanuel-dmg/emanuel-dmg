/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {
      colors:{
        'primary-p':"#C0B7F9",
        'primary-g':"#A7FFEF",

        'prime-p': "#A78BFA",
        'fade-w': "255,255,255,0.4"
      }
    },
  },
  plugins: [],
}
