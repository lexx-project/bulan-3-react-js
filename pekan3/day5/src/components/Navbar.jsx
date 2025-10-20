import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const toAbout = () => {
    navigate("/about");
  };

  const toHome = () => {
    navigate("/");
  };

  const toLogin = () => {
    navigate("/login");
  };

  const toProduk = () => {
    navigate("/product");
  };

  const isAuthenticated = localStorage.getItem("token") !== null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Lexx Store</div>
        <div className="flex gap-3">
          <button
            className="text-white font-semibold hover:text-gray-300 cursor-pointer"
            onClick={toHome}
          >
            Home
          </button>
          <button
            className="text-white font-semibold hover:text-gray-300 cursor-pointer"
            onClick={toAbout}
          >
            About
          </button>
          <button
            className="text-white font-semibold hover:text-gray-300 cursor-pointer"
            onClick={toProduk}
          >
            Produk
          </button>{" "}
          <div>
            {isAuthenticated ? (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                onClick={toLogin}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
