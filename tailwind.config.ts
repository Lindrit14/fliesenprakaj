/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premiumRed: "#E05C44",
        premiumBeige: "#FFF7ED",
        premiumGrey: "#706660",
        premiumCharcoal: "#231A14",
        premiumWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
