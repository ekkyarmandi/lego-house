/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comic Neue", "cursive"],
      },
      colors: {
        primary: {
          400: "#FF3333",
          500: "#FF3333",
        },
        secondary: {
          400: "#379FFB",
          500: "#0586F8",
        }
      }
    },
  },
  plugins: [],
}