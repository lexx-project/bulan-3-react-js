import "./App.css";
import Modal, { type ModalHandle } from "./components/Modal";
import FocusInput from "./components/FocusInput";
import TaskList from "./components/TaskList";
import { Spinner } from "./components/ui/spinner";
import { useEffect, useRef, useState } from "react";
import MouseTracker from "./components/MouseTracker";

function App() {
  const modalRef = useRef<ModalHandle | null>(null);
  const loadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [tasks, setTasks] = useState<string[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(false);

  const hanldeOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  const handleLoadTasks = () => {
    if (isLoadingTasks) return;

    setIsLoadingTasks(true);
    loadTimeoutRef.current = setTimeout(() => {
      setTasks(["Sholat", "Tidur", "Makan", "Ngoding"]);
      setIsLoadingTasks(false);
    }, 1200);
  };

  const handleResetTasks = () => {
    if (isLoadingTasks) return;
    setTasks([]);
  };

  useEffect(() => {
    return () => {
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center p-10 flex-col">
        <div className="flex items-center flex-col gap-3 p-5">
          <h1 className="text-2xl font-bold mb-9">
            Tugas No 1 (Implementasi useRef untuk DOM Access)
          </h1>
          <FocusInput />
        </div>
        <span className="w-full border"></span>
        <div className="flex items-center flex-col gap-3 p-5">
          <h1 className="text-2xl font-bold mb-9">
            Tugas No 2 (Membuat Portal Modal)
          </h1>
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-12 text-center">
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={hanldeOpenModal}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                ShowModal{" "}
              </button>
              <button
                onClick={handleCloseModal}
                className="inline-flex items-center justify-center rounded-lg border border-indigo-200 bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-sm transition hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                CloseMOdal
              </button>
            </div>
          </div>
          <Modal ref={modalRef}>
            <div className="space-y-3">
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                repellendus eius iste voluptatem fugit asperiores, alias
                consectetur dolor excepturi perferendis ad aspernatur quaerat
                repellat! Voluptates sed impedit fugit cumque? Sunt.
              </p>
              <p className="text-sm text-slate-500">Hello World</p>
            </div>
          </Modal>{" "}
        </div>
        <span className="w-full border"></span>
        <div className="flex items-center flex-col gap-4 p-5">
          <h1 className="text-2xl font-bold">
            Tugas No 3 (Custom HOC Creation )
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleLoadTasks}
              disabled={isLoadingTasks}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoadingTasks ? "Memuat data..." : "Muat Daftar Tugas"}
            </button>
            <button
              onClick={handleResetTasks}
              disabled={isLoadingTasks || tasks.length === 0}
              className="inline-flex items-center justify-center rounded-lg border border-indigo-200 bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-sm transition hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Reset Data
            </button>
          </div>
          {isLoadingTasks ? (
            <div className="flex w-full max-w-xl items-center justify-center gap-3 rounded-lg border border-dashed border-indigo-200 bg-indigo-50 px-5 py-6 text-indigo-600">
              <Spinner className="h-5 w-5" />
              <span className="text-sm font-medium">
                Menyiapkan daftar tugas...
              </span>
            </div>
          ) : (
            <TaskList tasks={tasks} />
          )}
        </div>
        <div className="flex items-center flex-col gap-3 p-5">
          <h1 className="text-2xl font-bold mb-9">
            Tugas No 4(Render Props Pattern Implementation )
          </h1>
          <div className="border-t border-slate-200 bg-white py-12">
            <div className="mx-auto max-w-4xl px-6">
              <h2 className="mb-6 text-center text-2xl font-semibold text-slate-900">
                Mouse Tracker
              </h2>
              <MouseTracker
                render={(mousePosition) => (
                  <p className="text-center text-slate-700">
                    Posisi kursor saat ini: {mousePosition.x}, {mousePosition.y}
                  </p>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
