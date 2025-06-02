/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html", "./dist/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

