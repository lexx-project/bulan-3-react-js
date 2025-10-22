import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart.jsx";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const [isLogin, setIsLogin] = useState(false);
  const toHome = () => {
    navigate("/");
  };
  const toLogin = () => {
    navigate("/login");
  };

  const toProducts = () => {
    navigate("/products");
  };

  const toAbout = () => {
    navigate("/about");
  };

  const toCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    setIsLogin(localStorage.getItem("token") !== null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm fixed w-full z-20">
      <div className="mx-auto w-full px-4 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-3 py-3 sm:py-4">
        <div className="text-slate-900 text-base font-semibold tracking-tight sm:text-lg">
          Lexx Store
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 cursor-pointer sm:text-sm sm:px-4"
            onClick={toHome}
          >
            Home
          </button>
          <button
            className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 cursor-pointer sm:text-sm sm:px-4"
            onClick={toAbout}
          >
            About
          </button>
          <button
            className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 cursor-pointer sm:text-sm sm:px-4"
            onClick={toProducts}
          >
            Products
          </button>

          {isLogin ? (
            <button
              className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-white bg-red-500 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-300 cursor-pointer sm:text-sm sm:px-4 hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 cursor-pointer sm:text-sm sm:px-4"
              onClick={toLogin}
            >
              Login
            </button>
          )}
          <button
            className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer relative sm:text-sm sm:px-4"
            onClick={toCheckout}
          >
            <img
              src="https://upload.lexxganz.my.id/uploads/cart.png"
              alt=""
              className="w-7 h-7 sm:w-8 sm:h-8"
            />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center sm:text-xs">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
