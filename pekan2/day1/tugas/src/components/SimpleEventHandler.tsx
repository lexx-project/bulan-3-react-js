import { useState } from "react";

export default function SimpleEventHandler() {
  const [boxColor, setBoxColor] = useState("bg-yellow-400");

  const handleClick = () => {
    setBoxColor(boxColor === "bg-yellow-400" ? "bg-red-500" : "bg-yellow-400");
  };

  const mouseOutHanlder = () => {
    setBoxColor("bg-green-600");
  };

  const mouseEnterHandler = () => {
    setBoxColor("bg-blue-600");
  };

  return (
    <>
      <div className="p-4 m-4 justify-center items-center flex flex-col">
        <div
          className={`${boxColor} w-40 h-40 cursor-pointer`}
          onMouseOut={mouseOutHanlder}
          onMouseEnter={mouseEnterHandler}
        ></div>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-5"
        >
          Click me
        </button>
      </div>
    </>
  );
}
