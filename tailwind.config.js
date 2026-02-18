/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vi-green': {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        'vi-gold': {
          DEFAULT: '#FFC107',
          light: '#FFD54F',
          dark: '#FFA000',
        },
        'vi-coral': {
          DEFAULT: '#FF5722',
          light: '#FF8A65',
          dark: '#E64A19',
        },
        'vi-gray': {
          DEFAULT: '#9E9E9E',
          light: '#EEEEEE',
          dark: '#616161',
        },
      },
    },
  },
  plugins: [],
};