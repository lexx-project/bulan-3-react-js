import useCart from "../../hooks/useCart";

export default function CheckoutItems({ onCheckout }) {
  const { items, totalItems, totalPrice, addItem, removeItem, clearItem } =
    useCart();
  const handleCheckoutClick = () => {
    onCheckout();
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Your Cart
        </h1>
        {items.length === 0 ? (
          <p className="text-center text-lg text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white rounded-lg shadow-md p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-28 w-full object-cover rounded-md sm:w-24 sm:h-24 sm:mr-4"
                />
                <div className="w-full">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-md font-bold text-gray-900">
                    $ {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-3">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-base font-semibold text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    >
                      -
                    </button>
                    <span className="inline-flex min-w-[2.5rem] items-center justify-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addItem(item)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-base font-semibold text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    >
                      +
                    </button>
                    <button
                      onClick={() => clearItem(item.id)}
                      className="ml-4 inline-flex items-center justify-center px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center text-lg font-bold text-gray-900">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold text-gray-900 mt-2">
              <span>Total Price:</span>
              <span>$ {totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckoutClick}
              className="mt-6 w-full py-3 px-4 bg-slate-900 cursor-pointer text-white font-semibold rounded-lg transition-colors duration-150 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
