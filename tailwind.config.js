/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'top-shadow': '0 -5px 10px rgba(0, 0, 0, 0.2)', // Customize values as needed
      }
    },
    fontFamily: {
      baloo: ["Baloo"],
    },
  },
  plugins: [],
}
