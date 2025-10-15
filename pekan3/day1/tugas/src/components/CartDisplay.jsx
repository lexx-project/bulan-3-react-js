import { useCartContext } from "../context/CartContext";

const CartDisplay = () => {
  const { cartItems, totalPrice, removeItem, clearCart } = useCartContext();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        <button
          type="button"
          onClick={clearCart}
          className="rounded border border-red-500 px-3 py-1 text-sm font-semibold text-red-500 hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="rounded border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-600">
          Keranjang kosong.
        </p>
      ) : (
        <ul className="space-y-3">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {item.quantity} x Rp {item.price}
                </p>
              </div>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="rounded bg-red-500 px-3 py-1 text-sm font-semibold text-white hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="rounded border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-lg font-semibold text-gray-900">
          Total: Rp {totalPrice}
        </p>
      </div>
    </div>
  );
};

export default CartDisplay;
