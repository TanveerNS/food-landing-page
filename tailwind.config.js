/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:"#39DB4A",
        primaryLight: '#f0b24d',
        primaryDark:"#b77a0c",
        primary2: "#FF6868",
        secondaryLight: "#C1F1C6",
        secondary: "#272727",
        secondary2: "#4A4A4A",
        secondary3: "#FF6868",
      }
    },
  },
  plugins: [],
}

