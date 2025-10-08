import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import type { Todo } from "../types";
import clipboard from "../assets/clipboard.svg";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");

  const handleAddTodo = (text: string) => {
    if (text.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      isCompleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodoCompletion = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleTodoDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true;
  });

  return (
    <div className="flex flex-col justify-center h-[100vh] text-center ">
      <div className="bg-gray-200 w-[500px] mx-auto rounded-md p-[70px]">
        <h1 className="text-3xl font-bold mb-10">Todo list</h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoFilter filter={filter} setFilter={setFilter} />
        {filteredTodos.length === 0 ? (
          <div className="flex flex-col items-center mt-10">
            <img src={clipboard} alt="" className="w-10 h-10 mb-2" />
            <p className="mt-5 text-gray-500">No todos found</p>
          </div>
        ) : (
          <ul>
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodoCompletion}
                onDelete={handleTodoDelete}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
