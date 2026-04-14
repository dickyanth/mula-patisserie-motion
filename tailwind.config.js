/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fbf6ee",
        clay: "#f0dcc0",
        cocoa: "#b77b4b",
        roast: "#6a3e27",
        ink: "#2d1a12",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(31, 22, 17, 0.12)",
      },
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
