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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Data Tidak Di Temukan</p>;

  return (
    <>
      <div>
        <h2 className="text-xl font-semibold text-blue-600">Data dari Fetch</h2>
        <h3 className="text-lg font-medium">{data.title}</h3>
        <p className="text-gray-700 font-medium">Body: {data?.body}</p>
      </div>
    </>
  );
}
