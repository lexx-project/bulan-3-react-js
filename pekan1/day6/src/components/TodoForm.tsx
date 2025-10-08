import { useState, type FormEvent } from "react";

type TodoFormProps = {
  onAddTodo: (text: string) => void;
};

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [newTodosText, setNewTodosText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodosText.trim() === "") return;
    onAddTodo(newTodosText);
    setNewTodosText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <div className="flex relative items-center w-full">
        <span className="absolute left-4 text-blue-400 text-xl">+</span>
        <input
          type="text"
          placeholder="What needs to be done?"
          className="w-full rounded-md px-3 py-2 pl-10 border-2 focus:outline-none focus:border-blue-500 border-gray-300 transition-all duration-300 ease-in-out"
          value={newTodosText}
          onChange={(e) => setNewTodosText(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className={`text-white px-4 py-2 rounded-mdtransition-all duration-300 ease-in-out ${
          newTodosText.trim() === ""
            ? "cursor-not-allowed bg-gray-500 w-[110px] rounded-[4px]"
            : " bg-blue-500 hover:bg-blue-700 cursor-pointer w-[110px] rounded-[4px]"
        }`}
        disabled={newTodosText.trim() === ""}
      >
        Add {">>"}
      </button>
    </form>
  );
}
