import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blu': '#15202B',
        'soft-blu': '#798ea6',
        'blu-2': '#192633',
      },
    },
  },
  plugins: [],
}

