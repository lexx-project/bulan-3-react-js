import { useEffect, useState } from "react";
import axios from "axios";

export default function DataManipulation() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const resultUsers = response.data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address.city,
        }));
        setData(resultUsers);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return <p className="text-blue-500 text-lg font-semibold">Loading...</p>;
  if (error)
    return (
      <p className="text-red-500 text-lg font-semibold">
        Error: {error.message}
      </p>
    );
  if (!data)
    return (
      <p className="text-red-500 text-lg font-semibold">
        Data Tidak Di Temukan
      </p>
    );

  return (
    <>
      <ul className="flex flex-col gap-2 p-4 border border-black rounded w-1/3 mx-auto mt-10">
        {data.map((user) => (
          <li key={user.id} className="border-b border-black">
            {user.name} - {user.email} - {user.city}
          </li>
        ))}
      </ul>
    </>
  );
}
