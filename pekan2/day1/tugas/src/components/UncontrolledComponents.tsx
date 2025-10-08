import { useRef, useState } from "react";

export default function UncontrolledComponents() {
  const inputRef = useRef<any>(null);
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputRef.current) {
      setSubmittedValue(inputRef.current.value);
    }
  };

  return (
    <div className="p-4 m-4 justify-center items-center flex flex-col ">
      <h1 className="text-xl font-semibold ">Uncontrolled Components</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
        <input
          type="text"
          ref={inputRef}
          className="border border-black p-1 pl-2 rounded-md"
          placeholder="Ketik Sesuatu"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Submit
        </button>
      </form>
      <p className="mt-4 text-[15px]">Submitted : {submittedValue}</p>
    </div>
  );
}
