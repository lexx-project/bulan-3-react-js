import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  status: string;
}

const initialState: TodosState = {
  todos: [],
  status: "idle",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.status = "adding";
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.status = "deleting";
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
