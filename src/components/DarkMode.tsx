"use client";

// React
import { useState, useEffect } from "react";

// Components
import ToggleButton from "./ToggleButton";

export default function DarkMode() {
  const [themeIsDark, setThemeIsDark] = useState(false);

  const themeModeHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    setThemeIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setThemeIsDark(true);
    } else {
      setThemeIsDark(false);
    }
  }, []);

  return <ToggleButton themeIsDark={themeIsDark} onClick={themeModeHandle} />;
}
