import { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosFetching() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchingData();
  }, []);

  if (loading)
    return <p className="text-blue-500 text-lg font-semibold">Loading...</p>;
  if (error)
    return (
      <p className="text-red-500 text-lg font-semibold">
        Error: {error.message}
      </p>
    );
  return (
    <div className="flex flex-col gap-2 p-4 border border-black rounded w-1/3 mx-auto mt-10">
      <h2 className="text-xl font-semibold text-blue-600">Data dari Axios</h2>
      <h3 className="text-lg font-medium">{data.name}</h3>
      <p className="text-gray-700 font-medium">Email: {data?.email}</p>
      <p className="text-gray-700 font-medium">Telepon: {data?.phone}</p>
    </div>
  );
}
