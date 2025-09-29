import { useState } from "react";
import styles from "./Auth.module.css";
import { loginUser } from "../hooks/loginUser";

function LogIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = loginUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Log in</h1>
        <label>
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
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
