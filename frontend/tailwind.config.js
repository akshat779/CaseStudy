/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep_purple: { a200: "var(--deep_purple_a200)" },
        deep_orange: { 300: "var(--deep_orange_300)" },
        gray: {
          100: "var(--gray_100)",
          300: "var(--gray_300)",
          400: "var(--gray_400)",
          500: "var(--gray_500)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "500_01": "var(--gray_500_01)",
          "900_7f": "var(--gray_900_7f)",
        },
        gray_5: "var(--gray_5)",
        green: { 300: "var(--green_300)", 700: "var(--green_700)" },
        indigo: { 900: "var(--indigo_900)" },
        light_blue: { 300: "var(--light_blue_300)" },
        primary: { 0: "var(--primary_0)", 1: "var(--primary_1)" },
        purple: { 300: "var(--purple_300)" },
        red: { 400: "var(--red_400)" },
        text: { neutral_dark: "var(--text_neutral_dark)" },
        text_primary: "var(--text_primary)",
        text_secondary: "var(--text_secondary)",
        white: { a700_7f: "var(--white_a700_7f)" },
      },
      boxShadow: {},
      fontFamily: {
        poppins: "Poppins",
        publicsans: "Public Sans",
        inter: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

