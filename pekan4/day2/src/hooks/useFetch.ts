import axios from "axios";
import { useEffect, useState } from "react";

type FetchState<TData> = {
  data: TData | null;
  loading: boolean;
  error: string;
};

export default function useFetch<TResponse>(url: string) {
  const [state, setState] = useState<FetchState<TResponse>>({
    data: null,
    loading: false,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prev) => ({
          ...prev,
          loading: true,
          error: "",
        }));
        const response = await axios.get<TResponse>(url);
        setState({
          data: response.data,
          loading: false,
          error: "",
        });
      } catch (err: unknown) {
        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : String(err),
        });
      } finally {
        setState((prev) => ({
          ...prev,
          loading: false,
        }));
      }
    };
    fetchData();
  }, [url]);
  return state;
}
