/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter'],
    },
    extend: {
      colors: {
        dark: '#667085',
        secondary: '#344054',
      },
    },
  },
  plugins: [],
};
