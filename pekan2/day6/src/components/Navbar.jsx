import { useContext } from "react";

import SearchBar from "./SearchBar";
import CartBadge from "./CartBadge";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar({
  onSearch = () => {},
  onCartClick = () => {},
}) {
  const { state, toggleTheme } = useContext(ThemeContext);
  const isDark = state.theme === "dark";

  const headerClasses = [
    "sticky top-0 z-10 border-b backdrop-blur transition-colors duration-300",
    isDark ? "border-slate-700 bg-slate-900/80" : "border-gray-100 bg-white/90",
  ].join(" ");

  const toggleLabel = isDark ? "Ubah ke tema terang" : "Ubah ke tema gelap";

  return (
    <header className={headerClasses}>
      <nav className="mx-auto flex w-full max-w-5xl items-center gap-4 px-4 py-3">
        <div className="text-xl font-semibold text-blue-500">LexxStore</div>
        <div className="flex w-full items-center justify-end gap-3">
          <div className="flex-1 max-w-md">
            <SearchBar onSearch={onSearch} className="w-full" />
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={toggleLabel}
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-transparent text-xl transition hover:text-blue-500 focus-visible:outline-blue-400 sm:flex"
          >
            {isDark ? "Light" : "Dark"}
          </button>
          <CartBadge onClick={onCartClick} />
        </div>
      </nav>
    </header>
  );
}
