import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from "@radix-ui/colors";
export { ThemeProvider } from "styled-components";

// Create your light theme
export const lightTheme = {
  colors: {
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
};

// Create your dark theme
export const darkTheme = {
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
};
