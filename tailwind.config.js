/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ring: {
        // Set your desired focus ring color and other properties
        DEFAULT: "#ff7c50", // Replace with your desired color hex code
        // You can also specify different colors for different focus states
        focus: "#ff7c50", // Replace with your desired color hex code for focus state
        "focus-within": "#ff7c50", // Replace with your desired color hex code for focus-within state
        "focus-visible": "#ff7c50", // Replace with your desired color hex code for focus-visible state
      },
      colors: {
        "brand-green": "#7DBC53",
        "brand-blue": "#01A4E1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
