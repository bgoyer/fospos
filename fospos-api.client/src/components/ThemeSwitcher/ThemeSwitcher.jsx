import { useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import { Button } from "@/components";

import { darkTheme, lightTheme } from "@/utilities/Theme/Theme";

const ThemeSwitcher = ({ onChange }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    onChange(newMode == "light" ? lightTheme : darkTheme);
  };

  return (
    <Button onClick={toggleMode}>
      {mode === "light" ? (
        <Sun size={24} weight="bold" />
      ) : (
        <Moon size={24} weight="bold" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
