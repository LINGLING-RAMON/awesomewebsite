/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        courier: ['"Courier New"', 'monospace'],
      },
      keyframes: {
        flicker: {
          '0%, 100%': { color: 'white' },
          '33%': { color: '#60a5fa' },
          '66%': { color: '#a78bfa' },
          '85%': { color: '#f472b6' },
        },
      },
      animation: {
        flicker: 'flicker 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}