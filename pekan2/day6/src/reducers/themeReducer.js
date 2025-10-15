export const initialState = {
  theme: "light",
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggleTheme":
      const newTheme = state.theme === "light" ? "dark" : "light";
      return {
        theme: newTheme,
      };

    default:
      return state;
  }
};
