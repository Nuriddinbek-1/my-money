import { GlobalContext } from "../context/ContextSupplier";
import { useContext } from "react";

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext need to be used in ContextSupplier");
  }
  return context;
}

export default useGlobalContext;
