/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iranyekan"],
      },
      container: {
        center: "center",
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
