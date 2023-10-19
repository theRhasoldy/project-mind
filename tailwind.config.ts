import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      light: {
        background: "#fefefe",
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
        background: "#0f0f0f",
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
};

export default config;
