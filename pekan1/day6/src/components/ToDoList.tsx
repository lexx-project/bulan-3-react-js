import { useState } from "react";
import deleteIcon from "../assets/delete.png";

export default function ToDoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Belajar React",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Belajar TypeScript",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Belajar TailwindCSS",
      isCompleted: false,
    },
  ]);

  const [newTodosText, setNewTodosText] = useState("");

  const [filter, setFilter] = useState("all");

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    if (newTodosText.trim() === "") return;

    const newTodos = {
      id: todos.length + 1,
      text: newTodosText,
      isCompleted: false,
    };
    setTodos([...todos, newTodos]);
    setNewTodosText("");
  };

  const toggleTodoCompletion = (id: Number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleTodoDelete = (id: Number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col justify-center h-[100vh] text-center ">
      <div className="bg-gray-200 w-[500px] mx-auto rounded-md] rounded-md p-[70px] ">
        <h1 className="text-3xl font-bold mb-10">Todo list</h1>
        <form action="" className="flex gap-4">
          <div className="flex relative items-center w-full">
            <span className="absolute left-4 text-gray-400 text-xl">+</span>
            <input
              type="text"
              placeholder="What needs to be done?"
              className="w-full rounded-md px-3 py-2 pl-10 border-2 focus:outline-none focus:border-blue-500 border-gray-300 transition-all duration-300 ease-in-out}"
              value={newTodosText}
              onChange={(e) => setNewTodosText(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out${
              newTodosText.trim() === ""
                ? "opacity-50 cursor-not-allowed w-[110px] ml-4"
                : "cursor-pointer"
            }`}
            disabled={newTodosText.trim() === ""}
            onClick={handleAddTodo}
          >
            Add {">>"}
          </button>
        </form>
        <ul>
          <div className="p-[4px] flex gap-[10px] justify-center mt-5  bg-[rgb(225,225,225)] rounded-2xl">
            <button
              className={`text-black px-4 py-2 transition-all duration-200 ease-in-out cursor-pointer ${
                filter === "all"
                  ? "text-blue-700 border-2 border-gray-300 rounded-2xl"
                  : "border-2 border-gray-300 rounded-2xl"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`text-black px-4 py-2 transition-all duration-200 ease-in-out cursor-pointer ${
                filter === "active"
                  ? "text-blue-700 border-2 border-gray-300 rounded-2xl"
                  : "border-2 border-gray-300 rounded-2xl"
              }`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={`text-black px-4 py-2 transition-all duration-200 ease-in-out cursor-pointer ${
                filter === "completed"
                  ? "text-blue-700 border-2 border-gray-300 rounded-2xl"
                  : "border-2 border-gray-300 rounded-2xl"
              }`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>
          {todos.map((todo) => {
            return (
              <div>
                {filter === "all" && (
                  <li
                    key={todo.id}
                    className="text-left mt-5 flex bg-gray-300 h-[30px] p-[25px] items-center rounded-md"
                  >
                    <input
                      type="checkbox"
                      className="mr-3 w-4 h-4 cursor-pointer accent-blue-500 rounded-sm"
                      checked={todo.isCompleted}
                      onChange={() => toggleTodoCompletion(todo.id)}
                    />
                    <p className="flex-1">
                      {todo.isCompleted ? (
                        <s>{todo.text}</s>
                      ) : (
                        <p>{todo.text}</p>
                      )}
                    </p>
                    <button
                      className="ml-auto"
                      onClick={() => handleTodoDelete(todo.id)}
                    >
                      <img
                        src={deleteIcon}
                        alt="Hapus"
                        className="w-5 h-5 cursor-pointer"
                      />
                    </button>
                  </li>
                )}

                {filter === "active" && !todo.isCompleted && (
                  <li
                    key={todo.id}
                    className="text-left mt-5 flex bg-gray-300 h-[30px] p-[25px] items-center rounded-md"
                  >
                    <input
                      type="checkbox"
                      className="mr-3 w-4 h-4 cursor-pointer accent-blue-500 rounded-sm"
                      checked={todo.isCompleted}
                      onChange={() => toggleTodoCompletion(todo.id)}
                    />
                    <p className="flex-1">
                      {todo.isCompleted ? (
                        <s>{todo.text}</s>
                      ) : (
                        <p>{todo.text}</p>
                      )}
                    </p>
                    <button
                      className="ml-auto"
                      onClick={() => handleTodoDelete(todo.id)}
                    >
                      <img
                        src={deleteIcon}
                        alt="Hapus"
                        className="w-5 h-5 cursor-pointer"
                      />
                    </button>
                  </li>
                )}

                {filter === "completed" && todo.isCompleted && (
                  <li
                    key={todo.id}
                    className="text-left mt-5 flex bg-gray-300 h-[30px] p-[25px] items-center rounded-md"
                  >
                    <input
                      type="checkbox"
                      className="mr-3 w-4 h-4 cursor-pointer accent-blue-500 rounded-sm"
                      checked={todo.isCompleted}
                      onChange={() => toggleTodoCompletion(todo.id)}
                    />
                    <p className="flex-1">
                      {todo.isCompleted ? (
                        <s>{todo.text}</s>
                      ) : (
                        <p>{todo.text}</p>
                      )}
                    </p>
                    <button
                      className="ml-auto"
                      onClick={() => handleTodoDelete(todo.id)}
                    >
                      <img
                        src={deleteIcon}
                        alt="Hapus"
                        className="w-5 h-5 cursor-pointer"
                      />
                    </button>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
