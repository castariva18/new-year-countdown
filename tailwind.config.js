const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#010001",
        darkGrey: "#1c1c1c",
        primaryLight: "#EAE9EA",
        textLight: "#0F172A",
        textRed: "#ee5486",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        signature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
