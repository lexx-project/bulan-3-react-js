import { useCartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Seblak", price: 10000 },
  { id: 2, name: "Mie Ayam", price: 15000 },
  { id: 3, name: "Nasgor", price: 12000 },
];

const ProductList = () => {
  const { addItem } = useCartContext();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Produk</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between rounded border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div>
              <p className="font-medium text-gray-900">{product.name}</p>
              <p className="text-sm text-gray-600">Rp {product.price}</p>
            </div>
            <button
              type="button"
              onClick={() => addItem(product)}
              className="rounded bg-green-500 px-3 py-1 text-sm font-semibold text-white hover:bg-green-600"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
