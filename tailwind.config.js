/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inder: ["Inder", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    color: {
      "pale-white": "#FDFDFD",
      gray: "#CBCBCB",
      "stone-gray": "#D8D8D8",
      green: "#94EF69",
      red: "#CD3C3C",
      blue: "#1C6ECD",
    },
    extend: {
      spacing: {
        16.5: "4.5rem",
        "3/7": "75%",
        "4/7": "85%",
        "5/7": "95%",
        "11/12": "90%",
      },
    },
  },
  plugins: [],
};
