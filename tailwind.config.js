/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      fontFamily: {
        monsterat: "Montserrat",
        fraunces: "Fraunces",
      },
      colors: {
        darkCyan: "hsl(157, 44%, 17%)",
        Cyan: "hsl(158, 36%, 37%)",
        creame: "hsl(30, 38%, 92%)",
        verDarkBlue: "hsl(212, 21%, 14%)",
        darkGraishBlue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
