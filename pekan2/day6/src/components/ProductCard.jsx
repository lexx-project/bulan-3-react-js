import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { ThemeContext } from "../context/ThemeContext";

import cartIcon from "../assets/cart.png";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="text-yellow-400">
          ★
        </span>
      );
    } else if (i - 0.5 <= rating) {
      stars.push(
        <span key={i} className="text-gray-300">
          ☆
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300">
          ☆
        </span>
      );
    }
  }
  return stars;
};

export default function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);
  const { state: themeState } = useContext(ThemeContext);
  const isDark = themeState.theme === "dark";
  const ratingValue = Number(product?.rating?.rate) || 0;

  const handleAddToCart = () => {
    dispatch({ type: "addToCart", product: product });
  };

  const cardClasses = [
    "rounded overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group relative flex flex-col h-full border",
    isDark
      ? "bg-slate-800 border-slate-700 text-slate-100 hover:border-blue-400"
      : "bg-white border-transparent text-gray-900 hover:border-blue-500",
  ].join(" ");

  return (
    <div className={cardClasses}>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-30 object-contain"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-l mb-2 line-clamp-2">
          {product.title}
        </div>
        <p className={isDark ? "text-slate-200 text-base" : "text-gray-700 text-base"}>
          $ {product.price}
        </p>
        {typeof product.stock !== "undefined" && (
          <p className={isDark ? "text-slate-300 text-sm" : "text-gray-600 text-sm"}>
            Stok: {product.stock}
          </p>
        )}

        <div className="flex items-center mt-1">
          {renderStars(ratingValue)}

          <span className={isDark ? "text-slate-300 text-sm ml-2" : "text-gray-600 text-sm ml-2"}>
            ({ratingValue.toFixed(1)})
          </span>
        </div>
      </div>

      <div className="px-6 pt-4 pb-4 flex justify-end">
        <button
          onClick={handleAddToCart}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 hover:bg-blue-600"
        >
          <img
            src={cartIcon}
            alt="Tambah ke keranjang"
            className="h-5 w-5 cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
