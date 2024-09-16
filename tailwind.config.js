import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blu': '#15202B',
        'strong-blu': '#1D9BF0',
        'soft-blu': '#7c98b8',
        'blu-2': '#192633',
      },
      fontFamily: {
        'mono': ['"Courier Prime"', ...defaultTheme.fontFamily.mono],
      }
    },
    screens: {
      'xs': '425px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

