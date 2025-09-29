import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import useGlobalContext from "../hooks/useGlobalContext";
import { logoutUser } from "../hooks/logoutUser";

function Navbar() {
  const logout = logoutUser();
  const { state } = useGlobalContext();
  return (
    <header className={styles.header}>
      <div className="container">
        <Link to={"/"} className={styles.logo}>
          myMoney
        </Link>

        {state.user ? (
          <div className={styles.avatar}>
            <span>Hello Nuriddinbek</span>
            <img src="https://picsum.photos/100" alt="image" />
            <button onClick={logout}>Log out</button>
          </div>
        ) : (
          <nav>
            <NavLink to={"/login"}>Log in</NavLink>
            <NavLink to={"/signup"}>Sign up</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
