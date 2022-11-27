/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "hsl(207, 26%, 17%)",
        DarkBlue: "hsl(209, 23%, 22%)",
      }
    },
  },
  plugins: [],
}
