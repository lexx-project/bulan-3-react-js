import { memo } from "react";

const CallbackChild = memo(function CallbackChild({ label, onButtonClick }) {
  console.log(`${label} child rendered`);

  return (
    <button
      onClick={onButtonClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 w-full"
    >
      {label}
    </button>
  );
});

export default CallbackChild;
