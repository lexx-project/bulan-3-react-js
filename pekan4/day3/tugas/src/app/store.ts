import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import loginReducer from "../features/login/loginSlice";
import signupReducer from "../features/signup/signupSlice";
import fetchProductReducer from "../features/fetchProduct/fetchProductSlice";
import todosReducer from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    login: loginReducer,
    signup: signupReducer,
    fetchProduct: fetchProductReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
