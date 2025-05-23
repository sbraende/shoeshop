import { useState } from "react";
import styles from "./Signup.module.css";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../auth.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../../firestore.config";
import { useNavigate } from "react-router";

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
    <div className={styles.signup}>
      <h2 className={styles.title}>Sign Up</h2>
      <form onSubmit={handleSignup} noValidate className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            maxLength={80}
            onChange={handleInput}
            value={singupData.firstName}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            maxLength={80}
            onChange={handleInput}
            value={singupData.lastName}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            maxLength={80}
            onChange={handleInput}
            value={singupData.email}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            maxLength={80}
            onChange={handleInput}
            value={singupData.password}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            maxLength={80}
            onChange={handleInput}
            value={singupData.confirmPassword}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Create account
        </button>
      </form>
    </div>
  );
};

export default Signup;
