import "./App.css";
import ParentCount from "./components/ParentCount";
import ParentProduct from "./components/ParentProduct";
import ParentCallback from "./components/ParentCallback";
import ParentLazyPages from "./components/ParentLazyPages";

function App() {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center mt-2 bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-800 ">Tugas No 1</h1>
          <ParentCount />
        </div>
        <div className="flex flex-col items-center justify-center mt-10 bg-gray-50"></div>
        <h1 className="text-3xl font-bold text-gray-800 ">Tugas No 2</h1>
        <ParentProduct />
        <div className="flex flex-col items-center justify-center mt-10 bg-gray-50"></div>
        <h1 className="text-3xl font-bold text-gray-800 ">Tugas No 3</h1>
        <ParentCallback />
        <div className="flex flex-col items-center justify-center mt-10 bg-gray-50"></div>
        <h1 className="text-3xl font-bold text-gray-800 ">Tugas No 4</h1>
        <ParentLazyPages />
      </div>
    </>
  );
}

export default App;
