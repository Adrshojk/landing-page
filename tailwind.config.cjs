/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Segoe UI', 'system-ui'],
      'poppins': ['Poppins', 'system-ui'],
      'robotto': ['Robotto', 'system-ui'],
    },
    backgroundImage: {
      'vision': "url('/assets/block.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}