import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-md mt-5 ${
        theme === "light"
          ? "bg-gray-800 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}
