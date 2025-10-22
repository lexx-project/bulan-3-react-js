import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart.jsx";

export default function CardProduct({
  id,
  image,
  title,
  description,
  price,
  detailLink,
  currentPath,
}) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      price: price,
      image,
    });
  };

  return (
    <>
      <div className="max-w-xs rounded-xl border border-slate-200 bg-white text-slate-900 overflow-hidden shadow-sm transition-shadow duration-200 hover:shadow-md">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-contain p-4"
        />
        <div className="flex flex-col justify-between p-4 space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900 line-clamp-1">
              {detailLink ? (
                <Link
                  to={detailLink}
                  state={{ from: currentPath }}
                  className="text-slate-900 hover:text-slate-600 transition-colors"
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </h2>
            <p className="text-sm text-slate-500 line-clamp-3">{description}</p>
            <p className="text-lg font-semibold text-slate-900 mt-2">
              $ {price}
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex items-center cursor-pointer justify-center w-full py-2.5 px-4 text-sm font-medium rounded-lg bg-slate-900 text-white transition-colors duration-150 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
