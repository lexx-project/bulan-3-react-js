import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { id, title, price, description } = product;

  const primaryImage = Array.isArray(product.images)
    ? product.images[0]
    : product.image;

  const imageSrc =
    primaryImage ||
    "https://via.placeholder.com/400x300.png?text=No+Image+Available";

  const categoryLabel =
    typeof product.category === "object" && product.category !== null
      ? product.category.name
      : product.category;

  const formattedPrice =
    typeof price === "number" ? `$${price.toFixed(2)}` : price ?? "—";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        to={`/product/${id}`}
        className="relative block h-56 overflow-hidden"
      >
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm">
          {formattedPrice}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-500">
            {categoryLabel || "Uncategorized"}
          </span>
          <h3 className="text-lg font-semibold text-slate-900">
            <Link to={`/product/${id}`} className="hover:text-blue-600">
              {title}
            </Link>
          </h3>
          <p className="text-sm text-slate-500 line-clamp-3">
            {description || "No description available at the moment."}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <Link
            to={`/product/${id}`}
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-500"
          >
            View details →
          </Link>
          <button className="inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
