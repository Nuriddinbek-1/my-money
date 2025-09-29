import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_DONE":
      return { ...state, waitAuth: false };
    default:
      return state;
  }
};

export const ContextSupplier = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    waitAuth: true,
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
        dispatch({ type: "AUTH_DONE" });
      } else {
      }
    });
  }, []);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
