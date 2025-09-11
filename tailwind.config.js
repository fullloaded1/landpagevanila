/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F7F2',
          100: '#DCEFE2',
          200: '#B9DEC6',
          300: '#8FC7A4',
          400: '#63AC84',
          500: '#3E8F68',
          600: '#2F7554',
          700: '#255D44',
          800: '#1E4A37',
          900: '#183B2D',
        },
        warm: {
          50: '#FFFBF5',
          100: '#FFF3E0',
          200: '#F5E6CC',
          300: '#E8D8BD',
          400: '#D6C4A8',
          500: '#BFA988',
          600: '#9E8A6E',
          700: '#7F6D58',
          800: '#665847',
          900: '#4F4538',
        },
        earth: {
          50: '#f9f7f4',
          100: '#f2ede6',
          200: '#e4d9cc',
          300: '#d1c0a8',
          400: '#bca082',
          500: '#a98465',
          600: '#9c7159',
          700: '#825c4b',
          800: '#6a4c40',
          900: '#564035',
        }
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        display: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
