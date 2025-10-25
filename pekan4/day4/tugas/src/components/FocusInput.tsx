import { useRef, type FC } from "react";

interface FocusInputProps {}

const FocusInput: FC<FocusInputProps> = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focussedInput = () => {
    inputRef.current?.focus();
  };
  return (
    <div className="flex gap-3">
      <input type="text" ref={inputRef} className="border" />
      <button
        onClick={focussedInput}
        className="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;
