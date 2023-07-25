import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        whites: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E8E8E8",
          300: "#DBDBDB",
          400: "#CCCCCC",
          500: "#BDBDBD",
          600: "#ABABAB",
          700: "#949494",
          800: "#7D7D7D",
          900: "#595959",
          950: "#404040",
        },
        blacks: {
          50: "#28231D",
          100: "#26221C",
          200: "#26221C",
          300: "#26221C",
          400: "#231F1A",
          500: "#231F1A",
          600: "#231F1A",
          700: "#211C18",
          800: "#211C18",
          900: "#211C18",
          950: "#1E1A15",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
