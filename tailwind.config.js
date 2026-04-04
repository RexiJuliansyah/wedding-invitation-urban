/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-blue': {
          DEFAULT: '#7B95A6',
          dark: '#4A6B8C',
          light: '#A8B9C6',
        },
        'wedding-white': {
          DEFAULT: '#F8F9FA',
          soft: '#F1F3F5'
        },
        'wedding-gray': {
          DEFAULT: '#2C3E50',
          light: '#4B6584',
          lighter: '#8A9BA8'
        },
      },
      fontFamily: {
        heading: ['"Cormorant"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
