import type { RootState } from "@/app/store";
import { fetchProduct } from "@/features/fetchProduct/fetchProductSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const { data, status, error } = useSelector(
    (state: RootState) => state.fetchProduct
  );

  if (status === "loading") {
    return (
      <p className="text-center text-lg font-semibold mt-10">
        Loading products...
      </p>
    );
  }

  if (status === "failed") {
    return (
      <p className="text-center text-lg font-semibold text-red-500 mt-10">
        Error: {error}
      </p>
    );
  }

  if (!data || data.length === 0) {
    return <p>No products found.</p>;
  }
  return (
    <div className="flex flex-wrap items-center justify-center p-10 gap-6 ">
      {data.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
