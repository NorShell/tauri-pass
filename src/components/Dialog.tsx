import { useEffect, useRef } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Dialog({ isOpen, onClose, children }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="
      box-border p-5 w-1/2 h-1/2 bg-zinc-950  text-zinc-50 backdrop:bg-black/80
      border border-dashed border-zinc-900
      ">
      {children}
    </dialog>
  );
};

export default Dialog
