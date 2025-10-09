import "./App.css";
import ConditionalRendering from "./components/ConditionalRendering";
import Operator from "./components/Operator";
import ProductList from "./components/ProductList";
import RenderingList from "./components/RenderingList";
import SwitchStatement from "./components/SwitchStatement";

function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Tugas No 1
          </h1>
          <ConditionalRendering />
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Tugas No 2
          </h1>
          <Operator />
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Tugas No 3
          </h1>
          <SwitchStatement />
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Tugas No 4
          </h1>
          <RenderingList />
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Tugas No 5
          </h1>
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default App;
