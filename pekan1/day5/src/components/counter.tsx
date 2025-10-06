import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="flex flex-col gap-1 text-center justify-center items-center min-h-screen">
      <h1 className="text-2xl">Aplikasi Counter Sederhana</h1>
      <p className="text-xl">Jumlah Counter Saat Ini : {counter}</p>
      <div>
        <button className="bg-blue-500 m-2 w-[30px] rounded-[2px] ">-</button>
        <input
          type="number"
          value={counter}
          onChange={(event) => {
            setCounter(parseInt(event.target.value));
          }}
          className="border-1"
        />
        <button className="bg-blue-500 m-2 w-[30px] rounded-[2px]">+</button>
      </div>
    </div>
  );
}
