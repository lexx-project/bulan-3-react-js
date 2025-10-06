import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Belajar React",
      completed: false,
    },
    {
      id: 2,
      text: "Belajar TypeScript",
      completed: false,
    },
  ]);

  const [newTodosText, setNewTodosText] = useState("");

  const addTodos = (e: any) => {
    e.preventDefault();
    if (newTodosText.trim() === "") return;

    const newTodos = {
      id: todos.length + 1,
      text: newTodosText,
      completed: false,
    };
    setTodos([...todos, newTodos]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="flex flex-col text-center h-[100vh] justify-center items-center gap-5">
        <h1 className="text-6xl font-bold text-red-500 mb-3">
          ToDoList Sederhana
        </h1>
        <form action="">
          <input
            type="text"
            placeholder="Masukkan Tugas Baru"
            value={newTodosText}
            onChange={(e) => setNewTodosText(e.target.value)}
            className="border-2 w-[300px] h-[40px] mr-[30px] p-[10px] rounded-[5px] "
          />
          <button
            type="submit"
            onClick={addTodos}
            className="bg-blue-500 text-white p-[10px] rounded-md w-[100px] hover:bg-blue-700 cursor-pointer"
          >
            Tambah
          </button>
        </form>
        <ul className="flex flex-col gap-2 items-center">
          <p className="font-bold text-lg">ToDoList Now:</p>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="m-[10px] bg-blue-300 text-gray-600 h-[40px] w-[260px] text-center flex items-center justify-between rounded-md px-4"
            >
              <span>{todo.text}</span>
              <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}{" "}
        </ul>
      </div>
    </>
  );
}
