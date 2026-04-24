/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#0a5c36',
          dark: '#074628',
          light: '#12824e',
        },
        accent: {
          gold: '#d4af37',
          light: '#f3d56b',
          dark: '#aa8c2c',
        },
        secondary: {
          blue: '#1e3a8a',
          dark: '#172554',
        },
        neutral: {
          muted: '#fdfbf7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
