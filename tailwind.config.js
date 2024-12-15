/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#f1c40f",
        danger: "#e74c3c",
      },
      fontFamily: {
        hello: ["Inter", "sans-serif"],
        Popin: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
}

