import { useState } from "react";
import OptimizedChild from "./OptimizedChild";
import UnoptimizedChild from "./UnoptimizedChild";

export default function ParentCount() {
  const [parentCount, setParentCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Parent Component</h1>
          <p className="text-lg mb-2">
            Parent Count:{" "}
            <span className="font-semibold text-blue-600">{parentCount}</span>
          </p>
          <p className="text-lg mb-4">
            Other Count:{" "}
            <span className="font-semibold text-green-600">{otherCount}</span>
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => setParentCount((prev) => prev + 1)}
          >
            Add Parent Count
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setOtherCount((prev) => prev + 1)}
          >
            Add Other Count
          </button>
          <p className="text-lg mt-4 mb-2 italic text-gray-600">
            See The console to check the render{" "}
          </p>
          <OptimizedChild count={parentCount} />
          <UnoptimizedChild count={parentCount} />
        </div>
      </div>
    </>
  );
}
