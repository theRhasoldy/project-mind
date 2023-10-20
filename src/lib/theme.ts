import { createTheme } from "@mui/material";
import resolveConfig from "tailwindcss/resolveConfig";
import config from "../../tailwind.config";
import { Montserrat } from "next/font/google";

const tailwindConfig = resolveConfig(config);

const colors = tailwindConfig.theme?.colors;
const montserrat = Montserrat({ subsets: ["latin"] });

const fontFamily = {
  fontFamily: [
    montserrat.style.fontFamily,
    "-apple-system",
    "BlinkMacSystemFont",
    "'Segoe UI'",
    "Roboto",
    "'Helvetica Neue'",
    "Arial",
    "sans-serif",
    "'Apple Color Emoji'",
    "'Segoe UI Emoji'",
    "'Segoe UI Symbol'",
  ].join(","),
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: colors?.light?.background,
    primary: colors?.light?.primary,
    secondary: colors?.light?.secondary,
  },
  typography: fontFamily,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: colors?.dark?.background,
    primary: colors?.dark?.primary,
    secondary: colors?.dark?.secondary,
  },
  typography: fontFamily,
});
