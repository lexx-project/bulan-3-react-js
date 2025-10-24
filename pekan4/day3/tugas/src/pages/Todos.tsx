import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { RootState } from "@/app/store";
import { addTodo, deleteTodo } from "@/features/todos/todosSlice";
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";

export default function Todos() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todos);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        text: todoText,
        completed: false,
      })
    );
    setTodoText("");
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <Navbar01 />
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-2xl flex-col gap-6 px-4 py-10">
        <header className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-semibold">Todo List</h1>
          </div>
          <div className="flex w-full max-w-sm gap-2">
            <Input
              value={todoText}
              onChange={(event) => setTodoText(event.target.value)}
              placeholder="Enter a new todo"
            />
            <Button onClick={handleAddTodo}>Add</Button>
          </div>
        </header>

        <div className="space-y-3">
          {todos.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              No todos yet. Add one above!
            </p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="border-muted bg-card flex items-center justify-between rounded-md border px-4 py-3 shadow-sm"
              >
                <span>{todo.text}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
