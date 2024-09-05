"use client";
import useDialogContext from "@/hooks/use-dialog-context";

export default function FelicitationFormButton() {
  const { dialogShowButton, openModal } = useDialogContext();

  return (
    <button
      ref={dialogShowButton}
      onClick={openModal}
      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
    >
      Submit Felicitations
    </button>
  );
}
