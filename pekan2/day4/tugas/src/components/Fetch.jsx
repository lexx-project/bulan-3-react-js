import { useEffect, useState } from "react";

export default function Fetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl">Loading...</p>;
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-red-600">Error: {error.message}</p>
      </div>
    );

  if (!data)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-gray-600">No data found</p>
      </div>
    );

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-10 text-center">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-gray-700">{data.body}</p>
    </div>
  );
}
