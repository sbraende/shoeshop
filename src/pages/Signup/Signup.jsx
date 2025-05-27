import styles from "./Signup.module.css";
import formStyles from "../../styles/FormStyles.Module.css";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../auth.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../../firestore.config";
import { Link, useNavigate } from "react-router";
import RequiredField from "../../components/RequiredField/RequiredField";

const Signup = () => {
  const navigate = useNavigate();

  const [singupData, setSingupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setSingupData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // TODO: Add validation here

    // Create user
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        singupData.email.trim(),
        singupData.password.trim()
      );

      await setDoc(doc(db, "users", userCredentials.user.uid), {
        firstName: singupData.firstName.trim(),
        lastName: singupData.lastName.trim(),
        email: singupData.email.trim(),
        timestamp: serverTimestamp(),
      });

      console.log("User signed up and Firestore document created.");
    } catch (error) {
      console.error("Sign up failed", error);
      alert("Could not create account, please contact admin");
    }

    // Rest input field
    setSingupData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Navigate to home
    navigate("/");
  };

  return (
    <div className={formStyles.formContainer}>
      <form onSubmit={handleSignup} noValidate className={formStyles.form}>
        <h2 className={formStyles.title}>Sign Up</h2>
        <div className={formStyles.formGroup}>
          <label htmlFor="firstName">
            First name <RequiredField />
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            maxLength={80}
            onChange={handleInput}
            value={singupData.firstName}
          />
        </div>
        <div className={formStyles.formGroup}>
          <label htmlFor="lastName">
            Last Name <RequiredField />
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            maxLength={80}
            onChange={handleInput}
            value={singupData.lastName}
          />
        </div>
        <div className={formStyles.formGroup}>
          <label htmlFor="email">
            Email <RequiredField />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            maxLength={80}
            onChange={handleInput}
            value={singupData.email}
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
            value={singupData.password}
          />
        </div>
        <div className={formStyles.formGroup}>
          <label htmlFor="confirmPassword">
            Confirm password <RequiredField />
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            maxLength={80}
            onChange={handleInput}
            value={singupData.confirmPassword}
          />
        </div>
        <button type="submit" className={formStyles.submitButton}>
          Create account
        </button>
        <Link className={formStyles.link} to={"/signin"}>
          Back to login
        </Link>
      </form>
    </div>
  );
};
export default Signup;
