/** @type {import('tailwindcss').Config} */
export default {
  content: ['./templates/**/*.twig', './src/**/*.css'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'noto': ['Noto Serif', 'serif']
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}