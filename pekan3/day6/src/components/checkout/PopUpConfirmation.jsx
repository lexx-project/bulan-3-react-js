import React from "react";
import useCart from "../../hooks/useCart";

export default function PopUpConfirmation({ isOpen, onClose, onConfirm }) {
  const { items } = useCart();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center h-150">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-180 max-h-80 h-full mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Confirm Checkout
        </h2>
        <p className="text-gray-700 mb-6">
          Are you sure you want to proceed with the checkout?
        </p>
        {items.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Items in your cart:
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {items.map((item) => (
                <li key={item.id}>
                  {item.title} (x{item.quantity})
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm cursor-pointer font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium cursoer-pointer text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
