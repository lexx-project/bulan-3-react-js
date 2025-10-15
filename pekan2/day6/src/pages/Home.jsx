import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showCartItems, setShowCartItems] = useState(false);

  const { state: themeState } = useContext(ThemeContext);
  const { state: cartState } = useContext(CartContext);

  const isDark = themeState.theme === "dark";
  const cartItems = cartState.items;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setAllProducts(response.data);
        setFilteredProducts(response.data);

        const uniqueCategories = [
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let products = allProducts;

    if (selectedCategory !== "all") {
      products = products.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchKeyword.trim()) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    setFilteredProducts(products);
  }, [allProducts, selectedCategory, searchKeyword]);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleCartClick = () => {
    setShowCartItems((prev) => !prev);
  };

  const pageClass = isDark ? "bg-slate-900 text-slate-100" : "bg-gray-50";
  const filterCardClass = isDark
    ? "rounded-2xl border border-slate-700 bg-slate-800 p-5"
    : "rounded-2xl border border-gray-100 bg-white p-5";
  const loadingTextClass = isDark ? "text-slate-300" : "text-gray-500";
  const cartBoxClass = isDark
    ? "mt-4 rounded-lg border border-slate-700 bg-slate-800 p-4"
    : "mt-4 rounded-lg border border-gray-200 bg-white p-4";
  const emptyCartTextClass = isDark ? "text-slate-400" : "text-gray-500";

  return (
    <div className={`${pageClass} min-h-screen`}>
      <Navbar onSearch={handleSearch} onCartClick={handleCartClick} />

      <main className="mx-auto w-full max-w-5xl px-4 pb-12">
        <div className="mt-6">
          <div className={filterCardClass}>
            <CategoryFilter
              categories={categories}
              onSelectCategory={handleSelectCategory}
              className="md:w-52"
            />
          </div>

          {showCartItems && (
            <div className={cartBoxClass}>
              <h2 className="mb-3 text-lg font-semibold">Keranjang</h2>
              {cartItems.length ? (
                <ul className="space-y-2 text-sm">
                  {cartItems.map((item, index) => (
                    <li
                      key={`${item.id}-${index}`}
                      className="flex items-center justify-between"
                    >
                      <span className="flex-1 pr-2">{item.title}</span>
                      <span>${Number(item.price).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={`text-sm ${emptyCartTextClass}`}>
                  Keranjang masih kosong.
                </p>
              )}
            </div>
          )}
        </div>

        <section id="products" className="mt-6">
          {isLoading ? (
            <p className={`text-center text-sm ${loadingTextClass}`}>
              Loading products, please wait...
            </p>
          ) : (
            <ProductList products={filteredProducts} />
          )}
        </section>
      </main>
    </div>
  );
}
