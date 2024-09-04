/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8222CF",
        secondary: "#004AB8",
        bgGradientR: "#040009",
        bgGradientL: "#10051F",
      }
    },
  },
  plugins: [],
}

