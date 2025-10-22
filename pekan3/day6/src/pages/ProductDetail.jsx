import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch({
    url: `https://fakestoreapi.com/products/${productId}`,
  });

  const handleClose = () => {
    navigate("/products");
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm px-4">
      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 px-6 py-4 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur">
          <h2 className="text-xl font-semibold text-slate-900">
            Detail Produk
          </h2>
          <button
            onClick={handleClose}
            className="text-slate-500 cursor-pointer text-2xl  hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200 rounded-full p-2"
          >
            x
          </button>
        </div>

        <div className="p-6 grid gap-6 md:grid-cols-[1fr_1.2fr] items-start">
          {loading && (
            <p className="text-center text-sm text-slate-500 col-span-full">
              Memuat detail produk…
            </p>
          )}
          {error && (
            <p className="text-center text-sm text-red-500 col-span-full">
              Terjadi kesalahan saat memuat detail produk.
            </p>
          )}
          {!loading && !error && data && (
            <>
              <div className="w-full overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {data.title}
                </h3>
                <p className="text-sm uppercase tracking-wide text-slate-400">
                  {data.category}
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  $ {data.price}
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  {data.description}
                </p>
                <div className="flex items-center gap-3 text-sm text-amber-500">
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-600 px-3 py-1 rounded-full font-medium">
                    ⭐ {data.rating?.rate ?? "-"}
                  </span>
                  <span className="text-slate-400">
                    {data.rating?.count ?? 0} ulasan
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="inline-flex cursor-pointer items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1"
                >
                  Kembali ke Produk
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
