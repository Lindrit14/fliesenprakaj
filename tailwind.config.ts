/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
    premiumRed: "#8C3A2D",
    premiumBeige: "#EDE7DD",
    premiumGrey: "#6E6E6E",
    premiumCharcoal: "#1C1C1C",
    premiumWhite: "#FFFFFF"
  },
    },
  },
  plugins: [],
};
