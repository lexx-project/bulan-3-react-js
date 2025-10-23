import "./App.css";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import { useCounter } from "./hooks/useCounter";
import UserCard from "./components/UserCard";
import InfoUser from "./components/InfoUser";
import SettingsForm from "./components/SettingsForm";

function App() {
  const { count, handleAdd, handleMinus, handleClear } = useCounter();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Tugas 1 (Setup Project)
        </h1>
        <h1 className="text-xl font-semibold text-green-600 mb-4">Done</h1>
        <span className="border border-gray-300 w-full mb-8"></span>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Tugas 2 (Type-Safe Components)
        </h1>
        <h1 className="text-xl font-semibold mb-4">Membuat 3 Components</h1>
        <div className="flex gap-40 items-center pb-20">
          <UserCard name={"Agus"} age={20} hobby={"Tidur"} isMarried={false} />{" "}
          <Counter
            count={count}
            handleIncrement={handleAdd}
            handleDecrement={handleMinus}
            handleClear={handleClear}
          />{" "}
          <UserProfile />
        </div>{" "}
        <span className="border border-gray-300 w-full mb-8"></span>
        <h1 className="text-3xl font-bold text-gray-800 mb-8 mt-10">
          Tugas 3 (Advanced TypeScript Patterns)
        </h1>
        <p className="text-base text-slate-600">
          Menggunakan custom hook dan utility types untuk data asynchronous.
        </p>
        <InfoUser />
        <span className="border border-gray-300 w-full mb-8"></span>
        <h1 className="text-3xl font-bold text-gray-800 mb-8 mt-10">
          Tugas 4 (Context & Form Validation)
        </h1>
        <p className="text-base text-slate-600">
          Context API TypeScript dan form handling dengan validasi ketat.
        </p>
        <SettingsForm />
      </div>
    </>
  );
}

export default App;
