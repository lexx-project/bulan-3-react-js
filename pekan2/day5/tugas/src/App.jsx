import "./App.css";
import LiftingStateUp from "./components/LiftingStateUp";
import PropDrilling from "./components/PopDrilling";
import StateSharingBetweenComponents from "./components/StateSharingBetweenComponents";
import UseReducerHookIntroduction from "./components/UseReducerHookIntroduction";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppContent() {
  const { theme } = useTheme();
  const pageClass =
    theme === "light"
      ? "bg-gray-100 text-gray-800"
      : "bg-gray-900 text-gray-100";
  const headingClass = theme === "light" ? "text-gray-800" : "text-gray-100";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${pageClass}`}>
      <div className="fixed top-5 right-5 z-10">
        <ThemeToggleButton />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className={`text-4xl font-bold mb-8 ${headingClass}`}>
          Tugas No 1
        </h1>
        <LiftingStateUp />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className={`text-4xl font-bold mb-8 ${headingClass}`}>
          Tugas No 2
        </h1>
        <PropDrilling />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className={`text-4xl font-bold mb-8 ${headingClass}`}>
          Tugas No 3
        </h1>
        <StateSharingBetweenComponents />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className={`text-4xl font-bold mb-8 ${headingClass}`}>
          Tugas No 4
        </h1>
        <UseReducerHookIntroduction />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
