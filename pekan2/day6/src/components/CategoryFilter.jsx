import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function CategoryFilter({
  categories = [],
  onSelectCategory = () => {},
  className = "",
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { state } = useContext(ThemeContext);
  const isDark = state.theme === "dark";

  const handleChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div
      className={`w-full min-w-[180px] max-w-xs md:w-auto ${className}`.trim()}
    >
      <label htmlFor="category" className="sr-only">
        Pilih Kategori
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        className={`block h-11 w-40 rounded-lg border px-3 text-sm shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 ${
          isDark
            ? "border-slate-600 bg-slate-800 text-slate-100 focus:ring-blue-500/40"
            : "border-gray-300 bg-white text-gray-700 focus:ring-blue-200"
        }`}
      >
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
