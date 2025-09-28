import { Navigate } from "react-router-dom";

function ProtectedRoutes({ user, children }) {
  if (user) {
    return children;
  } else {
    <Navigate to={"/signup"} />;
  }
}

export default ProtectedRoutes;
