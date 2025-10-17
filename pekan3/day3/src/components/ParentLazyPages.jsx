import { useState, lazy, Suspense } from "react";

const pageOne = lazy(() => import("./pages/PageOne"));
const pageTwo = lazy(() => import("./pages/PageTwo"));
const pageThree = lazy(() => import("./pages/PageThree"));

const pageComponents = {
  one: pageOne,
  two: pageTwo,
  three: pageThree,
};

export default function ParentLazyPages() {
  const [activePage, setActivePage] = useState("");

  const ActiveComponent = activePage ? pageComponents[activePage] : null;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">Lazy Loading</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => setActivePage("one")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Halaman 1
          </button>
          <button
            onClick={() => setActivePage("two")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Halaman 2
          </button>
          <button
            onClick={() => setActivePage("three")}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Halaman 3
          </button>
          <button
            onClick={() => setActivePage("")}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Bersihkan Pilihan
          </button>
        </div>
        <div className="min-h-40 flex items-center justify-center">
          <Suspense
            fallback={
              <div className="text-sm text-gray-500">Memuat komponen...</div>
            }
          >
            {ActiveComponent ? (
              <ActiveComponent />
            ) : (
              <p className="text-sm text-gray-500">
                Pilih salah satu halaman untuk di tampilkn{" "}
              </p>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
