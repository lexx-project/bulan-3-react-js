import React from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 max-w-md mx-auto bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-3xl font-bold text-gray-800">Count: {state.count}</h1>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-base font-semibold leading-none text-white hover:bg-blue-700 transition-colors duration-200"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="flex items-center justify-center rounded-md bg-red-600 px-5 py-2 text-base font-semibold leading-none text-white hover:bg-red-700 transition-colors duration-200"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="flex items-center justify-center rounded-md bg-gray-600 px-5 py-2 text-base font-semibold leading-none text-white hover:bg-gray-700 transition-colors duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
