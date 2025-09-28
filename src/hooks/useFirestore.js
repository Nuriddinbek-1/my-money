// Firebase
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";

// Toaster
import { toast } from "sonner";

export const useFirestore = () => {
  const addDocument = (data) => {
    addDoc(collection(db, "transactions"), data)
      .then(() => toast.success("Successfully added"))
      .catch((error) => toast.error(error));
  };
  const deleteDocument = (deleteID) => {
    deleteDoc(doc(db, "transactions", deleteID))
      .then(() => toast.success("Successfully deleted"))
      .catch((err) => toast.error(err));
  };
  return { addDocument, deleteDocument };
};
