import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/firebase";

import { toast } from "sonner";
import useGlobalContext from "./useGlobalContext";

export const loginUser = () => {
  const context = useGlobalContext();
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        context.dispatch({ type: "LOGIN", payload: user });
        toast.success("Welcome back!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return login;
};
