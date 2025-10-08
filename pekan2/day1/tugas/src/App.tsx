import "./App.css";
import ControlledComponents from "./components/ControlledComponents";
import SimpleEventHandler from "./components/SimpleEventHandler";
import SyntheticEvent from "./components/SyntheticEvent";
import UncontrolledComponents from "./components/UncontrolledComponents";
import FormRegister from "./components/FormRegister";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 ">
        <h1 className="text-3xl font-bold ">SOAL NO 1</h1>
        <SimpleEventHandler />
      </div>
      <hr />
      <div className="flex flex-col justify-center items-center mt-10 ">
        <h1 className="text-3xl font-bold ">SOAL NO 2</h1>
        <SyntheticEvent />
      </div>
      <hr />
      <div className="flex flex-col justify-center items-center mt-10 ">
        <h1 className="text-3xl font-bold ">SOAL NO 3</h1>
        <ControlledComponents />
      </div>
      <hr />
      <div className="flex flex-col justify-center items-center mt-10 ">
        <h1 className="text-3xl font-bold ">SOAL NO 4</h1>
        <UncontrolledComponents />
      </div>
      <hr />
      <div className="flex flex-col justify-center items-center mt-10 ">
        <h1 className="text-3xl font-bold ">SOAL NO 5</h1>
        <FormRegister />
      </div>
    </>
  );
}

export default App;
