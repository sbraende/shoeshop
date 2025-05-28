import { useState } from "react";
import { emailRegex } from "../utilities/validationUtilities";

const useForgotPasswordValidation = () => {
  const [forgotPasswordErrors, setForgotPasswordErrors] = useState({});

  const validateForgotPassword = (email) => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email required";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    setForgotPasswordErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { forgotPasswordErrors, validateForgotPassword };
};

export default useForgotPasswordValidation;
