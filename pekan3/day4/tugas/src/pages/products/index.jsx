import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";

export default function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProducts(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-slate-500">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg font-semibold text-red-500">
          Failed to load products
        </p>
        <pre className="max-w-lg whitespace-pre-wrap text-sm text-slate-500">
          {error.message ?? "Unknown error"}
        </pre>
      </div>
    );
  }

  const hasProducts = products.length > 0;

  return (
    <>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Product Catalog</h1>
        <p className="mt-2 text-sm text-slate-500">
          Browse the latest items curated for you.
        </p>
      </header>

      {hasProducts ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 py-20 text-center">
          <p className="text-lg font-semibold text-slate-700">
            No products available yet
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Please check back later for new arrivals.
          </p>
        </div>
      )}
    </>
  );
}
