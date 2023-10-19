import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      light: {
        background: {
          default: "#3dccc7",
        },
        primary: {
          main: "#3dccc7",
          light: "#9ceaef",
          dark: "#07beb8",
          contrastText: "#fefefe",
        },
        secondary: {
          main: "#ff0",
          light: "#b75566",
          dark: "#b75566",
          contrastText: "#fff",
        },
      },
      dark: {
        background: {
          default: "#b75566",
        },
        primary: {
          main: "#b75566",
          light: "#9ceaef",
          dark: "#07beb8",
          contrastText: "#fefefe",
        },
        secondary: {
          main: "#ff0",
          light: "#b75566",
          dark: "#b75566",
          contrastText: "#fff",
        },
      },
    },
  },
} satisfies Config;
