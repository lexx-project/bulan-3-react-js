export default function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 },
  ];

  if (Array.isArray(products) === false) {
    return <>Data Bukan Array</>;
  }

  if (products.length === 0) {
    return <>Produk Tidak Ada</>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-1001">
        <h2 className="`text-3xl font-bold text-gray-800 mb-8`">
          Daftar Produk
        </h2>
        <ul className="bg-white shadow-md rounded-lg p-6 w-96">
          {products.map((product) => (
            <li className="border-b border-gray-200 py-2" key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
