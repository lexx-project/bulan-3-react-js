import { useState } from "react";

export default function useForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const reset = () => {
    setValues({
      name: "",
      email: "",
    });
  };

  return {
    values,
    handleChange,
    reset,
  };
}
