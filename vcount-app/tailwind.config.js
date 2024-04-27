/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',
],
  

  theme: {
    extend: {},
    colors: {
      'neutralSilver': '#F5F7FA',
      'neutralDgrey': '#4D4D4D', 
      'brandPrimary': '#0498CF',
      'neutralsky': '#4D4D4D',
      'neutralGrey': '#717171', 
      'zrag': '#0498cf',
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

