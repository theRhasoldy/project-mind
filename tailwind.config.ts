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
      primary: {
        main: "#b75566",
        light: "#b75566",
        dark: "#b75566",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ff0",
        light: "#b75566",
        dark: "#b75566",
        contrastText: "#fff",
      },
    },
  },
};

export default config;
