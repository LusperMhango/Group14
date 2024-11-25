/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Your file paths
  theme: {
    extend: {
      animation: {
        typewriter: 'typing 5s steps(60) infinite, blink 1s step-end infinite',
        bounceOnce: 'bounceOnce 2s ease-in-out 1',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};

  