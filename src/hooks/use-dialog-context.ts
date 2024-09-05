import DialogContext from "@/components/dialog-provider";
import { useContext } from "react";

export default function useDialogContext() {
  const contextValue = useContext(DialogContext);

  return contextValue;
}
