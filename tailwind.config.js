/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cinza: "hsl(236, 13%, 42%)",
        primaria: "hsl(5, 85%, 63%)",
      },
    },
  },
  plugins: [],
};
