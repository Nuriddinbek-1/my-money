import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const user = false;
  return (
    <header className={styles.header}>
      <div className="container">
        <Link to={"/"} className={styles.logo}>
          myMoney
        </Link>

        {user ? (
          <div className={styles.avatar}>
            <span>Hello Nuriddinbek</span>
            <img src="https://picsum.photos/100" alt="image" />
            <button>Log out</button>
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
