/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'pacifico': 'Pacifico, cursive, sans-serif',
      'unna': 'Unna, serif'
    },
    extend: {
      scrollbar: ['rounded-lg', 'tailwind-scrollbar-hide'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

