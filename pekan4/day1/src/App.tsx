import "./App.css";
import { LoginForm } from "./components/login-form";
import { Routes, Route } from "react-router-dom";
import { SignupForm } from "./components/signup-form";
import ThemeSwitcher from "./components/theme-switcher-01";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                  <div className="absolute right-4 top-4">
                    <ThemeSwitcher />
                  </div>
                  <LoginForm />
                </div>
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                  <SignupForm />
                  <div className="absolute right-4 top-4">
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            }
          />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/products" element={<Products />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/about" element={<About />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
