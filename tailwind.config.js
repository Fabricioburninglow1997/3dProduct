/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          300: '#A87B6D',
          600: '#795548',
          700: '#5D4037',
          800: '#3E2723',
          900: '#2D1810',
        },
      },
    },
  },
  plugins: [],
};