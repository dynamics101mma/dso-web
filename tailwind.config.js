/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      black_ops_one: ["black-ops-one"],
    },

    extend: {
      backgroundImage: {
        'boxing': "url('../src/assets/aboutOne.jpg')",
        'muaythai': "url('../src/assets/aboutFour.jpg')",
        'calithenics': "url('../src/assets/aboutFive.jpg')"
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 6s steps(35) infinite, blink .7s infinite"
      },
    },
  },
  plugins: [require('tailwindcss-bg-patterns'),
  require("flowbite/plugin"),],
}