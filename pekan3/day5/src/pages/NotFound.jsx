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
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-2xl text-gray-600 mb-4">Page Not Found</p>
          <p className="text-gray-500">
            The page you're looking for doesn't exist.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={goBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}
