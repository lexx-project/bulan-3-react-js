import "./App.css";
import { useContext } from "react";
import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import { NotificationProvider } from "./context/NotificationProvider";
import { UserProvider } from "./context/UserProvider";
import { CartProvider } from "./context/CartProvider";
import Home from "./pages/Home";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  const containerClass =
    theme === "light"
      ? "min-h-screen bg-gray-100 text-gray-900"
      : "min-h-screen bg-slate-900 text-white";

  return (
    <div className={containerClass}>
      <Header />
      <main className="px-6 py-8">
        <UserProvider>
          <CartProvider>
            <Home />
          </CartProvider>
        </UserProvider>
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NotificationProvider>
          <AppContent />
        </NotificationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
