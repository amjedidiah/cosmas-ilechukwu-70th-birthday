"use client";

import useDialogContext from "@/hooks/use-dialog-context";

export default function FelicitationForm() {
  const { dialog, closeModal, showModal } = useDialogContext();
  if (!showModal) return null;

  return (
    <dialog
      onClick={closeModal}
      ref={dialog}
      className="w-[640px] max-w-full h-full md:rounded-lg"
    >
      <div className="relative h-full">
        <button
          autoFocus
          onClick={closeModal}
          className="absolute top-3 right-5 sm:right-8 text-primary border border-primary rounded-lg px-4 py-1 text-xs uppercase"
        >
          CLOSE form
        </button>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCuz8bwnND8s_yC24JqrbOnrgZAZk0CzmgwM8_NgR98CFOfg/viewform?embedded=true"
          className="w-full h-full py-12"
          title="Dr Cosmas Ilechukwu 70th Birthday Felicitation Form"
        >
          Loading…
        </iframe>
      </div>
    </dialog>
  );
}
