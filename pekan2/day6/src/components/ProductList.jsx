import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ProductCard from "./ProductCard";

export default function ProductList({
  products = [],
  emptyMessage = "Belum ada produk tersedia.",
}) {
  const { state } = useContext(ThemeContext);
  const isDark = state.theme === "dark";

  if (!products.length) {
    return (
      <p
        className={`p-4 text-center text-sm ${
          isDark ? "text-slate-300" : "text-gray-500"
        }`}
      >
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-x-2 gap-y-10 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
