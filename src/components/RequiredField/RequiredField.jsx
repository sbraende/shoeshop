import formStyles from "../../styles/FormStyles.module.css";

const RequiredField = () => {
  return (
    <span className={formStyles.requiredField} aria-hidden="true">
      *
    </span>
  );
};

export default RequiredField;
