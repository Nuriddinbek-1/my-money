import { useState } from "react";
import styles from "./Auth.module.css";

function SignUp() {
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Sign up</h1>
        <label>
          <span>Name:</span>
          <input type="text" />
        </label>
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
          <button>Sign up</button>
        )}
      </form>
    </div>
  );
}

export default SignUp;
