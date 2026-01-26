/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#242424',
          light: '#2e2e2e',
          lighter: '#383838',
        },
        accent: {
          DEFAULT: '#47b7ff',
          dark: '#1c5d8e',
        },
        card: '#184d75',
        gray: '#3b596c',
        gold: '#FFE81F',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
