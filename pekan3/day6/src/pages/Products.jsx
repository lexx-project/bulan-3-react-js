import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import CardProduct from "../components/products/CardProduct";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";

export default function Products() {
  const { data, loading, error } = useFetch({
    url: "https://fakestoreapi.com/products",
  });
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...(Array.isArray(data)
      ? [...new Set(data.map((item) => item.category))]
      : []),
  ];

  const filteredProducts = Array.isArray(data)
    ? data.filter((product) => {
        const matchesCategory =
          selectedCategory === "all" || product.category === selectedCategory;
        const matchesSearch = product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      })
    : [];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Our Products
        </h1>
        {loading && (
          <p className="text-center text-lg text-gray-500 p-60">
            Memuat produk…
          </p>
        )}
        {error && (
          <p className="text-center text-lg text-red-500">
            Gagal memuat produk: {error.message}
          </p>
        )}
        {!loading && !error && Array.isArray(data) && (
          <>
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Cari produk…"
                className="w-full md:max-w-xs rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300"
              />
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full md:w-auto rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all"
                      ? "Semua Kategori"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <p className="text-center text-sm text-slate-500">
                Produk tidak ditemukan. Coba ubah kata kunci atau kategori.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <CardProduct
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    detailLink={`${product.id}`}
                    currentPath={location.pathname}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
