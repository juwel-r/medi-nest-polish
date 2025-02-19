/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#4e80ed",
        dark: {
          bg: "#121212",
          card:"#1e1e1e",
          title:"#fff",
          text: "#D1D5DB",
          border: "#2D2D2D",
          links:"#6A78FF",
          inputBg:"#252525",
          inputText:"#EAEAEA"
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};


// dark:bg-dark-bg dark:text-dark-title dark:text-dark-text dark:bg-dark-card