/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'Arial', 'sans-serif'],
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
          primary: '#32c049',
          secondary: '#37b44b',
          accent: '#22904b',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
