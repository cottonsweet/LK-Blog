"use client";

// React
import { useState, useEffect } from "react";

export default function DarkMode() {
  const [isOpen, toggleIsOpen] = useState(false);
  const [themeIsDark, setThemeIsDark] = useState(false);

  const themeModeHandle = (e: React.MouseEvent) => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    setThemeIsDark(!themeIsDark);
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setThemeIsDark(true);
    } else {
      setThemeIsDark(false);
    }
  }, []);

  return (
    <div onClick={themeModeHandle}>{!themeIsDark ? "다크" : " 라이트"}</div>
  );
}
