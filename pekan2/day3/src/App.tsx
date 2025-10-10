import { useState } from "react";
import "./App.css";
import SimpleUseEffect from "./components/SimpleUseEffect";
import UseEffectWithDependencyArray from "./components/UseEffectWithDependencyArray";
import CleanUpFunction from "./components/CleanUpFunction";
import MultipleUseEffect from "./components/MultipleUseEffect";
import DataFetchSimulationwithuseEffect from "./components/ DataFetchSimulationwithuseEffect";

function App() {
  const [userId, setUserId] = useState(1);
  return (
    <>
      <div className="text-center m-2">
        <h1 className="text-3xl font-bold mb-2">Tugas No 1</h1>
        <SimpleUseEffect />
      </div>
      <hr />
      <div className="text-center m-2">
        <h1 className="text-3xl font-bold mb-2">Tugas No 2</h1>
        <UseEffectWithDependencyArray userId={userId} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 cursor-pointer "
          onClick={() => setUserId((prevUserId) => prevUserId + 1)}
        >
          Next User
        </button>
      </div>
      <hr />
      <div className="text-center m-2">
        <h1 className="text-3xl font-bold mb-2">Tugas No 3</h1>
        <CleanUpFunction />
      </div>{" "}
      <hr />
      <div className="text-center m-2">
        <h1 className="text-3xl font-bold mb-2">Tugas No 4</h1>
        <MultipleUseEffect />
      </div>{" "}
      <hr />
      <div className="text-center m-2">
        <h1 className="text-3xl font-bold mb-2">Tugas No 5</h1>
        <DataFetchSimulationwithuseEffect />
      </div>
    </>
  );
}

export default App;
