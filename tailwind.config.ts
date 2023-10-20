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
          default: "#fefefe",
        },
        primary: {
          main: "#f08080",
          light: "#f4978e",
          dark: "#e56b6f",
          contrastText: "#fefefe",
        },
        secondary: {
          main: "#7b2cbf",
          light: "#9d4edd",
          dark: "#5a189a",
          contrastText: "#fff",
        },
      },
      dark: {
        background: {
          default: "#0f0f0f",
        },
        primary: {
          main: "#f8ad9d",
          light: "#fbc4ab",
          dark: "#e56b6f",
          contrastText: "#000",
        },
        secondary: {
          main: "#c77dff",
          light: "#e0aaff",
          dark: "#9d4edd",
          contrastText: "#000",
        },
      },
    },
  },
} satisfies Config;
