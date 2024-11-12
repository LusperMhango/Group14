// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This includes all JavaScript and TypeScript files in the src directory
    "./public/index.html",          // Includes your main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
