// React-router-dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./components/ProtectedRoutes";

// Hooks
import useGlobalContext from "./hooks/useGlobalContext";

function App() {
  const { state } = useGlobalContext();
  const user = state.user;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <h1>About</h1>,
        },
        {
          path: "/contact",
          element: "/contact",
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to={"/"} /> : <LogIn />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to={"/"} /> : <SignUp />,
    },
  ]);
  return state.waitAuth ? "" : <RouterProvider router={routes} />;
}

export default App;
