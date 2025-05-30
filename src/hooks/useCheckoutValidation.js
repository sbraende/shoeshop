import { useState } from "react";
import { emailRegex } from "../utilities/validationUtilities";

const useCheckoutValidation = () => {
  const [errors, setErrors] = useState({});

  const validateCheckout = (values) => {
    let newErrors = {};

    if (!values.email.trim()) {
      newErrors.email = "Email required";
    } else if (!emailRegex.test(values.email)) {
      newErrors.email = "Please provide valid email";
    }

    if (!values.firstName.trim()) {
      newErrors.firstName = "First name required";
    }

    if (!values.lastName.trim()) {
      newErrors.lastName = "Last name required";
    }

    if (!values.address.trim()) {
      newErrors.address = "Address required";
    }

    if (!values.city.trim()) {
      newErrors.city = "City required";
    }

    if (!values.postcode.trim()) {
      newErrors.postcode = "Postcode required";
    } else if (values.postcode.trim().length < 4) {
      newErrors.postcode = "Please provide valid postcode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateCheckout };
};

export default useCheckoutValidation;
