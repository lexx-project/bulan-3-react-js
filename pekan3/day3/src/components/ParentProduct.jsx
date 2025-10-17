import { useState, useCallback } from "react";
import ProductList from "./ProducList";
import { productList } from "../data/productList";

export default function ParentProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDark, setIsDark] = useState(false);

  const [showWithoutMemo, setShowWithoutMemo] = useState(true);
  const [showWithMemo, setShowWithMemo] = useState(true);
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        <p className="text-2xl font-bold mb-2">Perbandingan Use Memo</p>
        <p className="text-lg mb-4 italic text-gray-600">
          See The console to check the render
        </p>
        <div
          className={`bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center transition-colors duration-300 ${
            isDark ? "bg-gray-800 text-white" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`p-2 border rounded-md w-full mb-4 ${
              isDark
                ? "bg-gray-700 border-gray-600 text-white"
                : "border-gray-300"
            }`}
          />
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2 transition-colors duration-300"
          >
            Toggle Dark Mode
          </button>
          <button
            onClick={() => setShowWithoutMemo((prev) => !prev)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 transition-colors duration-300"
          >
            Toggle Without useMemo List
          </button>
          <button
            onClick={() => setShowWithMemo((prev) => !prev)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Toggle With useMemo List
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-around mt-8 w-full max-w-2xl">
          {showWithoutMemo && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Without useMemo
              </h2>
              <ProductList
                list={productList}
                searchTerm={searchTerm}
                useMemoHook={false}
              />
            </div>
          )}

          {showWithMemo && (
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
              <h2 className="text-xl font-semibold mb-4 text-center">
                With useMemo (Optimized)
              </h2>
              <ProductList
                list={productList}
                searchTerm={searchTerm}
                useMemoHook={true}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
