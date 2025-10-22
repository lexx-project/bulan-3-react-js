import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    let isActive = true;
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (!isActive) return;
        setData(response.data);
      } catch (err) {
        if (!isActive) return;
        setError(err);
      } finally {
        if (!isActive) return;
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      isActive = false;
    };
  }, [url]);

  return { data, loading, error };
}
