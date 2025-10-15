import "./App.css";
import ThemeProvider from "./context/ThemeProvider";
import UserProvider from "./context/UserProvider";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <Home />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
