import { useState } from "react";

export default function Operator() {
  const [isLogin, setIslogin] = useState(false);
  const [message, setMessage] = useState(0);

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {isLogin ? "Anda Sudah Login" : "Silahkan Login"}
          <button
            onClick={() => setIslogin(!isLogin)}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
          >
            {isLogin ? "Logout" : "Login"}
          </button>
        </h1>
      </div>
      {message === 0 && (
        <div className="text-center">
          <p>Anda Tidak Memiliki Pesan Baru</p>
        </div>
      )}
      {message > 0 && (
        <div className="text-center">
          <p>Anda Memiliki Pesan {message} Belum Di baca</p>
        </div>
      )}
      <div className="text-center mt-4 flex items-center gap-2 justify-center">
        <div>
          <button
            className="text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
            onClick={() => setMessage(message + 1)}
          >
            Tambah Pesan
          </button>
        </div>
        <div>
          <button
            className="`text-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer mt-2`"
            onClick={() => setMessage(0)}
          >
            Tandai Telah DI baca
          </button>
        </div>
      </div>
    </>
  );
}
