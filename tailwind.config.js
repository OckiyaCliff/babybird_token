/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        ChelseaMarket: ["ChelseaMarket", "system-ui"],
      },

      colors: {
        primary: "#ffd600",
      },
    },
  },
  plugins: [],
};
