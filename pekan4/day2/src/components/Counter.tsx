interface CounterProps {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleClear: () => void;
}

export default function Counter({
  count,
  handleIncrement,
  handleDecrement,
  handleClear,
}: CounterProps) {
  return (
    <>
      <div className="flex gap-10 items-center justify-center p-10 flex-col">
        <h1 className="text-3xl font-bold">Counter</h1>
        <div className="flex gap-10">
          <button
            onClick={handleDecrement}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            -
          </button>
          <p className="text-3xl font-bold">{count}</p>
          <button
            onClick={handleIncrement}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            +
          </button>
        </div>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </>
  );
}
