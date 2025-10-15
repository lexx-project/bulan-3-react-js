import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        className={`${
          theme === "dark"
            ? "bg-gray-200 text-gray-900"
            : "bg-blue-500 text-white"
        } p-2 rounded-[5px] hover:bg-blue-400 cursor-pointer`}
        onClick={toggleTheme}
      >
        Switch Theme ({theme})
      </button>
    </>
  );
}
