import { useEffect, useState } from "react";

export default function MultipleUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <>
      <h1 className="text-xl font-semibold">Multiple Use Effect</h1>
      <p className="text-lg ">Count : {count}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5 cursor-pointer "
      >
        Add Count
      </button>
      <div className="mt-5">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <p className="text-lg">Name : {name}</p>
        <p>See the console</p>
      </div>
    </>
  );
}
