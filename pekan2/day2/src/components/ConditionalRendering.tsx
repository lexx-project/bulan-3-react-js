import { useState } from "react";

export default function ConditionalRendering() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">
          Conditional Rendering
        </div>

        {isLogin ? (
          <p className="text-gray-500">Selamat datang kembali!</p>
        ) : (
          <p className="text-gray-500">Silakan login untuk melanjutkan.</p>
        )}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded
          hover:bg-blue-600 cursor-pointer"
        >
          {isLogin ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}
