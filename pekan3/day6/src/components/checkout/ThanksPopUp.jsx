import React from "react";

export default function ThanksPopUp({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md mx-4 text-center transform transition-all duration-300 scale-100 opacity-100">
        <img
          src="https://upload.lexxganz.my.id/uploads/ceklis.png"
          alt=""
          className="w-19 h-19 mx-auto mb-4"
        />
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Thank You for Your Purchase!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your order has been placed successfully. We appreciate your business!
        </p>
        <button
          onClick={onClose}
          className="px-8 py-3 text-lg font-semibold text-white cursor-pointer bg-slate-900 rounded-xl shadow-lg hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-opacity-75 transition-all duration-200 transform hover:scale-105"
        >
          Close
        </button>
      </div>
    </div>
  );
}
