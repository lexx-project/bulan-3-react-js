import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Home />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
