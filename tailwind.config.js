/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",],
  theme: {
    extend: {
      fontFamily: {
        ballet: ['"Ballet"', 'cursive'],
        garmond: ["Cormorant Garamond", 'serif'],
        lora: ['Lora', 'serif'],
        garamond: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}

