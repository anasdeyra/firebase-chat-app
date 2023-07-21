/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#7DBC53",
        "brand-blue": "#01A4E1",
      },
    },
  },
  plugins: [],
};
