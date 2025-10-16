import { useEffect, useState } from "react";
import axios from "axios";

function useAnimeQuote() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.siputzx.my.id/api/r/quotesanime`
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  async function fetchNewQuote() {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://api.siputzx.my.id/api/r/quotesanime"
      );
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  return { data, loading, error, fetchNewQuote };
}

export default useAnimeQuote;
