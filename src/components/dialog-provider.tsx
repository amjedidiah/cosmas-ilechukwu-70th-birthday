"use client";

import {
  createContext,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

type DialogContextType = {
  dialog: RefObject<HTMLDialogElement>;
  dialogShowButton: RefObject<HTMLButtonElement>;
  dialogCloseButton: RefObject<HTMLButtonElement>;

  openModal: () => void;
  closeModal: () => void;

  showModal: boolean;
};

const DialogContext = createContext({} as DialogContextType);

export function DialogProvider({ children }: PropsWithChildren) {
  const [showModal, setShowModal] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const dialogShowButton = useRef<HTMLButtonElement>(null);
  const dialogCloseButton = useRef<HTMLButtonElement>(null);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    if (showModal) dialog.current?.showModal();
    else dialog.current?.close();
  }, [showModal]);

  return (
    <DialogContext.Provider
      value={{
        dialog,
        dialogShowButton,
        dialogCloseButton,

        openModal,
        closeModal,

        showModal,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export default DialogContext;
