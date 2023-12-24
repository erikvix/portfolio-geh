/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#B349FF",
        lightPurple: "#C26DFF",
        blackc: "#1D1D1D",
        grayc: "#E3E3E3",
      },
    },
  },
  plugins: [],
};
