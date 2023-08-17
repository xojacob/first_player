/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        project: "url('/src/assets/projectbackground.jpg')",
        album: "url('/src/assets/albumbackground.jpg')",
      },
      colors: {
        primary: "#0d0b13",
        secondary: "#00f6ff",
        tp: "#5a9081",
        ts: "#306461",
        tt: "#637174",
        tt2: "#91a8ad",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
        martian: ["Martian Mono", "monospace"],
        bacasime: ["Bacasime Antique", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        roboto: ["Roboto Mono", "monospace"],
        syne: ["Syne Mono", "monospace"],
      },
    },
    screens: {
      xs: "420px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
