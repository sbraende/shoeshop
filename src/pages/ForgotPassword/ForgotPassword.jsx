import styles from "./ForgotPassword.module.css";
import formStyles from "../../styles/FormStyles.Module.css";
import RequiredField from "../../components/RequiredField/RequiredField";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../auth.config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isResetEmailSent, setIsResetEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate

    try {
      sendPasswordResetEmail(auth, email);
      setIsResetEmailSent(true);
    } catch (error) {
      console.error("Could not reset password, ", error);
      alert(
        "Could not reset password, please contact site-admin if persistent"
      );
    }
  };

  useEffect(() => {
    if (!isResetEmailSent) return;

    const timer = setTimeout(() => navigate("/"), 5000);

    return () => clearTimeout(timer);
  }, [isResetEmailSent]);

  return (
    <div className={formStyles.formContainer}>
      <form noValidate className={formStyles.form} onSubmit={handleSubmit}>
        <h2 className={formStyles.title}>Reset password</h2>
        <fieldset className={formStyles.fieldset}>
          <p>Type your email to reset your password</p>
          <div className={formStyles.formGroup}>
            <label htmlFor="email">
              Email address <RequiredField />
            </label>
            <input
              type="email"
              name="email"
              id="email"
              maxLength={80}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </fieldset>
        <button
          type="submit"
          className={formStyles.submitButton}
          disabled={isResetEmailSent}
        >
          Continue
        </button>
        {isResetEmailSent && (
          <p className={formStyles.confirmMessage}>Password reset email sent</p>
        )}
        <Link className={formStyles.link} to={"/signin"}>
          Back to login
        </Link>
      </form>
    </div>
  );
};
export default ForgotPassword;
