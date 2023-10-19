import { createTheme } from "@mui/material";
import resolveConfig from "tailwindcss/resolveConfig";
import config from "../../tailwind.config";

const tailwindConfig = resolveConfig(config);
const colors = tailwindConfig.theme?.colors;

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: colors?.light?.background,
    primary: colors?.light?.primary,
    secondary: colors?.light?.secondary,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: colors?.dark?.background,
    primary: colors?.dark?.primary,
    secondary: colors?.dark?.secondary,
  },
});
