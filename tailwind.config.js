/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      colors: {
        'neon-green': '#39ff14',
        'dark-metal': '#1a1a1a',
      }
    },
  },
  plugins: [],
}
