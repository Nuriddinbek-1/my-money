import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import { ContextSupplier } from "./context/ContextSupplier.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <ContextSupplier>
      <App />
    </ContextSupplier>
    <Toaster position="bottom-center" />
  </>
);
