import { useState } from "react";
import { emailRegex, passwordRegex } from "../utilities/validationUtilities";

const useSignUpValidation = () => {
  const [signUpErrors, setSignUpErrors] = useState({});

  const validateSignUpData = (values) => {
    let newErrors = {};
    // Regex

    if (!values.firstName.trim()) {
      newErrors.firstName = "First name required";
    }

    if (!values.lastName.trim()) {
      newErrors.lastName = "Last name required";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email required";
    } else if (!emailRegex.test(values.email.trim())) {
      newErrors.email = "Please enter a valid email";
    }

    if (!values.password.trim()) {
      newErrors.password = "Password required";
    } else if (values.password.trim().length < 8) {
      newErrors.password = "Password must be minimum 8 characters";
    } else if (!passwordRegex.test(values.password.trim())) {
      newErrors.password =
        "Password must include an uppercase, lowercase, number, and a special character";
    } else if (values.password.trim() !== values.confirmPassword.trim()) {
      newErrors.password = "Passwords do not match";
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!values.confirmPassword.trim()) {
      newErrors.confirmPassword = "Password must be confirmed";
    }

    setSignUpErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return { signUpErrors, validateSignUpData };
};

export default useSignUpValidation;
