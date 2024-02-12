/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monsterat: "Montserrat",
        fraunces: "Fraunces",
      },
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        creame: "hsl(30, 38%, 92%)",
        verDarkBlue: "hsl(212, 21%, 14%)",
        darkGraishBlue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
