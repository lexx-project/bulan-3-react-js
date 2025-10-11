import { useEffect, useState } from "react";

export default function AbortFetchComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const FetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",
          { signal }
        );

        if (!response.ok) {
          throw new Error(`HTTP Error : ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch Di batalkan");
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    FetchData();
    return () => {
      abortController.abort();
      console.log("Permintaan dibatalkan saat cleanup.");
    };
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-500">
          Error: {error.message}
        </p>
      </div>
    );

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Post Detail</h1>
      {data && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
          <p className="text-gray-700">{data.body}</p>
        </div>
      )}
    </div>
  );
}
