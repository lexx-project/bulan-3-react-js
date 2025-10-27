import "./App.css";
import BasicForm from "./components/BasicForm";
import DynamicArrayForm from "./components/DynamicArrayForm";
import FileUploadForm from "./components/FileUploadForm";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-8 p-10">
        <div className="flex w-full max-w-6xl flex-col gap-6 md:flex-row">
          <div className="flex-1 rounded-lg border p-5 shadow-lg">
            <h1 className="mb-10 text-center text-3xl font-bold">
              Tugas No 1
            </h1>
            <BasicForm />
          </div>
          <div className="flex-1 rounded-lg border p-5 shadow-lg">
            <h1 className="mb-10 text-center text-3xl font-bold">
              Tugas No 2
            </h1>
            <MultiStepForm />
          </div>
        </div>
        <div className="flex w-full max-w-6xl flex-col gap-6 md:flex-row">
          <div className="flex-1 rounded-lg border p-5 shadow-lg">
            <h1 className="mb-10 text-center text-3xl font-bold">
              Tugas No 3
            </h1>
            <DynamicArrayForm />
          </div>
          <div className="flex-1 rounded-lg border p-5 shadow-lg">
            <h1 className="mb-10 text-center text-3xl font-bold">
              Tugas No 4
            </h1>
            <FileUploadForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
