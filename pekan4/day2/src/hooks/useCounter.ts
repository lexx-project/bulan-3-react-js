import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  const handleClear = () => {
    setCount(0);
  };
  return { count, handleAdd, handleMinus, handleClear };
};
