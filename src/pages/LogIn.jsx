import { useState } from "react";
import styles from "./Auth.module.css";

function LogIn() {
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Log in</h1>
        <label>
          <span>Email:</span>
          <input type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" />
        </label>
        {loading ? (
          <button className={styles.disabled} disabled>
            Loading...
          </button>
        ) : (
          <button>Log in</button>
        )}
      </form>
    </div>
  );
}

export default LogIn;
