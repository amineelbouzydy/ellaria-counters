const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}",
  flowbite.content(),
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
    flowbite.plugin(),
  ],
}

