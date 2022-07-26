/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        // => @media (min-width: 375px) { ... }
      },
    },
  },
  plugins: [],
}
