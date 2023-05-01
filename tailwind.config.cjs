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
        "secondary": "#5A5A5A",
        "navy-blue": "#1C1731",
        "outline-silver": "#46425E",
        "grey": "#C5C5C5",
        "grey-2": "#6F6F7E",
        "purple": "#6E56F8",
      },
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
