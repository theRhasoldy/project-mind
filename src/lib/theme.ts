import { PaletteColorOptions, createTheme } from "@mui/material";
import resolveConfig from "tailwindcss/resolveConfig";
import config from "../../tailwind.config";

const tailwindConfig = resolveConfig(config);
const colors = tailwindConfig.theme?.colors;

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: colors?.light?.primary as PaletteColorOptions,
    secondary: colors?.light?.secondary as PaletteColorOptions,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: colors?.dark?.primary as PaletteColorOptions,
    secondary: colors?.dark?.secondary as PaletteColorOptions,
  },
});
