import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
  },
});

export const { signup } = signupSlice.actions;
export default signupSlice.reducer;
