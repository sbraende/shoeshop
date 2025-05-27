import styles from "./Signin.module.css";
import formStyles from "../../styles/FormStyles.Module.css";
import { useState } from "react";
import { auth } from "../../../auth.config";
import { Link, useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import RequiredField from "../../components/RequiredField/RequiredField";

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
    <div className={formStyles.formContainer}>
      <form onSubmit={handleSignin} noValidate className={formStyles.form}>
        <h2 className={formStyles.title}>Sign in</h2>
        <fieldset className={formStyles.fieldset}>
          <div className={formStyles.formGroup}>
            <label htmlFor="email">
              Email address <RequiredField />
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
          <div className={formStyles.formGroup}>
            <label htmlFor="password">
              Password <RequiredField />
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
        <Link className={formStyles.link} to={"/forgotPassword"}>
          Forgot your password?
        </Link>
        <p>
          Not a member?{" "}
          <Link className={formStyles.link} to={"/signup"}>
            Sign up
          </Link>
        </p>
        <button type="submit" className={formStyles.submitButton}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signin;
