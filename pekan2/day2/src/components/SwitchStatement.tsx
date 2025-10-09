import { useState } from "react";

export default function SwitchStatement() {
  const [status, setStatus] = useState("loading");

  let content;

  switch (status) {
    case "loading":
      content = <p className="text-blue-500 font-semibold">Memuat data...</p>;
      break;
    case "success":
      content = (
        <p className="text-green-500 font-semibold">Data berhasil dimuat!</p>
      );
      break;
    case "error":
      content = (
        <p className="text-red-500 font-semibold">
          Terjadi kesalahan saat memuat data.
        </p>
      );
      break;
    default:
      content = (
        <p className="text-gray-500 font-semibold">Status tidak diketahui.</p>
      );
  }

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
      <div className="text-xl font-medium text-black">Switch Statement</div>
      {content}
      <div className="flex space-x-2">
        <button
          onClick={() => setStatus("loading")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Set Loading
        </button>
        <button
          onClick={() => setStatus("success")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Set Success
        </button>
        <button
          onClick={() => setStatus("error")}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Set Error
        </button>
      </div>
    </div>
  );
}
