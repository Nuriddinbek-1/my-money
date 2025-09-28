import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const createUser = () => {
  const signup = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  return signup;
};
