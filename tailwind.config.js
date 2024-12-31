/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4332',
          light: '#2D6A4F',
          dark: '#081C15',
        },
        accent: {
          DEFAULT: '#DDA15E',
          light: '#FEFAE0',
        },
      },
    },
  },
  plugins: [],
};