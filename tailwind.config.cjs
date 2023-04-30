/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base": "#040406",
        "primary-bg": "#0B0819",
        "primary": "#627EEA",
        "secondary": "#5A5A5A"
      },
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
