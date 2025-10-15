import { useContext } from "react";

import cart from "../assets/cart.png";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

export default function CartBadge({
  itemCount: overrideCount,
  onClick = () => {},
}) {
  const { state } = useContext(CartContext);
  const { state: themeState } = useContext(ThemeContext);

  const itemCount =
    typeof overrideCount === "number" ? overrideCount : state.items.length;
  const isDark = themeState.theme === "dark";

  const label =
    itemCount > 0
      ? `Keranjang berisi ${itemCount} item`
      : "Keranjang masih kosong";

  const badgeClasses = [
    "relative flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400",
    isDark
      ? "border-blue-400/60 bg-blue-900/40 text-blue-100 hover:border-blue-300 hover:bg-blue-900/60"
      : "border-blue-100 bg-blue-50 text-blue-600 hover:border-blue-200 hover:bg-blue-100",
  ].join(" ");

  return (
    <button
      type="button"
      onClick={onClick}
      className={badgeClasses}
      aria-label={label}
    >
      <img src={cart} alt="" className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
          {itemCount}
        </span>
      )}
    </button>
  );
}
