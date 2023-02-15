/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'Arial', 'sans-serif'],
      },
      height: {
        60: '50vh',
      },
      container: {
        padding: '2rem',
      },
      backgroundImage: {
        hero: "url('/bg/stars.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#2a9350e6',
          secondary: '#156f5ce6',
          accent: '#32c049',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
