import { useState, useCallback } from "react";
import CallbackChild from "./CallbackChild";

export default function ParentCallback() {
  const [parentCounter, setParentCounter] = useState(0);
  const [withoutMemoClicks, setWithoutMemoClicks] = useState(0);
  const [withMemoClicks, setWithMemoClicks] = useState(0);

  const handleWithoutMemo = () => {
    console.log("handleWithoutMemo recreated");
    setWithoutMemoClicks((prev) => prev + 1);
  };

  const handleWithMemo = useCallback(() => {
    console.log("handleWithMemo reused");
    setWithMemoClicks((prev) => prev + 1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">
          Perbandingan useCallback dengan memoized child
        </h2>
        <p className="text-lg mb-4 italic text-gray-600">
          Lihat console untuk melihat kapan child di-render ulang
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-lg mb-2">
            Parent counter:{" "}
            <span className="font-semibold text-purple-600">
              {parentCounter}
            </span>
          </p>
          <button
            onClick={() => setParentCounter((prev) => prev + 1)}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Trigger Parent Re-render
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Tanpa useCallback</h3>

            <CallbackChild
              label="Klik (Tanpa useCallback)"
              onButtonClick={handleWithoutMemo}
            />
            <p className="text-sm">
              Total klik:{" "}
              <span className="font-semibold">{withoutMemoClicks}</span>
            </p>
          </div>

          <div className="border rounded-lg p-4 flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Dengan useCallback</h3>

            <CallbackChild
              label="Klik (Dengan useCallback)"
              onButtonClick={handleWithMemo}
            />
            <p className="text-sm">
              Total klik:{" "}
              <span className="font-semibold">{withMemoClicks}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
