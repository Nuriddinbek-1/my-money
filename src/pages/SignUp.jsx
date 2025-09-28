import { useState } from "react";
import styles from "./Auth.module.css";
import { createUser } from "../hooks/createUser";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = createUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(name, email, password);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Sign up</h1>
        <label>
          <span>Name:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
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
          <button>Sign up</button>
        )}
      </form>
    </div>
  );
}

export default SignUp;
