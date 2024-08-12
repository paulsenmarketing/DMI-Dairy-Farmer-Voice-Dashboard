/** @type {import('tailwindcss').Config} */
export default {
  content: ['./templates/**/*.twig', './src/**/*.css'],
  theme: {
    "borderRadius": {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'noto': ['Noto Serif', 'serif']
      },
      "colors": {
        // custom color pallet generated here: https://www.tints.dev/brand/4DD3FF
        // add as many named colors as you feel you need
        "primary": {
          50: "#F0FBFF",
          100: "#DBF6FF",
          200: "#B8EDFF",
          300: "#94E4FF",
          400: "#70DBFF",
          500: "#4DD3FF",
          600: "#0AC2FF",
          700: "#0095C7",
          800: "#006385",
          900: "#003242",
          950: "#001B24"
        },
        "surface": {
          50: "#F1F3F4",
          100: "#E5E9EB",
          200: "#C8D0D5",
          300: "#AEBAC1",
          400: "#92A2AB",
          500: "#788C97",
          600: "#5D6F79",
          700: "#47555C",
          800: "#2F383D",
          900: "#181D20",
          950: "#0B0D0E"
        },
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    // the themes array is empty, we don't want to have to let Daisy influence colors at all (we just want the style cheats for things like breadcrumbs.twig)
    themes: [],
  },
}