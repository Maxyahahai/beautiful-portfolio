import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div className="relative">
     <button
  onClick={toggleTheme}
  className={cn(
    "fixed top-5 left-1/2 transform -translate-x-1/2 z-50", // center horizontally
    "p-2 sm:p-3 rounded-full transition-all duration-300",
    "bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm",
    "hover:bg-gray-300 dark:hover:bg-gray-700",
    "hover:scale-110 active:scale-95",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
    "shadow-lg hover:shadow-xl"
  )}
  aria-label="Toggle theme"
>
  {isDarkMode ? (
    <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
  ) : (
    <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900" />
  )}
</button>


    </div>
  );
};
