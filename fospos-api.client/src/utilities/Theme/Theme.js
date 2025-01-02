import { ThemeProvider } from "styled-components";
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

// Create your light theme
const lightTheme = {
  colors: {
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
};

// Create your dark theme
const darkTheme = {
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
};

export default {
  lightTheme,
  darkTheme,
  ThemeProvider,
};
