/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '426': '426px',
      },
      colors: {
        'light-blue': '#A7BDE2',
        'dark-blue': '#416E98',
        'blue': '#5086C6',
        'blue-gray': '#D2DDF1',
        'light-orange': '#FDD399',
        'dark-orange': '#584A41',
        'orange': '#FAB164',
        'medium-orange': '#DA9A5C',
        'black': '#000000',
        'white': '#FFFFFF',
      },
      borderRadius: {
        'DEFAULT': "0.625rem",
        'full': "9999px",
      },
      fontFamily: {
        'headline': ['"Courgette"', 'sans-serif'],
        'medium': ['"Comfortaa"', 'serif-serif'],
        'default': ['"Quicksand"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

