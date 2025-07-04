import { keyframes } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        scrollBehavior: ['responsive'],
        colors: {
          base: '#198754',
          secondary: '#3B82F6',
          accent: '#FBBF77',
          background: '#F9FAFB',
          text: '#111827',
        },
      },
    },
    plugins: [],
  }

  