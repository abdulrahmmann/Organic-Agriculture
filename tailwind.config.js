/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#274c5b",
        SecondaryColor: "#7eb693",
        ParagraphColor: "#525c60",
        WhiteBackground: "#f9f8f8",
        YellowColor: "#efd372",
        GreyBackground: "#d4d4d4",
        LightGreyBackground: "#eff6f1",
        DarkGrey: "#B8B8B8",
        LightGreenBackground: "#eff6f1"
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        openSans: ["Open+Sans", "sans-serif"],
        yellowtail: ["Yellowtail", "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1700px",
    },
  },
  plugins: [],
}