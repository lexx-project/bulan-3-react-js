import "./App.css";
import AbortFetchComponent from "./components/AbortController";
import AxiosFetch from "./components/AxiosFetch";
import DataManipulation from "./components/DataManipulation";
import Fetch from "./components/Fetch";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center my-10">Tugas 1</h1>
        <Fetch />
      </div>
      <hr />
      <div>
        <h1 className="text-3xl font-bold text-center my-10">Tugas 2</h1>
        <AxiosFetch />
      </div>
      <hr />
      <div>
        <h1 className="text-3xl font-bold text-center my-10">
          Tugas 3 Loading Sudah Ada Pada Components Di Atas
        </h1>
      </div>
      <hr />
      <div>
        <h1 className="text-3xl font-bold text-center my-10">
          Tugas 4 Abort Controller
        </h1>
        <AbortFetchComponent />
      </div>
      <hr />
      <div>
        <h1 className="text-3xl font-bold text-center my-10">
          Tugas 5 Data Manipulation
        </h1>
        <DataManipulation />
      </div>
    </>
  );
}

export default App;
