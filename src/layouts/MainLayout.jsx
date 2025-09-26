// React-router-dom
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </>
  );
}

export default MainLayout;
