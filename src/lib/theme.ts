import { PaletteColorOptions, createTheme } from "@mui/material";
import resolveConfig from "tailwindcss/resolveConfig";
import config from "../../tailwind.config";

const tailwindConfig = resolveConfig(config);
const colors = tailwindConfig.theme?.colors;

const theme = createTheme({
  palette: {
    primary: colors?.primary as PaletteColorOptions,
    secondary: colors?.secondary as PaletteColorOptions,
  },
});

export default theme;
