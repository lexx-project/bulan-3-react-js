import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function SearchBar({
  onSearch = () => {},
  className = "",
}) {
  const [searchValue, setsearchValue] = useState("");
  const { state } = useContext(ThemeContext);
  const isDark = state.theme === "dark";

  const handleChange = (event) => {
    setsearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-1 items-stretch gap-2 md:gap-3 ${className}`.trim()}
    >
      <div className="relative flex-1 min-w-[220px]">
        <span
          className={`pointer-events-none absolute inset-y-0 left-3 flex items-center ${
            isDark ? "text-slate-400" : "text-gray-400"
          }`}
        >
          🔍
        </span>
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchValue}
          onChange={handleChange}
          className={`h-11 w-full rounded-lg border pl-9 pr-3 text-sm shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 ${
            isDark
              ? "border-slate-600 bg-slate-800 text-slate-100 placeholder:text-slate-400 focus:ring-blue-500/40"
              : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-blue-200"
          }`}
        />
      </div>

      <button
        type="submit"
        className="flex h-11 shrink-0 items-center justify-center rounded-lg bg-blue-500 px-5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600"
      >
        Cari
      </button>
    </form>
  );
}
