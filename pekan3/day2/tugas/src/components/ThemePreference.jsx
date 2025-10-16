import useLocalStorage from "../hooks/useLocalStorage";

export default function ThemePreference() {
  const { value: theme, setValue: setTheme } = useLocalStorage(
    "preferredTheme",
    "light"
  );

  const isDark = theme === "dark";

  return (
    <div
      className={`w-full max-w-sm rounded-lg border border-gray-300 p-6 shadow-sm ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4 text-center">Pilih Tema</h2>

      <div className="flex gap-3 justify-center">
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`px-4 py-2 rounded border ${
            isDark ? "border-gray-600" : "border-blue-500"
          } ${theme === "light" ? "bg-blue-500 text-white" : ""}`}
        >
          Light
        </button>
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`px-4 py-2 rounded border ${
            isDark ? "border-blue-400" : "border-gray-400"
          } ${theme === "dark" ? "bg-blue-500 text-white" : ""}`}
        >
          Dark
        </button>
      </div>
    </div>
  );
}
