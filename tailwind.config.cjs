/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b1b1b",
        secondary: "#808080",
        active: "#f2f2f2",
        inactive: "#c4c4c4",
        cardBg: "#fbfbfb",
        cardBgHover: "#f1f1f1",
      },
    },
  },
  plugins: [],
}
