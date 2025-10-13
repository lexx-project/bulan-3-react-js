const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

function UseReducerHookIntroduction() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div
      className={`max-w-md mx-auto p-8 rounded-lg transition-colors duration-300 ${
        isLight
          ? "bg-white text-gray-800 shadow-lg"
          : "bg-gray-800 text-gray-100 shadow-lg border border-gray-700"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-6 text-center ${
          isLight ? "text-gray-800" : "text-gray-100"
        }`}
      >
        Pengenalan useReducer Hook
      </h2>
      <div
        className={`p-6 rounded-md text-center transition-colors duration-300 ${
          isLight
            ? "border border-blue-500 bg-blue-50 text-blue-800"
            : "border border-blue-400 bg-blue-900/40 text-blue-100"
        }`}
      >
        <h3 className="text-xl font-bold mb-4">Counter</h3>
        <p
          className={`text-5xl font-bold mb-6 ${
            isLight ? "text-blue-700" : "text-blue-200"
          }`}
        >
          {state.count}
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className={`px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-colors duration-200 ${
              isLight ? "focus:ring-offset-2 focus:ring-offset-white" : "focus:ring-offset-2 focus:ring-offset-gray-900"
            }`}
          >
            Kurang
          </button>
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className={`px-6 py-3 bg-gray-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-colors duration-200 ${
              isLight ? "focus:ring-offset-2 focus:ring-offset-white" : "focus:ring-offset-2 focus:ring-offset-gray-900"
            }`}
          >
            Reset{" "}
          </button>
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className={`px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-200 ${
              isLight ? "focus:ring-offset-2 focus:ring-offset-white" : "focus:ring-offset-2 focus:ring-offset-gray-900"
            }`}
          >
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseReducerHookIntroduction;
import { useReducer } from "react";
import { useTheme } from "../context/ThemeContext";
