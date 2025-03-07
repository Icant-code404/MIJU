/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#ffae7c",
        orange: "#ff6300",
        redish: "#d12709",
        purpleish: "#511157",
      },
      fontFamily: {
        heading: ["Anton", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
