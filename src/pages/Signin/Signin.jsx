import styles from "./Signin.module.css";
import { useState } from "react";
import { auth } from "../../../auth.config";
import { Link, useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const navigate = useNavigate();

  const [signInData, setsignInData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setsignInData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(auth, signInData.email, signInData.password);
    } catch (error) {
      console.log("Could not sign-in user", error);
      alert("Could not sign in, please contact us if recurring problem");
    }

    // Navigate to home
    navigate("/");
  };

  return (
    <div className={styles.signin}>
      <form onSubmit={handleSignin} noValidate className={styles.form}>
        <h2 className={styles.title}>Sign in</h2>
        <fieldset className={styles.fieldset}>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              Email address{" "}
              <span className={styles.requiredField} aria-hidden="true">
                *
              </span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              maxLength={80}
              onChange={handleInput}
              // value={singupData.firstName}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">
              Password{" "}
              <span className={styles.requiredField} aria-hidden="true">
                *
              </span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              maxLength={80}
              onChange={handleInput}
              // value={singupData.password}
            />
          </div>
        </fieldset>
        <Link>Forgot your password?</Link>
        <p>
          Not a member? <Link to={"/signup"}>Sign up</Link>
        </p>
        <button type="submit" className={styles.submitButton}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signin;
