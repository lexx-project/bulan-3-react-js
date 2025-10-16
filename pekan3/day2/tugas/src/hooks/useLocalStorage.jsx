import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (error) {
      return item;
    }
  });

  useEffect(() => {
    const theme = JSON.stringify(value);

    window.localStorage.setItem(key, theme);
  }, [key, value]);

  return { value, setValue };
}
