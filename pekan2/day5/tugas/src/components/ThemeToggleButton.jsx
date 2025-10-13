import { useTheme } from "../context/ThemeContext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const buttonLabel =
    theme === "light" ? "Gunakan Mode Gelap" : "Gunakan Mode Terang";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md bg-indigo-600 text-white shadow hover: transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
    >
      {buttonLabel}
    </button>
  );
}

export default ThemeToggleButton;
