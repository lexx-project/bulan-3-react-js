import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${productId}`
        );
        setProduct(response.data);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404) {
          setError(new Error("Product not found."));
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-slate-500">
        Loading product details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg font-semibold text-red-500">
          Failed to load product
        </p>
        <pre className="max-w-lg whitespace-pre-wrap text-sm text-slate-500">
          {error.message ?? "Unknown error"}
        </pre>
        <Link
          to="/product"
          className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          ← Back to products
        </Link>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const { title, price, description, images, category } = product;

  const primaryImage = Array.isArray(images) ? images[0] : product.image;
  const imageSrc =
    primaryImage ||
    "https://via.placeholder.com/600x400.png?text=No+Image+Available";

  const categoryLabel =
    typeof category === "object" && category !== null
      ? category.name
      : category;

  const formattedPrice =
    typeof price === "number" ? `$${price.toFixed(2)}` : price ?? "—";

  return (
    <>
      <Link
        to="/product"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-500"
      >
        ← Back to products
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            {categoryLabel && (
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-500">
                {categoryLabel}
              </span>
            )}

            <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
            {formattedPrice && (
              <p className="text-2xl font-semibold text-blue-600">
                {formattedPrice}
              </p>
            )}
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-slate-600">
            <p>{description || "No description available at the moment."}</p>
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200">
              Add to cart
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100">
              Save for later
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
