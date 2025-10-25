import { useRef } from "react";
import "./App.css";
import Modal, { type ModalHandle } from "./components/Modal";
import MouseTracker from "./components/MouseTracker";

function App() {
  const modalRef = useRef<ModalHandle | null>(null);

  const hanldeOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <div>
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
        </Modal>
        <section className="border-t border-slate-200 bg-white py-12">
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
        </section>
      </div>
    </>
  );
}

export default App;
