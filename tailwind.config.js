/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 40s linear infinite", //50
        "loop-scroll-reverse": "loop-scroll-reverse 40s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "loop-scroll-reverse": {
          // Set keyframes untuk animasi loop reverse
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        biru: {
          100: "#68799F",
          200: "#626687",
          300: "#00ACD1",
          500: "#1D4ED8",
          700: "#1B1C57",
        },
        kuning: {
          500: "#F59E0B",
        },
        hijau: {
          200: "#D1FAE5",
          500: "#10B981",
          700: "#047857",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      borderRadius: {
        32: "32px",
      },
    },
  },
  plugins: [],
};
