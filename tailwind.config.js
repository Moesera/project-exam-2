/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "x-sm": "340px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      inder: ["Inder", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      "white": "#FDFDFD",
      "light-gray": "#CBCBCB",
      "gray": "#D8D8D8",
      "success": "#94EF69",
      "error": "#CD3C3C",
      "ocean": "#1C6ECD",
    },
    extend: {
      spacing: {
        16.5: "5.5rem",
        "3/7": "75%",
        "3.5/7": "80%",
        "4/7": "85%",
        "5/7": "95%",
        "11/12": "90%",
        "desktop": "100rem",
      },
      aspectRatio: {
        "3/2": "3 / 2",
        "4/2": "4 / 2",
      },
    },
  },
  plugins: [],
};
