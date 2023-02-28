/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,vue,ts,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
