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

        bug: "#00A36C",
        dark: "#353535",
        dragon: "#0096b6",
        electric: "#F6CF57",
        fairy: "#f6abca",
        fighting: "#E84A27",
        fire: "#e25822",
        flying: "#f9ffe8",
        ghost: "#cabec0",
        grass: "#348C31",
        ground: "#804000",
        ice: "#DBF1FD",
        normal: "#f8f8f8",
        poison: "#7f01fe",
        psychic: "#f35390",
        rock: "#4b2c0d",
        steel: "#71797E",
        water: "#368BC1",
      },
      spacing: {
        38: "9.5rem",
      },
    },
  },
  plugins: [],
}
