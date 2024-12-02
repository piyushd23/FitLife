/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9ff',
          100: '#e8eaff',
          200: '#d1d4ff',
          300: '#a6acff',
          400: '#7C83FF',
          500: '#5158FF',
          600: '#3339CC',
          700: '#262B99',
          800: '#1A1D66',
          900: '#0D0E33'
        },
        accent: {
          50: '#fff8f7',
          100: '#ffe8e5',
          200: '#ffc7c0',
          300: '#ff9485',
          400: '#ff6b57',
          500: '#ff4129',
          600: '#cc2814',
          700: '#991e0f',
          800: '#66140a',
          900: '#330a05'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};