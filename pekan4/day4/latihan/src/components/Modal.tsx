import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  Popover,
  PopoverBackdrop,
  PopoverClose,
  PopoverPortal,
  PopoverPopup,
  PopoverPositioner,
} from "./animate-ui/primitives/base/popover";

interface ModalHandle {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  children: ReactNode;
}

const Modal = forwardRef<ModalHandle, ModalProps>(({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const positionerStyle = useMemo<React.CSSProperties>(
    () => ({
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "none",
      pointerEvents: "none",
      padding: "2rem 1rem",
    }),
    []
  );

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen} modal="trap-focus">
      <PopoverPortal>
        <PopoverBackdrop className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
        <PopoverPositioner
          positionMethod="fixed"
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 sm:px-6"
          style={positionerStyle}
        >
          <PopoverPopup className="pointer-events-auto relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/10">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <h3 className="text-lg font-semibold text-slate-900">
                This Is Modal{" "}
              </h3>
              <PopoverClose className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="sr-only">Tutup</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </PopoverClose>
            </div>
            <div className="px-6 py-5 text-slate-600">{children}</div>
            <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4">
              <PopoverClose className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Tutup
              </PopoverClose>
            </div>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </Popover>
  );
});

export type { ModalHandle };
export default Modal;
