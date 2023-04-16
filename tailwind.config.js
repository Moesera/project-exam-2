/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inder: ["Inder", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    color: {
      pale: "#FDFDFD",
      gray: "#CBCBCB",
      stone: "#D8D8D8",
      green: "#94EF69",
      red: "#CD3C3C",
      blue: "#1C6ECD",
    },
    extend: {
      spacing: {
        16.5: "5.5rem",
        "3/7": "75%",
        "3.5/7": "80%",
        "4/7": "85%",
        "5/7": "95%",
        "11/12": "90%",
      },
    },
  },
  plugins: [],
};
