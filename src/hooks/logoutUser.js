import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "sonner";
import useGlobalContext from "./useGlobalContext";

export const logoutUser = () => {
  const { dispatch } = useGlobalContext();
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        toast.success("See you soon");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return logout;
};
