import useCounterWithToggle from "../hooks/useCounterWithToggle";

export default function Scoreboard() {
  const { count, increment, decrement, isOn, toggle } = useCounterWithToggle();

  return (
    <div className="p-8 rounded-lg shadow-lg bg-gray-100 text-center max-w-xs mx-auto">
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
        Score Saat Ini:
      </h1>

      <p className="text-6xl font-bold text-black mb-6">{count}</p>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={decrement}
          disabled={!isOn}
          className={`w-12 h-12 bg-red-500 text-white text-2xl font-bold rounded-full hover:bg-red-600 disabled:bg-gray-300 transition-colors ${
            isOn ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={!isOn}
          className={`w-12 h-12 bg-green-500 text-white text-2xl font-bold rounded-full hover:bg-green-600 disabled:bg-gray-300 transition-colors ${
            isOn ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          +
        </button>
      </div>

      <button
        onClick={toggle}
        className={`w-full py-2 px-4 rounded-md font-semibold text-white transition-colors cursor-pointer ${
          isOn
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isOn ? "Jeda Pertandingan" : "Lanjutkan"}
      </button>
    </div>
  );
}
