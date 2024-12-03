/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        "semi-bold": 700,
        "semi-thin": 500,
        bold: 800,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        OpenSans: ["Open Sans", "sans"],
      },
      boxShadow: {
        "ellipse-top-right":
          "10px -10px 15px -3px rgba(0, 0, 0, 0.1), 4px -4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      screens: {
        sm: "550px",
        semi: "1100px",
        lg: "1300px",
        md: "900px",
      },
    },
    plugins: [],
  },
};
