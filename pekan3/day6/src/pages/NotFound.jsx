import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
        <p className="text-lg text-gray-500 mt-2">
          The page you're looking for doesn't exist.
        </p>
        <a
          className="mt-8 px-6 py-3 bg-indigo-600 cursor-pointer text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          onClick={goBack}
        >
          Go to Home
        </a>
      </div>
    </>
  );
}
