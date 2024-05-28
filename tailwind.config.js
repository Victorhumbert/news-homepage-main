/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primaria: "hsl(5, 85%, 63%)",
        secundaria: "hsl(35, 77%, 62%)",
        branco: "hsl(36, 100%, 99%)",
        azulCinza: "hsl(233, 8%, 79%)",
        azulCinzaEscuro: "hsl(236, 13%, 42%)",
        azulEscuro: "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
