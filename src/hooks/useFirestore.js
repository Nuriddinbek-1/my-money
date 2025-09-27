// Firebase
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

// Toaster
import { toast } from "sonner";

export const useFirestore = () => {
  const addDocument = (data) => {
    addDoc(collection(db, "transactions"), data)
      .then(() => toast.success("Successfully added"))
      .catch((error) => toast.error(error));
  };
  const deleteDocument = () => {};
  return { addDocument, deleteDocument };
};
