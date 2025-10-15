import { createContext, useEffect, useReducer } from "react";
import { themeReducer, initialState } from "../reducers/themeReducer";

export const ThemeContext = createContext();

const initTheme = (state) => {
  if (typeof window === "undefined") {
    return state;
  }

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return { ...state, theme: storedTheme };
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return { ...state, theme: prefersDark ? "dark" : state.theme };
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState, initTheme);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const root = document.documentElement;
    const body = document.body;
    const isDark = state.theme === "dark";

    root.classList.toggle("theme-dark", isDark);
    root.classList.toggle("theme-light", !isDark);
    body.classList.toggle("theme-dark", isDark);
    body.classList.toggle("theme-light", !isDark);
  }, [state.theme]);

  const toggleTheme = () => dispatch({ type: "toggleTheme" });

  return (
    <ThemeContext.Provider value={{ state, dispatch, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
