/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FB7413',
        white: '#FFFFFF',
        lightgrey: '#D9D9D9',
        mediumgrey: '#959EAC',
        darkblue: '#252D37',
        verydarkblue: '#121417',
      },
      fontFamily: {
        sans: ['Overpass', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
